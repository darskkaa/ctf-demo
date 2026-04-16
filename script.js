const correctHash = "a823d9f72b2a570df295ceecbc99f545f94a68e26bcb2bd3ee3fe4239ce6a062";

async function checkFlag() {
  const input = document.getElementById("flagInput").value.trim();
  const result = document.getElementById("resultMessage");
  const hash = await sha256(input);
  if (hash === correctHash) {
    result.textContent = "Correct! You captured the flag.";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "Incorrect flag. Follow the clues more carefully.";
    result.style.color = "salmon";
  }
}

async function sha256(str) {
  const buf = new TextEncoder().encode(str);
  const hashBuf = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hashBuf))
    .map(b => b.toString(16).padStart(2, "0")).join("");
}