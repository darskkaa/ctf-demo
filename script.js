const keywordPartOne = "check_the";

function checkFlag() {
  const input = document.getElementById("flagInput").value.trim();
  const result = document.getElementById("resultMessage");
  const correctFlag = "FLAG{check_the_source}";

  if (input === correctFlag) {
    result.textContent = "Correct! You captured the flag.";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "Incorrect flag. Follow the clues more carefully.";
    result.style.color = "salmon";
  }
}