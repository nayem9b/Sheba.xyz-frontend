(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6175],{2762:function(e,t,s){"use strict";var n=s(26314).default,a=s(36199).default;t.default=void 0;var o=a(s(39851)),l=n(s(93673));let i=o.default;i.Header=o.Header,i.Footer=o.Footer,i.Content=o.Content,i.Sider=l.default,t.default=i},40429:function(e,t,s){Promise.resolve().then(s.bind(s,22033))},22033:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _withlayout_layout}});var n=s(57437),a=s(2762);let{Content:o}=a.default;var ui_Contents=e=>{let{children:t}=e;return(0,n.jsx)(o,{style:{minHeight:"100vh",color:"black"},children:(0,n.jsx)("div",{style:{padding:"10px"},children:t})})},l=s(2265),i=s(61396),c=s.n(i),d=s(54509),h=s(74499);let{Sider:m}=a.default;var Sidebar=()=>{let{isLoaded:e,isSignedIn:t,user:s}=(0,h.aF)(),{session:a}=(0,h.kP)(),o=(0,d.Y)(a),[i,m]=(0,l.useState)(""),[x,u]=(0,l.useState)(!1),[v,g]=(0,l.useState)(""),handleSetActiveLink=e=>{g(e)};return(0,l.useEffect)(()=>{fetch("http://localhost:3333/api/v1/users/".concat(null==s?void 0:s.id)).then(e=>e.json()).then(e=>{var t,s;m(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.role),console.log(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.role)})},[null==s?void 0:s.id]),(0,n.jsx)("aside",{className:"flex",children:(0,n.jsx)("div",{className:"h-screen px-5 py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 ",children:(0,n.jsxs)("nav",{className:"mt-4 -mx-3 space-y-6 ",children:[(0,n.jsxs)("div",{className:"space-y-3 ",children:[("admin"===o||"admin"===i)&&(0,n.jsx)("label",{className:"px-3 text-xs text-gray-500 uppercase ",children:"analytics"}),"admin"===o&&(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/admin",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Dashboard"})]}),("admin"===o||"admin"===i)&&(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{href:"/allusers",onClick:()=>handleSetActiveLink("/"),className:"text-black hover:text-gray-300 ".concat("/"===v?"font-bold text-blue-500":"text-green-500"),children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Manage Users"})]}),(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addservice",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Manage Services"})]}),(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allservicetable",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Create Service"})]})]})]}),(0,n.jsx)("div",{className:"space-y-3 ",children:("admin"===o||"admin"===i)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"content"}),(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addcategory",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Create Category"})]}),("admin"===o||"admin"===i)&&(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/addservice",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Manage Services"})]}),("admin"===o||"admin"===i)&&(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allbookings",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Manage Bookings"})]})]})}),(0,n.jsxs)("div",{className:"space-y-3 ",children:[("admin"===o||"admin"===i)&&(0,n.jsx)("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"Customization"}),("admin"===o||"admin"===i)&&(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/allfeedbacks",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"All Feedbacks"})]})]}),(0,n.jsxs)("div",{className:"space-y-3 ",children:[(0,n.jsx)("label",{className:"px-3 text-xs text-gray-500 uppercase dark:text-gray-400",children:"My Dashboard"}),(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/mycart",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"My Cart"})]}),(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/mybookings",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"My Bookings"})]}),("admin"===o||"admin"===i)&&(0,n.jsxs)(c(),{className:"flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-300  hover:text-gray-700",href:"/createcontent",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-5 h-5",children:(0,n.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"})}),(0,n.jsx)("span",{className:"mx-2 text-sm font-medium",children:"Create Blog"})]})]})]})})})},x=s(24033),_withlayout_layout=e=>{let{children:t}=e;(0,x.useRouter)();let[s,o]=(0,l.useState)(!1);return(0,n.jsxs)(a.default,{hasSider:!0,children:[(0,n.jsx)(Sidebar,{}),(0,n.jsx)(ui_Contents,{children:t})]})}},54509:function(e,t,s){"use strict";function checkUserRole(e){if(!e||!e.user||!e.user.organizationMemberships||0===e.user.organizationMemberships.length)return null;let t=e.user.organizationMemberships;for(let e of t)if(e.role)return e.role.toLowerCase();return null}s.d(t,{Y:function(){return checkUserRole}})},24033:function(e,t,s){e.exports=s(20290)},2041:function(e,t,s){"use strict";var n=s(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var s=(0,a.default)({},e);return Array.isArray(t)&&t.forEach(function(e){delete s[e]}),s};var a=n(s(36386))},81853:function(e,t,s){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(2265),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,l=n.useEffect,i=n.useLayoutEffect,c=n.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!a(e,s)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var s=t(),n=o({inst:{value:s,getSnapshot:t}}),a=n[0].inst,d=n[1];return i(function(){a.value=s,a.getSnapshot=t,r(a)&&d({inst:a})},[e,s,t]),l(function(){return r(a)&&d({inst:a}),e(function(){r(a)&&d({inst:a})})},[e]),c(s),s};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},26272:function(e,t,s){"use strict";e.exports=s(81853)}},function(e){e.O(0,[2458,4092,4499,1396,3673,2971,7864,1744],function(){return e(e.s=40429)}),_N_E=e.O()}]);