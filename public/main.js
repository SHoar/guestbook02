/* Time-transition photoslide */
var gallery = document.querySelector('.js-gallery')
var galleryItems = gallery.querySelectorAll('.js-gallery-item')

var slideCount = galleryItems.length
var slideWidth = galleryItems[0].getBoundingClientRect().width

// var slideInterval = setInterval(transitionSlide, 5000)
var currentSlide = 1

var sliderNav = document.querySelector('.js-nav-list')
sliderNav.addEventListener('click', transitionSlide)

function transitionSlide( e ) {
  e.preventDefault()

  var currentDirection = e.target.dataset.direction
  if (currentDirection === 'left' && currentSlide === 1) return
  if (currentDirection === 'right' && currentSlide === slideCount) return
  if ( currentDirection === 'left' ) {
    currentSlide--
  } else {
    currentSlide++
  }
  gallery.style.transform = "translateX(-" + slideWidth * (currentSlide - 1) + "px)"
  console.log( currentSlide )
}