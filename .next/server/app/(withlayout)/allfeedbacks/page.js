(()=>{var e={};e.id=5538,e.ids=[5538],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},50119:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>u});var r=s(73137),a=s(54647),o=s(4183),i=s.n(o),n=s(71775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=r.AppPageRouteModule,u=["",{children:["(withlayout)",{children:["allfeedbacks",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,49398)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allfeedbacks/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,70095)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19568)),"/home/nayems/Documents/Projects/sheba/client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allfeedbacks/page.tsx"],p="/(withlayout)/allfeedbacks/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/(withlayout)/allfeedbacks/page",pathname:"/allfeedbacks",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},29381:(e,t,s)=>{Promise.resolve().then(s.bind(s,62368))},62368:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var r=s(60080),a=s(22257),o=s(12758);let i=o.u.injectEndpoints({endpoints:e=>({postFeedback:e.mutation({query:e=>({url:"/my-feedback",method:"POST",data:e}),invalidatesTags:[a.U.feedback]}),getAllFeedbacks:e.query({query:()=>({url:"/all-feedbacks",method:"GET"}),providesTags:[a.U.feedback]})})}),{usePostFeedbackMutation:n,useGetAllFeedbacksQuery:l}=i;s(9885);let page=()=>{let{data:e}=l({refetchOnMountOrArgChange:!0,pollingInterval:1e4});return console.log(e),r.jsx("div",{children:r.jsx("section",{className:"bg-white",children:(0,r.jsxs)("div",{className:"mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",children:[r.jsx("h2",{className:"text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-36",children:"Read trusted reviews from our customers"}),r.jsx("div",{className:"mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8",children:e?.data?.map(e=>r.jsx("div",{children:r.jsx("div",{className:"mb-8 sm:break-inside-avoid",children:r.jsxs("blockquote",{className:"rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8",children:[r.jsx("div",{className:"flex items-center gap-4",children:r.jsx("img",{alt:"Man",src:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",className:"h-14 w-14 rounded-full object-cover"})}),r.jsx("div",{children:r.jsx("p",{className:"mt-0.5 text-lg font-medium text-gray-900",children:e?.email})}),r.jsx("p",{className:"mt-4 text-gray-700",children:e.feedback})]})})},e.id))})]})})})}},49398:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>l});var r=s(17536);let a=(0,r.createProxy)(String.raw`/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allfeedbacks/page.tsx`),{__esModule:o,$$typeof:i}=a,n=a.default,l=n}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[3009,6885,7871,7501,9213,8068],()=>__webpack_exec__(50119));module.exports=s})();