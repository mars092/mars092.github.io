"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[991],{3991:(C,u,n)=>{n.r(u),n.d(u,{ListPage:()=>d});var m=n(177),c=n(4341),p=n(70),o=n(2606),t=n(3953),g=n(5780);const E=()=>["/item"],P=(i,l)=>({artist:i,title:l});function M(i,l){if(1&i&&(t.j41(0,"ion-item",6)(1,"ion-label"),t.EFF(2),t.k0s()()),2&i){const r=l.$implicit;t.Y8G("button",!0)("routerLink",t.lJ4(5,E))("queryParams",t.l_i(6,P,r.artist,r.title)),t.R7$(2),t.Lme("",r.artist," \u268a ",r.title,"")}}let d=(()=>{var i;class l{constructor(s){this.listMusicService=s,this.sortOption="artistAsc"}getSortedList(){const s=[...this.listMusicService.listMusic];switch(this.sortOption){case"artistAsc":default:return s.sort((e,a)=>e.artist.localeCompare(a.artist));case"artistDesc":return s.sort((e,a)=>a.artist.localeCompare(e.artist));case"titleAsc":return s.sort((e,a)=>e.title.localeCompare(a.title));case"titleDesc":return s.sort((e,a)=>a.title.localeCompare(e.title))}}}return(i=l).\u0275fac=function(s){return new(s||i)(t.rXU(g.z))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-list"]],standalone:!0,features:[t.aNF],decls:21,vars:1,consts:[["lines","none"],[3,"ngModelChange","ngModel"],["value","artistAsc"],["value","artistDesc"],["value","titleAsc"],["value","titleDesc"],[3,"button","routerLink","queryParams"]],template:function(s,e){1&s&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t.EFF(3,"Track list"),t.k0s()(),t.j41(4,"ion-toolbar")(5,"ion-item",0)(6,"ion-label"),t.EFF(7,"Sort by:"),t.k0s(),t.j41(8,"ion-select",1),t.mxI("ngModelChange",function(_){return t.DH7(e.sortOption,_)||(e.sortOption=_),_}),t.j41(9,"ion-select-option",2),t.EFF(10,"Artist (A-Z)"),t.k0s(),t.j41(11,"ion-select-option",3),t.EFF(12,"Artist (Z-A)"),t.k0s(),t.j41(13,"ion-select-option",4),t.EFF(14,"Title (A-Z)"),t.k0s(),t.j41(15,"ion-select-option",5),t.EFF(16,"Title (Z-A)"),t.k0s()()()()(),t.j41(17,"ion-content")(18,"ion-list"),t.Z7z(19,M,3,9,"ion-item",6,t.fX1),t.k0s()()),2&s&&(t.R7$(8),t.R50("ngModel",e.sortOption),t.R7$(11),t.Dyx(e.getSortedList()))},dependencies:[o.ai,o.BC,o.W9,o.eU,o.he,o.nf,o.uz,o.Nm,o.Ip,m.MD,c.YN,c.BC,c.vS,p.iI,p.Wk],styles:["ion-header[_ngcontent-%COMP%]{position:sticky;top:0;z-index:999}ion-item[_ngcontent-%COMP%]{--background: transparent}"]}),l})()}}]);