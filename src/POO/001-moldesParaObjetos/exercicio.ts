export class Animais {
    constructor(
        public readonly especie : string,
        public readonly cor : string,
        public readonly idade: number,
        public readonly filhotes: Filhote[] = [],
    ){}

    adicionaFilhore(filhote: Filhote) : void {
        this.filhotes?.push(filhote);
    };
};

export class Filhote{
    constructor(
        public readonly genero : string,
        public readonly peso : number,
    ){}
};

const jejonel = new Animais('pato', 'branco', 3);
const laika = new Animais('cachorro', 'preto/branco', 7);
const bolota = new Filhote('macho', 18);
const princesinha = new Filhote('femea', 10);

laika.adicionaFilhore(bolota);
laika.adicionaFilhore(princesinha)

console.log(laika);

