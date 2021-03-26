(this["webpackJsonpaimer-react"]=this["webpackJsonpaimer-react"]||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r,a,c,i,s,o,l,u,d,h,j,b,p,x=n(1),O=n.n(x),v=n(8),m=n.n(v),f=(n(15),n(5)),y=n(4),g=n(7),E=n(3),w=n(0),I=E.a.div(r||(r=Object(y.a)(["\n"]))),P={name:"Slime",hp:100,maxHP:100,damage:10,xp:5,lvl:1},S={name:"Boogie",hp:400,maxHP:400,damage:40,xp:50,lvl:5},k={enemies:[P,P,P,{name:"Slime Boss",hp:500,maxHP:500,damage:20,xp:10}]},C={enemies:[S,S,S,{name:"Oogie Boss",hp:1500,maxHP:1500,damage:200,xp:50}]},L=function(e){var t=e.openGameScreen,n=Object(x.useContext)(te).dispatch;return Object(w.jsxs)(I,{children:[Object(w.jsx)("button",{onClick:function(){n({type:"startGame",payload:k}),t()},children:"Dungeon 1"}),Object(w.jsx)("button",{onClick:function(){n({type:"startGame",payload:C}),t()},children:"Dungeon 2"})]})},M=function(){var e=Object(x.useContext)(te),t=e.state,n=e.dispatch;return Object(w.jsxs)("div",{children:[Object(w.jsx)("br",{}),Object(w.jsxs)("span",{children:["Current Sensitivity: ",t.sensitivity]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("input",{type:"number",step:"0.01",value:t.sensitivity,onChange:function(e){return n({type:"setSensitivity",payload:{sensitivity:e.target.value}})}})]})},H=n(22),R=E.a.div(a||(a=Object(y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background-color: white;\n  padding: 24px;\n  h1 {\n    font-size: 16px;\n  }\n"]))),G=E.a.div(c||(c=Object(y.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border: 1px solid #666;\n"]))),N=E.a.div(i||(i=Object(y.a)(["\n  ","\n  background-color: red;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),D=E.a.div(s||(s=Object(y.a)(["\n  z-index: 2;\n  position: relative;\n"]))),F=function(){var e=Object(x.useContext)(te).state,t=e.enemies[e.currentEnemyIdx];return Object(w.jsxs)(R,{children:[Object(w.jsxs)("h1",{children:[t.name,", Damage: ",t.damage,", XP Gained on Kill: ",t.xp]}),Object(w.jsxs)(G,{children:[Object(w.jsxs)(D,{children:[t.hp," / ",t.maxHP]}),Object(w.jsx)(N,{percent:t.hp/t.maxHP})]})]})},T=n(2),z={hp:100,maxHP:100,level:1,xp:0},A={status:"INITIAL",player:function(){var e=localStorage.getItem("player");if(e){var t=JSON.parse(e);return t.hp=t.maxHP,t}return z}(),sensitivity:localStorage.getItem("sensitivity")||.4},B=function(e){return e*e*10},J=function(e){return e*e+10},Y=function(e,t){switch(t.type){case"setSensitivity":return Object(T.a)(Object(T.a)({},e),{},{sensitivity:t.payload.sensitivity});case"startGame":return Object(T.a)(Object(T.a)({},e),{},{status:"RUNNING",enemies:t.payload.enemies,currentEnemyIdx:0});case"nextEnemy":return Object(T.a)(Object(T.a)({},e),{},{currentEnemyIdx:e.currentEnemyIdx+1});case"damageEnemy":var n=e.enemies,r=e.currentEnemyIdx,a=n[r],c=n.slice(),i=Math.max(a.hp-t.payload.damage,0);c[r]=Object(T.a)(Object(T.a)({},a),{},{hp:i});var s=i?r:r+1,o=e.player;if(!i){var l=e.player.xp+a.xp,u=e.player.level,d=B(u);l>=d&&(l=d-l,u++),o=Object(T.a)(Object(T.a)({},e.player),{},{xp:l,level:u})}return s>=n.length?{status:"COMPLETED"}:Object(T.a)(Object(T.a)({},e),{},{player:o,enemies:c,currentEnemyIdx:s});case"takeDamage":var h=e.enemies[e.currentEnemyIdx],j=Math.max(e.player.hp-h.damage,0);return j?Object(T.a)(Object(T.a)({},e),{},{player:Object(T.a)(Object(T.a)({},e.player),{},{hp:j})}):{status:"GAME_OVER"};case"endGame":return Object(T.a)(Object(T.a)({},e),{},{status:"INITIAL"});default:return e}},U=E.a.div(o||(o=Object(y.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 150px;\n  background-color: white;\n  padding: 24px;\n  h1 {\n    font-size: 16px;\n  }\n"]))),V=E.a.div(l||(l=Object(y.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border: 1px solid #666;\n"]))),X=E.a.div(u||(u=Object(y.a)(["\n  ","\n  background-color: red;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),_=E.a.div(d||(d=Object(y.a)(["\n  z-index: 2;\n  position: relative;\n"]))),q=E.a.div(h||(h=Object(y.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  border: 1px solid #666;\n"]))),K=E.a.div(j||(j=Object(y.a)(["\n  ","\n  background-color: yellow;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),W=(E.a.div(b||(b=Object(y.a)(["\n  z-index: 2;\n  position: relative;\n"]))),function(){var e=Object(x.useContext)(te).state.player,t=B(e.level),n=J(e.level);return Object(w.jsxs)(U,{children:[Object(w.jsxs)("h1",{children:["Player, Level: ",e.level,", Damage: ",n]}),Object(w.jsxs)(V,{children:[Object(w.jsxs)(_,{children:[e.hp," / ",e.maxHP]}),Object(w.jsx)(X,{percent:e.hp/e.maxHP})]}),Object(w.jsxs)(q,{children:[Object(w.jsxs)(_,{children:[e.xp," / ",t]}),Object(w.jsx)(K,{percent:e.xp/t})]})]})}),Q=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},Z=function(e,t){var n=Object(x.useRef)({values:t,handler:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.apply(void 0,r.concat([n.current.values]))}});return n.current.values=t,n.current.handler},$=function(e){var t=e.screenHandle,n=Object(x.useContext)(te),r=n.state,a=n.dispatch,c=Object(x.useRef)(null),i=Object(x.useState)(),s=Object(f.a)(i,2),o=s[0],l=s[1],u=Object(x.useState)(),d=Object(f.a)(u,2),h=d[0],j=d[1],b=Object(x.useRef)({x:100,y:100}),p=Object(x.useRef)([]),O=Object(x.useRef)(r);Object(x.useEffect)((function(){O.current=r}),[r]),Object(x.useEffect)((function(){var e=c.current;l(e);var n=c.current.getContext("2d");j(n);var r=window,a=r.innerWidth,i=r.innerHeight;return c.current.width=a,c.current.height=i,e.requestPointerLock(),document.addEventListener("pointerlockchange",(function(){return g(e)}),!1),document.addEventListener("click",v),function(){document.exitPointerLock(),t.exit()}}),[]),Object(x.useEffect)((function(){var e;return o&&h&&(e=H.a(y)),function(){return e&&e.stop()}}),[o,h]);var v=function(){var e=b.current.x,t=b.current.y,n=p.current,c=n.filter((function(n){var r=n.x,a=n.y,c=n.width,i=n.height;return!(e+5>=r&&e-5<=r+c&&t+5>=a&&t-5<=a+i)})),i=O.current;i.enemies[i.currentEnemyIdx];c.length===n.length?a({type:"takeDamage"}):(p.current=c,a({type:"damageEnemy",payload:{damage:J(r.player.level)}}))},m=function(e,t){var n;t.fillStyle="grey",t.fillRect(0,0,e.width,e.height),function(e){p.current.forEach((function(t){var n=t.x,r=t.y,a=t.width,c=t.height;e.fillStyle="yellow",e.fillRect(n,r,a,c)}))}(t),t.fillStyle="#f00",t.beginPath(),t.arc(b.current.x,b.current.y,5,0,(n=360,Math.PI/180*n),!0),t.fill(),t.closePath()},y=Z((function(e,t){var n=Object(f.a)(t,2),r=n[0],a=n[1];r&&a&&(!function(e){if(!p.current.length&&e){var t=e.width,n=e.height,r=Q(t/2-t/4,t-50-t/2),a=Q(n/2-n/4,n-50-n/2);p.current=[{x:r,y:a,width:50,height:50}]}}(r),m(r,a))}),[o,h]),g=function(e){document.pointerLockElement!==e&&document.mozPointerLockElement!==e||e.addEventListener("mousemove",(function(e){return E(e)}),!1)},E=Z((function(e,t){var n=Object(f.a)(t,2),a=n[0],c=n[1];if(c){var i=a.current,s=i.x,o=i.y;if(s>c.width)a.current={x:c.width-1,y:o};else if(o>c.height)a.current={x:s,y:c.height-1};else if(s<0)a.current={x:1,y:o};else if(o<0)a.current={x:s,y:1};else{var l=e.movementX*(r.sensitivity||1),u=e.movementY*(r.sensitivity||1);a.current={x:s+l,y:o+u}}}}),[b,o]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("canvas",{ref:c}),Object(w.jsx)(F,{}),Object(w.jsx)(W,{})]})},ee=E.a.div(p||(p=Object(y.a)(["\n"]))),te=O.a.createContext(),ne=function(){var e=Object(x.useReducer)(Y,A),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(g.b)();return Object(x.useEffect)((function(){var e=n.sensitivity,t=n.player;e&&function(e){localStorage.setItem("sensitivity",e)}(e),t&&function(e){localStorage.setItem("player",e)}(JSON.stringify(t))}),[n.sensitivity,n.player]),Object(w.jsx)(te.Provider,{value:{state:n,dispatch:r},children:Object(w.jsxs)(ee,{children:["INITIAL"===n.status&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(L,{openGameScreen:a.enter}),Object(w.jsx)(M,{})]}),Object(w.jsx)(g.a,{handle:a,children:"RUNNING"===n.status&&a.active&&Object(w.jsx)($,{screenHandle:a})}),"COMPLETED"===n.status&&Object(w.jsx)(w.Fragment,{children:"You're a beast lol"}),"GAME_OVER"===n.status&&Object(w.jsx)(w.Fragment,{children:"You suck lol"})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};m.a.render(Object(w.jsx)(O.a.StrictMode,{children:Object(w.jsx)(ne,{})}),document.getElementById("root")),re()}},[[20,1,2]]]);
//# sourceMappingURL=main.c625eae0.chunk.js.map