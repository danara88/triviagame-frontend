"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[693],{823:(q,p,s)=>{s.r(p),s.d(p,{GameModule:()=>F});var e=s(8583),d=s(1686),_=s(5107);class h{constructor(u,o,a,m,v,A,b,y,U,C){this._id=u,this.category=o,this.sentence=a,this.options=m,this.correctAnswer=v,this.selectedOption=A,this.score=b,this.status=y,this.createdAt=U,this.updatedAt=C}}class g{constructor(u,o,a,m,v,A,b,y,U,C){this._id=u,this.user=o,this.category=a,this.totalScore=m,this.startDateTime=v,this.endDateTime=A,this.timeGame=b,this.status=y,this.createdAt=U,this.updatedAt=C}}var t=s(639),Z=s(2340),T=s(1841);const f=Z.N.API_URL;let r=(()=>{class n{constructor(o){this.http=o}createGame(o){return this.http.post(`${f}/games`,{category:o})}endGame(o,a){return this.http.post(`${f}/games/end-game/${o}`,{totalScore:a})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(T.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const l=Z.N.API_URL;let i=(()=>{class n{constructor(o){this.http=o}getQuestionsByCategory(o){return this.http.get(`${l}/questions/questions-by-category/${o}`)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(T.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=s(3686),x=s(7703);function O(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"div",9),t.NdJ("click",function(){const v=t.CHM(o).$implicit;return t.oxw(3).selectedOption(v)}),t.TgZ(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",11),t._uU(4),t.qZA(),t.qZA()}if(2&n){const o=u.$implicit,a=u.index,m=t.oxw(3);t.xp6(2),t.hij(" ",0===a?"a)":1===a?"b)":2===a?"c)":"d)"," "),t.xp6(1),t.ekj("selected-answer",m.activeQuestion.selectedOption===o),t.xp6(1),t.hij(" ",o.content," ")}}function M(n,u){if(1&n&&(t.TgZ(0,"div",7),t.YNc(1,O,5,4,"div",8),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.options)}}function G(n,u){if(1&n&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"h3"),t._uU(3,"Question "),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"div",5),t.YNc(8,M,2,1,"div",6),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(5),t.hij("#",o.numberQuestion,""),t.xp6(1),t.hij(" ",o.activeQuestion.sentence," "),t.xp6(2),t.Q6J("ngIf",o.options.length)}}function Q(n,u){if(1&n&&(t.TgZ(0,"div",12),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t._UZ(3,"img",15),t.qZA(),t.TgZ(4,"span"),t._uU(5,"You did great !"),t.qZA(),t.qZA(),t.TgZ(6,"div",16),t.TgZ(7,"h2"),t._uU(8,"Final Results"),t.qZA(),t.TgZ(9,"div",17),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"span"),t._uU(13,"Game Time: 00:00:00"),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.qZA(),t.TgZ(16,"span"),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"button",18),t._uU(19,"Exit Game"),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(11),t.hij("You get ",o.score," points !"),t.xp6(4),t.hij("Total Score: ",o.totalScore,""),t.xp6(2),t.AsE("Your score: ",o.score," / ",o.totalScore,"")}}function P(n,u){if(1&n&&(t.TgZ(0,"div",12),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t._UZ(3,"img",19),t.qZA(),t.TgZ(4,"span"),t._uU(5,"You did bad :("),t.qZA(),t.qZA(),t.TgZ(6,"div",16),t.TgZ(7,"h2"),t._uU(8,"Final Results"),t.qZA(),t.TgZ(9,"div",17),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA(),t.TgZ(14,"span"),t._uU(15),t.qZA(),t.TgZ(16,"span"),t._uU(17),t.qZA(),t.qZA(),t.TgZ(18,"button",18),t._uU(19,"Exit Game"),t.qZA(),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(11),t.hij("You get ",o.score," points"),t.xp6(2),t.hij("Game Time: ",o.game.timeGame,""),t.xp6(2),t.hij("Total Score: ",o.totalScore,""),t.xp6(2),t.AsE("Your score: ",o.score," / ",o.totalScore,"")}}function I(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).prevQuestion()}),t._UZ(1,"i",27),t.qZA()}}function S(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).nextQuestion()}),t._UZ(1,"i",28),t.qZA()}}function E(n,u){if(1&n){const o=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){return t.CHM(o),t.oxw(2).finishGame()}),t._uU(1,"Finish test"),t.qZA()}}function w(n,u){if(1&n&&(t.TgZ(0,"div",20),t.TgZ(1,"div",21),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.TgZ(4,"div",23),t.YNc(5,I,2,0,"button",24),t.YNc(6,S,2,0,"button",24),t.qZA(),t.qZA(),t.TgZ(7,"span",22),t.YNc(8,E,2,0,"button",25),t._uU(9),t.qZA(),t.qZA()),2&n){const o=t.oxw();t.xp6(3),t.AsE("",o.answeredQuestions,"/",o.totalQuestions,""),t.xp6(2),t.Q6J("ngIf",1!==o.numberQuestion),t.xp6(1),t.Q6J("ngIf",o.numberQuestion<=o.totalQuestions-1),t.xp6(2),t.Q6J("ngIf",o.numberQuestion===o.totalQuestions||o.answeredQuestions===o.totalQuestions),t.xp6(1),t.hij(" Total questions: ",o.totalQuestions," ")}}const D=[{path:"",component:(()=>{class n{constructor(o,a,m,v,A){this.gameService=o,this.questionService=a,this.spinner=m,this.route=v,this.router=A,this.numberQuestion=1,this.categoryID="",this.questions=[],this.options=[],this.game=new g,this.activeQuestion=new h,this.totalQuestions=1,this.answeredQuestions=0,this.totalScore=0,this.score=0,this.submittedGame=!1,this.grade=0}ngOnInit(){this.route.params.forEach(o=>{this.categoryID=o.categoryID,this.createGame(),this.getGameQuestions()})}getTotalScore(o){let a=0;return o.forEach(m=>a+=m.score),a}createGame(){this.spinner.show(),this.gameService.createGame(this.categoryID).subscribe(o=>{this.game=o,this.spinner.hide()},o=>{console.log(o),this.spinner.hide(),this.router.navigateByUrl("/home")})}getGameQuestions(){this.questionService.getQuestionsByCategory(this.categoryID).subscribe(o=>{this.questions=o.questions,this.totalScore=this.getTotalScore(this.questions),0===this.questions.length&&this.router.navigateByUrl("/home"),this.totalQuestions=o.total,this.activeQuestion=this.questions[this.numberQuestion-1],this.options=this.activeQuestion.options||[]},o=>{console.log(o),this.router.navigateByUrl("/home")})}nextQuestion(){this.numberQuestion<=this.totalQuestions&&(this.numberQuestion++,this.activeQuestion=this.questions[this.numberQuestion-1],this.options=this.activeQuestion.options||[])}prevQuestion(){1!==this.numberQuestion&&(this.numberQuestion--,this.activeQuestion=this.questions[this.numberQuestion-1],this.options=this.activeQuestion.options||[])}selectedOption(o){let a=this.questions.indexOf(this.activeQuestion);this.questions[a].selectedOption=o,this.answeredQuestions=this.questions.filter(m=>m.selectedOption).length}finishGame(){this.questions.forEach(o=>{var a;o.correctAnswer===(null===(a=o.selectedOption)||void 0===a?void 0:a._id)&&!this.submittedGame&&(this.score=this.score+o.score)}),this.grade=this.score/this.totalScore*100,this.submittedGame=!0,this.endGame()}endGame(){this.spinner.show(),this.gameService.endGame(this.game._id,this.score).subscribe(o=>{this.spinner.hide(),this.game=o},o=>{this.spinner.hide(),console.log(o)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(r),t.Y36(i),t.Y36(c.t2),t.Y36(d.gz),t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game"]],decls:5,vars:4,consts:[["class","game mt-4",4,"ngIf"],["class","game-finish",4,"ngIf"],["class","game__footer d-flex justify-content-between",4,"ngIf"],[1,"game","mt-4"],[1,"game__question","text-center"],[1,"game__options","d-flex"],["class","game__options-column",4,"ngIf"],[1,"game__options-column"],["class","game__option d-flex align-items-center",3,"click",4,"ngFor","ngForOf"],[1,"game__option","d-flex","align-items-center",3,"click"],[1,"game__option-letter","box","box--green"],[1,"game__option-content","box","w-100"],[1,"game-finish"],[1,"game-finish__head","d-flex","flex-column","align-items-center"],[1,"game-finish__image"],["src","../../../assets/img/like.svg","alt","Good Trivia Game"],[1,"game-finish__content","d-flex","flex-column","align-items-center"],[1,"game-finish__info","d-flex","flex-column","align-items-center"],["routerLink","/home",1,"btn-custom"],["src","../../../assets/img/dislike.svg","alt","Good Trivia Game"],[1,"game__footer","d-flex","justify-content-between"],[1,"d-flex"],[1,"game__totalquestions"],[1,"game__buttons"],["class","btn-custom btn-custom--sm btn-custom--gray",3,"click",4,"ngIf"],["class","btn-custom btn-custom--sm",3,"click",4,"ngIf"],[1,"btn-custom","btn-custom--sm","btn-custom--gray",3,"click"],[1,"fas","fa-arrow-left"],[1,"fas","fa-arrow-right"],[1,"btn-custom","btn-custom--sm",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"app-layout"),t.YNc(1,G,9,3,"div",0),t.YNc(2,Q,20,4,"div",1),t.YNc(3,P,20,5,"div",1),t.qZA(),t.YNc(4,w,10,6,"div",2)),2&o&&(t.xp6(1),t.Q6J("ngIf",!a.submittedGame),t.xp6(1),t.Q6J("ngIf",a.submittedGame&&a.grade>=70),t.xp6(1),t.Q6J("ngIf",a.submittedGame&&a.grade<=70),t.xp6(1),t.Q6J("ngIf",!a.submittedGame))},directives:[x.$,e.O5,e.sg,d.rH],styles:[".game__options[_ngcontent-%COMP%]{margin-top:5rem}.game__options-column[_ngcontent-%COMP%]{width:60rem;margin:0 auto}.game__option[_ngcontent-%COMP%]{margin-bottom:1rem;cursor:pointer;transition:.3s all}.game__option[_ngcontent-%COMP%]:hover{background-color:#212e36;opacity:.7}.game__buttons[_ngcontent-%COMP%]{margin-left:2rem}.game__buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-of-type{margin-right:1rem}.game__footer[_ngcontent-%COMP%]{background-color:#000;padding:1rem;position:absolute;bottom:0rem;width:100%}.selected-answer[_ngcontent-%COMP%]{background-color:#44c4a1;color:#e2f3f5}.selected-answer[_ngcontent-%COMP%]:hover{opacity:1!important}.game-finish__head[_ngcontent-%COMP%]{margin-top:5rem}.game-finish__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:2rem;font-size:24px}.game-finish__info[_ngcontent-%COMP%]{margin:2rem}.game-finish__content[_ngcontent-%COMP%]{margin-top:2rem}.game-finish__content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#979ea2}.game-finish__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20rem}"]}),n})(),canActivate:[_.a]}];let L=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),n})();var Y=s(2903),N=s(3077);let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[e.ez,L,Y.m,N.x]]}),n})()},49:(q,p,s)=>{s.d(p,{G:()=>f});var e=s(639),d=s(3071);let _=(()=>{class r{constructor(){}firstLetter(i){return i[0].toUpperCase()}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var h=s(8583);function g(r,l){if(1&r&&(e.TgZ(0,"div",1),e.TgZ(1,"div",2),e.TgZ(2,"div",3),e.TgZ(3,"div",4),e.TgZ(4,"div",5),e._uU(5," Profile "),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"span"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"label"),e._uU(15,"Full name"),e.qZA(),e.TgZ(16,"p"),e._uU(17),e.qZA(),e.qZA(),e.TgZ(18,"div",11),e.TgZ(19,"label"),e._uU(20,"Email"),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.qZA(),e.qZA(),e.TgZ(23,"div",11),e.TgZ(24,"label"),e._uU(25,"Account"),e.qZA(),e.TgZ(26,"p"),e._uU(27),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",10),e.TgZ(29,"div",11),e.TgZ(30,"label"),e._uU(31,"Account Status"),e.qZA(),e.TgZ(32,"p"),e._uU(33),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",12),e.TgZ(35,"button",13),e._uU(36,"Close"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r){const i=e.oxw();e.xp6(9),e.Oqu(i.utilsService.firstLetter(i.identity.fullName)),e.xp6(8),e.Oqu(i.identity.fullName),e.xp6(5),e.Oqu(i.identity.email),e.xp6(5),e.Oqu("ADMIN_ROLE"===i.identity.role?"Admin Account":"User Account"),e.xp6(6),e.Oqu(!1===i.identity.status?"Disavailale":"Active")}}let t=(()=>{class r{constructor(i,c){this.utilsService=i,this.userService=c,this.identity=this.userService.getIdentity()}ngOnInit(){}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(_),e.Y36(d.K))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile"]],decls:1,vars:1,consts:[["class","modal fade modal-custom modal-custom--profile","id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",4,"ngIf"],["id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",1,"modal","fade","modal-custom","modal-custom--profile"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body","profile"],[1,"user-info__image"],[1,"profile__content"],[1,"row"],[1,"col-md-6"],[1,"profile__group"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"]],template:function(i,c){1&i&&e.YNc(0,g,37,5,"div",0),2&i&&e.Q6J("ngIf",c.identity)},directives:[h.O5],styles:[".profile[_ngcontent-%COMP%] > .user-info__image[_ngcontent-%COMP%]{margin:auto}.profile__content[_ngcontent-%COMP%]{margin-top:2rem}.profile__group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#e2f3f5}"]}),r})();function Z(r,l){if(1&r&&(e.TgZ(0,"div",16),e.TgZ(1,"div",17),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"span",18),e._uU(5),e.qZA(),e.qZA()),2&r){const i=e.oxw();e.xp6(3),e.Oqu(i.utilsService.firstLetter(i.identity.fullName)),e.xp6(2),e.Oqu(i.identity.fullName)}}function T(r,l){if(1&r&&(e.TgZ(0,"ul",19),e.TgZ(1,"div",20),e.TgZ(2,"div",17),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"div",21),e.TgZ(6,"span",18),e._uU(7),e.qZA(),e.TgZ(8,"span",22),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"li"),e.TgZ(11,"a",23),e._UZ(12,"i",24),e._uU(13,"Profile"),e.qZA(),e.qZA(),e.TgZ(14,"li"),e.TgZ(15,"a",25),e._UZ(16,"i",26),e._uU(17,"Support"),e.qZA(),e.qZA(),e.TgZ(18,"li"),e.TgZ(19,"a",27),e._UZ(20,"i",28),e._uU(21,"Log out"),e.qZA(),e.qZA(),e.qZA()),2&r){const i=e.oxw();e.xp6(4),e.Oqu(i.utilsService.firstLetter(i.identity.fullName)),e.xp6(3),e.Oqu(i.identity.fullName),e.xp6(2),e.Oqu(i.identity.email)}}let f=(()=>{class r{constructor(i,c){this.userService=i,this.utilsService=c,this.identity=this.userService.getIdentity()}ngOnInit(){}logout(){this.userService.logout()}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(d.K),e.Y36(_))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-header"]],decls:26,vars:2,consts:[[1,"header"],[1,"logo"],[1,"logo__text"],[1,"logo__subtext"],[1,"dropdown-custom"],["class","user-info","id","dropdownMenuButton1","data-bs-toggle","dropdown",4,"ngIf"],["class","dropdown-menu mt-4","aria-labelledby","dropdownMenuButton1",4,"ngIf"],["id","logoutModal","tabindex","-1","aria-labelledby","logoutModalLabel","aria-hidden","true",1,"modal","fade","modal-custom"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--sm",3,"click"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"],["id","dropdownMenuButton1","data-bs-toggle","dropdown",1,"user-info"],[1,"user-info__image"],[1,"user-info__user-name"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu","mt-4"],[1,"dropdown-menu__head"],[1,"d-flex","flex-column"],[1,"user-info__user-email"],["href","#","data-bs-toggle","modal","data-bs-target","#profileModal"],[1,"fas","fa-user"],["href","#"],[1,"far","fa-question-circle"],["href","#","data-bs-toggle","modal","data-bs-target","#logoutModal"],[1,"fas","fa-sign-out-alt"]],template:function(i,c){1&i&&(e.TgZ(0,"header",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._uU(3,"Trivia"),e.TgZ(4,"b"),e._uU(5,"Game"),e.qZA(),e.qZA(),e.TgZ(6,"span",3),e._uU(7,"Powered by Daniel Aranda"),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.YNc(9,Z,6,2,"div",5),e.YNc(10,T,22,3,"ul",6),e.qZA(),e.qZA(),e.TgZ(11,"div",7),e.TgZ(12,"div",8),e.TgZ(13,"div",9),e.TgZ(14,"div",10),e.TgZ(15,"div",11),e._uU(16," Log out "),e.qZA(),e.TgZ(17,"div",12),e.TgZ(18,"p"),e._uU(19,"Are you sure you want to log out from the app?"),e.qZA(),e.qZA(),e.TgZ(20,"div",13),e.TgZ(21,"button",14),e.NdJ("click",function(){return c.logout()}),e._uU(22,"Yes"),e.qZA(),e.TgZ(23,"button",15),e._uU(24,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(25,"app-profile")),2&i&&(e.xp6(9),e.Q6J("ngIf",c.identity),e.xp6(1),e.Q6J("ngIf",c.identity))},directives:[h.O5,t],styles:[""]}),r})()},3077:(q,p,s)=>{s.d(p,{x:()=>h});var e=s(8583),d=s(2903),_=s(639);let h=(()=>{class g{}return g.\u0275fac=function(Z){return new(Z||g)},g.\u0275mod=_.oAB({type:g}),g.\u0275inj=_.cJS({imports:[[e.ez,d.m]]}),g})()},3071:(q,p,s)=>{s.d(p,{K:()=>r});var e=s(2340),d=s(5917),_=s(3342),h=s(8002),g=s(5304),t=s(639),Z=s(1841),T=s(1686);const f=e.N.API_URL;let r=(()=>{class l{constructor(c,x){this.http=c,this.router=x}getIdentity(){let c=JSON.parse(localStorage.getItem("identity"));return void 0!==c?c:null}register(c){return this.http.post(`${f}/users`,c)}login(c){return this.http.post(`${f}/auth/login`,c)}validateToken(){return this.http.post(`${f}/auth/refresh`,{}).pipe((0,_.b)(c=>{localStorage.setItem("access_token",c.token)}),(0,h.U)(c=>!0),(0,g.K)(c=>(0,d.of)(!1)))}logout(){localStorage.clear(),this.router.navigateByUrl("/auth/login")}}return l.\u0275fac=function(c){return new(c||l)(t.LFG(Z.eN),t.LFG(T.F0))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);