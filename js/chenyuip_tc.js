    $(function(){
        if(/*getCookie('msg') !=*/ 1){
            var t = document.createElement("a");
            t.href = document.referrer;
            var msgTitle = t.hostname;
            var name = t.hostname.split(".")[1];
            if("" !== document.referrer){
                switch (name) {
                    case 'bing':
                        msgTitle = '必应搜索';
                        break;
                    case 'baidu':
                        msgTitle = '百度搜索';
                        break;
                    case 'so':
                        msgTitle = '360搜索';
                        break;
                    case 'google':
                        msgTitle = '谷歌搜索';
                        break;
                    case 'sm':
                        msgTitle = '神马搜索';
                        break;
                    case 'sogou':
                        msgTitle = '搜狗搜索';
                        break;
                    default:
                        msgTitle =  t.hostname;
                };
            };
            var time = (new Date).getHours();
            var msg = '';
            23 < time || time <= 5 ? msg = "你睡不着的时候就多想想我，不要浪费时间。":
            5< time && time <= 7 ? msg = "相逢，不是恨晚，便是恨早。早安世界！":
            7< time && time <= 11 ? msg = "上午好！工作顺利嘛，不要久坐，要多走动哦":
            11< time && time <= 14 ? msg = "中午了，工作了一个上午，现在是午餐时间":
            14< time && time <= 17 ? msg = "午后很容易犯困呢，今天的运动目标完成了吗":
            17< time && time <= 19 ? msg = "傍晚了！窗外夕阳的景色是否很美丽呢！~":
            19< time && time <= 21 ? msg = "万家灯火，是夜晚最美的风景；繁星点点，是长夜最真的深情":
            21< time && time <= 23 && (msg = "已经这么晚了，早点休息吧，别太累了，晚安~");
            $.ajax({
                type:"get",
                url:"https://api.gmit.vip/api/UserInfo/",
                async:true,
                success:function(data){
                    window.info = data;
                    layer.msg("Hi~ 来自"+ data.data.location + '~<br/>通过 '+msgTitle+' 进来的朋友！<br/>使用 '+ data.data.os +"<br/>"+ data.data.browser +' 访问本站！' + '<br/>' + msg);
                    var showFPS = (function(){
                        var requestAnimationFrame =
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            function(callback) {
                                window.setTimeout(callback, 1000/60);
                            };
                        var e,pe,pid,fps,last,offset,step,appendFps;
 
                        fps = 0;
                        last = Date.now();
                        step = function(){
                            offset = Date.now() - last;
                            fps += 1;
                            if( offset >= 1000 ){
                            last += offset;
                            appendFps(fps);
                            fps = 0;
                            };
                            requestAnimationFrame( step );
                        };
                        appendFps = function(fps){
                            var settings = {
                                timeout: 5000,
                                logError: true
                            };
                            $('#fps').html('<span style="float:left;">'+fps+'FPS</span><br/><span style="float:left">'+window.info.data.os+'</span><br/><span style="float:left;margin-top:1px;">'+window.info.data.browser+'</span><br/><span style="float:left;margin-top:1px;">'+window.info.data.location+'</span><br/><span style="float:left;margin-top:1px;"></span>');
                        };
                        step();
                    })();
                }
            });
        };
    });