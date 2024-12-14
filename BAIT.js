// Form Validation and function
function validateform(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const confirmpassword = document.getElementById("confirmpassword").value
//grabs all the values that correlates
    if(password !== confirmpassword){
        alert("Incorrect Password")
        return;
    } // checks to see if the password and info from the confirm password is correct
    alert("Reigistration Confirmed")
    document.getElementById("registrationform").submit();
}

// String Manipulation and Function
function changethewords(){
let Words = document.getElementById("string").innerHTML 
// Grabs the sentance from the webpage
console.log(Words)
let sentence = Words.replace("Hi, this page is for a project for" , "I'm using this site as a test bed for")
// replaces the sentance 
console.log(sentence)
document.getElementById("string").innerHTML = sentence
//replaces the sentance on the webpage
}

//decision logic
function decision(){
    let result = document.getElementById("response").value
    console.log(result)
    if(result == "Yes"){ //Checks what you typed and responds 
        document.getElementById("anwser").innerHTML = "Same, I couldn't Agree More"
    }
    else{
        document.getElementById("anwser").innerHTML = "Humans always have a personal preference"
    }

}

//Loop and function
const image = document.getElementById('meme');
let position = 0;
let direction = 1; // 1 for up, -1 for down
let animationId; // To store the requestAnimationFrame ID
let isBouncing = false; // To track the bouncing state

function bounce() {
    if (position >= 150) {
        direction = -1; // Change direction to down
    } else if (position <= 0) {
        direction = 1; // Change direction to up
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