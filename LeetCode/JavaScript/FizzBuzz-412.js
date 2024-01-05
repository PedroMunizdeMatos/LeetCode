var respostaCinco
var respostaTres

function ehDivisivelPorTres(n) {
  return respostaTres = n % 3 ? false:true
};
function ehDivisivelPorCinco(n){
  return respostaCinco =  n % 5 ? false:true
};
function ehDivisivelPorCincoETres(n){
  ehDivisivelPorCinco(n)
  ehDivisivelPorTres(n)
  return respostaCinco && respostaTres === true
};

function fizzBuzz(n){
  if(ehDivisivelPorCincoETres(n)){
    console.log("FizzBuzz")
  }else if(ehDivisivelPorTres(n)){
    console.log("Fizz")
  }else if(ehDivisivelPorCinco(n)){
    console.log("Buzz")
  }else{
    console.log(n)
  } return console.log(`é divisivel por 3? ${respostaTres === true? "Sim.":"Não."} E por 5? ${respostaCinco === true? "Sim.":"Não."}`)
}