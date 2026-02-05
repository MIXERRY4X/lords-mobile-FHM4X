var mode = "percent";

function show(id){
document.getElementById("calc").style.display="block";
}

function calc(){

var total = Number(document.getElementById("totalTroop").value);
var lead = Number(document.getElementById("lead").value);

var remain = total - lead;

if(remain < 0){
document.getElementById("out").innerHTML = "ทหารเกินเสา";
return;
}

if(mode === "manual"){
document.getElementById("out").innerHTML =
"เหลือให้ใส่: " + remain;
return;
}

var infp = Number(document.getElementById("infp").value);
var cavp = Number(document.getElementById("cavp").value);
var rngp = Number(document.getElementById("rngp").value);

var sump = infp + cavp + rngp;

if(sump > 1000){
document.getElementById("out").innerHTML = "เปอร์เซ็นต์เกิน 1000";
return;
}

var inf = Math.floor(remain * infp / 1000);
var cav = Math.floor(remain * cavp / 1000);
var rng = Math.floor(remain * rngp / 1000);

document.getElementById("out").innerHTML =
"ราบ: " + inf +
"<br>ม้า: " + cav +
"<br>ธนู: " + rng +
"<br>รวม: " + (inf+cav+rng+lead);

}

function goAttack(){
    alert("หน้าการตีบ้าน ยังไม่ทำ");
}

function goRally(){
    window.location.href = "rally.html";
}

function goGuild(){
    alert("หน้ากิลด์เฟส ยังไม่ทำ");
}

function goAttack(){
    alert("หน้าการตีบ้าน");
}

function goRally(){
    window.location.href="rally.html";
}

function goGuild(){
    alert("หน้ากิลด์เฟส");
}
