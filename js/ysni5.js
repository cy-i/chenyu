      //示范一个公告层
      layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '350px;'
        ,shade: 0.8
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,resize: false
        ,btn: ['火速围观', '残忍拒绝']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">我也有辛酸苦楚，不说罢了。<br>我也有执念不放，不说罢了。<br>我也有千回百转，不说罢了。<br>不是我未看见，不是我没想过，<br>不是我不懂得，只是不说罢了。</div>'
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').attr({
            href: 'https://www.ysni.cn/'
            ,target: '_blank'
          });
        }
      });  