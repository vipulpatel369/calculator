function add() {
    var num1 = parseInt((document.getElementById("n1")).value)
    var num2 = parseInt(document.getElementById("n2").value)
    var sum = num1 + num2;
    var h = document.getElementById("res")
    h.innerHTML = sum;
}

function sub() {
    var num1 = parseInt((document.getElementById("n1")).value)
    var num2 = parseInt(document.getElementById("n2").value)
    var sum = num1 - num2;
    var h = document.getElementById("res")
    h.innerHTML = sum;
}

function mply() {
    var num1 = parseInt((document.getElementById("n1")).value)
    var num2 = parseInt(document.getElementById("n2").value)
    var sum = num1 * num2;
    var h = document.getElementById("res")
    h.innerHTML = sum;
}



function div() {
    var num1 = parseInt((document.getElementById("n1")).value)

    var num2 = parseInt(document.getElementById("n2").value)
    var sum = num1 / num2;
    var h = document.getElementById("res")
    h.innerHTML = sum;
}

function cl() {
var c1 = document.getElementById("n1")
c1.value=""

var c2 = document.getElementById("n2")
c2.value= ""

var c3 = document.getElementById("res")
c3.innerHTML=""


}



