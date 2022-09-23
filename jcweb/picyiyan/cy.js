var cymeYiYan = [
  '休对故人思故国，且将新火试新茶。诗酒趁年华。——宋苏轼《望江南》',
  '山中何事？松花酿酒，春水煎茶。——元张可久《人月圆》',
  '最是人间留不住，朱颜辞镜花辞树。——清·王国维《蝶恋花》',
  '正是江南好风景，落花时节又逢君。——唐·杜甫《江南逢李龟年》',
  '醉后不知天在水，满船清梦压星河。——元·唐温如《题龙阳县青草湖》',
  '纸屏石枕竹方床，手倦抛书午梦长。——宋蔡确《夏日登车盖亭》',
  '曾是惊鸿照影来。——宋陆游《沈园二首》',
  '人生天地间，忽如远行客。——汉佚名《古诗十九首》',
  '直道相思了无益，未妨惆怅是清狂。——唐·李商隐《无题》',
  '秋风生渭水，落叶满长安。——唐·贾岛《忆江上吴处士》',
  '一愿郎君千岁，二愿妾身常健。——唐冯延巳《长命女》',
  '雾失楼台，月迷津渡。桃源望断无寻处。——宋秦观《踏莎行郴州旅舍》',
  '独立小楼风满袖，平林新月人归后。——南唐冯延巳《鹊踏枝》',
  '晓看天色暮看云，行也思君，坐也思君。——明唐寅《一剪梅》',
  '叹息老来交旧尽，睡来谁共午瓯茶。——宋陆游《幽居初夏》',
  '客散酒醒深夜后，更持红烛赏残花。——唐李商隐《花下醉》',
  '柴门闻犬吠，风雪夜归人。——唐·刘长卿《逢雪宿芙蓉山主人》',
  '庭院深深深几许，杨柳堆烟，帘幕无重数。——宋欧阳修《蝶恋花》',
  '有约不来过夜半，闲敲棋子落灯花。——宋赵师秀《约客》',
  '满目山河空念远，落花风雨更伤春。不如怜取眼前人。——宋晏殊《浣溪沙》'
]
var cymeYiYanBg = [
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/2.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/4.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/5.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/6.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/7.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/8.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/10.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/11.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/12.webp',
    'https://cdn.jsdelivr.net/gh/cy-j/chenyu@1.9.1/jcweb/picyiyan/14.webp'
    ]

var cymeYiMain = document.querySelector(".cyme-suiji-main"),
    wiuiSjMain = cymeYiMain.parentNode.parentNode,
    date = new Date,
    cymeMonth = date.getMonth() + 1,
    cymeDay = date.getDate();
document.querySelector(".cymeYear").innerHTML = date.getFullYear() + "年";
10 > cymeMonth ? document.querySelector(".cymeMonth").innerHTML = cymeMonth + "月" : document.querySelector(".cymeMonth").innerHTML = cymeMonth + "月";
10 > cymeMonth && (document.querySelector(".cymeDay").innerHTML = cymeDay);
wiuiSjMain.style.padding = "0";
var cymeYyRanBtn = document.querySelector("#chenyu-qh-btn"),
    cymeYiYanTextBox = document.querySelector(".chenyu-YiYan");

function cymeRanYiYan() {
    var a = Math.floor(Math.random() * cymeYiYanBg.length);
    cymeYiYanTextBox.innerHTML = cymeYiYan[Math.floor(Math.random() * cymeYiYan.length)];
    cymeYiMain.style.backgroundImage = "url(" + cymeYiYanBg[a] + ")";
}
cymeRanYiYan();
cymeYyRanBtn.onclick = function() {
    cymeRanYiYan()
};