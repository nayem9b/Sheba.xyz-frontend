(()=>{var e={};e.id=2832,e.ids=[2832],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},27105:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>u});var s=r(73137),a=r(54647),i=r(4183),o=r.n(i),l=r(71775),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let c=s.AppPageRouteModule,u=["",{children:["(withlayout)",{children:["allservicetable",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,22284)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allservicetable/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,70095)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,19568)),"/home/nayems/Documents/Projects/sheba/client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allservicetable/page.tsx"],p="/(withlayout)/allservicetable/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/(withlayout)/allservicetable/page",pathname:"/allservicetable",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},22991:(e,t,r)=>{Promise.resolve().then(r.bind(r,35546))},35546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(60080),a=r(12572),i=r(79636),o=r.n(i),l=r(13214),n=r(68602),c=r(9885);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,c.useState)(),{data:r}=(0,a.Ei)(),i=r?.data?.map(e=>({label:e?.title,value:e?.id}));return(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-blue-500 mt-24 text-center",children:"Add a service "}),s.jsx("div",{className:"",children:(0,s.jsxs)("div",{className:"w-6/12 mx-auto",children:[s.jsx("label",{children:" Select"}),(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault();let r=t.target,s=r?.name.value,a=r?.price?.value;console.log("price",a);let i=r?.details.value,o=r?.status?.value;console.log(e);let l=r.image.files[0],c=new FormData;c.append("image",l),fetch("https://api.imgbb.com/1/upload?key=4879859cdc7827193ef39d9fcfdd7c52",{method:"POST",body:c}).then(e=>e.json()).then(t=>{if(n.ZP.loading("uploading"),console.log(t),t){let l={name:s,price:parseInt(a),details:i,image:t.data.url,categoryId:e,status:o,rating:"5"};console.log(l),fetch("http://localhost:3333/api/v1/create-service",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)}).then(e=>e.json()).then(e=>{console.log(e),n.ZP.success("successful"),r.reset()})}})},children:[s.jsx(l.default,{className:"w-full",defaultValue:"Select Category",onChange:e=>{t(e),console.log(`selected ${e}`)},style:{width:170},options:i}),(0,s.jsxs)("div",{className:"",children:[s.jsx("label",{className:"mt-5",children:" Select Status"}),(0,s.jsxs)("select",{name:"status",className:"w-full",id:"country",children:[s.jsx("option",{value:"available",children:"available"}),s.jsx("option",{value:"upcoming",children:"upcoming"})]})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:" Name"}),s.jsx("input",{autoFocus:!0,required:!0,className:"w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm",placeholder:"Service Name",type:"text",name:"name"}),s.jsx("label",{children:"Price"}),s.jsx("input",{required:!0,type:"number",className:"w-full text-lg rounded-lg border-gray-200 p-4 pe-12 shadow-sm",placeholder:"Price",name:"price"}),s.jsx("label",{children:"Details"}),s.jsx("textarea",{className:"w-full px-3 h-36 text-gray-700 border rounded-lg focus:outline-none",name:"details"}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"image",className:"block text-sm text-gray-500 dark:text-gray-300",children:"Image"}),s.jsx("input",{type:"file",id:"image",name:"image",accept:"image/*",className:"block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200  placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300"})]})]}),s.jsx("div",{className:"flex justify-center text-center mt-10",children:s.jsx(o(),{htmlType:"submit",type:"primary",value:"large",size:"large",children:"Submit"})})]})]})})]})}},12572:(e,t,r)=>{"use strict";r.d(t,{Ei:()=>o,pe:()=>l});var s=r(22257),a=r(12758);let i=a.u.injectEndpoints({endpoints:e=>({categories:e.query({query:e=>({url:"/categories",method:"GET",params:e}),providesTags:[s.U.category]}),postCategory:e.mutation({query:e=>({url:"/categories",method:"POST",data:e}),invalidateTags:[s.U.category]})})}),{useCategoriesQuery:o,usePostCategoryMutation:l}=i},22284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var s=r(17536);let a=(0,s.createProxy)(String.raw`/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allservicetable/page.tsx`),{__esModule:i,$$typeof:o}=a,l=a.default,n=l}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[3009,6885,7871,7501,5666,8602,9599,1414,9636,6218,1042,7506,8845,9838,1572,3214,9213,8068],()=>__webpack_exec__(27105));module.exports=r})();