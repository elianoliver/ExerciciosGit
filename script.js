document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.getElementById('clientForm');
    const clientList = document.getElementById('clientList');
    
    // ATENÇÃO: Substitua a URL abaixo pela URL da sua API do CrudCrud
    const apiUrl = "https://crudcrud.com/api/23ed5dd9a52d40489989704a847411e9";

    // Função para buscar e exibir os clientes
    async function fetchClients() {
        try {
            const response = await fetch(`${apiUrl}/clients`);
            const clients = await response.json();
            clientList.innerHTML = '';
            
            clients.forEach(client => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${client.nome} - ${client.email}</span>
                    <button class="delete-btn" data-id="${client._id}">Excluir</button>
                `;
                clientList.appendChild(li);
            });
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    }

    // Função para cadastrar um novo cliente
    async function addClient(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        try {
            await fetch(`${apiUrl}/clients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email }),
            });
            clientForm.reset();
            fetchClients(); // Atualiza a lista após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    }

    // Função para excluir um cliente
    async function deleteClient(event) {
        if (event.target.classList.contains('delete-btn')) {
            const clientId = event.target.dataset.id;
            try {
                await fetch(`${apiUrl}/${clientId}`, {
                    method: 'DELETE',
                });
                fetchClients(); // Atualiza a lista após a exclusão
            } catch (error) {
                console.error('Erro ao excluir cliente:', error);
            }
        }
    }

    // Event Listeners
    clientForm.addEventListener('submit', addClient);
    clientList.addEventListener('click', deleteClient);

    // Carrega os clientes ao iniciar a página
    fetchClients();
});
