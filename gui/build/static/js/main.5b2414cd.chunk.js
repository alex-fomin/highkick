(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),s=n.n(i),o=n(82),c=n(83),u=n(84),l=n(79),p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,{href:""},r.a.createElement("img",{alt:"",src:"./logo.png",width:"30",height:"30",className:"d-inline-block align-top mr-4"}),"High kick")),r.a.createElement(l.a,null,e.children))},d=n(1),h=n.n(d),m=n(6),f=n(8),b=n(9),v=n(15),g=n(13),y=n(7),j=n(14),w=function(){function e(t){Object(f.a)(this,e),this.id=0,this.type="",this.path="",this.sid="",this.input="",this.output="",this.status="initial",this.createdAt="",this.childs=[],t.id&&(this.id=t.id),t.type&&(this.type=t.type),t.path&&(this.path=t.path),t.sid&&(this.sid=t.sid),t.input&&(this.input=t.input),t.output&&(this.output=t.output),t.status&&(this.status=t.status),t.createdAt&&(this.createdAt=t.createdAt),t.childs&&(this.childs=t.childs)}return Object(b.a)(e,[{key:"isRoot",value:function(){return""===this.path}},{key:"parentID",value:function(){if(this.isRoot())return null;var e=this.path.split("/").map(function(e){return parseInt(e)});return e[e.length-1]}},{key:"digest",value:function(){var e=this.childs.map(function(e){return e.digest()}).join();return"".concat(this.id).concat(this.status).concat(e)}}],[{key:"deserialize",value:function(t){return new e(t)}}]),e}(),k=window.location,x=k.protocol,O=k.hostname,E=["".concat(x,"//").concat(O,":8000"),window.location.origin,window.location.origin][1],C="".concat(E,"/highkick"),L={URLS:{jobs:{job:function(e){return"".concat(C,"/jobs/").concat(e)},retry:function(e){return"".concat(C,"/jobs/").concat(e,"/retry")},retryFailedChildren:function(e){return"".concat(C,"/jobs/").concat(e,"/retry_failed_children")},subtree:function(e){return"".concat(C,"/jobs/").concat(e,"/subtree")}},jobRoots:{index:"".concat(C,"/job_roots")},jobLogs:{index:function(e){return"".concat(C,"/jobs/").concat(e,"/logs")}}}},N=n(39),S=n.n(N),I={Accept:"application/json","Content-Type":"application/json"};function R(e,t){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(h.a.mark(function e(t,n){var a,r,i,s,o,c,u,l,p,d=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.length>2&&void 0!==d[2]?d[2]:null,r=Object.assign({},I),i=Object.assign({},a),Object.values(i).some(function(e){return e instanceof File})){for(r["Content-Type"]="multipart/form-data",s=new FormData,o=0,c=Object.keys(i);o<c.length;o++)u=c[o],s.append(u,i[u]);i=s}return e.prev=5,e.next=8,S.a.request({method:t,url:n,data:i,headers:r,responseType:"json",params:"get"===t?i:void 0});case 8:l=e.sent,e.next=20;break;case 11:if(e.prev=11,e.t0=e.catch(5),e.t0.response){e.next=15;break}throw e.t0;case 15:if(422!==e.t0.response.status){e.next=19;break}throw(p=new Error("422 response")).__SERVER_SIDE_ERRORS__=e.t0.response.data.errors,p;case 19:throw e.t0;case 20:return e.abrupt("return",l.data);case 21:case"end":return e.stop()}},e,null,[[5,11]])}))).apply(this,arguments)}function U(){return(U=Object(m.a)(h.a.mark(function e(t){var n,a=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",R("get",t,n));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return(F=Object(m.a)(h.a.mark(function e(t){var n,a=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,e.abrupt("return",R("post",t,n));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(){return(z=Object(m.a)(h.a.mark(function e(t){var n,a=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,e.abrupt("return",R("put",t,n));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(){return(A=Object(m.a)(h.a.mark(function e(t){var n,a=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:null,e.abrupt("return",R("delete",t,n));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var D={get:function(e){return U.apply(this,arguments)},post:function(e){return F.apply(this,arguments)},put:function(e){return z.apply(this,arguments)},del:function(e){return A.apply(this,arguments)}};var _={compose:function(e){var t=e.rootId,n=e.items,a=n.find(function(e){return e.id===t});if(!a)throw new Error("No root found");return function e(t){t.childs=n.filter(function(e){return e.parentID()===t.id});var a=!0,r=!1,i=void 0;try{for(var s,o=t.childs[Symbol.iterator]();!(a=(s=o.next()).done);a=!0)e(s.value)}catch(c){r=!0,i=c}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}}(a),a}};function J(){return(J=Object(m.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(L.URLS.jobRoots.index,t);case 2:return n=e.sent,a=n.map(w.deserialize),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(){return(T=Object(m.a)(h.a.mark(function e(t){var n,a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(L.URLS.jobs.subtree(t.id));case 2:return n=e.sent,a=n.map(w.deserialize),r=_.compose({items:a,rootId:t.id}),e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(){return(B=Object(m.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post(L.URLS.jobs.retry(t.id));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(){return(W=Object(m.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post(L.URLS.jobs.retryFailedChildren(t.id));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return(M=Object(m.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.del(L.URLS.jobs.job(t.id));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var q={loadRoots:function(e){return J.apply(this,arguments)},updateJob:function(e){return T.apply(this,arguments)},retry:function(e){return B.apply(this,arguments)},retryFailedChildren:function(e){return W.apply(this,arguments)},destroy:function(e){return M.apply(this,arguments)},treeStatus:function e(t){var n=t.childs.map(e);return n.push(t.status),n.some(function(e){return"processing"===e})?"processing":n.some(function(e){return"failed"===e})?"failed":n.every(function(e){return"completed"===e})?"completed":n.every(function(e){return"initial"===e})?"initial":"processing"}},H=n(24),V=n.n(H),Y=n(80),$=n(86),G=n(81),K=n(85),Q=function(){function e(t){Object(f.a)(this,e),this.id=0,this.content="",this.createdAt="",t.id&&(this.id=t.id),t.content&&(this.content=t.content),t.createdAt&&(this.createdAt=t.createdAt)}return Object(b.a)(e,null,[{key:"deserialize",value:function(t){return new e(t)}}]),e}();function X(){return(X=Object(m.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get(L.URLS.jobLogs.index(t.id));case 2:return n=e.sent,a=n.map(Q.deserialize).reverse(),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Z={loadLogs:function(e){return X.apply(this,arguments)}},ee=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={showLogs:!1,jobLogs:[]},n.updateItem=n.updateItem.bind(Object(y.a)(n)),n.showLogs=n.showLogs.bind(Object(y.a)(n)),n.retry=n.retry.bind(Object(y.a)(n)),n.retryFailedChildren=n.retryFailedChildren.bind(Object(y.a)(n)),n.destroy=n.destroy.bind(Object(y.a)(n)),n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.job,t=q.treeStatus(e),n=""!==e.input?JSON.parse(e.input):{},a=""!==e.output?JSON.parse(e.output):{};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"mr-1 text-muted",style:{fontSize:12}},e.id),r.a.createElement("div",{className:"mr-1 font-italic",style:{fontSize:"12px",maxWidth:"150px",overflow:"scroll"}},e.type),r.a.createElement("div",{className:"flex-fill d-flex flex-column"},r.a.createElement(V.a,{src:n,collapsed:!0,displayDataTypes:!1,enableClipboard:!1,style:{fontSize:10}}),r.a.createElement(V.a,{src:a,collapsed:!0,displayDataTypes:!1,enableClipboard:!1,style:{fontSize:10}})),r.a.createElement("div",{className:"mr-1"},this.renderStatus(e.status)),r.a.createElement("div",{className:"mr-1"},e.childs.length>0&&this.renderStatus(t,"\ud83c\udf33")),r.a.createElement("div",null,r.a.createElement(Y.a,{size:"sm"},r.a.createElement($.a,{variant:"light",onClick:this.updateItem},"\ud83d\udc41"),r.a.createElement($.a,{variant:"light",className:"text-muted",onClick:this.showLogs},"Logs"),"completed"!==e.status&&r.a.createElement($.a,{variant:"light",className:"text-success",onClick:this.retry},"\u21bb"),"completed"!==t&&e.childs.length>0&&r.a.createElement($.a,{variant:"light",className:"text-success",onClick:this.retryFailedChildren},"\u21bb \ud83c\udf42"),r.a.createElement($.a,{variant:"light",onClick:this.destroy},"\ud83d\uddd1")))),this.renderLogs())}},{key:"renderStatus",value:function(e,t){var n="completed"===e?"success":"failed"===e?"danger":"info",a="completed"===e?"\u270c":"failed"===e?"\u2718":"\u0f17";return r.a.createElement("h5",{className:"m-0 p-0"},r.a.createElement(G.a,{variant:n},t,a))}},{key:"renderLogs",value:function(){var e=this.state,t=e.showLogs,n=e.jobLogs;return t?r.a.createElement(K.a,{className:"mt-2 mb-2 bg-light",style:{fontSize:"12px",overflowY:"scroll"}},n.map(function(e){return r.a.createElement("div",{className:"d-flex",key:e.id},r.a.createElement("div",{style:{width:150}},e.createdAt),r.a.createElement("div",{className:"flex-fill"},e.content))})):null}},{key:"updateItem",value:function(){var e=this,t=this.props.job;Object(m.a)(h.a.mark(function n(){var a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.updateJob(t);case 2:a=n.sent,e.props.onItemUpdate(a);case 4:case"end":return n.stop()}},n)}))()}},{key:"showLogs",value:function(){var e=this,t=this.props.job,n=this.state.showLogs;n?this.setState({showLogs:!1}):Object(m.a)(h.a.mark(function n(){var a;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Z.loadLogs(t);case 2:a=n.sent,e.setState({showLogs:!0,jobLogs:a});case 4:case"end":return n.stop()}},n)}))()}},{key:"retry",value:function(){var e=this.props.job;!1!==window.confirm("Do you wanna to retry this job?")&&Object(m.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.retry(e);case 2:case"end":return t.stop()}},t)}))()}},{key:"retryFailedChildren",value:function(){var e=this.props.job;!1!==window.confirm("Do you wanna to retry failed children of this job?")&&Object(m.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.retryFailedChildren(e);case 2:case"end":return t.stop()}},t)}))()}},{key:"destroy",value:function(){var e=this.props.job;!1!==window.confirm("Do you wanna to destroy this job?")&&Object(m.a)(h.a.mark(function t(){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.destroy(e);case 2:case"end":return t.stop()}},t)}))()}}]),t}(r.a.Component),te={builder:function(e){return r.a.createElement(ee,{job:e.item,onItemUpdate:e.onItemUpdate})}},ne=n(3),ae=n.n(ne),re=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={item:e.item,opened:!e.item.isRoot()},n.toggle=n.toggle.bind(Object(y.a)(n)),n.onItemUpdate=n.onItemUpdate.bind(Object(y.a)(n)),n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.builder,t=this.state,n=t.item,a=t.opened;return r.a.createElement("li",{className:"list-group-item p-0"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{style:{width:40}},r.a.createElement($.a,{variant:"light",size:"sm",onClick:this.toggle},a?"\u2198":"\u2197")),r.a.createElement("div",{className:"flex-fill"},e({item:n,onItemUpdate:this.onItemUpdate}),r.a.createElement("div",{className:ae()({"d-none":!a})},r.a.createElement(ie,{items:n.childs,builder:e})))))}},{key:"toggle",value:function(){this.setState({opened:!this.state.opened})}},{key:"onItemUpdate",value:function(e){this.setState({item:e,opened:!0})}}]),t}(r.a.Component),ie=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.builder;return r.a.createElement("ul",{className:ae()("list-group","p-0")},t.map(function(e){return r.a.createElement(re,{key:e.digest(),item:e,builder:n})}))}}]),t}(r.a.Component),se=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).onPageLinkClick=n.onPageLinkClick.bind(Object(y.a)(n)),n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.maxPage;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},Array.apply(null,Array(t)).map(function(t,n){return e.renderPageLink(n+1)})))}},{key:"renderPageLink",value:function(e){var t=this,n=this.props.page===e;return r.a.createElement("li",{className:"page-item",key:e},n&&r.a.createElement("span",{className:"page-link"},e),!n&&r.a.createElement("a",{className:"page-link",href:"#",onClick:function(n){return t.onPageLinkClick(n,e)}},e))}},{key:"onPageLinkClick",value:function(e,t){e.preventDefault(),this.props.onPageChange(t)}}]),t}(r.a.Component),oe=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).state={loading:!0,page:1,maxPage:1,roots:[]},n.onPageChange=n.onPageChange.bind(Object(y.a)(n)),n}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.loadItems(1).then(function(){})}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.roots,a=e.page,i=e.maxPage;return t?r.a.createElement("div",{className:"d-flex w-100 h-100"},r.a.createElement("div",{className:"m-auto"},"Loading")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{items:n,builder:te.builder}),r.a.createElement(se,{page:a,maxPage:i,onPageChange:this.onPageChange}))}},{key:"onPageChange",value:function(e){this.loadItems(e).then(function(){})}},{key:"loadItems",value:function(){var e=Object(m.a)(h.a.mark(function e(t){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.maxPage,e.next=3,q.loadRoots({page:t});case 3:a=e.sent,this.setState({loading:!1,page:t,roots:a,maxPage:Math.max(n,t+1)});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component),ce=function(){return r.a.createElement(p,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{md:12,className:"pt-4"},r.a.createElement(oe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.5b2414cd.chunk.js.map