import{y as l,z as _,n as o,o as d,c as m,A as f,_ as S}from"./entry.94c312fc.js";import{u as x}from"./config.c362b3c2.js";const z=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"28e0b506":u.value}));const t=x(),p=o(()=>{var e;return((((e=t.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var s,a,i;if(!n.size&&typeof((s=t.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((a=t.nuxtIcon)!=null&&a.size))return;const e=n.size||((i=t.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(d(),m("span",{style:f({width:c.value,height:c.value})},null,4))}});const y=S(z,[["__scopeId","data-v-dec2cdb4"]]);export{y as default};
