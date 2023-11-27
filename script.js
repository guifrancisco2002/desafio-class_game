class hero{

    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }


    attack(atk){
        console.log(`O personagem ${this.name} tem idade de ${this.age} anos, com tipo ${this.type} ataca usando ${atk}`)
    }

}

let heroGuerreiro = new hero("Kratos", 115, "Guerreiro")
heroGuerreiro.attack("Espada")

let heroMago = new hero("Dracula", 200, "Mago")
heroMago.attack("Magia")

let heroMonge = new hero("Lee Sin", 30, "Monge")
heroMonge.attack("Artes Marciais")

let heroNinja = new hero("Kakashi", 46, "Ninja")
heroNinja.attack("Shuriken")