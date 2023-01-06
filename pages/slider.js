
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const sliderContainer = document.querySelector('.slider-container');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItem = document.querySelectorAll('.slider-item');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const itemsCount = sliderItem.length;
    const itemWidths = sliderContainer.clientWidth/slidesToShow;
    let movePosition = slidesToScroll * itemWidths;

    sliderItem.forEach((item)=>{
        item.style.minWidth = `${itemWidths}px`;
    })
    btnNext.addEventListener('click',function (    ) {
        const itemsLeft = itemsCount - Math.abs(position+ slidesToShow*itemWidths)/itemsCount
        position -= movePosition >= slidesToScroll?movePosition:itemsLeft*itemWidths;
        setPosition()
        checkButtons()

    })
    btnPrev.addEventListener('click',function (    ) {
        const itemsLeft = Math.abs(position)/itemWidths
        position +=  movePosition >= slidesToScroll?movePosition:itemsLeft*itemWidths;
        setPosition()
        checkButtons()

    })
    const setPosition = () => {
        sliderTrack.style.transform =`translateX(${position}px)`;
    }
    const checkButtons = ()=>{
        btnPrev.disabled = position === 0;
        btnNext.disabled  =  position<= -(itemsCount - slidesToShow)*itemWidths
    }
    checkButtons()
