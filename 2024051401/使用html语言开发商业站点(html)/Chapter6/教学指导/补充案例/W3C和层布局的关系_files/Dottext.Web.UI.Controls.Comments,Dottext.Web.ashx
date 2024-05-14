if(typeof Dottext == "undefined") Dottext={};
if(typeof Dottext.Web == "undefined") Dottext.Web={};
if(typeof Dottext.Web.UI == "undefined") Dottext.Web.UI={};
if(typeof Dottext.Web.UI.Controls == "undefined") Dottext.Web.UI.Controls={};
if(typeof Dottext.Web.UI.Controls.Comments == "undefined") Dottext.Web.UI.Controls.Comments={};
Dottext.Web.UI.Controls.Comments_class = function() {};
Object.extend(Dottext.Web.UI.Controls.Comments_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	BuildComments: function(path) {
		return this.invoke("BuildComments", {"path":path}, this.BuildComments.getArguments().slice(1));
	},
	url: '/ajaxpro/Dottext.Web.UI.Controls.Comments,Dottext.Web.ashx'
}));
Dottext.Web.UI.Controls.Comments = new Dottext.Web.UI.Controls.Comments_class();

