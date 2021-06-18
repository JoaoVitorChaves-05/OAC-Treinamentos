let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;
let nomeCurso = document.querySelector(".info h1")

function nextImage() {
    
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
    nomeCurso.innerHTML = images[currentImageIndex].name
}

function start() {
    setInterval(() => {
        nextImage();
    }, time)
}

window.addEventListener("load", start)