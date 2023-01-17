"use strict";(self.webpackChunkprimeng_ng_practice=self.webpackChunkprimeng_ng_practice||[]).push([[555],{2555:(w,d,u)=>{u.r(d),u.d(d,{TreeModule:()=>I});var f=u(9808),g=u(5473),r=u(9783),e=u(5e3),p=u(8495),s=u(2629),Z=u(330),c=u(7773);function C(n,o){if(1&n&&(e.TgZ(0,"span",null,7),e._uU(2),e.qZA(),e._UZ(3,"p-contextMenu",8)),2&n){const t=o.$implicit,l=e.MAs(1),i=e.oxw();e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("target",l)("model",i.items)}}function v(n,o){if(1&n&&(e.TgZ(0,"span",null,9),e._uU(2),e.qZA(),e._UZ(3,"p-contextMenu",8)),2&n){const t=o.$implicit,l=e.MAs(1),i=e.oxw();e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("target",l)("model",i.items2)}}let F=(()=>{class n{constructor(t,l){this.nodeService=t,this.messageService=l,this.files2=[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Angular",data:"https://angular.io",type:"sub"},{key:"0-1",label:"Getting Started",data:"https://angular.io/guide/setup-local",type:"sub"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://angular.io/guide/component-interaction",type:"sub"},{key:"1-1",label:"User Input",data:"https://angular.io/guide/user-input",type:"sub"}]}]}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files=t}),this.items=[{label:"View",icon:"pi pi-search",command:t=>this.viewFile(this.selectedFile)},{label:"Unselect",icon:"pi pi-times",command:t=>this.unselectFile()}],this.items2=[{label:"Delete",icon:"pi pi-delete"}]}viewFile(t){this.messageService.add({severity:"info",summary:"Node Details",detail:null==t?void 0:t.label})}unselectFile(){this.selectedFile=null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s),e.Y36(r.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-context-menu"]],features:[e._Bn([r.ez])],decls:15,vars:6,consts:[[1,"p-mb-1"],["selectionMode","single",3,"value","selection","contextMenu","selectionChange"],[3,"model"],["cm",""],["selectionMode","single",3,"value","selection","selectionChange"],["pTemplate","default"],["pTemplate","sub"],["root",""],[3,"target","model"],["sub",""]],template:function(t,l){if(1&t&&(e.TgZ(0,"h1"),e._uU(1," ContextMenu \u53f3\u9375\u9078\u55ae "),e.qZA(),e.TgZ(2,"p"),e._uU(3,' \u53ef\u4ee5\u81ea\u5df1\u76f4\u63a5\u4f7f\u7528 [contextMenu]="contextMenuRef"'),e.qZA(),e.TgZ(4,"p"),e._uU(5," \u4e5f\u53ef\u4ee5\u4f7f\u7528 Templating \u642d\u914d contextMenu target \u81ea\u5df1\u5ba2\u88fd"),e.qZA(),e.TgZ(6,"div",0)(7,"p-tree",1),e.NdJ("selectionChange",function(a){return l.selectedFile=a}),e.qZA(),e._UZ(8,"p-contextMenu",2,3)(10,"p-toast"),e.qZA(),e.TgZ(11,"div")(12,"p-tree",4),e.NdJ("selectionChange",function(a){return l.selectedFile=a}),e.YNc(13,C,4,3,"ng-template",5),e.YNc(14,v,4,3,"ng-template",6),e.qZA()()),2&t){const i=e.MAs(9);e.xp6(7),e.Q6J("value",l.files)("selection",l.selectedFile)("contextMenu",i),e.xp6(1),e.Q6J("model",l.items),e.xp6(4),e.Q6J("value",l.files2)("selection",l.selectedFile)}},directives:[s.mp,Z.xV,c.FN,r.jx],styles:[""]}),n})();var m=u(845);let T=(()=>{class n{constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files1=t),this.nodeService.getFiles().then(t=>this.files2=t)}expandAll(){this.files2.forEach(t=>{this.expandRecursive(t,!0)})}collapseAll(){this.files2.forEach(t=>{this.expandRecursive(t,!1)})}expandRecursive(t,l){t.expanded=l,t.children&&t.children.forEach(i=>{this.expandRecursive(i,l)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:11,vars:2,consts:[[3,"value"],[2,"margin-bottom","1rem"],["pButton","","type","button","label","Expand all",2,"margin-right",".5rem",3,"click"],["pButton","","type","button","label","Collapse all",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1," Tree \u6a39\u72c0"),e.qZA(),e.TgZ(2,"h5"),e._uU(3,"Basic"),e.qZA(),e._UZ(4,"p-tree",0),e.TgZ(5,"h5"),e._uU(6,"Programmatic"),e.qZA(),e.TgZ(7,"div",1)(8,"button",2),e.NdJ("click",function(){return l.expandAll()}),e.qZA(),e.TgZ(9,"button",3),e.NdJ("click",function(){return l.collapseAll()}),e.qZA()(),e._UZ(10,"p-tree",0)),2&t&&(e.xp6(4),e.Q6J("value",l.files1),e.xp6(6),e.Q6J("value",l.files2))},directives:[s.mp,m.Hq],styles:[""]}),n})(),A=(()=>{class n{constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files1=t),this.nodeService.getFiles().then(t=>this.files2=t),this.files3=[{label:"Backup",data:"Backup Folder",expandedIcon:"pi pi-folder-open",collapsedIcon:"pi pi-folder"}],this.files4=[{label:"Storage",data:"Storage Folder",expandedIcon:"pi pi-folder-open",collapsedIcon:"pi pi-folder"}]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-drag-drop"]],features:[e._Bn([r.Y,r.ez])],decls:34,vars:12,consts:[["draggableScope","self","droppableScope","self",3,"value","draggableNodes","droppableNodes"],[1,"p-grid","p-fluid"],[1,"p-col-12","p-md-4"],["droppableScope","files","draggableScope","server2",3,"value","draggableNodes","droppableNodes"],["droppableScope","server1","draggableScope","files",3,"value","draggableNodes","droppableNodes"],["droppableScope","server2","draggableScope","server1",3,"value","draggableNodes","droppableNodes"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Tree DragDrop"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"droppableScope\u3001droppableNodes"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"draggableScope\u3001draggableNodes"),e.qZA(),e.TgZ(6,"h5"),e._uU(7,"Single Tree"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"Node reordering within a tree."),e.qZA(),e._UZ(10,"p-tree",0),e.TgZ(11,"h5"),e._uU(12,"Multiple Trees"),e.qZA(),e.TgZ(13,"p"),e._uU(14," Node reordering between multiple tree based on scope constraints.\n"),e.qZA(),e.TgZ(15,"div",1)(16,"div",2)(17,"h4"),e._uU(18,"Files"),e.qZA(),e.TgZ(19,"p"),e._uU(20,"Can transfer to Server 2."),e.qZA(),e._UZ(21,"p-tree",3),e.qZA(),e.TgZ(22,"div",2)(23,"h4"),e._uU(24,"Server 1"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"Can transfer to Files."),e.qZA(),e._UZ(27,"p-tree",4),e.qZA(),e.TgZ(28,"div",2)(29,"h4"),e._uU(30,"Server 2"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Can transfer to Server 1."),e.qZA(),e._UZ(33,"p-tree",5),e.qZA()()),2&t&&(e.xp6(10),e.Q6J("value",l.files1)("draggableNodes",!0)("droppableNodes",!0),e.xp6(11),e.Q6J("value",l.files2)("draggableNodes",!0)("droppableNodes",!0),e.xp6(6),e.Q6J("value",l.files3)("draggableNodes",!0)("droppableNodes",!0),e.xp6(6),e.Q6J("value",l.files4)("draggableNodes",!0)("droppableNodes",!0))},directives:[s.mp],styles:["","h4[_ngcontent-%COMP%]{text-align:center;margin:0 0 8px}"]}),n})(),b=(()=>{class n{constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files1=t),this.nodeService.getFiles().then(t=>this.files2=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-filter"]],decls:12,vars:4,consts:[[3,"value","filter"],["filterMode","strict",3,"value","filter"]],template:function(t,l){1&t&&(e.TgZ(0,"H1"),e._uU(1," Filter \u904e\u6ffe"),e.qZA(),e.TgZ(2,"p"),e._uU(3," Lenient Filter : \u627e\u5230\u5f8c\u5c31\u6703\u505c\u4e0b\u4f86\uff0c\u4e0d\u6703\u518d\u7e7c\u7e8c\u5f80\u5b50\u7bc0\u9ede\u627e\u3002\n"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Strict Filter Mode : \u5c31\u7b97\u7236\u7bc0\u9ede\u627e\u5230\uff0c\u9084\u662f\u6703\u4e00\u76f4\u5f80\u4e0b\u627e\uff0c\u76f4\u5230\u627e\u4e0d\u5230\u3002\n"),e.qZA(),e.TgZ(6,"h3"),e._uU(7,"Lenient Filter Mode"),e.qZA(),e._UZ(8,"p-tree",0),e.TgZ(9,"h3"),e._uU(10,"Strict Filter Mode"),e.qZA(),e._UZ(11,"p-tree",1)),2&t&&(e.xp6(8),e.Q6J("value",l.files1)("filter",!0),e.xp6(3),e.Q6J("value",l.files2)("filter",!0))},directives:[s.mp],styles:[""]}),n})(),S=(()=>{class n{constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>{this.files=[{label:"Root",children:t}]})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-horizontal"]],decls:5,vars:2,consts:[["layout","horizontal","selectionMode","single",3,"value","selection","selectionChange"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1," Tree Horizontal "),e.qZA(),e.TgZ(2,"p"),e._uU(3,' \u8a2d\u7f6e\u6c34\u5e73\u6392\u7248 layout="horizontal"'),e.qZA(),e.TgZ(4,"p-tree",0),e.NdJ("selectionChange",function(a){return l.selectedFile=a}),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",l.files)("selection",l.selectedFile))},directives:[s.mp],styles:[""]}),n})(),y=(()=>{class n{constructor(t,l){this.nodeService=t,this.messageService=l}ngOnInit(){this.loading=!0,setTimeout(()=>{this.nodeService.getLazyFiles().then(t=>this.files=t),this.loading=!1},1e3)}nodeExpand(t){t.node&&this.nodeService.getLazyFiles().then(l=>{t.node.children=l,this.messageService.add({severity:"info",summary:"Children Loaded",detail:t.node.label})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s),e.Y36(r.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-lazy"]],features:[e._Bn([r.ez])],decls:6,vars:2,consts:[[3,"value","loading","onNodeExpand"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Lazy \u5ef6\u9072"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"loading=true\uff0c\u5c07\u6703\u986f\u793a\u4e00\u500b\u906e\u7f69\uff0c\u7136\u5f8c\u7b49\u56de\u8986\u8cc7\u6599\u5f8c\u518d\u986f\u793a\u3002"),e.qZA(),e.TgZ(4,"p-tree",0),e.NdJ("onNodeExpand",function(a){return l.nodeExpand(a)}),e.qZA(),e._UZ(5,"p-toast")),2&t&&(e.xp6(4),e.Q6J("value",l.files)("loading",l.loading))},directives:[s.mp,c.FN],styles:[""]}),n})();var U=u(6050);function N(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().dialogVisible=!1}),e.qZA()}}const E=function(){return{width:"50vw"}},x=function(){return{height:"300px"}};let q=(()=>{class n{constructor(t){this.nodeService=t}ngOnInit(){this.nodeService.getFiles().then(t=>this.files1=t),this.files2=Array.from({length:100}).map((t,l)=>this.createNode(l,2)),this.files3=Array.from({length:50}).map((t,l)=>this.createNode(l,1e3))}createNode(t,l){return{label:"Node "+t,data:"Node "+t,expandedIcon:"pi pi-folder-open",collapsedIcon:"pi pi-folder",children:Array.from({length:l}).map((a,_)=>({label:"Node "+t+"."+_,data:"Node "+t+"."+_,icon:"pi pi-file-o"}))}}showDialog(){this.dialogVisible=!0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-scroll"]],decls:22,vars:14,consts:[["scrollHeight","200px",3,"value"],["type","button","pButton","","icon","pi pi-external-link","label","View",3,"click"],["header","Flexible ScrollHeight","styleClass","p-fluid",3,"visible","baseZIndex","maximizable","modal","resizable","contentStyle","visibleChange"],["scrollHeight","flex",3,"value"],["pTemplate","footer"],["scrollHeight","200px",3,"value","virtualScroll"],["type","button","pButton","","icon","pi pi-check","label","Ok",1,"p-button-text",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Tree Scroll"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Regular Scroll : \u4e00\u822c\u4f7f\u7528\uff0c\u53ef\u4ee5\u81ea\u5df1\u5b9a\u7fa9\u4e00\u500b\u6efe\u8ef8\u9ad8\u5ea6\u3002"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"Flexible Viewport : \u96a8\u8457\u53ef\u8996\u7684\u8996\u7a97\u5927\u5c0f\u81ea\u52d5\u8abf\u6574"),e.qZA(),e.TgZ(6,"p"),e._uU(7,"Virtual Scroll : \u7528\u65bc\u5927\u91cf\u7684\u8cc7\u6599\u5ef6\u9072\u8f09\u5165\u4f7f\u7528\uff0c\u53ef\u589e\u52a0\u6548\u80fd"),e.qZA(),e.TgZ(8,"h5"),e._uU(9,"Regular Scroll"),e.qZA(),e._UZ(10,"p-tree",0),e.TgZ(11,"h5"),e._uU(12,"Flexible Viewport"),e.qZA(),e.TgZ(13,"p"),e._uU(14," Flex scroll feature makes the scrollable viewport section dynamic so that it can grow or shrink relative to the parent size of the tree. Click the button below to display a resizable and maximizable Dialog where data viewport adjusts itself according to the size changes.\n"),e.qZA(),e.TgZ(15,"button",1),e.NdJ("click",function(){return l.showDialog()}),e.qZA(),e.TgZ(16,"p-dialog",2),e.NdJ("visibleChange",function(a){return l.dialogVisible=a}),e._UZ(17,"p-tree",3),e.YNc(18,N,1,0,"ng-template",4),e.qZA(),e.TgZ(19,"h5"),e._uU(20,"Virtual Scroll"),e.qZA(),e._UZ(21,"p-tree",5)),2&t&&(e.xp6(10),e.Q6J("value",l.files1),e.xp6(6),e.Akn(e.DdM(12,E)),e.Q6J("visible",l.dialogVisible)("baseZIndex",1e4)("maximizable",!0)("modal",!0)("resizable",!0)("contentStyle",e.DdM(13,x)),e.xp6(1),e.Q6J("value",l.files2),e.xp6(4),e.Q6J("value",l.files3)("virtualScroll",!0))},directives:[s.mp,m.Hq,U.V,r.jx],styles:[""]}),n})(),M=(()=>{class n{constructor(t,l){this.nodeService=t,this.messageService=l}ngOnInit(){this.nodeService.getFiles().then(t=>this.files1=t),this.nodeService.getFiles().then(t=>this.files2=t),this.nodeService.getFiles().then(t=>this.files3=t)}nodeSelect(t){this.messageService.add({severity:"info",summary:"Node Selected",detail:t.node.label})}nodeUnselect(t){this.messageService.add({severity:"info",summary:"Node Unselected",detail:t.node.label})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.s),e.Y36(r.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-selection"]],features:[e._Bn([r.ez])],decls:14,vars:6,consts:[["selectionMode","single",3,"value","selection","selectionChange","onNodeSelect","onNodeUnselect"],["selectionMode","multiple",3,"value","selection","selectionChange","onNodeSelect","onNodeUnselect"],["selectionMode","checkbox",3,"value","selection","selectionChange"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Selection \u9078\u53d6"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"selectionMode \u5206 single\u3001multiple\u3001checkbox \u4e09\u7a2e\u6a21\u5f0f"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"Single Selection"),e.qZA(),e.TgZ(6,"p-tree",0),e.NdJ("selectionChange",function(a){return l.selectedFile=a})("onNodeSelect",function(a){return l.nodeSelect(a)})("onNodeUnselect",function(a){return l.nodeUnselect(a)}),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Multiple Selection with Metakey"),e.qZA(),e.TgZ(9,"p-tree",1),e.NdJ("selectionChange",function(a){return l.selectedFiles1=a})("onNodeSelect",function(a){return l.nodeSelect(a)})("onNodeUnselect",function(a){return l.nodeUnselect(a)}),e.qZA(),e.TgZ(10,"h5"),e._uU(11,"Multiple Selection with Checkbox"),e.qZA(),e.TgZ(12,"p-tree",2),e.NdJ("selectionChange",function(a){return l.selectedFiles2=a}),e.qZA(),e._UZ(13,"p-toast")),2&t&&(e.xp6(6),e.Q6J("value",l.files1)("selection",l.selectedFile),e.xp6(3),e.Q6J("value",l.files2)("selection",l.selectedFiles1),e.xp6(3),e.Q6J("value",l.files3)("selection",l.selectedFiles2))},directives:[s.mp,c.FN],styles:[""]}),n})();function D(n,o){if(1&n&&(e.TgZ(0,"a",4),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("href",t.data,e.LSH),e.xp6(1),e.Oqu(t.label)}}function J(n,o){if(1&n&&(e.TgZ(0,"a",4),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("href",t.data,e.LSH),e.xp6(1),e.hij("",t.label,"...! ")}}function z(n,o){if(1&n&&(e.TgZ(0,"b"),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t.label)}}const k=[{path:"documentation",component:T},{path:"templating",component:(()=>{class n{constructor(){}ngOnInit(){this.nodes=[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Angular",data:"https://angular.io",type:"url"},{key:"0-1",label:"Getting Started",data:"https://angular.io/guide/setup-local",type:"url"},{key:"0-2",label:"Learn and Explore",data:"https://angular.io/guide/architecture",type:"url"},{key:"0-3",label:"Take a Look",data:"https://angular.io/start",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://angular.io/guide/component-interaction",type:"url2"},{key:"1-1",label:"User Input",data:"https://angular.io/guide/user-input",type:"url2"},{key:"1-2",label:"Hooks",data:"https://angular.io/guide/lifecycle-hooks",type:"url2"},{key:"1-3",label:"Attribute Directives",data:"https://angular.io/guide/attribute-directives",type:"url2"}]}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-templating"]],decls:8,vars:1,consts:[[3,"value"],["pTemplate","url"],["pTemplate","url2"],["pTemplate","default"],[3,"href"]],template:function(t,l){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Tree Templating"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"\u53ef\u5b9a\u7fa9\u8cc7\u6599\u7684 type\uff0cpTemplate \u518d\u4f7f\u7528\u5c0d\u61c9\u7684 type \u505a\u6a23\u677f\u8abf\u6574(default\uff1a\u672a\u6307\u5b9a type )"),e.qZA(),e.TgZ(4,"p-tree",0),e.YNc(5,D,2,2,"ng-template",1),e.YNc(6,J,2,2,"ng-template",2),e.YNc(7,z,2,1,"ng-template",3),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",l.nodes))},directives:[s.mp,r.jx],styles:["button[_ngcontent-%COMP%]{margin-right:.5rem}[_nghost-%COMP%]     .p-tree a{color:#2196f3}"]}),n})()},{path:"selection",component:M},{path:"filter",component:b},{path:"lazy",component:y},{path:"scroll",component:q},{path:"context-menu",component:F},{path:"drag-drop",component:A},{path:"horizontal",component:S}];let B=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(k)],g.Bz]}),n})();var Q=u(6853),h=u(2382);let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,B,h.u5,h.UX,Q.g]]}),n})()}}]);