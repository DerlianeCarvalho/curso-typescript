// let & const
let seraQuePode = '?' 
console.log(seraQuePode)

let estaFrio = true
  if(estaFrio) {
    let acao = 'Colocar casaco!'
  console.log(acao)
  }

  const cpf: string = '543.678.908-1'
// cpf= '345.654.456-4''
console.log(cpf)

function revelar(){
  var segredo = 'interno'
  // const.segredo = 'interno'
  // let.segredo = 'interno'
  console.log(segredo)
}
revelar()
var segredo = 'externo!'
console.log(segredo)

// Arrouw Function
const somar = function(n1: number, n2: number):  number {
  return n1 + n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2:number) => n1 -n2
console.log(subtrair(2,3))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) => console.log("Olá" + pessoa)
falarCom('Jose')

// This
 
//function normalComThis() {
 // console.log(this)
//}
//normalComThis()

//const normalComThisEpecial = normalComThis.bind({nome: 'Anne'})
//normalComThisEpecial()

// This??
//const arrowComThis = () => console.log(this)
//arrowComThis()

// Paramêtro Padrão
function contagemRegressiva(inicio: number = 3): void {
  console.log(inicio)
  while(inicio > 0) {
    inicio--
    console.log(inicio)
  }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(8)

// Rest & Spread
const numbers =[1, 3, 5, 87, -4]
console.log(Math.max(...numbers))

const turmaA: string[] = [ 'Pedro', 'Joaquina', 'Isabel']
const turmaC: string[] = 
['Luan', 'Deise', 'Jefferson', ... turmaA]
console.log(turmaC)

function retornarArray(...args: number[]): number[]{
  return args
}

const numeros = retornarArray(1,2,3,4,5)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
 // console.log(Array.isArray(params))
  console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)

const caracteristicas = [ 'Motor Zetec 1.8', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

const [motor, ano] = caracteristicas

console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
  nome: 'SSD 480',
  preco: 200,
  caracteristicas: {
    w: 'Importado'
  }

}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const {nome: n, preco: p, caracteristicas: {w} } = item
console.log(n)
console.log(p)
console.log(w)

// Templates Strings

const usuarioID = 'SuporteCod3r'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas'+ usuarioID +
// 'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9? '+9': notificacoes}
`

console.log(boasVindas)
console.log(`${(1 + 1 ) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Desafio 
// exercicio 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// exercicio 2
const dizerOla = function (nome: string = 'Pessoa'): void {
   console.log('Olá, ' + nome)
}

dizerOla()
dizerOla('Anna')

// exercicio 3
const nums = [-3, 33, 38,5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// exercicio 4
const array = [55, 20]
// Adicionar todos os elementos de "nums" em array
array.push(...nums)
console.log(array)

// exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)

// exercio 6
const cientista = { primeiroNome: 'Will', experiencia: 12}
const { primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)

// Callback

//function esperar3s(callback: (dado: string) => void) {
  //setTimeout(() => {
  //  callback('3s depois...')
 // }, 3000)
//}

// esperar3s(function(resultado: string){
//   console.log(resultado)
// })

// function esperar3sPromise() {
//   return new Promise(( resolve: any) => {
//     setTimeout(() => {
//         resolve('3s depois promise...')
//     }, 3000)
//   })
// }

// esperar3sPromise()
//     .then(dado => console.log(dado))