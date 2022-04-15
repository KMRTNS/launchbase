const alunosDaTurmaA = [
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

const alunosDaTurmaB = [
  {
    nome: "Junio",
    nota: 6
  },
  {
    nome: "Alisson",
    nota: 7
  },
  {
    nome: "Mayk",
    nota: 2
  }
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
  if(media > 5){
    console.log(`A media da ${turma} foi de ${media}, parabéns!`)
  }else{
    console.log(`A media da ${turma} foi de ${media}, sinto muito!`)
  }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')