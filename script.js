window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btnBackToTop = document.getElementById("btnBackToTop");

    // Show button when user scrolls down 20px from the top of the document
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

function scrollToTop() {
    // Scroll to the top of the document with smooth animation
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
