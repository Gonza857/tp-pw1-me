console.log("Initialized");

const botonMeGusta = document.querySelectorAll(".bx-heart");
console.log(botonMeGusta);

botonMeGusta.forEach((boton) => {
  boton.addEventListener("click", function (e) {
    e.preventDefault();
    boton.classList.toggle("likedElement");
  });
});
