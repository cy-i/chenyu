document.onmousedown = function mdClick(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e.button == 2 || e.button == 3) {
        mAlert();
    }
}

document.oncontextmenu = new Function("return false;");

document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];

    if (e && e.keyCode == 123) {
            mAlert();
            e.returnValue = false;
            return (false);
    }
}

function mAlert() {
    layer.msg("你说彼岸灯火，心之所向；<br>后来渔舟晚唱，烟雨彷徨。 <br>你说水静莲香，惠风和畅；<br>后来云遮薄月，清露如霜。 <br>你说幽窗棋罢，再吐衷肠；<br>后来风卷孤松，雾漫山冈。 <br>你说红袖佯嗔，秋波流转思张敞；<br>后来黛眉长敛，春色飘零别阮郎。");
}