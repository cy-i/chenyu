//尘遇-相册
$(document).on('click', '#chenyuxc', function() {
$.getJSON('https://cdn.jsdelivr.net/gh/cy-j/chenyu/jcweb/ysni/photos.json?v='+new Date, function(json){
  layer.photos({
    photos: json //格式见API文档手册页
  });
});
});

//尘遇-相册2
$(document).on('click', '#chenyuxc2', function() {
$.getJSON('https://cdn.jsdelivr.net/gh/cy-j/chenyu/jcweb/ysni/photos2.json?v='+new Date, function(json){
  layer.photos({
    photos: json //格式见API文档手册页
    ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
  });
});
});

//尘遇-相册3
$(document).on('click', '#chenyuxc3', function() {
$.getJSON('https://cdn.jsdelivr.net/gh/cy-j/chenyu/jcweb/ysni/photos3.json?v='+new Date, function(json){
  layer.photos({
    photos: json //格式见API文档手册页
    ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
  });
});
});

//尘遇-遇上你
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

//尘遇-建站时间感谢有你
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

//尘遇-人生
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
