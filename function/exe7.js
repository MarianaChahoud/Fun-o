function mediaTurma(turma) {
  if (turma.length === 0) {
    return 0;
  }

  let soma = 0;

  for (let i = 0; i < turma.length; i++) {
    soma += turma[i].nota;
  }

  return soma / turma.length;
}


const turma = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 9 },
  { nome: "Diego", nota: 5 }
];

console.log("Média da turma:", mediaTurma(turma)); 