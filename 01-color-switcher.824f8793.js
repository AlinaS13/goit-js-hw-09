const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;function a(){const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=e}t.disabled=!0,e.addEventListener("click",(()=>{t.disabled=!1,e.disabled=!0,a(),d=setInterval((()=>{a()}),1e3)})),t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.824f8793.js.map
