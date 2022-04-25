// $(document).ready(function(){
//   $("div").hover(function(){
//     //$("div").animate({left: Math.random()+'50px',top:Math.random()+'20px'});
//     //$("div").animate({left: Math.random() * (500 - 10)+'50px',top:Math.random() * (500 - 10)+'20px'});
//     $("div").animate({left: Math.random() * (500 - 10)+'50px',top:Math.random() * (500 - 10)+'20px'});
//   });
// });

// $(document).ready(function(){
//   $("#boton1").click(function(){
//     $("#texto").toggle(2500);
//   })
// });
$(document).ready(inicialiarPrograma);

function inicialiarPrograma(){
  $("#boton1").click(mostrarOcultarText);
}

function mostrarOcultarText(){
  $("#texto").toggle(2000);
}
