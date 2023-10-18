//? Protect pode ser usado em sua classe e nas suas sub-classes "filhas", mas sendo restrito somente a essas condições

export class Empresa {
    public readonly nome: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

    constructor(nome:string, cnpj:string) {
        this.nome = nome;
        this.cnpj = cnpj;
    };

    adicionarColaborador(colaborador:Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void {
        for (const colaboradores of this.colaboradores){
            console.log(`Estes são os colaboradores ${colaboradores.nome}`);   
        }
    }

    showColaboradores(): Colaborador[]{
        console.log(this.colaboradores);
        
        return this.colaboradores
    }
};

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}

};

export class Udemy extends Empresa {
    constructor(){
        super('udemy',"1231233123112")
    }

    pop(): Colaborador | null  {
        const colaborador = this.colaboradores.pop();
        if(colaborador) return colaborador;
        return null;
    };
}

const empressa1 = new Udemy();
const colaborador1 = new  Colaborador('julio', 'cesar');
const colaborador2 = new  Colaborador('julio2', 'cesar3');
const colaborador3 = new  Colaborador('julio3', 'cesar3');
empressa1.adicionarColaborador(colaborador1)
empressa1.adicionarColaborador(colaborador2)
empressa1.adicionarColaborador(colaborador3)

empressa1.pop()
console.log(empressa1);

