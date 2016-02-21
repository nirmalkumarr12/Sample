

//document.body.style.backgroundColor = "green";
var url= chrome.extension.getURL('toolbar.html');
var height='35px'
 var frm="<iframe src='"+url+"' id='ToolSample' style' style='height:"+height+"'></iframe>";

 $('html').append(frm);