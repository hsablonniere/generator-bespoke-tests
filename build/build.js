!function e(t,n,i){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return a(n?n:e)},c,c.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(e,t,n){t.exports=function(e){return function(t){var n,i,a=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return l(1)?(s(n,i+1),!1):void(a[e]&&s(e,0))},o=function(){var e=n-1;return l(-1)?(s(n,i-1),!1):void(a[e]&&s(e,a[e].length-1))},s=function(e,t){n=e,i=t,a.forEach(function(n,i){n.forEach(function(n,a){n.classList.add("bespoke-bullet"),e>i||i===e&&t>=a?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),i===e&&a===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==a[n][i+e]};t.on("next",r),t.on("prev",o),t.on("slide",function(e){s(e.index,0)}),s(0,0)}}},{}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),i=parseInt(t,10);t&&(i?n(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===t&&n(i)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],3:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],4:[function(e,t,n){t.exports=function(e){return function(t){var n=t.parent,i=t.slides[0],a=i.offsetHeight,r=i.offsetWidth,o="zoom"===e||"zoom"in n.style&&"transform"!==e,s=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=o?t.slides:t.slides.map(s),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,i){return i+e in n.style?i+e:t},e.toLowerCase())}("Transform"),p=o?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},u=function(){var e=n.offsetWidth/r,t=n.offsetHeight/a;l.forEach(p.bind(null,Math.min(e,t)))};window.addEventListener("resize",u),u()}}},{}],5:[function(e,t,n){(function(i){!function(e){if("object"==typeof n)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof i?a=i:"undefined"!=typeof self&&(a=self);var r=a;r=r.bespoke||(r.bespoke={}),r=r.themes||(r.themes={}),r.cube=e()}}(function(){return function t(n,i,a){function r(s,l){if(!i[s]){if(!n[s]){var c="function"==typeof e&&e;if(!l&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=i[s]={exports:{}};n[s][0].call(p.exports,function(e){var t=n[s][1][e];return r(t?t:e)},p,p.exports,t,n,i,a)}return i[s].exports}for(var o="function"==typeof e&&e,s=0;s<a.length;s++)r(a[s]);return r}({1:[function(e,t,n){var i=e("bespoke-classes"),a=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return a(e,{prepend:!0}),function(e){i()(e);var t=function(e){var t=document.createElement("div");t.className="bespoke-theme-cube-slide-parent",e.parentNode.insertBefore(t,e),t.appendChild(e)};e.slides.forEach(t)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,a){var r=e.slides[e.slide()],o=a-e.slide(),s=o>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==r&&["inactive",s,s+"-"+Math.abs(o)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(a){e.slides.map(i),t(a.slide,"active"),n(a.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var a=document.getElementsByTagName("head")[0];t&&t.prepend?a.insertBefore(n,a.childNodes[0]):a.appendChild(n)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){t.exports=function(e){return function(t){var n,i,a="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+a],i=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+a]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(i)>50&&t[i>0?"prev":"next"]()})}}},{}],7:[function(e,t,n){var i=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),a=i[0],r={},o=function(e,t){i[e]&&(u("deactivate",d(a,t)),a=i[e],u("activate",d(a,t)))},s=function(e,t){return arguments.length?void(u("slide",d(i[e],t))&&o(e,t)):i.indexOf(a)},l=function(e,t){var n=i.indexOf(a)+e;u(e>0?"next":"prev",d(a,t))&&o(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),p.bind(null,e,t)},p=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},u=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},f={on:c,off:p,fire:u,slide:s,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(f)}),o(0),f};t.exports={from:i}},{}],8:[function(e,t,n){(function(e){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,i=n.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):"Array"===i.util.type(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=i.util.type(e);switch(t){case"Object":var n={};for(var a in e)e.hasOwnProperty(a)&&(n[a]=i.util.clone(e[a]));return n;case"Array":return e.map&&e.map(function(e){return i.util.clone(e)})}return e}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var r=a[e];if(2==arguments.length){n=arguments[1];for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r}var s={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(s[o]=n[o]);s[l]=r[l]}return i.languages.DFS(i.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=s)}),a[e]=s},DFS:function(e,t,n,a){a=a||{};for(var r in e)e.hasOwnProperty(r)&&(t.call(e,r,e[r],n||r),"Object"!==i.util.type(e[r])||a[i.util.objId(e[r])]?"Array"!==i.util.type(e[r])||a[i.util.objId(e[r])]||(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,r,a)):(a[i.util.objId(e[r])]=!0,i.languages.DFS(e[r],t,null,a)))}},plugins:{},highlightAll:function(e,t){for(var n,a=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;n=a[r++];)i.highlightElement(n,e===!0,t)},highlightElement:function(t,a,r){for(var o,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(o=(l.className.match(e)||[,""])[1],s=i.languages[o]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=t.textContent,p={element:t,language:o,grammar:s,code:c};if(!c||!s)return void i.hooks.run("complete",p);if(i.hooks.run("before-highlight",p),a&&n.Worker){var u=new Worker(i.filename);u.onmessage=function(e){p.highlightedCode=e.data,i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(p.element),i.hooks.run("after-highlight",p),i.hooks.run("complete",p)},u.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else p.highlightedCode=i.highlight(p.code,p.grammar,p.language),i.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,r&&r.call(t),i.hooks.run("after-highlight",p),i.hooks.run("complete",p)},highlight:function(e,t,n){var r=i.tokenize(e,t);return a.stringify(i.util.encode(r),n)},tokenize:function(e,t,n){var a=i.Token,r=[e],o=t.rest;if(o){for(var s in o)t[s]=o[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var l=t[s];l="Array"===i.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var p=l[c],u=p.inside,d=!!p.lookbehind,f=0,g=p.alias;p=p.pattern||p;for(var h=0;h<r.length;h++){var b=r[h];if(r.length>e.length)break e;if(!(b instanceof a)){p.lastIndex=0;var m=p.exec(b);if(m){d&&(f=m[1].length);var v=m.index-1+f,m=m[0].slice(f),k=m.length,y=v+k,x=b.slice(0,v+1),w=b.slice(y+1),E=[h,1];x&&E.push(x);var j=new a(s,u?i.tokenize(m,u):m,g);E.push(j),w&&E.push(w),Array.prototype.splice.apply(r,E)}}}}}return r},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,r=0;a=n[r++];)a(t)}}},a=i.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===i.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var r={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var o="Array"===i.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,o)}i.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=(s?" ":"")+l+'="'+(r.attributes[l]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+s+">"+r.content+"</"+r.tag+">"},!n.document)return n.addEventListener?(n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,o=t.immediateClose;n.postMessage(i.highlight(r,i.languages[a],a)),o&&n.close()},!1),n.Prism):n.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(i.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",i.highlightAll)),n.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=i),"undefined"!=typeof e&&(e.Prism=i),i.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),i.languages.xml=i.languages.markup,i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},i.languages.css.atrule.inside.rest=i.util.clone(i.languages.css),i.languages.markup&&(i.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:i.languages.css,alias:"language-css"}}),i.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:i.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:i.languages.css}},alias:"language-css"}},i.languages.markup.tag)),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),i.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),i.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:i.languages.javascript,alias:"language-javascript"}}),i.languages.js=i.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),r=t,o=/\blang(?:uage)?-(?!\*)(\w+)\b/i;r&&!o.test(r.className);)r=r.parentNode;if(r&&(n=(t.className.match(o)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=e[s]||s}var l=document.createElement("code");l.className="language-"+n,t.textContent="",l.textContent="Loading…",t.appendChild(l);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,i.highlightElement(l)):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){var i=e("bespoke"),a=e("bespoke-theme-cube"),r=e("bespoke-keys"),o=e("bespoke-touch"),s=e("bespoke-scale"),l=e("bespoke-bullets"),c=e("bespoke-hash");i.from("article",[a(),r(),o(),s(),l("li, .bullet"),c()]),e("prismjs")},{bespoke:7,"bespoke-bullets":1,"bespoke-hash":2,"bespoke-keys":3,"bespoke-scale":4,"bespoke-theme-cube":5,"bespoke-touch":6,prismjs:8}]},{},[9]);