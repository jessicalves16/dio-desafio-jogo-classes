//Desafio escrevendo as classes de um Jogo

//Classe representando o Herói
//tipo (ex: guerreiro, mago, monge, ninja )

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


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

        console.log(`O ${this.tipo} de nome ${this.nome} que possui ${this.idade} anos de experiência, atacou o oponente usando ${ataque}`)
    }
        
    }

    let heroiJess = new Heroi("Jéssica", 26, "Mago")
    heroiJess.atacar()

    let heroiRafa = new Heroi("Rafa", 27, "Guerreiro")
    heroiRafa.atacar()

    let heroiPitoco = new Heroi("Jiraya", 55, "Monge")
    heroiPitoco.atacar()

    let heroiSasuke = new Heroi("Sasuke", 35, "Ninja")
    heroiSasuke.atacar()
   


