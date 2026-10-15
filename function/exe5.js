function inverter(vet) {
  let inicio = 0;
  let fim = vet.length - 1;

  while (inicio < fim) {
    let temp = vet[inicio];
    vet[inicio] = vet[fim];
    vet[fim] = temp;

    inicio++;
    fim--;
  }
}


let numeros = [1, 2, 3, 4, 5];

console.log("Antes:", numeros);   
inverter(numeros);
console.log("Depois:", numeros);  