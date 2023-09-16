// Get references to the guide div and logo image
const blogDiv = document.getElementById("blog");
const logoImg = document.getElementById("logo");
const aboutDiv = document.getElementById("about")

// event listener for guide element
blogDiv.addEventListener("click", function() {
    window.location.href = "blog.html";
});

// event listener for about element
aboutDiv.addEventListener("click", function() {
    window.location.href = "about.html";
});

// event listener for logo
logoImg.addEventListener("click", function() {
    window.location.href = "index.html";
});

