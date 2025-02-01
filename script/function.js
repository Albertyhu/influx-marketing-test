// List items
const dermalLink = document?.getElementById("dermal-link");
const coolsculptingLink = document?.getElementById("coolsculpting-link");
const qwoLink = document?.getElementById("qwo-link");
const lasersLink = document?.getElementById("lasers-link");
const microneedlingLink = document?.getElementById("microneedling-link");
const botoxLink = document?.getElementById("botox-link");

// Corresponding div elements
const dermalFillersScreen = document.getElementById("dermal-screen");
const coolsculptingScreen = document.getElementById("coolsculpting-screen");
const qwoScreen = document.getElementById("QWO-screen");
const lasersScreen = document.getElementById("lasers-screen");
const microneedlingScreen = document.getElementById("microneedling-screen");
const botoxScreen = document.getElementById("botox-screen");

//function for changing the screen when user clicks on one of the selectors
const ChangeScreen = (LinkElement, ScreenElement) => {
  const SelectedLink = document.querySelector(".active-link");
  const SelectedScreen = document.querySelector(".selected");
  SelectedLink.classList.remove("active-link");
  SelectedScreen.classList.remove("selected");
  if (!LinkElement.classList.contains("active-link"))
    LinkElement.classList.add("active-link");
  if (!ScreenElement.classList.contains("selected"))
    ScreenElement.classList.add("selected");
};

dermalLink.addEventListener("mousedown", () => {
  ChangeScreen(dermalLink, dermalFillersScreen);
});
coolsculptingLink.addEventListener("mousedown", () => {
  ChangeScreen(coolsculptingLink, coolsculptingScreen);
});
qwoLink.addEventListener("mousedown", () => {
  ChangeScreen(qwoLink, qwoScreen);
});
lasersLink.addEventListener("mousedown", () => {
  ChangeScreen(lasersLink, lasersScreen);
});
microneedlingLink.addEventListener("mousedown", () => {
  ChangeScreen(microneedlingLink, microneedlingScreen);
});
botoxLink.addEventListener("mousedown", () => {
  ChangeScreen(botoxLink, botoxScreen);
});

const MobileIcon = document?.getElementById("mobile-icon");
const MobileMenu = document?.getElementById("mobile-nav");
MobileIcon.addEventListener("mousedown", ToggleMenu);

function ToggleMenu() {
  if (MobileMenu.classList.contains("closed-menu")) {
    MobileMenu.classList.remove("closed-menu");
  } else {
    MobileMenu.classList.add("closed-menu");
  }
}
