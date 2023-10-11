function Head() {
  // Display a welcome message
  const welcomeMessage = "Welcome to our website!";
  console.log(welcomeMessage);

  // Handle button click
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    console.log("Button clicked!");
    // Add your logic here for handling the button click event
  });
}

// Initialize the home page when the DOM has finished loading
document.addEventListener("DOMContentLoaded", Head);