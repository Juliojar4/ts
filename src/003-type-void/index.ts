function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoas = {
    nome: 'luiz',
    sobrenome: 'Otavio',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('luiz', 'marcos', 'da', 'silva')
pessoas.exibirNome()
