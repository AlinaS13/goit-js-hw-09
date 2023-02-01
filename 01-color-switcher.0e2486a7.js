const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(()=>{t.disabled=!0,timerId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=t}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.0e2486a7.js.map
