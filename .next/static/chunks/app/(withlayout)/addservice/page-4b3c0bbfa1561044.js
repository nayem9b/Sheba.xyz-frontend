(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1374],{85633:function(e,t,r){Promise.resolve().then(r.bind(r,58853))},58853:function(e,t,r){"use strict";r.r(t);var n=r(57437),i=r(2265),a=r(88110),s=r.n(a),o=r(33116),c=r(6127),l=r(61396),u=r.n(l),d=r(92608),v=r(32207),g=r(84460),p=r(84405);r(25398),t.default=()=>{var e;let[t]=(0,p.GM)(),[r,a]=(0,i.useState)(1),[l,h]=(0,i.useState)(10),[m,f]=(0,i.useState)(""),[y,S]=(0,i.useState)(""),[b,T]=(0,i.useState)(""),[x,P]=(0,i.useState)(),{data:E,isLoading:C}=(0,p.ZS)({refetchOnMountOrArgChange:!0,pollingInterval:1e4}),j=null==E?void 0:E.meta,deleteHandler=async e=>{o.ZP.loading("Deleting.....");try{var r,n;console.log("Hello");let i=await t(e);console.log(i),(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.statusCode)===200?o.ZP.success("Service Deleted successfully"):(null==i?void 0:null===(n=i.error)||void 0===n?void 0:n.status)==="PARSING_ERROR"&&o.ZP.error("Service is being used by user. Delete Prohibited")}catch(e){o.ZP.error("Service is being used by user. Delete Prohibited"),o.ZP.error(e.message)}};console.log(x);let{data:q}=(0,c.Ei)();null==q||null===(e=q.data)||void 0===e||e.map(e=>({label:null==e?void 0:e.title,value:null==e?void 0:e.id}));let k=[{title:"Name",dataIndex:"name"},{title:"Price",dataIndex:"price"},{title:"Location",dataIndex:"location"},{title:"Action",render:function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u(),{href:"/addservice/edit/".concat(null==e?void 0:e.id),children:(0,n.jsx)(s(),{style:{margin:"0px 5px"},onClick:()=>console.log(e),type:"primary",children:(0,n.jsx)(v.Z,{})})}),(0,n.jsx)(s(),{onClick:()=>deleteHandler(null==e?void 0:e.id),type:"primary",danger:!0,children:(0,n.jsx)(d.Z,{})})]})}}];return(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h1",{className:"mx-auto text-center mt-16",children:"All Services"}),(0,n.jsx)(g.Z,{loading:C,columns:k,dataSource:null==E?void 0:E.data,pageSize:l,totalPages:null==j?void 0:j.total,showSizeChanger:!0,onPaginationChange:(e,t)=>{console.log("Page:",e,"PageSize:",t),a(e),h(t)},onTableChange:(e,t,r)=>{let{order:n,field:i}=r;f(i),S("ascend"===n?"asc":"desc")},showPagination:!0})]})})}},84460:function(e,t,r){"use strict";var n=r(57437),i=r(68939);t.Z=e=>{let{loading:t=!1,columns:r,dataSource:a,pageSize:s,totalPages:o,showSizeChanger:c=!0,onPaginationChange:l,onTableChange:u,showPagination:d=!0}=e;return(0,n.jsx)(i.Z,{loading:t,columns:r,dataSource:a,pagination:!!d&&{pageSize:s,total:o,pageSizeOptions:[5,10,20],showSizeChanger:c,onChange:l},onChange:u})}},93779:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(38324),i=r(52967),a=r(18308);let s=(0,n.LC)({reducerPath:"api",baseQuery:(0,i.ni)({baseUrl:"http://localhost:3333/api/v1"}),endpoints:()=>({}),tagTypes:a.$})},6127:function(e,t,r){"use strict";r.d(t,{Ei:function(){return s},pe:function(){return o}});var n=r(18308),i=r(93779);let a=i.u.injectEndpoints({endpoints:e=>({categories:e.query({query:e=>({url:"/categories",method:"GET",params:e}),providesTags:[n.U.category]}),postCategory:e.mutation({query:e=>({url:"/categories",method:"POST",data:e}),invalidateTags:[n.U.category]})})}),{useCategoriesQuery:s,usePostCategoryMutation:o}=a},84405:function(e,t,r){"use strict";r.d(t,{GM:function(){return o},M_:function(){return u},ZS:function(){return s},vs:function(){return l}});var n=r(18308),i=r(93779);let a=i.u.injectEndpoints({endpoints:e=>({addServices:e.mutation({query:e=>({url:"/create-service",method:"POST",data:e}),invalidatesTags:[n.U.service]}),services:e.query({query:e=>({url:"/services",method:"GET",params:e}),providesTags:[n.U.service]}),upcomingServices:e.query({query:e=>({url:"/servicestatus/upcoming",method:"GET",params:e}),providesTags:[n.U.service]}),availableServices:e.query({query:e=>({url:"/servicestatus/available",method:"GET",params:e}),providesTags:[n.U.service]}),singleServices:e.query({query:e=>({url:"/services/".concat(e),method:"GET"}),providesTags:[n.U.service]}),deleteService:e.mutation({query:e=>({url:"/services/".concat(e),method:"DELETE"}),invalidatesTags:[n.U.service]})})}),{useServicesQuery:s,useDeleteServiceMutation:o,useSingleServicesQuery:c,useUpcomingServicesQuery:l,useAvailableServicesQuery:u}=a},18308:function(e,t,r){"use strict";var n,i;r.d(t,{$:function(){return a},U:function(){return n}}),(i=n||(n={})).service="service",i.category="category",i.booking="booking",i.reviews="reviews",i.cart="cart",i.feedback="feedback",i.user="user",i.content="content";let a=["service","category","booking","reviews","cart","feedback","user","content"]},25398:function(e,t,r){"use strict";r.d(t,{p:function(){return setToLocalStorage}});let setToLocalStorage=(e,t)=>e?localStorage.setItem(e,t):""}},function(e){e.O(0,[2458,8324,4092,3116,9559,8110,1396,8610,1241,4447,6329,5623,600,3574,3673,2044,4159,15,2971,7864,1744],function(){return e(e.s=85633)}),_N_E=e.O()}]);