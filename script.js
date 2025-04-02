window.onload = function () {

    let descriptionElements = document.querySelectorAll(".description");

    let changeTextButton = document.querySelector("#changeText");

    // flag to track whether text is changed or not
    let isChanged = false;
    
    //Store original text for reverting
    let originalTexts = [];

    // Capture original text on load
    descriptionElements.forEach(function(description) {
        originalTexts.push(description.innerText);
    });

    changeTextButton.addEventListener("click", function() {
    descriptionElements.forEach(function(description, index) {
        if (isChanged) {
            //if text changes, revert to original
            description.innerText = originalTexts[index];
        } else {
            // if original, change text
            description.innerText = "Holy smokes, Batman! That worked.";
        }
    });

    // Toggle isChanged flag
    isChanged = !isChanged;
    });
};