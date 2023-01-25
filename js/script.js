$(document).on('ready', function () {



        let windowW = $(window).width();

        setTimeout(function () {
            $('#header').addClass('active');
        }, 100);

        setTimeout(function () {
            $(".main").addClass("on");

        }, 50);
        gnbCommonText();
        // allMenuTop();
        hamOn();
        scrollAni();
        aosAni();
        col2();
        col3();
        sidebySide();

        if (windowW < 851) {
            moCol1();
        }


    $(window).on('resize', function () {
        aosAni();
        let windowW = $(window).width();
        if (windowW < 851) {
            moCol1();
        }
    });


    AOS.init({
        duration: 500,
        // easing: 'ease-in-sine',
        offset: 100,
    });
})
// gnb 같이쓰기
function gnbCommonText() {
    let gnbList = $('.gnb').html();
    $('.all_menu').html(gnbList);


}

function hamOn() {


    $('.ham').on('click', function () {
        $('html').toggleClass('gnb_open');
        // allMenuTop();
    });
}

function scrollAni() {
    $('a[href^="#link"').on('click', function () {
        let href = $(this).attr('href');
        let hrefTop = $(href).offset().top;

        $('body, html').animate({
            'scrollTop': hrefTop
        });

        $('html').removeClass('gnb_open');

    })
}

function aosAni() {
    if ($(window).width() < 851) {
        $('.sect06 .img01').attr('data-aos', 'fade-down');
        $('.sect06 .img02').attr('data-aos', 'fade-up');
        $('.provide_money *').attr('data-aos-delay', '0');
        $('.sect07 *').attr('data-aos-delay', '0');

    }
}

function col2() {
    let colStyle = $('.col_2').attr('style');
    $('.col_2 > *').attr('style', colStyle);
}

function col3() {
    let colStyle = $('.col_3').attr('style');
    $('.col_3 > *').attr('style', colStyle);
}

function sidebySide() {
    let colStyle = $('.side_by_side').attr('style');
    $('.side_by_side > *').attr('style', colStyle);
}

function moCol1() {
    let colStyle = $('.mo_col_1').attr('style');
    $('.mo_col_1 > *').attr('style', colStyle);
}