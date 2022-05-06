console.log("Desafio 1")
let final = [];

//Criando um loop que vai de um até um milhão
for (let i = 1; i < 1000000; i++) {
  let number = i.toString();
    //Pegando o reverso do número
  let reverso = number.split("").reverse().join("");
  let numReverse = Number(reverso)
  //Verificando se o numero é diferente do reverso
  if (i != numReverse) {
      //Verificando se o numero e o reverso são impares pois se os dois forem impares a soma retornara par :(
    if (i % 2 == 1 & numReverse % 2 == 1) {
        //Verificando se o numero e o reverso são par pois se os dois forem par a soma retornara par :(
    } else if(i % 2 == 0 & numReverse % 2 == 0) {
        
    } else {
        //Criando um json para ficar mais facil de visualizar qual era o numero, o reverso e o resultado.
        let json = {
        n: i,
        reversoN: reverso,
        resultado: i + numReverse,
      };
      //Mandando a informação para a variavel que sera renderizado todos os resultados
      final.push(json);
    }
  }

}
//Fim loop
console.log(final);
