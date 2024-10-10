type Hero={
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: Hero){
    console.log(pessoa)
}



console.log("ola mundo");

printaObjeto({name: "bruce wayne",
              vulgo: "Batman"
})