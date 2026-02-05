function show(id){
document.getElementById("guide").style.display="none";
document.getElementById("war").style.display="none";
document.getElementById("guild").style.display="none";
document.getElementById("calc").style.display="none";

document.getElementById(id).style.display="block";
}

function calc(){

var troop = document.getElementById("troop").value;
var percent = document.getElementById("percent").value;

var send = troop * percent / 100;

document.getElementById("result").innerHTML =
"ควรส่ง: " + Math.floor(send);

}
