(this["webpackJsonpaimer-react"]=this["webpackJsonpaimer-react"]||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,u,l,s,d,h,p,j,x,b=n(0),m=n.n(b),O=n(8),f=n.n(O),v=(n(15),n(5)),g=n(3),y=n(7),w=n(4),P=n(1),E=w.a.div(a||(a=Object(g.a)(["\n"]))),I={enemies:[{name:"Slime",hp:100,maxHP:100,damage:10,xp:5},{name:"Slime",hp:100,maxHP:100,damage:10,xp:5},{name:"Slime",hp:100,maxHP:100,damage:10,xp:5},{name:"Slime Boss",hp:1e3,maxHP:1e3,damage:100,xp:10}]},k=function(e){var t=e.openGameScreen,n=Object(b.useContext)(V),a=(n.state,n.dispatch);return Object(P.jsx)(E,{children:Object(P.jsx)("button",{onClick:function(){a({type:"startGame",payload:I}),t()},children:"Dungeon 1"})})},S=n(22),L=w.a.div(r||(r=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  background-color: white;\n  padding: 24px;\n  h1 {\n    font-size: 16px;\n  }\n"]))),C=w.a.div(c||(c=Object(g.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border: 1px solid #666;\n"]))),H=w.a.div(i||(i=Object(g.a)(["\n  ","\n  background-color: red;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),M=w.a.div(o||(o=Object(g.a)(["\n  z-index: 2;\n  position: relative;\n"]))),R=function(){var e=Object(b.useContext)(V).state,t=e.enemies[e.currentEnemyIdx];return Object(P.jsxs)(L,{children:[Object(P.jsxs)("h1",{children:[t.name,", Damage: ",t.damage,", XP Gained on Kill: ",t.xp]}),Object(P.jsxs)(C,{children:[Object(P.jsxs)(M,{children:[t.hp," / ",t.maxHP]}),Object(P.jsx)(H,{percent:t.hp/t.maxHP})]})]})},D=n(2),N={hp:100,maxHP:100,damage:10,level:1,xp:0},G=function(e,t){switch(t.type){case"takeDamage":return Object(D.a)(Object(D.a)({},e),{},{hp:e.hp-t.payload.damage});case"gainXP":return Object(D.a)(Object(D.a)({},e),{},{xp:e.xp+t.payload.amount});default:return e}},z=w.a.div(u||(u=Object(g.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 150px;\n  background-color: white;\n  padding: 24px;\n  h1 {\n    font-size: 16px;\n  }\n"]))),T=w.a.div(l||(l=Object(g.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border: 1px solid #666;\n"]))),F=w.a.div(s||(s=Object(g.a)(["\n  ","\n  background-color: red;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),A=w.a.div(d||(d=Object(g.a)(["\n  z-index: 2;\n  position: relative;\n"]))),B=w.a.div(h||(h=Object(g.a)(["\n  position: relative;\n  width: calc(100% - 48px);\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  border: 1px solid #666;\n"]))),X=w.a.div(p||(p=Object(g.a)(["\n  ","\n  background-color: yellow;\n  position: absolute;\n  height: 100%;\n  top: 0;\n"])),(function(e){var t=e.percent;return{width:"".concat(Math.floor(100*t),"%")}})),J=(w.a.div(j||(j=Object(g.a)(["\n  z-index: 2;\n  position: relative;\n"]))),function(){var e,t=Object(b.useContext)(V).state.player,n=(e=t.level)*e*10;return Object(P.jsxs)(z,{children:[Object(P.jsxs)("h1",{children:["Player, Level: ",t.level,", Damage: ",t.damage]}),Object(P.jsxs)(T,{children:[Object(P.jsxs)(A,{children:[t.hp," / ",t.maxHP]}),Object(P.jsx)(F,{percent:t.hp/t.maxHP})]}),Object(P.jsxs)(B,{children:[Object(P.jsxs)(A,{children:[t.xp," / ",n]}),Object(P.jsx)(X,{percent:t.xp/n})]})]})}),U=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)},q=function(e,t){var n=Object(b.useRef)({values:t,handler:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return e.apply(void 0,a.concat([n.current.values]))}});return n.current.values=t,n.current.handler},K=function(e){var t=e.screenHandle,n=Object(b.useContext)(V),a=n.state,r=n.dispatch,c=Object(b.useContext)(Z),i=c.playerState,o=(c.playerDispatch,Object(b.useRef)(null)),u=Object(b.useState)(),l=Object(v.a)(u,2),s=l[0],d=l[1],h=Object(b.useState)(),p=Object(v.a)(h,2),j=p[0],x=p[1],m=Object(b.useRef)({x:100,y:100}),O=Object(b.useRef)([]),f=Object(b.useRef)(a);Object(b.useEffect)((function(){f.current=a}),[a]),Object(b.useEffect)((function(){var e=o.current;d(e);var n=o.current.getContext("2d");x(n);var a=window,r=a.innerWidth,c=a.innerHeight;return o.current.width=r,o.current.height=c,e.requestPointerLock(),document.addEventListener("pointerlockchange",(function(){return E(e)}),!1),document.addEventListener("click",g),function(){document.exitPointerLock(),t.exit()}}),[]),Object(b.useEffect)((function(){var e;return s&&j&&(e=S.a(w)),function(){return e&&e.stop()}}),[s,j]);var g=function(){var e=m.current.x,t=m.current.y,n=O.current,a=n.filter((function(n){var a=n.x,r=n.y,c=n.width,i=n.height;return!(e+5>=a&&e-5<=a+c&&t+5>=r&&t-5<=r+i)})),c=f.current;c.enemies[c.currentEnemyIdx];a.length===n.length?r({type:"takeDamage"}):(O.current=a,r({type:"damageEnemy",payload:{damage:i.damage}}))},y=function(e,t){var n;t.fillStyle="grey",t.fillRect(0,0,e.width,e.height),function(e){O.current.forEach((function(t){var n=t.x,a=t.y,r=t.width,c=t.height;e.fillStyle="yellow",e.fillRect(n,a,r,c)}))}(t),t.fillStyle="#f00",t.beginPath(),t.arc(m.current.x,m.current.y,5,0,(n=360,Math.PI/180*n),!0),t.fill(),t.closePath()},w=q((function(e,t){var n=Object(v.a)(t,2),a=n[0],r=n[1];a&&r&&(!function(e){if(!O.current.length&&e){var t=e.width,n=e.height,a=U(t/2-t/4,t-50-t/2),r=U(n/2-n/4,n-50-n/2);O.current=[{x:a,y:r,width:50,height:50}]}}(a),y(a,r))}),[s,j]),E=function(e){document.pointerLockElement!==e&&document.mozPointerLockElement!==e||e.addEventListener("mousemove",(function(e){return I(e)}),!1)},I=q((function(e,t){var n=Object(v.a)(t,2),a=n[0],r=n[1];if(r){var c=a.current,i=c.x,o=c.y;if(i>r.width)a.current={x:r.width-1,y:o};else if(o>r.height)a.current={x:i,y:r.height-1};else if(i<0)a.current={x:1,y:o};else if(o<0)a.current={x:i,y:1};else{var u=.4*e.movementX,l=.4*e.movementY;a.current={x:i+u,y:o+l}}}}),[m,s]);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("canvas",{ref:o}),Object(P.jsx)(R,{}),Object(P.jsx)(J,{})]})},W={status:"INITIAL",player:{hp:100,maxHP:100,damage:10,level:1,xp:0}},Y=function(e,t){switch(t.type){case"startGame":return Object(D.a)(Object(D.a)({},e),{},{status:"RUNNING",enemies:t.payload.enemies,currentEnemyIdx:0});case"nextEnemy":return Object(D.a)(Object(D.a)({},e),{},{currentEnemyIdx:e.currentEnemyIdx+1});case"damageEnemy":var n=e.enemies,a=e.currentEnemyIdx,r=n[a],c=n.slice(),i=Math.max(r.hp-10,0);c[a]=Object(D.a)(Object(D.a)({},r),{},{hp:i});var o=i?a:a+1,u=e.player;if(!i){var l=e.player.xp+r.xp,s=e.player.level,d=(p=s)*p*10;l>=d&&(l=d-l,s++),u=Object(D.a)(Object(D.a)({},e.player),{},{xp:l,level:s})}return o>=n.length?{status:"COMPLETED"}:Object(D.a)(Object(D.a)({},e),{},{player:u,enemies:c,currentEnemyIdx:o});case"takeDamage":var h=e.enemies[e.currentEnemyIdx];return Object(D.a)(Object(D.a)({},e),{},{player:Object(D.a)(Object(D.a)({},e.player),{},{hp:e.player.hp-h.damage})});case"endGame":return Object(D.a)(Object(D.a)({},e),{},{status:"INITIAL"});default:return e}var p},Q=w.a.div(x||(x=Object(g.a)(["\n"]))),V=m.a.createContext(),Z=m.a.createContext(),$=function(){var e=Object(b.useReducer)(Y,W),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(b.useReducer)(G,N),c=Object(v.a)(r,2),i=c[0],o=c[1],u=Object(y.b)();return Object(P.jsx)(V.Provider,{value:{state:n,dispatch:a},children:Object(P.jsx)(Z.Provider,{value:{playerState:i,playerDispatch:o},children:Object(P.jsxs)(Q,{children:["INITIAL"===n.status&&Object(P.jsx)(k,{openGameScreen:u.enter}),Object(P.jsx)(y.a,{handle:u,children:"RUNNING"===n.status&&u.active&&Object(P.jsx)(K,{screenHandle:u})})]})})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};f.a.render(Object(P.jsx)(m.a.StrictMode,{children:Object(P.jsx)($,{})}),document.getElementById("root")),_()}},[[20,1,2]]]);
//# sourceMappingURL=main.0167980a.chunk.js.map