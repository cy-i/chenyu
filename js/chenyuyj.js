    (function(a) {
        a.extend({
            mouseMoveShow: function(b) {
                var d = 0,
                    c = 0,
                    h = 0,
                    k = 0,
                    e = 0,
                    f = 0;
                a(window).mousemove(function(g) {
                    d = a(window).width();
                    c = a(window).height();
                    h = g.clientX;
                    k = g.clientY;
                    e = g.pageX;
                    f = g.pageY;
                    h + a(b).width() >= d && (e = e - a(b).width() - 5);
                    k + a(b).height() >= c && (f = f - a(b).height() - 5);
                    a("html").on({
                        contextmenu: function(c) {
                            3 == c.which && a(b).css({
                                left: e,
                                top: f
                            }).show()
                        },
                        click: function() {
                            a(b).hide()
                        }
                    })
                })
            },
            disabledContextMenu: function() {
                window.oncontextmenu = function() {
                    return !1
                }
            }
        })
    })(jQuery);

    function getSelect() {
        "" == (window.getSelection ? window.getSelection() : document.selection.createRange().text) ? layer.msg("请选择需要复制的内容！") : document.execCommand("Copy")
    }
    function baiduSearch() {
        var a = window.getSelection ? window.getSelection() : document.selection.createRange().text;
        "" == a ? layer.msg("请选择需要百度搜索的内容！") : window.open("https://www.baidu.com/s?wd=" + a)
    }
    function googleSearch() {
        var a = window.getSelection ? window.getSelection() : document.selection.createRange().text;
        "" == a ? layer.msg("请选择需要谷歌搜索的内容！") : window.open("https://www.google.com/search?q=" + a)
    }
    $(function() {
        for (var a = navigator.userAgent, b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, c = 0; c < b.length; c++) if (0 < a.indexOf(b[c])) {
            d = !1;
            break
        }
        d && ($.mouseMoveShow(".usercm"), $.disabledContextMenu())
    });

//iframe层
$(document).on('click', '#ysni520', function() {
layer.open({
  type: 2,
  title: '对自己好点，因为一辈子不长；对身边的人好点，因为下辈子不一定能遇见',
  shadeClose: true,
  shade: 0.8,
  area: ['1200px', '80%'],
  skin: 'layui-layer-rim', //加上边框
  content: ['https://chenyu.me/My/ysni/', 'no'] //iframe的url
}); 
});

//iframe层
$(document).on('click', '#ysnitime', function() {
layer.open({
  type: 2,
  title: '漫漫岁月，见，或不见；关注本站，我，都陪你',
  shadeClose: true,
  shade: 0.8,
  area: ['1200px', '80%'],
  skin: 'layui-layer-rim', //加上边框
  content: ['https://chenyu.me/My/time/webtime/', 'no'] //iframe的url
}); 
});

//人生
$(document).on('click', '#ysnids', function() {
//最美时光
layer.open({
  type: 2,
  title: '愿你眉眼如初，风华如故；愿你有诗有梦，有坦荡的远方！',
  shadeClose: true,
  shade: 0.8,
  area: ['750px', '60%'],
  skin: 'layui-layer-rim', //加上边框
  content: ['https://player.chenyu.me/player/?url=https://171905.xyz/zy/web/zmsg.mp4', 'no'] //iframe的url
}); 
  layer.msg('点击视频外任意处关闭');
});
