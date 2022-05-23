/*! For license information please see 9129.864d8f58.js.LICENSE.txt */
"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[9129],{88078:function(t,e,n){n.d(e,{Z:function(){return I}});var i=n(63366),r=n(87462),o=n(67294),a=n(86010),s=n(70917),l=n(94780);function u(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(t){return parseFloat(t)}var h=n(41796),p=n(90948),d=n(71657),f=n(34867);function g(t){return(0,f.Z)("MuiSkeleton",t)}(0,n(1588).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var y=n(85893);const v=["animation","className","component","height","style","variant","width"];let m,x,_,b,w=t=>t;const S=(0,s.F4)(m||(m=w`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),M=(0,s.F4)(x||(x=w`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const n=u(t.shape.borderRadius)||"px",i=c(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${n}/${Math.round(i/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(_||(_=w`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),S)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(b||(b=w`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(90deg, transparent, ${0}, transparent);
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }