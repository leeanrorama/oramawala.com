function setDarkMode() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function updateCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  yearSpan.textContent =  " " + "2024 - " + new Date().getFullYear();
}

setDarkMode();
updateCopyrightYear();

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}