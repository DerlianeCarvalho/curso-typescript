"use strict";
function saudarComOla(pessoa) {
    console.log('Olá,' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Pedro',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Joana', idade: 27, altura: 1.57 });
//# sourceMappingURL=interfaces.js.map