

type Idade = number;
type Pessoa = {
    nome: string,
    idade: Idade,
    salario: number,
    corPreferida?: string,
};

type CorRGB = 'Vermelho'| 'Verde'| 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoas02:Pessoa = {
    idade: 30,
    nome: 'luiz',
    salario: 2031
};

function setCorPreferida (pessoas02: Pessoa, cor: CorPreferida) : Pessoa {
    return {...pessoas02, corPreferida: cor};
};

console.log(setCorPreferida(pessoas02, 'Azul'));
console.log(pessoas02);
