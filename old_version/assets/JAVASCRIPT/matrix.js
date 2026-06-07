// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set the width and height of the canvas
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Function to draw the background gradient
function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
  gradient.addColorStop(0, "#000"); // Start color (black)
  gradient.addColorStop(1, "#333"); // End color (dark gray)
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

// Your matrix animation code goes here...

// Update the matrix animation
function updateMatrix() {
  drawBackground(); // Draw the background first

  // Rest of your matrix animation code...
}

// Render the matrix animation
function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

// Start the animation
renderMatrix();