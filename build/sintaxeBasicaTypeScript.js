"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipos primitivos: boolean, number, string 
let ligado = false;
let nome = "felipe";
let idade = 30;
let altura = 1.9;
// Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto não tipado - sem previsibilidade
let product = {
    name: "felipe",
    cidade: "sp",
    idade: "30",
};
let newProduto = { nome: "tenis", preco: 89.99, unidades: 5 };
/**
 * arrays
 */
//formas de declaração de array
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
//array multi types
let infos = ["gileno", 30, "gileno", 30];
/**
 * Tuplas
 */
//vetor multi type, mas com ordem definida
let boleto = ["agua conta", 199.90, 1313112];
/**
 * Arrays métodos
 */
// MESMAS FUNCOES DO JAVASCRIPT
dados.pop();
/**
 * trabalhando com
 */
//Trabalhando com datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toDateString);
/**
 * funcoes async
 */
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "gileno";
    });
}
;
