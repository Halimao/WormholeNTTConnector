import{i as P,e as _,r as j,a as C,b as k,A,O as pt,S as he,x as l,o as Ho,l as Lt,j as Gt,R as B,C as z,c as Jt,d as M,f as E,T as je,E as Y,W as Ke,g as Fo,h as no,M as yo,k as St,m as ao,n as so}from"./solana-CIjJKPC4-DDalIXxg.js";import{c,b as $,S as v,x,w as at,d as Yo,H as Go,a as Jo}from"./index-dPmy3HXi-BrmjQzGt.js";import"./index-BGLdF6jF.js";import"./util--bw7gFPs-CFDtl-lf.js";import"./wallets-B2tqS5lZ-CMHWyddi.js";import"./signer-CinqaaXD-CK79ZFw-.js";import"./index-CNWcuxPc-C5KIuBWR.js";import"./index.es-CEy-pF4C-DURb_lgF.js";var Mt={},Qo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},xo={},V={};let He;const Xo=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];V.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};V.getSymbolTotalCodewords=function(t){return Xo[t]};V.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};V.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');He=t};V.isKanjiModeEnabled=function(){return typeof He<"u"};V.toSJIS=function(t){return He(t)};var pe={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},t.from=function(i,n){if(t.isValid(i))return i;try{return e(i)}catch{return n}}})(pe);function $o(){this.buffer=[],this.length=0}$o.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Zo=$o;function Ut(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Ut.prototype.set=function(t,e,i,n){const r=t*this.size+e;this.data[r]=i,n&&(this.reservedBit[r]=!0)};Ut.prototype.get=function(t,e){return this.data[t*this.size+e]};Ut.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};Ut.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var ti=Ut,Co={};(function(t){const e=V.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const n=Math.floor(i/7)+2,r=e(i),o=r===145?26:Math.ceil((r-13)/(2*n-2))*2,a=[r-7];for(let s=1;s<n-1;s++)a[s]=a[s-1]-o;return a.push(6),a.reverse()},t.getPositions=function(i){const n=[],r=t.getRowColCoords(i),o=r.length;for(let a=0;a<o;a++)for(let s=0;s<o;s++)a===0&&s===0||a===0&&s===o-1||a===o-1&&s===0||n.push([r[a],r[s]]);return n}})(Co);var ko={};const ei=V.getSymbolSize,lo=7;ko.getPositions=function(t){const e=ei(t);return[[0,0],[e-lo,0],[0,e-lo]]};var Ro={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},t.from=function(n){return t.isValid(n)?parseInt(n,10):void 0},t.getPenaltyN1=function(n){const r=n.size;let o=0,a=0,s=0,u=null,d=null;for(let y=0;y<r;y++){a=s=0,u=d=null;for(let T=0;T<r;T++){let w=n.get(y,T);w===u?a++:(a>=5&&(o+=e.N1+(a-5)),u=w,a=1),w=n.get(T,y),w===d?s++:(s>=5&&(o+=e.N1+(s-5)),d=w,s=1)}a>=5&&(o+=e.N1+(a-5)),s>=5&&(o+=e.N1+(s-5))}return o},t.getPenaltyN2=function(n){const r=n.size;let o=0;for(let a=0;a<r-1;a++)for(let s=0;s<r-1;s++){const u=n.get(a,s)+n.get(a,s+1)+n.get(a+1,s)+n.get(a+1,s+1);(u===4||u===0)&&o++}return o*e.N2},t.getPenaltyN3=function(n){const r=n.size;let o=0,a=0,s=0;for(let u=0;u<r;u++){a=s=0;for(let d=0;d<r;d++)a=a<<1&2047|n.get(u,d),d>=10&&(a===1488||a===93)&&o++,s=s<<1&2047|n.get(d,u),d>=10&&(s===1488||s===93)&&o++}return o*e.N3},t.getPenaltyN4=function(n){let r=0;const o=n.data.length;for(let a=0;a<o;a++)r+=n.data[a];return Math.abs(Math.ceil(r*100/o/5)-10)*e.N4};function i(n,r,o){switch(n){case t.Patterns.PATTERN000:return(r+o)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return o%3===0;case t.Patterns.PATTERN011:return(r+o)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(o/3))%2===0;case t.Patterns.PATTERN101:return r*o%2+r*o%3===0;case t.Patterns.PATTERN110:return(r*o%2+r*o%3)%2===0;case t.Patterns.PATTERN111:return(r*o%3+(r+o)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}t.applyMask=function(n,r){const o=r.size;for(let a=0;a<o;a++)for(let s=0;s<o;s++)r.isReserved(s,a)||r.xor(s,a,i(n,s,a))},t.getBestMask=function(n,r){const o=Object.keys(t.Patterns).length;let a=0,s=1/0;for(let u=0;u<o;u++){r(u),t.applyMask(u,n);const d=t.getPenaltyN1(n)+t.getPenaltyN2(n)+t.getPenaltyN3(n)+t.getPenaltyN4(n);t.applyMask(u,n),d<s&&(s=d,a=u)}return a}})(Ro);var ge={};const ut=pe,Ft=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Yt=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ge.getBlocksCount=function(t,e){switch(e){case ut.L:return Ft[(t-1)*4+0];case ut.M:return Ft[(t-1)*4+1];case ut.Q:return Ft[(t-1)*4+2];case ut.H:return Ft[(t-1)*4+3];default:return}};ge.getTotalCodewordsCount=function(t,e){switch(e){case ut.L:return Yt[(t-1)*4+0];case ut.M:return Yt[(t-1)*4+1];case ut.Q:return Yt[(t-1)*4+2];case ut.H:return Yt[(t-1)*4+3];default:return}};var Io={},we={};const Pt=new Uint8Array(512),Qt=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)Pt[e]=t,Qt[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)Pt[e]=Pt[e-255]})();we.log=function(t){if(t<1)throw new Error("log("+t+")");return Qt[t]};we.exp=function(t){return Pt[t]};we.mul=function(t,e){return t===0||e===0?0:Pt[Qt[t]+Qt[e]]};(function(t){const e=we;t.mul=function(i,n){const r=new Uint8Array(i.length+n.length-1);for(let o=0;o<i.length;o++)for(let a=0;a<n.length;a++)r[o+a]^=e.mul(i[o],n[a]);return r},t.mod=function(i,n){let r=new Uint8Array(i);for(;r.length-n.length>=0;){const o=r[0];for(let s=0;s<n.length;s++)r[s]^=e.mul(n[s],o);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},t.generateECPolynomial=function(i){let n=new Uint8Array([1]);for(let r=0;r<i;r++)n=t.mul(n,new Uint8Array([1,e.exp(r)]));return n}})(Io);const Eo=Io;function Fe(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Fe.prototype.initialize=function(t){this.degree=t,this.genPoly=Eo.generateECPolynomial(this.degree)};Fe.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=Eo.mod(e,this.genPoly),n=this.degree-i.length;if(n>0){const r=new Uint8Array(this.degree);return r.set(i,n),r}return i};var oi=Fe,To={},dt={},Ye={};Ye.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var et={};const So="[0-9]+",ii="[A-Z $%*+\\-./:]+";let zt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";zt=zt.replace(/u/g,"\\u");const ri="(?:(?![A-Z0-9 $%*+\\-./:]|"+zt+`)(?:.|[\r
]))+`;et.KANJI=new RegExp(zt,"g");et.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");et.BYTE=new RegExp(ri,"g");et.NUMERIC=new RegExp(So,"g");et.ALPHANUMERIC=new RegExp(ii,"g");const ni=new RegExp("^"+zt+"$"),ai=new RegExp("^"+So+"$"),si=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");et.testKanji=function(t){return ni.test(t)};et.testNumeric=function(t){return ai.test(t)};et.testAlphanumeric=function(t){return si.test(t)};(function(t){const e=Ye,i=et;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(r,o){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?r.ccBits[0]:o<27?r.ccBits[1]:r.ccBits[2]},t.getBestModeForData=function(r){return i.testNumeric(r)?t.NUMERIC:i.testAlphanumeric(r)?t.ALPHANUMERIC:i.testKanji(r)?t.KANJI:t.BYTE},t.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},t.isValid=function(r){return r&&r.bit&&r.ccBits};function n(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(r,o){if(t.isValid(r))return r;try{return n(r)}catch{return o}}})(dt);(function(t){const e=V,i=ge,n=pe,r=dt,o=Ye,a=7973,s=e.getBCHDigit(a);function u(w,R,g){for(let b=1;b<=40;b++)if(R<=t.getCapacity(b,g,w))return b}function d(w,R){return r.getCharCountIndicator(w,R)+4}function y(w,R){let g=0;return w.forEach(function(b){const I=d(b.mode,R);g+=I+b.getBitsLength()}),g}function T(w,R){for(let g=1;g<=40;g++)if(y(w,g)<=t.getCapacity(g,R,r.MIXED))return g}t.from=function(w,R){return o.isValid(w)?parseInt(w,10):R},t.getCapacity=function(w,R,g){if(!o.isValid(w))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=r.BYTE);const b=e.getSymbolTotalCodewords(w),I=i.getTotalCodewordsCount(w,R),h=(b-I)*8;if(g===r.MIXED)return h;const f=h-d(g,w);switch(g){case r.NUMERIC:return Math.floor(f/10*3);case r.ALPHANUMERIC:return Math.floor(f/11*2);case r.KANJI:return Math.floor(f/13);case r.BYTE:default:return Math.floor(f/8)}},t.getBestVersionForData=function(w,R){let g;const b=n.from(R,n.M);if(Array.isArray(w)){if(w.length>1)return T(w,b);if(w.length===0)return 1;g=w[0]}else g=w;return u(g.mode,g.getLength(),b)},t.getEncodedBits=function(w){if(!o.isValid(w)||w<7)throw new Error("Invalid QR Code version");let R=w<<12;for(;e.getBCHDigit(R)-s>=0;)R^=a<<e.getBCHDigit(R)-s;return w<<12|R}})(To);var Lo={};const Ne=V,Po=1335,li=21522,co=Ne.getBCHDigit(Po);Lo.getEncodedBits=function(t,e){const i=t.bit<<3|e;let n=i<<10;for(;Ne.getBCHDigit(n)-co>=0;)n^=Po<<Ne.getBCHDigit(n)-co;return(i<<10|n)^li};var zo={};const ci=dt;function yt(t){this.mode=ci.NUMERIC,this.data=t.toString()}yt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};yt.prototype.getLength=function(){return this.data.length};yt.prototype.getBitsLength=function(){return yt.getBitsLength(this.data.length)};yt.prototype.write=function(t){let e,i,n;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),n=parseInt(i,10),t.put(n,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),n=parseInt(i,10),t.put(n,r*3+1))};var ui=yt;const di=dt,Ee=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function xt(t){this.mode=di.ALPHANUMERIC,this.data=t}xt.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};xt.prototype.getLength=function(){return this.data.length};xt.prototype.getBitsLength=function(){return xt.getBitsLength(this.data.length)};xt.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=Ee.indexOf(this.data[e])*45;i+=Ee.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(Ee.indexOf(this.data[e]),6)};var hi=xt,pi=function(t){for(var e=[],i=t.length,n=0;n<i;n++){var r=t.charCodeAt(n);if(r>=55296&&r<=56319&&i>n+1){var o=t.charCodeAt(n+1);o>=56320&&o<=57343&&(r=(r-55296)*1024+o-56320+65536,n+=1)}if(r<128){e.push(r);continue}if(r<2048){e.push(r>>6|192),e.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){e.push(r>>12|224),e.push(r>>6&63|128),e.push(r&63|128);continue}if(r>=65536&&r<=1114111){e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(r&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const gi=pi,wi=dt;function $t(t){this.mode=wi.BYTE,typeof t=="string"&&(t=gi(t)),this.data=new Uint8Array(t)}$t.getBitsLength=function(t){return t*8};$t.prototype.getLength=function(){return this.data.length};$t.prototype.getBitsLength=function(){return $t.getBitsLength(this.data.length)};$t.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var fi=$t;const bi=dt,mi=V;function Ct(t){this.mode=bi.KANJI,this.data=t}Ct.getBitsLength=function(t){return t*13};Ct.prototype.getLength=function(){return this.data.length};Ct.prototype.getBitsLength=function(){return Ct.getBitsLength(this.data.length)};Ct.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=mi.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var vi=Ct,Ao={exports:{}};(function(t){var e={single_source_shortest_paths:function(i,n,r){var o={},a={};a[n]=0;var s=e.PriorityQueue.make();s.push(n,0);for(var u,d,y,T,w,R,g,b,I;!s.empty();){u=s.pop(),d=u.value,T=u.cost,w=i[d]||{};for(y in w)w.hasOwnProperty(y)&&(R=w[y],g=T+R,b=a[y],I=typeof a[y]>"u",(I||b>g)&&(a[y]=g,s.push(y,g),o[y]=d))}if(typeof r<"u"&&typeof a[r]>"u"){var h=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(h)}return o},extract_shortest_path_from_predecessor_list:function(i,n){for(var r=[],o=n;o;)r.push(o),i[o],o=i[o];return r.reverse(),r},find_path:function(i,n,r){var o=e.single_source_shortest_paths(i,n,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(i){var n=e.PriorityQueue,r={},o;i=i||{};for(o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);return r.queue=[],r.sorter=i.sorter||n.default_sorter,r},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var r={value:i,cost:n};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Ao);var yi=Ao.exports;(function(t){const e=dt,i=ui,n=hi,r=fi,o=vi,a=et,s=V,u=yi;function d(h){return unescape(encodeURIComponent(h)).length}function y(h,f,p){const m=[];let S;for(;(S=h.exec(p))!==null;)m.push({data:S[0],index:S.index,mode:f,length:S[0].length});return m}function T(h){const f=y(a.NUMERIC,e.NUMERIC,h),p=y(a.ALPHANUMERIC,e.ALPHANUMERIC,h);let m,S;return s.isKanjiModeEnabled()?(m=y(a.BYTE,e.BYTE,h),S=y(a.KANJI,e.KANJI,h)):(m=y(a.BYTE_KANJI,e.BYTE,h),S=[]),f.concat(p,m,S).sort(function(L,O){return L.index-O.index}).map(function(L){return{data:L.data,mode:L.mode,length:L.length}})}function w(h,f){switch(f){case e.NUMERIC:return i.getBitsLength(h);case e.ALPHANUMERIC:return n.getBitsLength(h);case e.KANJI:return o.getBitsLength(h);case e.BYTE:return r.getBitsLength(h)}}function R(h){return h.reduce(function(f,p){const m=f.length-1>=0?f[f.length-1]:null;return m&&m.mode===p.mode?(f[f.length-1].data+=p.data,f):(f.push(p),f)},[])}function g(h){const f=[];for(let p=0;p<h.length;p++){const m=h[p];switch(m.mode){case e.NUMERIC:f.push([m,{data:m.data,mode:e.ALPHANUMERIC,length:m.length},{data:m.data,mode:e.BYTE,length:m.length}]);break;case e.ALPHANUMERIC:f.push([m,{data:m.data,mode:e.BYTE,length:m.length}]);break;case e.KANJI:f.push([m,{data:m.data,mode:e.BYTE,length:d(m.data)}]);break;case e.BYTE:f.push([{data:m.data,mode:e.BYTE,length:d(m.data)}])}}return f}function b(h,f){const p={},m={start:{}};let S=["start"];for(let L=0;L<h.length;L++){const O=h[L],X=[];for(let Ht=0;Ht<O.length;Ht++){const Z=O[Ht],Tt=""+L+Ht;X.push(Tt),p[Tt]={node:Z,lastCount:0},m[Tt]={};for(let Ie=0;Ie<S.length;Ie++){const rt=S[Ie];p[rt]&&p[rt].node.mode===Z.mode?(m[rt][Tt]=w(p[rt].lastCount+Z.length,Z.mode)-w(p[rt].lastCount,Z.mode),p[rt].lastCount+=Z.length):(p[rt]&&(p[rt].lastCount=Z.length),m[rt][Tt]=w(Z.length,Z.mode)+4+e.getCharCountIndicator(Z.mode,f))}}S=X}for(let L=0;L<S.length;L++)m[S[L]].end=0;return{map:m,table:p}}function I(h,f){let p;const m=e.getBestModeForData(h);if(p=e.from(f,m),p!==e.BYTE&&p.bit<m.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(p)+`.
 Suggested mode is: `+e.toString(m));switch(p===e.KANJI&&!s.isKanjiModeEnabled()&&(p=e.BYTE),p){case e.NUMERIC:return new i(h);case e.ALPHANUMERIC:return new n(h);case e.KANJI:return new o(h);case e.BYTE:return new r(h)}}t.fromArray=function(h){return h.reduce(function(f,p){return typeof p=="string"?f.push(I(p,null)):p.data&&f.push(I(p.data,p.mode)),f},[])},t.fromString=function(h,f){const p=T(h,s.isKanjiModeEnabled()),m=g(p),S=b(m,f),L=u.find_path(S.map,"start","end"),O=[];for(let X=1;X<L.length-1;X++)O.push(S.table[L[X]].node);return t.fromArray(R(O))},t.rawSplit=function(h){return t.fromArray(T(h,s.isKanjiModeEnabled()))}})(zo);const fe=V,Te=pe,xi=Zo,$i=ti,Ci=Co,ki=ko,We=Ro,Oe=ge,Ri=oi,Xt=To,Ii=Lo,Ei=dt,Se=zo;function Ti(t,e){const i=t.size,n=ki.getPositions(e);for(let r=0;r<n.length;r++){const o=n[r][0],a=n[r][1];for(let s=-1;s<=7;s++)if(!(o+s<=-1||i<=o+s))for(let u=-1;u<=7;u++)a+u<=-1||i<=a+u||(s>=0&&s<=6&&(u===0||u===6)||u>=0&&u<=6&&(s===0||s===6)||s>=2&&s<=4&&u>=2&&u<=4?t.set(o+s,a+u,!0,!0):t.set(o+s,a+u,!1,!0))}}function Si(t){const e=t.size;for(let i=8;i<e-8;i++){const n=i%2===0;t.set(i,6,n,!0),t.set(6,i,n,!0)}}function Li(t,e){const i=Ci.getPositions(e);for(let n=0;n<i.length;n++){const r=i[n][0],o=i[n][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?t.set(r+a,o+s,!0,!0):t.set(r+a,o+s,!1,!0)}}function Pi(t,e){const i=t.size,n=Xt.getEncodedBits(e);let r,o,a;for(let s=0;s<18;s++)r=Math.floor(s/3),o=s%3+i-8-3,a=(n>>s&1)===1,t.set(r,o,a,!0),t.set(o,r,a,!0)}function Le(t,e,i){const n=t.size,r=Ii.getEncodedBits(e,i);let o,a;for(o=0;o<15;o++)a=(r>>o&1)===1,o<6?t.set(o,8,a,!0):o<8?t.set(o+1,8,a,!0):t.set(n-15+o,8,a,!0),o<8?t.set(8,n-o-1,a,!0):o<9?t.set(8,15-o-1+1,a,!0):t.set(8,15-o-1,a,!0);t.set(n-8,8,1,!0)}function zi(t,e){const i=t.size;let n=-1,r=i-1,o=7,a=0;for(let s=i-1;s>0;s-=2)for(s===6&&s--;;){for(let u=0;u<2;u++)if(!t.isReserved(r,s-u)){let d=!1;a<e.length&&(d=(e[a]>>>o&1)===1),t.set(r,s-u,d),o--,o===-1&&(a++,o=7)}if(r+=n,r<0||i<=r){r-=n,n=-n;break}}}function Ai(t,e,i){const n=new xi;i.forEach(function(u){n.put(u.mode.bit,4),n.put(u.getLength(),Ei.getCharCountIndicator(u.mode,t)),u.write(n)});const r=fe.getSymbolTotalCodewords(t),o=Oe.getTotalCodewordsCount(t,e),a=(r-o)*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const s=(a-n.getLengthInBits())/8;for(let u=0;u<s;u++)n.put(u%2?17:236,8);return Bi(n,t,e)}function Bi(t,e,i){const n=fe.getSymbolTotalCodewords(e),r=Oe.getTotalCodewordsCount(e,i),o=n-r,a=Oe.getBlocksCount(e,i),s=n%a,u=a-s,d=Math.floor(n/a),y=Math.floor(o/a),T=y+1,w=d-y,R=new Ri(w);let g=0;const b=new Array(a),I=new Array(a);let h=0;const f=new Uint8Array(t.buffer);for(let O=0;O<a;O++){const X=O<u?y:T;b[O]=f.slice(g,g+X),I[O]=R.encode(b[O]),g+=X,h=Math.max(h,X)}const p=new Uint8Array(n);let m=0,S,L;for(S=0;S<h;S++)for(L=0;L<a;L++)S<b[L].length&&(p[m++]=b[L][S]);for(S=0;S<w;S++)for(L=0;L<a;L++)p[m++]=I[L][S];return p}function ji(t,e,i,n){let r;if(Array.isArray(t))r=Se.fromArray(t);else if(typeof t=="string"){let d=e;if(!d){const y=Se.rawSplit(t);d=Xt.getBestVersionForData(y,i)}r=Se.fromString(t,d||40)}else throw new Error("Invalid data");const o=Xt.getBestVersionForData(r,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const a=Ai(e,i,r),s=fe.getSymbolSize(e),u=new $i(s);return Ti(u,e),Si(u),Li(u,e),Le(u,i,0),e>=7&&Pi(u,e),zi(u,a),isNaN(n)&&(n=We.getBestMask(u,Le.bind(null,u,i))),We.applyMask(n,u),Le(u,i,n),{modules:u,version:e,errorCorrectionLevel:i,maskPattern:n,segments:r}}xo.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let i=Te.M,n,r;return typeof e<"u"&&(i=Te.from(e.errorCorrectionLevel,Te.M),n=Xt.from(e.version),r=We.from(e.maskPattern),e.toSJISFunc&&fe.setToSJISFunction(e.toSJISFunc)),ji(t,n,i,r)};var Bo={},Ge={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(o){return[o,o]}))),n.length===6&&n.push("F","F");const r=parseInt(n.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+n.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const n=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,o=i.scale||4;return{width:r,scale:r?4:o,margin:n,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,n){return n.width&&n.width>=i+n.margin*2?n.width/(i+n.margin*2):n.scale},t.getImageWidth=function(i,n){const r=t.getScale(i,n);return Math.floor((i+n.margin*2)*r)},t.qrToImageData=function(i,n,r){const o=n.modules.size,a=n.modules.data,s=t.getScale(o,r),u=Math.floor((o+r.margin*2)*s),d=r.margin*s,y=[r.color.light,r.color.dark];for(let T=0;T<u;T++)for(let w=0;w<u;w++){let R=(T*u+w)*4,g=r.color.light;if(T>=d&&w>=d&&T<u-d&&w<u-d){const b=Math.floor((T-d)/s),I=Math.floor((w-d)/s);g=y[a[b*o+I]?1:0]}i[R++]=g.r,i[R++]=g.g,i[R++]=g.b,i[R]=g.a}}})(Ge);(function(t){const e=Ge;function i(r,o,a){r.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=a,o.width=a,o.style.height=a+"px",o.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(r,o,a){let s=a,u=o;typeof s>"u"&&(!o||!o.getContext)&&(s=o,o=void 0),o||(u=n()),s=e.getOptions(s);const d=e.getImageWidth(r.modules.size,s),y=u.getContext("2d"),T=y.createImageData(d,d);return e.qrToImageData(T.data,r,s),i(y,u,d),y.putImageData(T,0,0),u},t.renderToDataURL=function(r,o,a){let s=a;typeof s>"u"&&(!o||!o.getContext)&&(s=o,o=void 0),s||(s={});const u=t.render(r,o,s),d=s.type||"image/png",y=s.rendererOpts||{};return u.toDataURL(d,y.quality)}})(Bo);var jo={};const Ni=Ge;function uo(t,e){const i=t.a/255,n=e+'="'+t.hex+'"';return i<1?n+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':n}function Pe(t,e,i){let n=t+e;return typeof i<"u"&&(n+=" "+i),n}function Wi(t,e,i){let n="",r=0,o=!1,a=0;for(let s=0;s<t.length;s++){const u=Math.floor(s%e),d=Math.floor(s/e);!u&&!o&&(o=!0),t[s]?(a++,s>0&&u>0&&t[s-1]||(n+=o?Pe("M",u+i,.5+d+i):Pe("m",r,0),r=0,o=!1),u+1<e&&t[s+1]||(n+=Pe("h",a),a=0)):r++}return n}jo.render=function(t,e,i){const n=Ni.getOptions(e),r=t.modules.size,o=t.modules.data,a=r+n.margin*2,s=n.color.light.a?"<path "+uo(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+uo(n.color.dark,"stroke")+' d="'+Wi(o,r,n.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',y='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+d+' shape-rendering="crispEdges">'+s+u+`</svg>
`;return typeof i=="function"&&i(null,y),y};const Oi=Qo,Me=xo,No=Bo,Mi=jo;function Je(t,e,i,n,r){const o=[].slice.call(arguments,1),a=o.length,s=typeof o[a-1]=="function";if(!s&&!Oi())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(r=i,i=e,e=n=void 0):a===3&&(e.getContext&&typeof r>"u"?(r=n,n=void 0):(r=n,n=i,i=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=e,e=n=void 0):a===2&&!e.getContext&&(n=i,i=e,e=void 0),new Promise(function(u,d){try{const y=Me.create(i,n);u(t(y,e,n))}catch(y){d(y)}})}try{const u=Me.create(i,n);r(null,t(u,e,n))}catch(u){r(u)}}Mt.create=Me.create;Mt.toCanvas=Je.bind(null,No.render);Mt.toDataURL=Je.bind(null,No.renderToDataURL);Mt.toString=Je.bind(null,function(t,e,i){return Mi.render(t,i)});const Ui=P`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var mt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let st=class extends C{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};st.styles=[_,j,Ui];mt([c()],st.prototype,"size",void 0);mt([c()],st.prototype,"name",void 0);mt([c()],st.prototype,"imageSrc",void 0);mt([c()],st.prototype,"walletIcon",void 0);mt([c({type:Boolean})],st.prototype,"installed",void 0);mt([c()],st.prototype,"badgeSize",void 0);st=mt([x("wui-wallet-image")],st);const _i=P`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Wo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const ze=4;let Zt=class extends C{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<ze;return l`${this.walletImages.slice(0,ze).map(({src:e,walletName:i})=>l`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${v(i)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(ze-this.walletImages.length)].map(()=>l` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Zt.styles=[j,_i];Wo([c({type:Array})],Zt.prototype,"walletImages",void 0);Zt=Wo([x("wui-all-wallets-image")],Zt);const Di=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var D=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let W=class extends C{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${v(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?l`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?l`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?l`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};W.styles=[j,_,Di];D([c({type:Array})],W.prototype,"walletImages",void 0);D([c()],W.prototype,"imageSrc",void 0);D([c()],W.prototype,"name",void 0);D([c()],W.prototype,"tagLabel",void 0);D([c()],W.prototype,"tagVariant",void 0);D([c()],W.prototype,"icon",void 0);D([c()],W.prototype,"walletIcon",void 0);D([c()],W.prototype,"tabIdx",void 0);D([c({type:Boolean})],W.prototype,"installed",void 0);D([c({type:Boolean})],W.prototype,"disabled",void 0);D([c({type:Boolean})],W.prototype,"showAllWallets",void 0);D([c({type:Boolean})],W.prototype,"loading",void 0);D([c({type:String})],W.prototype,"loadingSpinnerColor",void 0);W=D([x("wui-list-wallet")],W);var _t=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let kt=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.count=A.state.count,this.isFetchingRecommendedWallets=A.state.isFetchingRecommendedWallets,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t),A.subscribeKey("count",t=>this.count=t),A.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(a=>a.id==="walletConnect"),{allWallets:e}=pt.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!k.isMobile())return null;const i=A.state.featured.length,n=this.count+i,r=n<10?n:Math.floor(n/10)*10,o=r<n?`${r}+`:`${r}`;return l`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${o}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${v(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){Y.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),B.push("AllWallets")}};_t([c()],kt.prototype,"tabIdx",void 0);_t([$()],kt.prototype,"connectors",void 0);_t([$()],kt.prototype,"count",void 0);_t([$()],kt.prototype,"isFetchingRecommendedWallets",void 0);kt=_t([x("w3m-all-wallets-widget")],kt);var Qe=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let te=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(Jt.showConnector).map(e=>l`
              <wui-list-wallet
                imageSrc=${v(M.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${v(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?k.isMobile()?B.push("AllWallets"):B.push("ConnectingWalletConnect"):B.push("ConnectingExternal",{connector:t})}};Qe([c()],te.prototype,"tabIdx",void 0);Qe([$()],te.prototype,"connectors",void 0);te=Qe([x("w3m-connect-announced-widget")],te);var be=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let At=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.loading=!1,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t)),k.isTelegram()&&k.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=pt.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return l`<wui-flex flexDirection="column" gap="xs">
      ${e.map(i=>l`
          <wui-list-wallet
            imageSrc=${v(M.getWalletImage(i))}
            name=${i.name??"Unknown"}
            @click=${()=>this.onConnectWallet(i)}
            data-testid=${`wallet-selector-${i.id}`}
            tabIdx=${v(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=he.getRecentWallets(),i=this.connectors.map(o=>{var a;return(a=o.info)==null?void 0:a.rdns}).filter(Boolean),n=e.map(o=>o.rdns).filter(Boolean),r=i.concat(n);if(r.includes("io.metamask.mobile")&&k.isMobile()){const o=r.indexOf("io.metamask.mobile");r[o]="io.metamask"}return t.filter(o=>!r.includes(String(o==null?void 0:o.rdns)))}onConnectWallet(t){this.loading||B.push("ConnectingWalletConnect",{wallet:t})}};be([c()],At.prototype,"tabIdx",void 0);be([$()],At.prototype,"connectors",void 0);be([$()],At.prototype,"loading",void 0);At=be([x("w3m-connect-custom-widget")],At);var Xe=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ee=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(e=>e.id!==Fo.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>l`
            <wui-list-wallet
              imageSrc=${v(M.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){B.push("ConnectingExternal",{connector:t})}};Xe([c()],ee.prototype,"tabIdx",void 0);Xe([$()],ee.prototype,"connectors",void 0);ee=Xe([x("w3m-connect-external-widget")],ee);var Ze=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let oe=class extends C{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>l`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${v(M.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){z.selectWalletConnector(t)}};Ze([c()],oe.prototype,"tabIdx",void 0);Ze([c()],oe.prototype,"wallets",void 0);oe=Ze([x("w3m-connect-featured-widget")],oe);var to=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ie=class extends C{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var t;const e=this.connectors;return!(e!=null&&e.length)||e.length===1&&((t=e[0])==null?void 0:t.name)==="Browser Wallet"&&!k.isMobile()?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(i=>{var n;const r=(n=i.info)==null?void 0:n.rdns;return!k.isMobile()&&i.name==="Browser Wallet"?null:!r&&!E.checkInstalled()?(this.style.cssText="display: none",null):Jt.showConnector(i)?l`
            <wui-list-wallet
              imageSrc=${v(M.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${i.id}`}
              @click=${()=>this.onConnector(i)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){z.setActiveConnector(t),B.push("ConnectingExternal",{connector:t})}};to([c()],ie.prototype,"tabIdx",void 0);to([c()],ie.prototype,"connectors",void 0);ie=to([x("w3m-connect-injected-widget")],ie);var eo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let re=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>l`
            <wui-list-wallet
              imageSrc=${v(M.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${v(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){z.setActiveConnector(t),B.push("ConnectingMultiChain")}};eo([c()],re.prototype,"tabIdx",void 0);eo([$()],re.prototype,"connectors",void 0);re=eo([x("w3m-connect-multi-chain-widget")],re);var me=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Bt=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.loading=!1,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t)),k.isTelegram()&&k.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=he.getRecentWallets().filter(e=>!this.connectors.some(i=>i.id===e.id||i.name===e.name));return t.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>l`
            <wui-list-wallet
              imageSrc=${v(M.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${v(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||z.selectWalletConnector(t)}};me([c()],Bt.prototype,"tabIdx",void 0);me([$()],Bt.prototype,"connectors",void 0);me([$()],Bt.prototype,"loading",void 0);Bt=me([x("w3m-connect-recent-widget")],Bt);var ve=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let jt=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,k.isTelegram()&&k.isIos()&&(this.loading=!E.state.wcUri,this.unsubscribe.push(E.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=z.state,{customWallets:e,featuredWalletIds:i}=pt.state,n=he.getRecentWallets(),r=t.find(d=>d.id==="walletConnect"),o=t.filter(d=>d.type==="INJECTED"||d.type==="ANNOUNCED"||d.type==="MULTI_CHAIN").filter(d=>d.name!=="Browser Wallet");if(!r)return null;if(i||e||!this.wallets.length)return this.style.cssText="display: none",null;const a=o.length+n.length,s=Math.max(0,2-a),u=Ke.filterOutDuplicateWallets(this.wallets).slice(0,s);return u.length?l`
      <wui-flex flexDirection="column" gap="xs">
        ${u.map(d=>l`
            <wui-list-wallet
              imageSrc=${v(M.getWalletImage(d))}
              name=${(d==null?void 0:d.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(d)}
              tabIdx=${v(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=z.getConnector(t.id,t.rdns);e?B.push("ConnectingExternal",{connector:e}):B.push("ConnectingWalletConnect",{wallet:t})}};ve([c()],jt.prototype,"tabIdx",void 0);ve([c()],jt.prototype,"wallets",void 0);ve([$()],jt.prototype,"loading",void 0);jt=ve([x("w3m-connect-recommended-widget")],jt);var ye=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Nt=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.connectorImages=no.state.connectorImages,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t),no.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(k.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(i=>i.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return l`
      <wui-list-wallet
        imageSrc=${v(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${v(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){z.setActiveConnector(t),B.push("ConnectingWalletConnect")}};ye([c()],Nt.prototype,"tabIdx",void 0);ye([$()],Nt.prototype,"connectors",void 0);ye([$()],Nt.prototype,"connectorImages",void 0);Nt=ye([x("w3m-connect-walletconnect-widget")],Nt);const qi=P`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Dt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let gt=class extends C{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=z.state.connectors,this.recommended=A.state.recommended,this.featured=A.state.featured,this.unsubscribe.push(z.subscribeKey("connectors",t=>this.connectors=t),A.subscribeKey("recommended",t=>this.recommended=t),A.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:i,injected:n,multiChain:r,recommended:o,featured:a,external:s}=Jt.getConnectorsByType(this.connectors,this.recommended,this.featured);return Jt.getConnectorTypeOrder({custom:t,recent:e,announced:i,injected:n,multiChain:r,recommended:o,featured:a,external:s}).map(u=>{switch(u){case"injected":return l`
            ${r.length?l`<w3m-connect-multi-chain-widget
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?l`<w3m-connect-announced-widget
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${n.length?l`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${v(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return l`<w3m-connect-walletconnect-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return l`<w3m-connect-recent-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return l`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return l`<w3m-connect-custom-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return l`<w3m-connect-external-widget
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return l`<w3m-connect-recommended-widget
            .wallets=${o}
            tabIdx=${v(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${u}`),null}})}};gt.styles=qi;Dt([c()],gt.prototype,"tabIdx",void 0);Dt([$()],gt.prototype,"connectors",void 0);Dt([$()],gt.prototype,"recommended",void 0);Dt([$()],gt.prototype,"featured",void 0);gt=Dt([x("w3m-connector-list")],gt);const Vi=P`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ht=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let tt=class extends C{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var i;const n=e===this.activeTab;return l`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${n}
          data-testid="tab-${(i=t.label)==null?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?l`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const i=this.buttons[this.activeTab],n=this.buttons[t],r=i==null?void 0:i.querySelector("wui-text"),o=n==null?void 0:n.querySelector("wui-text"),a=n==null?void 0:n.getBoundingClientRect(),s=o==null?void 0:o.getBoundingClientRect();i&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&a&&s&&o&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,n.animate([{width:`${a.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};tt.styles=[j,_,Vi];ht([c({type:Array})],tt.prototype,"tabs",void 0);ht([c()],tt.prototype,"onTabChange",void 0);ht([c({type:Array})],tt.prototype,"buttons",void 0);ht([c({type:Boolean})],tt.prototype,"disabled",void 0);ht([c()],tt.prototype,"localTabWidth",void 0);ht([$()],tt.prototype,"activeTab",void 0);ht([$()],tt.prototype,"isDense",void 0);tt=ht([x("wui-tabs")],tt);var xe=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Wt=class extends C{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(E.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var e;const i=this.platformTabs[t];i&&((e=this.onSelectPlatfrom)==null||e.call(this,i))}};xe([c({type:Array})],Wt.prototype,"platforms",void 0);xe([c()],Wt.prototype,"onSelectPlatfrom",void 0);xe([$()],Wt.prototype,"buffering",void 0);Wt=xe([x("w3m-connecting-header")],Wt);const Ki=P`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ot=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const ho={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Hi={lg:"paragraph-600",md:"small-600"},Fi={lg:"md",md:"md"};let K=class extends C{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??Hi[this.size];return l`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=Fi[this.size],e=this.disabled?ho.disabled:ho[this.variant];return l`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return l``}};K.styles=[j,_,Ki];ot([c()],K.prototype,"size",void 0);ot([c({type:Boolean})],K.prototype,"disabled",void 0);ot([c({type:Boolean})],K.prototype,"fullWidth",void 0);ot([c({type:Boolean})],K.prototype,"loading",void 0);ot([c()],K.prototype,"variant",void 0);ot([c({type:Boolean})],K.prototype,"hasIconLeft",void 0);ot([c({type:Boolean})],K.prototype,"hasIconRight",void 0);ot([c()],K.prototype,"borderRadius",void 0);ot([c()],K.prototype,"textVariant",void 0);K=ot([x("wui-button")],K);const Yi=P`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var $e=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Rt=class extends C{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${v(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Rt.styles=[j,_,Yi];$e([c()],Rt.prototype,"tabIdx",void 0);$e([c({type:Boolean})],Rt.prototype,"disabled",void 0);$e([c()],Rt.prototype,"color",void 0);Rt=$e([x("wui-link")],Rt);const Gi=P`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Oo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ne=class extends C{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,n=245+e,r=360+e*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${n}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};ne.styles=[j,Gi];Oo([c({type:Number})],ne.prototype,"radius",void 0);ne=Oo([x("wui-loading-thumbnail")],ne);const Ji=P`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var vt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let lt=class extends C{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return l`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};lt.styles=[j,_,Ji];vt([c()],lt.prototype,"variant",void 0);vt([c()],lt.prototype,"imageSrc",void 0);vt([c({type:Boolean})],lt.prototype,"disabled",void 0);vt([c()],lt.prototype,"icon",void 0);vt([c()],lt.prototype,"size",void 0);vt([c()],lt.prototype,"text",void 0);lt=vt([x("wui-chip-button")],lt);const Qi=P`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ce=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let It=class extends C{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};It.styles=[j,_,Qi];Ce([c({type:Boolean})],It.prototype,"disabled",void 0);Ce([c()],It.prototype,"label",void 0);Ce([c()],It.prototype,"buttonLabel",void 0);It=Ce([x("wui-cta-button")],It);const Xi=P`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Mo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ae=class extends C{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:i,chrome_store:n,homepage:r}=this.wallet,o=k.isMobile(),a=k.isIos(),s=k.isAndroid(),u=[e,i,r,n].filter(Boolean).length>1,d=at.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!o?l`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>B.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&r?l`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&a?l`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&s?l`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&k.openHref(this.wallet.homepage,"_blank")}};ae.styles=[Xi];Mo([c({type:Object})],ae.prototype,"wallet",void 0);ae=Mo([x("w3m-mobile-download-links")],ae);const Zi=P`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var J=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};class N extends C{constructor(){var e,i,n,r,o;super(),this.wallet=(e=B.state.data)==null?void 0:e.wallet,this.connector=(i=B.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=M.getWalletImage(this.wallet)??M.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=E.state.wcUri,this.error=E.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(E.subscribeKey("wcUri",a=>{var s;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),E.subscribeKey("wcError",a=>this.error=a),E.subscribeKey("buffering",a=>this.buffering=a)),(k.isTelegram()||k.isSafari())&&k.isIos()&&E.state.wcUri&&((o=this.onConnect)==null||o.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var e;(e=this.onRender)==null||e.call(this),this.onShowRetry();const i=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),l`
      <wui-flex
        data-error=${v(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${v(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;this.buffering||(E.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this))}loaderTemplate(){const e=je.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(k.copyToClopboard(this.uri),Gt.showSuccess("Link copied"))}catch{Gt.showError("Failed to copy")}}}N.styles=Zi;J([$()],N.prototype,"isRetrying",void 0);J([$()],N.prototype,"uri",void 0);J([$()],N.prototype,"error",void 0);J([$()],N.prototype,"ready",void 0);J([$()],N.prototype,"showRetry",void 0);J([$()],N.prototype,"secondaryBtnLabel",void 0);J([$()],N.prototype,"secondaryLabel",void 0);J([$()],N.prototype,"buffering",void 0);J([$()],N.prototype,"isLoading",void 0);J([c({type:Boolean})],N.prototype,"isMobile",void 0);J([c()],N.prototype,"onRetry",void 0);var tr=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let po=class extends N{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=z.state,i=e.find(n=>{var r,o,a;return n.type==="ANNOUNCED"&&((r=n.info)==null?void 0:r.rdns)===((o=this.wallet)==null?void 0:o.rdns)||n.type==="INJECTED"||n.name===((a=this.wallet)==null?void 0:a.name)});if(i)await E.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");yo.close(),Y.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};po=tr([x("w3m-connecting-wc-browser")],po);var er=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let go=class extends N{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:i}=this.wallet,{redirect:n,href:r}=k.formatNativeUrl(e,this.uri);E.setWcLinking({name:i,href:r}),E.setRecentWallet(this.wallet),k.openHref(n,"_blank")}catch{this.error=!0}}};go=er([x("w3m-connecting-wc-desktop")],go);var or=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let wo=class extends N{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:i}=this.wallet,{redirect:n,href:r}=k.formatNativeUrl(e,this.uri);E.setWcLinking({name:i,href:r}),E.setRecentWallet(this.wallet);const o=k.isIframe()?"_top":"_self";k.openHref(n,o),clearTimeout(this.labelTimeout),this.secondaryLabel=St.CONNECT_LABELS.MOBILE}catch(e){Y.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=St.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=St.CONNECT_LABELS.MOBILE},St.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},St.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){const t=k.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(E.setBuffering(!0),setTimeout(()=>{E.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(E.setWcError(!1),this.onConnect())}};wo=or([x("w3m-connecting-wc-mobile")],wo);const ir=.1,fo=2.5,nt=7;function Ae(t,e,i){return t===e?!1:(t-e<0?e-t:t-e)<=i+ir}function rr(t,e){const i=Array.prototype.slice.call(Mt.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(i.length);return i.reduce((r,o,a)=>(a%n===0?r.push([o]):r[r.length-1].push(o))&&r,[])}const nr={generate({uri:t,size:e,logoSize:i,dotColor:n="#141414"}){const r="transparent",o=[],a=rr(t,"Q"),s=e/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:g,y:b})=>{const I=(a.length-nt)*s*g,h=(a.length-nt)*s*b,f=.45;for(let p=0;p<u.length;p+=1){const m=s*(nt-p*2);o.push(Lt`
            <rect
              fill=${p===2?n:r}
              width=${p===0?m-5:m}
              rx= ${p===0?(m-5)*f:m*f}
              ry= ${p===0?(m-5)*f:m*f}
              stroke=${n}
              stroke-width=${p===0?5:0}
              height=${p===0?m-5:m}
              x= ${p===0?h+s*p+5/2:h+s*p}
              y= ${p===0?I+s*p+5/2:I+s*p}
            />
          `)}});const d=Math.floor((i+25)/s),y=a.length/2-d/2,T=a.length/2+d/2-1,w=[];a.forEach((g,b)=>{g.forEach((I,h)=>{if(a[b][h]&&!(b<nt&&h<nt||b>a.length-(nt+1)&&h<nt||b<nt&&h>a.length-(nt+1))&&!(b>y&&b<T&&h>y&&h<T)){const f=b*s+s/2,p=h*s+s/2;w.push([f,p])}})});const R={};return w.forEach(([g,b])=>{var I;R[g]?(I=R[g])==null||I.push(b):R[g]=[b]}),Object.entries(R).map(([g,b])=>{const I=b.filter(h=>b.every(f=>!Ae(h,f,s)));return[Number(g),I]}).forEach(([g,b])=>{b.forEach(I=>{o.push(Lt`<circle cx=${g} cy=${I} fill=${n} r=${s/fo} />`)})}),Object.entries(R).filter(([g,b])=>b.length>1).map(([g,b])=>{const I=b.filter(h=>b.some(f=>Ae(h,f,s)));return[Number(g),I]}).map(([g,b])=>{b.sort((h,f)=>h<f?-1:1);const I=[];for(const h of b){const f=I.find(p=>p.some(m=>Ae(h,m,s)));f?f.push(h):I.push([h])}return[g,I.map(h=>[h[0],h[h.length-1]])]}).forEach(([g,b])=>{b.forEach(([I,h])=>{o.push(Lt`
              <line
                x1=${g}
                x2=${g}
                y1=${I}
                y2=${h}
                stroke=${n}
                stroke-width=${s/(fo/2)}
                stroke-linecap="round"
              />
            `)})}),o}},ar=P`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var ct=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const sr="#3396ff";let G=class extends C{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??sr}
    `,l`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return Lt`
      <svg height=${t} width=${t}>
        ${nr.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};G.styles=[j,ar];ct([c()],G.prototype,"uri",void 0);ct([c({type:Number})],G.prototype,"size",void 0);ct([c()],G.prototype,"theme",void 0);ct([c()],G.prototype,"imageSrc",void 0);ct([c()],G.prototype,"alt",void 0);ct([c()],G.prototype,"color",void 0);ct([c({type:Boolean})],G.prototype,"arenaClear",void 0);ct([c({type:Boolean})],G.prototype,"farcaster",void 0);G=ct([x("wui-qr-code")],G);const lr=P`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var qt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let wt=class extends C{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,l`<slot></slot>`}};wt.styles=[lr];qt([c()],wt.prototype,"width",void 0);qt([c()],wt.prototype,"height",void 0);qt([c()],wt.prototype,"borderRadius",void 0);qt([c()],wt.prototype,"variant",void 0);wt=qt([x("wui-shimmer")],wt);const cr=P`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var ur=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ue=class extends C{render(){return l`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};Ue.styles=[j,_,cr];Ue=ur([x("wui-ux-by-reown")],Ue);const dr=P`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var hr=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let _e=class extends N{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return E.setWcLinking(void 0),E.setRecentWallet(this.wallet),l` <wui-qr-code
      size=${t}
      theme=${je.state.themeMode}
      uri=${this.uri}
      imageSrc=${v(M.getWalletImage(this.wallet))}
      color=${v(je.state.themeVariables["--w3m-qr-color"])}
      alt=${v(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return l`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};_e.styles=dr;_e=hr([x("w3m-connecting-wc-qrcode")],_e);var pr=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let bo=class extends C{constructor(){var t;if(super(),this.wallet=(t=B.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${v(M.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};bo=pr([x("w3m-connecting-wc-unsupported")],bo);var Uo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let De=class extends N{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(E.subscribeKey("wcUri",()=>{this.updateLoadingState()})),Y.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:i}=this.wallet,{redirect:n,href:r}=k.formatUniversalUrl(e,this.uri);E.setWcLinking({name:i,href:r}),E.setRecentWallet(this.wallet),k.openHref(n,"_blank")}catch{this.error=!0}}};Uo([$()],De.prototype,"isLoading",void 0);De=Uo([x("w3m-connecting-wc-web")],De);var ke=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ot=class extends C{constructor(){var t;super(),this.wallet=(t=B.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!pt.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||pt.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:i}=E.state;(t||k.isPairingExpired(e)||i==="connecting")&&(await E.connectWalletConnect(),this.isSiwxEnabled||yo.close())}catch(e){Y.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),E.setWcError(!0),Gt.showError(e.message??"Connection error"),E.resetWcConnection(),B.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:i,injected:n,rdns:r}=this.wallet,o=n==null?void 0:n.map(({injected_id:R})=>R).filter(Boolean),a=[...r?[r]:o??[]],s=pt.state.isUniversalProvider?!1:a.length,u=t,d=i,y=E.checkInstalled(a),T=s&&y,w=e&&!k.isMobile();T&&!ao.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(k.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!T&&s&&!ao.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var e;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ke([$()],Ot.prototype,"platform",void 0);ke([$()],Ot.prototype,"platforms",void 0);ke([$()],Ot.prototype,"isSiwxEnabled",void 0);Ot=ke([x("w3m-connecting-wc-view")],Ot);var _o=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let qe=class extends C{constructor(){super(...arguments),this.isMobile=k.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=A.state,{customWallets:i}=pt.state,n=he.getRecentWallets(),r=t.length||e.length||(i==null?void 0:i.length)||n.length;return l`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};_o([$()],qe.prototype,"isMobile",void 0);qe=_o([x("w3m-connecting-wc-basic-view")],qe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=()=>new gr;class gr{}const Be=new WeakMap,io=Go(class extends Jo{render(t){return so}update(t,[e]){var i;const n=e!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),so}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Be.get(e);i===void 0&&(i=new WeakMap,Be.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Be.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),wr=P`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var Do=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let se=class extends C{constructor(){super(...arguments),this.inputElementRef=oo(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${io(this.inputElementRef)}
          type="checkbox"
          ?checked=${v(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};se.styles=[j,_,Ho,wr];Do([c({type:Boolean})],se.prototype,"checked",void 0);se=Do([x("wui-switch")],se);const fr=P`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var qo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let le=class extends C{constructor(){super(...arguments),this.checked=void 0}render(){return l`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${v(this.checked)}></wui-switch>
      </button>
    `}};le.styles=[j,_,fr];qo([c({type:Boolean})],le.prototype,"checked",void 0);le=qo([x("wui-certified-switch")],le);const br=P`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Vo=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ce=class extends C{constructor(){super(...arguments),this.icon="copy"}render(){return l`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ce.styles=[j,_,br];Vo([c()],ce.prototype,"icon",void 0);ce=Vo([x("wui-input-element")],ce);const mr=P`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var it=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let H=class extends C{constructor(){super(...arguments),this.inputElementRef=oo(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return l`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${io(this.inputElementRef)}
        class=${Yo(e)}
        type=${this.type}
        enterkeyhint=${v(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${v(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?l`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};H.styles=[j,_,mr];it([c()],H.prototype,"size",void 0);it([c()],H.prototype,"icon",void 0);it([c({type:Boolean})],H.prototype,"disabled",void 0);it([c()],H.prototype,"placeholder",void 0);it([c()],H.prototype,"type",void 0);it([c()],H.prototype,"keyHint",void 0);it([c()],H.prototype,"value",void 0);it([c()],H.prototype,"inputRightPadding",void 0);it([c()],H.prototype,"tabIdx",void 0);H=it([x("wui-input-text")],H);const vr=P`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var yr=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Ve=class extends C{constructor(){super(...arguments),this.inputComponentRef=oo()}render(){return l`
      <wui-input-text
        ${io(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=t==null?void 0:t.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};Ve.styles=[j,vr];Ve=yr([x("wui-search-bar")],Ve);const xr=Lt`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,$r=P`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Ko=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ue=class extends C{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${xr}`:l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ue.styles=[j,_,$r];Ko([c()],ue.prototype,"type",void 0);ue=Ko([x("wui-card-select-loader")],ue);const Cr=P`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var F=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let U=class extends C{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&at.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&at.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&at.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&at.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&at.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&at.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&at.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&at.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};U.styles=[j,Cr];F([c()],U.prototype,"gridTemplateRows",void 0);F([c()],U.prototype,"gridTemplateColumns",void 0);F([c()],U.prototype,"justifyItems",void 0);F([c()],U.prototype,"alignItems",void 0);F([c()],U.prototype,"justifyContent",void 0);F([c()],U.prototype,"alignContent",void 0);F([c()],U.prototype,"columnGap",void 0);F([c()],U.prototype,"rowGap",void 0);F([c()],U.prototype,"gap",void 0);F([c()],U.prototype,"padding",void 0);F([c()],U.prototype,"margin",void 0);U=F([x("wui-grid")],U);const kr=P`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Vt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let ft=class extends C{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,e;const i=((t=this.wallet)==null?void 0:t.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${v(i?"certified":void 0)}
            >${(e=this.wallet)==null?void 0:e.name}</wui-text
          >
          ${i?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="md"
        imageSrc=${v(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=M.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await M.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};ft.styles=kr;Vt([$()],ft.prototype,"visible",void 0);Vt([$()],ft.prototype,"imageSrc",void 0);Vt([$()],ft.prototype,"imageLoading",void 0);Vt([c()],ft.prototype,"wallet",void 0);ft=Vt([x("w3m-all-wallets-list-item")],ft);const Rr=P`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Kt=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};const mo="local-paginator";let bt=class extends C{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!A.state.wallets.length,this.wallets=A.state.wallets,this.recommended=A.state.recommended,this.featured=A.state.featured,this.unsubscribe.push(A.subscribeKey("wallets",t=>this.wallets=t),A.subscribeKey("recommended",t=>this.recommended=t),A.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;this.loading=!0;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");e&&(await A.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${v(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=k.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return Ke.markWalletsAsInstalled(t).map(e=>l`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:i,count:n}=A.state,r=window.innerWidth<352?3:4,o=t.length+e.length;let a=Math.ceil(o/r)*r-o+r;return a-=t.length?i.length%r:0,n===0&&i.length>0?null:n===0||[...i,...t,...e].length<n?this.shimmerTemplate(a,mo):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${mo}`);e&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i!=null&&i.isIntersecting&&!this.loading){const{page:n,count:r,wallets:o}=A.state;o.length<r&&A.fetchWallets({page:n+1})}}),this.paginationObserver.observe(e))}onConnectWallet(t){z.selectWalletConnector(t)}};bt.styles=Rr;Kt([$()],bt.prototype,"loading",void 0);Kt([$()],bt.prototype,"wallets",void 0);Kt([$()],bt.prototype,"recommended",void 0);Kt([$()],bt.prototype,"featured",void 0);bt=Kt([x("w3m-all-wallets-list")],bt);const Ir=P`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Re=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let Et=class extends C{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await A.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=A.state,e=Ke.markWalletsAsInstalled(t);return t.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(i=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(i)}
              .wallet=${i}
              data-testid="wallet-search-item-${i.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){z.selectWalletConnector(t)}};Et.styles=Ir;Re([$()],Et.prototype,"loading",void 0);Re([c()],Et.prototype,"query",void 0);Re([c()],Et.prototype,"badge",void 0);Et=Re([x("w3m-all-wallets-search")],Et);var ro=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let de=class extends C{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=k.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return l`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            badge=${v(this.badge)}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list badge=${v(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Gt.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return k.isMobile()?l`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){B.push("ConnectingWalletConnect")}};ro([$()],de.prototype,"search",void 0);ro([$()],de.prototype,"badge",void 0);de=ro([x("w3m-all-wallets-view")],de);const Er=P`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Q=function(t,e,i,n){var r=arguments.length,o=r<3?e:n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let q=class extends C{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${v(this.iconVariant)}
        tabindex=${v(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return l`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return l`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:e;return l`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?l`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:l``}chevronTemplate(){return this.chevron?l`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};q.styles=[j,_,Er];Q([c()],q.prototype,"icon",void 0);Q([c()],q.prototype,"iconSize",void 0);Q([c()],q.prototype,"tabIdx",void 0);Q([c()],q.prototype,"variant",void 0);Q([c()],q.prototype,"iconVariant",void 0);Q([c({type:Boolean})],q.prototype,"disabled",void 0);Q([c()],q.prototype,"imageSrc",void 0);Q([c()],q.prototype,"alt",void 0);Q([c({type:Boolean})],q.prototype,"chevron",void 0);Q([c({type:Boolean})],q.prototype,"loading",void 0);q=Q([x("wui-list-item")],q);var Tr=function(t,e,i,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(o=(r<3?a(o):r>3?a(e,i,o):a(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o};let vo=class extends C{constructor(){var t;super(...arguments),this.wallet=(t=B.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&k.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&k.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&k.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&k.openHref(this.wallet.homepage,"_blank")}};vo=Tr([x("w3m-downloads-view")],vo);export{de as W3mAllWalletsView,qe as W3mConnectingWcBasicView,vo as W3mDownloadsView};
