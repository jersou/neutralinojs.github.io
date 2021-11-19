(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),b=i,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||r;return t?a.a.createElement(m,l(l({ref:n},u),{},{components:t})):a.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(8),r=(t(0),t(105)),o={title:"neu CLI"},l={unversionedId:"cli/neu-cli",id:"cli/neu-cli",isDocsHomePage:!1,title:"neu CLI",description:"npm",source:"@site/docs/cli/neu-cli.md",slug:"/cli/neu-cli",permalink:"/docs/cli/neu-cli",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/cli/neu-cli.md",version:"current",sidebar:"docs",previous:{title:"Global Variables",permalink:"/docs/api/global-variables"},next:{title:"Internal CLI Arguments",permalink:"/docs/cli/internal-cli-arguments"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Commands",id:"commands",children:[{value:"<code>neu create &lt;binaryName&gt;</code>",id:"neu-create-binaryname",children:[]},{value:"<code>neu build [--release]</code>",id:"neu-build---release",children:[]},{value:"<code>neu run [--mode=&lt;mode&gt;, --disable-auto-realod, --arch=&lt;arch&gt;]</code>",id:"neu-run---modemode---disable-auto-realod---archarch",children:[]},{value:"<code>neu update</code>",id:"neu-update",children:[]},{value:"<code>neu version</code>",id:"neu-version",children:[]}]},{value:"Change log",id:"change-log",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@neutralinojs/neu",alt:"npm"}),"\n",Object(r.b)("img",{parentName:"p",src:"https://img.shields.io/npm/dt/@neutralinojs/neu",alt:"npm"})),Object(r.b)("p",null,"You can easily manage Neutralinojs applications with neu CLI."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"Run the following command on your terminal to install the CLI globally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"  $ npm i -g @neutralinojs/neu\n")),Object(r.b)("h2",{id:"commands"},"Commands"),Object(r.b)("h3",{id:"neu-create-binaryname"},Object(r.b)("inlineCode",{parentName:"h3"},"neu create <binaryName>")),Object(r.b)("p",null,"Creates a new Neutralinojs app using the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs-minimal"},"minimal template"),".\n",Object(r.b)("inlineCode",{parentName:"p"},"<binaryName>")," is the name of your application's binary file. For example, if you used ",Object(r.b)("inlineCode",{parentName:"p"},"myapp"),", the final application binaries will become ",Object(r.b)("inlineCode",{parentName:"p"},"myapp-<platform>"),"."),Object(r.b)("h3",{id:"neu-build---release"},Object(r.b)("inlineCode",{parentName:"h3"},"neu build [--release]")),Object(r.b)("p",null,"This command will create the ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," folder. Thereafter, it will create the ",Object(r.b)("inlineCode",{parentName:"p"},"res.neu")," resource file from your application resources.\nFinally, this command will create a zip file of the application bundle only if ",Object(r.b)("inlineCode",{parentName:"p"},"--release")," flag is provided."),Object(r.b)("h3",{id:"neu-run---modemode---disable-auto-realod---archarch"},Object(r.b)("inlineCode",{parentName:"h3"},"neu run [--mode=<mode>, --disable-auto-realod, --arch=<arch>]")),Object(r.b)("p",null,"Executes the current application (This will execute specific binary depending on your operating system).\nThis command will change execution permissions (using the ",Object(r.b)("inlineCode",{parentName:"p"},"chmod")," command) of the binary files on Linux and macOS.\nIt will enable live-reload for the current application. In other words, when a modification happens to application resources, the Neutralinojs application will be reloaded automatically."),Object(r.b)("h3",{id:"neu-update"},Object(r.b)("inlineCode",{parentName:"h3"},"neu update")),Object(r.b)("p",null,"This command will update the existing Neutralinojs binaries and client library from the internet."),Object(r.b)("h3",{id:"neu-version"},Object(r.b)("inlineCode",{parentName:"h3"},"neu version")),Object(r.b)("p",null,"Prints all version information. If this command is executed from a Neutralinojs application directory,\nyou will see project-specific version details. Otherwise, you will see global version details."),Object(r.b)("h2",{id:"change-log"},"Change log"),Object(r.b)("p",null,"Please check the version history from ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@neutralinojs/neu"},"npm"),"."))}p.isMDXComponent=!0}}]);