/*
轮播对联类 RotatorDL v7
Update by Dakular <shuhu@staff.sina.com.cn> 2007-10-11
格式：new RotatorDL(商广数组,内广数组)
说明：第一次访问随机出现，以后访问顺序轮播；自动过滤过期广告；cookie时间24小时；商业广告数量不足时不显示
*/
if(typeof(RotatorDL)!='function'){
var RotatorDL=function (rad,nad){
	var ary = new Array();
	var date = new Date();
	var num = rad.num; //rad.length;
	var id = 0;
	var max = 999;
	var url = document.location.href;
	var cookiename = 'sinaGlobalRotator_'+escape(url.substr(0,url.lastIndexOf('.')));
	var timeout = 1440; //24h
	var nn = 0;
	//过滤无效广告
	for(var i=0; i<rad.length; i++){
		var start = RotatorDL.strToDate(rad[i][4].replace('<startdate>','').replace('</startdate>',''));
		var end = RotatorDL.strToDate(rad[i][5].replace('<enddate>','').replace('</enddate>',''),true);
		if(date>start && date<end){
			ary.push(rad[i]);
		}
	}
	//补位
	if(nad && nad.length>0){
		for(var i=0; i<num; i++){
			if(i>ary.length-1){
				ary.push(nad[nn]);
				if(++nn > nad.length-1) nn = 0;
			}
		}
	}
	//取id
	if(typeof(globalRotatorId)=='undefined'){
		var curId = RotatorDL.G(cookiename);
		curId = curId==''?Math.floor(Math.random()*max):++curId;
		if(curId>max) curId=0;
		RotatorDL.S(cookiename,curId,timeout);
		globalRotatorId = curId;
	}
	id=globalRotatorId%num+1;
	//Show AD
	if(id==0 || ary.length==0) return; //如果没有广告则不显示
	if(id>ary.length) return;
	var n = id-1;
	var type = ary[n][0].substring(ary[n][0].length-3).toLowerCase();
	if(type=='swf'){
		document.write('<div id="couplet_left" style="position: absolute;visibility:hidden;z-index:1;" align="left">');
		document.write('<div id="couplet_leftflash"></div>');
		document.write('<table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0">');
		document.write('<tr><td style="padding-top:2px;padding-left:3px;"><a href="#" target="_slef" onclick="javascript:closeDL();return false;" style="font-size:12px;color:#000000;text-decoration:none;">关闭</a></td></tr>');
		document.write('</table>');
		document.write('</div>');
		document.write('<div id="couplet_right" style="position: absolute;visibility:hidden;z-index:1" align="right">');
		document.write('<div id="couplet_rightflash"></div>');
		document.write('<table width="100" bgcolor="#CCCCCC" border="0" cellpadding="0" cellspacing="0">');
		document.write('<tr><td align="right" style="padding-top:2px;padding-right:3px;"><a href="#" target="_slef" onclick="javascript:closeDL();return false;" style="font-size:12px;color:#000000;text-decoration:none;">关闭</a></td></tr>');
		document.write('</table>');
		document.write('</div>');
		ifCouplet=true;
		var FlashCoupletLeft = new sinaFlash(ary[n][0], "sinadl_l", "100", "300", "7", "", false, "High");
			FlashCoupletLeft.addParam("wmode", "opaque");
			FlashCoupletLeft.addVariable("adlink", escape(ary[n][1]));
			FlashCoupletLeft.write("couplet_leftflash");
		var FlashCoupletRight = new sinaFlash(ary[n][2], "sinadl_r", "100", "300", "7","", false, "High");
			FlashCoupletRight.addParam("wmode", "opaque");
			FlashCoupletRight.addVariable("adlink", escape(ary[n][3]));
			FlashCoupletRight.write("couplet_rightflash");
		try{
			aryADSeq.push("adshowCouplet()");
		}catch(e){
			adshowCouplet();
		}
	}else{ //if(type=='.js')
		document.write('<script language="javascript" type="text/javascript" src="'+ary[n][0]+'"></scr'+'ipt>');
	}
	if(ary[n][6]!="" && ary[n][6]!=null){ //监测计数
		var oImg = new Image();
		oImg.src = ary[n][6];
	}
};
RotatorDL.G=function (N){
	var c=document.cookie.split("; ");
	for(var i=0;i<c.length;i++){
		var d=c[i].split("=");
		if(d[0]==N)return unescape(d[1]);
	}return '';
};
RotatorDL.S=function (N,V,Q){
	var L=new Date();
	var z=new Date(L.getTime()+Q*60000);
	document.cookie=N+"="+escape(V)+"; path=/; expires="+z.toGMTString()+";";
};
RotatorDL.strToDate = function(str,ext){
	var arys = new Array();
	arys = str.split('-');
	var newDate = new Date(arys[0],arys[1]-1,arys[2],9,0,0);
	if(ext){
		newDate = new Date(newDate.getTime()+1000*60*60*24);
	}
	return newDate;
}
var closeDL = function(){
	ifCouplet=false;
	document.getElementById('couplet_left').style.visibility='hidden';
	document.getElementById('couplet_right').style.visibility='hidden';
}
var adshowCouplet = function(){
	if(document.body.offsetWidth>800 && ifCouplet){	
		document.getElementById('couplet_left').style.visibility='visible';
		document.getElementById('couplet_right').style.visibility='visible';	  
		document.getElementById('couplet_left').style.top=100+'px';
		document.getElementById('couplet_left').style.left=5+'px';
		document.getElementById('couplet_right').style.top=100+'px';
		document.getElementById('couplet_right').style.right=5+'px';
	}else{
		document.getElementById('couplet_left').style.visibility='hidden';
		document.getElementById('couplet_right').style.visibility='hidden';
	}
	setTimeout(adshowCouplet,50)
}
};