// List items
const dermalLink = document?.getElementById("dermal-link");
const coolsculptingLink = document?.getElementById("coolsculpting-link");
const qwoLink = document?.getElementById("qwo-link");
const lasersLink = document?.getElementById("lasers-link");
const microneedlingLink = document?.getElementById("microneedling-link");
const botoxLink = document?.getElementById("botox-link");

// List items on the mobile menu
const dermalLinkMobile = document?.getElementById("dermal-link-mobile");
const coolsculptingLinkMobile = document?.getElementById(
  "coolsculpting-link-mobile"
);
const qwoLinkMobile = document?.getElementById("qwo-link-mobile");
const lasersLinkMobile = document?.getElementById("lasers-link-mobile");
const microneedlingLinkMobile = document?.getElementById(
  "microneedling-link-mobile"
);
const botoxLinkMobile = document?.getElementById("botox-link-mobile");

// Corresponding div elements
const dermalFillersScreen = document.getElementById("dermal-screen");
const coolsculptingScreen = document.getElementById("coolsculpting-screen");
const qwoScreen = document.getElementById("QWO-screen");
const lasersScreen = document.getElementById("lasers-screen");
const microneedlingScreen = document.getElementById("microneedling-screen");
const botoxScreen = document.getElementById("botox-screen");

//function for changing the screen when user clicks on one of the selectors
const ChangeScreen = (LinkElement, MobileLinkElement, ScreenElement) => {
  const SelectedLink = document.querySelector(".active-link");
  const SelectedLinkMobile = document.querySelector(".active-link-mobile");
  const SelectedScreen = document.querySelector(".selected");
  SelectedLink.classList.remove("active-link");
  SelectedLinkMobile.classList.remove("active-link-mobile");
  SelectedScreen.classList.remove("selected");
  if (!LinkElement.classList.contains("active-link"))
    LinkElement.classList.add("active-link");
  if (!MobileLinkElement.classList.contains("active-link-mobile"))
    MobileLinkElement.classList.add("active-link-mobile");
  if (!ScreenElement.classList.contains("selected"))
    ScreenElement.classList.add("selected");
};

/* desktop */
dermalLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(dermalLink, dermalLinkMobile, dermalFillersScreen);
});
coolsculptingLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(coolsculptingLink, coolsculptingLinkMobile, coolsculptingScreen);
});
qwoLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(qwoLink, qwoLinkMobile, qwoScreen);
});
lasersLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(lasersLink, lasersLinkMobile, lasersScreen);
});
microneedlingLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(microneedlingLink, microneedlingLinkMobile, microneedlingScreen);
});
botoxLinkMobile.addEventListener("mousedown", () => {
  ChangeScreen(botoxLink, botoxLinkMobile, botoxScreen);
});

/*mobile*/
dermalLink.addEventListener("mousedown", () => {
  ChangeScreen(dermalLink, dermalLinkMobile, dermalFillersScreen);
});
coolsculptingLink.addEventListener("mousedown", () => {
  ChangeScreen(coolsculptingLink, coolsculptingLinkMobile, coolsculptingScreen);
});
qwoLink.addEventListener("mousedown", () => {
  ChangeScreen(qwoLink, qwoLinkMobile, qwoScreen);
});
lasersLink.addEventListener("mousedown", () => {
  ChangeScreen(lasersLink, lasersLinkMobile, lasersScreen);
});
microneedlingLink.addEventListener("mousedown", () => {
  ChangeScreen(microneedlingLink, microneedlingLinkMobile, microneedlingScreen);
});
botoxLink.addEventListener("mousedown", () => {
  ChangeScreen(botoxLink, botoxLinkMobile, botoxScreen);
});

const MobileIcon = document?.getElementById("mobile-icon");
const MobileMenu = document?.getElementById("mobile-nav");
const CloseLink = document?.getElementById("close-link");
MobileIcon.addEventListener("click", ToggleMenu);
CloseLink.addEventListener("click", CloseMenu);

function ToggleMenu() {
  if (MobileMenu.classList.contains("closed-menu")) {
    MobileMenu.classList.remove("closed-menu");
  } else {
    MobileMenu.classList.add("closed-menu");
  }
}

function CloseMenu() {
  if (!MobileMenu.classList.contains("closed-menu")) {
    MobileMenu.classList.add("closed-menu");
  }
}
