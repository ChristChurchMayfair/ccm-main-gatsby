function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class Carousel {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.src = '';
        this.currentSlideIndex = null;

        console.log("Creating carousel on: " + this.rootElement);

        this.pictures = Array.from(this.rootElement.getElementsByClassName("carousel-image"));

        this.setCurrentSlide(0);
    }

    setCurrentSlide(newCurrentSlideIndex) {
        //Remove current slide
        if (this.currentSlideIndex !== null) {
            this.pictures[this.currentSlideIndex].style.opacity = 0;
            // setTimeout( (function() {
            //     this.style.display = 'none';
            // }).bind(this.pictures[this.currentSlideIndex]), 5000);
        }

        this.currentSlideIndex = newCurrentSlideIndex;

        setTimeout( (function() {
            // this.style.display = 'block';
            this.style.opacity = 1;
        }).bind(this.pictures[this.currentSlideIndex]), 10);
        // this.pictures[this.currentSlideIndex].style.display = "block";
        // this.pictures[this.currentSlideIndex].style.opacity = 1;
        
    }

    nextSlide() {
        var nextSlideIndex = this.currentSlideIndex + 1;
        if (nextSlideIndex >= this.pictures.length) {
            nextSlideIndex = 0;
        }
        this.setCurrentSlide(nextSlideIndex);
    }
}

//Do things when the DOM content has loaded so that we can safely manipulate the DOM.
document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded the carousel script");
    var carouselRoots = Array.from(document.querySelectorAll(".carousel-images"));
    console.log(carouselRoots);
    var carousels = carouselRoots.map(rootElement => new Carousel(rootElement));

    
    window.setInterval(function() {
        carousels.forEach(carousel => carousel.nextSlide());
    }, 5000);

});
