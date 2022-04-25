$(document).ready(inicializarPrograma);

function inicializarPrograma(){
  $("#parrafo1").click(presionarParrafo1);
  $("#parrafo2").click(presionarParrafo2);
  $("#parrafo2").dblclick(presionarParrafo22);
}

function presionarParrafo1(){
  alert("Se ha presionado el parrafo 1");
  $("#parrafo1").css("color","red");
}

function presionarParrafo2(){
  //alert("Se ha presionado el parrafo 2");
  $("#parrafo2").addClass("verde");
}

function presionarParrafo22(){
  //alert("Se ha presionado el parrafo 2");
  $("#parrafo2").addClass("azul");
}
