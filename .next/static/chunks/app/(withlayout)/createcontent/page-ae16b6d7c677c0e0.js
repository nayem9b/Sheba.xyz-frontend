(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1057],{42925:function(e,t,r){Promise.resolve().then(r.bind(r,81612))},81612:function(e,t,r){"use strict";r.r(t);var a=r(57437);r(2265);var n=r(6127),o=r(24033),s=r(33116),i=r(27537);t.default=()=>{(0,o.useRouter)();let[e]=(0,n.pe)(),handleSubmit=async e=>{e.preventDefault();let t=e.target,r=t.heading.value,a=t.content.value,n=t.image.files[0],o=new FormData;o.append("image",n),fetch("https://api.imgbb.com/1/upload?key=4879859cdc7827193ef39d9fcfdd7c52",{method:"POST",body:o}).then(e=>e.json()).then(e=>{if(s.ZP.loading("uploading"),console.log(e),e){let n={heading:r,content:a,image:e.data.url};fetch("http://localhost:3333/api/v1/content",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{e.data?(s.ZP.success("Posted Blog"),t.reset()):s.ZP.error("Error adding category")})}})};return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8",children:[(0,a.jsx)("div",{className:"mx-auto max-w-lg text-center",children:(0,a.jsx)("h1",{className:"text-2xl font-bold sm:text-3xl",children:"Create Post"})}),(0,a.jsxs)("form",{onSubmit:handleSubmit,className:"mx-auto mb-0 mt-8 max-w-md space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"image",className:"block text-sm text-gray-600 ",children:"Image"}),(0,a.jsx)("input",{type:"file",id:"image",name:"image",accept:"image/*",className:"block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200  placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600  dark:focus:border-blue-300 cursor-pointer"}),(0,a.jsx)("label",{className:"text-sm text-gray-600 mt-10",children:"Post Heading"}),(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("input",{type:"name",name:"heading",className:"w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",placeholder:"Example: Our cultural festival at Dhaka"})})]}),(0,a.jsx)("label",{className:"text-sm mt-14 text-gray-600",children:"Content"}),(0,a.jsx)(i.Z,{rows:4,name:"content"}),(0,a.jsx)("div",{className:"flex flex-row-reverse",children:(0,a.jsx)("button",{className:"inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer",children:"Post"})})]})]})})}},93779:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var a=r(38324),n=r(52967),o=r(18308);let s=(0,a.LC)({reducerPath:"api",baseQuery:(0,n.ni)({baseUrl:"http://localhost:3333/api/v1"}),endpoints:()=>({}),tagTypes:o.$})},6127:function(e,t,r){"use strict";r.d(t,{Ei:function(){return s},pe:function(){return i}});var a=r(18308),n=r(93779);let o=n.u.injectEndpoints({endpoints:e=>({categories:e.query({query:e=>({url:"/categories",method:"GET",params:e}),providesTags:[a.U.category]}),postCategory:e.mutation({query:e=>({url:"/categories",method:"POST",data:e}),invalidateTags:[a.U.category]})})}),{useCategoriesQuery:s,usePostCategoryMutation:i}=o},18308:function(e,t,r){"use strict";var a,n;r.d(t,{$:function(){return o},U:function(){return a}}),(n=a||(a={})).service="service",n.category="category",n.booking="booking",n.reviews="reviews",n.cart="cart",n.feedback="feedback",n.user="user",n.content="content";let o=["service","category","booking","reviews","cart","feedback","user","content"]},9160:function(e,t,r){"use strict";function getRoot(e){var t;return null==e?void 0:null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}function getShadowRoot(e){return getRoot(e) instanceof ShadowRoot?getRoot(e):null}r.d(t,{A:function(){return getShadowRoot}})}},function(e){e.O(0,[2458,8324,4092,3116,9559,6329,2708,2971,7864,1744],function(){return e(e.s=42925)}),_N_E=e.O()}]);