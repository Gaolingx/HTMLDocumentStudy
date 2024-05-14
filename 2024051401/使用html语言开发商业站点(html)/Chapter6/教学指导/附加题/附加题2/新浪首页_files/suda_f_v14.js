var _S_isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var _S_isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var _S_isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var cp_rf_t="http://beacon.sina.com.cn/e.gif"
var _S_FlashPer = 10;
var _S_SinaKey= new Array(".sina.",".51uc.");

function _S_ControlVersion()
{
	var version;
	var axo;
	var e;
	try {
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			version = "WIN 6,0,21,0";
			axo.AllowScriptAccess = "always";
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}
	if (!version)
	{
		try {
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}
	if (!version)
	{
		try {
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}
	if (!version)
	{
		try {
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	return version;
}

function _S_GetSwfVer(){
	var flashVer = -1;
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;			
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			if ( descArray[3] != "" ) {
				tempArrayMinor = descArray[3].split("r");
			} else {
				tempArrayMinor = descArray[4].split("r");
			}
			var versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( _S_isIE && _S_isWin && !_S_isOpera ) {
		flashVer = _S_ControlVersion();
	}	
	return flashVer;
}

function _S_DetectFlashVer()
{
	versionStr = _S_GetSwfVer();
	if (versionStr == -1 ) {
		return "unknow";
	} else if (versionStr != 0) {
		if(_S_isIE && _S_isWin && !_S_isOpera) {
			tempArray = versionStr.split(" ");
			tempString = tempArray[1];
			versionArray = tempString.split(",");
		} else {
			versionArray = versionStr.split(".");
		}
		var versionMajor = versionArray[0];
		var versionMinor = versionArray[1];
		var versionRevision = versionArray[2];

		if(versionMajor>=9){
			return 'FlashPlayer9';
		}else if(versionMajor>=8){
			return'FlashPlayer8';
		}else if(versionMajor>=7){
			return 'FlashPlayer7';
		}else{ //6 and older
			return 'FlashPlayer6';
		}

	}
}

function _S_F2Beacon()
{
	try{
		var fv = _S_DetectFlashVer();
		var uid = _S_gsGID();
		var finfo = "FlashVer||"+fv+"||"+uid+"||";
		_S_p2Bcn(finfo,cp_rf_t);
	}catch(ex){}
}

function _S_IsSinaPage()
{
	var strDomain=document.location.host;
	strDomain = strDomain.toLowerCase();
	for(i=0;i<_S_SinaKey.length;i++)
	{
		if(strDomain.indexOf(_S_SinaKey[i])>=0){return true;}
	}
	return false;
}

function _S_RandomFlashVer()
{
	try{
		if(_S_IsSinaPage()==true)
		{
			var r_num=Math.floor(Math.random()*100);
			if(r_num < _S_FlashPer){ _S_F2Beacon(); }
		}
	}catch(ex){}
}

window.setTimeout("_S_RandomFlashVer()",3000);