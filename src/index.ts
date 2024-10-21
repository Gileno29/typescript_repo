/**
 * type Hero={
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

*/
function minLength(length: number): any{

    return(target: any, key: string) =>{
        
        console.log(target)

        let value: string;
        const getter = function() {
            return value;
        };

        const setter = function(newValue: string) {
            if (newValue.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            value = newValue;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}

class Api2{
    @minLength(3)
    name: string;
    constructor(name: string){
        this.name=name;
    }
    
}


try{
    const api2 = new Api2("shold be work");
    console.log(api2.name)
} catch (e) {
    console.error(e);
}

