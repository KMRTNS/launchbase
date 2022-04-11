const nome = "Silvana";
const sexo = "F";
const idade = 55;
const contribuicao = 30;

if(sexo === "M"){
  if(idade >= 35 && (idade + contribuicao) >= 95){
    console.log(`${nome}, você pode se aposentar!`)
  } else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}else{
  if(idade >= 30 && (idade + contribuicao) >= 85){
    console.log(`${nome}, você pode se aposentar!`)
  } else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
  }
}