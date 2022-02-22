import './BannerView.scss';

const BannerView = () => {
    let currentSlide = 0;
    let isMoving = false;
    const DURATION = 500;
    let $carouselSlides = null;
    let $controller = document.querySelector('.banner-view');

    const move = (currentSlide, duration = 0) => {
        if(duration) isMoving = true;
        $carouselSlides.style.setProperty('--duration', duration);
        $carouselSlides.style.setProperty('--currentSlide', currentSlide);
    }

    document.addEventListener('DOMContentLoaded', () => {
        $carouselSlides = document.querySelector('.show-view');
    })

    window.onload = () => {

        move(++currentSlide);
    }
    
    $controller.addEventListener('click', ({ target }) => {
        if(!target.classList.contains('controller') && !target.classList.contains('dot')) return;
        if(target.classList.contains('active')) return;

        const delta = target.classList.contains('prev') ? 1 : 2;
        
        if(delta === 1) {
            document.querySelector('.dot.prev').classList.add('active');
            document.querySelector('.dot.next').classList.remove('active');
        } else {
            document.querySelector('.dot.next').classList.add('active');
            document.querySelector('.dot.prev').classList.remove('active');
        }

        move(delta, DURATION);
    })

    // $carouselSlides.addEventListener('transitionend', () => {
    //     isMoving = false;
    // })
}

export default BannerView;