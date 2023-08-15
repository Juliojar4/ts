const objetoA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string] : unknown;
} = {
    chaveA: 'valor A',
    chaveB: 'valor B',
    chaveAleatoria: 'valor aletorio'
};

objetoA.chaveB = 'valor B 1.1'
// objetoA.chaveA = 'valor B 1.1'
