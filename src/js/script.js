const myAudio = document.getElementById("audio");
const stroke = document.getElementById("stroke");
const sansserif = document.getElementById("sansserif");
const bold = document.getElementById("bold");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menuButton");
const main = document.getElementsByTagName("main")[0];

menuButton.addEventListener("click", event => {
  menu.classList.toggle("visible");
  if (menuButton.textContent == "Transcriptie opties verbergen") {
    menuButton.textContent = "Transcriptie opties tonen";
  } else {
    menuButton.textContent = "Transcriptie opties verbergen";
  }
});

stroke.onchange = function() {
  main.classList.toggle("stroke");
};

sansserif.onchange = function() {
  main.classList.toggle("sansserif");
};

bold.onchange = function() {
  main.classList.toggle("bold");
};

audio.onplaying = function() {
  main.classList.toggle("pause");
};

audio.onpause = function() {
  main.classList.toggle("pause");
};
