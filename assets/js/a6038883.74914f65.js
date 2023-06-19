"use strict";(self.webpackChunkcaspardb=self.webpackChunkcaspardb||[]).push([[931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const s={title:"Outils de RE",sidebar_label:"Outils",pagination_label:"Outils de RE",description:"Quelques outils de RE",keywords:["docs","Reverse Engineering"]},i="Outils",o={unversionedId:"reverse/outils",id:"reverse/outils",title:"Outils de RE",description:"Quelques outils de RE",source:"@site/docs/04-reverse/01-outils.md",sourceDirName:"04-reverse",slug:"/reverse/outils",permalink:"/random-veille/reverse/outils",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04-reverse/01-outils.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Outils de RE",sidebar_label:"Outils",pagination_label:"Outils de RE",description:"Quelques outils de RE",keywords:["docs","Reverse Engineering"]},sidebar:"tutorialSidebar",previous:{title:"Accueil Reverse",permalink:"/random-veille/reverse/"},next:{title:"RE - Tutoriels",permalink:"/random-veille/reverse/tutos"}},l={},u=[{value:"D\xe9sassembleurs",id:"d\xe9sassembleurs",level:2},{value:"Debuggers",id:"debuggers",level:2},{value:"Analyse Symbolique",id:"analyse-symbolique",level:2},{value:"Autres",id:"autres",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"outils"},"Outils"),(0,n.kt)("p",null,"Voici une liste de plusieurs outils de reverse engineering"),(0,n.kt)("h2",{id:"d\xe9sassembleurs"},"D\xe9sassembleurs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://hex-rays.com/ida-pro/"},"IDA Pro")," : Un des outils les plus populaires pour l'analyse de code binaire, permettant de d\xe9compiler, de d\xe9sassembler et d'analyser des programmes ex\xe9cutables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://ghidra-sre.org/"},"Ghidra")," : Un framework d'analyse de code d\xe9velopp\xe9 par la National Security Agency (NSA) des \xc9tats-Unis, offrant des fonctionnalit\xe9s similaires \xe0 IDA Pro.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://rada.re/n/radare2.html"},"Radare2")," : Une bo\xeete \xe0 outils open source pour l'analyse binaire, fournissant des fonctionnalit\xe9s de d\xe9sassemblage, de d\xe9compilation, de d\xe9bogage et de manipulation de code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cutter.re/"},"Cutter")," : Une interface utilisateur graphique (GUI) bas\xe9e sur Radare2, offrant une exp\xe9rience de reverse engineering conviviale."))),(0,n.kt)("h2",{id:"debuggers"},"Debuggers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://x64dbg.com/#features"},"x64DBG")," : x64dbg est un d\xe9bogueur open source pour les plateformes Windows qui se concentre sur le reverse engineering et l'analyse de logiciels. Il est sp\xe9cifiquement con\xe7u pour le d\xe9bogage des programmes 64 bits (x64)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.ollydbg.de/"},"OllyDbg")," : Un d\xe9bogueur de code binaire pour Windows, utilis\xe9 pour l'analyse dynamique de programmes ex\xe9cutables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.sourceware.org/gdb/"},"GDB")," : GDB, the GNU Project debugger, allows you to see what is going on `inside' another program while it executes -- or what another program was doing at the moment it crashed.\nGDB can run on most popular UNIX and Microsoft Windows variants, as well as on Mac OS X.\n"))),(0,n.kt)("h2",{id:"analyse-symbolique"},"Analyse Symbolique"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Z3Prover/z3"},"Z3")," : Z3 est un solveur de contraintes automatique d\xe9velopp\xe9 par Microsoft Research. Il est utilis\xe9 pour r\xe9soudre des probl\xe8mes complexes impliquant des contraintes logiques et arithm\xe9tiques. Z3 peut \xeatre utilis\xe9 dans le cadre du reverse engineering pour r\xe9soudre des probl\xe8mes de v\xe9rification de mod\xe8les, de r\xe9tro-ing\xe9nierie de protocoles, d'optimisation de code, de d\xe9tection de vuln\xe9rabilit\xe9s, et plus encore."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://angr.io/"},"Angr")," : Angr est un framework open source d'analyse binaire d\xe9velopp\xe9 en Python. Il fournit une suite d'outils pour l'analyse automatique de programmes ex\xe9cutables, en utilisant des techniques de symbolisation, de d\xe9sassemblage et de r\xe9solution de contraintes. Angr est utilis\xe9 pour effectuer des t\xe2ches telles que la recherche de chemins d'ex\xe9cution sp\xe9cifiques, la g\xe9n\xe9ration automatique de tests et l'exploration de code.")),(0,n.kt)("h2",{id:"autres"},"Autres"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.remnux.org/"},"Remnux"),": A Linux toolkit for reverse-engineering and analyzing malicious software. REMnux provides a curated collection of free tools created by the community. Analysts can use it to investigate malware without having to find, install, and configure the tools.")))}c.isMDXComponent=!0}}]);