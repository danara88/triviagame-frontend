"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[115],{665:($,E,u)=>{u.d(E,{Fj:()=>Z,qu:()=>un,u:()=>fe,cw:()=>N,sg:()=>W,wO:()=>_e,JJ:()=>Re,JL:()=>Le,UX:()=>_t,kI:()=>At,_Y:()=>Xe});var r=u(639),y=u(8583),C=u(7574),V=u(9796),g=u(8002),O=u(1555),m=u(4402);function h(n,t){return new C.y(e=>{const o=n.length;if(0===o)return void e.complete();const i=new Array(o);let s=0,d=0;for(let _=0;_<o;_++){const k=(0,m.D)(n[_]);let ye=!1;e.add(k.subscribe({next:S=>{ye||(ye=!0,d++),i[_]=S},error:S=>e.error(S),complete:()=>{s++,(s===o||!ye)&&(d===o&&e.next(t?t.reduce((S,dn,cn)=>(S[dn]=i[cn],S),{}):i),e.complete())}}))}})}let l=(()=>{class n{constructor(e,o){this._renderer=e,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq))},n.\u0275dir=r.lG2({type:n}),n})(),c=(()=>{class n extends l{}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();const a=new r.OlP("NgValueAccessor"),yt={provide:a,useExisting:(0,r.Gpc)(()=>Z),multi:!0},Ct=new r.OlP("CompositionEventMode");let Z=(()=>{class n extends l{constructor(e,o,i){super(e,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,y.q)()?(0,y.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Ct,8))},n.\u0275dir=r.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,o){1&e&&r.NdJ("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},features:[r._Bn([yt]),r.qOj]}),n})();function A(n){return null==n||0===n.length}function ve(n){return null!=n&&"number"==typeof n.length}const f=new r.OlP("NgValidators"),M=new r.OlP("NgAsyncValidators"),Vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class At{static min(t){return n=t,t=>{if(A(t.value)||A(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null};var n}static max(t){return n=t,t=>{if(A(t.value)||A(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null};var n}static required(t){return A(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return A((n=t).value)||Vt.test(n.value)?null:{email:!0};var n}static minLength(t){return De(t)}static maxLength(t){return n=t,t=>ve(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null;var n}static pattern(t){return function(n){if(!n)return b;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),o=>{if(A(o.value))return null;const i=o.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Ge(t)}static composeAsync(t){return xe(t)}}function De(n){return t=>A(t.value)||!ve(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}function b(n){return null}function we(n){return null!=n}function Fe(n){const t=(0,r.QGY)(n)?(0,m.D)(n):n;return(0,r.CqO)(t),t}function Ne(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Se(n,t){return t.map(e=>e(n))}function Te(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function Ge(n){if(!n)return null;const t=n.filter(we);return 0==t.length?null:function(e){return Ne(Se(e,t))}}function z(n){return null!=n?Ge(Te(n)):null}function xe(n){if(!n)return null;const t=n.filter(we);return 0==t.length?null:function(e){return function(...n){if(1===n.length){const t=n[0];if((0,V.k)(t))return h(t,null);if((0,O.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return h(e.map(o=>t[o]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return h(n=1===n.length&&(0,V.k)(n[0])?n[0]:n,null).pipe((0,g.U)(e=>t(...e)))}return h(n,null)}(Se(e,t).map(Fe)).pipe((0,g.U)(Ne))}}function K(n){return null!=n?xe(Te(n)):null}function Pe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Be(n){return n._rawValidators}function ke(n){return n._rawAsyncValidators}function Q(n){return n?Array.isArray(n)?n:[n]:[]}function q(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ze(n,t){const e=Q(t);return Q(n).forEach(i=>{q(e,i)||e.push(i)}),e}function qe(n,t){return Q(t).filter(e=>!q(n,e))}let Ie=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=z(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,o){return!!this.control&&this.control.hasError(e,o)}getError(e,o){return this.control?this.control.getError(e,o):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n}),n})(),p=(()=>{class n extends Ie{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(n)))(o||n)}}(),n.\u0275dir=r.lG2({type:n,features:[r.qOj]}),n})();class D extends Ie{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ue{constructor(t){this._cd=t}is(t){var e,o,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(o=this._cd)||void 0===o?void 0:o.control)||void 0===i?void 0:i[t])}}let Re=(()=>{class n extends Ue{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(D,2))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))},features:[r.qOj]}),n})(),Le=(()=>{class n extends Ue{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(p,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,o){2&e&&r.ekj("ng-untouched",o.is("untouched"))("ng-touched",o.is("touched"))("ng-pristine",o.is("pristine"))("ng-dirty",o.is("dirty"))("ng-valid",o.is("valid"))("ng-invalid",o.is("invalid"))("ng-pending",o.is("pending"))("ng-submitted",o.is("submitted"))},features:[r.qOj]}),n})();function G(n,t){te(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&He(n,t)})}(n,t),function(n,t){const e=(o,i)=>{t.valueAccessor.writeValue(o),i&&t.viewToModelUpdate(o)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&He(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=o=>{t.valueAccessor.setDisabledState(o)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function R(n,t,e=!0){const o=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(o),t.valueAccessor.registerOnTouched(o)),H(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function L(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function te(n,t){const e=Be(n);null!==t.validator?n.setValidators(Pe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const o=ke(n);null!==t.asyncValidator?n.setAsyncValidators(Pe(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]);const i=()=>n.updateValueAndValidity();L(t._rawValidators,i),L(t._rawAsyncValidators,i)}function H(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Be(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(d=>d!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=ke(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(d=>d!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const o=()=>{};return L(t._rawValidators,o),L(t._rawAsyncValidators,o),e}function He(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function j(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const x="VALID",Y="INVALID",w="PENDING",P="DISABLED";function oe(n){return(se(n)?n.validators:n)||null}function We(n){return Array.isArray(n)?z(n):n||null}function ie(n,t){return(se(t)?t.asyncValidators:n)||null}function $e(n){return Array.isArray(n)?K(n):n||null}function se(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class ae{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=We(this._rawValidators),this._composedAsyncValidatorFn=$e(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===Y}get pending(){return this.status==w}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=We(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=$e(t)}addValidators(t){this.setValidators(Ze(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ze(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(qe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(qe(t,this._rawAsyncValidators))}hasValidator(t){return q(this._rawValidators,t)}hasAsyncValidator(t){return q(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=w,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=P,this.errors=null,this._forEachChild(o=>{o.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=x,this._forEachChild(o=>{o.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===w)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;const e=Fe(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(o=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(o,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let o=n;return t.forEach(i=>{o=o instanceof N?o.controls.hasOwnProperty(i)?o.controls[i]:null:o instanceof le&&o.at(i)||null}),o}(this,t)}getError(t,e){const o=e?this.get(e):this;return o&&o.errors?o.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?Y:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus(Y)?Y:x}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){se(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class F extends ae{constructor(t=null,e,o){super(oe(e),ie(o,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(o=>o(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){j(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){j(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class N extends ae{constructor(t,e,o){super(oe(e),ie(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,o={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(o=>{this._throwIfControlMissing(o),this.controls[o].setValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(o=>{this.controls[o]&&this.controls[o].patchValue(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,o)=>(t[o]=e instanceof F?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,o)=>!!o._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const o=this.controls[e];o&&t(o,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const o=this.controls[e];if(this.contains(e)&&t(o))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,o)=>((e.enabled||this.disabled)&&(t[o]=e.value),t))}_reduceChildren(t,e){let o=t;return this._forEachChild((i,s)=>{o=e(o,i,s)}),o}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,o)=>{if(void 0===t[o])throw new Error(`Must supply a value for form control with name: '${o}'.`)})}}class le extends ae{constructor(t,e,o){super(oe(e),ie(o,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,o={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:o.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,o={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((o,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((o,i)=>{this.at(i)&&this.at(i).patchValue(o,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((o,i)=>{o.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof F?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,o)=>!!o._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,o)=>{t(e,o)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,o)=>{if(void 0===t[o])throw new Error(`Must supply a value for form control at index: ${o}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({}),n})();const de=new r.OlP("NgModelWithFormControlWarning"),Lt={provide:p,useExisting:(0,r.Gpc)(()=>W)};let W=(()=>{class n extends p{constructor(e,o){super(),this.validators=e,this.asyncValidators=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(e),this._setAsyncValidators(o)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(H(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const o=this.form.get(e.path);return G(o,e),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),o}getControl(e){return this.form.get(e.path)}removeControl(e){R(e.control||null,e,!1),j(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,o){this.form.get(e.path).setValue(o)}onSubmit(e){return this.submitted=!0,function(n,t){n._syncPendingControls(),t.forEach(e=>{const o=e.control;"submit"===o.updateOn&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const o=e.control,i=this.form.get(e.path);o!==i&&(R(o||null,e),i instanceof F&&(G(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const o=this.form.get(e.path);(function(n,t){te(n,t)})(o,e),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const o=this.form.get(e.path);o&&function(n,t){return H(n,t)}(o,e)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){te(this.form,this),this._oldForm&&H(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(f,10),r.Y36(M,10))},n.\u0275dir=r.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,o){1&e&&r.NdJ("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([Lt]),r.qOj,r.TTD]}),n})();const Yt={provide:D,useExisting:(0,r.Gpc)(()=>fe)};let fe=(()=>{class n extends D{constructor(e,o,i,s,d){super(),this._ngModelWarningConfig=d,this._added=!1,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=function(n,t){if(!t)return null;let e,o,i;return Array.isArray(t),t.forEach(s=>{s.constructor===Z?e=s:function(n){return Object.getPrototypeOf(n.constructor)===c}(s)?o=s:i=s}),i||o||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(p,13),r.Y36(f,10),r.Y36(M,10),r.Y36(a,10),r.Y36(de,8))},n.\u0275dir=r.lG2({type:n,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([Yt]),r.qOj,r.TTD]}),n._ngModelWarningSentOnce=!1,n})();const on={provide:f,useExisting:(0,r.Gpc)(()=>_e),multi:!0};let _e=(()=>{class n{constructor(){this._validator=b}ngOnChanges(e){"minlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this.enabled()?this._validator(e):null}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=this.enabled()?De(function(n){return"number"==typeof n?n:parseInt(n,10)}(this.minlength)):b}enabled(){return null!=this.minlength}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=r.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(e,o){2&e&&r.uIk("minlength",o.enabled()?o.minlength:null)},inputs:{minlength:"minlength"},features:[r._Bn([on]),r.TTD]}),n})(),mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[tt]]}),n})(),_t=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:de,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[mt]}),n})(),un=(()=>{class n{group(e,o=null){const i=this._reduceControls(e);let _,s=null,d=null;return null!=o&&(function(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(o)?(s=null!=o.validators?o.validators:null,d=null!=o.asyncValidators?o.asyncValidators:null,_=null!=o.updateOn?o.updateOn:void 0):(s=null!=o.validator?o.validator:null,d=null!=o.asyncValidator?o.asyncValidator:null)),new N(i,{asyncValidators:d,updateOn:_,validators:s})}control(e,o,i){return new F(e,o,i)}array(e,o,i){const s=e.map(d=>this._createControl(d));return new le(s,o,i)}_reduceControls(e){const o={};return Object.keys(e).forEach(i=>{o[i]=this._createControl(e[i])}),o}_createControl(e){return e instanceof F||e instanceof N||e instanceof le?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=(0,r.Yz7)({factory:function(){return new n},token:n,providedIn:_t}),n})()},49:($,E,u)=>{u.d(E,{G:()=>h});var r=u(639),y=u(3071);let C=(()=>{class l{constructor(){}firstLetter(a){return a[0].toUpperCase()}}return l.\u0275fac=function(a){return new(a||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var V=u(8583);function g(l,c){if(1&l&&(r.TgZ(0,"div",1),r.TgZ(1,"div",2),r.TgZ(2,"div",3),r.TgZ(3,"div",4),r.TgZ(4,"div",5),r._uU(5," Profile "),r.qZA(),r.TgZ(6,"div",6),r.TgZ(7,"div",7),r.TgZ(8,"span"),r._uU(9),r.qZA(),r.qZA(),r.TgZ(10,"div",8),r.TgZ(11,"div",9),r.TgZ(12,"div",10),r.TgZ(13,"div",11),r.TgZ(14,"label"),r._uU(15,"Full name"),r.qZA(),r.TgZ(16,"p"),r._uU(17),r.qZA(),r.qZA(),r.TgZ(18,"div",11),r.TgZ(19,"label"),r._uU(20,"Email"),r.qZA(),r.TgZ(21,"p"),r._uU(22),r.qZA(),r.qZA(),r.TgZ(23,"div",11),r.TgZ(24,"label"),r._uU(25,"Account"),r.qZA(),r.TgZ(26,"p"),r._uU(27),r.qZA(),r.qZA(),r.qZA(),r.TgZ(28,"div",10),r.TgZ(29,"div",11),r.TgZ(30,"label"),r._uU(31,"Account Status"),r.qZA(),r.TgZ(32,"p"),r._uU(33),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(34,"div",12),r.TgZ(35,"button",13),r._uU(36,"Close"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&l){const a=r.oxw();r.xp6(9),r.Oqu(a.utilsService.firstLetter(a.identity.fullName)),r.xp6(8),r.Oqu(a.identity.fullName),r.xp6(5),r.Oqu(a.identity.email),r.xp6(5),r.Oqu("ADMIN_ROLE"===a.identity.role?"Admin Account":"User Account"),r.xp6(6),r.Oqu(!1===a.identity.status?"Disavailale":"Active")}}let O=(()=>{class l{constructor(a,v){this.utilsService=a,this.userService=v,this.identity=this.userService.getIdentity()}ngOnInit(){}}return l.\u0275fac=function(a){return new(a||l)(r.Y36(C),r.Y36(y.K))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-profile"]],decls:1,vars:1,consts:[["class","modal fade modal-custom modal-custom--profile","id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",4,"ngIf"],["id","profileModal","tabindex","-1","aria-labelledby","profileModalLabel","aria-hidden","true",1,"modal","fade","modal-custom","modal-custom--profile"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body","profile"],[1,"user-info__image"],[1,"profile__content"],[1,"row"],[1,"col-md-6"],[1,"profile__group"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"]],template:function(a,v){1&a&&r.YNc(0,g,37,5,"div",0),2&a&&r.Q6J("ngIf",v.identity)},directives:[V.O5],styles:[".profile[_ngcontent-%COMP%] > .user-info__image[_ngcontent-%COMP%]{margin:auto}.profile__content[_ngcontent-%COMP%]{margin-top:2rem}.profile__group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#e2f3f5}"]}),l})();function m(l,c){if(1&l&&(r.TgZ(0,"div",16),r.TgZ(1,"div",17),r.TgZ(2,"span"),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"span",18),r._uU(5),r.qZA(),r.qZA()),2&l){const a=r.oxw();r.xp6(3),r.Oqu(a.utilsService.firstLetter(a.identity.fullName)),r.xp6(2),r.Oqu(a.identity.fullName)}}function T(l,c){if(1&l&&(r.TgZ(0,"ul",19),r.TgZ(1,"div",20),r.TgZ(2,"div",17),r.TgZ(3,"span"),r._uU(4),r.qZA(),r.qZA(),r.TgZ(5,"div",21),r.TgZ(6,"span",18),r._uU(7),r.qZA(),r.TgZ(8,"span",22),r._uU(9),r.qZA(),r.qZA(),r.qZA(),r.TgZ(10,"li"),r.TgZ(11,"a",23),r._UZ(12,"i",24),r._uU(13,"Profile"),r.qZA(),r.qZA(),r.TgZ(14,"li"),r.TgZ(15,"a",25),r._UZ(16,"i",26),r._uU(17,"Support"),r.qZA(),r.qZA(),r.TgZ(18,"li"),r.TgZ(19,"a",27),r._UZ(20,"i",28),r._uU(21,"Log out"),r.qZA(),r.qZA(),r.qZA()),2&l){const a=r.oxw();r.xp6(4),r.Oqu(a.utilsService.firstLetter(a.identity.fullName)),r.xp6(3),r.Oqu(a.identity.fullName),r.xp6(2),r.Oqu(a.identity.email)}}let h=(()=>{class l{constructor(a,v){this.userService=a,this.utilsService=v,this.identity=this.userService.getIdentity()}ngOnInit(){}logout(){this.userService.logout()}}return l.\u0275fac=function(a){return new(a||l)(r.Y36(y.K),r.Y36(C))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-header"]],decls:26,vars:2,consts:[[1,"header"],[1,"logo"],[1,"logo__text"],[1,"logo__subtext"],[1,"dropdown-custom"],["class","user-info","id","dropdownMenuButton1","data-bs-toggle","dropdown",4,"ngIf"],["class","dropdown-menu mt-4","aria-labelledby","dropdownMenuButton1",4,"ngIf"],["id","logoutModal","tabindex","-1","aria-labelledby","logoutModalLabel","aria-hidden","true",1,"modal","fade","modal-custom"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-body"],[1,"modal-custom__head"],[1,"modal-custom__body"],[1,"modal-custom__footer","float-end"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--sm",3,"click"],["data-bs-dismiss","modal",1,"btn-custom","btn-custom--gray","btn-custom--sm"],["id","dropdownMenuButton1","data-bs-toggle","dropdown",1,"user-info"],[1,"user-info__image"],[1,"user-info__user-name"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu","mt-4"],[1,"dropdown-menu__head"],[1,"d-flex","flex-column"],[1,"user-info__user-email"],["href","#","data-bs-toggle","modal","data-bs-target","#profileModal"],[1,"fas","fa-user"],["href","#"],[1,"far","fa-question-circle"],["href","#","data-bs-toggle","modal","data-bs-target","#logoutModal"],[1,"fas","fa-sign-out-alt"]],template:function(a,v){1&a&&(r.TgZ(0,"header",0),r.TgZ(1,"div",1),r.TgZ(2,"span",2),r._uU(3,"Trivia"),r.TgZ(4,"b"),r._uU(5,"Game"),r.qZA(),r.qZA(),r.TgZ(6,"span",3),r._uU(7,"Powered by Daniel Aranda"),r.qZA(),r.qZA(),r.TgZ(8,"div",4),r.YNc(9,m,6,2,"div",5),r.YNc(10,T,22,3,"ul",6),r.qZA(),r.qZA(),r.TgZ(11,"div",7),r.TgZ(12,"div",8),r.TgZ(13,"div",9),r.TgZ(14,"div",10),r.TgZ(15,"div",11),r._uU(16," Log out "),r.qZA(),r.TgZ(17,"div",12),r.TgZ(18,"p"),r._uU(19,"Are you sure you want to log out from the app?"),r.qZA(),r.qZA(),r.TgZ(20,"div",13),r.TgZ(21,"button",14),r.NdJ("click",function(){return v.logout()}),r._uU(22,"Yes"),r.qZA(),r.TgZ(23,"button",15),r._uU(24,"Cancel"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r._UZ(25,"app-profile")),2&a&&(r.xp6(9),r.Q6J("ngIf",v.identity),r.xp6(1),r.Q6J("ngIf",v.identity))},directives:[V.O5,O],styles:[""]}),l})()},3077:($,E,u)=>{u.d(E,{x:()=>V});var r=u(8583),y=u(2903),C=u(639);let V=(()=>{class g{}return g.\u0275fac=function(m){return new(m||g)},g.\u0275mod=C.oAB({type:g}),g.\u0275inj=C.cJS({imports:[[r.ez,y.m]]}),g})()},3071:($,E,u)=>{u.d(E,{K:()=>O});var r=u(2340),y=u(639),C=u(1841),V=u(6901);const g=r.N.API_URL;let O=(()=>{class m{constructor(h,l){this.http=h,this.router=l}getIdentity(){let h=JSON.parse(localStorage.getItem("identity"));return void 0!==h?h:null}register(h){return this.http.post(`${g}/users`,h)}login(h){return this.http.post(`${g}/auth/login`,h)}logout(){localStorage.clear(),this.router.navigateByUrl("/auth/login")}}return m.\u0275fac=function(h){return new(h||m)(y.LFG(C.eN),y.LFG(V.F0))},m.\u0275prov=y.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);