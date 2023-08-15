/* eslint-disable */
let names:string = 'luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbolo');

//array

let ArrayDeNumeros: Array<number> = [1,2,3]
let ArrayDeNumeros2: number[] = [1,2,3]

let ArraydeDeString: Array<string> = ['a','b','c']
let ArraydeDeString2: string[] = ['a','b','c']


let pessoa: {nome: string, idade:number, adulto?: boolean} = { //* o ? significa opcional
    idade:30,
    nome:'luiz'
};

function soma(x: number, y:number){
    return x + y
};

const soma2: (x:number, y:number) => number = (x, y) => x + y;
