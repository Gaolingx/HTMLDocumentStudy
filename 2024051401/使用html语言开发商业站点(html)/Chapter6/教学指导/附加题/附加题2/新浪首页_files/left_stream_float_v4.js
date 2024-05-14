//Update for 100x100
//SYstream=true;

var bdy = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;

function GetCookie (name) { 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = document.cookie.length; 
	var i = 0; 
	while (i < clen) { 
		var j = i + alen; 
		if (document.cookie.substring(i, j) == arg) 
			return getCookieVal (j); 
		i = document.cookie.indexOf(" ", i) + 1; 
		if (i == 0) break; 
	} 
	return null;
}

function SetCookie (name, value) { 
var argv = SetCookie.arguments; 
var argc = SetCookie.arguments.length; 
var expires = (argc > 2) ? argv[2] : null; 
var path = (argc > 3) ? argv[3] : null; 
var domain = (argc > 4) ? argv[4] : null; 
var secure = (argc > 5) ? argv[5] : false; 
document.cookie = name + "=" + escape (value) + 
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
((path == null) ? "" : ("; path=" + path)) + 
((domain == null) ? "" : ("; domain=" + domain)) + 
((secure == true) ? "; secure" : "");
}

function DeleteCookie (name) { 
var exp = new Date(); 
exp.setTime (exp.getTime() - 1); 
// This cookie is history 
var cval = 0; 
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

var dToday = new Date();
var exp = new Date(dToday.getYear(),dToday.getMonth(),dToday.getDate(), 23 , 59 , 59 );


function amt(count,count_str){
var count = GetCookie(count_str)
if(count == null) {
SetCookie(count_str,'1')
//DeleteCookie(count_str)
//alert(count)
return 1
}
else{
var newcount = parseInt(count) + 1;
if(newcount<3) count=1;
SetCookie(count_str,newcount,exp);
//DeleteCookie(count_str)
//alert(count)
return count
}
}

function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}

var MSIE=navigator.userAgent.indexOf("MSIE");
var OPER=navigator.userAgent.indexOf("Opera");
var imgheight
var imgleft
window.screen.width>800 ? imgheight=140:imgheight=140;
window.screen.width>800 ? imgleft=15:imgleft=120;

function myLeftLoad()
{
document.getElementById('cl_style').style.top=bdy.scrollTop+bdy.offsetHeight-imgheight;
document.getElementById('cl_style').style.left=imgleft;
document.getElementById('cl_stylebig').style.top=bdy.scrollTop + float_stream_top +1;
document.getElementById('cl_stylebig').style.left = float_stream_left>=0?float_stream_left:(bdy.offsetWidth - float_stream_width)/2;
setTimeout("myLeftLoad();",50)
//leftmove();
}

function closecl()
{
document.getElementById('cl_style').style.visibility='visible';
document.getElementById('cl_stylebig').style.visibility='hidden';
}

function openWin(){	
	document.getElementById('cl_style').style.visibility = 'hidden';
	if(MSIE!=-1 && OPER==-1){
		myLeftLoad();
		var playCnt;  
		if(amt(playCnt,"cntOf" + document.URL)==1) 
		{
			document.getElementById('cl_style').style.visibility='hidden';
			document.getElementById('cl_stylebig').style.visibility='visible';
		}else closecl();
	}	
}
