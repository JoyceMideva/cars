const lastName="mideva"
console.log(lastName)
const enterDetails = document.querySelectorAll(".enter-details");
const enterItems= document.getElementById("enterdetails");
const message = document.getElementById("message");

enterItems.addEventListener("click", (e) => {
    // alert("hello")
  e.preventDefault();
  enterItems.forEach((element) => {
    if (element.value === "") {
      element.classList.add("error");
      message.textContent="";
      message.classList.add("")
      return;
    } else {
      element.classList.remove("error");
      message.textContent=""
  }
})
})
