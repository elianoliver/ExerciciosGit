class Parquimetro {

	#tarifas

	constructor() {
		// Elements
		this.formElement = document.querySelector("#formParquimetro")
		this.formElement.addEventListener("submit",this.handleSubmit.bind(this))
		this.inputElement = document.querySelector("#inputElement");
		this.feedbackElement = document.querySelector("#feedbackElement");
		// Tarifas
		this.#tarifas = [
			{ valorMin: 1.0, tempo: 30 },
			{ valorMin: 1.75, tempo: 60 },
			{ valorMin: 3.0, tempo: 120 },
		];
	}

	handleSubmit(event){
		event.preventDefault()
		this.handleCalculo()
	}

	handleCalculo() {
		const valorInserido = parseFloat(this.inputElement.value);

		if (isNaN(valorInserido) || valorInserido <= 0) {
			this.exibirMensagem("Por favor, insira um valor válido.");
			return;
		}

		let tempo = 0;
		let troco = 0;
		let mensagem = "";

		if (valorInserido < this.#tarifas[0].valorMin) {
			mensagem = "Valor insuficiente.";
		} else {
			let tarifaEncontrada = null;
			for (let i = this.#tarifas.length - 1; i >= 0; i--) {
				const tarifa = this.#tarifas[i];
				if (valorInserido >= tarifa.valorMin) {
					tarifaEncontrada = tarifa;
					break; 
				}
			}

			if (tarifaEncontrada) {
				tempo = tarifaEncontrada.tempo;
				troco = valorInserido - tarifaEncontrada.valorMin;
				mensagem = `Tempo de permanência: ${tempo} minutos.`;
				if (troco > 0) {
					mensagem += ` Troco: R$ ${troco.toFixed(2)}.`;
				}
			}
		}

		this.exibirMensagem(mensagem);
	}

	exibirMensagem(mensagem) {
		this.feedbackElement.textContent = mensagem;
	}
}

let park1 = new Parquimetro();
