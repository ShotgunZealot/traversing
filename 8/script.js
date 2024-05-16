document.addEventListener('DOMContentLoaded', function () {
    const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
    let currentIndex = 0;
    const currentImage = document.querySelector('.current-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    showImage(currentIndex);

    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);

    function showImage(index) {
        console.log(index)
        currentImage.src = images[index];
    }

    function showPreviousImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    function showNextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }
});
