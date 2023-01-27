const images = document.querySelectorAll('.img-effect');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('blur');
    });
    image.addEventListener('mouseout', () => {
        image.classList.remove('blur');
    });
});
