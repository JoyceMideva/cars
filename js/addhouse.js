const addHouse = document.querySelectorAll(".add-a-house");
const submitHouse = document.getElementById("submit-house");
const message = document.getElementById("message");
const details = document.getElementById("details");
submitHouse.addEventListener("click", (e) => {
    e.preventDefault();
    const newCar = {};
    const cars = [];
    addHouse.forEach((element) => {
      if (element.value === "") {
        element.classList.add("error");
        message.textContent = "please fill all empty fields";
        message.classList.add("error-message");
        details.textContent = "added successfully";
        message.classList.add("details-success");
  
        return;
      } else {
        element.classList.remove("error");
        //   message.classList.remove("details-success");
        message.textContent = "";
        newCar.carName = addHouse[0].value;
        newCar.carPrice = addHouse[1].value;
        newCar.carMake = addHouse[2].value;
        newCar.carColor = addHouse[3].value;
        newCar.carEmail = addHouse[4].value;
        newCar.carDescription = addHouse[5].value;
        newCar.carImage = addHouse[6].files[0].name;
  
        console.log(newCar);
      }
    });
  
    //   localstorage
    if (localStorage.getItem("cars") === null) {
      cars.push(newCar);
      localStorage.setItem("cars", JSON.stringify(cars));
    } else {
      const localStorageCars = JSON.parse(localStorage.getItem("cars"));
      localStorageCars.push(newCar);
      localStorage.setItem("cars", JSON.stringify(localStorageCars));
    }
    console.log(submitHouse);
  });