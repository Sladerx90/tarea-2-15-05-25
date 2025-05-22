const numeros = [12, 34 ,2, 4, 19];
let numeromaximo = numeros [0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeromaximo){
        numeromaximo = numeros[i];
    }
}

console.log("El número máximo en el arreglo es:", numeromaximo);