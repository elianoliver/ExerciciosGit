class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class GerenciadorClientes {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async buscarClientes() {
        try {
            const response = await fetch(`${this.apiUrl}/clients`);
            const clients = await response.json();
            return clients.map(client => new Cliente(client.nome, client.email, client._id));
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            return [];
        }
    }

    async adicionarCliente(cliente) {
        try {
            await fetch(`${this.apiUrl}/clients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cliente),
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    }

    async excluirCliente(id) {
        try {
            await fetch(`${this.apiUrl}/clients/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    }
}

export { Cliente, GerenciadorClientes };
