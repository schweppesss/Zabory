$(document).ready(function (){
    $('.quiz-item.active').find('.quiz-answer').each(function (){
        $(this).click(function (){
            let input = $(this).find('input');
            $(`.quiz-info_item span[data-q="${input.attr('name')}"]`).text(input.val())
            $('.quiz-item.active').find('.quiz-answer').removeClass('active');
            $(this).addClass('active');
        })
        $(this).find('input').on('click',function (e){
            e.stopPropagation();
        })
    })
    $('.quiz-btn_next').each(function (){
        $(this).click(function (){
            $('.quiz-item').removeClass('active');
            $(`.quiz-item[data-q="${$(this).attr("data-next")}"]`).addClass('active')
            $('.quiz-item.active').find('.quiz-answer').each(function (){
                $(this).click(function (){
                    let input = $(this).find('input');
                    $(`.quiz-info_item span[data-q="${input.attr('name')}"]`).text(input.val());
                    if(input.attr('name') == 'q5'){
                        $(this).toggleClass('active');
                    }else{
                        $('.quiz-item.active').find('.quiz-answer').removeClass('active');
                        $(this).addClass('active');
                    }
                })
                $(this).find('input').on('click',function (e){
                    e.stopPropagation();
                })
            })
        })
    })
    const ourWorks = new Swiper('.our-works__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.our-works__next',
            prevEl: '.our-works__prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },

            400: {
                slidesPerView: 2,
            },

            800: {
                slidesPerView: 3,
            },
        }
    });
    const review = new Swiper('.review__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.review__next',
            prevEl: '.review__prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },

            400: {
                slidesPerView: 2,
            },

            800: {
                slidesPerView: 3,
            },
        }
    });
})