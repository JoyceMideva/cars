const addHouse = document.querySelectorAll(".add-a-house");
const submitHouse = document.getElementById("submit-house");
const message = document.getElementById("message");
const house = document.getElementById("house");
console.log(house);
const houseItems = [];

submitHouse.addEventListener("click", (e) => {
  e.preventDefault();
const newCar={};
  addHouse.forEach((element) => {
    if (element.value === "") {
      element.classList.add("error");
      message.textContent="please fill all empty fields";
      message.classList.add("error-message")
      message.classList.add("error-success")
      return;
    } else {
      element.classList.remove("error");
      message.textContent=""
      newCar.carName=addHouse[0].value;
      newCar.carPrice=addHouse[1].value;
      newCar.carMake=addHouse[2].value;
      newCar.carColor=addHouse[3].value;
      newCar.carEmail=addHouse[4].value;
      newCar.carDescription=addHouse[5].value;
      newCar.carImage=addHouse[6].files[0].name;

    }

console.log(newCar)

  });


});

console.log(submitHouse);



