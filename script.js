// Get references to the guide div and logo image
const guideDiv = document.getElementById("guide");
const logoImg = document.getElementById("logo");
const aboutDiv = document.getElementById("about")

// event listener for guide element
guideDiv.addEventListener("click", function() {
    window.location.href = "guide.html";
    console.log = "clicked"
});

// event listener for about element
aboutDiv.addEventListener("click", function() {
    window.location.href = "about.html";
});

// event listener for logo
logoImg.addEventListener("click", function() {
    window.location.href = "index.html";
});

