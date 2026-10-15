function somaLinha(matriz, i) {
  let soma = 0;

  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }

  return soma;
}

function somaTotal(matriz) {
  let total = 0;

  for (let i = 0; i < matriz.length; i++) {
    total += somaLinha(matriz, i);
  }

  return total;
}


const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Linha 0:", somaLinha(matriz, 0)); 
console.log("Linha 1:", somaLinha(matriz, 1)); 
console.log("Linha 2:", somaLinha(matriz, 2)); 
console.log("Total:", somaTotal(matriz));      