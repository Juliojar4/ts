export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ){}

    getNomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    };

    getIdade(): number{
        return this.idade;
    };

    getCpf(): string {
        return this.cpf;
    };
};

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ){
        super(nome,sobrenome,idade,cpf)
    }
    getNomeCompleto(): string {
        console.log('fiz algo antes');        
        return super.getNomeCompleto()
    };
};

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return `Isso vem do cliente ${this.nome + " " + this.sobrenome}`;
    };
};

const pessoa = new Pessoa('julio1','cesa1r',181,'443.153.368-071');
const aluno = new Aluno('julio2','cesa2r',182,'443.153.368-207', '001');
const cliente = new Cliente('julio3','cesar3',183,'443.153.36812-03');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
