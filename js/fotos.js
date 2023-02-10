const imgArray = ['../IMG/reto.jpg', 'path/to/img2.jpg', 'path/to/img3.jpg'];
let currentImg = 0;

function updateHeaderImage() {
    document.querySelector('.contenido-header img').src = imgArray[currentImg];
    currentImg = (currentImg + 1) % imgArray.jpg.length;
}

setInterval(updateHeaderImage, 3000);