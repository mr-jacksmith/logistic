const slide = (n) => {
    showCurrentSlide(currentIndex = n)
}

const slidePlus = (n) => {
    showCurrentSlide(currentIndex += n)
}

const showCurrentSlide = (n) => {
    const dots = document.getElementsByClassName('dot')

    if (n > 4) {
        currentIndex = 1
        n = 1
    }

    if (n < 1) {
        currentIndex = 4
        n = 4
    }

    for (let i = 0; i < dots.length; i++) {
        const el = dots[i]
        el.classList.remove('active')
    }

    for (let i = 0; i < dots.length; i++) {
        if (i == (n - 1)) {
            dots[i].classList.add('active')
        }
    }

    difference = -(100 * (n - 1))
    waveObj.style.transform = `translateX(${difference}%)`
}

let currentIndex = 1
let overWave = false
const waveObj = document.querySelector('.wave')

const setOverWave = (e) => {
    if(e.type==="mouseover" || e.type==="click" || e.type==="mousemove")
        overWave = true
    else if(e.type==="mouseout")
        overWave = false
}

waveObj.addEventListener('mouseover', setOverWave)
waveObj.addEventListener('mouseout', setOverWave)
waveObj.addEventListener('click', setOverWave)
waveObj.addEventListener('mousemove', setOverWave)
showCurrentSlide(currentIndex)

setInterval(() => {
    if (!overWave) showCurrentSlide(currentIndex += 1)
}, 5000);