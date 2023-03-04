var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
if (document.hidden) {
  $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/cy-i/chenyu/img/logo/cycool.ico");
  document.title = "人间无事人";
  clearTimeout(titleTime)
} else {
  $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/cy-i/chenyu/yu.ico");
  document.title = "得鹿梦鱼 - " + OriginTitile;
  titleTime = setTimeout(function() {
      document.title = OriginTitile
  },
  2000)
}
});