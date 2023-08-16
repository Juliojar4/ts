let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

function criaPessoa(
    fistName: string,
    lastName?: string
    ): {
        fistName: string,
        lastName?: string,
    }{
        return {
            fistName,
            lastName
        }
    }

function squareOf(x: any) {
    if(typeof x === 'number') return x * x;
    return null;
}

const squreOfString = squareOf('2')

if(squreOfString === null) {
    console.log('conta invalida');
} else {
    console.log(squreOfString * 100);
}


