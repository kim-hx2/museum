// 스마트폰 감지
let smartPhones=['iphone', 'ipod', 'ipad', 'opera mini', 'opera mobi', 'nokia', 'android', 'webos', 'windows ce', 'blackberry', 'iemobile', 'sonyericssion'];
// alert(navigator.userAgent); //어떤 종류인지 감지해줌

//스마트폰 구분
for(let i in smartPhones) {
  if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))) {
    //스마트폰 종류 감지.소문자로.i(=스마트폰종류)와 일치하면
    document.location='http://hx2.dothome.co.kr/mindex.html';

  }
}