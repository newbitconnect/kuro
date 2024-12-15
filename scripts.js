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

const translateButton = document.getElementById("translate-button");
const elementsToTranslate = document.querySelectorAll("[data-translate]");

// Textos en ambos idiomas
const translations = {
  en: {
    inicio: "Home",
    "sobre-kuro": "About Kuro",
    episodios: "Episodes",
    token: "KURO Token",
    ecosistema: "Ecosystem",
    participar: "How to Participate",
    comunidad: "Community",
    contacto: "Contact",
  },
  es: {
    inicio: "Inicio",
    "sobre-kuro": "Sobre Kuro",
    episodios: "Episodios",
    token: "Token KURO",
    ecosistema: "Ecosistema",
    participar: "Cómo Participar",
    comunidad: "Comunidad",
    contacto: "Contacto",
  },
};

// Estado inicial
let currentLanguage = "es";

// Cambiar idioma al hacer clic
translateButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  translateButton.textContent = currentLanguage.toUpperCase();

  // Cambiar texto en los elementos traducibles
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[currentLanguage][key];
  });
});
