(this["webpackJsonptask-dnd"]=this["webpackJsonptask-dnd"]||[]).push([[0],{21:function(n,e,t){},29:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(0),a=t.n(i),c=t(3),o=t.n(c),d=(t(21),t(2)),s=t(7),u=t(8),g=t(5);function b(){var n=Object(s.a)(["\n    margin: 20px;\n    height: 25px;\n    background-color: ",";\n    cursor: ",";\n    border: ",";\n    box-shadow: ","\n    border-radius: 1px;\n  "]);return b=function(){return n},n}var l=function(n){var e=n.item,t=u.a.div(b(),(function(n){return n.isDragging?"#ADD8E6":"white"}),(function(n){return n.isDragging?"grab;":"pointer;"}),(function(n){return n.isDragging?"1px solid rgba(0, 0, 0, 0.6)":"1px solid rgba(0, 0, 0, 0.3);"}),(function(n){return n.isDragging?"0px 10px 20px rgba(0, 0, 0, 0.19)":"0px 2px 3px rgba(0, 0, 0, 0.13);"}));return Object(r.jsx)(g.b,{draggableId:"".concat(n.index),index:n.index,children:function(n,i){return Object(r.jsx)(t,Object(d.a)(Object(d.a)(Object(d.a)({id:"styled-cont",ref:n.innerRef,isDragging:i.isDragging},n.draggableProps),n.dragHandleProps),{},{children:e}))}})};function p(){var n=Object(s.a)(["\n    background-color: #e0ffff;\n    padding: 15px;\n    width: 25%;\n  "]);return p=function(){return n},n}var f=function(n){var e=n.toDo,t=u.a.div(p());return Object(r.jsx)(g.c,{droppableId:e.id,children:function(n){return Object(r.jsxs)(t,Object(d.a)(Object(d.a)({ref:n.innerRef},n.droppableProps),{},{children:[Object(r.jsx)("h2",{style:{margin:"20px"},children:e.title}),(i=e.list,i.map((function(n,e){return Object(r.jsx)(l,{index:e,item:n})}))),n.placeholder]}));var i}})},x=(t(29),[{id:"1",title:"Gorecery",list:["apple","banana","milk","eggs","bread"]}]),j=function(n){if(n.destination){var e=parseInt(n.source.index),t=parseInt(n.destination.index),r=x[0].list[e],i=x[0].list.slice();i.splice(e,1),i.splice(t,0,r),x[0].list=i}};var h=function(){return Object(r.jsx)(g.a,{onDragEnd:j,children:Object(r.jsx)(f,{toDo:x[0]})})},O=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.449f80c8.chunk.js.map