javascript
// JavaScript to change text when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeTextButton");
    const mainText = document.querySelector("main p");

    changeTextButton.addEventListener("click", function () {
        mainText.textContent = "Text changed! You clicked the button.";
    });
});