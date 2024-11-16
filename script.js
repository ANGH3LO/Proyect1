let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const { DateTime } = luxon;

const boliviaTime = DateTime.now().setZone("America/La_Paz");

const formattedTime = boliviaTime.toFormat("ccc, LLL dd, yyyy hh:mm:ss a"); 

timeText.textContent = `${formattedTime} GMT-0400`;  // Mostrar con el sufijo GMT-0400

const yearText = document.getElementById("year");
const year = new Date().getFullYear();
yearText.textContent = year;
