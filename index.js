//Desafio escrevendo as classes de um Jogo

//Classe representando o Herói

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

//Método atacar + tipos de ataque

    atacar(){
        let ataque;

        switch (this.tipo){
            case 'Mago':
                ataque = "magia";
                break;

            case 'Guerreiro':
                ataque = "espada";
                break;

            case 'Monge':
                ataque = "artes marciais";
                break;

            case 'Ninja':
                ataque = "shuriken";
                break;
        }
//Exibir mensagem

        console.log(`O ${this.tipo} de nome ${this.nome} que possui ${this.idade} anos de experiência, atacou o oponente usando ${ataque}`)
    }
        
    }

// Instanciar classe Heroi

    let heroiJess = new Heroi("Jéssica", 26, "Mago")
    heroiJess.atacar()

    let heroiRafa = new Heroi("Rafa", 27, "Guerreiro")
    heroiRafa.atacar()

    let heroiPitoco = new Heroi("Jiraya", 55, "Monge")
    heroiPitoco.atacar()

    let heroiSasuke = new Heroi("Sasuke", 35, "Ninja")
    heroiSasuke.atacar()
   


