webpackJsonp([14],{CJE1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("kfHR"),a=t.n(o),r=t("yG2O"),s=t("gyMJ"),i={name:"verifyInfo",data:function(){return{phone1:133,phone2:1234}},methods:{_sendVerify:function(){var e=Object(r.a)();this.showPhone(e),s.a.sendVerifyFn(e).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},showPhone:function(e){this.phone1=a()(e).slice(0,3).join(""),this.phone2=a()(e).slice(-4).join("")},verify:function(){var e=Object(r.a)();s.a.verifyFn(e,"111").then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},created:function(){this._sendVerify()}},c={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("div",{staticClass:"info"},[t("p",[e._v("验证码已发送至")]),e._v(" "),t("p",[t("span",[e._v("+86")]),e._v(" "),t("span",[e._v("\n        "+e._s(e.phone1)+"\n        "),t("span",{staticClass:"middle"},[e._v("****")]),e._v("\n        "+e._s(e.phone2)+"\n      ")])])]),e._v(" "),t("div",{staticClass:"renew"},[e._v("重新获取")])])},staticRenderFns:[]};var u=t("C7Lr")(i,c,!1,function(e){t("MPVa")},"data-v-320d3f2f",null).exports,l=t("lC5x"),f=t.n(l),v=t("J0Oq"),d=t.n(v),h={name:"verifyCode",data:function(){return{value:"",showKeyboard:!0}},methods:{onInput:function(e){var n=this;return d()(f.a.mark(function t(){var o,a,i,c,u,l;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.value=(n.value+e).slice(0,4),4!==n.value.length){t.next=12;break}return o=localStorage.getItem("nickname"),a=Object(r.a)(),i=n.password,c=n.value,t.next=8,s.a.registerFn(c,a,i,o);case 8:u=t.sent,l=u.data,console.log(l),console.log("发送请求");case 12:case"end":return t.stop()}},t,n)}))()},onDelete:function(){this.value=this.value.slice(0,this.value.length-1)}}},p={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"code"},[t("van-password-input",{attrs:{value:e.value,length:4,gutter:15,focused:e.showKeyboard},on:{focus:function(n){e.showKeyboard=!0}}}),e._v(" "),t("van-number-keyboard",{attrs:{show:e.showKeyboard},on:{input:e.onInput,delete:e.onDelete,blur:function(n){e.showKeyboard=!1}}})],1)},staticRenderFns:[]};var _={name:"phoneVerify",components:{verifyInfo:u,verifyCode:t("C7Lr")(h,p,!1,function(e){t("CdC1")},"data-v-0b53757f",null).exports}},y={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"wrapper"},[n("verify-info"),this._v(" "),n("verify-code")],1)},staticRenderFns:[]};var w=t("C7Lr")(_,y,!1,function(e){t("c1S1")},"data-v-6aced85e",null);n.default=w.exports},CdC1:function(e,n){},MPVa:function(e,n){},c1S1:function(e,n){},yG2O:function(e,n,t){"use strict";n.a=function(){return new RegExp(/\d*$/).exec(window.location.hash)[0]}}});
//# sourceMappingURL=14.91a5da038a12def80fbb.js.map