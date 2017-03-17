// ==UserScript==
// @autor       asm.jaiem
// ==/UserScript==

if (location.href.indexOf('vk.com/im') > -1) {
  mathJaxOpt = document.createElement('script');
  mathJaxOpt.type = 'text/x-mathjax-config';
  mathJaxOpt[(mathJaxOpt.innerText === undefined ? "textContent" : "innerText")] = 'MathJax.Hub.Config({AsciiMath: { fixphi: true, useMathMLspacing: true, displaystyle: false, decimalsign: "."}, tex2jax: {inlineMath: [[\'$\',\'$\']]}});';

  document.getElementsByTagName('head')[0].appendChild(mathJaxOpt);
  mathJax = document.createElement('script');
  mathJax.type = 'text/javascript';

  // only asciiMath AM_HTMLorMML, Only LaTeX and TeX TeX-AMS-MML_HTMLorMML, for all TeX-MML-AM_HTMLorMML
  mathJax.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_HTMLorMML";
  document.getElementsByTagName('head')[0].appendChild(mathJax);

  var script = document.createElement('script');
  //script.textContent = ' window.addEventListener("message", function(e){if (e.data == "latex_update") {setTimeout("MathJax.Hub.Typeset();",500);};}, false);';
  //script.textContent = 'setInterval( function() { MathJax.Hub.Typeset(); }, 1000);';
  //function(e){if(e.data.indexOf("q_stlast_reloaded")!= -1){console.log(e.data)};}

  //document.getElementById("im_send").addEventListener("click", function PrintMath(){ MathJax.Hub.Typeset();});
  //script.textContent = 'window.addEventListener("message", function(e){console.log(e);}, false);'; //function(e){if(e.data.indexOf("q_stlast_reloaded")!= -1){console.log(e.data)};} "message", function(e){console.log(e.data);}
  script.textContent = 'document.getElementById("im_send").addEventListener("click", function (){ setTimeout("MathJax.Hub.Typeset();",500);});';
  script.type = "text/javascript";

  document.body.appendChild(script);
} else {
  console.log("this path not available for rendering");
};
