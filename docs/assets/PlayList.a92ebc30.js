import{c as h,C as m,g as a,h as n,G as d,i as s,H as f,m as b,K as C,j as l,F as k,k as v,u as y,n as $,e as F,q as E,l as w,a1 as V,B as D,o as L,Y as j,Z as z}from"./vendor.51ea196d.js";/* empty css                    */import{i as A,j as N}from"./index.29767a7d.js";/* empty css                  */import{_ as g}from"./number.b4521987.js";import{M as P,S}from"./SongListItem.b7fac029.js";import{P as M}from"./PlayOne.17b63f1f.js";import{L as T}from"./PlayTwo.7d7ff5b8.js";import"./plugin-vue_export-helper.21dcd24c.js";const U={key:0},q={key:1},I=h({props:{text:null,end:null},setup(e){const c=e,u=m(!1),t=m(!1);return c.text&&c.text.length>c.end&&(u.value=!0),(o,i)=>u.value?(a(),n(f,{key:0},[t.value?(a(),n("span",q,d(e.text)+"...",1)):(a(),n("span",U,d(e.text.substring(0,e.end))+"...",1)),s("span",{class:"ml-5 text-gray-700 hover-text",onClick:i[0]||(i[0]=_=>t.value=!t.value)},"["+d(t.value?"\u6536\u8D77":"\u8BE6\u60C5")+"]",1)],64)):(a(),n(f,{key:1},[b(d(e.text),1)],64))}}),G={class:"flex items-stretch"},H=["src"],K={class:"pl-5 flex flex-col justify-between py-1 flex-1"},O={class:"text-2xl font-bold"},R={class:"flex items-center text-xs text-gray-600 pb-2 pt-3"},Y={class:"ml-2"},Z={class:"ml-5 flex text-gray-500"},J={class:"text-xs text-gray-500 leading-normal"},Q={class:"justify-self-stretch mt-5 gap-x-2 flex items-center"},W=s("span",null,"\u64AD\u653E\u5168\u90E8",-1),X=s("span",null,"\u6536\u85CF",-1),ee=h({props:{playlist:null},setup(e){return(c,u)=>{const t=C,o=$;return a(),n("div",G,[s("img",{src:e.playlist.coverImgUrl,alt:"",class:"w-44 h-44 object-cover rounded-xl flex-shrink-0"},null,8,H),s("div",K,[s("div",null,[s("div",O,d(e.playlist.name),1),s("div",R,[l(t,{src:e.playlist.creator.avatarUrl,size:"small",round:""},null,8,["src"]),s("span",Y,d(e.playlist.creator.nickname),1),s("div",Z,[(a(!0),n(f,null,k(e.playlist.tags,i=>(a(),n("div",{class:"ml-2 hover-text",key:i},"#"+d(i),1))),128))])]),s("div",J,[l(I,{text:e.playlist.description,end:90},null,8,["text"])])]),s("div",Q,[l(o,{class:"w-32 bg-emerald-500 border-0 text-white",round:"",type:"primary"},{default:v(()=>[l(g,{icon:y(M),size:"22",class:"mr-1"},null,8,["icon"]),W]),_:1}),l(o,{class:"w-32 bg-gray-100",secondary:"",round:""},{default:v(()=>[l(g,{icon:y(T),size:"18",class:"mr-1"},null,8,["icon"]),X]),_:1}),l(o,{circle:"",class:"bg-gray-100",secondary:"",icon:y(P)},null,8,["icon"])])])])}}}),te={class:"mt-2"},se=V('<div class="flex text-xs text-gray-400 py-2"><div class="flex-auto">\u6B4C\u66F2</div><div class="w-1/4">\u6B4C\u624B</div><div class="w-1/4">\u4E13\u8F91</div><div class="w-20">\u65F6\u957F</div></div>',1),le={class:"text-sm"},ae={key:0,class:"flex justify-center py-5"},ne=b("\u52A0\u8F7D\u66F4\u591A"),oe=h({props:{songs:null},setup(e){const c=e,u=m(10),t=m(1),o=F(()=>t.value-c.songs.length/u.value>=0),i=()=>{t.value=t.value+1};return(_,r)=>{const x=$;return a(),n("div",te,[se,s("div",le,[(a(!0),n(f,null,k(e.songs.slice(0,u.value*t.value),p=>(a(),E(S,{key:p.id,song:p,"show-ar-name":"","show-al-name":""},null,8,["song"]))),128))]),e.songs.length>u.value&&!y(o)?(a(),n("div",ae,[l(x,{type:"text",class:"text-center w-full",onClick:i},{default:v(()=>[ne]),_:1})])):w("",!0)])}}});const ce={class:"playlist"},ue={key:0,class:"p-5"},fe=h({setup(e){const c=m("tracks"),u=D(),t=m(),o=m([]);return L(()=>{const _=Number(u.query.id);A(_).then(r=>{t.value=r}),N(_).then(r=>{o.value=r})}),(_,r)=>{const x=j,p=z;return a(),n("div",ce,[t.value?(a(),n("div",ue,[l(ee,{playlist:t.value},null,8,["playlist"]),l(p,{class:"mt-3",modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=B=>c.value=B)},{default:v(()=>[l(x,{lazy:"",label:`\u6B4C\u66F2 ${o.value.length}`,name:"tracks"},{default:v(()=>[l(oe,{songs:o.value},null,8,["songs"])]),_:1},8,["label"]),l(x,{lazy:"",label:"\u8BC4\u8BBA",name:"comments"})]),_:1},8,["modelValue"])])):w("",!0)])}}});export{fe as default};
