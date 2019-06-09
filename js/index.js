var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('gallery-slideshow');
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

function readMore() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var buttonText = document.getElementById('button-read-more');
    
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        buttonText.innerHTML = 'Читати далі';
        moreText.style.display = 'none';
    } else {
        dots.style.display = 'none';
        buttonText.innerHTML = 'Згорнути';
        moreText.style.display = 'inline';
    }
}    

window.onscroll = function() {scrollDown()};

function scrollDown() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('button-scroll-to-top').style.display = 'block';
    } else {
        document.getElementById('button-scroll-to-top').style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

