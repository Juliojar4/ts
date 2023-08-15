function multiplicaArgs(...args: Array<number>) : number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

function concatenaString(...args: string[]): string {
    return args.reduce((ac,valor) => ac + valor) ;
}


function toUppersCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase()) ;
}

const result = multiplicaArgs(1,2,3)
const concatena = concatenaString('eu', 'concatenei', 'tudo')
const upper = toUppersCase('estou', 'em', 'upper')

console.log(result)
console.log(concatena)
console.log(upper)