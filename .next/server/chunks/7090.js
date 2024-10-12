"use strict";exports.id=7090,exports.ids=[7090],exports.modules={7090:(e,a,t)=>{t(87561),t(49411);let r=t(64955);t(88849),t(22286),t(65628),t(84492),t(72254),t(47261),t(41041),t(87503);let n=0,o={START_BOUNDARY:n++,HEADER_FIELD_START:n++,HEADER_FIELD:n++,HEADER_VALUE_START:n++,HEADER_VALUE:n++,HEADER_VALUE_ALMOST_DONE:n++,HEADERS_ALMOST_DONE:n++,PART_DATA_START:n++,PART_DATA:n++,END:n++},i=1,l={PART_BOUNDARY:i,LAST_BOUNDARY:i*=2},lower=e=>32|e,noop=()=>{};let MultipartParser=class MultipartParser{constructor(e){this.index=0,this.flags=0,this.onHeaderEnd=noop,this.onHeaderField=noop,this.onHeadersEnd=noop,this.onHeaderValue=noop,this.onPartBegin=noop,this.onPartData=noop,this.onPartEnd=noop,this.boundaryChars={},e="\r\n--"+e;let a=new Uint8Array(e.length);for(let t=0;t<e.length;t++)a[t]=e.charCodeAt(t),this.boundaryChars[a[t]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=o.START_BOUNDARY}write(e){let a,t,r=0,n=e.length,i=this.index,{lookbehind:A,boundary:s,boundaryChars:d,index:E,state:D,flags:c}=this,T=this.boundary.length,h=T-1,_=e.length,mark=e=>{this[e+"Mark"]=r},clear=e=>{delete this[e+"Mark"]},callback=(e,a,t,r)=>{(void 0===a||a!==t)&&this[e](r&&r.subarray(a,t))},dataCallback=(a,t)=>{let n=a+"Mark";n in this&&(t?(callback(a,this[n],r,e),delete this[n]):(callback(a,this[n],e.length,e),this[n]=0))};for(r=0;r<n;r++)switch(a=e[r],D){case o.START_BOUNDARY:if(E===s.length-2){if(45===a)c|=l.LAST_BOUNDARY;else if(13!==a)return;E++;break}if(E-1==s.length-2){if(c&l.LAST_BOUNDARY&&45===a)D=o.END,c=0;else{if(c&l.LAST_BOUNDARY||10!==a)return;E=0,callback("onPartBegin"),D=o.HEADER_FIELD_START}break}a!==s[E+2]&&(E=-2),a===s[E+2]&&E++;break;case o.HEADER_FIELD_START:D=o.HEADER_FIELD,mark("onHeaderField"),E=0;case o.HEADER_FIELD:if(13===a){clear("onHeaderField"),D=o.HEADERS_ALMOST_DONE;break}if(E++,45===a)break;if(58===a){if(1===E)return;dataCallback("onHeaderField",!0),D=o.HEADER_VALUE_START;break}if((t=lower(a))<97||t>122)return;break;case o.HEADER_VALUE_START:if(32===a)break;mark("onHeaderValue"),D=o.HEADER_VALUE;case o.HEADER_VALUE:13===a&&(dataCallback("onHeaderValue",!0),callback("onHeaderEnd"),D=o.HEADER_VALUE_ALMOST_DONE);break;case o.HEADER_VALUE_ALMOST_DONE:if(10!==a)return;D=o.HEADER_FIELD_START;break;case o.HEADERS_ALMOST_DONE:if(10!==a)return;callback("onHeadersEnd"),D=o.PART_DATA_START;break;case o.PART_DATA_START:D=o.PART_DATA,mark("onPartData");case o.PART_DATA:if(i=E,0===E){for(r+=h;r<_&&!(e[r]in d);)r+=T;r-=h,a=e[r]}if(E<s.length)s[E]===a?(0===E&&dataCallback("onPartData",!0),E++):E=0;else if(E===s.length)E++,13===a?c|=l.PART_BOUNDARY:45===a?c|=l.LAST_BOUNDARY:E=0;else if(E-1===s.length){if(c&l.PART_BOUNDARY){if(E=0,10===a){c&=~l.PART_BOUNDARY,callback("onPartEnd"),callback("onPartBegin"),D=o.HEADER_FIELD_START;break}}else c&l.LAST_BOUNDARY&&45===a?(callback("onPartEnd"),D=o.END,c=0):E=0}if(E>0)A[E-1]=a;else if(i>0){let e=new Uint8Array(A.buffer,A.byteOffset,A.byteLength);callback("onPartData",0,i,e),i=0,mark("onPartData"),r--}break;case o.END:break;default:throw Error(`Unexpected state entered: ${D}`)}dataCallback("onHeaderField"),dataCallback("onHeaderValue"),dataCallback("onPartData"),this.index=E,this.state=D,this.flags=c}end(){if(this.state===o.HEADER_FIELD_START&&0===this.index||this.state===o.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==o.END)throw Error("MultipartParser.end(): stream ended unexpectedly")}};async function toFormData(e,a){let t,n,o,i,l,A;if(!/multipart/i.test(a))throw TypeError("Failed to fetch");let s=a.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!s)throw TypeError("no or bad content-type header, no multipart boundary");let d=new MultipartParser(s[1]||s[2]),E=[],D=new r.FormData,onPartData=e=>{o+=c.decode(e,{stream:!0})},appendToFile=e=>{E.push(e)},appendFileToFormData=()=>{let e=new r.File(E,A,{type:l});D.append(i,e)},appendEntryToFormData=()=>{D.append(i,o)},c=new TextDecoder("utf-8");for await(let a of(c.decode(),d.onPartBegin=function(){d.onPartData=onPartData,d.onPartEnd=appendEntryToFormData,t="",n="",o="",i="",l="",A=null,E.length=0},d.onHeaderField=function(e){t+=c.decode(e,{stream:!0})},d.onHeaderValue=function(e){n+=c.decode(e,{stream:!0})},d.onHeaderEnd=function(){if(n+=c.decode(),"content-disposition"===(t=t.toLowerCase())){let e=n.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);e&&(i=e[2]||e[3]||""),(A=function(e){let a=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!a)return;let t=a[2]||a[3]||"",r=t.slice(t.lastIndexOf("\\")+1);return(r=r.replace(/%22/g,'"')).replace(/&#(\d{4});/g,(e,a)=>String.fromCharCode(a))}(n))&&(d.onPartData=appendToFile,d.onPartEnd=appendFileToFormData)}else"content-type"===t&&(l=n);n="",t=""},e))d.write(a);return d.end(),D}a.toFormData=toFormData}};