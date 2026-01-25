document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const cepInput = document.getElementById('cep');

    // Carregar dados do Web Storage ao iniciar
    loadFormData();

    cepInput.addEventListener('blur', () => {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('logradouro').value = data.logradouro;
                        document.getElementById('bairro').value = data.bairro;
                        document.getElementById('cidade').value = data.localidade;
                        document.getElementById('estado').value = data.uf;
                    } else {
                        alert('CEP não encontrado.');
                    }
                })
                .catch(error => console.error('Erro ao buscar CEP:', error));
        }
    });

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveFormData();
        alert('Dados salvos com sucesso!');
    });

    function saveFormData() {
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            cep: document.getElementById('cep').value,
            logradouro: document.getElementById('logradouro').value,
            numero: document.getElementById('numero').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
        };
        localStorage.setItem('userFormData', JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = localStorage.getItem('userFormData');
        if (savedData) {
            const formData = JSON.parse(savedData);
            document.getElementById('nome').value = formData.nome || '';
            document.getElementById('email').value = formData.email || '';
            document.getElementById('cep').value = formData.cep || '';
            document.getElementById('logradouro').value = formData.logradouro || '';
            document.getElementById('numero').value = formData.numero || '';
            document.getElementById('bairro').value = formData.bairro || '';
            document.getElementById('cidade').value = formData.cidade || '';
            document.getElementById('estado').value = formData.estado || '';
        }
    }
});
