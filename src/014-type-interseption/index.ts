import { log } from "console";

type temNome = {nome: string};
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa01 = temNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intercesao = AB & AC & AD; //Pega a intercesao dos elementos 'A' no caso 

const pessoa03: Pessoa01 = {
    nome: 'Julio',
    sobrenome: 'Jara',
    idade: 14,
} // tem que ter obrigatoriamente todos os campos 
let interfaces: Intercesao

console.log(pessoa03);