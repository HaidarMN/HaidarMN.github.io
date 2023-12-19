import{u as B,q as k,o as w,c as g,f as x,a as h,w as P}from"./firebase.75f544a7.js";import{_ as L,o as n,c as r,a as t,p as z,e as A,r as f,F as y,n as b,t as d,q as m,w as $,s as I,b as C,d as N,u as T,v as V,x as v}from"./entry.e2b93840.js";import{_ as j}from"./nuxt-link.46a87861.js";import q from"./Icon.2a43eb0c.js";import"./config.d0469160.js";const E=u=>(z("data-v-0f79c117"),u=u(),A(),u),R={class:"flex h-[calc(100vh-4rem)] min-w-full flex-col items-center justify-center gap-10"},F=E(()=>t("h1",{class:"text-6xl font-bold text-primary"},"Haidar Muhammad Naufal",-1)),O=E(()=>t("h2",{class:"w-[475px] overflow-hidden whitespace-nowrap text-2xl font-medium text-white"}," Senior Frontend Developer at Telkomsigma ",-1)),U=E(()=>t("span",{class:"absolute left-0 top-0 -z-10 h-full w-0 bg-primary transition-all duration-300 group-hover:w-full"},null,-1)),D=E(()=>t("span",{class:"z-10 p-4 text-xl font-medium text-white"},"Checkout My Projects",-1)),M=[U,D],H={__name:"main",setup(u){const c=B(),l=p=>{c.current_page=p};return(p,o)=>(n(),r("div",R,[F,O,t("button",{onClick:o[0]||(o[0]=i=>l("Projects")),class:"group relative inline-flex items-center justify-start overflow-hidden rounded-lg border-2 border-primary transition-all"},M)]))}},J=L(H,[["__scopeId","data-v-0f79c117"]]),K={class:"content mt-10 flex flex-col gap-8 bg-black"},X={class:"flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"},G={class:"flex flex-col gap-4"},Q=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"},"ABOUT",-1),W={class:"flex flex-row items-start gap-10"},Y=["src"],Z={class:"flex w-4/5 flex-col gap-6"},tt=t("p",{class:"text-lg text-white"}," I'm a frontend web developer proficient in Vue.js, Vite.js, or Nuxt.js and use Bootstrap 5 or TailwindCSS to accelerate web development. ",-1),et={class:"grid grid-cols-2 gap-4"},st={class:"text-xl font-semibold text-primary"},at={class:"text-xl text-white"},nt={class:"flex flex-col gap-4"},ot=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"},"CERTIFICATES",-1),lt={class:"grid grid-cols-4 justify-items-center gap-10"},rt={class:"flex h-full flex-col items-center justify-center gap-2 bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"},ct={class:"text-center font-bold text-white"},it={class:"text-center text-sm font-medium text-secondary"},dt={class:"flex flex-col gap-4"},pt=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"},"SKILLS",-1),_t={class:"grid grid-cols-5 justify-items-center gap-10"},ut={__name:"about",setup(u){const c=f([]),l=f([]),p=f([]),o=f([]),i=k(g(x,"Certificate"),w("date","desc"));return h(g(x,"About"),s=>{c.value=[],s.forEach(e=>{var a={id:e.id,title:e.data().title,value:e.data().value};c.value.push(a)})}),h(g(x,"Profile"),s=>{l.value=[],s.forEach(e=>{var a={id:e.id,img:e.data().img};l.value=a})}),h(g(x,"Skill"),s=>{p.value=[],s.forEach(e=>{var a={id:e.id,name:e.data().name,icon:e.data().icon};p.value.push(a)})}),h(i,s=>{o.value=[],s.forEach(e=>{var a={id:e.id,name:e.data().name,provider:e.data().provider,credential:e.data().credential,image:e.data().image};o.value.push(a)})}),(s,e)=>{const a=j,S=q;return n(),r("div",K,[t("div",X,[t("div",G,[Q,t("div",W,[t("img",{src:l.value.img,class:"h-60 w-60 rounded-lg bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0"},null,8,Y),t("div",Z,[tt,t("div",et,[(n(!0),r(y,null,b(c.value,_=>(n(),r("div",{key:_.id,class:"flex flex-row gap-2"},[t("span",st,d(_.title)+":",1),t("span",at,d(_.value),1)]))),128))])])])]),t("div",nt,[ot,t("div",lt,[(n(!0),r(y,null,b(o.value,_=>(n(),m(a,{key:_.id,to:_.credential,target:"_blank",class:"group h-36 w-full cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat",style:I({backgroundImage:`url(${_.image})`})},{default:$(()=>[t("div",rt,[t("span",ct,d(_.name),1),t("span",it,d(_.provider),1)])]),_:2},1032,["to","style"]))),128))])]),t("div",dt,[pt,t("div",_t,[(n(!0),r(y,null,b(p.value,_=>(n(),r("div",{key:_.id,class:"flex h-32 w-32 items-center justify-center rounded-full bg-black p-8"},[C(S,{name:_.icon,class:"text-primary",size:"100%"},null,8,["name"])]))),128))])])])])}}},mt=ut,gt={class:"content mt-10 flex flex-col gap-8 bg-black"},xt={class:"flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"},ht={class:"flex flex-col gap-4"},ft=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"},"EXPERIENCES",-1),yt={class:"flex flex-col gap-8"},bt={class:"text-sm text-gray"},vt={class:"mb-2 text-white"},kt={class:"flex flex-row gap-4"},wt={__name:"experiences",setup(u){const c=f([]),l=k(g(x,"Experience"),w("timestamp","desc"));return h(l,p=>{c.value=[],p.forEach(o=>{var i={id:o.id,date:o.data().date,position:o.data().position,location:o.data().location,link:o.data().link,desc:o.data().desc,skills:o.data().skills};c.value.push(i)})}),(p,o)=>{const i=q,s=j;return n(),r("div",gt,[t("div",xt,[t("div",ht,[ft,t("div",yt,[(n(!0),r(y,null,b(c.value,e=>(n(),r("div",{key:e.id,class:"flex flex-col items-start gap-2"},[t("span",bt,d(e.date),1),C(s,{to:e.link,class:"group flex flex-row items-center gap-2.5 text-2xl font-bold text-primary",target:"_blank"},{default:$(()=>[N(d(e.position)+" ",1),C(i,{name:"octicon:dot-fill-24",size:"10px"}),N(" "+d(e.location)+" ",1),e.link?(n(),m(i,{key:0,name:"bi:box-arrow-up-right",class:"transition-all group-hover:-translate-y-1 group-hover:scale-110",size:"15px"})):T("",!0)]),_:2},1032,["to"]),t("p",vt,d(e.desc),1),t("div",kt,[(n(!0),r(y,null,b(e.skills,(a,S)=>(n(),r("div",{key:S,class:"rounded-full bg-primary/20 px-2.5 py-1.5 text-xs font-medium text-primary"},d(a),1))),128))])]))),128))])])])])}}},$t=wt,Et={class:"content mt-10 flex min-w-full flex-col gap-10 bg-black"},St={class:"flex h-full flex-col gap-14 rounded-lg bg-gray/10 px-8 py-4 pb-8 shadow"},It={class:"flex flex-col gap-4"},Ct=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"},"PROJECTS",-1),jt={class:"grid grid-cols-4 gap-4"},Pt={class:"flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"},Nt={class:"text-center text-xl font-bold text-white"},Bt={class:"text-center font-medium text-secondary"},Tt={class:"flex flex-col gap-4"},qt=t("h2",{class:"text-lg tracking-[0.25rem] text-secondary"}," PERSONAL PROJECTS ",-1),Lt={class:"grid grid-cols-4 gap-4"},zt={class:"flex h-full flex-col items-center justify-center rounded-lg bg-black/70 px-4 py-2 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"},At={class:"text-center text-xl font-bold text-white"},Vt={class:"text-center font-medium text-secondary"},Rt={__name:"projects",setup(u){const c=f([]),l=f([]),p=k(g(x,"Projects"),P("personal","==",!0),w("timestamp","desc")),o=k(g(x,"Projects"),P("personal","==",!1),w("timestamp","desc"));return h(p,i=>{c.value=[],i.forEach(s=>{var e={id:s.id,name:s.data().name,background:s.data().background,link:s.data().link,type:s.data().type,timestamp:s.data().timestamp};c.value.push(e)})}),h(o,i=>{l.value=[],i.forEach(s=>{var e={id:s.id,name:s.data().name,background:s.data().background,link:s.data().link,type:s.data().type,timestamp:s.data().timestamp};l.value.push(e)})}),(i,s)=>{const e=j;return n(),r("div",Et,[t("div",St,[t("div",It,[Ct,t("div",jt,[(n(!0),r(y,null,b(l.value,a=>(n(),m(e,{key:a.id,to:a.link,target:"_blank",class:"group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat",style:I({backgroundImage:`url(${a.background})`})},{default:$(()=>[t("div",Pt,[t("span",Nt,d(a.name),1),t("span",Bt,d(a.type),1)])]),_:2},1032,["to","style"]))),128))])]),t("div",Tt,[qt,t("div",Lt,[(n(!0),r(y,null,b(c.value,a=>(n(),m(e,{key:a.id,to:a.link,target:"_blank",class:"group h-40 w-full cursor-pointer rounded-lg bg-secondary/50 bg-cover bg-center bg-no-repeat",style:I({backgroundImage:`url(${a.background})`})},{default:$(()=>[t("div",zt,[t("span",At,d(a.name),1),t("span",Vt,d(a.type),1)])]),_:2},1032,["to","style"]))),128))])])])])}}},Ft=Rt,Jt={__name:"index",setup(u){const c=B(),l=V(()=>c.current_page);return(p,o)=>{const i=J,s=mt,e=$t,a=Ft;return n(),r("div",null,[v(l)=="Home"?(n(),m(i,{key:0})):v(l)=="About"?(n(),m(s,{key:1,class:"animate__animated animate__slideInUp animate__faster"})):v(l)=="Experiences"?(n(),m(e,{key:2,class:"animate__animated animate__slideInUp animate__faster"})):v(l)=="Projects"?(n(),m(a,{key:3,class:"animate__animated animate__slideInUp animate__faster"})):T("",!0)])}}};export{Jt as default};