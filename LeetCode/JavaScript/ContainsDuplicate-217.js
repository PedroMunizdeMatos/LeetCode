function geraRandomicoArbitrario(min, max){
  return Math.floor(Math.random()*(max-min) + min)
}

var n = geraRandomicoArbitrario(3, 16);

var array = Array.from({length:n}, () => geraRandomicoArbitrario(0,15));

console.log(array);

let numeros = {};
let temRepetido = false;

for (let i = 0; i < array.length; i++) {
  if (numeros[array[i]]) {
    temRepetido = true;
    break;
  }
  numeros[array[i]] = true;
}

temRepetido? console.log("O array possui números repetidos."):console.log("O array não possui números repetidos.");



