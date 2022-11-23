// Exercício 1 - Classe
class Moto {

    constructor(public nome: string, private velocidade: number = 0){}
    velocidadeAtual(){
        return this.velocidade
    }

 
    buzinar() {
        console.log('Toooooooooot!')
    }
 
    acelerar(delta: number) {
        this.velocidade = this.velocidade + delta
    }
}
 
const moto = new Moto('Ducati')
console.log(moto.nome)
moto.buzinar()
console.log(moto.velocidadeAtual())
moto.acelerar(30)
console.log(moto.velocidadeAtual())
 
// Exercício 2 - Herança
class Objeto2D  {

    constructor(public base: number, public altura: number){}
}
 
class Retangulo extends Objeto2D{
    constructor(base: number, altura: number){
        super(base, altura)       
    }
 area(){
    return this.base * this.altura
 }   

}
const retangulo = new Retangulo(5,7)
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario  {
   private _primeiroNome: string = ''
  
    get primeiroNome() {
        return this._primeiroNome
    }
    set primeiroNome (valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

 const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)