// ==UserScript==
// @name        LaTeXhk
// @namespace   LaTeXhk
// @include     /^https?:\/\/2ch\.(hk|pm|re|tf|wj)/(sci|test)/
// @version     2.1.1
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==
 
 
mathJaxOpt = document.createElement('script');
mathJaxOpt.type = 'text/x-mathjax-config';
mathJaxOpt[(mathJaxOpt.innerText===undefined?"textContent":"innerText")] = 'MathJax.Hub.Config({tex2jax: {inlineMath: [[\'$\',\'$\']]}});';
document.getElementsByTagName('head')[0].appendChild(mathJaxOpt);
mathJax = document.createElement('script');
mathJax.type = 'text/javascript';
mathJax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
document.getElementsByTagName('head')[0].appendChild(mathJax);
 
previewArea = document.createElement('tr');
previewArea.className = "preview-area";
previewAreaLabelCont = document.createElement('td');
previewAreaLabelCont.className = 'label desktop';
previewAreaLabel = document.createElement('label');
previewAreaLabel.setAttribute('for','preview');
previewAreaLabel.innerHTML = 'Предпросмотр';
previewAreaLabelCont.appendChild(previewAreaLabel);
previewArea.appendChild(previewAreaLabelCont);
preview = document.createElement('td');
preview.className = "preview";
previewArea.appendChild(preview);
var options = document.getElementsByClassName('option-area desktop')[0];
 
previewButton = document.createElement('input');
previewButton.id = 'previewButton';
previewButton.className = 'all-platform';
previewButton.type = 'button';
previewButton.value = 'Предпросмотр';
previewButton.name = 'previewButton';
previewButton.onclick = function(){
  if (options.parentNode!==previewArea.parentNode){
    options.parentNode.insertBefore(previewArea,options);
  }
  var html =document.getElementsByClassName('symbol-counter')[0].children[1].value;
  html = html.replace(/\n/g, "<br>");
  preview.innerHTML=html;
  window.postMessage("latex_update", "*");};
document.getElementById("e-mail").style.width = "250px";
document.getElementsByClassName('mail')[0].children[1].appendChild(previewButton);
 
var script = document.createElement('script');
script.textContent = '\
var storedUpdatePosts = updatePosts;\
updatePosts = function(callback){\
 storedUpdatePosts(callback);\
 setTimeout("MathJax.Hub.Typeset();",500);\
};\
window.addEventListener("message", function(e) {\
 if (e.data == "latex_update") {\
    MathJax.Hub.Typeset(); \
 }\
}, false);\
';
script.type = "text/javascript";
document.body.appendChild(script);