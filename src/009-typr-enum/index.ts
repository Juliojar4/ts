enum Cores {
    VERMELHO = 3,
    AZUL = 1,
    AMERELO = 5,
}

enum Cores {
    VERDE = 100,
    ROXO = 90,
    ROSA = 2,
}


function escolhaCor(cor: Cores) : void {
    console.log(Cores[cor]);
}

escolhaCor(Cores.AMERELO)