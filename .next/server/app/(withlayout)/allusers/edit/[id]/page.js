(()=>{var e={};e.id=878,e.ids=[878],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},29307:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(73137),o=s(54647),i=s(4183),n=s.n(i),a=s(71775),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let u=r.AppPageRouteModule,c=["",{children:["(withlayout)",{children:["allusers",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,78993)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/edit/[id]/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,70095)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19568)),"/home/nayems/Documents/Projects/sheba/client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/edit/[id]/page.tsx"],p="/(withlayout)/allusers/edit/[id]/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new u({definition:{kind:o.x.APP_PAGE,page:"/(withlayout)/allusers/edit/[id]/page",pathname:"/allusers/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},47605:(e,t,s)=>{Promise.resolve().then(s.bind(s,86975))},86975:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(60080),o=s(79636),i=s.n(o),n=s(13214),a=s(68602),l=s(57114),u=s(9885);let __WEBPACK_DEFAULT_EXPORT__=({params:e})=>{let{id:t}=e,[s,o]=(0,u.useState)(),[c,d]=(0,u.useState)(),p=(0,l.useRouter)();return(0,u.useEffect)(()=>{fetch(`http://localhost:3333/api/v1/users/db/${t}`).then(e=>e.json()).then(e=>{console.log(e),o(e?.data)})},[t]),console.log(s),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("p",{children:["User Name : ",s?.name]}),(0,r.jsxs)("p",{children:["Email : ",s?.email," "]})]}),r.jsx("form",{onSubmit:e=>{e.preventDefault(),fetch(`http://localhost:3333/api/v1/users/${s?.userId}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({role:c})}).then(e=>e.json()).then(e=>{console.log(e),a.ZP.success("User role changed"),p.push("/allusers")})},children:(0,r.jsxs)("div",{className:"flex justify-evenly mt-10",children:[r.jsx("label",{className:"mr-6 ",children:"Grant User Role"}),r.jsx(n.default,{defaultValue:"Select Role",style:{width:120},onChange:e=>{console.log(`${e}`),d(e)},options:[{value:"customer",label:"customer"},{value:"admin",label:"Admin"}]}),r.jsx(i(),{htmlType:"submit",type:"primary",children:"Update"})]})})]})}},78993:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var r=s(17536);let o=(0,r.createProxy)(String.raw`/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/edit/[id]/page.tsx`),{__esModule:i,$$typeof:n}=o,a=o.default,l=a}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[3009,6885,7871,7501,5666,8602,9599,1414,9636,6218,1042,7506,8845,9838,1572,3214,9213,8068],()=>__webpack_exec__(29307));module.exports=s})();