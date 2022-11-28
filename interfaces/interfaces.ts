interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá,' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa = {
    nome: 'Pedro',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: 'Joana', idade: 27, altura: 1.57})
