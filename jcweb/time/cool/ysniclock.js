let sencond = ``
for (i = 0; i < 60; i++) {
    let onediv = `<div id = "sencond${i+1}" style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i-1)*-6}deg);"> ${i+1} 秒</div>`
    sencond = sencond + onediv
}
document.querySelector('.secondBox').innerHTML = sencond
let minute = ``
for (i = 0; i < 60; i++) {
    let onediv = `<div id = "minute${i+1}"  style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i)*-6}deg);"> ${i+1} 分</div>`
    minute = minute + onediv
}
document.querySelector('.minuteBox').innerHTML = minute
let hour = ``
for (i = 0; i < 24; i++) {
    let onediv = `<div id = "hour${i+1}" style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i)*-15}deg);"> ${i+1} 时</div>`
    hour = hour + onediv
}
document.querySelector('.hourBox').innerHTML = hour
let day = ``
for (i = 0; i < 31; i++) {
    let onediv = `<div id = "day${i+1}" style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i)*-11.25}deg);"> ${i+1} 日</div>`
    day = day + onediv
}
document.querySelector('.dayBox').innerHTML = day
let mounth = ``
for (i = 0; i < 12; i++) {
    let onediv = `<div id = "mounth${i+1}" style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i)*-30}deg);"> ${i+1} 月</div>`
    mounth = mounth + onediv
}
document.querySelector('.mounthBox').innerHTML = mounth

var sencond360 = 0
var Minute360 = 0
var hour360 = 0
var day360 = 0
var mounth360 = 0

var oldsencond = 0
var oldMinute = 0
var oldhour = 0
var oldday = 0
var oldmounth = 0

function transformBox() {
    let nowDate = new Date()
    let sencond = nowDate.getSeconds()
    let minute = nowDate.getMinutes()
    let hour = nowDate.getHours()
    let day = nowDate.getDate()
    let mounth = nowDate.getMonth()
    let year = nowDate.getFullYear()
    if (sencond === 0 && oldsencond !== sencond) {
        sencond360 = sencond360 + 1
    }
    if (minute === 0 && oldMinute !== minute) {
        Minute360 = Minute360 + 1
    }
    if (hour === 0 && oldhour !== hour) {
        hour360 = hour360 + 1
    }
    if (day === 1 && oldday !== day) {
        day360 = day360 + 1
    }
    if (mounth === 0 && oldmounth !== mounth) {
        mounth360 = mounth360 + 1
    }
    document.querySelector('.secondBox').style.transform = `rotate(${sencond360*360 + (sencond-1)*6}deg)`
    document.querySelector('.minuteBox').style.transform = `rotate(${Minute360*360 + (minute-1)*6}deg)`
    document.querySelector('.hourBox').style.transform = `rotate(${hour360*360 + (hour-1)*15}deg)`
    document.querySelector('.dayBox').style.transform = `rotate(${day360*360 + (day-1)*11.25}deg)`
    document.querySelector('.mounthBox').style.transform = `rotate(${mounth360*360 + (mounth)*30}deg)`
    document.querySelector('.yearBox').innerHTML = year + ' 年'
    let nowDates = document.querySelectorAll('.NowData')
    nowDates.forEach(element => {
        element.classList = ''
    });
    document.querySelector(`#sencond${sencond+1}`).classList = 'NowData'
    document.querySelector(`#minute${minute===0?'60':minute}`).classList = 'NowData'
    document.querySelector(`#hour${hour===0?'24':hour}`).classList = 'NowData'
    document.querySelector(`#day${day}`).classList = 'NowData'
    document.querySelector(`#mounth${mounth+1}`).classList = 'NowData'

    oldsencond = sencond
    oldMinute = minute
    oldhour = hour
    oldday = day
    oldmounth = mounth
}
transformBox()
setInterval(() => {
    transformBox()
}, 1000);