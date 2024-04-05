 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, c, defer, hashfile, libLoader, md5, meta, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
var meta = {}
meta = {
  url: "https://zbryikt.github.io/geoevent/",
  description: "This tool helps you visualize events across time and space with bubbles of magnitude of events, and works on devices with different screen size.",
  title: "Events Visualization",
  description: "",
  thumbnail: "http://zbryikt.github.io/geoevent/assets/img/thumbnail.png",
  thumb: {type: "image/jpeg", width: "1200", height: "630"},
  ogtype: "website"
};
pug_html = pug_html + "\u003Chead prefix=\"og: http:\u002F\u002Fogp.me\u002Fns#\"\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E\u003Clink" + (" rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\""+pug_attr("crossorigin", true, true, true)) + "\u003E\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Lato:wght@300;700&amp;display=swap\" rel=\"stylesheet\"\u003E\u003Ctitle\u003E" + (pug_escape(null == (pug_interp = meta.title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", meta.url, true, true)) + "\u003E\u003Cmeta" + (" name=\"description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", meta.title, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", meta.description, true, true)) + "\u003E\u003Cmeta property=\"og:locale\" content=\"en\"\u003E\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", meta.thumbnail, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", meta.thumb.type || "image/jpeg", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", meta.thumb.width || "1200", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", meta.thumb.height || "630", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", meta.ogtype || "website", true, true)) + "\u003E\u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"assets\u002Fimg\u002Ffavicon.png\"\u003E";
pug_mixins["css"]([
    {name: "bootstrap", path: "dist/css/bootstrap.min.css"},
    {name: "@loadingio/bootstrap.ext"}
  ]);
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E:root{--font-head:Lato,sans-serif;--font-head-weight:700;--font-body:Lato,sans-serif;--font-body-weight:300}.w-960{width:960px}@media(max-width:960px){.w-960.rwd{width:100%;padding:1em}}html,body{margin:0;padding:0;width:100%;height:100%;font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px}b,em{font-weight:700;font-style:normal}.btn-theme-default{background:#2c3e50;color:#fff}.btn-theme-gray{background:#95a5a6;color:#fff}.btn-theme-green{background:#18bc9c;color:#fff}#widget{width:100%;height:100%}#layout{position:absolute;top:0;left:20%;width:60%;margin:4% 0;height:68%}@media(max-width:768px){#layout{width:80%;left:10%}}@media(max-width:480px){#layout{left:0;width:100%;height:80%;margin:0;padding-bottom:30px}#layout .btn{border-radius:0;float:right}}#main{background:#eee;width:100%;height:400px;position:relative;z-index:;border-radius:5px;overflow:hidden;box-shadow:0 2px 2px rgba(0,0,0,0.5)}@media(max-width:480px){#main{border-radius:0;box-shadow:none}}#demopanel{width:100%;height:100%}#color{margin-bottom:3px}@media(max-width:480px){#color{margin-bottom:0}#color .btn,#color .btn-sm{padding:2px 5px;font-size:.8em}}#title img{height:16px;width:16px}#sample-doc{width:100%;height:300px}#result{border:0;background:#eee;width:100%;height:400px}#footer{width:100%;min-height:100px}#forkme{position:absolute;top:-15px;left:-15px;z-index:}#forkme img{border:0}@media(max-width:480px){#forkme{display:none}}\u003C\u002Fstyle\u003E";
pug_mixins["script"]([
    {name: "papaparse", path: "papaparse.min.js"},
    {name: "proxise"},
    {name: "@loadingio/debounce.js"},
    {name: "@loadingio/ldquery"},
    {name: "ldview"},
    {name: "@plotdb/semver"},
    {name: "@plotdb/rescope"},
    {name: "@plotdb/csscope"},
    {name: "@plotdb/block"}
  ]);
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"w-960 rwd mx-auto my-5\"\u003E\u003Ca id=\"forkme\" href=\"https:\u002F\u002Fgithub.com\u002Fzbryikt\u002Fgeoevent\"\u003E\u003Cimg decoding=\"async\" width=\"149\" height=\"149\" src=\"assets\u002Fimg\u002Fforkme.png\" alt=\"Fork Me on GitHub\" loading=\"lazy\"\u003E\u003C\u002Fa\u003E\u003Cdiv id=\"hero\"\u003E\u003Cdiv class=\"d-flex align-items-center justify-content-between mb-1\"\u003E\u003Cdiv class=\"d-flex g-1 align-items-center\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Ffavicon.png\" width=\"16\" height=\"16\" alt=\"favicon\"\u003E\u003Cdiv class=\"text-sm\"\u003E\u003Cb\u003EEvents Visualization \u003C\u002Fb\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-1\"\u003E\u003Cdiv class=\"btn btn-theme-default btn-sm\" ld=\"set-style\" data-name=\"default\"\u003EDefault\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-theme-gray btn-sm\" ld=\"set-style\" data-name=\"gray\"\u003EGray\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-theme-green btn-sm\" ld=\"set-style\" data-name=\"green\"\u003EGreen\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"main\" ld=\"widget\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"mt-5\" id=\"description\"\u003E\u003Ch2\u003EEvents Visualization\u003C\u002Fh2\u003E\u003Cp\u003EThis tool helps you visualize events across time and space with bubbles of magnitude of events, and works on devices with different screen size. Above is an example of \u003Ca href=\"http:\u002F\u002F0media.tw\u002Ft\u002Fgeoevent\u002Fwidget\u002F?src=1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o&amp;color=default&amp;ratio=20&amp;=undefined&amp;clat=12.573404&amp;clng=-15.193685&amp;initz=2\"\u003Evisualization of Islamic terrorist attacks from 1983 to 2015\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003Cdiv class=\"mt-4\"\u003E\u003Ch4\u003EOther showcase:\u003C\u002Fh4\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"http:\u002F\u002F0media.tw\u002Ft\u002Fgeoevent\u002Fwidget\u002F?src=17u9luNKn77I4Tyz3pPADnr6sw3yiob0Z6Dy4_FFpbl4&amp;color=default&amp;ratio=5&amp;clat=20&amp;clng=0&amp;initz=2\"\u003EGlobal Earthquake since 1902\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"http:\u002F\u002F0media.tw\u002Ft\u002Fgeoevent\u002Fwidget\u002F?src=1weTyy3X52QginfNbrSmxjR8WpsAEgJSRjzzqBJ8RaXk&amp;color=default&amp;ratio=20&amp;clat=20&amp;clng=0&amp;initz=2\"\u003EGlobal Commercial Aricraft Accident\u003C\u002Fa\u003E ( partial data )\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"my-5\"\u003E\u003Chr\u003E\u003C\u002Fdiv\u003E\u003Ch3\u003EHow to Use\u003C\u002Fh3\u003E\u003Cp\u003Eprepare the event data in a google spreadsheet formatted like this:\u003C\u002Fp\u003E\u003Ciframe class=\"mb-4\" id=\"sample-doc\" src=\"https:\u002F\u002Fdocs.google.com\u002Fspreadsheets\u002Fd\u002F1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o\u002Fpubhtml?widget=true&amp;amp;headers=false\"\u003E\u003C\u002Fiframe\u003E\u003Cp\u003E 7 columns are required in following order: date, event, shortname, death, wounded, latitude, longitude:\u003Cul\u003E\u003Cli\u003E\u003Ccode\u003Edate\u003C\u002Fcode\u003E: Event date. YYYY\u002FMM\u002FDD or MM\u002FDD\u002FYYYY\u003C\u002Fli\u003E\u003Cli\u003E\u003Ccode\u003Eevent\u003C\u002Fcode\u003E: Event name. shown in timeline only if shortname is omitted\u003C\u002Fli\u003E\u003Cli\u003E\u003Ccode\u003Eshortname\u003C\u002Fcode\u003E: short name of event for showing in timeline\u003C\u002Fli\u003E\u003Cli\u003E\u003Ccode\u003Edeath\u003C\u002Fcode\u003E: number of death\u003C\u002Fli\u003E\u003Cli\u003E\u003Ccode\u003Ewounded\u003C\u002Fcode\u003E: number of wounded\u003C\u002Fli\u003E\u003Cli\u003E\u003Ccode\u003Elatitude\u003C\u002Fcode\u003E and \u003Ccode\u003Elongitude\u003C\u002Fcode\u003E: coordinate of the event \u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E\u003Cp\u003Eand publish the spreadsheet by clicking \u003Cem\u003EMenu\u003C\u002Fem\u003E &#xbb; \u003Cem\u003EPublish to the Web\u003C\u002Fem\u003E &#xbb; \u003Cem\u003EPublish\u003C\u002Fem\u003E. Then, Copy &amp; paste the link of the spreadsheet in this input box:\u003C\u002Fp\u003E\u003Cdiv class=\"form-group\" ng-class=\"{'has-error':sid==null &amp;&amp; datasrc}\"\u003E\u003Cinput class=\"form-control\" placeholder=\"e.g.,https:\u002F\u002Fdocs.google.com\u002Fspreadsheets\u002Fd\u002F1p0DNKBt4oNfDBgHv4ZXH-vu0bJ_PtxFFXCL7o4O_Cxo\u002Fpubhtml\" ld=\"datasrc\"\u003E\u003C\u002Fdiv\u003E\u003Cp\u003Eand setup following configuration:\u003C\u002Fp\u003E\u003Cdiv class=\"d-flex g-2 flex-wrap px-2 py-3 border rounded shadow-sm justify-content-around\"\u003E\u003Cdiv class=\"d-flex g-2\"\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm font-weight-bold\"\u003Ecolorschema\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-group\"\u003E\u003Cdiv class=\"btn btn-theme-default btn-sm\" ld=\"set-style\" data-name=\"default\"\u003EDefault\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-theme-gray btn-sm\" ld=\"set-style\" data-name=\"gray\"\u003EGray\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-theme-green btn-sm\" ld=\"set-style\" data-name=\"green\"\u003EGreen\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm font-weight-bold\"\u003Ecircle size\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn-group\"\u003E\u003Cdiv class=\"btn btn-outline-secondary btn-sm\" ld=\"set-ratio\" data-value=\"1\"\u003ESmall\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary btn-sm\" ld=\"set-ratio\" data-value=\"5\"\u003EMedium\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-outline-secondary btn-sm\" ld=\"set-ratio\" data-value=\"20\"\u003ELarge\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-2\"\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm font-weight-bold d-flex align-items-center\"\u003E\u003Cspan class=\"mr-2\"\u003Ecentral latlng\u003C\u002Fspan\u003E\u003Cinput" + (" class=\"mr-1\""+" type=\"checkbox\""+pug_attr("checked", true, true, true)+" ld=\"autoll\"") + "\u003E\u003Cdiv class=\"font-weight-bold text-sm\"\u003Eauto\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"d-flex g-2\"\u003E\u003Cinput" + (" class=\"form-control form-control-sm\""+" ld=\"latlng\" data-name=\"clat\" placeholder=\"latitude\" style=\"max-width:6.5em\""+pug_attr("disabled", true, true, true)) + "\u003E\u003Cinput" + (" class=\"form-control form-control-sm\""+" ld=\"latlng\" data-name=\"clng\" placeholder=\"longitude\" style=\"max-width:6.5em\""+pug_attr("disabled", true, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm font-weight-bold\"\u003Einitial zoom level\u003C\u002Fdiv\u003E\u003Cselect" + (" class=\"form-control form-control-sm\""+" ld=\"initz\" style=\"min-width:120px\""+pug_attr("disabled", true, true, true)) + "\u003E";
// iterate [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
;(function(){
  var $$obj = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var v = $$obj[pug_index2];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", v, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = v) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var v = $$obj[pug_index2];
pug_html = pug_html + "\u003Coption" + (pug_attr("value", v, true, true)) + "\u003E" + (pug_escape(null == (pug_interp = v) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv\u003E\u003Cdiv class=\"text-sm font-weight-bold\"\u003E&nbsp;\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-danger btn-sm\" ld=\"generate\"\u003EGenerate\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbr\u003E\u003Cp\u003Eresult looks like this:\u003C\u002Fp\u003E\u003Ciframe id=\"result\" ld=\"result\"\u003E\u003C\u002Fiframe\u003E\u003Cp\u003Ehtml code for embedding in your websites:\u003C\u002Fp\u003E\u003Ctextarea class=\"form-control\" ld=\"embedcode\" rows=\"5\"\u003E\u003C\u002Ftextarea\u003E\u003Cbr\u003E\u003Cp\u003Edirect link to the result page: ( \u003Cdiv class=\"btn btn-sm btn-link\" ld=\"open-url\" target=\"_blank\" rel=\"noopener noreferer\"\u003Eopen in new tab\u003C\u002Fdiv\u003E )\u003C\u002Fp\u003E\u003Cinput" + (" class=\"form-control\""+" ld=\"url\""+pug_attr("disabled", true, true, true)) + "\u003E\u003Cdiv class=\"my-4\"\u003E\u003Chr\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"footer\"\u003EFor source code, please visit \u003Ca href=\"http:\u002F\u002Fgithub.com\u002Fzbryikt\u002Fgeoevent\u002F\"\u003EGithub Repo\u003C\u002Fa\u003E of the events visualization project.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var t,e,n,r=this;this.mgr=new block.manager({registry:function(t){if(t.ns===\"local\"){return\"block\u002Findex.html\"}if(!t.path){t.path=\"index.\"+({block:\"html\",css:\"css\",js:\"js\"}[t.type]||\"html\")}return\"assets\u002Flib\u002F\"+t.name+\"\u002Fmain\u002F\"+t.path}});this.host=\"http:\u002F\u002F0media.tw\u002Ft\u002Fgeoevent\";this.initz=1;this.autoll=true;this.clat=null;this.clng=null;this.sid=null;this.style=\"default\";this.ratio=20;this.config={src:\"1yY4pqGqI3rLMf5bQqe5XMztnnJ78RMUrfh-XpJdhd_o\",color:\"default\",ratio:20,clat:12.573404,clng:-15.193685,initz:2};t=function(){var t;return r.sid=!(t=\u002F\\\u002Fd\\\u002F([^\\\u002F]+)\u002F.exec(r.datasrc))?null:t[1]};e=function(t){var e;e=t.node;return r[e.getAttribute(\"data-name\")]=e.value};this.setStyle=function(t){return this.style=t};this.setRatio=function(t){return this.ratio=t};this.updateWidget=function(){var t=this;return setTimeout(function(){if(!(t.sid&&t.style&&t.ratio)){return}if(!t.autoll&&!(t.clat&&t.clng)){return}t.outurl=\"\u002Fwidget\u002F?src=\"+t.sid+\"&color=\"+t.style+\"&ratio=\"+t.ratio;if(t.clat&&t.clng){t.outurl+=\"&clat=\"+t.clat+\"&clng=\"+t.clng}if(!t.autoll){t.outurl+=\"&initz=\"+t.initz}t.outurlwithhost=host+t.outurl;t.embedcode=\"\u003Ciframe src='\"+t.outurlwithhost+\"'\u003E\u003C\u002Fiframe\u003E\";return n.get(\"result\").setAttribute(\"src\",t.outurlwithhost)},1e3)};return n=new ldview({root:document.body,init:{widget:function(t){var n;n=t.node;return ld$.fetch(\"assets\u002Fdata\u002Fislamist-terrorist-attacks.csv\",{method:\"GET\"},{type:\"text\"}).then(function(t){var e;e=Papa.parse(t).data;console.log(e);return r.mgr.from({ns:\"local\",name:\"block\"},{root:n,data:{data:e}})})}},action:{click:{\"set-style\":function(t){var e;e=t.node;return r.style=e.getAttribute(\"data-name\")},\"set-ratio\":function(t){var e;e=t.node;return r.style=e.getAttribute(\"data-value\")},generate:function(){return r.updateWidget()}},input:{latlng:e,datasrc:t},change:{latlng:e,datasrc:t,initz:function(t){var e;e=t.node;return r.initz=e.value},autoll:function(t){var e;e=t.node;return r.autoll=e.checked}},handler:{\"set-style\":function(t){var e;e=t.node;return e.classList.toggle(\"active\",r.style===e.getAttribute(\"data-name\"))},\"set-ratio\":function(t){var e;e=t.node;return e.classList.toggle(\"active\",r.ratio===e.getAttribute(\"data-value\"))}}}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "meta" in locals_for_with ?
        locals_for_with.meta :
        typeof meta !== 'undefined' ? meta : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 