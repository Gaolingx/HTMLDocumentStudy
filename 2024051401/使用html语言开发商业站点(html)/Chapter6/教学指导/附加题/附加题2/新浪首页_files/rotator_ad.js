/*
RotatorAD V2.6
Author: Dakular <shuhu@staff.sina.com.cn>
��ʽ: new RotatorAD(��ҵ�������, ����ҵ�������, ��id)
˵��: ��һ�η���������֣��Ժ����˳���ֲ����Զ����˹��ڹ�棻cookieʱ��24Сʱ����ҵ�����������ʱ���ӷ���ҵ����в���
*/
if(typeof(RotatorAD)!='function'){
	var RotatorAD = function(rad,nad,div_id){
		var date = new Date();
		var id = 0;
		var max = 99;
		var url = document.location.href;
		var cookiename = 'sinaGlobalRotator_'+escape(url.substr(0,url.lastIndexOf('.')));
		var timeout = 1440; //24h
		var w = rad.width;
		var h = rad.height;
		var num = rad.num;
		var ary = new Array();
		//������Ч���
		for(var i=0; i<rad.length; i++){
			var start = strToDate(rad[i][2].replace('<startdate>','').replace('</startdate>',''));
			var end = strToDate(rad[i][3].replace('<enddate>','').replace('</enddate>',''),true);
			if(date>start && date<end){
				ary.push([rad[i][0], rad[i][1], rad[i][4]]);
			}
		}
		//��λ
		var nn = 0;
		if(nad.length>0){
			for(var i=0; i<rad.num; i++){
				if(i>ary.length-1){
					ary.push([nad[nn][0], nad[nn][1], ""]);
					if(++nn > nad.length-1) nn = 0;
				}
			}
		}else{
			num = ary.length;
		}
		//ȡid
		if(typeof(globalRotatorId)=='undefined'){
			curId = G(cookiename);
			curId = curId==''?Math.floor(Math.random()*max):++curId;
			if(curId>max) curId=0;
			S(cookiename,curId,timeout);
			globalRotatorId = curId;
		}
		id=globalRotatorId%num+1;
		//Show AD
		if(id==0 || ary.length==0) return; //���û�й������ʾ
		if(id==-1) id=1; //��ֻ��һ�����ʱ��ʼ����ʾ��һ��
		var n = id-1;
		var type = ary[n][0].substring(ary[n][0].length-3).toLowerCase();
		var od = document.getElementById(div_id);
		if(type=='swf'){
			var of = new sinaFlash(ary[n][0], div_id+'_swf', w, h, "7", "", false, "High");
			of.addParam("wmode", "opaque");
			of.addVariable("adlink", escape(ary[n][1]));
			of.write(div_id);
		}else if(type=='jpg' || type=='gif'){
			od.innerHTML = '<a href="'+ary[n][1]+'" target="_blank"><img src="'+ary[n][0]+'" border="0" width="'+w+'" height="'+h+'" /></a>';
		}else if(type=='htm' || type=='tml'){
			od.innerHTML = '<iframe id="ifm_'+div_id+'" frameborder="0" scrolling="no" width="'+w+'" height="'+h+'"></iframe>';
			document.getElementById('ifm_'+div_id).src = ary[n][0];
		}else{ //textlink
			document.write('<a href="'+ary[n][1]+'"  target="_blank">'+ary[n][0]+'</a>');
		}
		if(ary[n][2]!="" && ary[n][2]!=null){ //ad tracker
			var oImg = new Image();
			oImg.src = ary[n][2];
		}

		function G(N){
			var c=document.cookie.split("; ");
			for(var i=0;i<c.length;i++){
				var d=c[i].split("=");
				if(d[0]==N)return unescape(d[1]);
			}return '';
		};
		function S(N,V,Q){
			var L=new Date();
			var z=new Date(L.getTime()+Q*60000);
			var d = document.domain!=""?("domain="+document.domain+";"):"";
			document.cookie=N+"="+escape(V)+";path=/;"+d+"expires="+z.toGMTString()+";";
		};
		function strToDate(str,ext){
			var arys = new Array();
			arys = str.split('-');
			var newDate = new Date(arys[0],arys[1]-1,arys[2],9,0,0);
			if(ext){
				newDate = new Date(newDate.getTime()+1000*60*60*24);
			}
			return newDate;
		} 
	};
};