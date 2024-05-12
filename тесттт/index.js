const UPLOAD_BUTTON = document.getElementById("upload-button");
const FILE_INPUT = document.querySelector("input[type=file]");
const AVATAR = document.getElementById("avatar");

UPLOAD_BUTTON.addEventListener("click", () => FILE_INPUT.click());

FILE_INPUT.addEventListener("change", event => {
  const file = event.target.files[0];

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = () => {
    AVATAR.setAttribute("aria-label", file.name);
    AVATAR.style.background = `url(${reader.result}) center center/cover`;
  };
});


let button_1 = document.querySelector(".button-1");
let button_2 = document.querySelector(".button-2");
let button_3 = document.querySelector(".button-3");
let button_4 = document.querySelector(".button-4");
let button_5 = document.querySelector(".button-5");

let ecardd = document.querySelector(".first")
let ecarddd = document.querySelector(".second")
let ecardddd = document.querySelector(".third")

button_1.addEventListener("click" , () => {
    ecardd.classList.remove("default");
    ecardd.classList.remove("full_blue");
    ecardd.classList.remove("pink");
    ecardd.classList.remove("red");
    ecardd.classList.remove("yellow");
    ecardd.classList.add("blue");
})

button_1.addEventListener("click" , () => {
  ecarddd.classList.remove("default");
  ecarddd.classList.remove("full_blue");
  ecarddd.classList.remove("pink");
  ecarddd.classList.remove("red");
  ecarddd.classList.remove("yellow");
  ecarddd.classList.add("blue");
})
button_1.addEventListener("click" , () => {
  ecardddd.classList.remove("default");
  ecardddd.classList.remove("full_blue");
  ecardddd.classList.remove("pink");
  ecardddd.classList.remove("red");
  ecardddd.classList.remove("yellow");
  ecardddd.classList.add("blue");
})

button_2.addEventListener("click" , () => {
  ecardd.classList.remove("default");
  ecardd.classList.remove("full_blue");
  ecardd.classList.remove("pink");
  ecardd.classList.remove("red");
  ecardd.classList.remove("blue");
    ecardd.classList.add("yellow");
})

button_2.addEventListener("click" , () => {
  ecarddd.classList.remove("default");
  ecarddd.classList.remove("full_blue");
  ecarddd.classList.remove("pink");
  ecarddd.classList.remove("red");
  ecarddd.classList.remove("blue");
  ecarddd.classList.add("yellow");
})
button_2.addEventListener("click" , () => {
  ecardddd.classList.remove("default");
  ecardddd.classList.remove("full_blue");
  ecardddd.classList.remove("pink");
  ecardddd.classList.remove("red");
  ecardddd.classList.remove("blue");
  ecardddd.classList.add("yellow");
})

button_3.addEventListener("click" , () => {
  ecardd.classList.remove("default");
  ecardd.classList.remove("full_blue");
  ecardd.classList.remove("pink");
  ecardd.classList.remove("yellow");
  ecardd.classList.remove("blue");
  ecardd.classList.add("red");
})

button_3.addEventListener("click" , () => {
  ecarddd.classList.remove("default");
  ecarddd.classList.remove("full_blue");
  ecarddd.classList.remove("pink");
  ecarddd.classList.remove("yellow");
  ecarddd.classList.remove("blue");
  ecarddd.classList.add("red");
})
button_3.addEventListener("click" , () => {
  ecardddd.classList.remove("default");
  ecardddd.classList.remove("full_blue");
  ecardddd.classList.remove("pink");
  ecardddd.classList.remove("yellow");
  ecardddd.classList.remove("blue");
  ecardddd.classList.add("red");
})


button_4.addEventListener("click" , () => {
  ecardd.classList.remove("default");
  ecardd.classList.remove("red");
  ecardd.classList.remove("pink");
  ecardd.classList.remove("yellow");
  ecardd.classList.remove("blue");
  ecardd.classList.add("full_blue");
})

button_4.addEventListener("click" , () => {
  ecarddd.classList.remove("default");
  ecarddd.classList.remove("red");
  ecarddd.classList.remove("pink");
  ecarddd.classList.remove("yellow");
  ecarddd.classList.remove("blue");
  ecarddd.classList.add("full_blue");
})
button_4.addEventListener("click" , () => {
  ecardddd.classList.remove("default");
  ecarddd.classList.remove("red");
  ecarddd.classList.remove("pink");
  ecarddd.classList.remove("yellow");
  ecarddd.classList.remove("blue");
  ecardddd.classList.add("full_blue");
})


button_5.addEventListener("click" , () => {
  ecardd.classList.remove("default");
  ecardd.classList.remove("red");
  ecardd.classList.remove("full_blue");
  ecardd.classList.remove("yellow");
  ecardd.classList.remove("blue");
    ecardd.classList.add("pink");
})

button_5.addEventListener("click" , () => {
  ecarddd.classList.remove("default");
  ecarddd.classList.remove("red");
  ecarddd.classList.remove("full_blue");
  ecarddd.classList.remove("yellow");
  ecarddd.classList.remove("blue");
  ecarddd.classList.add("pink");
})
button_5.addEventListener("click" , () => {
  ecardddd.classList.remove("default");
  ecardddd.classList.remove("red");
  ecardddd.classList.remove("full_blue");
  ecardddd.classList.remove("yellow");
  ecardddd.classList.remove("blue");
  ecardddd.classList.add("pink");
})

let burger = document.querySelector(".burger-checkbox");
let buttonss = document.querySelector(".buttons");

burger.addEventListener("click" , () =>{
  buttonss.classList.toggle("buttons");
  buttonss.classList.toggle("buttons-after");
})
