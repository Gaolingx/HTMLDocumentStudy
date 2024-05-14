
	function getCommentFileName(url){	
	
		var rCom = /^https?:\/\/[^/]+\/([^/]+)\/[^/]+\/\d{4}\/\d{1,2}\/\d{1,2}\/(\d+)\.aspx/i;
		
		if(rCom.test(url))
		{		
			var blogUserName=RegExp.$1;
			
			return "/comments/"+ blogUserName.substr(0,2)+"/"+blogUserName +"."+ RegExp.$2 +".html?__=" + encodeURIComponent((new Date()).getTime())+Math.random();			
		}
		
		return "";
	}
	
	function getRecFileName(url){
	
		var r = /^https?:\/\/[^/]+\/([^/]+).*/i;		
		
		if(r.test(url))
		{
			var blogUser=RegExp.$1;
			return "/recentcomments/"+ blogUser.substr(0,2)+"/"+blogUser + ".html?__=" + encodeURIComponent((new Date()).getTime())+Math.random();			
		}
		
		return "";
	}
	
	function updateObj(obj, data)
	{
		var comText=getObject(obj);
		comText.innerHTML=data;
	}

	function ajaxRead(file,comType)
	{
	
		var xmlObj = null;

		if(window.XMLHttpRequest)
		{
			xmlObj = new XMLHttpRequest();
		} 
		else if(window.ActiveXObject)
		{
			xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		else 
		{
			return;
		}
						
		xmlObj.onreadystatechange = function()
		{		
			if(xmlObj.readyState == 4)
			{
				if (xmlObj.status==200)
				{
					var r=/^\r\n<!DOCTYPE.*/i;
					
					if(r.test(xmlObj.responseText)){
						buildCom(comType);
					}
					else{
						if (comType==1){
							updateObj('comText',xmlObj.responseText);
						}
						if (comType==0){
							updateObj('comRecText',xmlObj.responseText);
						}
						//UpdateView(xmlObj.responseText);
					}
				}
				if(xmlObj.status==404)
				{
					buildCom(comType);
				}
			}		
		}
		
		if (file!=""){
			xmlObj.open ('GET', file, true);
			xmlObj.send ('');
		}
		
		
		function buildCom(comType){
			if (comType==0){				
				BuildRecComment();
			}				
				
			if (comType==1){
				var r=/.*Pending=.*/i;
				if (r.test(window.location.href)){		
					setTimeout('BuildCommentFile()',2000);
				}
				else{
					BuildCommentFile();
				}
			}		
		}		
		
		function BuildCommentFile(){	

			Dottext.Web.UI.Controls.Comments.BuildComments(url,buildCom_Callback);
		}
		
		function BuildRecComment(){
			Dottext.Web.UI.Controls.RecentComments.BuildRecentComments(urlRec,buildRecCom_Callback);
		}
		
		function buildCom_Callback(res)
		{
			var suc=res.value;
			
			if (suc=="1"){	
				ajaxRead(getCommentFileName(url),1);
			}
			else{
				updateObj('comText', "暂时没有取得评论数据");
			}			
			
		}			
	
		function buildRecCom_Callback(res)
		{
			var suc=res.value;
			if (suc=="1"){
				ajaxRead(getRecFileName(urlRec),0);
			}
			else{
				updateObj('comRecText', "暂时没有取得评论数据");
			}
		}			
		
	}
