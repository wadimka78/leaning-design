/* document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close');
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
        closeBtn.addEventListener('click', switchModal);
    });




    modal.addEventListener("click", function (event) {
        var target = event.target;
        if (target.closest(".modal__dialog") && !target.closest(".form__input") && !target.closest(".form__label"))
            event.stopPropagation();
        else
            modal.classList.toggle('modal--visible');
    });


    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.toggle('modal--visible');
        } 
    });
});
 */

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]');
    closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    /*Закрытие по фону*/

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

    /*Закрытие по кнопке*/

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            modal.toggleClass('modal--visible');
        }
    });

    /*Кнопка прокрутки*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
        mySwiper.on('slideChange', function () {
            $( "div.slider-titles/h3" ).each(function( i ) { if( i==currentSlideNumber) this.addClass("highlightedNumber"); else this.removeClass("highlightedNumber") 
            console.log("Current slide=" + mySwiper.activeIndex );
        });
    });


    var nextBtn = $('.swiper-button-next');
    var prevtBtn = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    nextBtn.css('left', prevtBtn.width() + 10 + bullets.width() + 10)
    bullets.css('left', prevtBtn.width() + 10)

});