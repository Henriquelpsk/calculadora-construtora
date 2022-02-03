function Calculadora() {
	this.display = document.querySelector('.displayText');

	this.inicio = () => {
		this.display.focus();
		this.cliqueBotao();
		this.pressionaTecla();
	};

	this.pressionaTecla = () => {
		document.addEventListener('keyup', event => {
			if (event.key === 'Enter') {
				this.equal();
			}
		})
	}

	this.cliqueBotao = () => {
		document.addEventListener('click', event => {
			const el = event.target;

			if (el.classList.contains('btn-num')) this.btnTela(el);
			if (el.classList.contains('btn-clear')) this.limpaTela();
			if (el.classList.contains('btn-del')) this.delete();
			if (el.classList.contains('btn-eq')) this.equal();
			this.display.focus();
		});
	};

	this.btnTela = valor => this.display.value += valor.innerText;
	this.limpaTela = () => this.display.value = '';
	this.delete = () => this.display.value = this.display.value.slice(0, -1);
	this.equal = () => {
		try {
			const conta = eval(this.display.value);
			
			if (conta === 0) {
				this.display = conta;
			}
			if (!conta) {
				alert('Conta Invalida');
				return;
			}
			this.display.value = conta;
		} catch (error) {
			alert('Conta Invalida');
		}
	}


};
const calculadora1 = new Calculadora;
calculadora1.inicio();
