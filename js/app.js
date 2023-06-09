
const servicecontainer = document.getElementById("servicecontainer");



function getFromLOcalStorage() {
  const cars = JSON.parse(localStorage.getItem("cars"));
  cars.map((cars) => {
    const carDetail = document.createElement("div");
    carDetail.setAttribute("class", "service__box");

    const carDetailImg = document.createElement("div");
    carDetailImg.setAttribute("class", "service__box--stats");

    const carImage = document.createElement("div");
    const img2 = document.createElement("img");
    img2.setAttribute("class", "image");
    img2.setAttribute("src", `images/${cars.carImage}`);
    carDetailImg.appendChild(carImage);

    const div = document.createElement("div");
    div.setAttribute("class", "div");
    const h4 = document.createElement("h4");
    h4.textContent = cars.carName;
    const h2 = document.createElement("h4");
    h2.textContent = cars.carMake;
    const h5 = document.createElement("h3");
    h5.textContent = cars.carPrice;
    carCare.appendChild(h4);
    carCare.appendChild(h2);
    carCare.appendChild(h5);

    const button = document.createElement("button");
    button.textContent = "view more";
    button.appendChild(button);

    carDetail.appendChild(carImage);
    carDetail.appendChild(div);
    servicecontainer.appendChild(carDetail);
  });
}
