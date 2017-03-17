// ==UserScript==
// @autor       Anonymous
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
mathJaxOpt[(mathJaxOpt.innerText==undefined?"textContent":"innerText")] = 'MathJax.Hub.Config({AsciiMath: { fixphi: true, useMathMLspacing: true, displaystyle: false, decimalsign: "."}, tex2jax: {inlineMath: [[\'$\',\'$\']]}});'; 
document.getElementsByTagName('head')[0].appendChild(mathJaxOpt);
mathJax = document.createElement('script');
mathJax.type = 'text/javascript';
mathJax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML"; // only asciiMath AM_HTMLorMML, Only LaTeX and TeX TeX-AMS-MML_HTMLorMML, for all TeX-MML-AM_HTMLorMML
document.getElementsByTagName('head')[0].appendChild(mathJax);
//area footer 
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

//area short window
previewWindow = document.createElement('div');
previewWindow.className = "preview-window";
var optionsWindow = document.getElementsByClassName('qr-mail')[0];

function ClickPreviewButton(){
  if (options.parentNode!==previewArea.parentNode){
    options.parentNode.insertBefore(previewArea,options);
  }
  optionsWindow.parentNode.insertBefore(previewWindow,optionsWindow);
  var html =document.getElementsByClassName('symbol-counter')[0].children[1].value;
  html = html.replace(/\n/g, "<br>");
  preview.innerHTML=html;
  previewWindow.innerHTML=html;  
  window.postMessage("latex_update", "*");
  };
  
previewButton = document.createElement('input');
previewButton.id = 'previewButton';
previewButton.className = 'all-platform';
previewButton.type = 'button';
previewButton.value = 'Предпросмотр';
previewButton.name = 'previewButton';
previewButton.onclick = ClickPreviewButton;

previewButtonQr = document.createElement('input');
previewButtonQr.id = 'previewButtonQr';
previewButtonQr.className = 'all-platform';
previewButtonQr.type = 'button';
previewButtonQr.value = 'Предпросмотр';
previewButtonQr.name = 'previewButtonQr';
previewButtonQr.onclick = ClickPreviewButton;


  
document.getElementById("e-mail").style.width = "250px";
document.getElementsByClassName('mail')[0].children[1].appendChild(previewButton);

document.getElementById("qr-e-mail").style.width = "300px";
document.getElementsByClassName('qr-mail')[0].appendChild(previewButtonQr);


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

// ==UserScript==
// @autor       Anonymous
// ==/UserScript==
 
 
mathJaxOpt = document.createElement('script');
mathJaxOpt.type = 'text/x-mathjax-config';
mathJaxOpt[(mathJaxOpt.innerText==undefined?"textContent":"innerText")] = 'MathJax.Hub.Config({AsciiMath: { fixphi: true, useMathMLspacing: true, displaystyle: false, decimalsign: "."}, tex2jax: {inlineMath: [[\'$\',\'$\']]}});'; 
document.getElementsByTagName('head')[0].appendChild(mathJaxOpt);

mathJax = document.createElement('script');
mathJax.type = 'text/javascript';
mathJax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML"; // only asciiMath AM_HTMLorMML, Only LaTeX and TeX TeX-AMS-MML_HTMLorMML, for all TeX-MML-AM_HTMLorMML
document.getElementsByTagName('head')[0].appendChild(mathJax);

var script = document.createElement('script');
script.textContent = 'function RedredingMath(){setTimeout("MathJax.Hub.Typeset()",1500);};'; //function(e){if(e.data.indexOf("q_stlast_reloaded")!= -1){console.log(e.data)};} "message", function(e){console.log(e.data);}
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

document.getElementById("im_send").addEventListener("click", RedredingMath);

//script.textContent = ' window.addEventListener("message", function(e){if (e.data == "latex_update") {setTimeout("MathJax.Hub.Typeset();",500);};}, false);';
//script.textContent = 'setInterval( function() { MathJax.Hub.Typeset(); }, 1000);';
//function(e){if(e.data.indexOf("q_stlast_reloaded")!= -1){console.log(e.data)};}
	


