const slideClother = (n) => {
    showCurrentSlideClother(currentIndexClother = n)
}

const slidePlusClother = (n) => {
    showCurrentSlideClother(currentIndexClother += n)
}

const showCurrentSlideClother = (n) => {
    const dots = document.getElementsByClassName('dot-clother')

    if (n > 4) {
        currentIndexClother = 1
        n = 1
    }

    if (n < 1) {
        currentIndexClother = 4
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
    waveObjClother.style.transform = `translateX(${difference}%)`
}

let currentIndexClother = 1
const waveObjClother = document.querySelector('.product-clother')

showCurrentSlideClother(currentIndexClother)