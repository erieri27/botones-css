for (i = 0; i < 5; i++){
    console.log(i);
}
let contenedor = document.getElementById("#contenedor")

function addElement(){
alert('FUNCIONA FUCKR!');

let button = document.createElement("button");
let text = document.createTextNode("hacer click!");
button.appendChild(text);
document.body.appendChild(button);
}
