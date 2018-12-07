const alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 },
];

const alunosDeMaior = alunos.filter(aluno => aluno.idade >= 18);


console.log(alunosDeMaior);
// [{nome:'josé', idade:18}, {nome:'maria', idade:20}]
