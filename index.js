const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

const imageContainerEl2 = document.querySelector(".image-container-2");

const prevEl2 = document.getElementById("prev2");
const nextEl2 = document.getElementById("next2");
let x = 0;
let x2 = 0;
let timer,timer2;


prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

prevEl2.addEventListener("click", () => {
  x2 = x2 - 45;
  clearTimeout(timer2);
  updateGallery2();
});
nextEl2.addEventListener("click", () => {
  x2 = x2 + 45;
  clearTimeout(timer2);
  updateGallery2();
});



function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}


function updateGallery2() {
  imageContainerEl2.style.transform = `perspective(1000px) rotateY(${x2}deg)`;
  timer2 = setTimeout(() => {
    x2 = x2 + 45;
    updateGallery2();
  }, 3700);
}

updateGallery2();
updateGallery();