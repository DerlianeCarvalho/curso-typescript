class Data {
    // Público por padroēs
    dia: number
   public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970 ) {
        this.dia = dia
        this.mes = mes
        this.ano = ano

    }

}

const aniversario = new Data(12, 11,1993)
aniversario.dia = 12
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // posso omitir os "()""
casamento.ano = 2021
console.log(casamento)



class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970 ) {
       

    }

}

const aniversarioEsperto = new DataEsperta(12, 11,1993)
aniversarioEsperto.dia = 13
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEperto = new DataEsperta // posso omitir os "()""
casamentoEperto.ano = 2021
console.log(casamentoEperto)


//Desafio Classe Produto

class Produto { constructor(public nome: string, public preco: number, 
    public desconto: number = 0  ) {
       }
       public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}%off)`
       }

       // Desafio Metodo
       precoComDesconto(): string {
        return `${this.nome} custa R$${this.preco - this.desconto * 100}(com 10% off)`
       }

      // ComDesconto(): number {
        //return this.preco * (1 - this.desconto)
      // }

         // public resumo2(): string { 
           // return `${this.nome} custa R$${this.precoComDesconto()} 
          //  (${this.desconto * 100}%off)`
          //}
        
       }


const prod1 = new Produto('Bolsa Tira colo', 139.90)
prod1.desconto = 0.1
console.log(prod1.resumo())
console.log(prod1.precoComDesconto())
//console.log(prod1.resumo2())
