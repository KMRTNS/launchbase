const aluno01 = {
  nome: "Igor",
  nota: 9.8
}

const aluno02 = {
  nome: "Aldriele",
  nota: 10
}

const aluno03 = {
  nome: "Beatriz",
  nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

if(media > 5){
  console.log(`A media foi de ${media}, parabéns!`)
}else{
  console.log(`A media foi de ${media}, sinto muito!`)
}