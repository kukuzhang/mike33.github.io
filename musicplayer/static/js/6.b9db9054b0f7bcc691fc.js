webpackJsonp([6],{583:function(t,n,e){function s(t){e(617)}var i=e(9)(e(601),e(629),s,"data-v-49f23056",null);t.exports=i.exports},585:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var s=e(63),i=e.n(s),a=e(56),r={computed:i()({},e.i(a.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},601:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(63),i=e.n(s),a=e(209),r=e.n(a),o=e(64),A=e.n(o),l=e(199),d=e.n(l),c=e(206),p=e.n(c),f=e(56),C=e(127),u=e(585);n.default={mixins:[u.a],components:{MySwitches:r.a,MyScroll:A.a,MySongList:d.a,MyNoResult:p.a},data:function(){return{switches:[{name:"我的收藏"},{name:"最近播放"}],currentIndex:0}},props:{},watch:{},methods:i()({},e.i(f.b)(["savefavoriteList","delfavoriteList","insertSong","randomPlay"]),{toggleFavoriteCls:function(t){this._isFavorite(t)?this.delfavoriteList(t):this.savefavoriteList(t)},getFavoriteCls:function(t){return this._isFavorite(t)?"icon-favorite":"icon-not-favorite"},_isFavorite:function(t){return this.favoriteList.findIndex(function(n){return t.id===n.id})>-1},switchItem:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(new C.a(t))},back:function(){this.$router.back()},random:function(){var t=0===this.currentIndex?this.favoriteList:this.playHistory;t=t.map(function(t){return new C.a(t)}),this.randomPlay({list:t})},handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.listWrapper.style.bottom=n,this.$refs.favoriteRef&&this.$refs.favoriteRef.refresh(),this.$refs.playListRef&&this.$refs.playListRef.refresh()}}),filters:{},computed:i()({},e.i(f.c)(["playHistory","favoriteList"]),{noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:1===this.currentIndex?!this.playHistory.length:void 0}}),created:function(){},mounted:function(){},destroyed:function(){}}},607:function(t,n,e){n=t.exports=e(574)(!0),n.push([t.i,".my-user[data-v-49f23056]{position:fixed;top:0;bottom:0;z-index:100;width:100%;background:#222}.my-user.slide-enter-active[data-v-49f23056],.my-user.slide-leave-active[data-v-49f23056]{-webkit-transition:all .3s;transition:all .3s}.my-user.slide-enter[data-v-49f23056],.my-user.slide-leave-to[data-v-49f23056]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.my-user .back[data-v-49f23056]{position:absolute;top:0;left:6px;z-index:50}.my-user .back .icon-back[data-v-49f23056]{display:block;padding:10px;font-size:22px;color:#ffcd32}.my-user .switches-wrapper[data-v-49f23056]{margin:10px 0 30px}.my-user .play-btn[data-v-49f23056]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid hsla(0,0%,100%,.5);color:hsla(0,0%,100%,.5);border-radius:100px;font-size:0}.my-user .play-btn .icon-play[data-v-49f23056]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.my-user .play-btn .text[data-v-49f23056]{display:inline-block;vertical-align:middle;font-size:12px}.my-user .list-wrapper[data-v-49f23056]{position:absolute;top:110px;bottom:0;width:100%}.my-user .list-wrapper .list-scroll[data-v-49f23056]{height:100%;overflow:hidden}.my-user .list-wrapper .list-scroll .list-inner[data-v-49f23056]{padding:20px 30px}.my-user .no-result-wrapper[data-v-49f23056]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["/Users/joe/www/vue-music-webapp/src/components/MyUser/MyUser.vue"],names:[],mappings:"AACA,0BACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,0FACI,2BAA6B,AAC7B,kBAAqB,CACxB,AACD,+EACI,wCAA2C,AACnC,+BAAmC,CAC9C,AACD,gCACI,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACf,AACD,2CACM,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CACpB,AACD,4CACI,kBAAsB,CACzB,AACD,oCACI,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,oCAA2C,AAC3C,yBAAgC,AAChC,oBAAqB,AACrB,WAAa,CAChB,AACD,+CACM,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACrB,AACD,0CACM,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACrB,AACD,wCACI,kBAAmB,AACnB,UAAW,AACX,SAAU,AACV,UAAY,CACf,AACD,qDACM,YAAa,AACb,eAAiB,CACtB,AACD,iEACQ,iBAAmB,CAC1B,AACD,6CACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACvC",file:"MyUser.vue",sourcesContent:["\n.my-user[data-v-49f23056] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  width: 100%;\n  background: #222;\n}\n.my-user.slide-enter-active[data-v-49f23056], .my-user.slide-leave-active[data-v-49f23056] {\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n.my-user.slide-enter[data-v-49f23056], .my-user.slide-leave-to[data-v-49f23056] {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n}\n.my-user .back[data-v-49f23056] {\n    position: absolute;\n    top: 0;\n    left: 6px;\n    z-index: 50;\n}\n.my-user .back .icon-back[data-v-49f23056] {\n      display: block;\n      padding: 10px;\n      font-size: 22px;\n      color: #ffcd32;\n}\n.my-user .switches-wrapper[data-v-49f23056] {\n    margin: 10px 0 30px 0;\n}\n.my-user .play-btn[data-v-49f23056] {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 135px;\n    padding: 7px 0;\n    margin: 0 auto;\n    text-align: center;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    color: rgba(255, 255, 255, 0.5);\n    border-radius: 100px;\n    font-size: 0;\n}\n.my-user .play-btn .icon-play[data-v-49f23056] {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 6px;\n      font-size: 16px;\n}\n.my-user .play-btn .text[data-v-49f23056] {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 12px;\n}\n.my-user .list-wrapper[data-v-49f23056] {\n    position: absolute;\n    top: 110px;\n    bottom: 0;\n    width: 100%;\n}\n.my-user .list-wrapper .list-scroll[data-v-49f23056] {\n      height: 100%;\n      overflow: hidden;\n}\n.my-user .list-wrapper .list-scroll .list-inner[data-v-49f23056] {\n        padding: 20px 30px;\n}\n.my-user .no-result-wrapper[data-v-49f23056] {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n"],sourceRoot:""}])},617:function(t,n,e){var s=e(607);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(575)("720612b3",s,!0)},629:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"my-user"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("div",{staticClass:"switches-wrapper"},[e("my-switches",{attrs:{switches:t.switches,currentIndex:t.currentIndex},on:{switch:t.switchItem}})],1),t._v(" "),e("div",{ref:"playBtn",staticClass:"play-btn",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])]),t._v(" "),e("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===t.currentIndex?e("my-scroll",{ref:"favoriteRef",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[e("div",{staticClass:"list-inner"},[e("my-song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1===t.currentIndex?e("my-scroll",{ref:"playListRef",staticClass:"list-scroll",attrs:{data:t.playHistory}},[e("div",{staticClass:"list-inner"},[e("my-song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[e("my-no-result")],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=6.b9db9054b0f7bcc691fc.js.map