<!--
var isShow = 0;
var furl = location.href;
if(furl.indexOf("/plus")==-1 && furl.indexOf("/member")==-1 && furl.indexOf(".php")==-1 ){
	isShow = 1;
}
if(furl.indexOf("freelist.")>0 || furl.indexOf("/special")>0 || furl.indexOf("/search")>0){
	isShow = 1;
}
if(isShow==1){
  document.write("<div id='bannerAd' style='position: absolute; top:8px; left:260px; z-index: 100; height: 60px; width: 468px; padding:0px; margin:0px'><a href='http://www.400hosting.com' target='_blank'><img src='/vvv/ws.gif' width='468' height='60' border='0' alt='Œ¢…–Õ¯¬Á'></a></div>");
  var stpos = Math.ceil((screen.width - 920)/2) + 220;
  document.getElementById("bannerAd").style.left = stpos + "px";
}
document.write(" Power by DedeCms Copyright 2004-2007 ‘¡ICP±∏05010852∫≈ ");
document.write ('<script language="javascript" type="text/javascript" src="http://js.users.51.la/941149.js"></script>');
-->