(()=>{var e={};e.id=9094,e.ids=[9094,8068,14],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},67419:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>m,routeModule:()=>x,tree:()=>d});var r=s(73137),a=s(54647),n=s(4183),o=s.n(n),l=s(71775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let c=r.AppPageRouteModule,d=["",{children:["(withlayout)",{children:["allusers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,55193)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,70095)),"/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,19568)),"/home/nayems/Documents/Projects/sheba/client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/page.tsx"],h="/(withlayout)/allusers/page",u={require:s,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/(withlayout)/allusers/page",pathname:"/allusers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},24812:(e,t,s)=>{Promise.resolve().then(s.bind(s,56261))},77569:(e,t,s)=>{Promise.resolve().then(s.bind(s,32469))},56261:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(60080),a=s(18056),n=s(20014),o=s(79636),l=s.n(o),i=s(68602),c=s(11440),d=s.n(c),m=s(57114),h=s(9885),u=s(21367),x=s(62268),p=s(44215),g=s(39657);let __WEBPACK_DEFAULT_EXPORT__=()=>{let{session:e}=(0,p.kP)(),t=(0,g.Y)(e),{isSignedIn:s,user:o}=(0,p.aF)(),[c]=(0,n.I1)();(0,m.useRouter)();let{organizationList:v,isLoaded:y,setActive:w}=(0,p.eW)(),[j,f]=(0,h.useState)(1),[_,k]=(0,h.useState)(10),[b,M]=(0,h.useState)(""),[P,N]=(0,h.useState)(""),[C,A]=(0,h.useState)(""),[q,E]=(0,h.useState)(""),[S,B]=(0,h.useState)(""),[T,D]=(0,h.useState)(""),{data:U,isLoading:z}=(0,n.RB)({refetchOnMountOrArgChange:!0,pollingInterval:1e4}),H=U?.meta;console.log(T);let deleteHandler=async e=>{i.ZP.loading("Deleting....."),fetch(`http://localhost:3333/api/v1/users/db/${e}`).then(e=>e.json()).then(e=>{console.log(e?.data),D(e?.data?.userId)});try{fetch(`http://localhost:3333/api/v1/users/${T}`,{method:"DELETE"}).then(e=>e.json()).then(e=>{console.log(e),window.location.reload(),i.ZP.success("User Deleted Successfully")})}catch(e){i.ZP.error(e.message)}},R=[{title:"Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Role",dataIndex:"role"},{title:"Action",render:function(e){return r.jsx(r.Fragment,{children:"admin"===t&&(0,r.jsxs)("div",{children:[r.jsx(d(),{href:`/allusers/edit/${e?.id}`,children:r.jsx(l(),{style:{margin:"0px 5px"},onClick:()=>console.log(e),type:"primary",children:r.jsx(x.Z,{})})}),r.jsx(l(),{onClick:()=>deleteHandler(e?.id),type:"primary",danger:!0,children:r.jsx(u.Z,{})})]})})}}];return(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-center text-blue-500",children:"Manage Users"}),r.jsx("div",{className:"mx-5",children:r.jsx(a.Z,{loading:z,columns:R,dataSource:U?.data,pageSize:_,totalPages:H?.total,showSizeChanger:!0,onPaginationChange:(e,t)=>{console.log("Page:",e,"PageSize:",t),f(e),k(t)},onTableChange:(e,t,s)=>{let{order:r,field:a}=s;M(a),N("ascend"===r?"asc":"desc")},showPagination:!0})})]})}},32469:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>_withlayout_layout});var r=s(60080),a=s(7501);let{Content:n}=a.default,ui_Contents=({children:e})=>r.jsx(n,{style:{minHeight:"100vh",color:"black"},children:r.jsx("div",{style:{padding:"10px"},children:e})});var o=s(9885),l=s(11440),i=s.n(l),c=s(39657),d=s(44215);let{Sider:m}=a.default,Sidebar=()=>{let{isLoaded:e,isSignedIn:t,user:s}=(0,d.aF)(),{session:a}=(0,d.kP)(),n=(0,c.Y)(a),[l,m]=(0,o.useState)(""),[h,u]=(0,o.useState)(!1),[x,p]=(0,o.useState)(""),handleSetActiveLink=e=>{p(e)};return(0,o.useEffect)(()=>{fetch(`http://localhost:3333/api/v1/users/${s?.id}`).then(e=>e.json()).then(e=>{m(e?.data?.role),console.log(e?.data?.role)})},[s?.id]),r.jsx("aside",{className:"flex",children:r.jsx("div",{className:"h-screen px-5 py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 ",children:(0,r.jsxs)("nav",{className:"mt-4 -mx-3 space-y-6 ",children:[(0,r.jsxs)("div",{className:"space-y-3 ",children:[("admin"===n||"admin"===l)&&r.jsx("label",{className:"px-3 text-xs text-gray-500 uppercase ",children:"analytics"}),"admin"===n&&(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/admin",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Dashboard"})]}),("admin"===n||"admin"===l)&&(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{href:"/allusers",onClick:()=>handleSetActiveLink("/"),className:`text-black hover:text-gray-300 ${"/"===x?"font-bold text-blue-500":"text-green-500"}`,children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Manage Users"})]}),(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addservice",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Manage Services"})]}),(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allservicetable",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Create Service"})]})]})]}),r.jsx("div",{className:"space-y-3 ",children:("admin"===n||"admin"===l)&&(0,r.jsxs)("div",{children:[r.jsx("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"content"}),(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addcategory",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Create Category"})]}),("admin"===n||"admin"===l)&&(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addservice",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Manage Services"})]}),("admin"===n||"admin"===l)&&(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allbookings",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Manage Bookings"})]})]})}),(0,r.jsxs)("div",{className:"space-y-3 ",children:[("admin"===n||"admin"===l)&&r.jsx("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"Customization"}),("admin"===n||"admin"===l)&&(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allfeedbacks",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"All Feedbacks"})]})]}),(0,r.jsxs)("div",{className:"space-y-3 ",children:[r.jsx("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"My Dashboard"}),(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/mycart",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"My Cart"})]}),(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/mybookings",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"My Bookings"})]}),("admin"===n||"admin"===l)&&(0,r.jsxs)(i(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/createcontent",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:r.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),r.jsx("span",{className:"mx-2 text-sm font-medium",children:"Create Blog"})]})]})]})})})};var h=s(57114);let _withlayout_layout=({children:e})=>{(0,h.useRouter)();let[t,s]=(0,o.useState)(!1);return(0,r.jsxs)(a.default,{hasSider:!0,children:[r.jsx(Sidebar,{}),r.jsx(ui_Contents,{children:e})]})}},18056:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(60080),a=s(84887);let __WEBPACK_DEFAULT_EXPORT__=({loading:e=!1,columns:t,dataSource:s,pageSize:n,totalPages:o,showSizeChanger:l=!0,onPaginationChange:i,onTableChange:c,showPagination:d=!0})=>r.jsx(a.Z,{loading:e,columns:t,dataSource:s,pagination:!!d&&{pageSize:n,total:o,pageSizeOptions:[5,10,20],showSizeChanger:l,onChange:i},onChange:c})},20014:(e,t,s)=>{"use strict";s.d(t,{I1:()=>c,RB:()=>i,Vx:()=>l});var r=s(12758),a=s(22257);let n=r.u.injectEndpoints({endpoints:e=>({getUserById:e.query({query:e=>({url:`/users/${e}`,method:"GET"}),providesTags:[a.U.user]}),addUser:e.mutation({query:e=>({url:"/auth/signup",method:"POST",data:e}),invalidatesTags:[a.U.user]}),deleteUser:e.mutation({query:e=>({url:`/users/${e}`,method:"DELETE"}),invalidatesTags:[a.U.user]}),allUsers:e.query({query:()=>({url:"/users",method:"GET"}),invalidatesTags:[a.U.user]})})}),{useGetUserByIdQuery:o,useAddUserMutation:l,useAllUsersQuery:i,useDeleteUserMutation:c}=n},55193:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var r=s(17536);let a=(0,r.createProxy)(String.raw`/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/allusers/page.tsx`),{__esModule:n,$$typeof:o}=a,l=a.default,i=l},70095:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var r=s(17536);let a=(0,r.createProxy)(String.raw`/home/nayems/Documents/Projects/sheba/client/app/(withlayout)/layout.tsx`),{__esModule:n,$$typeof:o}=a,l=a.default,i=l},57481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(96885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"512x512",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[3009,6885,7871,7501,5666,8602,9599,1414,9636,6218,1042,7506,8845,9838,1985,1572,5465,3214,3927,2781,6731,2442,1367,7776,6122,668,3271,9213],()=>__webpack_exec__(67419));module.exports=s})();