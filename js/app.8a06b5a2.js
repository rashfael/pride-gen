(function(t){function o(o){for(var r,a,n=o[0],s=o[1],c=o[2],d=0,u=[];d<n.length;d++)a=n[d],l[a]&&u.push(l[a][0]),l[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(o);while(u.length)u.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],r=!0,n=1;n<e.length;n++){var s=e[n];0!==l[s]&&(r=!1)}r&&(i.splice(o--,1),t=a(a.s=e[0]))}return t}var r={},l={app:0},i=[];function a(o){if(r[o])return r[o].exports;var e=r[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)a.d(e,r,function(o){return t[o]}.bind(null,r));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=o,n=n.slice();for(var c=0;c<n.length;c++)o(n[c]);var f=s;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"12eb":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),l=e("358a"),i=(e("d5e8"),e("5363"),e("e983"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("generator"),e("github-corner")],1)}),a=[],n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"generator"}},[e("div",{staticClass:"controls"},[e("div",{directives:[{name:"scrollbar",rawName:"v-scrollbar.y",modifiers:{y:!0}}],staticClass:"settings"},[e("div",{staticClass:"colors"},[t._l(t.colors,function(o,r){return e("div",{staticClass:"color"},[e("bunt-input",{staticClass:"input-color",attrs:{type:"color",name:"color-"+(r+1),label:"Color "+(r+1),value:o.color},on:{input:function(o){return t.changeColor(r,o)}}}),e("bunt-input",{staticClass:"input-ratio",attrs:{type:"number",name:"ratio-"+(r+1),label:"Ratio",value:o.ratio},on:{input:function(o){return t.changeRatio(r,o)}}}),e("bunt-icon-button",{on:{click:function(o){return t.deleteColor(r)}}},[t._v("close")])],1)}),e("bunt-button",{attrs:{id:"btn-add-color"},on:{click:t.addColor}},[t._v("add color")])],2),e("bunt-input",{attrs:{name:"stripe-curve",label:"Stripe Curve",hint:"<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths' target='_blank'>svg path string</a>. Use relative commands!","hint-is-html":!0},model:{value:t.stripeCurve,callback:function(o){t.stripeCurve=o},expression:"stripeCurve"}}),e("bunt-input",{attrs:{name:"transform",label:"Transform",hint:"<a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform' target='_blank'>svg transform</a>. Transforms the complete flag.","hint-is-html":!0},model:{value:t.transform,callback:function(o){t.transform=o},expression:"transform"}}),e("bunt-input",{attrs:{name:"mask",label:"Mask",hint:"Content of a <a href='https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask' target='_blank'>svg mask definition</a>.","hint-is-html":!0},model:{value:t.mask,callback:function(o){t.mask=o},expression:"mask"}}),e("bunt-switch",{attrs:{name:"add-logo",label:"add datenobservatorium logo"},model:{value:t.addLogo,callback:function(o){t.addLogo=o},expression:"addLogo"}})],1),e("a",{staticClass:"bunt-button",attrs:{id:"btn-export",href:t.downloadFile,download:"pride.svg"}},[t._v("export")])]),e("svg",{attrs:{viewBox:"0 0 100 100"},domProps:{innerHTML:t._s(t.SVGContent)}}),e("div",{directives:[{name:"scrollbar",rawName:"v-scrollbar.y",modifiers:{y:!0}}],staticClass:"presets"},t._l(t.presets,function(o){return e("preset",{attrs:{preset:o},on:{select:function(e){return t.selectPreset(o)}}})}),1),e("canvas",{ref:"faviconCanvas",attrs:{height:"32px",width:"32px"}})])},s=[],c=(e("c5f6"),100),f=0;function d(t){var o=t.colors.slice(),e=t.transform,r=t.mask,l=t.addLogo,i=t.stripeCurve||"l 100 0",a="",n=c/t.colors.reduce(function(t,o){var e=o.ratio;return t+e},0);f++,r&&(a+='<mask id="mask-'.concat(f,'">').concat(r,"</mask>")),a+='<g transform="'.concat(e,'"'),r&&(a+=' mask="url(#mask-'.concat(f,')"')),a+=">";var s=o.pop();a+='<rect width="100" height="100" fill="'.concat(s.color,'" />');for(var d=100-n*s.ratio,h=o.length-1;h>=0;h--){var p=o[h];a+='<path d="M 0 0 L 0 '.concat(d," ").concat(i,' L 100 0" fill="').concat(p.color,'" />'),d-=n*p.ratio}return a+="</g>",l&&(a+=u),a}var u='<g transform="matrix(.55003 0 0 .55003 -6.1312 51.114)"><path d="m102.05-81.526c-21.09 0-41.308 8.3778-56.218 23.283-14.911 14.909-23.283 35.133-23.283 56.218 0 43.907 35.593 79.5 79.5 79.5 43.907-1e-5 79.499-35.593 79.499-79.5 0-43.907-35.591-79.501-79.499-79.501zm-.007 1.9519c42.831 0 77.548 34.723 77.548 77.548 0 42.831-34.717 77.548-77.548 77.548-42.825 0-77.542-34.717-77.542-77.548 0-42.825 34.717-77.548 77.542-77.548z" style="fill-rule:evenodd;fill:#fff;stroke-width:1.0994"/><path d="m41.868 46.78c15.106-3.7335 36.544-6.0643 60.307-6.0643 23.769 0 45.201 2.3307 60.307 6.0643-13.061 17.269-35.21 28.642-60.307 28.642-25.097 0-47.239-11.372-60.307-28.642z" style="fill-rule:evenodd;fill:#57da00;stroke-width:1.4659"/><path d="m137.63 24.762-1.5274-1.523h-68.765l-1.5289 1.523v7.8849l1.5289 1.523h68.765l1.5274-1.523z" style="fill-rule:evenodd;fill:#ff7200;stroke-width:1.4659"/><path d="m115.17-40.693c-.33128-.45148-.37819-1.0481-.12019-1.545.25213-.45882.54383-.87659.88244-1.2489 1.0584-1.1507 2.4626-1.6784 3.8538-1.4424 19.05 3.0739 34.144 21.827 36.617 45.499.18323 1.7283-.24041 3.4697-1.1624 4.7802-.92203 1.312-2.256 2.0625-3.6588 2.0625-6.6814.01-18.467.01-27.004.01-1.0935 0-2.124-.51452-2.7764-1.397-.65376-.87512-.85313-2.0097-.54382-3.0578 1.3398-4.6717 2.0727-9.8418 2.0727-15.282 0-11.293-3.1619-21.432-8.1605-28.379z" style="fill-rule:evenodd;fill:#fff;stroke-linejoin:round;stroke-width:2.1988;stroke:#00355e"/><path d="m88.279-40.693c.32542-.45148.37233-1.0481.11434-1.545-.24627-.45882-.54384-.87659-.88245-1.2489-1.0584-1.1507-2.4612-1.6784-3.8538-1.4424-19.05 3.0739-34.144 21.827-36.611 45.499-.1891 1.7283.23454 3.4697 1.1566 4.7802.92789 1.312 2.2618 2.0625 3.6588 2.0625 6.6814.01 18.467.01 27.004.01 1.0935 0 2.124-.51452 2.7763-1.397.65378-.87512.85313-2.0097.54384-3.0578-1.3339-4.6717-2.0669-9.8418-2.0669-15.282 0-11.293 3.156-21.432 8.1605-28.379z" style="fill-rule:evenodd;fill:#fff;paint-order:normal;stroke-linejoin:round;stroke-width:2.1982;stroke:#00355e"/><path d="m84.683-24.305c0-12.763 33.839-12.763 33.839 0 0 12.757-7.58 31-16.92 31-9.339 0-16.919-18.243-16.919-31z" style="fill-rule:evenodd;fill:#6aafeb;stroke-width:1.4659"/><path d="m118.52-24.374c0 8.3833-7.5756 15.18-16.92 15.18-9.3449 0-16.919-6.7972-16.919-15.18 0-4.0253 1.7854-7.8849 4.9575-10.73 3.1721-2.8467 7.473-4.443 11.961-4.443 9.3449 0 16.92 6.7899 16.92 15.173z" style="fill-rule:evenodd;fill:#fff;stroke-linejoin:round;stroke-width:2.1988;stroke:#00355e"/><path d="m115.43-24.374c0 6.8544-6.1903 12.409-13.829 12.409-7.6328 0-13.822-5.5542-13.822-12.409 0-3.2865 1.4541-6.441 4.0472-8.7659 2.5946-2.3249 6.1097-3.6368 9.7744-3.6368 7.6386 0 13.829 5.5542 13.829 12.403z" style="fill-rule:evenodd;fill:#00355e;stroke-width:1.4659"/><path d="m102.18-13.34-.57901.01173c-6.7899 0-12.31-4.9473-12.31-11.039 0-6.098 5.5204-11.045 12.31-11.045 6.7972 0 12.312 4.9473 12.312 11.045l-.0118.51598c-.30342-5.2859-5.1818-9.5003-11.148-9.5003-2.1651 0-4.1865.55556-5.8986 1.5172 1.913.02933 3.4536 1.4321 3.4536 3.1501 0 1.74-1.5758 3.1487-3.5107 3.1487-1.9232 0-3.4814-1.3794-3.5093-3.0974-1.0774 1.5348-1.696 3.3495-1.696 5.2962 0 5.3489 4.6952 9.7289 10.588 9.9972z" style="fill-rule:evenodd;fill:#ff7200;stroke-width:1.4659"/><path d="m142.44 25.929c.57167 0 1.1111-.27998 1.4307-.75492 2.7089-4.0194 4.5295-8.395 5.3768-12.919.0924-.5028-.0514-1.0188-.37818-1.4087-.32542-.38846-.80622-.61274-1.3164-.61274-12.499-.004-79.415-.004-91.914-.004-.51012 0-.99679.22281-1.3222.61126-.33275.39578-.47054.91176-.38406 1.4146.859 4.5236 2.6796 8.8992 5.3885 12.919.31956.46908.859.75492 1.4307.75492z" style="fill-rule:evenodd;fill:#fff;stroke-linejoin:round;stroke-width:2.1988;stroke:#00355e"/><path d="m152.86 50.504c.4984 0 .96747-.21108 1.3002-.58341.32542-.37233.4808-.86487.41777-1.3574-.89858-6.3384-6.0863-12.334-14.722-16.932-.43536-.23454-.92203-.35473-1.4146-.35473h-73.447c-.49253 0-.9792.12019-1.4146.34887-8.6354 4.6043-13.823 10.6-14.71 16.938-.05717.49252.09088.97919.41777 1.3456.32689.37234.79596.58342 1.2885.58342 12.872.0118 89.418.0118 102.28.0118z" style="fill-rule:evenodd;fill:#fff;stroke-linejoin:round;stroke-width:2.1988;stroke:#00355e"/><path d="m45.694 51.632 7.215-.87072 10.226-4.506 5.818 2.2643 20.808-.58148 15.941-7.838 13.073 6.6477 8.9564-4.7875 7.2722 3.5621 11.034 2.9317 19.817-6.5509c-4.5515 7.3234-10.649 13.782-17.904 19.027l-44.762-8.2557c-.37087-.0689-.76078-.063-1.1272.01-2.7602.56729-14.728 3.0182-14.728 3.0182l-29.408-.33715s-1.1624 2.2266-2.1885 4.1909c-.13046.25213-.3093.47493-.52038.66404-3.4638-2.5931-6.6536-5.4735-9.5222-8.5885z" style="fill-rule:evenodd;fill:#83e23d;stroke-width:1.4659"/><path d="m70.59-54.115c0 2.9552-2.3938 5.3475-5.3416 5.3475-2.9552 0-5.3489-2.3923-5.3489-5.3475 0-2.9493 2.3938-5.3431 5.3489-5.3431 2.9479 0 5.3416 2.3938 5.3416 5.3431z" style="fill-rule:evenodd;fill:#83e23d;stroke-width:1.4659"/><g transform="matrix(1.0994 0 0 1.0994 -116.63 -103.76)"><path d="m154.96 64.181c0 4.1866-3.3959 7.5825-7.5838 7.5825-4.1866 0-7.5825-3.3959-7.5825-7.5825 0-4.1879 3.3959-7.5838 7.5825-7.5838 4.1879 0 7.5838 3.3959 7.5838 7.5838z" style="fill-rule:evenodd;fill:#6ab0eb;stroke-width:1.3333"/><path d="m145.2 67.296-.17733-1.5106-2.6413-1.208-.005-.04267 2.3026-1.7706-.17733-1.5106-3.5626 2.8906.13067 1.1413z" style="fill:#0077e8;stroke-width:1.3333"/><path d="m145.72 67.144 1.1773-.13466 2.0626-6.0625-1.172.13466z" style="fill:#0077e8;stroke-width:1.3333"/><path d="m150.3 66.701 3.5626-2.8906-.12933-1.14-4.1252-2.0106.17199 1.5106 2.6453 1.208.005.036-2.3026 1.7773z" style="fill:#0077e8;stroke-width:1.3333"/></g><path d="m124.89-71.447c-.0279 10.649.0865 10.765 7.4334 10.655-7.3762.10995-7.4906.28731-7.4334 10.657-.0572-10.427-.20522-10.628-7.4319-10.657 7.2721.02933 7.4041.10407 7.4319-10.655z" style="fill-rule:evenodd;fill:#fff;stroke-width:1.4659"/><path d="m95.498-69.209c-1.1272 0-2.2091-.41191-3.0109-1.1448-.80183-.73293-1.2489-1.7297-1.2489-2.7661 0 1.0364-.45148 2.0332-1.2474 2.7661-.80183.73293-1.8851 1.1448-3.0123 1.1448 1.1272 0 2.2105.41191 3.0123 1.1448.79596.73293 1.2474 1.7297 1.2474 2.7661 0-1.0364.44709-2.0332 1.2489-2.7661.80183-.73293 1.8836-1.1448 3.0109-1.1448z" style="fill-rule:evenodd;fill:#fff;stroke-width:1.4659"/><path d="m101.57-65.298c-.56727 0-1.1111-.20669-1.5054-.57315-.40164-.36646-.62445-.86339-.62445-1.3794 0 .51598-.22867 1.0129-.62446 1.3794-.40018.36646-.94402.57315-1.5113.57315.56729 0 1.1111.20669 1.5113.57315.39578.36646.62446.86486.62446 1.3852 0-.52038.22281-1.0188.62445-1.3852.39433-.36647.93817-.57315 1.5054-.57315z" style="fill-rule:evenodd;fill:#fff;stroke-width:1.4659"/><path d="m84.751-57.689c-.83554 0-1.6374-.30343-2.2266-.84727-.59074-.54384-.92203-1.2768-.92203-2.0434h-.0058c0 .76665-.33275 1.4996-.92203 2.0434-.58928.54383-1.3911.84727-2.2266.84727.83554 0 1.6374.3049 2.2266.84874.58928.54384.92203 1.2768.92203 2.0434h.0058c0-.76665.33128-1.4996.92203-2.0434.58928-.54384 1.3911-.84874 2.2266-.84874z" style="fill-rule:evenodd;fill:#fff;stroke-width:1.4659"/><path d="m61.738-51.516 2.6283.32102.08062-.62446-1.5113-.18323.57755-4.7113 1.5054.18323.07476-.61859-2.6283-.32102z" style="fill:#4bbe00;stroke-width:1.4659"/><path d="m65.403-51.069 2.6283.32102.72707-5.9558-2.6342-.31956-.0733.6186 1.5054.18177-.57315 4.7128-1.5054-.18323z" style="fill:#4bbe00;stroke-width:1.4659"/><g transform="matrix(1.0994 0 0 1.0994 100.24 -125.51)"><path d="m55.525 76.43c0 4.1199-3.3386 7.4585-7.4585 7.4585s-7.4638-3.3386-7.4638-7.4585 3.3439-7.4625 7.4638-7.4625 7.4585 3.3426 7.4585 7.4625z" style="fill-rule:evenodd;fill:#ff7200;stroke-width:1.3333"/><path d="m48.936 74.019c.21866-1.1253 1.188-1.9746 2.3439-1.9746 1.3173 0 2.3906 1.0986 2.3906 2.4586 0 1.3546-1.0733 2.4586-2.3906 2.4586-.60932 0-1.1613-.23466-1.584-.61998.44266-.17733.76131-.62532.76131-1.1413 0-.68132-.53732-1.2293-1.1986-1.2293-.10933 0-.21866.016-.32266.048z" style="fill-opacity:.21177;fill-rule:evenodd;fill:#2f1500;stroke-width:1.3333"/><path d="m48.936 80.217c0 .68265-.53599 1.2293-1.192 1.2293-.66265 0-1.1986-.54665-1.1986-1.2293 0-.67732.53599-1.2293 1.1986-1.2293.65598 0 1.192.55199 1.192 1.2293z" style="fill-opacity:.10196;fill-rule:evenodd;fill:#2f1500;stroke-width:1.3333"/><path d="m45.676 71.977c0 .34399-.27066.61465-.59865.61465-.32932 0-.59998-.27066-.59998-.61465 0-.33866.27066-.61465.59998-.61465.32799 0 .59865.27599.59865.61465z" style="fill-opacity:.10196;fill-rule:evenodd;fill:#2f1500;stroke-width:1.3333"/><path d="m48.583 80.586.79065-.45199-.39599-.68265-.34799.20266c-.72398.41199-.92798.43199-1.1573.037332-.22266-.39066-.39066-.76665-.64532-1.2093-.34932-.60932-.76531-.65065-1.5106-.34399l-.01467-.03067c.63998-.48932.81198-.86931.46266-1.4786-.25466-.44266-.49999-.77598-.72398-1.1666-.22399-.39599-.10933-.56265.61465-.97998l.34932-.20266-.39066-.68265-.78665.45332c-1.2346.71332-1.62 1.2973-1.14 2.1306.30666.53065.53065.70798.80131 1.1773.15066.25999.02133.69732-.95864 1.28l.43866.76132c.99998-.55199 1.4426-.44266 1.588-.188.27066.47466.30666.75598.61465 1.2866.47865.83865 1.1773.79731 2.4119.088z" style="fill-opacity:.59608;fill:#833a00;stroke-width:1.3333"/><path d="m50.515 79.477.78665-.45199c1.2333-.70932 1.6186-1.2973 1.14-2.1306-.30666-.53199-.54132-.70265-.81198-1.172-.152-.25999-.02133-.69732.96798-1.2866l-.43732-.75998c-1.0106.56265-1.448.45332-1.5986.192-.27066-.47332-.29733-.75998-.60398-1.2906-.47999-.83865-1.1773-.79731-2.4119-.08933l-.79198.45332.39599.68265.34932-.204c.71332-.40532.91598-.42666 1.1453-.03067.224.39066.40132.76532.65732 1.2026.34799.60932.76531.65198 1.5093.34399l.016.032c-.63998.48932-.81198.87464-.46399 1.4786.25599.44266.49065.78131.71465 1.172.22399.39599.10933.56265-.60532.97331l-.34799.204z" style="fill-opacity:.59608;fill:#833a00;stroke-width:1.3333"/></g></g>',h=[{colors:[{color:"#e40303",ratio:1.4},{color:"#ff8c00",ratio:1},{color:"#ffed00",ratio:1},{color:"#008026",ratio:1},{color:"#004dff",ratio:1},{color:"#750787",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!0},{colors:[{color:"#5BCEFA",ratio:1.25},{color:"#F5A9B8",ratio:1},{color:"#FFFFFF",ratio:1},{color:"#F5A9B8",ratio:1},{color:"#5BCEFA",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1},{colors:[{color:"#000000",ratio:2},{color:"#a3a3a3",ratio:1},{color:"#FFFFFF",ratio:1},{color:"#800080",ratio:2}],stripeCurve:"l 60 10",transform:"",mask:'<path d="M 49.474599,0.83408356 64.702459,31.6891 98.752992,36.636933 74.113795,60.654213 79.930319,94.567159 49.474598,78.555637 19.018875,94.567157 24.835401,60.654213 0.19620489,36.636931 34.246737,31.6891 Z" fill="white"/>',offsetTop:7,addLogo:!1},{colors:[{color:"#d60270",ratio:2},{color:"#9b4f96",ratio:1},{color:"#0038a8",ratio:2}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1},{colors:[{color:"#ff218c",ratio:1.2},{color:"#ffd800",ratio:1},{color:"#21b1ff",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1},{colors:[{color:"#FFF430",ratio:1.25},{color:"#FFFFFF",ratio:1},{color:"#9C59D1",ratio:1},{color:"#000000",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1},{colors:[{color:"#b57edc",ratio:1.2},{color:"#FFFFFF",ratio:1},{color:"#4a8123",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1}],p=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"preset"},[e("svg",{attrs:{viewBox:"0 0 100 100"},domProps:{innerHTML:t._s(t.SVGContent)},on:{click:function(o){return t.$emit("select")}}})])},m=[],v={props:{preset:Object},data:function(){return{}},computed:{SVGContent:function(){return d({colors:this.preset.colors,stripeCurve:this.preset.stripeCurve,transform:this.preset.transform,mask:this.preset.mask,addLogo:this.preset.addLogo})}},created:function(){},mounted:function(){this.$nextTick(function(){})},methods:{}},b=v,g=(e("f700"),e("2877")),k=Object(g["a"])(b,p,m,!1,null,null,null),w=k.exports,C=1e3,y={components:{Preset:w},data:function(){return{colors:[{color:"#e40303",ratio:1.5},{color:"#ff8c00",ratio:1},{color:"#ffed00",ratio:1},{color:"#008026",ratio:1},{color:"#004dff",ratio:1},{color:"#750787",ratio:1}],stripeCurve:"c 30 4, 40 -15, 100 0",transform:"rotate(-20, 50, 50)",mask:'<circle cx="50" cy="50" r="50" fill="white"/>',offsetTop:7,addLogo:!1,presets:h}},computed:{SVGContent:function(){return d({colors:this.colors.slice(),stripeCurve:this.stripeCurve,transform:this.transform,mask:this.mask,addLogo:this.addLogo})},SVGFile:function(){return'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">'+this.SVGContent+"</svg>"},downloadFile:function(){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(this.SVGFile)}},watch:{SVGContent:function(){var t=this;this.urlWriteDebounceTimeout||(this.updateURL(),this.drawFavicon(),this.urlWriteDebounceTimeout=setTimeout(function(){t.urlWriteDebounceTimeout=null,t.updateURL(),t.drawFavicon()},C))}},created:function(){},mounted:function(){var t=window.location.hash.substr(1);if(t)try{Object.assign(this,JSON.parse(atob(t)))}catch(o){console.error("Could not parse hash",o)}this.drawFavicon()},methods:{changeColor:function(t,o){this.$set(this.colors[t],"color",o)},changeRatio:function(t,o){this.$set(this.colors[t],"ratio",Number(o))},deleteColor:function(t){this.colors.splice(t,1)},addColor:function(){this.colors.push({color:"#ffffff",ratio:1})},selectPreset:function(t){this.colors=t.colors.slice(),this.stripeCurve=t.stripeCurve,this.transform=t.transform,this.mask=t.mask,this.addLogo=t.addLogo},updateURL:function(){var t=btoa(JSON.stringify({colors:this.colors,stripeCurve:this.stripeCurve,transform:this.transform,mask:this.mask,addLogo:this.addLogo}));window.location.hash=t},drawFavicon:function(){var t=this.$refs.faviconCanvas,o=new Blob([this.SVGFile],{type:"image/svg+xml;charset=utf-8"}),e=URL.createObjectURL(o),r=new Image;r.onload=function(){t.getContext("2d").drawImage(this,0,0),URL.revokeObjectURL(e);var o=document.querySelector("link[rel*='icon']");o.href=t.toDataURL()},r.src=e}}},x=y,F=(e("dd51"),Object(g["a"])(x,n,s,!1,null,null,null)),L=F.exports,z=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a",{staticClass:"github-corner",attrs:{href:"https://github.com/rashfael/pride-gen","aria-label":"View source on GitHub"}},[e("svg",{attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},S=[],_={components:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){this.$nextTick(function(){})},methods:{}},T=_,j=(e("9790"),Object(g["a"])(T,z,S,!1,null,null,null)),O=j.exports,G={name:"App",components:{Generator:L,GithubCorner:O}},U=G,V=(e("7faf"),Object(g["a"])(U,i,a,!1,null,null,null)),M=V.exports;r["a"].config.productionTip=!1,r["a"].use(l["a"]),new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"586c":function(t,o,e){},"7faf":function(t,o,e){"use strict";var r=e("586c"),l=e.n(r);l.a},9790:function(t,o,e){"use strict";var r=e("d51c"),l=e.n(r);l.a},a712:function(t,o,e){},d51c:function(t,o,e){},dd51:function(t,o,e){"use strict";var r=e("12eb"),l=e.n(r);l.a},e983:function(t,o,e){},f700:function(t,o,e){"use strict";var r=e("a712"),l=e.n(r);l.a}});
//# sourceMappingURL=app.8a06b5a2.js.map