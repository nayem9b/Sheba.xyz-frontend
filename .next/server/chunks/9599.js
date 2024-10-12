"use strict";exports.id=9599,exports.ids=[9599],exports.modules={97662:(e,t,a)=>{var l=a(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(9885)),o=l(a(65721));t.default=e=>{let t=r.default.useContext(o.default),a=r.default.useMemo(()=>e?"string"==typeof e?null!=e?e:t:e instanceof Function?e(t):t:t,[e,t]);return a}},39599:(e,t,a)=>{var l=a(35876).default,r=a(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useCompactItemContext=t.default=t.SpaceCompactItemContext=t.NoCompactStyle=void 0;var o=r(a(89367)),n=r(a(87424)),i=l(a(9885)),c=a(34791),p=r(a(97662)),u=r(a(84962)),__rest=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(a[l[r]]=e[l[r]]);return a};let d=t.SpaceCompactItemContext=i.createContext(null);t.useCompactItemContext=(e,t)=>{let a=i.useContext(d),l=i.useMemo(()=>{if(!a)return"";let{compactDirection:l,isFirstItem:r,isLastItem:n}=a,i="vertical"===l?"-vertical-":"-";return(0,o.default)(`${e}-compact${i}item`,{[`${e}-compact${i}first-item`]:r,[`${e}-compact${i}last-item`]:n,[`${e}-compact${i}item-rtl`]:"rtl"===t})},[e,t,a]);return{compactSize:null==a?void 0:a.compactSize,compactDirection:null==a?void 0:a.compactDirection,compactItemClassnames:l}},t.NoCompactStyle=e=>{let{children:t}=e;return i.createElement(d.Provider,{value:null},t)};let CompactItem=e=>{var{children:t}=e,a=__rest(e,["children"]);return i.createElement(d.Provider,{value:a},t)};t.default=e=>{let{getPrefixCls:t,direction:a}=i.useContext(c.ConfigContext),{size:l,direction:r,block:s,prefixCls:m,className:f,rootClassName:v,children:g}=e,y=__rest(e,["size","direction","block","prefixCls","className","rootClassName","children"]),S=(0,p.default)(e=>null!=l?l:e),x=t("space-compact",m),[C,b]=(0,u.default)(x),G=(0,o.default)(x,b,{[`${x}-rtl`]:"rtl"===a,[`${x}-block`]:s,[`${x}-vertical`]:"vertical"===r},f,v),_=i.useContext(d),I=(0,n.default)(g),O=i.useMemo(()=>I.map((e,t)=>{let a=e&&e.key||`${x}-item-${t}`;return i.createElement(CompactItem,{key:a,compactSize:S,compactDirection:r,isFirstItem:0===t&&(!_||(null==_?void 0:_.isFirstItem)),isLastItem:t===I.length-1&&(!_||(null==_?void 0:_.isLastItem))},e)}),[l,I,_]);return 0===I.length?null:C(i.createElement("div",Object.assign({className:G},y),O))}},68656:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=e=>{let{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}}},84962:(e,t,a)=>{var l=a(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(37952),o=l(a(68656));let genSpaceStyle=e=>{let{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"}}}},genSpaceGapStyle=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};t.default=(0,r.genComponentStyleHook)("Space",e=>{let t=(0,r.mergeToken)(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[genSpaceStyle(t),genSpaceGapStyle(t),(0,o.default)(t)]},()=>({}),{resetStyle:!1})},87424:(e,t,a)=>{var l=a(92439).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[];return r.default.Children.forEach(e,function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?a=a.concat(toArray(e)):(0,o.isFragment)(e)&&e.props?a=a.concat(toArray(e.props.children,t)):a.push(e))}),a};var r=l(a(9885)),o=a(62189)}};