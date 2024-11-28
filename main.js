class Usuario{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade){
        this.idade = idade;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }
}