(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{62601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(58960)},43315:function(e,t,n){Promise.resolve().then(n.bind(n,86896))},86896:function(e,t,n){"use strict";n.r(t);var r=n(57437),o=n(88110),u=n.n(o),i=n(45623),c=n(33116),l=n(24033),s=n(2265);t.default=e=>{let{params:t}=e,{id:n}=t,[o,a]=(0,s.useState)(),[f,p]=(0,s.useState)(),d=(0,l.useRouter)();return(0,s.useEffect)(()=>{fetch("http://localhost:3333/api/v1/users/db/".concat(n)).then(e=>e.json()).then(e=>{console.log(e),a(null==e?void 0:e.data)})},[n]),console.log(o),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("p",{children:["User Name : ",null==o?void 0:o.name]}),(0,r.jsxs)("p",{children:["Email : ",null==o?void 0:o.email," "]})]}),(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),fetch("http://localhost:3333/api/v1/users/".concat(null==o?void 0:o.userId),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({role:f})}).then(e=>e.json()).then(e=>{console.log(e),c.ZP.success("User role changed"),d.push("/allusers")})},children:(0,r.jsxs)("div",{className:"flex justify-evenly mt-10",children:[(0,r.jsx)("label",{className:"mr-6 ",children:"Grant User Role"}),(0,r.jsx)(i.default,{defaultValue:"Select Role",style:{width:120},onChange:e=>{console.log("".concat(e)),p(e)},options:[{value:"customer",label:"customer"},{value:"admin",label:"Admin"}]}),(0,r.jsx)(u(),{htmlType:"submit",type:"primary",children:"Update"})]})})]})}},58960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var u=[],i=!1,c=-1;function cleanUpNextTick(){i&&r&&(i=!1,r.length?u=r.concat(u):c=-1,u.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,i=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new Item(e,t)),1!==u.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},u=!0;try{t[e](o,o.exports,__nccwpck_require__),u=!1}finally{u&&delete n[e]}return o.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},24033:function(e,t,n){e.exports=n(20290)}},function(e){e.O(0,[2458,4092,3116,9559,8110,8610,1241,4447,5623,2971,7864,1744],function(){return e(e.s=43315)}),_N_E=e.O()}]);