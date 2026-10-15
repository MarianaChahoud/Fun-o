function maiorDeTres(a, b, c) {
  let maior = a;

  if (b > maior) {
    maior = b;
  }
  if (c > maior) {
    maior = c;
  }

  return maior;
}

console.log(maiorDeTres(3, 8, 5));
console.log(maiorDeTres(10, 2, 7));  
console.log(maiorDeTres(-1, -5, -3));