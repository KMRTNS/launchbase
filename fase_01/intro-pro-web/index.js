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
    nota: 4
  },
  {
    nome: "Nova aluna",
    nota: 10
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
  },
  {
    nome: "Novo aluno",
    nota: 5
  }
]

function calculaMedia(alunos) {
  soma = 0
  for(let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
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

function marcarComoReprovado(aluno) {
  aluno.reprovado = false
  if(aluno.nota <= 5) {
    aluno.reprovado = true
  }
}

function enviarMensagemReprovado(aluno) {
  if(aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} está reprovado!`)
  }
}

function alunoReprovado(alunos) {
  console.table(alunos)
  for(let aluno of alunos ) {
    marcarComoReprovado(aluno)
    enviarMensagemReprovado(aluno)
  }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)