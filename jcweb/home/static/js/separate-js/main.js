'use strict';


loader(function () {
    resize();
    noAnim();
    changeMenu()
});


function resize() {
    console.log('resize')
}


function initPage() {
    console.log('initPage');
    $('.menu, .section').addClass('active').wait(1000).addClass('pointer');


    if ($('.home-page').length) {
        $('.home-slide.blueberry').addClass('active')
    }
    else if ($('.product-page').length) {
        // if (innerWidth < 1200) {
        //     $('.menu').addClass('white');
        // }
        var timeNow = moment().format('YY.MM.DD');
        var timeEndDel = moment().subtract(3, 'months').format('YY.MM.DD');
        var timeStartDel = moment().add(1, 'year').format('YY.MM.DD');
        $('.time-line_month').each(function (i) {
            var timeStart = $(this).data('date');
            var timeEnd = $(this).next().data('date');
            if (!timeEnd) {
                timeEnd = $(this).parent().next().data('date');
            }
            if (timeStart < timeEndDel || timeStart > timeStartDel) {
                if (!$(this).closest('.time-line_active').length) {
                    $(this).remove()
                }
            }
            if (timeStart < timeNow && timeEnd > timeNow) {
                $(this).addClass('active')
                if (!$(this).find('.time-line_text').length) {
                    var text = $(this).closest('.time-line').data('text');
                    var text2 = $(this).closest('.time-line').data('text2');
                    $(this).prepend('<div class="time-line_before">' + text + '</div>');
                    $(this).append('<div class="time-line_text"><div class="time-line_days">365</div>' + text2 + '</div><div class="time-line_bg"></div>');
                }
                else {
                    $(this).append('<div class="time-line_bg"></div>');
                }
            }

        });
        timeLine();
    }
    else if ($('.product-in-page').length) {
        // if (innerWidth < 1200) {
        //     $('.menu').addClass('white');
        // }
    }
    else if ($('.blog-page').length) {
    }
    else if ($('.article-page').length) {
        if (innerWidth > 1200) {
            $('.menu').addClass('white');
        }
    }
    else if ($('.about-page').length) {
    }
    else if ($('.contact-page').length) {
        if (innerWidth > 1200) {
            $('.menu').addClass('white');
        }
    }
    else if ($('.error-page').length) {
    }
}
function timeLine() {
    $('.time-line').each(function () {
        $(this).find('.time-line_month:not(.animate)').each(function (i) {
            if ($(this).offset().top < $(document).scrollTop() + innerHeight * .8) {
                if (!$(this).hasClass('active')) {
                    $(this).wait(300 * i).addClass('animate');
                }
                else {
                    var timeCount = $(this).closest('.time-line').data('start');
                    if (moment(timeCount, 'YY.MM.DD').isAfter()) {
                        var count = moment(timeCount, 'YY.MM.DD').diff(moment(), 'days');
                    }
                    else {
                        var count = moment(timeCount, 'YY.MM.DD').add(1, 'year').diff(moment(), 'days');
                    }
                    $(this).wait(300 * i).addClass('animate').find('.time-line_days').prop('Counter', 365).animate({
                        Counter: count
                    }, {
                        duration: 2000,
                        easing: 'easeOutCirc',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });

                }
            }
        })
    })
}
function reInitPage(href, callback) {
    console.log('reInitPage');
    var speed = 1000;
    $('.menu.open').addClass('re-init');
    $('.menu, .section').removeClass('active pointer');
    $('.cursor,.cursor_dot').removeClass('visible');
    if ($('.home-page').length) {
        $('.home-slide').removeClass('active')
    }
    else if ($('.product-page').length) {
        $('.active, .animate').removeClass('active animate');
    }
    else if ($('.product-in-page').length) {
    }
    else if ($('.blog-page').length) {
    }
    else if ($('.article-page').length) {
    }
    else if ($('.about-page').length) {
    }
    else if ($('.contact-page').length) {

    }
    else if ($('.error-page').length) {
    }

    setTimeout(function () {
        if (!callback) {
            location.assign(href);
            setTimeout(function () {
                location.reload();
            }, 1000)
        }
        else {
            callback()
        }
    }, speed);


}

function noAnim() {
    if ($('.no-anim').length) {
        $('.no-anim').each(function () {
            if ($(document).scrollTop() + innerHeight * 0.7 > $(this).offset().top) {
                $(this).removeClass('no-anim')
            }
        })
    }
}
function changeMenu() {
    if (innerWidth > 1200) {
        var elem = '.more_news';
        if ($(elem).length) {
            $(elem).each(function () {
                if ($(document).scrollTop() + innerHeight * 0.5 > $(this).offset().top) {
                    $('.menu').removeClass('white');
                }
                else {
                    $('.menu').addClass('white');
                }
            })
        }
    }

}

$(document).on('click', '.menu_btn', function (e) {
    $('.menu').toggleClass('open');
    $('html, body').toggleClass('overflow');
    // console.log($('.menu').hasClass('open'));
    if ($('.menu').hasClass('open')) {
        $('.cursor').removeClass('white');
        $('.cursor_dot').removeClass('white');
    }
    else {
        if ($('.menu').hasClass('white')) {
            $('.cursor').addClass('white');
            $('.cursor_dot').addClass('white');
        }
    }
}).ready(function () {
    $('.slider').bxSlider({
        controls: false,
        pager: false,
        onSliderLoad: function () {
            var _this = this;
            // console.log(this)
            var sliderClick = false;
            this.closest('.slider_wrap').find('.all').text(this.getSlideCount())
            this.closest('.slider_wrap').find('.this').text(this.getCurrentSlide() + 1)
            this.closest('.slider_wrap').find('.next').click(function () {
                if (!sliderClick) {
                    sliderClick = true;
                    _this.goToNextSlide();
                    setTimeout(function () {
                        sliderClick = false;
                    }, 500)
                }
            });
            this.closest('.slider_wrap').find('.prev').click(function () {
                if (!sliderClick) {
                    sliderClick = true;
                    _this.goToPrevSlide();
                    setTimeout(function () {
                        sliderClick = false;
                    }, 500)
                }
            });

        },
        onSlideBefore: function (a, b, c) {
            this.closest('.slider_wrap').find('.this').text(c + 1)
        }
    });

}).on('click', 'a:not([target="_blank"]):not(.bx-pager-link):not(.no-go-js)', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    reInitPage(href)
}).on('click', '.article_back', function (e) {
    e.preventDefault();
    reInitPage('', function () {
        history.back()
    })
}).on('click', '.slider_item', function (e) {
    e.preventDefault();
    $('.full_slider').addClass('active')

}).on('click', '.mask, .close', function (e) {
    e.preventDefault();
    $('.full_slider').removeClass('active')
}).on('click', '.table_more', function (e) {
    e.preventDefault();
    $(this).toggleClass('active').next('.table_more_wrap').slideToggle();
}).on('click', '.product_btn_anchor a', function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('body, html').stop().animate({scrollTop: $(href).offset().top}, 1000);
})
$('.product-in-page  .article-prod_prev,.product-in-page  .article-prod_next').hover(function (e) {
    $('.article-prod_next').removeClass('active')
});
$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        $('.menu').removeClass('open');
        $('html, body').removeClass('overflow')
        $('.full_slider').removeClass('active')
    }
});
var scrollLine = 0
$(document).scroll(function (e) {
    noAnim();
    changeMenu();
    timeLine();
    if (innerWidth < 1200) {

        if (scrollLine - 50 > $(document).scrollTop()) {
            $('.product_item').each(function () {
                var elem = $(this).attr('id');
                if ($(document).scrollTop() + innerHeight > $(this).offset().top && $(document).scrollTop() + innerHeight < $(this).offset().top + $(this).height()) {
                    $('.product_btn_anchor .' + elem + '_btn').wait(1).removeClass('hide').wait(1).addClass('show');
                    $('.product_btn_center .' + elem + '_btn').removeClass('hide').removeClass('show');
                }
                else {
                    $('.product_btn_anchor .' + elem + '_btn').removeClass('show').wait(1).addClass('hide');
                    $('.product_btn_center .' + elem + '_btn').addClass('hide').removeClass('show');
                }
            });
            scrollLine = $(document).scrollTop();
        }
        else if (scrollLine + 50 < $(document).scrollTop()) {
            $('.product_item').each(function () {
                var elem = $(this).attr('id');
                if ($(document).scrollTop() + innerHeight > $(this).offset().top && $(document).scrollTop() + innerHeight < $(this).offset().top + $(this).height()) {
                    $('.product_btn_anchor .' + elem + '_btn').removeClass('hide').removeClass('show');
                    $('.product_btn_center .' + elem + '_btn').removeClass('hide').addClass('show');
                }
                else {
                    $('.product_btn_anchor .' + elem + '_btn').addClass('hide').removeClass('show');
                    $('.product_btn_center .' + elem + '_btn').removeClass('show').addClass('hide');
                }
            });
            scrollLine = $(document).scrollTop()
        }
    }
});
var clientSlider;
if ($('.home-page').length) {
    $(document).on('mousewheel', function (e) {

        e.preventDefault();
        var delta = e.deltaY;
        homeSlider(delta)
    });

    $(document).on('touchstart', function (e) {

        clientSlider = e.changedTouches[0].pageY
    })
    $(document).on('touchend', function (e) {
        // e.preventDefault();
        console.log(clientSlider, e.changedTouches[0].pageY)
        if (clientSlider - 30 > e.changedTouches[0].pageY) {
            homeSlider(-1)
        }
        else if (clientSlider + 30 < e.changedTouches[0].pageY) {
            homeSlider(1)
        }
    });
}
if (innerWidth > 1200) {
    cursor();
}
var scroll = $(document).scrollTop();
var pause = false;
function homeSlider(delta) {
    if (!pause) {
        var elem = $('.home-slide.active');
        if (delta > 0 && elem.prev().length) {
            pause = true;
            $('.home-slide').removeClass('active');
            setTimeout(function () {
                elem.prev().addClass('active');
                setTimeout(function () {
                    pause = false
                }, 1000)
            }, 1000)
        }
        else if (delta < 0 && elem.next().length) {
            pause = true;
            $('.home-slide').removeClass('active');
            setTimeout(function () {
                elem.next().addClass('active');
                setTimeout(function () {
                    pause = false
                }, 1000)
            }, 1000)
        }


    }
}

$('article h1').append(' <div class="line-anim"> <i></i> <i></i> <i></i> </div>')


function cursor() {
    var cursor = $('.cursor');
    var cursorIn = $('.cursor_dot');
    var hoverMin = '.cur-hover, .more,.next,.prev, .close, .table_more, .link';
    var hoverWhite = '.cur-white, .product_item';
    var hoverMenu = '.menu_btn';
    var notMenu = false;
    var notSocial = false;
    var hoverIco = '.social_ico,.lang_cursor';
    var x = 10;
    var y = 10;
    $('body, html').one('mousemove', function (e) {
        $('.cursor,.cursor_dot').wait(500).addClass('visible');
    });
    $('body, html').mousemove(function (e) {
        x = e.pageX - $(document).scrollLeft();
        y = e.pageY - $(document).scrollTop();
        if (!notMenu) {
            cursorIn.css({
                left: x,
                top: y
            })
        }
    });
    cursorMove();
    $(hoverMin).hover(function () {
        cursor.addClass('min');
        cursorIn.addClass('min');
    }, function () {
        cursor.removeClass('min');
        cursorIn.removeClass('min');
    });
    $(hoverWhite).hover(function () {
        cursor.addClass('white');
        cursorIn.addClass('white');
    }, function () {
        cursor.removeClass('white');
        cursorIn.removeClass('white');
    });
    $(hoverMenu).hover(function () {
        notMenu = true;
        cursor.addClass('menu-cursor');
        cursorIn.addClass('menu-cursor');
    }, function () {
        notMenu = false;
        cursor.removeClass('menu-cursor');
        cursorIn.removeClass('menu-cursor');
    });
    $(hoverIco).hover(function () {
        notSocial = true;
        cursor.addClass('ico-cursor');
        cursorIn.addClass('ico-cursor');
        $(this).addClass('cur');
    }, function () {
        notSocial = false;
        cursor.removeClass('ico-cursor');
        cursorIn.removeClass('ico-cursor');
        $(hoverIco).removeClass('cur');
    });
    function cursorMove() {
        requestAnimationFrame(function () {
            var left = cursor.offset().left;
            var top = cursor.offset().top;
            if (!notMenu && !notSocial) {
                cursor.css({
                    left: x - ((x - left) / 1.2),
                    top: y - ((y - top) / 1.2),
                });
            }
            else if (!notSocial) {
                x = $('.menu_btn').offset().left - $(document).scrollLeft() + $('.menu_btn').innerWidth() / 2;
                y = $('.menu_btn').offset().top - $(document).scrollTop() + $('.menu_btn').innerHeight() / 2;
                cursor.css({
                    left: x - ((x - left) / 1.4),
                    top: y - ((y - top) / 1.4),
                });
            }
            else if (!notMenu) {
                var ico = $('.social_ico.cur span, .lang_cursor.cur span')
                x = ico.offset().left - $(document).scrollLeft() + ico.width() / 2;
                y = ico.offset().top - $(document).scrollTop() + ico.height() / 2;
                cursor.css({
                    left: x - ((x - left) / 1.4),
                    top: y - ((y - top) / 1.4),
                });
            }
            cursorMove()
        })
    }
}
$('.menu').mousemove(function () {
    if ($(this).hasClass('open')) {
        $('.cursor').removeClass('white');
        $('.cursor_dot').removeClass('white');
    }
});
$('.menu').hover(function () {
    if ($(this).hasClass('white')) {
        $('.cursor').addClass('white');
        $('.cursor_dot').addClass('white');
    }
}, function () {
    $('.cursor').removeClass('white');
    $('.cursor_dot').removeClass('white');
});

// if (innerWidth < 1200) {
//     var homeSliderMob = $('.home-slider-js').bxSlider({
//         controls: false,
//         infiniteLoop: false,
//         onSlideBefore: function () {
//
//         },
//         onSlideAfter: function (slide) {
//
//         }
//
//     });
// }