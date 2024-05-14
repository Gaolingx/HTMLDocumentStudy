if(typeof Dottext == "undefined") Dottext={};
if(typeof Dottext.Web == "undefined") Dottext.Web={};
if(typeof Dottext.Web.UI == "undefined") Dottext.Web.UI={};
if(typeof Dottext.Web.UI.Controls == "undefined") Dottext.Web.UI.Controls={};
if(typeof Dottext.Web.UI.Controls.RecentComments == "undefined") Dottext.Web.UI.Controls.RecentComments={};
Dottext.Web.UI.Controls.RecentComments_class = function() {};
Object.extend(Dottext.Web.UI.Controls.RecentComments_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	BuildRecentComments: function(path) {
		return this.invoke("BuildRecentComments", {"path":path}, this.BuildRecentComments.getArguments().slice(1));
	},
	url: '/ajaxpro/Dottext.Web.UI.Controls.RecentComments,Dottext.Web.ashx'
}));
Dottext.Web.UI.Controls.RecentComments = new Dottext.Web.UI.Controls.RecentComments_class();

