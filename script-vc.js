let vcInput = document.getElementById("vc-input");
let check = document.getElementById("check");

check.addEventListener("click", checkLength);

function checkLength(e) {
  let vcounter = 0;
  let ccounter = 0;
  loop = vcInput.value.split("");
  loop.forEach((element) => {
    switch (element) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        vcounter++;
        break;
      case "B":
      case "C":
      case "D":
      case "F":
      case "G":
      case "H":
      case "J":
      case "K":
      case "L":
      case "M":
      case "N":
      case "P":
      case "Q":
      case "R":
      case "S":
      case "T":
      case "V":
      case "W":
      case "X":
      case "Y":
      case "Z":
      case "b":
      case "c":
      case "d":
      case "f":
      case "g":
      case "h":
      case "j":
      case "k":
      case "l":
      case "m":
      case "n":
      case "p":
      case "q":
      case "r":
      case "s":
      case "t":
      case "v":
      case "w":
      case "x":
      case "y":
      case "z":
        ccounter++;
        break;
      default:
      // Do nothing
    }
  e.preventDefault();
  });

  document.getElementById("vc-input-text").innerHTML =
    "Your input has: <b>" +
    vcounter +
    "</b> vowel(s) & <b>" +
    ccounter +
    "</b> consonant(s).";
  document.getElementById("vc-input-count").innerHTML = vcounter + ccounter;
  if (vcInput.value == "") {
    document.getElementById("vc-input-count").innerHTML = "0";
    document.getElementById("vc-input-text").innerHTML =
      "No input to be evaluated, try again :(";
  }
}
