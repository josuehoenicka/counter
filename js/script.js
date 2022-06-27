var number = 0;
document.getElementById("number").innerHTML = "<h1>" + number + "</h1>"
	
function sumar(){
	number += 1;
	document.getElementById("number").innerHTML = "<h1>" + number + "</h1>"
}

function reiniciar(){
	number = 0;
	document.getElementById("number").innerHTML = "<h1>" + number + "</h1>"
}	

function restar(){
	number -= 1;
	document.getElementById("number").innerHTML = "<h1>" + number + "</h1>"
}
