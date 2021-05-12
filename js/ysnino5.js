    $(document).ready(function () {
      document.oncontextmenu = function () {
        return false;
      }
      //document.onselectstart = function () {
       // return false;
     // }
      document.oncopy = function () {
        return false;
      }
      document.onkeydown = function () {
        //f12
        if (window.event && window.event.keyCode == 123) {
          event.keyCode = 0;
          event.returnValue = false;

        //配置一个透明的询问框
        layer.msg('我怀念的不是哪个人，<br>而是我那回不去的曾经，<br>突然很想跟自己说声对不起，<br>对不起再也找不回原来的自己了。', {
          time: 20000, //20s后自动关闭
          btn: ['好久不见', '对不起', '再见']
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