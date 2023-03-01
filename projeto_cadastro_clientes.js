class Cliente{
	// Construtor da classe Cliente.
	constructor(pNome, pEndereco){
		this.Nome = pNome;
		this.Endereco = pEndereco;
	}
	// Início dos métodos setters e getters da classe Cliente.
	get Nome(){
		return this.nome;
	}
	set Nome(pNome){
		this.nome = pNome;		
	}
	get Endereco(){
		return this.endereco;
	}
	set Endereco(pEndereco){
		this.endereco = pEndereco;
	}
	// Fim dos métodos setters e getters.
}

class Fisica extends Cliente {
	// Construtor da classe Fisica.
	constructor(pNome, pEndereco, pCPF, pAniversario){
		super(pNome, pEndereco, pCPF);
		this.CPF = pCPF;
		this.Aniversario = pAniversario;
	}
	// Início dos métodos setters e getters da classe Fisica.
	get CPF(){
		return this.cpf;
	}
	set CPF(pCPF){
		this.cpf = pCPF;
	}
	get Aniversario(){
		return this.aniversario;
	}
	set Aniversario(pAniversario){
		this.aniversario = pAniversario;
	}
	// Fim dos métodos setters e getters.
}

 class Juridica extends Cliente {
	constructor(pNome, pEndereco, pCNPJ, pRazaoSocial){
		super(pNome, pEndereco, pCNPJ);
		this.CNPJ = pCNPJ;
		this.RazaoSocial = pRazaoSocial;
	}
	// Início dos métodos setters e getters da classe Juridica.
	get CNPJ(){
		return this.cnpj;
	}
	set CNPJ(pCNPJ){
		this.cnpj = pCNPJ;
	}
	get RazaoSocial(){
		return this.razaoSocial;
	}
	set RazaoSocial(pRazaoSocial){
		this.razaoSocial = pRazaoSocial;
	}
	// Fim dos métodos setters e getters.	
}


/*
	Instância de um objeto da classe Fisica chamado objeto_fisica.
	Os quatro parâmetros necessários (pNome, pEndereco, pCPF, pAniversario), são enviados via método construtor.
*/
var objeto_fisica = new Fisica('Cliente 1', 'Rua ABC 123', '001.002.003-04', '01/01/1995');
// Impressão do valor que está alocado aos atributos Nome, Endereco, CPF e Aniversario.
console.log("+-----------------------------+");
console.log("Cliente: "+ objeto_fisica.Nome +"\nEndereço: "+ objeto_fisica.Endereco +"\nCPF: "+ objeto_fisica.CPF +"\nData de nascimento: "+ objeto_fisica.Aniversario);
console.log("+-----------------------------+");

/*
	Instância de um objeto da classe Juridica chamado objeto_juridica.
	Os quatro parâmetros necessários (pNome, pEndereco, pCNPJ, pRazaoSocial), são enviados via método construtor.
*/
var objeto_juridica = new Juridica('Cliente 2', 'Rua DEF 456', '01.234.567/0001-99', 'POO Sistemas Ltda');
// Impressão do valor que está alocado aos atributos Nome, Endereco, CPF e Aniversario.
console.log("+-----------------------------+");
console.log("Cliente: "+ objeto_juridica.Nome +"\nEndereço: "+ objeto_juridica.Endereco +"\nCNPJ: "+ objeto_juridica.CNPJ +"\nRazão Social: "+ objeto_juridica.RazaoSocial);
console.log("+-----------------------------+");

//Teste