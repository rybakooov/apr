$(document).ready(function(){


    //! masonry init
    const $firstBlock = document.querySelector('.services-bot_1');
    let firstMasonry = null;
    if($($firstBlock).length) {
        firstMasonry = $($firstBlock).masonry({
            itemSelector: '.grid-item',
            gutter: 24,
            transitionDuration: 0,
        });

    };


    const $secondBlock = document.querySelector('.services-bot_2');
    let secondMasonry = null;
    if($($secondBlock).length) {
        secondMasonry = $($secondBlock).masonry({
            itemSelector: '.grid-item',
            gutter: 24,
            transitionDuration: 0,
        });
    };

    const $thirdBlock = document.querySelector('#third-block')
    if($($thirdBlock).length) {
        const third = new Masonry($thirdBlock, {
            itemSelector: '.grid-item',
            gutter: 24,
        });
    };

    const $fourthBlock = document.querySelector('#fourth-block')
    if($($fourthBlock).length) {
        const third = new Masonry($fourthBlock, {
            itemSelector: '.grid-item',
            gutter: 24,
        });
    };
    //! masonry init end



    //! EVENTS
    $(document).on('click', ".services-tabs__item:not(.active)", function(e) {
        e.preventDefault();
        let selector = $(this).attr('data-tab');

        $('.services-tabs__item.active').removeClass('active');
        $(this).addClass('active');

        $('.services-top__title.active').removeClass('active');
        $('.services-top__title_' + selector).addClass('active');

        $('.services-bot.active').removeClass('active');
        $('.services-bot_' + selector).addClass('active');
       
        switch (selector) {
            case '1': 
                firstMasonry.masonry();
                break;
            case '2':
                secondMasonry.masonry();
                break;
        }

    });

    $(document).on('click', '.right__burger', function() {
        $('.right__burger').toggleClass('right__burger-active');
        $('.right-menu').toggleClass('opened');
    });


    $(document).on('click', '.orderCall', function() {
        $('.header-form').addClass('opened');
        $('body').addClass('body-overflow');
    })


    $(document).on('click', '.contact-wrap-left__close', function() {
        $('.header-form').removeClass('opened');
        $('body').removeClass('body-overflow');
        $('.right-menu').removeClass('opened');
        $('.right__burger').removeClass('right__burger-active');
    })
    //! EVENTS END
});

    
