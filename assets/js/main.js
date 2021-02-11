function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("titulo__normal");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className = "titulo__oculto";
  } else {
    x.className = "topnav";
    y.className = "titulo__normal";
  }
}
