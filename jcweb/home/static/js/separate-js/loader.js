// deleteCookie('load');
var loader = function (callback) {
    var speed = 500;
    if (getCookie('load')) {
        $('.load').remove();
        window.onload = function () {
            setTimeout(function () {
                callback();
                initPage();
            }, 500)
        };
    }
    else {
        window.onload = function () {
            $('.load').show(function () {
                $('.body,.html').addClass('overflow');
                $('.load-first').addClass('load-scale').wait(speed).addClass('load-rotate').wait(speed * 2).siblings('.load-dot').addClass('active').queue(function () {
                    $('.load').wait(speed * 3).addClass('hide').queue(function () {
                        $('.load').wait(speed * 2).remove().queue(function () {
                            setCookie('load', 'true');
                            callback();
                            initPage();
                        });
                    });
                });
            });
        }
    }
}
