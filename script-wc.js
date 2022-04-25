// alert("• Words counter counts the words in the given sentence on the go \n\n • Vowels/Consonants counter counts vowels and consonants in the given sentence and gives the total alphabets just above");
let wInput = document.getElementById("w-input");

wInput.addEventListener("input", checkLength);

function checkLength(e) {
  e.preventDefault();
  var arr = wInput.value.split(" ");

  arr = arr.filter(function(str) {
    return str != ""
  })
  
  if (arr.length == 1) {
    document.getElementById("w-input-count").innerHTML = arr.length + " word";
  } else if (arr.length > 1) {
    document.getElementById("w-input-count").innerHTML = arr.length + " words";
  }
  document.getElementById("w-input-text").innerHTML = wInput.value;
  if (wInput.value == "") {
    document.getElementById("w-input-count").innerHTML = 0 + " word";
    document.getElementById("w-input-text").innerHTML = "No word to count :(";
  }
}

function openCounter(evt, tab) {
  var i, container, tablinks;

  container = document.getElementsByClassName("container");
  for (i = 0; i < container.length; i++) {
    container[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
document.addEventListener('loadstart',checkLength)