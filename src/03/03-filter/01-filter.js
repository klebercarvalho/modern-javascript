const alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 },
];

const alunosDeMaior = [];
for (let i = 0; i < alunos.length; i++) {
  // console.log(`aluno ${alunos[i].idade}`);
  if (alunos[i].idade >= 18) {
    alunosDeMaior.push(alunos[i]);
    console.log(`aluno de maior ${alunos[i].nome}`);
    console.log(`aluno de maior ${alunos[i].idade}`);
  }
}
