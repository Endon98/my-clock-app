const timeDisplay = document.getElementById("clock-display");

// Function to get the current time and update the display
const getTime = () =>
  (timeDisplay.textContent = new Date().toLocaleTimeString());

// Configure the getTime function to execute every second
document.addEventListener("DOMContentLoaded", () => {
  getTime();
  setInterval(getTime, 1000);
});
