const counter = document.getElementById("num");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");

let cnt = 0; //variable for counting

inc.addEventListener("click", () => {
  cnt++;
  counter.innerHTML = cnt;
});

dec.addEventListener("click", () => {
  cnt--;
  counter.innerHTML = cnt;
});
