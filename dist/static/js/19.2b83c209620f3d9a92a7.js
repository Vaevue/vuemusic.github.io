webpackJsonp([19],{And1:function(e,a){},H1nw:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("ISPS"),i={name:"",props:{imgUrl:{type:String},tracks:{type:Array},updateTime:{type:String},idx:{type:String}},methods:{searchIdx:function(e){switch(e){case"云音乐新歌榜":e=0;break;case"云音乐热歌榜":e=1;break;case"网易原创歌曲榜":e=2;break;case"云音乐飙升榜":e=3;break;case"云音乐说唱榜":e=23;break;case"云音乐ACG音乐榜":e=22;break;case"KTV唛榜":e=7;break;case"iTunes榜":e=8;break;case"日本Oricon周榜":e=10;break;case"Hit FM Top榜":e=9;break;case"台湾Hito排行榜":e=20;break;case"Beatport全球电子舞曲榜":e=21;break;case"法国 NRJ Vos Hits 周榜":e=20;break;case"UK排行榜":e=5;break;case"美国Billboard周榜":e=6}this.$emit("showIdxPage",e)}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"list",on:{click:function(a){return e.searchIdx(e.idx)}}},[t("div",{staticClass:"img-info"},[t("img",{attrs:{src:e.imgUrl+"?param=200y200",alt:""}}),e._v(" "),t("span",{staticClass:"time"},[e._v(e._s(e.updateTime))])]),e._v(" "),t("div",{staticClass:"list-con"},e._l(e.tracks,function(a,s){return t("div",{key:s,staticClass:"info"},[e._v("\n        "+e._s(s+1+".")+"\n        "),t("span",[e._v(e._s(a.first))]),e._v(" -\n        "),t("span",[e._v(e._s(a.second))])])}),0)])])},staticRenderFns:[]};var n=t("C7Lr")(i,r,!1,function(e){t("OXmm")},"data-v-59b2daa6",null).exports,d=t("f5+r"),c=t("mdS2"),o=t("gyMJ"),l={name:"",data:function(){return{load:!0,officialIdxList:[],recommendedIdxList:[],moreIdxList:[]}},created:function(){this._getIdxInfo()},methods:{_getIdxInfo:function(){var e=this;o.a.topListFn().then(function(a){var t=a.data;200===t.code&&(e.officialIdxList=t.list.slice(0,4),e.recommendedIdxList=t.list.slice(4,10),e.moreIdxList=t.list.slice(10),e.load=!1)})},returnPage:function(){this.$router.go(-1)},showIdxPage:function(e){this.$router.push({name:"albumPage",params:{idxId:e}})}},components:{generalNav:s.a,idxCard:n,imgCard:d.a,pageLoading:c.a}},m={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"wrapper pd23"},[t("general-nav",{staticClass:"titleFixed",on:{returnPage:e.returnPage}},[t("span",{staticClass:"text"},[e._v("排行榜")])]),e._v(" "),t("page-loading",{directives:[{name:"show",rawName:"v-show",value:e.load,expression:"load"}]}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.load,expression:"!load"}]},[t("div",{staticClass:"title"},[e._v("官方榜")]),e._v(" "),e._l(e.officialIdxList,function(a,s){return t("idx-card",{key:s,attrs:{imgUrl:a.coverImgUrl,tracks:a.tracks,idx:a.name,updateTime:a.updateFrequency},on:{showIdxPage:e.showIdxPage}})}),e._v(" "),t("div",{staticClass:"title"},[e._v("推荐榜")]),e._v(" "),t("div",{staticClass:"img-col"},e._l(e.recommendedIdxList,function(a,s){return t("img-card",{key:s,attrs:{imgUrl:a.coverImgUrl,dec:a.name,updateTime:a.updateFrequency,idx:a.name},on:{showIdxPage:e.showIdxPage}})}),1),e._v(" "),t("div",{staticClass:"title"},[e._v("更多榜单")]),e._v(" "),t("div",{staticClass:"img-col"},e._l(e.moreIdxList,function(a,s){return t("img-card",{key:s,attrs:{imgUrl:a.coverImgUrl,dec:a.name,updateTime:a.updateFrequency,idx:a.name},on:{showIdxPage:e.showIdxPage}})}),1)],2)],1)},staticRenderFns:[]};var u=t("C7Lr")(l,m,!1,function(e){t("And1")},"data-v-4899b5da",null);a.default=u.exports},OXmm:function(e,a){}});
//# sourceMappingURL=19.2b83c209620f3d9a92a7.js.map