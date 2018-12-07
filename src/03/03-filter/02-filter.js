const { inspect } = require('util');

const alunos = [
  { nome: 'joão', idade: 15 },
  { nome: 'josé', idade: 18 },
  { nome: 'maria', idade: 20 },
];

const alunosDeMaior = [];
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].idade >= 18) {
    console.log(`aluno ${alunos[i].nome}`);
    console.log(`aluno ${alunos[i].idade}`);
    alunosDeMaior.push(alunos[i]);
  }
}

console.log('# Printing JSON Array');
console.log(`alunos ${alunos}`);
console.log(`alunos de maior ${alunosDeMaior}`);
console.log('');

console.log('# Printing JSON Array - JSON.stringify');
console.log(`alunos ${JSON.stringify(alunos)}`);
console.log(`alunos de maior ${JSON.stringify(alunosDeMaior)}`);
console.log('');

console.log('# Printing for');
for (let i = 0; i < alunos.length; i++) {
  console.log(`alunos ${alunos[i].nome}`);
  console.log(`alunos ${alunos[i].idade}`);
}
console.log('');

console.log('# Printing forEach');
alunos.forEach((alunos) => {
  console.log(`alunos ${alunos.nome}`);
  console.log(`alunos ${alunos.idade}`);
});


console.log('# reduce');
const fn = (acc, aluno) => {
  const output = Object.values(aluno).join();
  return acc.concat(`, ${output}`);
};

const lista = alunos.reduce(fn, '');

console.log(`aluno ${lista}`);
console.log(`Inspect ${inspect(alunos, { showHidden: false, depth: null })}`);
console.log('');
