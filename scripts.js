// Temporizador
const countdown = () => {
  const launchDate = new Date("2024-12-25T00:00:00").getTime();
  const now = new Date().getTime();
  const gap = launchDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);

// Botón flotante para volver al inicio
const scrollToTopButton = document.getElementById("scrollToTop");

// Mostrar el botón cuando se desplaza hacia abajo
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
    scrollToTopButton.classList.remove("hide");
  } else {
    scrollToTopButton.classList.add("hide");
    scrollToTopButton.classList.remove("show");
  }
});

// Volver al inicio al hacer clic
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

