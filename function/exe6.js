function dobrar(n) {
  n = n * 2;
  console.log("Dentro da função:", n);  
  return n;
}

let numero = 10;

console.log("Antes:", numero);          
let resultado = dobrar(numero);
console.log("Depois:", numero);         
console.log("Resultado:", resultado);   

