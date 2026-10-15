function contarPares(vet) {
  let contador = 0;

  for (let i = 0; i < vet.length; i++) {
    if (vet[i] % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPares([1, 2, 3, 4, 5, 6])); 
console.log(contarPares([7, 9, 11]));         
console.log(contarPares([2, 4, 6, 8]));       