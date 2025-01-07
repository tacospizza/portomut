<script>
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSlidePosition() {
        const slideWidth = images[0].clientWidth;
        slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last slide
        }
        updateSlidePosition();
    });

    // Handle resizing to keep alignment
    window.addEventListener('resize', updateSlidePosition);
});
</script>
