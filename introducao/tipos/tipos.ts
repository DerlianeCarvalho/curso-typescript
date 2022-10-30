// string
let nome: string= 'Pedro'
console.log(nome)
// nome = 28

// numbers 
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean =false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 30
console.log(typeof minhaIdade)
//minhaIdade = '30'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Important", 1269, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 15, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
 let carro: any = 'BMW'
 console.log(carro)
 carro = { marca: 'BMW', ano: '2022'}
 console.log(carro)

 // função
  function retornaMeuNome() {
     return nome
  }
 
  console.log(retornaMeuNome())

  function digaOi(): void {
    console.log('Oi')
  }

digaOi()

function multiplcar (numA: number, numB: number): number {
    return numA * numB
}
 console.log(multiplcar(4.5, 9))

 // tipo função
 let calculo: (x: number, y: number) => number
  // calculo = digaOi
  // calculo()

 calculo = multiplcar
 console.log(calculo (4, 9))

 // objetos
 let usuario: { nome: string, idade: number} = {
    nome: 'Pedro',
    idade: 30
 }

 console.log(usuario)
 // usuario = {}

 // usuario = {
 //  name : 'Maria',
 //   age: '29'
 // }



