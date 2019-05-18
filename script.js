var slideIndex = 0;
function startProgress() {
    // set Interval receives two params: (1) function; (2) interval to call the function
    var slides = document.getElementsByClassName("showSlide");
    slides[0].style.display = "block";
    setInterval(updateProgress, 3000);
}

function updateProgress() {
    // Read current progress
    var progressValue = document.getElementById("progress").value;
  
    // Incremeant progress by 1
    progressValue++;

    // Update progress
    document.getElementById("progress").value = progressValue;
    // number of images
    var slides = document.getElementsByClassName("showSlide");
    // increase by 1, Global variable
    slideIndex++;
    if (slideIndex >= slides.length)  
    { 
        slideIndex = 0; 
    } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex].style.display = "block";
}
