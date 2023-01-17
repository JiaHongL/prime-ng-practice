"use strict";(self.webpackChunkprimeng_ng_practice=self.webpackChunkprimeng_ng_practice||[]).push([[294],{6294:(Be,d,l)=>{l.r(d),l.d(d,{GalleriaModule:()=>Ee});var m=l(9808),Z=l(6853),f=l(5473),e=l(5e3),r=l(1957),c=l(9857),p=l(9783),g=l(845);const I=["galleria"],S=function(i,n){return{width:i,display:n}};function C(i,n){if(1&i&&e._UZ(0,"img",5),2&i){const t=n.$implicit,o=e.oxw();e.Q6J("src",t.previewImageSrc,e.LSH)("ngStyle",e.WLB(2,S,o.fullscreen?"":"100%",o.fullscreen?"":"block"))}}function x(i,n){if(1&i&&(e.TgZ(0,"div",6),e._UZ(1,"img",7),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function w(i,n){if(1&i&&(e.TgZ(0,"span",12)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span",13),e._uU(4),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(2),e.AsE("",t.activeIndex+1,"/",t.images.length,""),e.xp6(2),e.Oqu(t.images[t.activeIndex].title),e.xp6(2),e.Oqu(t.images[t.activeIndex].alt)}}function A(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().onThumbnailButtonClick()}),e.qZA(),e.YNc(2,w,7,4,"span",10),e.TgZ(3,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleFullScreen()}),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.images),e.xp6(1),e.Q6J("icon",t.fullScreenIcon())}}const y=function(){return{"max-width":"640px"}};let O=(()=>{class i{constructor(t){this.photoService=t,this.fullscreen=!1,this.activeIndex=0,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>this.images=t),this.bindDocumentListeners()}onThumbnailButtonClick(){this.showThumbnails=!this.showThumbnails}toggleFullScreen(){this.fullscreen?this.closePreviewFullScreen():this.openPreviewFullScreen()}openPreviewFullScreen(){let t=this.galleria.element.nativeElement.querySelector(".p-galleria");t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}onFullScreenChange(){this.fullscreen=!this.fullscreen}closePreviewFullScreen(){const t=document;(null==t?void 0:t.exitFullscreen)?t.exitFullscreen():(null==t?void 0:t.mozCancelFullScreen)?t.mozCancelFullScreen():(null==t?void 0:t.webkitExitFullscreen)?t.webkitExitFullscreen():(null==t?void 0:t.msExitFullscreen)&&t.msExitFullscreen()}bindDocumentListeners(){this.onFullScreenListener=this.onFullScreenChange.bind(this),document.addEventListener("fullscreenchange",this.onFullScreenListener),document.addEventListener("mozfullscreenchange",this.onFullScreenListener),document.addEventListener("webkitfullscreenchange",this.onFullScreenListener),document.addEventListener("msfullscreenchange",this.onFullScreenListener)}unbindDocumentListeners(){document.removeEventListener("fullscreenchange",this.onFullScreenListener),document.removeEventListener("mozfullscreenchange",this.onFullScreenListener),document.removeEventListener("webkitfullscreenchange",this.onFullScreenListener),document.removeEventListener("msfullscreenchange",this.onFullScreenListener),this.onFullScreenListener=null}ngOnDestroy(){this.unbindDocumentListeners()}galleriaClass(){return"custom-galleria "+(this.fullscreen?"fullscreen":"")}fullScreenIcon(){return"pi "+(this.fullscreen?"pi-window-minimize":"pi-window-maximize")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-advanced"]],viewQuery:function(t,o){if(1&t&&e.Gf(I,5),2&t){let a;e.iGM(a=e.CRH())&&(o.galleria=a.first)}},decls:9,vars:12,consts:[[3,"value","activeIndex","numVisible","containerStyle","containerClass","showThumbnails","showItemNavigators","showItemNavigatorsOnHover","circular","autoPlay","transitionInterval","activeIndexChange"],["galleria",""],["pTemplate","item"],["pTemplate","thumbnail"],["pTemplate","footer"],[3,"src","ngStyle"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"],[1,"custom-galleria-footer"],["type","button","pButton","","icon","pi pi-list",3,"click"],["class","title-container",4,"ngIf"],["type","button","pButton","",1,"fullscreen-button",3,"icon","click"],[1,"title-container"],[1,"title"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Advanced"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"\u66f4\u5ba2\u88fd\u7684\u7528\u6cd5"),e.qZA(),e.TgZ(4,"p-galleria",0,1),e.NdJ("activeIndexChange",function(s){return o.activeIndex=s}),e.YNc(6,C,1,5,"ng-template",2),e.YNc(7,x,2,1,"ng-template",3),e.YNc(8,A,4,2,"ng-template",4),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",o.images)("activeIndex",o.activeIndex)("numVisible",5)("containerStyle",e.DdM(11,y))("containerClass",o.galleriaClass())("showThumbnails",o.showThumbnails)("showItemNavigators",!0)("showItemNavigatorsOnHover",!0)("circular",!0)("autoPlay",!0)("transitionInterval",3e3))},directives:[c.dz,p.jx,m.PC,g.Hq,m.O5],styles:["[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen{display:flex;flex-direction:column}[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen .p-galleria-content{flex-grow:1;justify-content:center}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-content{position:relative}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-wrapper{position:absolute;bottom:0;left:0;width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-items-container{width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer{display:flex;align-items:center;background-color:#000000e6;color:#fff}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button{background-color:transparent;color:#fff;border:0 none;border-radius:0;margin:.2rem 0}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button.fullscreen-button{margin-left:auto}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button:hover{background-color:#ffffff1a}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span{font-size:.9rem;padding-left:.829rem}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span.title{font-weight:700}"]}),i})();function q(i,n){1&i&&e._UZ(0,"img",3),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function N(i,n){if(1&i&&(e.TgZ(0,"div",4),e._UZ(1,"img",5),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const J=function(){return{"max-width":"640px"}};let U=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>this.images=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-auto-play"]],decls:5,vars:8,consts:[[3,"value","responsiveOptions","containerStyle","numVisible","circular","autoPlay","transitionInterval"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"AutoPlay \u81ea\u52d5\u64ad\u653e"),e.qZA(),e.TgZ(2,"p-galleria",0),e.YNc(3,q,1,1,"ng-template",1),e.YNc(4,N,2,1,"ng-template",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(7,J))("numVisible",5)("circular",!0)("autoPlay",!0)("transitionInterval",2e3))},directives:[c.dz,p.jx],styles:[""]}),i})();function F(i,n){1&i&&e._UZ(0,"img",4),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function V(i,n){if(1&i&&(e.TgZ(0,"div",5),e._UZ(1,"img",6),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function Q(i,n){if(1&i&&(e.TgZ(0,"h4",7),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Oqu(t.title),e.xp6(2),e.Oqu(t.alt)}}const k=function(){return{"max-width":"640px"}};let H=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>this.images=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-caption"]],decls:6,vars:5,consts:[[3,"value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],["pTemplate","caption"],[2,"width","100%","display","block",3,"src"],[1,"p-grid","p-nogutter","p-jc-center"],[2,"display","block",3,"src"],[2,"margin-bottom",".5rem","color","#ffffff"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Caption \u8aaa\u660e\u6a19\u984c"),e.qZA(),e.TgZ(2,"p-galleria",0),e.YNc(3,F,1,1,"ng-template",1),e.YNc(4,V,2,1,"ng-template",2),e.YNc(5,Q,4,2,"ng-template",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(4,k))("numVisible",5))},directives:[c.dz,p.jx],styles:[""]}),i})();function L(i,n){1&i&&e._UZ(0,"img",3),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Y(i,n){if(1&i&&(e.TgZ(0,"div",4),e._UZ(1,"img",5),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const $=function(){return{"max-width":"640px"}};let P=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>this.images=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-documentation"]],decls:14,vars:5,consts:[[3,"value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","100%",3,"src"],[1,"p-grid","p-nogutter","p-jc-center"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Galleria \u5716\u7247\u5c55\u793a"),e.qZA(),e.TgZ(2,"ul")(3,"li"),e._uU(4,"numVisible : \u6bcf\u9801\u5e7e\u7b46"),e.qZA(),e.TgZ(5,"li"),e._uU(6,"responsiveOptions : \u53ef\u6839\u64da\u65b7\u9ede\uff0c\u8a2d\u5b9a\u5c0d\u61c9\u7684 numVisible"),e.qZA(),e.TgZ(7,"li"),e._uU(8,"Indicators : \u6307\u793a\u5668\uff0c\u5141\u8a31\u5feb\u901f\u63db\u5230\u67d0\u5f35\u5716"),e.qZA(),e.TgZ(9,"li"),e._uU(10,"Templates : header\u3001indicator\u3001caption\u3001footer"),e.qZA()(),e.TgZ(11,"p-galleria",0),e.YNc(12,L,1,1,"ng-template",1),e.YNc(13,Y,2,1,"ng-template",2),e.qZA()),2&t&&(e.xp6(11),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(4,$))("numVisible",5))},directives:[c.dz,p.jx],styles:[""]}),i})();function D(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function M(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function E(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function B(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function j(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function z(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function R(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"img",13),e.NdJ("click",function(){const s=e.CHM(t).index;return e.oxw(2).imageClick(s)}),e.qZA()()}if(2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)("alt",t.alt)}}function G(i,n){if(1&i&&(e.TgZ(0,"div",10),e.YNc(1,R,2,2,"div",11),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.images)}}const X=function(){return{"max-width":"50%"}},b=function(){return{"max-width":"850px"}};let W=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.responsiveOptions2=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.activeIndex=0}ngOnInit(){this.photoService.getImages().then(t=>{this.images=t})}imageClick(t){this.activeIndex=t,this.displayCustom=!0}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-fullscreen"]],decls:20,vars:34,consts:[[3,"value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators","baseZIndex","visibleChange"],["pTemplate","item"],["pTemplate","thumbnail"],["pButton","","type","button","icon","pi pi-external-link","label","Show",3,"click"],[3,"value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators","showThumbnails","baseZIndex","visibleChange"],[3,"value","visible","activeIndex","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators","showThumbnails","baseZIndex","visibleChange","activeIndexChange"],["class","p-grid","style","max-width: 400px;",4,"ngIf"],[2,"width","100%","display","block",3,"src"],[1,"p-grid","p-nogutter","p-jc-center"],[2,"display","block",3,"src"],[1,"p-grid",2,"max-width","400px"],["class","p-col-3","key","index",4,"ngFor","ngForOf"],["key","index",1,"p-col-3"],[2,"cursor","pointer",3,"src","alt","click"]],template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"Fullscreen \u5168\u87a2\u5e55\u986f\u793a"),e.qZA(),e.TgZ(2,"h5"),e._uU(3,"Basic"),e.qZA(),e.TgZ(4,"p-galleria",0),e.NdJ("visibleChange",function(s){return o.displayBasic=s}),e.YNc(5,D,1,1,"ng-template",1),e.YNc(6,M,2,1,"ng-template",2),e.qZA(),e.TgZ(7,"button",3),e.NdJ("click",function(){return o.displayBasic=!0}),e.qZA(),e.TgZ(8,"h5"),e._uU(9,"Without Thumbnails"),e.qZA(),e.TgZ(10,"p-galleria",4),e.NdJ("visibleChange",function(s){return o.displayBasic2=s}),e.YNc(11,E,1,1,"ng-template",1),e.YNc(12,B,2,1,"ng-template",2),e.qZA(),e.TgZ(13,"button",3),e.NdJ("click",function(){return o.displayBasic2=!0}),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Custom Contents"),e.qZA(),e.TgZ(16,"p-galleria",5),e.NdJ("visibleChange",function(s){return o.displayCustom=s})("activeIndexChange",function(s){return o.activeIndex=s}),e.YNc(17,j,1,1,"ng-template",1),e.YNc(18,z,2,1,"ng-template",2),e.qZA(),e.YNc(19,G,2,1,"div",6)),2&t&&(e.xp6(4),e.Q6J("value",o.images)("visible",o.displayBasic)("responsiveOptions",o.responsiveOptions2)("containerStyle",e.DdM(31,X))("numVisible",9)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("baseZIndex",1e5),e.xp6(6),e.Q6J("value",o.images)("visible",o.displayBasic2)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(32,b))("numVisible",7)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("showThumbnails",!1)("baseZIndex",1e5),e.xp6(6),e.Q6J("value",o.images)("visible",o.displayCustom)("activeIndex",o.activeIndex)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(33,b))("numVisible",7)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("showThumbnails",!1)("baseZIndex",1e5),e.xp6(3),e.Q6J("ngIf",o.images))},directives:[c.dz,p.jx,g.Hq,m.O5,m.sg],styles:[""]}),i})();function K(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function ee(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function te(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function ie(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function ne(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function oe(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function ae(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function se(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function le(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function re(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function ce(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function pe(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function me(i,n){1&i&&e._UZ(0,"img",9),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function ue(i,n){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"img",11),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function ge(i,n){if(1&i&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.hij(" ",t+1," ")}}const _=function(){return{"max-width":"640px"}},u=function(){return{"max-width":"640px","margin-top":"2em"}};let _e=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>{this.images=t})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-indicator"]],decls:45,vars:60,consts:[[3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators"],["pTemplate","item"],["pTemplate","thumbnail"],[3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators","changeItemOnIndicatorHover"],[3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators","changeItemOnIndicatorHover","showIndicatorsOnItem"],["indicatorsPosition","top",3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators","changeItemOnIndicatorHover","showIndicatorsOnItem"],["indicatorsPosition","left",3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators","changeItemOnIndicatorHover","showIndicatorsOnItem"],["indicatorsPosition","right",3,"value","responsiveOptions","containerStyle","numVisible","showThumbnails","showIndicators","changeItemOnIndicatorHover","showIndicatorsOnItem"],["pTemplate","indicator"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"],[2,"color","#e9ecef","cursor","pointer"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"indicator \u6307\u793a\u5668"),e.qZA(),e.TgZ(2,"ul")(3,"li"),e._uU(4," changeItemOnIndicatorHover : \u8a2d\u5b9a\u70ba hover \u5207\u63db\u5716\u7247 "),e.qZA(),e.TgZ(5,"li"),e._uU(6," indicatorsPosition : \u8a2d\u5b9a\u6307\u793a\u5668\u7684\u4f4d\u7f6e "),e.qZA(),e.TgZ(7,"li"),e._uU(8," template : header\u3001indicator\u3001caption\u3001footer "),e.qZA()(),e.TgZ(9,"h5"),e._uU(10,"Indicators with Click Event"),e.qZA(),e.TgZ(11,"p-galleria",0),e.YNc(12,K,1,1,"ng-template",1),e.YNc(13,ee,2,1,"ng-template",2),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Indicators with Hover Event"),e.qZA(),e.TgZ(16,"p-galleria",3),e.YNc(17,te,1,1,"ng-template",1),e.YNc(18,ie,2,1,"ng-template",2),e.qZA(),e.TgZ(19,"h5"),e._uU(20,"Inside Content"),e.qZA(),e.TgZ(21,"p-galleria",4),e.YNc(22,ne,1,1,"ng-template",1),e.YNc(23,oe,2,1,"ng-template",2),e.qZA(),e.TgZ(24,"h5"),e._uU(25,"Positioned at Top"),e.qZA(),e.TgZ(26,"p-galleria",5),e.YNc(27,ae,1,1,"ng-template",1),e.YNc(28,se,2,1,"ng-template",2),e.qZA(),e.TgZ(29,"h5"),e._uU(30,"Positioned at Left"),e.qZA(),e.TgZ(31,"p-galleria",6),e.YNc(32,le,1,1,"ng-template",1),e.YNc(33,re,2,1,"ng-template",2),e.qZA(),e.TgZ(34,"h5"),e._uU(35,"Positioned at Right"),e.qZA(),e.TgZ(36,"p-galleria",7),e.YNc(37,ce,1,1,"ng-template",1),e.YNc(38,pe,2,1,"ng-template",2),e.qZA(),e.TgZ(39,"h5"),e._uU(40,"Template"),e.qZA(),e.TgZ(41,"p-galleria",6),e.YNc(42,me,1,1,"ng-template",1),e.YNc(43,ue,2,1,"ng-template",2),e.YNc(44,ge,2,1,"ng-template",8),e.qZA()),2&t&&(e.xp6(11),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(53,_))("numVisible",5)("showThumbnails",!1)("showIndicators",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(54,_))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(55,_))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0)("showIndicatorsOnItem",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(56,u))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0)("showIndicatorsOnItem",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(57,u))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0)("showIndicatorsOnItem",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(58,u))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0)("showIndicatorsOnItem",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(59,u))("numVisible",5)("showThumbnails",!1)("showIndicators",!0)("changeItemOnIndicatorHover",!0)("showIndicatorsOnItem",!0))},directives:[c.dz,p.jx],styles:[""]}),i})();function ve(i,n){1&i&&e._UZ(0,"img",6),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function he(i,n){if(1&i&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function de(i,n){1&i&&e._UZ(0,"img",6),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function fe(i,n){if(1&i&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function be(i,n){1&i&&e._UZ(0,"img",6),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Te(i,n){if(1&i&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function Ze(i,n){1&i&&e._UZ(0,"img",6),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Ie(i,n){if(1&i&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const v=function(){return{"max-width":"640px"}},Se=function(){return{"max-width":"640px","margin-top":"2em"}};let Ce=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>{this.images=t})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-navigator"]],decls:22,vars:34,consts:[[3,"value","responsiveOptions","containerStyle","numVisible","circular","showItemNavigators"],["pTemplate","item"],["pTemplate","thumbnail"],[3,"value","responsiveOptions","containerStyle","numVisible","circular","showItemNavigators","showThumbnails"],[3,"value","responsiveOptions","containerStyle","numVisible","circular","showItemNavigators","showItemNavigatorsOnHover"],[3,"value","responsiveOptions","containerStyle","numVisible","circular","showItemNavigators","showThumbnails","showIndicators","showItemNavigatorsOnHover","showIndicatorsOnItem"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Navigator \u5c0e\u822a"),e.qZA(),e.TgZ(2,"h5"),e._uU(3,"Item Navigators and Thumbnails"),e.qZA(),e.TgZ(4,"p-galleria",0),e.YNc(5,ve,1,1,"ng-template",1),e.YNc(6,he,2,1,"ng-template",2),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Item Navigators without Thumbnails"),e.qZA(),e.TgZ(9,"p-galleria",3),e.YNc(10,de,1,1,"ng-template",1),e.YNc(11,fe,2,1,"ng-template",2),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Item Navigators on Hover"),e.qZA(),e.TgZ(14,"p-galleria",4),e.YNc(15,be,1,1,"ng-template",1),e.YNc(16,Te,2,1,"ng-template",2),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"Item Navigators and Indicators"),e.qZA(),e.TgZ(19,"p-galleria",5),e.YNc(20,Ze,1,1,"ng-template",1),e.YNc(21,Ie,2,1,"ng-template",2),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(30,v))("numVisible",5)("circular",!0)("showItemNavigators",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(31,v))("numVisible",5)("circular",!0)("showItemNavigators",!0)("showThumbnails",!1),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(32,v))("numVisible",5)("circular",!0)("showItemNavigators",!0)("showItemNavigatorsOnHover",!0),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(33,Se))("numVisible",5)("circular",!0)("showItemNavigators",!0)("showThumbnails",!1)("showIndicators",!0)("showItemNavigatorsOnHover",!0)("showIndicatorsOnItem",!0))},directives:[c.dz,p.jx],styles:[""]}),i})();function xe(i,n){1&i&&e._UZ(0,"img",6),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function we(i,n){if(1&i&&(e.TgZ(0,"div",7),e._UZ(1,"img",8),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const Ae=function(){return{"max-width":"520px"}};let ye=(()=>{class i{constructor(t){this.photoService=t,this._activeIndex=2,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}get activeIndex(){return this._activeIndex}set activeIndex(t){this.images&&0<=t&&t<=this.images.length-1&&(this._activeIndex=t)}ngOnInit(){this.photoService.getImages().then(t=>this.images=t)}next(){this.activeIndex++}prev(){this.activeIndex--}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-programmatic"]],decls:10,vars:6,consts:[[1,"p-py-2"],["type","button","icon","pi pi-plus","styleClass","p-button-secondary p-mr-2",3,"click"],["type","button","icon","pi pi-minus","styleClass","p-button-secondary",3,"click"],[3,"value","responsiveOptions","containerStyle","numVisible","activeIndex","activeIndexChange"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Programmatic \u7a0b\u5f0f\u5316"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"\u4f7f\u7528 activeIndex \u63a7\u5236\u4e0a\u4e0b\u5f35\u5716\u7247\u986f\u793a"),e.qZA(),e.TgZ(4,"div",0)(5,"p-button",1),e.NdJ("click",function(){return o.next()}),e.qZA(),e.TgZ(6,"p-button",2),e.NdJ("click",function(){return o.prev()}),e.qZA()(),e.TgZ(7,"p-galleria",3),e.NdJ("activeIndexChange",function(s){return o.activeIndex=s}),e.YNc(8,xe,1,1,"ng-template",4),e.YNc(9,we,2,1,"ng-template",5),e.qZA()),2&t&&(e.xp6(7),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(5,Ae))("numVisible",5)("activeIndex",o.activeIndex))},directives:[g.zx,c.dz,p.jx],styles:[""]}),i})();function Oe(i,n){1&i&&e._UZ(0,"img",3),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function qe(i,n){if(1&i&&(e.TgZ(0,"div",4),e._UZ(1,"img",5),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const Ne=function(){return{"max-width":"800px"}};let Je=(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>{this.images=t})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-responsive"]],decls:5,vars:5,consts:[[3,"value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Responsive"),e.qZA(),e.TgZ(2,"p-galleria",0),e.YNc(3,Oe,1,1,"ng-template",1),e.YNc(4,qe,2,1,"ng-template",2),e.qZA()),2&t&&(e.xp6(2),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(4,Ne))("numVisible",7))},directives:[c.dz,p.jx],styles:[""]}),i})();function Ue(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Fe(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function Ve(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Qe(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function ke(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function He(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function Le(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Ye(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}function $e(i,n){1&i&&e._UZ(0,"img",7),2&i&&e.Q6J("src",n.$implicit.previewImageSrc,e.LSH)}function Pe(i,n){if(1&i&&(e.TgZ(0,"div",8),e._UZ(1,"img",9),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.Q6J("src",t.thumbnailImageSrc,e.LSH)}}const T=function(){return{"max-width":"660px"}},h=function(){return{"max-width":"660px","margin-top":"2em"}},De=[{path:"documentation",component:P},{path:"programmatic",component:ye},{path:"indicator",component:_e},{path:"thumbnail",component:(()=>{class i{constructor(t){this.photoService=t,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}ngOnInit(){this.photoService.getImages().then(t=>this.images=t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-thumbnail"]],decls:27,vars:25,consts:[[3,"value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],["thumbnailsPosition","left",3,"value","responsiveOptions","containerStyle","numVisible"],["thumbnailsPosition","right",3,"value","responsiveOptions","containerStyle","numVisible"],["thumbnailsPosition","top",3,"value","responsiveOptions","containerStyle","numVisible"],["thumbnailsPosition","bottom",3,"value","responsiveOptions","containerStyle","numVisible"],[2,"width","100%","display","block",3,"src"],[1,"p-grid","p-nogutter","p-jc-center"],[3,"src"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Thumbnail \u7e2e\u5716"),e.qZA(),e.TgZ(2,"h5"),e._uU(3,"Positioned at Bottom"),e.qZA(),e.TgZ(4,"p-galleria",0),e.YNc(5,Ue,1,1,"ng-template",1),e.YNc(6,Fe,2,1,"ng-template",2),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Positioned at Left"),e.qZA(),e.TgZ(9,"p-galleria",3),e.YNc(10,Ve,1,1,"ng-template",1),e.YNc(11,Qe,2,1,"ng-template",2),e.qZA(),e.TgZ(12,"h5"),e._uU(13,"Positioned at Right"),e.qZA(),e.TgZ(14,"p-galleria",4),e.YNc(15,ke,1,1,"ng-template",1),e.YNc(16,He,2,1,"ng-template",2),e.qZA(),e.TgZ(17,"h5"),e._uU(18,"Positioned at Top"),e.qZA(),e.TgZ(19,"p-galleria",5),e.YNc(20,Le,1,1,"ng-template",1),e.YNc(21,Ye,2,1,"ng-template",2),e.qZA(),e.TgZ(22,"h5"),e._uU(23,"Positioned at Bottom"),e.qZA(),e.TgZ(24,"p-galleria",6),e.YNc(25,$e,1,1,"ng-template",1),e.YNc(26,Pe,2,1,"ng-template",2),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(20,T))("numVisible",5),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(21,T))("numVisible",4),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(22,h))("numVisible",4),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(23,h))("numVisible",5),e.xp6(5),e.Q6J("value",o.images)("responsiveOptions",o.responsiveOptions)("containerStyle",e.DdM(24,h))("numVisible",5))},directives:[c.dz,p.jx],styles:[""]}),i})()},{path:"navigator",component:Ce},{path:"responsive",component:Je},{path:"fullscreen",component:W},{path:"autoPlay",component:U},{path:"caption",component:H},{path:"advanced",component:O}];let Me=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[f.Bz.forChild(De)],f.Bz]}),i})(),Ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[m.ez,Me,Z.g]]}),i})()}}]);