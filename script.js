document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("myBtn").addEventListener("click", myFunction);
    document.getElementById("btnNew").addEventListener("click", newGame);
    document.getElementById("btnFin").addEventListener("click", Rendirse);
    selectionarNuevoNumero();
});

function Rendirse() {
    console.log('Rendirse')
    clearHistory()
}

function newGame() {
    console.log('nuevo juego')
    // seleccionar nuevo numero
    number_define = getNumero()
    elemento = document.getElementById("numero_adivinar");
    elemento.innerHTML = number_define
    // clean history 
    clearHistory()
}

function selectionarNuevoNumero() {
    text = 1234
    elemento = document.getElementById("numero_adivinar_oculto");
    elemento.innerHTML = text 
}

function getNumero() {
    elemento = document.getElementById("numero_adivinar_oculto");
    return elemento.textContent 
}

function clearHistory() {
    turno = document.getElementById("numero_turno_oculto");
    turno.innerHTML = 0 

    element = document.getElementById("history")
    deleteChild(element)
}

function deleteChild(element) { 
    var child = element.lastElementChild;  
    while (child) { 
        element.removeChild(child); 
        child = element.lastElementChild; 
    } 
} 

function myFunction() {
    turno = nuevoTurno()
    response = [1,2]
    current_number = document.getElementById("number").value;
    agregarHistory(turno, current_number, response[0], response[1])
}
    
function nuevoTurno() {
    elemento = document.getElementById("numero_turno_oculto");
    turno = elemento.textContent 
    turno = parseInt(turno) + 1
    elemento.innerHTML = turno 
    return turno
}



function agregarHistory(indice, value, fijas, picas) {
    var node_tr = document.createElement("tr");                 // Create a <tr> node
    var node_td1 = document.createElement("td");                 // Create a <tr> node
    var node_td2 = document.createElement("td");                 // Create a <tr> node
    var node_td3 = document.createElement("td");                 // Create a <tr> node
    var node_td4 = document.createElement("td");                 // Create a <tr> node
    
    node_td1.appendChild(document.createTextNode(indice));           // Create a text node
    node_td2.appendChild(document.createTextNode(value));           // Create a text node
    node_td3.appendChild(document.createTextNode(fijas));           // Create a text node
    node_td4.appendChild(document.createTextNode(picas));           // Create a text node

    node_tr.appendChild(node_td1);                              // Append the text to <li>
    node_tr.appendChild(node_td2);                              // Append the text to <li>
    node_tr.appendChild(node_td3);                              // Append the text to <li>
    node_tr.appendChild(node_td4);                              // Append the text to <li>
    document.getElementById("history").appendChild(node_tr);    // Append <li> to <ul> with id="myList"
}