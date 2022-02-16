// Generate Pin
document.getElementById("get-pin").addEventListener("click", function () {
  const pinValue = getPin();
  let pinOutput = document.getElementById("pin-output");
  console.log(pinValue);
  pinOutput.value = pinValue;
});
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  if (pin.toString().length < 4) {
    return getPin();
  } else {
    return pin;
  }
}

// Key Pad
document.getElementById("keypad").addEventListener("click", function (e) {
  // id="keypad" is the parent of all element > bubble effect
  const number = e.target.innerText;
  let numberInput = document.getElementById("number-input");

  if (isNaN(number)) {
    if (number == "C") {
      numberInput.value = "";
    } else if (number == "<") {
      let input = numberInput.value.split("");
      input.pop();
      input.join(",");
      const newInput = input.join("");
      numberInput.value = newInput;
      // numberInput.value = input;
    }
  } else {
    let previousInputValue = numberInput.value;
    const newValue = previousInputValue + number;
    numberInput.value = newValue;
  }
});

// Matching
