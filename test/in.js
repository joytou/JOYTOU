/******** Start config ********/

/******** End config ********/

	var xmlhttp;
	var statuscodealrm="";
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
		document.write("XMLHTTPRequest\n");
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		document.write("ActiveXObject\n");
	}
	xmlhttp.onreadystatechange=function()
	{
	statuscodealrm+=xmlhttp.readyState+":"+xmlhttp.status+";";
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.write(xmlhttp.responseText);
   var usersprofile=xmlhttp.responseText;
     if(github_login_id!=""){
     document.getElementById(github_login_id).innerTEXT=usersprofile.login;
     }if(github_name_id!=""){
     document.getElementById(github_name_id).innerTEXT=usersprofile.name;
     }if(github_avatar_id!=""){
     document.getElementById(github_avatar_id).setAttribute("src",usersprofile.avatar_url);
     document.getElementById(github_avatar_id).setAttribute("alt",usersprofile.name);
     }if(github_bio_id!=""){
     document.getElementById(github_bio_id).innerTEXT=usersprofile.bio;
     }if(github_location_id!=""){
     document.getElementById(github_location_id).innerTEXT=usersprofile.location;
     }if(github_blog_id!=""){
     document.getElementById(github_blog_id).innerTEXT=usersprofile.blog;
     document.getElementById(github_blog_id).
     setAttribute("href",usersprofile.blog);
     }if(github_email_id!=""){
     document.getElementById(github_email_id).innerTEXT=usersprofile.email;
     }if(github_company_id!=""){
     document.getElementById(github_company_id).innerTEXT=usersprofile.company;
     }
		}
	}
	//xmlhttp.open("GET","https://api.github.com/user?access_token="+github_access_token,false);
//	xmlhttp.send();
//window.alert(statuscodealrm);