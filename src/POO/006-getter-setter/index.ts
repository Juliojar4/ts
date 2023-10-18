//* Quando for usado o seter chamaremos da seguinte forma "pessoa.cpf = '123.456.678-07"
//* Quando for usado o get, apenas chamos normalmente , pois , naturalmente esvamo fazendo um get 

export class Pessoa{
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ){
        this.cpf = _cpf
    }

    set cpf(cpf:string){
        this._cpf = cpf
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '')
    };
};

const pessoa = new Pessoa('julio','jara',12,'123.456.678-07');
pessoa.cpf = '123.456.678-07'
console.log(pessoa.cpf)

