const counter = document.getElementById("num");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");

let value = 0; //variable for counting

inc.addEventListener("click", () => {
  value++;
  counter.innerHTML = value;
});

dec.addEventListener("click", () => {
  value--;
  counter.innerHTML = value;
});
