import{_ as c,m,o as s,c as d,b as e,t as a,F as i,h as p,d as u,v as h}from"./index-4cb120ef.js";const b={methods:{clear(){var o="Do you want to clear all?";this.$store.state.completed.length!=0&&confirm(o)==!0&&this.$store.dispatch("clearCompleted")}},computed:{...m({completed:"completed"}),total(){return this.$store.state.completed.length==0?"no":this.$store.state.completed.length}},data(){return{}}},f={class:"m-auto text-slate-900 pt-3 md:m-0 md:h-ht9 h-ht9 overflow-hidden"},x=e("div",{class:"rounded-md py-2 border-blue-300 flex flex-col border-2 rounded-m px-2 pb-3"},[e("p",{class:"text-sm font-bold text-center"},"Completed Tasks")],-1),_={class:"flex my-5"},v={class:"m-auto text-center my-1 font-semibold text-xs"},w={class:"flex flex-wrap py-5 px-1 rounded-md border-blue-300 border-2 h-ht6 overflow-y-scroll"},y={class:"rounded-lg border-2 border-blue-300 shadow-md transition w-56 pb-2 mb-4 md:w-60"},g={class:"mx-1 flex justify-center"},k={class:"w-4/12 text-center px-1 my-2 text-sm font-bold uppercase"},$=["onUpdate:modelValue"];function C(o,l,B,D,T,r){return s(),d("div",f,[x,e("div",_,[e("h5",v,"You have "+a(r.total)+" completed tasks ",1),e("button",{type:"button",class:"m-auto outline-none border-2 border-blue-300 shadow-md w-28 py-1 font-bold rounded-md text-sm",onClick:l[0]||(l[0]=t=>r.clear())},"Clear All")]),e("ul",w,[(s(!0),d(i,null,p(o.completed,t=>(s(),d("li",{key:t,class:"m-auto"},[e("div",y,[e("div",g,[e("p",k,a(t.task),1)]),u(e("textarea",{disabled:"","onUpdate:modelValue":n=>t.descrip=n,class:"outline-none ml-2 border-0 resize-none bg-slate-200 md:ml-2 pt-1 rounded-md w-11/12 h-36 text-sm indent-1 font-mono"},null,8,$),[[h,t.descrip]])])]))),128))])])}const F=c(b,[["render",C]]);export{F as default};
