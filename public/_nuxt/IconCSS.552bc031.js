import{y as l,z as _,v as o,o as d,c as m,s as f,_ as S}from"./entry.745eb5c0.js";import{u as v}from"./config.90e99285.js";const x=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"28e0b506":u.value}));const s=v(),p=o(()=>{var e;return((((e=s.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var t,a,i;if(!n.size&&typeof((t=s.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((a=s.nuxtIcon)!=null&&a.size))return;const e=n.size||((i=s.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(d(),m("span",{style:f({width:c.value,height:c.value})},null,4))}});const y=S(x,[["__scopeId","data-v-dec2cdb4"]]);export{y as default};
