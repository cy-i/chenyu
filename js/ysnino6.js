    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      //document.oncopy = function () {
        //return false;
     // }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

      //询问框
      layer.confirm('<p>最怕问初衷，大梦成空。</p><p>眉间鬓上老英雄，剑甲鞮鍪封厚土，说甚擒龙。 </p><p>壮志付西风，逝去无踪。</p><p>少年早作一闲翁，诗酒琴棋终日里，岁月匆匆。</p>', {
        btn: ['对不起','寒山别哭'] //按钮
      }, function(){
        layer.msg('<p>我怀念的不是哪个人，而是我那回不去的曾经，</p><p>突然很想跟自己说声对不起，对不起再也找不回原来的自己了。</p>', {icon: 1});
      }, function(){
        layer.msg('我说寒山别哭，你说嘴巴嘟嘟……', {
          time: 20000, //20s后自动关闭
          btn: ['别哭', '嘟嘟']
        });
      });  

          return false;
        }
        //ctrl+u
        if (event.ctrlKey && window.event.keyCode == 85) {
          return false;
        }
        //ctrl+shift+i
        if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
          return false;
        }
        // Ctrl+S
        else if ((event.ctrlKey) && (event.keyCode == 83)) {
          return false;
        }
      };

    });