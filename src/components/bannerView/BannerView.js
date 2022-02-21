import './BannerView.scss';

const BannerView = () => {
    const testBtn = document.querySelector('.test-button');

    testBtn.addEventListener('click', (e) => {  
        console.log('클릭 되었습니다.');
    })
}

export default BannerView;