(this["webpackJsonpreact-flow-add-node-button-with-redux"]=this["webpackJsonpreact-flow-add-node-button-with-redux"]||[]).push([[0],{82:function(e,t,a){e.exports=a(95)},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(30),u=a(67),i=a(14);var d=[{id:"1",type:"input",data:{label:"Input Node"},position:{x:100,y:40}},{id:"2",type:"output",data:{label:"Input Node"},position:{x:100,y:100}},{id:"12",source:"1",target:"2"}],m=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NODE":return e=[].concat(Object(i.a)(e),[{id:Math.random().toString(),position:{x:100,y:50},data:{label:t.nodeName},type:t.nodeType}]);case"ADD_EDGE":return[].concat(Object(i.a)(e),[{id:Math.random().toString(),source:t.source,target:t.target}]);default:return e}})),s=a(12),E=a(142),p=a(143),b=a(136),v=a(134),f=a(137),g=a(146),h=a(138),y=a(140);var x=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),u=Object(s.a)(c,2),i=u[0],d=u[1],m=Object(o.b)();return r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{sm:12,lg:12,xl:12,item:!0},r.a.createElement(f.a,{sx:{mt:3,minWidth:400}},r.a.createElement(h.a,null,"Node type"),r.a.createElement(v.a,{label:"Node type",value:a,onChange:function(e){return l(e.target.value)}},r.a.createElement(b.a,{selected:!0,value:"default"},"default"),r.a.createElement(b.a,{value:"input"},"input"),r.a.createElement(b.a,{value:"output"},"output")),r.a.createElement(g.a,null,"Select your Node Type"))),r.a.createElement(y.a,{sm:12,lg:12,xl:12,item:!0},r.a.createElement(f.a,{sx:{mt:3,minWidth:400}},r.a.createElement(E.a,{required:!0,id:"outlined-basic",label:"Your Node name here",onChange:function(e){return d(e.target.value)},variant:"outlined"}))),r.a.createElement(y.a,{mt:3,sm:12,lg:12,xl:12,item:!0},r.a.createElement(p.a,{variant:"outlined",onClick:function(){m({type:"ADD_NODE",nodeType:a,nodeName:i})}},"Add New Case")))},D=a(46);var O=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return r.a.createElement("div",null,r.a.createElement(D.c,{style:{background:"#f6f6f6",width:"100%",height:500,border:"1px dashed"},elements:t,onConnect:function(t){var a=t.source,n=t.target;e({type:"ADD_EDGE",source:a,target:n})}},r.a.createElement(D.a,{variant:"dots",gap:12,size:1}),r.a.createElement(D.b,null)))},w=a(147);var N=function(){return r.a.createElement(y.a,{container:!0,columnSpacing:{xs:3,sm:3,md:4},mt:6},r.a.createElement(y.a,{item:!0,sm:8},r.a.createElement(O,null)),r.a.createElement(y.a,{item:!0,sm:4},r.a.createElement(w.a,{variant:"h5",align:"left"},"Add a new cases to your flow"),r.a.createElement(x,null)))};var j=function(){return r.a.createElement(N,null)},S=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:m},r.a.createElement(j,null))),S)}},[[82,1,2]]]);
//# sourceMappingURL=main.5077b8ea.chunk.js.map