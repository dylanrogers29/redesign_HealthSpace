"use strict";(self.webpackChunkdylan_rogerss_application=self.webpackChunkdylan_rogerss_application||[]).push([[351],{471:(t,e,n)=>{n.d(e,{zx:()=>o,Ei:()=>x,II:()=>p,x1:()=>u,aV:()=>g,E2:()=>j,xv:()=>I});var r=n(791),a=n(184);const l={round:"rounded-[15px]",square:"rounded-none"},s={fill:{pink_900:"bg-pink-900 text-white-A700",blue_gray_100:"bg-blue_gray-100 text-black-900",white_A700:"bg-white-A700 text-black-900",gray_100:"bg-gray-100"},outline:{black_900:"border border-black-900 border-solid text-black-900",gray_700:"border-2 border-gray-700 border-solid",white_A700:"border border-solid border-white-A700"}},i={xs:"p-[5px]",sm:"p-[9px]",md:"pl-[7px] pr-2 py-3.5",lg:"p-4",xl:"pl-[15px] pr-4 py-5","2xl":"p-[23px] sm:px-5"},o=t=>{var e;let{children:n,className:r="",leftIcon:o,rightIcon:x,shape:d="",size:c="",variant:f="",color:m="",...p}=t;return(0,a.jsxs)("button",{className:"".concat(r," ").concat(d&&l[d]||""," ").concat(c&&i[c]||""," ").concat(f&&(null===(e=s[f])||void 0===e?void 0:e[m])||""),...p,children:[!!o&&o,n,!!x&&x]})},x=t=>{let{className:e,src:n="defaultNoData.png",alt:r="testImg",...l}=t;return(0,a.jsx)("img",{className:e,src:n,alt:r,...l,loading:"lazy"})},d=t=>{let{errors:e=[],className:n=""}=t;return(null===e||void 0===e?void 0:e.length)>0?(0,a.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(n),children:e.join(", ")}):(0,a.jsx)(a.Fragment,{})},c={round:"rounded-[20px]"},f={fill:{gray_200:"bg-gray-200 text-gray-900",pink_900:"bg-pink-900 text-white-A700"},outline:{black_900:"border border-black-900 border-solid text-gray-700"}},m={xs:"pb-3 pt-[13px] px-3",sm:"pb-6 pt-8 sm:px-5 px-6"},p=r.forwardRef(((t,e)=>{var n;let{wrapClassName:r="",className:l="",name:s="",placeholder:i="",type:o="text",children:x,errors:p=[],label:u="",prefix:g,suffix:h,onChange:b,shape:j="",size:v="xs",variant:I="fill",color:y="gray_200",...w}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"".concat(r," \n              ").concat(j&&c[j]||""," \n              ").concat(I&&(null===(n=f[I])||void 0===n?void 0:n[y])||""," \n              ").concat(v&&m[v]||""),children:[!!u&&u,!!g&&g,(0,a.jsx)("input",{ref:e,className:"".concat(l," bg-transparent border-0"),type:o,name:s,placeholder:i,onChange:t=>{var e;b&&b(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)},...w}),!!h&&h]}),!!p&&(0,a.jsx)(d,{errors:p})]})})),u=t=>{let{className:e,...n}=t;return(0,a.jsx)("div",{className:e,...n})},g=t=>{let{children:e,className:n,...r}=t;return(0,a.jsx)("div",{className:n,...r,children:e})};var h=n(80),b=n(996);const j=t=>{let{columns:e,data:n=[],rowClass:r="",headerClass:l="",enableSorting:s=!1,headerProps:i={},bodyProps:o={},rowDataProps:x={},...d}=t;const c={columns:e,data:n,getCoreRowModel:(0,h.sC)(),...d};s&&(c.getSortedRowModel=(0,h.tj)());const f=(0,b.b7)(c);return(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{...i,children:f.getHeaderGroups().map((t=>(0,a.jsx)("tr",{className:l,children:t.headers.map((t=>(0,a.jsx)("th",{children:t.isPlaceholder?null:(0,b.ie)(t.column.columnDef.header,t.getContext())},t.id)))},t.id)))}),(0,a.jsx)("tbody",{...o,children:f.getRowModel().rows.map((t=>(0,a.jsx)("tr",{className:r,children:t.getVisibleCells().map((t=>(0,a.jsx)("td",{children:(0,b.ie)(t.column.columnDef.cell,t.getContext())},t.id)))},t.id)))})]})},v={txtInriaSerifRegular20:"font-inriaserif font-normal",txtInriaSerifRegular40:"font-inriaserif font-normal",txtInriaSansBold30:"font-bold font-inriasans",txtInriaSerifRegular24:"font-inriaserif font-normal",txtInterRegular40:"font-inter font-normal",txtInriaSansBold32:"font-bold font-inriasans",txtInriaSerifRegular25:"font-inriaserif font-normal",txtInterSemiBold20Gray400:"font-inter font-semibold",txtInterMedium24:"font-inter font-medium",txtInriaSansRegular24Gray900:"font-inriasans font-normal",txtInriaSansRegular18:"font-inriasans font-normal",txtInriaSerifBold33:"font-bold font-inriaserif",txtInriaSerifBold50:"font-bold font-inriaserif",txtInriaSansRegular32:"font-inriasans font-normal",txtInriaSansRegular30:"font-inriasans font-normal",txtInterRegular25:"font-inter font-normal",txtInriaSansBold30WhiteA700:"font-bold font-inriasans",txtInriaSansBold40:"font-bold font-inriasans",txtInriaSerifRegular30:"font-inriaserif font-normal",txtInterRegular30:"font-inter font-normal",txtInriaSansBold24:"font-bold font-inriasans",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtInriaSerifBold48:"font-bold font-inriaserif",txtInriaSansRegular30Black900:"font-inriasans font-normal",txtInriaSerifBold24:"font-bold font-inriaserif",txtInterBlack24:"font-black font-inter",txtInriaSansBold24Black900:"font-bold font-inriasans",txtInterSemiBold20:"font-inter font-semibold",txtInriaSansRegular20:"font-inriasans font-normal",txtInriaSansLight24:"font-inriasans font-light",txtInriaSansRegular25:"font-inriasans font-normal",txtInriaSansRegular24:"font-inriasans font-normal"},I=t=>{let{children:e,className:n="",size:r,as:l,...s}=t;const i=l||"p";return(0,a.jsx)(i,{className:"text-left ".concat(n," ").concat(r&&v[r]),...s,children:e})}},351:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});n(791);var r=n(471),a=n(184);const l=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex sm:flex-col md:flex-col flex-row font-inriaserif sm:gap-10 md:gap-10 gap-[218px] items-end justify-end mx-auto pb-[66px] md:px-10 sm:px-5 px-[66px] w-full",children:[(0,a.jsx)("div",{className:"border-[3px] border-gray-200 border-solid h-11 mb-[135px] md:mt-0 mt-[167px] rounded-[22px] w-[45px]"}),(0,a.jsxs)("div",{className:"bg-gray-200 flex md:flex-col flex-row md:gap-5 items-start justify-center mb-[135px] p-3 md:px-5 rounded-[20px] w-[56%] md:w-full",children:[(0,a.jsxs)("div",{className:"flex ml-2 md:ml-[0] md:mt-0 mt-1 relative w-[93%] md:w-full",children:[(0,a.jsxs)("div",{className:"md:h-[180px] h-[181px] my-auto w-[69%] sm:w-full",children:[(0,a.jsxs)("div",{className:"absolute flex flex-col gap-2 h-full inset-[0] items-start justify-center m-auto w-full",children:[(0,a.jsx)(r.xv,{className:"text-2xl md:text-[22px] text-gray-900 sm:text-xl",size:"txtInriaSerifBold24",children:"Physical Examination"}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,a.jsx)(r.xv,{className:"text-gray-900 text-xl",size:"txtInriaSerifRegular20",children:(0,a.jsxs)(a.Fragment,{children:["Date: 09/19/2023",(0,a.jsx)("br",{}),"Time: 12:00 p.m.",(0,a.jsx)("br",{}),"Location: Student Health Center"]})})})]}),(0,a.jsx)("div",{className:"absolute flex flex-col items-center justify-start right-[4%] top-[0]",children:(0,a.jsx)(r.xv,{className:"text-2xl md:text-[22px] text-gray-900 sm:text-xl",size:"txtInriaSerifRegular24",children:"Dr. Evil, MD"})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[9px] items-center justify-start mb-[11px] ml-[-75px] mt-auto w-[44%] z-[1]",children:[(0,a.jsx)(r.zx,{className:"cursor-pointer font-bold leading-[normal] min-w-[273px] text-center text-xl",shape:"round",color:"pink_900",size:"sm",variant:"fill",children:"Reschedule Appointment"}),(0,a.jsx)(r.zx,{className:"cursor-pointer font-bold leading-[normal] min-w-[273px] text-center text-xl",shape:"round",color:"pink_900",size:"sm",variant:"fill",children:"Cancel Appointment"})]})]}),(0,a.jsx)(r.zx,{className:"flex h-[35px] items-center justify-center mr-[9px] rounded-[17px] w-[35px]",shape:"round",color:"gray_700",size:"xs",variant:"outline",children:(0,a.jsx)(r.Ei,{className:"h-6",src:"images/img_arrowright_gray_700.svg",alt:"arrowright"})})]})]})})}}]);
//# sourceMappingURL=351.3bdc6c69.chunk.js.map