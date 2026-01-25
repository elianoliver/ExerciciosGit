import { Cliente, GerenciadorClientes } from './classes.js';
import { apiUrl, exibirClientes, limparFormulario } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.getElementById('clientForm');
    const clientList = document.getElementById('clientList');
    const gerenciador = new GerenciadorClientes(apiUrl);

    async function carregarEExibirClientes() {
        const clientes = await gerenciador.buscarClientes();
        exibirClientes(clientes, clientList);
    }

    async function adicionarNovoCliente(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (nome && email) {
            const novoCliente = new Cliente(nome, email);
            await gerenciador.adicionarCliente(novoCliente);
            limparFormulario(clientForm);
            carregarEExibirClientes();
        }
    }

    async function excluirCliente(event) {
        if (event.target.classList.contains('delete-btn')) {
            const clienteId = event.target.dataset.id;
            // Precisamos buscar o cliente para obter o _id correto para a API
            const clientes = await gerenciador.buscarClientes();
            const clienteParaExcluir = clientes.find(c => c._id === clienteId);
            if(clienteParaExcluir) {
                 await gerenciador.excluirCliente(clienteParaExcluir._id);
                 carregarEExibirClientes();
            } else {
                // Fallback para o caso de o ID no botão já ser o correto
                await gerenciador.excluirCliente(clienteId);
                carregarEExibirClientes();
            }
        }
    }

    clientForm.addEventListener('submit', adicionarNovoCliente);
    clientList.addEventListener('click', excluirCliente);

    carregarEExibirClientes();
});
