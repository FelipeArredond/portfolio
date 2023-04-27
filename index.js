const mobileNav = document.getElementById("mobileNav");
const navButton = document.getElementById("navButton");

navButton.addEventListener("click", () => {
  mobileNav.style.display == "none"
    ? (mobileNav.style.display = "")
    : (mobileNav.style.display = "none");
});


//Buttons

const steeful = document.getElementById('steeful');
const postobon = document.getElementById('postobon');

steeful.addEventListener('click', () => {
  window.open('https://www.steeful.com/');
})

postobon.addEventListener('click', () => {
  window.open('https://www.postobon.com/');
})