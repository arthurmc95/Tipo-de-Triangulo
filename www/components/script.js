// This is a JavaScript file
function funcao(){

  var v1 = parseInt(document.getElementById("v1").value);
  var v2 = parseInt(document.getElementById("v2").value);
  var v3 = parseInt(document.getElementById("v3").value);
  
  if(v1 == v2 && v2 == v3){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é equilátero!</h1><br>");
    location.reload();

  }else if (v1 == v2 || v2 == v3){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é isósceles!</h1><br>");
    location.reload();
  }else if(v1 !== v2 && v2 !== v3){
    document.write("<h1 style='display: flex;justify-content: center; margin-top: 5vh;'>O triângulo é escaleno!</h1><br>");
    location.reload();
  }
}
