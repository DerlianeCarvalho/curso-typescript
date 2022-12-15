"use strict";
function saudarComOla(pessoa) {
    console.log('Olá,' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = ' Joana ';
}
const pessoa = {
    nome: 'Pedro',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é'
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Joana', idade: 27, altura: 1.57})
pessoa.saudar('Neymar');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimacompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é '
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimacompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 8));
console.log(Math.pow(3, 8));
console.log(3 ** 8);
//# sourceMappingURL=interfaces.js.map