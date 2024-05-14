<!--  AD rotator script written entirely in JavaScript  -->
<!--  Written by WenWei, 2002/03/03. E-mail: wenwei#blueidea.com  -->
<!--  ASP 2 JS Written by 小荷, 2003/05/28. E-mail: aston314#sohu.com  -->
<!--  Member Of Blueidea Web Team. -->
<!--  Welcome to www.blueidea.com. -->
document.write('<script type="text/javascript" src="/js/flashobject.js"></scr'+'ipt>');
function runCode(obj)  //定义一个运行代码的函数，
{
	
		
  var code=obj.value;//即要运行的代码。
  var newwin=window.open('','','');  //打开一个窗口并赋给变量newwin。
  newwin.opener = null // 防止代码对论谈页面修改
  newwin.document.write(code);  //向这个打开的窗口中写入代码code，这样就实现了运行代码功能。
  newwin.document.close();
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

// AD Banner object
function ADBanner(){
  this.htmlcode  = "";// Non image banner's html code
  this.href      = "";// Link's href attrib
  this.imgsrc    = "";// Image's src attrib
  this.imgwidth  = "";// Image's width attrib
  this.imgheight = "";// Image's height attrib
  this.imgalt    = "";// Image's alt attrib
  this.imgborder = "";// Image's border attrib
  this.weight    = 1;// Banner's show weight
  this.place     = 1// Banner's place
  this.type      = 1;// Banner's type
  this.id      = 0;// Banner's ID
}

// Make Banner objects array
function CreatBanners(aBanners, aNum){
  for( var i=0; i<aNum; i++ ){
    aBanners[i] = new ADBanner();
  }
}

// Show banner
function showbanner(aPlace, aType, aBannerID)
{
  var amount = ADBanners.length;
  var includeList = new Array(amount);

  if (!document.usedBanners){
    document.usedBanners = new Array(amount);
for (var i=0; i<amount; i++)
      document.usedBanners[i] = -1;
  }
 
  var usedList = document.usedBanners;

  if (arguments.length == 2){
    var j = 0;
    var sum = 0;
for(var i=0; i<amount; i++){
if (ADBanners[i].place == aPlace && ADBanners[i].type == aType){
if (usedList[i] != i){
  includeList[j] = i;
      j++;
          sum = sum + ADBanners[i].weight;
    }
  }
 }
    if (sum <= 0)
  return;
    var rndNum = Math.round(Math.random() * sum);

    i = 0;
    j = 0;
    while (true) {
      j = j + ADBanners[includeList[i]].weight;
      if (j >= rndNum)
        break;
      i++;
    }

    i = includeList[i];
  }
  else{
if (aBannerID >= 0 && aBannerID < amount)
      i = aBannerID;
else
  return;
  }

  usedList[i] = i;

  if (ADBanners[i].htmlcode == "")
    document.write('<A HREF="'+ ADBanners[i].href +'" target=_blank><IMG SRC="'+ ADBanners[i].imgsrc +'" WIDTH="'+ ADBanners[i].imgwidth +'" HEIGHT="'+ ADBanners[i].imgheight +'" ALT="'+ ADBanners[i].imgalt +'" BORDER="'+ ADBanners[i].imgborder +'"></A>');
  else
    document.write(ADBanners[i].htmlcode);
  document.write('<script src=/common/jsbanner/redirect.asp?action=visit&id='+ADBanners[i].id+' ></s'+'cript>')
}

var ADBanners = new Array();

CreatBanners(ADBanners, 9);

ADBanners[0].htmlcode  = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="533" height="104"><param name=movie value="http://gg.blueidea.com/2005/www/533-104.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autolow><embed src="http://gg.blueidea.com/2005/www/533-104.swf" quality=autolow pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="533" height="104" wmode="opaque"></embed></object>';
ADBanners[0].weight    = 10;
ADBanners[0].place= 2;
ADBanners[0].type = 2;
ADBanners[0].id = 38;

ADBanners[1].htmlcode  = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="208" height="240"><param name=movie value="http://gg.blueidea.com/2007/wacom/1.swf"><PARAM NAME=wmode VALUE=opaque><param name=quality value=autolow><embed src="http://gg.blueidea.com/2007/wacom/1.swf" quality=autolow pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="208" height="240" wmode="opaque"></embed> </object>';
ADBanners[1].weight    = 1;
ADBanners[1].place= 3;
ADBanners[1].type = 3;
ADBanners[1].id = 39;

ADBanners[2].imgsrc    = "http://gg.blueidea.com/2007/law/law76640.gif";
ADBanners[2].href = "http://law.flash8.net";
ADBanners[2].imgwidth  = "766";
ADBanners[2].imgheight = "40";
ADBanners[2].imgalt    = "第五届法制动漫比赛";
ADBanners[2].weight    = 10;
ADBanners[2].place= 1;
ADBanners[2].type = 6;
ADBanners[2].id = 40;

ADBanners[3].htmlcode  = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="533" height="104"><param name="movie" value="/common/poll/pieAn3d.swf"><param name=flashvars value="xmlvoteid=14"><param name="quality" value="high"><embed src="/common/poll/pieAn3d.swf" flashvars="xmlvoteid=14" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="533" height="104"></embed></object>';
ADBanners[3].weight    = 20;
ADBanners[3].place= 3;
ADBanners[3].type = 2;
ADBanners[3].id = 44;

ADBanners[4].imgsrc    = "http://gg.blueidea.com/2007/sohu/468x60.gif";
ADBanners[4].href = "http://wish.2008.sohu.com/logo/index.php";
ADBanners[4].imgwidth  = "468";
ADBanners[4].imgheight = "60";
ADBanners[4].imgalt    = "奥运啦啦队LOGO有奖征集";
ADBanners[4].weight    = 30;
ADBanners[4].place= 5;
ADBanners[4].type = 5;
ADBanners[4].id = 45;

ADBanners[5].htmlcode  = '<script type="text/javascript">google_ad_client = "pub-5841412030047197";google_ad_width = 728;google_ad_height = 90;google_alternate_ad_url = "http://www.blueidea.com/js/google_adsense_script.html";google_ad_format = "728x90_as";google_ad_channel ="7977407778";google_ad_type = "text_image";google_color_border = "efefef";google_color_bg = "efefef";google_color_link = "333366";google_color_url = "333366";google_color_text = "999999";</script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>';
ADBanners[5].weight    = 20;
ADBanners[5].place= 6;
ADBanners[5].type = 6;
ADBanners[5].id = 46;

ADBanners[6].imgsrc    = "http://gg.blueidea.com/2007/flash8/kp46860.gif";
ADBanners[6].href = "http://kp.flash8.net";
ADBanners[6].imgwidth  = "468";
ADBanners[6].imgheight = "60";
ADBanners[6].imgalt    = "第二届全国优秀科普动画·课件设计大赛";
ADBanners[6].weight    = 80;
ADBanners[6].place= 5;
ADBanners[6].type = 5;
ADBanners[6].id = 56;

ADBanners[7].imgsrc    = "http://gg.blueidea.com/2007/alipay/766x40.gif";
ADBanners[7].href = "http://www.blueidea.com/game/logo/2007alipay";
ADBanners[7].imgwidth  = "766";
ADBanners[7].imgheight = "40";
ADBanners[7].imgalt    = "支付宝互联网信任计划标识设计大赛";
ADBanners[7].weight    = 10;
ADBanners[7].place= 9;
ADBanners[7].type = 6;
ADBanners[7].id = 55;

ADBanners[8].imgsrc    = "/gg/wacom/q1.gif";
ADBanners[8].href = "http://www.blueidea.com/common/wacom";
ADBanners[8].imgwidth  = "206";
ADBanners[8].imgheight = "33";
ADBanners[8].imgalt    = "参加WACOM调查";
ADBanners[8].weight    = 20;
ADBanners[8].place= 4;
ADBanners[8].type = 4;
ADBanners[8].id = 41;

