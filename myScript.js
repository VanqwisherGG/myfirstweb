function signButton() {
let login = prompt("Enter login");
  if (login.toLowerCase() == "admin") {
  alert("Correct");
  
}

else { (login.toLowerCase()!== "admin");
  alert("Incorrect user");
}



  let password = prompt("Enter password");
  if (password.toLowerCase() == "kek") {
  alert("Correct");
} else { (password.toLowerCase()!== "kek") 
  alert("Incorrect password")
}
}