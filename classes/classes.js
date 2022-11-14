"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(12, 11, 1993);
aniversario.dia = 12;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()""
casamento.ano = 2021;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(12, 11, 1993);
aniversarioEsperto.dia = 13;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEperto = new DataEsperta; // posso omitir os "()""
casamentoEperto.ano = 2021;
console.log(casamentoEperto);
//Desafio Classe Produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}%off)`;
    }
    // Desafio Metodo
    precoComDesconto() {
        return `${this.nome} custa R$${this.preco - this.desconto * 100}(com 10% off)`;
    }
}
const prod1 = new Produto('Bolsa Tira colo', 139.90);
prod1.desconto = 0.1;
console.log(prod1.resumo());
console.log(prod1.precoComDesconto());
//console.log(prod1.resumo2())
//# sourceMappingURL=classes.js.map