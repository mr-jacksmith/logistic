const slideAccessories = (n) => {
    showCurrentSlideAccessories(currentIndexAccessories = n)
}

const slidePlusAccessories = (n) => {
    showCurrentSlideAccessories(currentIndexAccessories += n)
}

const showCurrentSlideAccessories = (n) => {
    const dots = document.getElementsByClassName('dot-accessories')

    if (n > 4) {
        currentIndexAccessories = 1
        n = 1
    }

    if (n < 1) {
        currentIndexAccessories = 4
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
    waveObjAccessories.style.transform = `translateX(${difference}%)`
}

let currentIndexAccessories = 1
const waveObjAccessories = document.querySelector('.product-accessories')

showCurrentSlideAccessories(currentIndexAccessories)