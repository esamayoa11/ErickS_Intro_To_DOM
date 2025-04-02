window.onload = function () {

    let descriptionElements = document.querySelectorAll(".description");

    descriptionElements.forEach(function(description, index) {
        console.log('Description ${index + 1}:', description);
    });

    descriptionElements.forEach(function(description) {
        description.innerText = "This text has been changed!";
    })
};