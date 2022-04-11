const alunos = [
  {
    nome: "Igor",
    nota: 9.8
  },
  {
    nome: "Aldriele",
    nota: 10
  },
  {
    nome: "Beatriz",
    nota: 2
  }
]

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if(media > 5){
  console.log(`A media foi de ${media}, parabéns!`)
}else{
  console.log(`A media foi de ${media}, sinto muito!`)
}