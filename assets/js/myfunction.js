---
---
if(window.location.search)
{
/*archive.js*/
var searchURL=window.location.search;searchURL=searchURL.substring(1,searchURL.length);var targetPageId=searchURL.split("&")[0].split("=")[1];document.write(targetPageId);
}
/*cb-search.js*/
$(document).ready(function(){var time1=0;var show=false;var names=new Array();/*文章名字等*/var urls=new Array();/*文章地址*/$(document).keyup(function(e){var time2=new Date().getTime();if(e.keyCode==17){var gap=time2-time1;time1=time2;if(gap<500){if(show){$(".cb-search-tool").css("display","none");show=false;}else{$(".cb-search-tool").css("display","block");show=true;$("#cb-search-content").val("");$("#cb-search-content").focus();}time1=0;}}else if(e.keyCode==27){$(".cb-search-tool").css("display","none");show=false;time1=0;}});$("#cb-search-content").keyup(function(e){var time2=new Date().getTime();if(e.keyCode==17){var gap=time2-time1;time1=time2;if(gap<500){if(show){$(".cb-search-tool").css("display","none");show=false;}else{$(".cb-search-tool").css("display","block");show=true;$("#cb-search-content").val("");$("#cb-search-content").focus();}time1=0;}}});$("#cb-close-btn").click(function(){$(".cb-search-tool").css("display","none");show=false;time1=0;});$("#cb-search-btn").click(function(){$(".cb-search-tool").css("display","block");show=true;$("#cb-search-content").val("");$("#cb-search-content").focus();time1=0;});$.getJSON("{{ site.baseurl }}/search.json").done(function(data){if(data.code==0){for(var index in data.data){var item=data.data[index];names.push(item.title);urls.push(item.url);}$("#cb-search-content").typeahead({source:names,afterSelect: function(item){$(".cb-search-tool").css("display","none");show=false;window.location.href=(urls[names.indexOf(item)]);return item;}});}}).error(function(data,b){console.log("json解析错误，搜索功能暂不可用，请检查文章title，确保不含有换行等特殊符号");});});
/*gotop.js*/
$(function(){$("#gotop").click(function(){$("html,body").animate({scrollTop:0},1200);});});
if(window.location.hash)
{
/*collapse.js*/
$(function(){$(window.location.hash).collapse('show')});
/*tab.js*/
$(function(){$('#myTab a[href="{{ page.permalink }}'+window.location.hash+'"]').tab('show');});
}
/*markdown.converter.js*/
var Markdown;Markdown="object"==typeof exports&&"function"==typeof require?exports:{},function(){function e(e){return e}function t(){return!1}function i(){}function n(){}i.prototype={chain:function(t,i){var n=this[t];if(!n)throw Error("unknown hook "+t);this[t]=n===e?i:function(e){return i(n(e))}},set:function(e,t){if(!this[e])throw Error("unknown hook "+e);this[e]=t},addNoop:function(t){this[t]=e},addFalse:function(e){this[e]=t}},Markdown.HookCollection=i,n.prototype={set:function(e,t){this["s_"+e]=t},get:function(e){return this["s_"+e]}},Markdown.Converter=function(){function e(e){return e=e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(e,t,i,n,r,s){return t=t.toLowerCase(),M.set(t,C(i)),r?n:(s&&N.set(t,s.replace(/"/g,"&quot;")),"")})}function t(e){return e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,r),e=e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,r),e=e.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r),e=e.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,r),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r)}function r(e,t){var i=t;return i=i.replace(/^\n+/,""),i=i.replace(/\n+$/g,""),i="\n\n~K"+(R.push(i)-1)+"K\n\n"}function s(e,i){e=d(e);var n="<hr />\n";return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=p(e),e=m(e),e=L(e),e=t(e),e=x(e,i)}function o(e){return e=y(e),e=a(e),e=w(e),e=c(e),e=l(e),e=S(e),e=e.replace(/~P/g,"://"),e=C(e),e=b(e),e=e.replace(/  +\n/g," <br>\n")}function a(e){var t=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return e=e.replace(t,function(e){var t=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return t=k(t,"!"==e.charAt(1)?"\\`*_/":"\\`*_")})}function l(e){return e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,h),e=e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,h),e=e.replace(/(\[([^\[\]]+)\])()()()()()/g,h)}function h(e,t,i,n,r,s,o,a){void 0==a&&(a="");var l=t,h=i.replace(/:\/\//g,"~P"),c=n.toLowerCase(),u=r,d=a;if(""==u)if(""==c&&(c=h.toLowerCase().replace(/ ?\n/g," ")),u="#"+c,void 0!=M.get(c))u=M.get(c),void 0!=N.get(c)&&(d=N.get(c));else{if(!(l.search(/\(\s*\)$/m)>-1))return l;u=""}u=T(u),u=k(u,"*_");var p='<a href="'+u+'"';return""!=d&&(d=d.replace(/"/g,"&quot;"),d=k(d,"*_"),p+=' title="'+d+'"'),p+=">"+h+"</a>"}function c(e){return e=e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,u),e=e.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,u)}function u(e,t,i,n,r,s,o,a){var l=t,h=i,c=n.toLowerCase(),u=r,d=a;if(d||(d=""),""==u){if(""==c&&(c=h.toLowerCase().replace(/ ?\n/g," ")),u="#"+c,void 0==M.get(c))return l;u=M.get(c),void 0!=N.get(c)&&(d=N.get(c))}h=k(h.replace(/"/g,"&quot;"),"*_[]()"),u=k(u,"*_");var p='<img src="'+u+'" alt="'+h+'"';return d=d.replace(/"/g,"&quot;"),d=k(d,"*_"),p+=' title="'+d+'"',p+=" />"}function d(e){return e=e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(e,t){return"<h1>"+o(t)+"</h1>\n\n"}),e=e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(e,t){return"<h2>"+o(t)+"</h2>\n\n"}),e=e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(e,t,i){var n=t.length;return"<h"+n+">"+o(i)+"</h"+n+">\n\n"})}function p(e){e+="~0";var t=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return D?e=e.replace(t,function(e,t,i){var n=t,r=i.search(/[*+-]/g)>-1?"ul":"ol",s=f(n,r);return s=s.replace(/\s+$/,""),s="<"+r+">"+s+"</"+r+">\n"}):(t=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,e=e.replace(t,function(e,t,i,n){var r=t,s=i,o=n.search(/[*+-]/g)>-1?"ul":"ol",a=f(s,o);return a=r+"<"+o+">\n"+a+"</"+o+">\n"})),e=e.replace(/~0/,"")}function f(e,t){D++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var i=I[t],n=RegExp("(^[ \\t]*)("+i+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+i+")[ \\t]+))","gm"),r=!1;return e=e.replace(n,function(e,t,i,n){var a=n,l=/\n\n$/.test(a),h=l||a.search(/\n{2,}/)>-1;return h||r?a=s(E(a),!0):(a=p(E(a)),a=a.replace(/\n$/,""),a=o(a)),r=l,"<li>"+a+"</li>\n"}),e=e.replace(/~0/g,""),D--,e}function m(e){return e+="~0",e=e.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(e,t,i){var n=t,r=i;return n=v(E(n)),n=_(n),n=n.replace(/^\n+/g,""),n=n.replace(/\n+$/g,""),n="<pre><code>"+n+"\n</code></pre>","\n\n"+n+"\n\n"+r}),e=e.replace(/~0/,"")}function g(e){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(R.push(e)-1)+"K\n\n"}function y(e){return e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,t,i,n){var r=n;return r=r.replace(/^([ \t]*)/g,""),r=r.replace(/[ \t]*$/g,""),r=v(r),r=r.replace(/:\/\//g,"~P"),t+"<code>"+r+"</code>"})}function v(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=k(e,"*_{}[]\\",!1)}function b(e){return e=e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4"),e=e.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4")}function L(e){return e=e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,t){var i=t;return i=i.replace(/^[ \t]*>[ \t]?/gm,"~0"),i=i.replace(/~0/g,""),i=i.replace(/^[ \t]+$/gm,""),i=s(i),i=i.replace(/(^|\n)/g,"$1  "),i=i.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,t){var i=t;return i=i.replace(/^  /gm,"~0"),i=i.replace(/~0/g,"")}),g("<blockquote>\n"+i+"\n</blockquote>")})}function x(e,t){e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,"");for(var i=e.split(/\n{2,}/g),n=[],r=/~K(\d+)K/,s=i.length,a=0;s>a;a++){var l=i[a];r.test(l)?n.push(l):/\S/.test(l)&&(l=o(l),l=l.replace(/^([ \t]*)/g,"<p>"),l+="</p>",n.push(l))}if(!t){s=n.length;for(var a=0;s>a;a++)for(var h=!0;h;)h=!1,n[a]=n[a].replace(/~K(\d+)K/g,function(e,t){return h=!0,R[t]})}return n.join("\n\n")}function C(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function w(e){return e=e.replace(/\\(\\)/g,P),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,P)}function S(e){e=e.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,"$1<$2$3>$4");var t=function(e,t){return'<a href="'+t+'">'+A.plainLinkText(t)+"</a>"};return e=e.replace(/<((https?|ftp):[^'">\s]+)>/gi,t)}function O(e){return e=e.replace(/~E(\d+)E/g,function(e,t){var i=parseInt(t);return String.fromCharCode(i)})}function E(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}function _(e){if(!/\t/.test(e))return e;var t,i=["    ","   ","  "," "],n=0;return e.replace(/[\n\t]/g,function(e,r){return"\n"===e?(n=r+1,e):(t=(r-n)%4,n=r+1,i[t])})}function T(e){if(!e)return"";var t=e.length;return e.replace(F,function(i,n){return"~D"==i?"%24":":"!=i||n!=t-1&&!/[0-9\/]/.test(e.charAt(n+1))?"%"+i.charCodeAt(0).toString(16):":"})}function k(e,t,i){var n="(["+t.replace(/([\[\]\\])/g,"\\$1")+"])";i&&(n="\\\\"+n);var r=RegExp(n,"g");return e=e.replace(r,P)}function P(e,t){var i=t.charCodeAt(0);return"~E"+i+"E"}var A=this.hooks=new i;A.addNoop("plainLinkText"),A.addNoop("preConversion"),A.addNoop("postConversion");var M,N,R,D;this.makeHtml=function(i){if(M)throw Error("Recursive call to converter.makeHtml");return M=new n,N=new n,R=[],D=0,i=A.preConversion(i),i=i.replace(/~/g,"~T"),i=i.replace(/\$/g,"~D"),i=i.replace(/\r\n/g,"\n"),i=i.replace(/\r/g,"\n"),i="\n\n"+i+"\n\n",i=_(i),i=i.replace(/^[ \t]+$/gm,""),i=t(i),i=e(i),i=s(i),i=O(i),i=i.replace(/~D/g,"$$"),i=i.replace(/~T/g,"~"),i=A.postConversion(i),R=N=M=null,i};var I={ol:"\\d+[.]",ul:"[*+-]"},F=/(?:["'*()[\]:]|~D)/g}}();
/*maekdown converter and parsing json*/
var converter=new Markdown.Converter();
 $.ajax({
    url: 'https://api.github.com/repos/{{ site.github_username }}/{{ site.github_repo }}/issues',
    dataType: 'json',
    success: function(data) {
for(var i=0;i<data.length;i++){
for(var j=0;j<data[i].labels.length;j++){
if(data[i].labels[j].name=='{{ site.github_label }}'&&data[i].user.login=='{{ site.github_username }}'){
document.getElementById("jumbotrontitle").innerHTML=data[i].title;
document.getElementById("jumbotroncontent").innerHTML=converter.makeHtml(data[i].body);
document.getElementById("jumbotronurl").href=data[i].html_url;
j=data[i].labels.length;
i=data.length;
}
}
}
    },
    statusCode: {
     404: function() {
      document.getElementById("jumbotrontitle").innerHTML="Status Code: 404";
     }
    },
    error: function() {
    alert("error");
    }
   });
/** downloads page **/
if(document.getElementById("listgroup"))
{
 $.ajax({
    url: 'https://api.github.com/repos/{{ site.github_username }}/{{ site.github_repo }}/releases',
    dataType: 'json',
    success: function(data) {
    for(var i=0;i<data.length;i++){
    var eli=document.createElement("li");
    eli.setAttribute("class","list-group-item");
    eli.innerHTML='<h2>'+data[i].name+'</h2><p class="small">published on '+data[i].published_at+'</p><p><strong>Assets</strong><ul><li><a href="'+data[i].tarball_url+'">tar.gz</a></li><li><a href="'+data[i].zipball_url+'">zip</a></li></ul></p><div>'+converter.makeHTML(data[i].body)+'</div>';
    document.getElementById("listgroup").appendChild(eli);
    }
    },
    statusCode: {
     404: function() {
      document.getElementById("listgroup").innerHTML="Status Code: 404";
     }
    },
    error: function() {
    alert("error");
    }
    });
}