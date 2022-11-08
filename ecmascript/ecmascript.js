"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar casaco!';
    console.log(acao);
}
const cpf = '543.678.908-1';
// cpf= '345.654.456-4''
console.log(cpf);
function revelar() {
    var segredo = 'interno';
    // const.segredo = 'interno'
    // let.segredo = 'interno'
    console.log(segredo);
}
revelar();
var segredo = 'externo!';
console.log(segredo);
// Arrouw Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Olá" + pessoa);
falarCom('Jose');
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
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(8);
// Rest & Spread
const numbers = [1, 3, 5, 87, -4];
console.log(Math.max(...numbers));
const turmaA = ['Pedro', 'Joaquina', 'Isabel'];
const turmaC = ['Luan', 'Deise', 'Jefferson', ...turmaA];
console.log(turmaC);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Templates Strings
const usuarioID = 'SuporteCod3r';
const notificacoes = '9';
// const boasVindas = 'Boas vindas'+ usuarioID +
// 'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// Desafio 
// exercicio 1
let dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
// exercicio 2
let dizerOla = function (nome) {
    if (nome === undefined) {
        nome = 'Pessoa';
    }
    console.log('Olá, ' + nome);
};
dizerOla('Pessoa');
dizerOla('Anna');
// exercicio 3
var nums;
//# sourceMappingURL=ecmascript.js.map