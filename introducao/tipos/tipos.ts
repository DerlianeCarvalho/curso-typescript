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
   
   usuario = {
     idade: 31,
     nome: 'Maria'
    }
    console.log(usuario)

    // Desafio Aula
    
    // Alias

    type Funcionário = {
      supervisores: string[],
      baterPonto: (horas: number) => string,
} 

     let funcionário: Funcionário = {
    supervisores: ['Flavio', 'Claudia', 'Leandro'],
    baterPonto(horário: number): string {
      if (horário <=8) {
        return 'Ponto normal'
  } else {
    return 'Fora do horário!'}
    }
  }

  let funcionário2:Funcionário = {
  supervisores: ['Ana', 'Tiago', 'Jose'],
  baterPonto(horário: number): string {
    if (horário <=8) {
      return 'Ponto normal'
} else {
  return 'Fora do horário!'}
  }
}
 console.log(funcionário.supervisores)
 console.log(funcionário.baterPonto(8))
 console.log(funcionário.baterPonto(9))

 // Union Types
 let nota: number | string = 10
 console.log(`Minha nota é ${nota}!`)
 nota = '8'
 console.log(`Minha nota é ${nota}!`)
// nota = true

// Chegando tipos
let valor = 30

if (typeof valor === "number") {
  console.log("É um valor number!")
}else{
  console.log(typeof valor)
}

// Never
function falha(msg:string): never{
  throw new Error(msg)
}

const produto = {
  nome: 'Bolacha',
  preco: 2.50,
  validarProduto() {
    if(!this.nome || this.nome.trim(). length == 0) {
      falha('Precisa ter um nome')
    }
    if(this.preco <= 0) {
      falha('Preco invalido!')
    }
  }

}
produto.validarProduto

// Null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Felipe',
  tel1: '987264534',
  tel2: 'null'

}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)
