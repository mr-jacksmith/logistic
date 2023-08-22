const slideShoes = (n) => {
    showCurrentSlideShoes(currentIndexShoes = n)
}

const slidePlusShoes = (n) => {
    showCurrentSlideShoes(currentIndexShoes += n)
}

const showCurrentSlideShoes = (n) => {
    const dots = document.getElementsByClassName('dot-shoes')

    if (n > 4) {
        currentIndexShoes = 1
        n = 1
    }

    if (n < 1) {
        currentIndexShoes = 4
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
    waveObjShoes.style.transform = `translateX(${difference}%)`
}

let currentIndexShoes = 1
const waveObjShoes = document.querySelector('.product-shoes')

showCurrentSlideShoes(currentIndexShoes)