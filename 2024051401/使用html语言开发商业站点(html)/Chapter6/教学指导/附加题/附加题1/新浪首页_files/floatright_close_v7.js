var imgheight_close
document.ns = navigator.appName == "Microsoft Internet Explorer"
var bdy = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;

window.screen.width>800 ? imgheight_close=130:imgheight_close=130
 function myload()
{
myright.style.top=bdy.scrollTop+bdy.offsetHeight-imgheight_close;
myright.style.left=bdy.offsetWidth-130;
mymove();
}
 function mymove()
 {
 myright.style.top=bdy.scrollTop+bdy.offsetHeight-imgheight_close;
 myright.style.left=bdy.scrollLeft+bdy.offsetWidth-130;
 setTimeout("mymove();",50)
 }

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true)

function close_float_right(){
	myright.style.visibility='hidden';
}

if(document.ns){
document.write("<div id='myright' style='position: absolute;width:100;visibility: visible;z-index: 1'>\
<table border='0' cellpadding='0' cellspacing='0'><tr><td>");

if(ad_float_right_type!="swf")
	document.write("<a href='" + ad_float_right_url + "' target = '_blank'><img src='" + ad_float_right_src + "' WIDTH='100' HEIGHT='100' border = '0'></a>");
else{
	document.write("<div id='ad_float_right_div'></div>");
	var objFlash = new sinaFlash(ad_float_right_src, "ad_float_right", "100", "100", "7", "#ffffff");
	objFlash.addParam("quality", "high");
	objFlash.addParam("wmode", "opaque");
	objFlash.write("ad_float_right_div");
}

document.write("</td></tr><tr><td width='100' bgcolor='#cccccc' style='text-align:right;padding-top:2px;padding-right:3px;'><a href='javascript:close_float_right();void(0);' target='_self' style='font-size:12px;color:#000000;text-decoration:none;'>¹Ø ±Õ</a></td></tr>\
</table>\
</div>");

myload()
}
