//Exercício 1 => O valor da variável soma será 91

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);


//---------------------------------------


//Exercício 2

function confereSequenciaFibonacci(numeroEntrada) {
  let sequencia = [0, 1];

  while (numeroEntrada > sequencia[sequencia.length - 1]) {
    let proxElemento =
      sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proxElemento);
  }

  if (
    sequencia[sequencia.length - 1] === numeroEntrada ||
    numeroEntrada === 0 ||
    numeroEntrada === 1
  ) {
    console.log("Sim, o número pertence a sequência Fibonacci");
  } else {
    console.log("Não, o número não pertence a sequência Fibonacci");
  }
}

confereSequenciaFibonacci(21); //exemplo utilizando o número 21


//---------------------------------------


//Exercício 3) Descubra a lógica e complete o próximo elemento:

//a) 1, 3, 5, 7, _ => 9 (porque soma de 2 em 2)

//b) 2, 4, 8, 16, 32, 64, _ => 128 (porque multiplica o último elemento por 2, ou utiliza potência de base 2)

//c) 0, 1, 4, 9, 16, 25, 36, _ => 49 (porque do 0 para 1 soma 1, depois 3, 5, 7, 9, 11.. até que 36 + 13)

//d) 4, 16, 36, 64, _ => 100 (porque 4x1=4, 4x4=16, 4x9=36, 4x16=64 e 4x25=100 -> soma-se o multiplicador na sequência +3, +5, +7...)

//e) 1, 1, 2, 3, 5, 8, _ => 13 (porque é a sequência de Fibonacci, soma-se os dois últimos elementos para saber o próximo)

//f) 2, 10, 12, 16, 17, 18, 19, _ => 200 (não consegui encontrar uma lógica matemática, mas pode se referir à números que começam com a letra D)


//---------------------------------------


//Exercício 4)

//R: Acredito que quando o caminhão e o carro se cruzarem estarão à mesma distância da cidade de Ribeirão Preto pois enquanto o carro terá percorrido uma distância X saindo da cidade de Ribeirão Preto, o caminhão precisará percorrer a mesma distância X para chegar até Ribeirão Preto.


//---------------------------------------

//Exercício 5) Escreva um programa que inverta os caracteres de uma string

function inverteCaracteres(string) {
  let stringInvertida = "";

  let arrayDaString = string.split("");

  while (arrayDaString.length > 0) {
    stringInvertida += arrayDaString[arrayDaString.length - 1];
    arrayDaString.pop();
  }

  console.log(stringInvertida);
}

inverteCaracteres("brunna"); //testando com a palavra "brunna";
