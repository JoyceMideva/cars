const lastName="mideva"
console.log(lastName)
const enterName = document.getElementById("entername");
const enterEmail= document.getElementById("enteremail")
const enterPassword = document.getElementById("enterpassword");
const submit= document.getElementById("enterdetails");
const message = document.getElementById("message");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if(enterName.value===""){
    alert("enter your name")
  }else if(enterEmail.value===""){
alert("enter your email")
  }else if(enterPassword.value===""){
alert("enter your password")
  }else{
    const userData={
        enterName:enterName.value,
        enterEmail:enterEmail.value,
        enterPassword:enterPassword.value,
    }
    let userDetail=[]
    userDetail.push(userData)
    localStorage.setItem("user", JSON.stringify(userDetail))
    window.location="sign-in.html"
  }
  
})
