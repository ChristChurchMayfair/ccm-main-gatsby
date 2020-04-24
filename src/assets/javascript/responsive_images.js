class ResponsiveBackgroundImage {

    constructor(element) {
        this.element = element;
        this.img = element.querySelector('img');
        this.src = '';

        this.img.addEventListener('load', () => {
            this.update();
        });

        if (this.img.complete) {
            this.update();
        }
    }

    update() {
        let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
        if (this.src !== src) {
            this.src = src;
            this.element.style.backgroundImage = 'url("' + this.src + '")';
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loaded responsive background images script...");
    let elements = Array.from(document.querySelectorAll('[responsive-background-image]'));
    var responsiveBackgroundImages = elements.map(responsiveBackgroundImageElement => new ResponsiveBackgroundImage(responsiveBackgroundImageElement));
});