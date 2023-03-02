$(function(){

    // Scroll header
	const $menu = $("header");
    $(window).on('scroll', function(){    	
    	$(this).scrollTop() > 20 ? $menu.addClass("scrolled-heder") : $menu.removeClass("scrolled-heder")
    });

    // Counts Spin
    let show = true;
    let countbox = ".benefits__number";
    if($('.benefits__number').length){
        $(window).on("scroll load resize", function () {
            if (!show) return false;
            let w_top = $(window).scrollTop(),
                e_top = $(countbox).offset().top,
                w_height = $(window).height(),
                d_height = $(document).height(),
                e_height = $(countbox).outerHeight();
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $(countbox)
                    .css('opacity', '1')
                    .spincrement({
                        thousandSeparator: "",
                        duration: 3000
                    });
                show = false;
            }
        });
    }


    // Mobile menu
    $('#toggle-mobile-menu').on('click', function(){
        $(this).toggleClass('open-mobile')
        $('.wrap__header--nav').slideToggle();
    })

    // Flipper
    $('.card .button-flipp').on('click', 'a', function(e){
        e.preventDefault();
        $(this).parents('.item-card').toggleClass('is-flipped');
    })

    // OutTeam
    $('#our-team-list-toggle').on('click', function(e){
        e.preventDefault()
        $(this).add('#our-team-list').toggleClass('isOpen');
    })

    // Grat slider
    let sliderBig = $('.slider-grat')
    if(sliderBig.length){
        sliderBig.slick({
            dots: false,
            infinite: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
        });
    }

    // Partners slider
    let sliderStories = $('.carusel-partners')
    if(sliderStories.length){
        sliderStories.slick({
            dots: false,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    // Map
    $('.element-toggle-info').on('click', function(){
        $(this).siblings('.hidden-elenet')
                .toggleClass('isOpen')
                .parents()
                .addClass('xIndex')
                .siblings('.map-marker')
                .removeClass('xIndex')
                .find('.hidden-elenet')
                .removeClass('isOpen')
    })
    $(document).on('click', function(e){
        let $block = $(".map-marker")
        if (!$block.is(e.target) && $block.has(e.target).length === 0){
            $('.hidden-elenet').removeClass('isOpen')
        }
    });
	
    // Slider gallery
    let sliderMainGalery = $('.main-lider-subpage-gallery');
    let sliderSecondGallery = $('.second-lider-subpage-gallery');
    if(sliderMainGalery.length & sliderSecondGallery.length){
        sliderMainGalery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.second-lider-subpage-gallery'
        });
        sliderSecondGallery.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.main-lider-subpage-gallery',
            dots: false,
            // centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }


    
});