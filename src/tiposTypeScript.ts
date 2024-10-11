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