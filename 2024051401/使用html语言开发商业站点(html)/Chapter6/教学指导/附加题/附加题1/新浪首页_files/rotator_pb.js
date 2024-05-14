/*
轮播背投类 RotatorPB
Update by Dakular <shuhu@staff.sina.com.cn> 2006-12-20
格式：new RotatorPB(广告数组)
说明：第一次访问随机出现，以后访问顺序轮播；自动过滤过期广告；cookie时间24小时；商业广告数量不足时不显示
*/
if(typeof(RotatorPB)!='function'){
	var RotatorPB=function (rad){
		this.ary = new Array();
		this.date = new Date();
		this.w = rad.width;
		this.h = rad.height;
		this.o = rad.length;
		this.id = RotatorPB.id++;
		this.m = 'rpb_'+this.id;
		this.n = new Array();
		this.L = new Date();
		this.e = 0;
		var f;
		var D = false;
		var nn = 0;
		//过滤无效广告
		for(var i=0; i<rad.length; i++){
			var start = RotatorPB.strToDate(rad[i][2].replace('<startdate>','').replace('</startdate>',''));
			var end = RotatorPB.strToDate(rad[i][3].replace('<enddate>','').replace('</enddate>',''),true);
			if(this.date>start && this.date<end){
				this.ary.push([rad[i][0], rad[i][1], rad[i][4]]);
			}
		}
		this.o = this.ary.length;
		//取id
		for(var i=0;i<this.o;i++){
			f=this.m+'_'+(i+1);
			g=RotatorPB.G(f);
			if(g!=''){
				this.n[i]=g;
				D=true;
			}else {
				this.n[i]=0;
			}
		}
		if(!D){
			var r=Math.ceil(Math.random()*this.o);
			var t=this.m+'_'+r;
			RotatorPB.S(t,this.L.getTime(),1440);
			this.e=r;
			if(this.o==1){RotatorPB.S('s_dl',r,1440);}
			//return r;
		}else {
			var R=this.n.join(',').split(',');
			var k=R.sort();
			var max=Number(k[k.length-1]);
			var min=Number(k[0]);
			var F;
			for(var i=0;i<this.n.length;i++){
				if(max==this.n[i]){
					F=i+1;
					break;
				}
			}
			if(typeof(F)!='undefined'){
				G=this.m+'_'+F;
				H=Number(RotatorPB.G(G));
				I=F%this.o+1;
				J=this.m+'_'+I;
				RotatorPB.S(J,this.L.getTime(),1440);
				if(this.o==1){
					I=-RotatorPB.G('s_dl');
					if(I==0){I=1;RotatorPB.S('s_dl',1,1440);}
					RotatorPB.S('s_dl',I,1440);
				}
				this.e=I;
				//return I;
			}
		}
		//Show AD
		if(this.e==0 || this.ary.length==0) return; //如果没有广告则不显示
		if(this.e==-1) return; //当只有一个广告时：始终显示第一个/奇数次刷新显示
		var n = this.e-1;
		var btsrc = this.ary[n][0];
		var bturl = this.ary[n][1];
		var bttype = btsrc.substring(btsrc.length-3).toLowerCase();
		if(bttype!='htm' && bttype!='tml'){
			sinabturl = "http://ad4.sina.com.cn/sina/ae/ad_src/popup/popbv3.html?"+bturl+"${}"+bttype+"${}"+btsrc;
		}else{
			sinabturl = btsrc;
		}
		try{
			aryADSeq.push("openWindowBack()");
		}catch(e){
			openWindowBack();
		}
		if(this.ary[n][2]!=""){ //监测计数
			var oImg = new Image();
			oImg.src = this.ary[n][2];
		}
	};
	RotatorPB.id=1;
	RotatorPB.G=function (N){
		var c=document.cookie.split("; ");
		for(var i=0;i<c.length;i++){
			var d=c[i].split("=");
			if(d[0]==N)return unescape(d[1]);
		}return '';
	};
	RotatorPB.S=function (N,V,Q){
		var L=new Date();
		var z=new Date(L.getTime()+Q*60000);
		document.cookie=N+"="+escape(V)+"; path=/; expires="+z.toGMTString()+";";
	};
	RotatorPB.strToDate = function(str,ext){
		var arys = new Array();
		arys = str.split('-');
		var newDate = new Date(arys[0],arys[1]-1,arys[2],9,0,0);
		if(ext){
			newDate = new Date(newDate.getTime()+1000*60*60*24);
		}
		return newDate;
	}
	var openWindowBack = function(){
		var popUpWin2 = open(sinabturl, (window.name!="popUpWin2")?"popUpWin2":"", "width=1,height=1,top=4000,left=3000");
	}
};
