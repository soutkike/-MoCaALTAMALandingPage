const query = document.querySelectorAll(".hero");
const heroElement = query[0];
const IMAGESPATH = "url('/assets/tinified/')";
const IMAGES = ["tampico1.png", "tampico2.jpeg", "tampico3.jpeg"];

let index = 0;

setInterval(() => {
  if (index > 2) {
    index = 0;
  }
  heroElement.style.backgroundImage = `url('/assets/tinified/${IMAGES[index]}')`;

  index++;
  console.log(index);
}, 5000);
