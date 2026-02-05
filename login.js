function checkPass(){

  var p = document.getElementById("pass").value;

  if(p === "FHM4X"){
    window.location.href = "home.html";
  } 
  else{
    document.getElementById("msg").innerHTML = "รหัสผิด";
  }

}
