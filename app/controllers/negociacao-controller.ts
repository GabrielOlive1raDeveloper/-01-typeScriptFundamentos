import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {

    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor :HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {

        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");

    }

    adiciona(): void {
    
        const entidadeNegociacao = this.criaNegociacao();
        this.negociacoes.adiciona(entidadeNegociacao);
        this.negociacoes.lista();
        console.log(this.negociacoes.lista());
        this.limparFormulario();

    }

    criaNegociacao(): Negociacao {

        const exprecaoRegular = /~/g;
        const data = new Date(this.inputData.value.replace(exprecaoRegular, ''));
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseInt(this.inputValor.value);

        return new Negociacao(
            
            data,
            quantidade,
            valor

        );

    }

    limparFormulario(): void{

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        
        this.inputData.focus();

    }


}