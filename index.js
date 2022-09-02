let buttons = document.querySelectorAll(".drum");

// Detecting Button Press

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", (event) => {});
onkeydown = (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
};

// Animate button

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 150);
}

// Make sound for each button

function makeSound(key) {
  switch (key) {
    case "w":
      crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      kickBass = new Audio("/sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("error");
  }
}
