//* Mais seguro que o Any pois temos que fazer verificações

let y: unknown;
y = 100
y = 'teste'
y = 90
y = 'Julio'

const g = 800

if (typeof y === 'number') console.log(g + y);
