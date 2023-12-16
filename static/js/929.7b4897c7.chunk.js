"use strict";(self.webpackChunkdylan_rogerss_application=self.webpackChunkdylan_rogerss_application||[]).push([[929],{471:(t,e,a)=>{a.d(e,{zx:()=>o,Ei:()=>x,II:()=>p,x1:()=>u,aV:()=>g,E2:()=>j,xv:()=>N});var s=a(791),n=a(184);const r={round:"rounded-[15px]",square:"rounded-none"},l={fill:{pink_900:"bg-pink-900 text-white-A700",blue_gray_100:"bg-blue_gray-100 text-black-900",white_A700:"bg-white-A700 text-black-900",gray_100:"bg-gray-100"},outline:{black_900:"border border-black-900 border-solid text-black-900",gray_700:"border-2 border-gray-700 border-solid",white_A700:"border border-solid border-white-A700"}},i={xs:"p-[5px]",sm:"p-[9px]",md:"pl-[7px] pr-2 py-3.5",lg:"p-4",xl:"pl-[15px] pr-4 py-5","2xl":"p-[23px] sm:px-5"},o=t=>{var e;let{children:a,className:s="",leftIcon:o,rightIcon:x,shape:c="",size:m="",variant:d="",color:f="",...p}=t;return(0,n.jsxs)("button",{className:"".concat(s," ").concat(c&&r[c]||""," ").concat(m&&i[m]||""," ").concat(d&&(null===(e=l[d])||void 0===e?void 0:e[f])||""),...p,children:[!!o&&o,a,!!x&&x]})},x=t=>{let{className:e,src:a="defaultNoData.png",alt:s="testImg",...r}=t;return(0,n.jsx)("img",{className:e,src:a,alt:s,...r,loading:"lazy"})},c=t=>{let{errors:e=[],className:a=""}=t;return(null===e||void 0===e?void 0:e.length)>0?(0,n.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(a),children:e.join(", ")}):(0,n.jsx)(n.Fragment,{})},m={round:"rounded-[20px]"},d={fill:{gray_200:"bg-gray-200 text-gray-900",pink_900:"bg-pink-900 text-white-A700"},outline:{black_900:"border border-black-900 border-solid text-gray-700"}},f={xs:"pb-3 pt-[13px] px-3",sm:"pb-6 pt-8 sm:px-5 px-6"},p=s.forwardRef(((t,e)=>{var a;let{wrapClassName:s="",className:r="",name:l="",placeholder:i="",type:o="text",children:x,errors:p=[],label:u="",prefix:g,suffix:h,onChange:b,shape:j="",size:v="xs",variant:N="fill",color:I="gray_200",...w}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(s," \n              ").concat(j&&m[j]||""," \n              ").concat(N&&(null===(a=d[N])||void 0===a?void 0:a[I])||""," \n              ").concat(v&&f[v]||""),children:[!!u&&u,!!g&&g,(0,n.jsx)("input",{ref:e,className:"".concat(r," bg-transparent border-0"),type:o,name:l,placeholder:i,onChange:t=>{var e;b&&b(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.value)},...w}),!!h&&h]}),!!p&&(0,n.jsx)(c,{errors:p})]})})),u=t=>{let{className:e,...a}=t;return(0,n.jsx)("div",{className:e,...a})},g=t=>{let{children:e,className:a,...s}=t;return(0,n.jsx)("div",{className:a,...s,children:e})};var h=a(80),b=a(996);const j=t=>{let{columns:e,data:a=[],rowClass:s="",headerClass:r="",enableSorting:l=!1,headerProps:i={},bodyProps:o={},rowDataProps:x={},...c}=t;const m={columns:e,data:a,getCoreRowModel:(0,h.sC)(),...c};l&&(m.getSortedRowModel=(0,h.tj)());const d=(0,b.b7)(m);return(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{...i,children:d.getHeaderGroups().map((t=>(0,n.jsx)("tr",{className:r,children:t.headers.map((t=>(0,n.jsx)("th",{children:t.isPlaceholder?null:(0,b.ie)(t.column.columnDef.header,t.getContext())},t.id)))},t.id)))}),(0,n.jsx)("tbody",{...o,children:d.getRowModel().rows.map((t=>(0,n.jsx)("tr",{className:s,children:t.getVisibleCells().map((t=>(0,n.jsx)("td",{children:(0,b.ie)(t.column.columnDef.cell,t.getContext())},t.id)))},t.id)))})]})},v={txtInriaSerifRegular20:"font-inriaserif font-normal",txtInriaSerifRegular40:"font-inriaserif font-normal",txtInriaSansBold30:"font-bold font-inriasans",txtInriaSerifRegular24:"font-inriaserif font-normal",txtInterRegular40:"font-inter font-normal",txtInriaSansBold32:"font-bold font-inriasans",txtInriaSerifRegular25:"font-inriaserif font-normal",txtInterSemiBold20Gray400:"font-inter font-semibold",txtInterMedium24:"font-inter font-medium",txtInriaSansRegular24Gray900:"font-inriasans font-normal",txtInriaSansRegular18:"font-inriasans font-normal",txtInriaSerifBold33:"font-bold font-inriaserif",txtInriaSerifBold50:"font-bold font-inriaserif",txtInriaSansRegular32:"font-inriasans font-normal",txtInriaSansRegular30:"font-inriasans font-normal",txtInterRegular25:"font-inter font-normal",txtInriaSansBold30WhiteA700:"font-bold font-inriasans",txtInriaSansBold40:"font-bold font-inriasans",txtInriaSerifRegular30:"font-inriaserif font-normal",txtInterRegular30:"font-inter font-normal",txtInriaSansBold24:"font-bold font-inriasans",txtInterSemiBold14:"font-inter font-semibold",txtInterSemiBold18:"font-inter font-semibold",txtInriaSerifBold48:"font-bold font-inriaserif",txtInriaSansRegular30Black900:"font-inriasans font-normal",txtInriaSerifBold24:"font-bold font-inriaserif",txtInterBlack24:"font-black font-inter",txtInriaSansBold24Black900:"font-bold font-inriasans",txtInterSemiBold20:"font-inter font-semibold",txtInriaSansRegular20:"font-inriasans font-normal",txtInriaSansLight24:"font-inriasans font-light",txtInriaSansRegular25:"font-inriasans font-normal",txtInriaSansRegular24:"font-inriasans font-normal"},N=t=>{let{children:e,className:a="",size:s,as:r,...l}=t;const i=r||"p";return(0,n.jsx)(i,{className:"text-left ".concat(a," ").concat(s&&v[s]),...l,children:e})}},929:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});a(791);var s=a(871),n=a(471),r=a(184);const l=()=>{const t=(0,s.s0)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"bg-white-A700 flex font-inriaserif h-[1024px] justify-end mx-auto relative w-full",children:[(0,r.jsxs)("div",{className:"md:h-[1024px] h-[1367px] mt-auto mx-auto md:px-5 w-full",children:[(0,r.jsxs)("div",{className:"absolute md:h-[1024px] h-[1367px] inset-y-[0] my-auto pb-[343px] right-[0] w-[59%] md:w-full",children:[(0,r.jsx)(n.Ei,{className:"absolute h-[1024px] object-cover right-[0] top-[0] w-[72%]",src:"images/img_image1.png",alt:"imageOne"}),(0,r.jsx)(n.Ei,{className:"absolute h-[1024px] left-[0] object-cover top-[0]",src:"images/img_polygon2.png",alt:"polygonTwo"})]}),(0,r.jsxs)("div",{className:"absolute bg-pink-900 flex md:flex-col flex-row gap-[55px] items-end justify-start left-[0] p-[27px] sm:px-5 top-[0] w-[59%]",children:[(0,r.jsx)(n.Ei,{className:"h-[71px] sm:h-auto md:ml-[0] ml-[29px] md:mt-0 mt-2 object-cover w-[46%] md:w-full",src:"images/img_usclogohorizontalrgbgrev.png",alt:"usclogohorizont"}),(0,r.jsx)(n.xv,{className:"md:mt-0 mt-[39px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 tracking-[1.65px]",size:"txtInriaSerifBold33",children:"MyHealthSpace"})]})]}),(0,r.jsx)(n.Ei,{className:"absolute h-[188px] object-cover right-[39%] top-[0]",src:"images/img_polygon3.png",alt:"polygonThree"}),(0,r.jsxs)("div",{className:"absolute bottom-[7%] flex flex-col items-end justify-start left-[15%] md:px-5 w-[35%]",children:[(0,r.jsxs)("div",{className:"flex flex-col font-inriaserif items-start justify-start mr-[5px] w-[99%] md:w-full",children:[(0,r.jsx)(n.xv,{className:"sm:text-[40px] md:text-[46px] text-[50px] text-black-900",size:"txtInriaSerifBold50",children:"Welcome"}),(0,r.jsx)(n.xv,{className:"mt-2.5 sm:text-[21px] md:text-[23px] text-[25px] text-black-900",size:"txtInriaSerifRegular25",children:"Enter your USC account credentials"}),(0,r.jsx)("div",{className:"flex flex-col font-inriasans items-center justify-start mt-4 w-full",children:(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,r.jsx)(n.xv,{className:"text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Username:"}),(0,r.jsx)("div",{className:"border border-black-900 border-solid h-[42px] mt-[7px] rounded-[10px] w-full"}),(0,r.jsx)(n.xv,{className:"mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Password:"}),(0,r.jsx)("div",{className:"border border-black-900 border-solid h-[42px] mt-2.5 rounded-[10px] w-full"})]})})]}),(0,r.jsx)(n.xv,{className:"mt-3 text-black-900 text-xl underline",size:"txtInriaSansRegular20",children:"Forgot username/password"}),(0,r.jsx)("div",{className:"flex flex-col font-inriasans items-center justify-start mr-[5px] mt-11 w-[99%] md:w-full",children:(0,r.jsxs)("div",{className:"flex flex-col items-start justify-start w-full",children:[(0,r.jsx)(n.xv,{className:"text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Date of birth:"}),(0,r.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-2.5 w-[84%] md:w-full",children:[(0,r.jsx)(n.xv,{className:"mb-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Month:"}),(0,r.jsx)(n.xv,{className:"sm:ml-[0] ml-[172px] sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Day:"}),(0,r.jsx)(n.xv,{className:"mb-0.5 sm:ml-[0] ml-[66px] text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtInriaSansRegular24",children:"Year:"})]}),(0,r.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[5px] w-full",children:[(0,r.jsx)(n.Ei,{className:"h-[42px]",src:"images/img_month.svg",alt:"month_One"}),(0,r.jsx)(n.Ei,{className:"h-[42px]",src:"images/img_computer.svg",alt:"computer"}),(0,r.jsx)(n.Ei,{className:"h-[42px]",src:"images/img_month.svg",alt:"year_One"})]})]})}),(0,r.jsx)(n.zx,{className:"common-pointer cursor-pointer font-bold font-inriaserif leading-[normal] min-w-[184px] mt-[47px] text-3xl sm:text-[26px] md:text-[28px] text-center",onClick:()=>t("/homepage"),shape:"round",color:"pink_900",size:"sm",variant:"fill",children:"Log In"}),(0,r.jsxs)(n.xv,{className:"mt-12 text-black-900 text-xl",size:"txtInriaSansRegular20",children:[(0,r.jsxs)("span",{className:"text-black-900 font-inriasans text-left font-normal",children:["Don\u2019t have an account?"," "]}),(0,r.jsx)("a",{href:"javascript:",className:"text-black-900 font-inriasans text-left font-normal underline",children:"Register here."})]})]})]})})}}}]);
//# sourceMappingURL=929.7b4897c7.chunk.js.map