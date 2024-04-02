$(function () {

    const menu = $('header nav ul li ')
    contents = $('.fullpage .section')

    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationTooltips: ['HOME', 'PROFILE', 'PORTFOLIO', 'PORTFOLIO', 'CONTACT', 'FOOTER'],
        slidesNavigation: true,
        normalScrollElements: '.tabitem', 
        responsiveWidth: 992,
        afterLoad: function (anchorLink, index) {
            console.log('현재 영역 번호는' + index)

            if (index == 1) {
                menu.removeClass('on')
                $('header nav ul li:nth-child(1)').addClass('on')
            }
            if (index == 2) {
                menu.removeClass('on')
                $('header nav ul li:nth-child(2)').addClass('on')
            }
            if (index == 3) {
                menu.removeClass('on')
                $('header nav ul li:nth-child(3)').addClass('on')
            }
            if (index == 4) {
                menu.removeClass('on')
                $('header nav ul li:nth-child(4)').addClass('on')
            }
            if (index == 5) {
                menu.removeClass('on')
                $('header nav ul li:nth-child(5)').addClass('on')
            }
        }
    })

    // header

    menu.click(function () {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    })

    // portfolio

    $('.tabmenu li').click(function () {

        let idx = $(this).index()
        console.log(idx)

        $('.tabmenu li').removeClass('on')
        $(this).addClass('on')

        $('.tabitem > *').hide().removeClass('on')
        $('.tabitem > *').eq(idx).show().addClass('on')

    })

    // popup

    $('.gallery .clip').click(function () {
        $('.popup').addClass('on')
        $('.popup').append('<div class="iframebox"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + $(this).data("yclip") + '" title="YouTube video player" frameborder="0" allowfullscreen></iframe></div>')
    })

    $('.popup .popupfull').click(function () {
        $('.popup').removeClass('on')
        $('.popup .iframebox').remove()
    })

    // hamburger


    $('.hamburger').click(function () {
        $('.mobile-nav').slideToggle()
    })

    // popup

    $('#popup').hide();

    $('.clip').click(function() {
        $('#popup').show();
        $('body').css('overflow', 'hidden'); 
    });

    $('#closeButton').click(function() {
        $('#popup').hide();
        $('body').css('overflow', ''); 
    });


})



