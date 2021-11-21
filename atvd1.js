function questao1(){
    var dominio1 = "mundojs";
    var dominio2 = "google";
    var str = "Olá " + dominio1 + " www." + dominio2 + ".com te ajuda a achar muitos materiais de estudo.";
    console.log(str);
  }
  
  function questao2(){
    var  valorA = "casa";
    var  valorB = "asa";
    let resultadoA = valorA.toUpperCase();
    console.log(resultadoA);
    let resultadoB = valorB.toUpperCase();
    console.log(resultadoB);
    if(valorA == valorB){
    console.log(valorA + " e " + valorB + " são iguais."); 
  }
  if (valorA < valorB) {
    console.log(valorA + " é menor que " + valorB);
  }
  if(valorA > valorB){
    console.log(valorA + " é maior que " + valorB);
  }
  }
  
  function questao3(){
    var valorA = "substring(): Aprenda a utilizar.";
    let resultado = valorA.substring(13,31);
    console.log(resultado);
  }