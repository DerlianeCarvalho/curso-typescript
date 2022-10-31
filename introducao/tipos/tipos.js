"use strict";
// string
let nome = 'Pedro';
console.log(nome);
// nome = 28
// numbers 
let idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 30;
console.log(typeof minhaIdade);
//minhaIdade = '30'
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Important", 1269, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 15] = "Azul";
    Cor[Cor["Laranja"] = 16] = "Laranja";
    Cor[Cor["Amarelo"] = 17] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2022' };
console.log(carro);
// função
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplcar(numA, numB) {
    return numA * numB;
}
console.log(multiplcar(4.5, 9));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplcar;
console.log(calculo(4, 9));
// objetos
let usuario = {
    nome: 'Pedro',
    idade: 30
};
console.log(usuario);
// usuario = {}
// usuario = {
//  name : 'Maria',
//   age: '29'
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
// Desafio Aula
let funcionario = {};
console.log(funcionario);
