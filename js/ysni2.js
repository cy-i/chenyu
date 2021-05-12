      //询问框
      layer.confirm('你是否按了键盘上的F12？', {
        btn: ['是的','不是的'] //按钮
      }, function(){
        layer.msg('是不是其实不重要……', {icon: 1});
      }, function(){
        layer.msg('我说寒山别哭，你说嘴巴嘟嘟……', {
          time: 20000, //20s后自动关闭
          btn: ['别哭', '嘟嘟']
        });
      });  