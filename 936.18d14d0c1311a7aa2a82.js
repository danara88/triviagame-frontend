"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[936],{7689:(T,m,n)=>{n.r(m),n.d(m,{CategoriesModule:()=>U});var t=n(8583),p=n(2903),c=n(1686),e=n(639),d=n(2340),g=n(1841);const Z=d.N.API_URL;let v=(()=>{class i{constructor(a){this.http=a}getCategories(a=0,f=40){return this.http.get(`${Z}/categories?from=${a}&limit=${f}`)}}return i.\u0275fac=function(a){return new(a||i)(e.LFG(g.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var _=n(3686),r=n(7703);function l(i,u){if(1&i){const a=e.EpF();e.TgZ(0,"div",2),e.NdJ("click",function(){const M=e.CHM(a).$implicit;return e.oxw().startsGame(M._id)}),e.TgZ(1,"div",3),e._UZ(2,"img",4),e.qZA(),e.TgZ(3,"div",5),e.TgZ(4,"h3",6),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",7),e._uU(7),e.qZA(),e.qZA()}if(2&i){const a=u.$implicit;e.xp6(5),e.Oqu(a.name),e.xp6(2),e.hij(" ",a.description," ")}}const A=[{path:"",component:(()=>{class i{constructor(a,f,y){this.categoryService=a,this.sponner=f,this.router=y,this.categories=[]}ngOnInit(){this.getCategories()}getCategories(){this.sponner.show(),this.categoryService.getCategories().subscribe(a=>{this.categories=a.categories,this.sponner.hide()},a=>{this.sponner.hide(),console.log(a)})}startsGame(a){this.router.navigate(["/game",a])}}return i.\u0275fac=function(a){return new(a||i)(e.Y36(v),e.Y36(_.t2),e.Y36(c.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-categories"]],decls:3,vars:1,consts:[[1,"categories","d-flex","justify-content-between","flex-wrap","mt-4"],["class","category m-2 cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"category","m-2","cursor-pointer",3,"click"],[1,"category__image","mb-4"],["src","assets/img/options.svg"],[1,"category__head"],[1,"text-center"],[1,"category__content","text-center"]],template:function(a,f){1&a&&(e.TgZ(0,"app-layout"),e.TgZ(1,"div",0),e.YNc(2,l,8,2,"div",1),e.qZA(),e.qZA()),2&a&&(e.xp6(2),e.Q6J("ngForOf",f.categories))},directives:[r.$,t.sg],styles:[".category[_ngcontent-%COMP%]{cursor:pointer;padding:2rem;border-radius:.5rem;transition:.3s all;width:35rem;height:20rem;overflow:hidden}.category__content[_ngcontent-%COMP%]{color:#979ea2}.category[_ngcontent-%COMP%]:hover{background-color:#212e36}.category__image[_ngcontent-%COMP%]{width:7rem;margin:auto}"]}),i})(),canActivate:[n(5107).a]}];let h=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[c.Bz.forChild(A)],c.Bz]}),i})();var C=n(3077);let U=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[t.ez,h,p.m,C.x]]}),i})()},49:(T,m,n)=>{n.d(m,{G:()=>_});var t=n(639),p=n(3071);let c=(()=>{class r{constructor(){}firstLetter(o){return o[0].toUpperCase()}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var e=n(8583);function d(r,l){if(1&r&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t._uU(5," Profile "),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"span"),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"div",8),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"div",11),t.TgZ(14,"label"),t._uU(15,"Full name"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"label"),t._uU(20,"Email"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA(),t.qZA(),t.TgZ(23,"div",11),t.TgZ(24,"label"),t._uU(25,"Account"),t.qZA(),t.TgZ(26,"p"),t._uU(27),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",10),t.TgZ(29,"div",11),t.TgZ(30,"label"),t._uU(31,"Account Status"),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",12),t.TgZ(35,"button",13),t._uU(36,"Close"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){const o=t.oxw();t.xp6(9),t.Oqu(o.utilsService.firstLetter(o.identity.fullName)),t.xp6(8),t.Oqu(o.identity.fullName),t.xp6(5),t.Oqu(o.identity.email),t.xp6(5),t.Oqu("ADMIN_ROLE"===o.identity.role?"Admin Account":"User Account"),t.xp6(6),t.Oqu(!1===o.identity.status?"Disavailale":"Active")}}let g=(()=>{class r{constructor(o,s){this.utilsService=o,this.userService=s,this.identity=this.userService.getIdentity()}ngOnInit(){}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(c),t.Y36(p.K))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-profile"]],decls:1,vars:1,consts:[["class","modal fade modal-custom modal-custom--profile","id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",4,"ngIf"],["id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",1,"modal","fade","modal-custom","modal-custom--profile"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body","profile"],[1,"user-info__image"],[1,"profile__content"],[1,"row"],[1,"col-md-6"],[1,"profile__group"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"]],template:function(o,s){1&o&&t.YNc(0,d,37,5,"div",0),2&o&&t.Q6J("ngIf",s.identity)},directives:[e.O5],styles:[".profile[_ngcontent-%COMP%] > .user-info__image[_ngcontent-%COMP%]{margin:auto}.profile__content[_ngcontent-%COMP%]{margin-top:2rem}.profile__group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#e2f3f5}"]}),r})();function Z(r,l){if(1&r&&(t.TgZ(0,"div",16),t.TgZ(1,"div",17),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"span",18),t._uU(5),t.qZA(),t.qZA()),2&r){const o=t.oxw();t.xp6(3),t.Oqu(o.utilsService.firstLetter(o.identity.fullName)),t.xp6(2),t.Oqu(o.identity.fullName)}}function v(r,l){if(1&r&&(t.TgZ(0,"ul",19),t.TgZ(1,"div",20),t.TgZ(2,"div",17),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",21),t.TgZ(6,"span",18),t._uU(7),t.qZA(),t.TgZ(8,"span",22),t._uU(9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"li"),t.TgZ(11,"a",23),t._UZ(12,"i",24),t._uU(13,"Profile"),t.qZA(),t.qZA(),t.TgZ(14,"li"),t.TgZ(15,"a",25),t._UZ(16,"i",26),t._uU(17,"Support"),t.qZA(),t.qZA(),t.TgZ(18,"li"),t.TgZ(19,"a",27),t._UZ(20,"i",28),t._uU(21,"Log out"),t.qZA(),t.qZA(),t.qZA()),2&r){const o=t.oxw();t.xp6(4),t.Oqu(o.utilsService.firstLetter(o.identity.fullName)),t.xp6(3),t.Oqu(o.identity.fullName),t.xp6(2),t.Oqu(o.identity.email)}}let _=(()=>{class r{constructor(o,s){this.userService=o,this.utilsService=s,this.identity=this.userService.getIdentity()}ngOnInit(){}logout(){this.userService.logout()}}return r.\u0275fac=function(o){return new(o||r)(t.Y36(p.K),t.Y36(c))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-header"]],decls:26,vars:2,consts:[[1,"header"],[1,"logo"],[1,"logo__text"],[1,"logo__subtext"],[1,"dropdown-custom"],["class","user-info","id","dropdownMenuButton1","data-bs-toggle","dropdown",4,"ngIf"],["class","dropdown-menu mt-4","aria-labelledby","dropdownMenuButton1",4,"ngIf"],["id","logoutModal","tabindex","-1","aria-labelledby","logoutModalLabel","aria-hidden","true",1,"modal","fade","modal-custom"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--sm",3,"click"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"],["id","dropdownMenuButton1","data-bs-toggle","dropdown",1,"user-info"],[1,"user-info__image"],[1,"user-info__user-name"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu","mt-4"],[1,"dropdown-menu__head"],[1,"d-flex","flex-column"],[1,"user-info__user-email"],["href","#","data-bs-toggle","modal","data-bs-target","#profileModal"],[1,"fas","fa-user"],["href","#"],[1,"far","fa-question-circle"],["href","#","data-bs-toggle","modal","data-bs-target","#logoutModal"],[1,"fas","fa-sign-out-alt"]],template:function(o,s){1&o&&(t.TgZ(0,"header",0),t.TgZ(1,"div",1),t.TgZ(2,"span",2),t._uU(3,"Trivia"),t.TgZ(4,"b"),t._uU(5,"Game"),t.qZA(),t.qZA(),t.TgZ(6,"span",3),t._uU(7,"Powered by Daniel Aranda"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.YNc(9,Z,6,2,"div",5),t.YNc(10,v,22,3,"ul",6),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.TgZ(12,"div",8),t.TgZ(13,"div",9),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t._uU(16," Log out "),t.qZA(),t.TgZ(17,"div",12),t.TgZ(18,"p"),t._uU(19,"Are you sure you want to log out from the app?"),t.qZA(),t.qZA(),t.TgZ(20,"div",13),t.TgZ(21,"button",14),t.NdJ("click",function(){return s.logout()}),t._uU(22,"Yes"),t.qZA(),t.TgZ(23,"button",15),t._uU(24,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(25,"app-profile")),2&o&&(t.xp6(9),t.Q6J("ngIf",s.identity),t.xp6(1),t.Q6J("ngIf",s.identity))},directives:[e.O5,g],styles:[""]}),r})()},3077:(T,m,n)=>{n.d(m,{x:()=>e});var t=n(8583),p=n(2903),c=n(639);let e=(()=>{class d{}return d.\u0275fac=function(Z){return new(Z||d)},d.\u0275mod=c.oAB({type:d}),d.\u0275inj=c.cJS({imports:[[t.ez,p.m]]}),d})()},3071:(T,m,n)=>{n.d(m,{K:()=>r});var t=n(2340),p=n(5917),c=n(3342),e=n(8002),d=n(5304),g=n(639),Z=n(1841),v=n(1686);const _=t.N.API_URL;let r=(()=>{class l{constructor(s,A){this.http=s,this.router=A}getIdentity(){let s=JSON.parse(localStorage.getItem("identity"));return void 0!==s?s:null}register(s){return this.http.post(`${_}/users`,s)}login(s){return this.http.post(`${_}/auth/login`,s)}validateToken(){return this.http.post(`${_}/auth/refresh`,{}).pipe((0,c.b)(s=>{localStorage.setItem("access_token",s.token)}),(0,e.U)(s=>!0),(0,d.K)(s=>(0,p.of)(!1)))}logout(){localStorage.clear(),this.router.navigateByUrl("/auth/login")}}return l.\u0275fac=function(s){return new(s||l)(g.LFG(Z.eN),g.LFG(v.F0))},l.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);