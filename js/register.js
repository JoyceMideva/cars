const middleName="john"
console.log(middleName)
const password=document.getElementById("password")
const email=document.getElementById("email")
const register=document.getElementById("register")
register.addEventListener("click",(e)=>{
e.preventDefault()
if(email.value===""){
alert("enter your email")
}else if(password.value===""){
    alert("enter your password")
}else{
    const userData={
        email:email.value,
        password:password.value,
    }
    const user=JSON.parse(localStorage.getItem("user"))
    user.map(item=>{
        if(userData.email === item.email && userData.password){
            alert("you have successfully signed in")
            window.location("index.html")
        }else{
            alert("invalid data")
        }
    })
}
})