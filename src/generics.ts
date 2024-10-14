/**
 * Generics
 */

function concatArray<T>(...itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3])

const stringArray = concatArray<string[]>(["felipe", "goku"],["vegeta"]);

console.log(numArray)
console.log(stringArray)