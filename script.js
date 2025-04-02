window.onloadfunction = function () {
    let titleElement = document.getElementById("title");

    if(titleElement) {
        console.log("Element found:", titleElement);
        titleElement.textContent = "JavaScript is working!";
    } else {
        console.error("Element with id 'title' not found.");
    }
};