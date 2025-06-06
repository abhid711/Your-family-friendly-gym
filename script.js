// Copy phone number to clipboard
function copyPhone(number) {
  navigator.clipboard.writeText(number)
    .then(() => alert(`Phone number ${number} copied to clipboard!`))
    .catch(err => alert("Failed to copy!"));
}

// Set current year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
