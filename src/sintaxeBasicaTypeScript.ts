// tipos primitivos: boolean, number, string 
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;
let altura: number = 1.9


// Tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined= undefined;


//Tipos abrangentes: any, void
let retorno:void ;
let retornoView:any = false;


//objeto não tipado - sem previsibilidade
let product:object={
    name:"felipe",
    cidade:"sp",
    idade:"30",
}

//struct tipo golang - objeto tipado - com previsibilidade
type ProdutoLoja={
    nome:string;
    preco:number;
    unidades: number;
};

let newProduto: ProdutoLoja={nome:"tenis", preco:89.99, unidades:5};

/**
 * arrays
 */

//formas de declaração de array
let dados: string[]=["felipe","ana", "adriana"]
let dados2: Array<string>=["felipe","ana", "adriana"]

//array multi types
let infos: (string | number)[]=["gileno", 30, "gileno", 30]

/**
 * Tuplas
 */

//vetor multi type, mas com ordem definida

let boleto:[string, number, number]=["agua conta", 199.90, 1313112]

/**
 * Arrays métodos
 */

// MESMAS FUNCOES DO JAVASCRIPT
dados.pop()


/**
 * trabalhando com
 */

//Trabalhando com datas
 let aniversario:Date = new Date("2022-12-01 05:00")

 console.log(aniversario.toDateString)



 /**
  * funcoes async
  */

 async function getDatabase(id:number): Promise<string>{
    return "gileno"
 }


 /**
  * interfaces
  */

 interface robot{
    id: number;
    name: string;
 };
 