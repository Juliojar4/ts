const pessoas01 = {
    nome: 'Ulias' as const, //? Não pode ser mudado 
    sobrenome: 'Rada'
};

function Cores01(cor: 'Vermelho' | 'Azul' | 'Cinza' ) : string { //? Faz uma especie de validação tendo um range limitado
    return cor
}

console.log(Cores01('Vermelho'));
console.log(Cores01('Azul'));
//! console.log(Cores01('Petro'));
