const apiUrl = "https://crudcrud.com/api/23ed5dd9a52d40489989704a847411e9";

function limparFormulario(form) {
    form.reset();
}

function exibirClientes(clientes, container) {
    container.innerHTML = '';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${cliente.nome} - ${cliente.email}</span>
            <button class="delete-btn" data-id="${cliente._id}">Excluir</button>
        `;
        container.appendChild(li);
    });
}

export { apiUrl, limparFormulario, exibirClientes };
