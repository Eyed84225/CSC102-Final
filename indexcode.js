const image = document.getElementById('meme');
let position = 0;
let direction = 1; // 1 for up, -1 for down
let animationId; // To store the requestAnimationFrame ID
let isBouncing = false; // To track the bouncing state

function playSound(){
    const audio = new Audio('Cartoon Bounce Sound Effect.mp3');
    // audio function to play when you press start
    audio.play();
  }

function bounce() {
    if (position >= 150) {
        direction = -1; // Change direction to down
        console.log("working")
    } else if (position <= 0) {
        direction = 1; // Change direction to up
        console.log("working")
    }
    position += direction * 5; // Change the 5 to increase/decrease speed
    image.style.bottom = position + 'px'; // Update image position
    animationId = requestAnimationFrame(bounce); // Repeat the bounce function
}

document.getElementById('start').addEventListener('click', () => {
    if (!isBouncing) {
        isBouncing = true; // Set bouncing state to true
        document.getElementById('start').disabled = true; // Disable start button
        document.getElementById('stop').disabled = false; // Enable stop button
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isBouncing) {
        isBouncing = false; // Set bouncing state to false
        cancelAnimationFrame(animationId); // Stop the animation
        position = 0; // Reset position 
        document.getElementById('meme').style.bottom = position + 'px'; // Reset image position
        document.getElementById('start').disabled = false; // Enable start button
        document.getElementById('stop').disabled = true; // Disable stop button
    }
}); 