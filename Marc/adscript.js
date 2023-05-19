$(document).ready(function() {
  var slideshow = $('#slideshow img');
  var currentIndex = 0;

  function showImage(index) {
    slideshow.removeClass('active');
    slideshow.eq(index).addClass('active');
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % slideshow.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000); 
});