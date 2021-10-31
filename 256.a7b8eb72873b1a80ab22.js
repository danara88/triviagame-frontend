"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[256],{256:(P,p,l)=>{l.r(p),l.d(p,{CreateGameModule:()=>O});var C=l(8583),n=l(665),g=l(1686);function v(i,d,t,r,s,u,o){try{var c=i[u](o),a=c.value}catch(m){return void t(m)}c.done?d(a):Promise.resolve(a).then(r,s)}function Z(i){return function(){var d=this,t=arguments;return new Promise(function(r,s){var u=i.apply(d,t);function o(a){v(u,r,s,o,c,"next",a)}function c(a){v(u,r,s,o,c,"throw",a)}o(void 0)})}}class f{constructor(d,t,r,s,u,o){this._id=d,this.name=t,this.description=r,this.status=s,this.createdAt=u,this.updatedAt=o}}var e=l(639),T=l(4655),h=l(2773),k=l(2340),y=l(1841);const U=k.N.API_URL;let b=(()=>{class i{constructor(t){this.http=t}createAnswer(t){return this.http.post(`${U}/answers`,t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(y.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var G=l(3686),N=l(8270),I=l(3013),S=l(7703),j=l(2872);const E=[{path:"",component:(()=>{class i{constructor(t,r,s,u,o,c,a,m){this.fb=t,this.categoryService=r,this.questionService=s,this.answerService=u,this.router=o,this.spinner=c,this.utilsService=a,this.messageService=m,this.formCustom=new n.cw({}),this.createForm(),this.status="",this.alertMessage="",this.category=new f,this.questionsIDs=[],this.selectedCorrectAnswers={question1:null,question2:null,question3:null,question4:null,question5:null}}ngOnInit(){}createForm(){this.formCustom=this.fb.group({categoryName:["",[n.kI.required]],categoryDescription:["",[n.kI.required]],question1:["",[n.kI.required]],question2:["",[n.kI.required]],question3:["",[n.kI.required]],question4:["",[n.kI.required]],question5:["",[n.kI.required]],question1Answers:this.fb.group({answer1:["",[n.kI.required]],answer2:["",[n.kI.required]],answer3:["",[n.kI.required]],answer4:["",[n.kI.required]]}),question2Answers:this.fb.group({answer1:["",[n.kI.required]],answer2:["",[n.kI.required]],answer3:["",[n.kI.required]],answer4:["",[n.kI.required]]}),question3Answers:this.fb.group({answer1:["",[n.kI.required]],answer2:["",[n.kI.required]],answer3:["",[n.kI.required]],answer4:["",[n.kI.required]]}),question4Answers:this.fb.group({answer1:["",[n.kI.required]],answer2:["",[n.kI.required]],answer3:["",[n.kI.required]],answer4:["",[n.kI.required]]}),question5Answers:this.fb.group({answer1:["",[n.kI.required]],answer2:["",[n.kI.required]],answer3:["",[n.kI.required]],answer4:["",[n.kI.required]]})})}onSubmit(){var t=this;return Z(function*(){if(t.formCustom.invalid||Object.values(t.selectedCorrectAnswers).includes(null))return void t.utilsService.showToastMessage("createGameToast","error","Error create game","You must fill all the required inputs.",t.messageService);t.spinner.show();const r={name:t.formCustom.controls.categoryName.value,description:t.formCustom.controls.categoryDescription.value};try{t.category=yield t.createCategory(r)}catch(q){return t.spinner.hide(),t.status="error",t.alertMessage="Error, something went wrong",t.utilsService.showToastMessage("createGameToast","error","Error create category",t.alertMessage,t.messageService),void console.log(q)}let s=[t.formCustom.controls.question1.value,t.formCustom.controls.question2.value,t.formCustom.controls.question3.value,t.formCustom.controls.question4.value,t.formCustom.controls.question5.value],u=Object.values(t.formCustom.controls.question1Answers.value),o=Object.values(t.formCustom.controls.question2Answers.value),c=Object.values(t.formCustom.controls.question3Answers.value),a=Object.values(t.formCustom.controls.question4Answers.value),m=Object.values(t.formCustom.controls.question5Answers.value);s.forEach(function(){var q=Z(function*(_,w){try{let A=yield t.createQuestion(_,t.category._id,10);switch(w){case 0:t.saveAnswers(u,A,1);break;case 1:t.saveAnswers(o,A,2);break;case 2:t.saveAnswers(c,A,3);break;case 3:t.saveAnswers(a,A,4);break;case 4:t.saveAnswers(m,A,5)}}catch(A){return console.log(A),t.utilsService.showToastMessage("createGameToast","error","Error create question","Something went wrong creating the question.",t.messageService),void t.spinner.hide()}});return function(_,w){return q.apply(this,arguments)}}()),t.spinner.hide(),t.formCustom.reset(),t.router.navigate(["/home"],{state:{categoryCreated:!0}})})()}saveAnswers(t,r,s){var u=this;t.forEach(function(){var o=Z(function*(c,a){try{let m=yield u.createAnswer(c,r._id);u.mappCorrectAnswer(s,a,m,r)}catch(m){u.spinner.hide(),u.utilsService.showToastMessage("createGameToast","error","Error create answer","Something went wrong creating the answer.",u.messageService),console.log(m)}});return function(c,a){return o.apply(this,arguments)}}())}mappCorrectAnswer(t,r,s,u){var o=this;return Z(function*(){switch(t){case 1:if(r===o.selectedCorrectAnswers.question1){let c=s._id;yield o.assignCorrectAnswer(u._id,c)}break;case 2:if(r===o.selectedCorrectAnswers.question2){let c=s._id;yield o.assignCorrectAnswer(u._id,c)}break;case 3:if(r===o.selectedCorrectAnswers.question3){let c=s._id;yield o.assignCorrectAnswer(u._id,c)}break;case 4:if(r===o.selectedCorrectAnswers.question4){let c=s._id;yield o.assignCorrectAnswer(u._id,c)}break;case 5:if(r===o.selectedCorrectAnswers.question5){let c=s._id;yield o.assignCorrectAnswer(u._id,c)}}})()}selectCorrectAnswer(t,r){switch(t){case 1:this.selectedCorrectAnswers.question1=r;break;case 2:this.selectedCorrectAnswers.question2=r;break;case 3:this.selectedCorrectAnswers.question3=r;break;case 4:this.selectedCorrectAnswers.question4=r;break;case 5:this.selectedCorrectAnswers.question5=r}}createCategory(t){var r=this;return Z(function*(){return new Promise((s,u)=>{r.categoryService.createCategory(t).subscribe(o=>{s(o)},o=>{u(o)})})})()}createQuestion(t,r,s){var u=this;return Z(function*(){let o={sentence:t,category:r,score:s};return new Promise((c,a)=>{u.questionService.createQuestion(o).subscribe(m=>{c(m)},m=>{a(m)})})})()}createAnswer(t,r){var s=this;return Z(function*(){let u={content:t,question:r};return new Promise((o,c)=>{s.answerService.createAnswer(u).subscribe(a=>{o(a.answer)},a=>{c(a)})})})()}assignCorrectAnswer(t,r){var s=this;return Z(function*(){return new Promise((u,o)=>{s.questionService.assignCorrectAnswer(t,r).subscribe(c=>{u(c)},c=>{console.log(c),o(c)})})})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.qu),e.Y36(T.H),e.Y36(h.a),e.Y36(b),e.Y36(g.F0),e.Y36(G.t2),e.Y36(N.F),e.Y36(I.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-game"]],decls:156,vars:41,consts:[[1,"create-game","mt-4"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-12"],[1,"box","mb-4"],[1,"box__title"],[1,"box__content","d-flex","justify-content-between"],["type","submit",1,"btn-custom","btn-custom--gray"],[1,"col-md-6"],[1,"box"],[1,"box__content"],[1,"form-custom__group","d-flex","flex-column","mt-3"],[1,"form-custom__label","mb-2"],["type","text","formControlName","categoryName",1,"form-custom__input"],["formControlName","categoryDescription",1,"form-custom__input","form-custom__input--textarea"],[1,"col-md-6","mb-5"],[1,"d-flex","justify-content-between"],["type","text","formControlName","question1",1,"form-custom__input"],["formGroupName","question1Answers"],[1,"form-custom__group-answers","mt-3"],[1,"form-custom__group-answer","mb-3"],[1,"form-custom__group-letter","box--green",3,"click"],["type","text","placeholder","Write the option","formControlName","answer1",1,"form-custom__input"],["type","text","placeholder","Write the option","formControlName","answer2",1,"form-custom__input"],["type","text","placeholder","Write the option","formControlName","answer3",1,"form-custom__input"],["type","text","placeholder","Write the option","formControlName","answer4",1,"form-custom__input"],["type","text","formControlName","question2",1,"form-custom__input"],["formGroupName","question2Answers"],["type","text","formControlName","question3",1,"form-custom__input"],["formGroupName","question3Answers"],["type","text","formControlName","question4",1,"form-custom__input"],["formGroupName","question4Answers"],["type","text","formControlName","question5",1,"form-custom__input"],["formGroupName","question5Answers"],["key","createGameToast","position","top-center"]],template:function(t,r){1&t&&(e.TgZ(0,"app-layout"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"h3",6),e._uU(8,"Create New Category"),e.qZA(),e.TgZ(9,"div",7),e._uU(10," Here you can create a new category with questions and answers "),e.TgZ(11,"button",8),e._uU(12,"Save and Publish"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",9),e.TgZ(14,"div",10),e.TgZ(15,"h3",6),e._uU(16,"Create category"),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"div",12),e.TgZ(19,"label",13),e._uU(20,"Insert category name"),e.qZA(),e._UZ(21,"input",14),e.qZA(),e.TgZ(22,"div",12),e.TgZ(23,"label",13),e._uU(24,"Insert category description"),e.qZA(),e._UZ(25,"textarea",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"div",16),e.TgZ(27,"div",10),e.TgZ(28,"h3",6),e._uU(29,"Create your 5 questions and answers"),e.qZA(),e.TgZ(30,"div",12),e.TgZ(31,"div",17),e.TgZ(32,"label",13),e._uU(33,"Enter your question "),e.TgZ(34,"strong"),e._uU(35,"#1"),e.qZA(),e.qZA(),e.qZA(),e._UZ(36,"input",18),e.TgZ(37,"div",19),e.TgZ(38,"div",20),e.TgZ(39,"div",21),e.TgZ(40,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(1,0)}),e._uU(41," a) "),e.qZA(),e._UZ(42,"input",23),e.qZA(),e.TgZ(43,"div",21),e.TgZ(44,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(1,1)}),e._uU(45," b) "),e.qZA(),e._UZ(46,"input",24),e.qZA(),e.TgZ(47,"div",21),e.TgZ(48,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(1,2)}),e._uU(49," c) "),e.qZA(),e._UZ(50,"input",25),e.qZA(),e.TgZ(51,"div",21),e.TgZ(52,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(1,3)}),e._uU(53," d) "),e.qZA(),e._UZ(54,"input",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(55,"div",12),e.TgZ(56,"div",17),e.TgZ(57,"label",13),e._uU(58,"Enter your question "),e.TgZ(59,"strong"),e._uU(60,"#2"),e.qZA(),e.qZA(),e.qZA(),e._UZ(61,"input",27),e.TgZ(62,"div",28),e.TgZ(63,"div",20),e.TgZ(64,"div",21),e.TgZ(65,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(2,0)}),e._uU(66," a) "),e.qZA(),e._UZ(67,"input",23),e.qZA(),e.TgZ(68,"div",21),e.TgZ(69,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(2,1)}),e._uU(70," b) "),e.qZA(),e._UZ(71,"input",24),e.qZA(),e.TgZ(72,"div",21),e.TgZ(73,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(2,2)}),e._uU(74," c) "),e.qZA(),e._UZ(75,"input",25),e.qZA(),e.TgZ(76,"div",21),e.TgZ(77,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(2,3)}),e._uU(78," d) "),e.qZA(),e._UZ(79,"input",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(80,"div",12),e.TgZ(81,"div",17),e.TgZ(82,"label",13),e._uU(83,"Enter your question "),e.TgZ(84,"strong"),e._uU(85,"#3"),e.qZA(),e.qZA(),e.qZA(),e._UZ(86,"input",29),e.TgZ(87,"div",30),e.TgZ(88,"div",20),e.TgZ(89,"div",21),e.TgZ(90,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(3,0)}),e._uU(91," a) "),e.qZA(),e._UZ(92,"input",23),e.qZA(),e.TgZ(93,"div",21),e.TgZ(94,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(3,1)}),e._uU(95," b) "),e.qZA(),e._UZ(96,"input",24),e.qZA(),e.TgZ(97,"div",21),e.TgZ(98,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(3,2)}),e._uU(99," c) "),e.qZA(),e._UZ(100,"input",25),e.qZA(),e.TgZ(101,"div",21),e.TgZ(102,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(3,3)}),e._uU(103," d) "),e.qZA(),e._UZ(104,"input",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(105,"div",12),e.TgZ(106,"div",17),e.TgZ(107,"label",13),e._uU(108,"Enter your question "),e.TgZ(109,"strong"),e._uU(110,"#4"),e.qZA(),e.qZA(),e.qZA(),e._UZ(111,"input",31),e.TgZ(112,"div",32),e.TgZ(113,"div",20),e.TgZ(114,"div",21),e.TgZ(115,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(4,0)}),e._uU(116," a) "),e.qZA(),e._UZ(117,"input",23),e.qZA(),e.TgZ(118,"div",21),e.TgZ(119,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(4,1)}),e._uU(120," b) "),e.qZA(),e._UZ(121,"input",24),e.qZA(),e.TgZ(122,"div",21),e.TgZ(123,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(4,2)}),e._uU(124," c) "),e.qZA(),e._UZ(125,"input",25),e.qZA(),e.TgZ(126,"div",21),e.TgZ(127,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(4,3)}),e._uU(128," d) "),e.qZA(),e._UZ(129,"input",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(130,"div",12),e.TgZ(131,"div",17),e.TgZ(132,"label",13),e._uU(133,"Enter your question "),e.TgZ(134,"strong"),e._uU(135,"#5"),e.qZA(),e.qZA(),e.qZA(),e._UZ(136,"input",33),e.TgZ(137,"div",34),e.TgZ(138,"div",20),e.TgZ(139,"div",21),e.TgZ(140,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(5,0)}),e._uU(141," a) "),e.qZA(),e._UZ(142,"input",23),e.qZA(),e.TgZ(143,"div",21),e.TgZ(144,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(5,1)}),e._uU(145," b) "),e.qZA(),e._UZ(146,"input",24),e.qZA(),e.TgZ(147,"div",21),e.TgZ(148,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(5,2)}),e._uU(149," c) "),e.qZA(),e._UZ(150,"input",25),e.qZA(),e.TgZ(151,"div",21),e.TgZ(152,"div",22),e.NdJ("click",function(){return r.selectCorrectAnswer(5,3)}),e._uU(153," d) "),e.qZA(),e._UZ(154,"input",26),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(155,"p-toast",35),e.qZA()),2&t&&(e.xp6(3),e.Q6J("formGroup",r.formCustom),e.xp6(37),e.ekj("selected-correct-answer",0===r.selectedCorrectAnswers.question1),e.xp6(4),e.ekj("selected-correct-answer",1===r.selectedCorrectAnswers.question1),e.xp6(4),e.ekj("selected-correct-answer",2===r.selectedCorrectAnswers.question1),e.xp6(4),e.ekj("selected-correct-answer",3===r.selectedCorrectAnswers.question1),e.xp6(13),e.ekj("selected-correct-answer",0===r.selectedCorrectAnswers.question2),e.xp6(4),e.ekj("selected-correct-answer",1===r.selectedCorrectAnswers.question2),e.xp6(4),e.ekj("selected-correct-answer",2===r.selectedCorrectAnswers.question2),e.xp6(4),e.ekj("selected-correct-answer",3===r.selectedCorrectAnswers.question2),e.xp6(13),e.ekj("selected-correct-answer",0===r.selectedCorrectAnswers.question3),e.xp6(4),e.ekj("selected-correct-answer",1===r.selectedCorrectAnswers.question3),e.xp6(4),e.ekj("selected-correct-answer",2===r.selectedCorrectAnswers.question3),e.xp6(4),e.ekj("selected-correct-answer",3===r.selectedCorrectAnswers.question3),e.xp6(13),e.ekj("selected-correct-answer",0===r.selectedCorrectAnswers.question4),e.xp6(4),e.ekj("selected-correct-answer",1===r.selectedCorrectAnswers.question4),e.xp6(4),e.ekj("selected-correct-answer",2===r.selectedCorrectAnswers.question4),e.xp6(4),e.ekj("selected-correct-answer",3===r.selectedCorrectAnswers.question4),e.xp6(13),e.ekj("selected-correct-answer",0===r.selectedCorrectAnswers.question5),e.xp6(4),e.ekj("selected-correct-answer",1===r.selectedCorrectAnswers.question5),e.xp6(4),e.ekj("selected-correct-answer",2===r.selectedCorrectAnswers.question5),e.xp6(4),e.ekj("selected-correct-answer",3===r.selectedCorrectAnswers.question5))},directives:[S.$,n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,n.x0,j.FN],styles:[".create-game[_ngcontent-%COMP%]{width:100rem;margin:0 auto}.selected-correct-answer[_ngcontent-%COMP%]{background-color:#1083d5;color:#e2f3f5}"]}),i})(),canActivate:[l(5107).a]}];let F=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(E)],g.Bz]}),i})();var Y=l(3077),x=l(2903);let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[C.ez,F,Y.x,n.UX,n.u5,x.m]]}),i})()}}]);