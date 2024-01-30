const container = document.querySelector(".container");
const hexCodeText = document.querySelector(".hex-code");
const titleText = document.querySelector(".title");
const btn = document.querySelector("button");
const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", colorChange);

hexCodeText.addEventListener("click", () => {
  const temp = document.createElement("textarea");
  temp.value = hexCodeText.innerHTML;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
  alert(`Color copied to clipboard: ${hexCodeText.innerHTML}`);
});

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    colorChange();
  }
});

function colorChange() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexArray[Math.floor(Math.random() * 15)];
  }
  container.style.backgroundColor = hexValue;
  hexCodeText.style.color = hexValue;
  titleText.style.color = hexValue;
  hexCodeText.innerHTML = hexValue;
  if (hexValue[1] <= 6) {
    btn.style.color = "white";
  } else {
    btn.style.color = "black";
  }
}
