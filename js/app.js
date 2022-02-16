// Generate Pin
document.getElementById("get-pin").addEventListener("click", function () {
  const pinValue = getPin();
  let showPin = document.getElementById("show-pin");
  showPin.value = pinValue;
  document.getElementById("notify-failed").style.display = "none";
  document.getElementById("notify-success").style.display = "none";
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
document.getElementById("submit-btn").addEventListener("click", function () {
  const pin = document.getElementById("show-pin");
  const pinValue = pin.value;
  const numberInput = document.getElementById("number-input");
  let numberInputValue = numberInput.value;
  const notifyFailed = document.getElementById("notify-failed");
  const notifySuccess = document.getElementById("notify-success");

  if (
    pinValue != numberInputValue ||
    pinValue == "" ||
    numberInputValue == ""
  ) {
    notifyFailed.style.display = "block";
    notifySuccess.style.display = "none";
  } else if (pinValue == numberInputValue) {
    notifyFailed.style.display = "none";
    notifySuccess.style.display = "block";
  }
  pin.value = "";
  numberInput.value = "";
});
console.log(count);
