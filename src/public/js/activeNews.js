const slideNews = (n) => {
    showCurrentSlideNews(currentIndexNews = n)
}

const slidePlusNews = (n) => {
    showCurrentSlideNews(currentIndexNews += n)
}

const showCurrentSlideNews = (n) => {
    const dots = document.getElementsByClassName('dot-news')

    if (n > 4) {
        currentIndexNews = 1
        n = 1
    }

    if (n < 1) {
        currentIndexNews = 4
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
    waveObjNews.style.transform = `translateX(${difference}%)`
}

let currentIndexNews = 1
const waveObjNews = document.querySelector('#wave-news-content')

showCurrentSlideNews(currentIndexNews)