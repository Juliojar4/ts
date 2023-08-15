const dadosCliente1: readonly [number, string] = [1,'luiz'];
const dadosCliente2: [number, string, string] = [1, 'luiz', 'gustavo'];
const dadosCliente3: [number, string, string?] = [1, 'luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'luiz', 'paulo', 'matheus', 'angelo']

dadosCliente2[0] = 100;
dadosCliente2[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
