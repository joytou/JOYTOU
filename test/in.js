/******** Start config ********/
var github_access_token="04b59d3f707f4eb18ec8"+"7e0e1beb7fabed86b69c";
var github_login_id="logindiv";
var github_name_id="";
var github_avatar_id="";
var github_bio_id="";
var github_location_id="";
var github_blog_id="";
var github_email_id="";
var github_company_id="";
/******** End config ********/

var xmlhttp=null;
if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null)
  {
  xmlhttp.onreadystatechange=state_Change;
  xmlhttp.open("GET","https://api.github.com/user?access_token="+github_access_token,true);
  xmlhttp.send(null);
  }
else
  {
  alert("Your browser does not support XMLHTTP.");
  }
}

function state_Change()
{
if (xmlhttp.readyState==4)
  {
  if (xmlhttp.status==200)
    {
     var usersprofile=JSON.parse(xmlhttp.responseText);
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