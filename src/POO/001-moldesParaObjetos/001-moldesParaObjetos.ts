//? readonly seria similar ao const , ou seu, não posso mudar ele diretamente 

export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

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
};

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ){}

};

const empressa1 = new Empresa('julio','12312331232');
const colaborador1 = new  Colaborador('julio', 'cesar');
const colaborador2 = new  Colaborador('julio2', 'cesar3');
const colaborador3 = new  Colaborador('julio3', 'cesar3');
empressa1.adicionarColaborador(colaborador1)
empressa1.adicionarColaborador(colaborador2)
empressa1.adicionarColaborador(colaborador3)
empressa1.mostrarColaboradores()
console.log(empressa1);
