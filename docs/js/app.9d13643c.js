(function(t){function e(e){for(var r,a,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)a=o[l],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-012b1db2":"27fdc727","chunk-1844e272":"f7c26833","chunk-538da47c":"3bc2ef81"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-012b1db2":1,"chunk-1844e272":1,"chunk-538da47c":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-012b1db2":"478b55bd","chunk-1844e272":"7a125ba1","chunk-538da47c":"7713d235"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],d.parentNode.removeChild(d),n(s)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}i[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3302:function(t,e,n){"use strict";var r=n("56d3"),a=n.n(r);a.a},"56d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"app"},o=s,c=(n("5c0b"),n("2877")),u=Object(c["a"])(o,a,i,!1,null,null,null),l=u.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"wrapper padding",attrs:{role:"article",id:"home"}},[n("h1",{staticClass:"screen-out"},[t._v("About")]),n("TopNav"),t._m(0)],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner"},[n("div",{staticClass:"about-overview"},[n("p",{staticClass:"featured"},[t._v("옳은가, 쉬운가, 다른가")]),n("p",[t._v("웹에이전시에서 근무하다가 현재는 프리랜서로 활동 중이다. 디자인, 퍼블리싱을 병행하여 작업하고 있지만 어느 한 분야만을 지향하지는 않으며, 서비스를 개발하는 데 있어 필요한 업무를 유연하고 다양하게 경험하기를 원한다.")]),n("p",[t._v("기획을 하든, 디자인을 하든, 퍼블리싱을 하든 최종 목표는 결국 좋은 서비스를 만드는 것이라고 생각한다. 좋은 서비스를 만들기 위해서는 늘 내가 알고 있던 것, 내가 잘하는 것 그 이상의 스펙과 그때마다 생기는 내 스스로의 갈증이 있었고, 시간과 체력이 허용되는 한 그런 것들을 해결하고자 이것저것 시도는 참 많이 해봤던 것 같다.")]),n("p",[t._v("십 년 전쯤 어디선가 읽은 한 디자이너의 인터뷰에서 발견한 '옳은가, 쉬운가, 다른가'라는 문구는 보자마자 강렬하고 선명하게 내 마음속에 각인되었고 이후로 나의 모토가 되었다. 이 세 가지 질문은 나에게 매번 다른 형상의 고민거리를 안겨주고 크고 작은 판단의 기로에 수없이 서게 만들었지만 돌이켜보면 이런 생각의 조각들이 쌓여 크진 않지만 적당한 하나의 버팀목이 되어 나를 지탱해준 것 같다. 앞으로 어떤 분야의 일을 하더라도 이 세 가지 질문은 기꺼이 던져볼 것이다.")])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("UX/UI")]),n("div",{staticClass:"description"},[n("p",[t._v("주 업무는 디자인과 퍼블리싱이지만 이런 작업을 할 때도 그 안에서의 기획과 계획이 필요하고 그런 일련의 과정들을 꽤 재미있어하는 편이다. 사용자들이 쉽게 인터페이스에 접근할 수 있는지, 내가 만든 서비스를 사용하면서 좋은 인상과 경험을 가져갈 수 있는지. 하지만 이런 문제는 사실 프로젝트의 전반적인 기획에 참여하는 롤이 아닌 이상 분명 한계가 있는 것 같다. 그리고, 나도 아직까지는 리서치 자료나 수집한 데이터들을 근거로 프로젝트의 방향성을 제시할 만큼 축적된 경험이나 노하우가 부족한 것도 사실이고. 어쨌든 좋은 서비스를 만들겠다는 본연의 목표를 가지고 조금씩 뭐라도 하다 보면 길을 찾을 수 있지 않을까 생각하고 있다.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("Design System")]),n("div",{staticClass:"description"},[n("p",[t._v("디자인과 퍼블리싱을 하면서 늘 고민했던 것은 하나의 조각들을 어떻게 반복적으로 사용하고 거기에서 변형 및 확장을 할 수 있는가였다. 내가 참여했던 프로젝트들은 매번 다르지만 그 속에는 반복적으로 해야 할 작업들이 항상 있어 왔고, 그런 것들에서 공통과 확장의 논리적인 규칙을 만들고 조합할 수 있다면 프로젝트를 좀 더 명료하고 일관성 있게 만들어 줄 것이라는 확신이 있다. 그럼에도 불구하고 사실 디자인 시스템을 경험할 수 있는 프로젝트는 거의 해본 적이 없다. 늘 돈과 시간이란 변명에 발목을 잡혀 혼자 마음만 굴뚝같은 상황이 반복되어 왔지만 한발 한발 조금씩이라도 성취해보고자 노력 중이다.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("Sketch")]),n("div",{staticClass:"description"},[n("p",[t._v("주력으로 쓰는 디자인 툴을 포토샵에서 스케치로 바꾼지는 2년 정도 되는 것 같다. 엄밀히 말하자면 관심 분야가 비주얼, 그래픽 디자인보다는 UX/UI, 디자인 시스템에 비중이 많아지다 보니 자연스레 스케치를 사용하는 시간이 많아져서 그렇지 아직도 비주얼 작업을 해야 할 때는 포토샵을 사용하고 있기 때문에 툴의 교체라기보다는 혼용에 가깝다고 볼 수 있다. 스케치 작업을 할 때는 디자인 가이드로써의 역할과 컴포넌트, 모듈의 재사용을 고려하여 심볼화하는 것에 집중하는 편이다. (내 경험상) 처음에는 일일이 심볼화하는 것에 시간이 좀 걸리더라도 여기에서 손해 본 시간과 노력은 페이지가 많아질수록, 그리고 퍼블리싱에서 그 몇 배로 보상받을 수 있는 것 같다.\n    ")]),n("p",[t._v("무조건적인 스케치 찬양론자는 아니다. 다음 프로젝트에서는 피그마를 써볼까 생각 중이다. 포토샵이 디자인 툴계의 왕좌에서 내려온 이상(오래 해먹었지 뭐), 좋은 프로그램이 있으면 언제든지 시도해 볼 생각이다. 어차피 컴퓨터 os나 프로그램 툴을 하도 이것저것 섞어 쓰다보니 사용성이나 단축키는 꼬일대로 꼬여버려서 집착을 버린지 오래됐고, 그래서인지 새로운 툴을 사용하는데 별로 두려움이나 불편함이 없긴 하니까.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("SASS")]),n("div",{staticClass:"description"},[n("p",[t._v("SASS(SCSS)의 도입은 스타일시트를 다루는 데 있어, 내게 날개를 달아준 고마운 녀석이다. 2015년에 처음 실 프로젝트에 사용했고, SASS의 도입은 스타일시트 작성의 효율적인 맛만 보게 해준 것이 아니라 점진적으로 사람이 반복적으로 해야 할 일을 컴퓨터가 자동으로 수행하게 하는 (이것이 본질적인 컴퓨터의 역할이라고 생각한다.) Task Runner까지 만나게 해주었다. (여기까지 혼자 검색하고 적용해보고 했던 꽤나 힘들었던 과정은 생략한다.) Task Runner는 webpack, grunt, gulp를 사용해봤고, 리액트나 뷰같이 자동으로 webpack이 설치되는 프로젝트가 아니면 간단하게 glup를 사용하고 있다.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("Javascript")]),n("div",{staticClass:"description"},[n("p",[t._v("퍼블리셔로서의 제일 큰 숙제이며, 이 단어를 볼 때마다 강렬한 욕구가 샘솟는다. 하지만 너무 오랫동안 해결 못하고 방치해둔 탓인지 요즘은 욕구가 막 샘솟는 것 딱 거기까지 뿐이다. (다른 거 할 게 너무 많다는 비겁한 변명과 함께...) 디자이너가 마크업을 하고 스타일시트를 작성하기까지는 크게 발상의 전환이나 개념의 정리 같은 것은 따로 필요하지 않았지만 자바스크립트는 달랐다. 나도 다른 코딩하는 디자이너들처럼 자바스크립트를 하기 전 제이쿼리부터 시작했는데, 그래도 그때는 뭔가 돔을 조작하고 이벤트를 발생시키는 시각적인 효과들로 인해 재밌다고 느끼고, 간단한 UI 로직을 짜는데 별다른 어려움이 없었다. 하지만, 자바스크립트는 마치 수학의 정석(언제적 수학의 정석이냐) 제1장 집합을 지나 2장 명제에서 탁 막힌 것과 같은 눈에 보이지 않는 데이터라는 개념의 난관에 부딪혔다. 사실 지금도 난 여기에서 정처 없이 헤매고 있는 것 같다. 그러나 나는 알고 있다. 이 구간만 지나면 방정식, 함수처럼 그나마 샤프를 분주하게 움직이며 신나게 풀 수 있는 구간이 자바스크립트에도 있다는 것을.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("vue.js")]),n("div",{staticClass:"description"},[n("p",[t._v("리액트, 앵귤러, 뷰 같은 자바스크립트 프레임워크의 등장 이후로 계속 관심을 가지고 지켜보고는 있다. 작년 말부터 그림에 빠져서 웹 공부는 등한시하고 있었는데, 이때는 코드 한 줄 문법 하나 더 아는 게 뭐가 중요하나라는 생각까지 했었던 기간이기도 하다. 코드는 아름다워야 한다며 그 한 줄 한 줄에 공을 들였던 나였기 때문에 충격과 반전이 있는 그런 슬럼프였다. 하지만 슬럼프를 극복하기 위해서는 무엇이 중요하냐보다 내가 어떤 걸 재미있어 하느냐로 부터 시작해야 할 것 같았고, 다시 코드로 돌아왔다. 원하는 화면을 마크업으로 구조화하고 스타일시트로 그려내고, 터미널에서 몇 개 모르는 명령어로 run, build, commit, push 따위 찍어대는 것이 왜 재밌는지 내 친구들에겐 이것이 더 충격과 반전이겠지만.")]),n("p",[t._v("이런 슬럼프 극복의 첫 카드로 vue.js를 공부하기로 했다. 그리고 당신이 보고 있는 이 사이트가 그 첫 결과물이다. 사실 라우터를 이용해 페이지만 연결된 아주 저급한 수준이라서 vue.js를 내 소개에 넣어야 하나 고민도 했지만, 그래도 공부를 좀 더 해나가면서 이 사이트를 가지고 계속 뭔가를 바꾸고 있지 않을까. 그런 의미에서 한 꼭지 내어주기로 결정했다.")])])]),n("section",{staticClass:"about-section"},[n("h2",{staticClass:"section-title"},[t._v("Writing")]),n("div",{staticClass:"description"},[n("p",[t._v("요즘 들어 내가 제일 목마름을 느끼고 있는 부분이 바로 글쓰기다. 구체적인 SB없이 시안을 잡을 때 메인 문구에 대해서 고민한다거나, 디자인이 다 나온 화면을 퍼블리싱할 때 보면 지루하거나 별 의미 없는 장황한 문구며 이랬다저랬다 하는 통일성 없는 버튼명 같은 것을 볼 때 내가 슬쩍 바꾼다거나(퍼블리셔가 마음대로 바꾸면 안 되지만 정말 참을 수 없을 때 슬쩍... 그러나 바꿔도 알지 못하더라는 것이 함정) 하는 그런 수많은 경험들로 인해 예전부터 글, 텍스트라는 것에 대한 기획과 일관성이 필요하다고 인지는 했었다. 이제는 더 나아가 디자인을 할 때 시각적인 측면만큼 중요한 부분이 바로 컨텍스트이며, 폰트 하나 컬러 하나 잘 쓰는 것만큼 보장받을 수 있는 것들이 바로 명료하고 유니크한 문구들이란 것을 뭐 이제는 모르는 디자이너가 있을까 싶다.")])])])])}],v=(n("3302"),{}),h=Object(c["a"])(v,d,f,!1,null,"374628d4",null),b=h.exports;r["a"].use(p["a"]);var m=new p["a"]({mode:"history",base:"/portfolio/",routes:[{path:"/",name:"home",component:b},{path:"/project",name:"project",component:function(){return n.e("chunk-538da47c").then(n.bind(null,"07bd"))}},{path:"/timeline",name:"timeline",component:function(){return n.e("chunk-1844e272").then(n.bind(null,"f67a"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-012b1db2").then(n.bind(null,"f820"))}}]}),_=n("2f62");r["a"].use(_["a"]);var g=new _["a"].Store({state:{},mutations:{},actions:{}}),C=n("0284"),k=n.n(C),y=(n("f13c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/project"}},[t._v("프로젝트")])],1),n("li",[n("router-link",{attrs:{to:"/timeline"}},[t._v("타임라인")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("내소개")])],1)])])}),S=[],w={},j=w,O=Object(c["a"])(j,y,S,!1,null,null,null),T=O.exports;r["a"].component("TopNav",T),r["a"].config.productionTip=!1,r["a"].use(k.a,{id:"UA-144930165-1",autoTracking:{screenview:!0}}),new r["a"]({router:m,store:g,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.9d13643c.js.map