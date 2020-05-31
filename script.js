document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("myBtn").addEventListener("click", myFunction);
    document.getElementById("btnNew").addEventListener("click", newGame);
    document.getElementById("btnFin").addEventListener("click", Rendirse);
});

function Rendirse() {
    console.log('Rendirse')
}

function newGame() {
    console.log('nuevo juego')
}

  function myFunction() {
    elemento = document.getElementById("number").value;
    console.log(elemento)
    agregarHistory(elemento)
  }
    
function agregarHistory(value) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(value);           // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("history").appendChild(node);    // Append <li> to <ul> with id="myList"
}