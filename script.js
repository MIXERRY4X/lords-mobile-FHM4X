body{
  background:#0f172a;
  color:white;
  font-family:Arial;
  text-align:center;
  padding-top:100px;
}

input{
  padding:10px;
}

button{
  padding:10px;
  background:green;
  color:white;
  border:none;
}

function checkPass(){

  var password = document.getElementById("pass").value;

  if(password === "1234"){
    document.getElementById("msg").innerHTML = "รหัสถูกต้อง";
    window.location.href = "home.html"; 
  } 
  else{
    document.getElementById("msg").innerHTML = "รหัสผิด";
  }

}
