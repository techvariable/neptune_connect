import{h as t,I as e,l as r,m as n,T as s,n as u,o as l,p as o,D as a,q as i,r as f,N as c,E as h,u as d,P as k,v as m,w as y,x as p,y as w,z as g,A,g as M,B as v,C,F as E,G as S,k as b,H as D,J as I,K as L,M as B,O as V,Q as N,R as O,S as R,U,V as J,W as H,X as P}from"./p-8b9b63ba.js";function j(e,r){return t.create(e.ranges.map(r),e.mainIndex)}function x(t,e){return t.update({selection:e,scrollIntoView:true,userEvent:"select"})}function q({state:t,dispatch:e},r){let n=j(t.selection,r);if(n.eq(t.selection))return false;e(x(t,n));return true}function z(e,r){return t.cursor(r?e.to:e.from)}function F(t,e){return q(t,(r=>r.empty?t.moveByChar(r,e):z(r,e)))}const G=t=>F(t,t.textDirection!=a.LTR);const K=t=>F(t,t.textDirection==a.LTR);function Q(t,e){return q(t,(r=>r.empty?t.moveByGroup(r,e):z(r,e)))}const T=t=>Q(t,t.textDirection!=a.LTR);const W=t=>Q(t,t.textDirection==a.LTR);function X(t,e,r){if(e.type.prop(r))return true;let n=e.to-e.from;return n&&(n>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function Y(e,r,n){let s=f(e).resolveInner(r.head);let u=n?c.closedBy:c.openedBy;for(let t=r.head;;){let r=n?s.childAfter(t):s.childBefore(t);if(!r)break;if(X(e,r,u))s=r;else t=n?r.to:r.from}let l=s.type.prop(u),o,a;if(l&&(o=n?i(e,s.from,1):i(e,s.to,-1))&&o.matched)a=n?o.end.to:o.end.from;else a=n?s.to:s.from;return t.cursor(a,n?-1:1)}const Z=t=>q(t,(e=>Y(t.state,e,t.textDirection!=a.LTR)));const $=t=>q(t,(e=>Y(t.state,e,t.textDirection==a.LTR)));function _(t,e){return q(t,(r=>{if(!r.empty)return z(r,e);let n=t.moveVertically(r,e);return n.head!=r.head?n:t.moveToLineBoundary(r,e)}))}const tt=t=>_(t,false);const et=t=>_(t,true);function rt(t,e){let{state:r}=t,n=j(r.selection,(r=>r.empty?t.moveVertically(r,e,t.dom.clientHeight):z(r,e)));if(n.eq(r.selection))return false;let s=t.coordsAtPos(r.selection.main.head);let u=t.scrollDOM.getBoundingClientRect();t.dispatch(x(r,n),{effects:s&&s.top>u.top&&s.bottom<u.bottom?h.scrollIntoView(n.main.head,{y:"start",yMargin:s.top-u.top}):undefined});return true}const nt=t=>rt(t,false);const st=t=>rt(t,true);function ut(e,r,n){let s=e.lineBlockAt(r.head),u=e.moveToLineBoundary(r,n);if(u.head==r.head&&u.head!=(n?s.to:s.from))u=e.moveToLineBoundary(r,n,false);if(!n&&u.head==s.from&&s.length){let n=/^\s*/.exec(e.state.sliceDoc(s.from,Math.min(s.from+100,s.to)))[0].length;if(n&&r.head!=s.from+n)u=t.cursor(s.from+n)}return u}const lt=t=>q(t,(e=>ut(t,e,true)));const ot=t=>q(t,(e=>ut(t,e,false)));const at=e=>q(e,(r=>t.cursor(e.lineBlockAt(r.head).from,1)));const it=e=>q(e,(r=>t.cursor(e.lineBlockAt(r.head).to,-1)));function ft(e,r,n){let s=false,u=j(e.selection,(r=>{let u=i(e,r.head,-1)||i(e,r.head,1)||r.head>0&&i(e,r.head-1,1)||r.head<e.doc.length&&i(e,r.head+1,-1);if(!u||!u.end)return r;s=true;let l=u.start.from==r.head?u.end.to:u.end.from;return n?t.range(r.anchor,l):t.cursor(l)}));if(!s)return false;r(x(e,u));return true}const ct=({state:t,dispatch:e})=>ft(t,e,false);function ht(e,r){let n=j(e.state.selection,(e=>{let n=r(e);return t.range(e.anchor,n.head,n.goalColumn)}));if(n.eq(e.state.selection))return false;e.dispatch(x(e.state,n));return true}function dt(t,e){return ht(t,(r=>t.moveByChar(r,e)))}const kt=t=>dt(t,t.textDirection!=a.LTR);const mt=t=>dt(t,t.textDirection==a.LTR);function yt(t,e){return ht(t,(r=>t.moveByGroup(r,e)))}const pt=t=>yt(t,t.textDirection!=a.LTR);const wt=t=>yt(t,t.textDirection==a.LTR);const gt=t=>ht(t,(e=>Y(t.state,e,t.textDirection!=a.LTR)));const At=t=>ht(t,(e=>Y(t.state,e,t.textDirection==a.LTR)));function Mt(t,e){return ht(t,(r=>t.moveVertically(r,e)))}const vt=t=>Mt(t,false);const Ct=t=>Mt(t,true);function Et(t,e){return ht(t,(r=>t.moveVertically(r,e,t.dom.clientHeight)))}const St=t=>Et(t,false);const bt=t=>Et(t,true);const Dt=t=>ht(t,(e=>ut(t,e,true)));const It=t=>ht(t,(e=>ut(t,e,false)));const Lt=e=>ht(e,(r=>t.cursor(e.lineBlockAt(r.head).from)));const Bt=e=>ht(e,(r=>t.cursor(e.lineBlockAt(r.head).to)));const Vt=({state:t,dispatch:e})=>{e(x(t,{anchor:0}));return true};const Nt=({state:t,dispatch:e})=>{e(x(t,{anchor:t.doc.length}));return true};const Ot=({state:t,dispatch:e})=>{e(x(t,{anchor:t.selection.main.anchor,head:0}));return true};const Rt=({state:t,dispatch:e})=>{e(x(t,{anchor:t.selection.main.anchor,head:t.doc.length}));return true};const Ut=({state:t,dispatch:e})=>{e(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"}));return true};const Jt=({state:e,dispatch:r})=>{let n=Zt(e).map((({from:r,to:n})=>t.range(r,Math.min(n+1,e.doc.length))));r(e.update({selection:t.create(n),userEvent:"select"}));return true};const Ht=({state:e,dispatch:r})=>{let n=j(e.selection,(r=>{var n;let s=f(e).resolveInner(r.head,1);while(!(s.from<r.from&&s.to>=r.to||s.to>r.to&&s.from<=r.from||!((n=s.parent)===null||n===void 0?void 0:n.parent)))s=s.parent;return t.range(s.to,s.from)}));r(x(e,n));return true};const Pt=({state:e,dispatch:r})=>{let n=e.selection,s=null;if(n.ranges.length>1)s=t.create([n.main]);else if(!n.main.empty)s=t.create([t.cursor(n.main.head)]);if(!s)return false;r(x(e,s));return true};function jt({state:e,dispatch:r},n){if(e.readOnly)return false;let s="delete.selection";let u=e.changeByRange((e=>{let{from:r,to:u}=e;if(r==u){let t=n(r);if(t<r)s="delete.backward";else if(t>r)s="delete.forward";r=Math.min(r,t);u=Math.max(u,t)}return r==u?{range:e}:{changes:{from:r,to:u},range:t.cursor(r)}}));if(u.changes.empty)return false;r(e.update(u,{scrollIntoView:true,userEvent:s}));return true}function xt(t,e,r){if(t instanceof h)for(let n of t.pluginField(k.atomicRanges))n.between(e,e,((t,n)=>{if(t<e&&n>e)e=r?n:t}));return e}const qt=(t,e)=>jt(t,(r=>{let{state:n}=t,s=n.doc.lineAt(r),u,a;if(!e&&r>s.from&&r<s.from+200&&!/[^ \t]/.test(u=s.text.slice(0,r-s.from))){if(u[u.length-1]=="\t")return r-1;let t=l(u,n.tabSize),e=t%o(n)||o(n);for(let t=0;t<e&&u[u.length-1-t]==" ";t++)r--;a=r}else{a=d(s.text,r-s.from,e,e)+s.from;if(a==r&&s.number!=(e?n.doc.lines:1))a+=e?1:-1}return xt(t,a,e)}));const zt=t=>qt(t,false);const Ft=t=>qt(t,true);const Gt=(t,e)=>jt(t,(r=>{let n=r,{state:s}=t,u=s.doc.lineAt(n);let l=s.charCategorizer(n);for(let t=null;;){if(n==(e?u.to:u.from)){if(n==r&&u.number!=(e?s.doc.lines:1))n+=e?1:-1;break}let o=d(u.text,n-u.from,e)+u.from;let a=u.text.slice(Math.min(n,o)-u.from,Math.max(n,o)-u.from);let i=l(a);if(t!=null&&i!=t)break;if(a!=" "||n!=r)t=i;n=o}return xt(t,n,e)}));const Kt=t=>Gt(t,false);const Qt=t=>Gt(t,true);const Tt=t=>jt(t,(e=>{let r=t.lineBlockAt(e).to;return xt(t,e<r?r:Math.min(t.state.doc.length,e+1),true)}));const Wt=t=>jt(t,(e=>{let r=t.lineBlockAt(e).from;return xt(t,e>r?r:Math.max(0,e-1),false)}));const Xt=({state:e,dispatch:r})=>{if(e.readOnly)return false;let n=e.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:s.of(["",""])},range:t.cursor(e.from)})));r(e.update(n,{scrollIntoView:true,userEvent:"input"}));return true};const Yt=({state:e,dispatch:r})=>{if(e.readOnly)return false;let n=e.changeByRange((r=>{if(!r.empty||r.from==0||r.from==e.doc.length)return{range:r};let n=r.from,s=e.doc.lineAt(n);let u=n==s.from?n-1:d(s.text,n-s.from,false)+s.from;let l=n==s.to?n+1:d(s.text,n-s.from,true)+s.from;return{changes:{from:u,to:l,insert:e.doc.slice(n,l).append(e.doc.slice(u,n))},range:t.cursor(l)}}));if(n.changes.empty)return false;r(e.update(n,{scrollIntoView:true,userEvent:"move.character"}));return true};function Zt(t){let e=[],r=-1;for(let n of t.selection.ranges){let s=t.doc.lineAt(n.from),u=t.doc.lineAt(n.to);if(!n.empty&&n.to==u.from)u=t.doc.lineAt(n.to-1);if(r>=s.number){let t=e[e.length-1];t.to=u.to;t.ranges.push(n)}else{e.push({from:s.from,to:u.to,ranges:[n]})}r=u.number+1}return e}function $t(e,r,n){if(e.readOnly)return false;let s=[],u=[];for(let r of Zt(e)){if(n?r.to==e.doc.length:r.from==0)continue;let l=e.doc.lineAt(n?r.to+1:r.from-1);let o=l.length+1;if(n){s.push({from:r.to,to:l.to},{from:r.from,insert:l.text+e.lineBreak});for(let n of r.ranges)u.push(t.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{s.push({from:l.from,to:r.from},{from:r.to,insert:e.lineBreak+l.text});for(let e of r.ranges)u.push(t.range(e.anchor-o,e.head-o))}}if(!s.length)return false;r(e.update({changes:s,scrollIntoView:true,selection:t.create(u,e.selection.mainIndex),userEvent:"move.line"}));return true}const _t=({state:t,dispatch:e})=>$t(t,e,false);const te=({state:t,dispatch:e})=>$t(t,e,true);function ee(t,e,r){if(t.readOnly)return false;let n=[];for(let e of Zt(t)){if(r)n.push({from:e.from,insert:t.doc.slice(e.from,e.to)+t.lineBreak});else n.push({from:e.to,insert:t.lineBreak+t.doc.slice(e.from,e.to)})}e(t.update({changes:n,scrollIntoView:true,userEvent:"input.copyline"}));return true}const re=({state:t,dispatch:e})=>ee(t,e,false);const ne=({state:t,dispatch:e})=>ee(t,e,true);const se=t=>{if(t.state.readOnly)return false;let{state:e}=t,r=e.changes(Zt(e).map((({from:t,to:r})=>{if(t>0)t--;else if(r<e.doc.length)r++;return{from:t,to:r}})));let n=j(e.selection,(e=>t.moveVertically(e,true))).map(r);t.dispatch({changes:r,selection:n,scrollIntoView:true,userEvent:"delete.line"});return true};function ue(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e};let r=f(t).resolveInner(e);let n=r.childBefore(e),s=r.childAfter(e),u;if(n&&s&&n.to<=e&&s.from>=e&&(u=n.type.prop(c.closedBy))&&u.indexOf(s.name)>-1&&t.doc.lineAt(n.to).from==t.doc.lineAt(s.from).from)return{from:n.to,to:s.from};return null}const le=ae(false);const oe=ae(true);function ae(u){return({state:l,dispatch:o})=>{if(l.readOnly)return false;let a=l.changeByRange((o=>{let{from:a,to:i}=o,f=l.doc.lineAt(a);let c=!u&&a==i&&ue(l,a);if(u)a=i=(i<=f.to?f:l.doc.lineAt(i)).to;let h=new e(l,{simulateBreak:a,simulateDoubleBreak:!!c});let d=r(h,a);if(d==null)d=/^\s*/.exec(l.doc.lineAt(a).text)[0].length;while(i<f.to&&/\s/.test(f.text[i-f.from]))i++;if(c)({from:a,to:i}=c);else if(a>f.from&&a<f.from+100&&!/\S/.test(f.text.slice(0,a)))a=f.from;let k=["",n(l,d)];if(c)k.push(n(l,h.lineIndent(f.from,-1)));return{changes:{from:a,to:i,insert:s.of(k)},range:t.cursor(a+1+k[1].length)}}));o(l.update(a,{scrollIntoView:true,userEvent:"input"}));return true}}function ie(e,r){let n=-1;return e.changeByRange((s=>{let u=[];for(let t=s.from;t<=s.to;){let l=e.doc.lineAt(t);if(l.number>n&&(s.empty||s.to>l.from)){r(l,u,s);n=l.number}t=l.to+1}let l=e.changes(u);return{changes:u,range:t.range(l.mapPos(s.anchor,1),l.mapPos(s.head,1))}}))}const fe=({state:t,dispatch:s})=>{if(t.readOnly)return false;let u=Object.create(null);let l=new e(t,{overrideIndentation:t=>{let e=u[t];return e==null?-1:e}});let o=ie(t,((e,s,o)=>{let a=r(l,e.from);if(a==null)return;if(!/\S/.test(e.text))a=0;let i=/^\s*/.exec(e.text)[0];let f=n(t,a);if(i!=f||o.from<e.from+i.length){u[e.from]=a;s.push({from:e.from,to:e.from+i.length,insert:f})}}));if(!o.changes.empty)s(t.update(o,{userEvent:"indent"}));return true};const ce=({state:t,dispatch:e})=>{if(t.readOnly)return false;e(t.update(ie(t,((e,r)=>{r.push({from:e.from,insert:t.facet(u)})})),{userEvent:"input.indent"}));return true};const he=({state:t,dispatch:e})=>{if(t.readOnly)return false;e(t.update(ie(t,((e,r)=>{let s=/^\s*/.exec(e.text)[0];if(!s)return;let u=l(s,t.tabSize),a=0;let i=n(t,Math.max(0,u-o(t)));while(a<s.length&&a<i.length&&s.charCodeAt(a)==i.charCodeAt(a))a++;r.push({from:e.from+a,to:e.from+s.length,insert:i.slice(a)})})),{userEvent:"delete.dedent"}));return true};const de=[{key:"Ctrl-b",run:G,shift:kt,preventDefault:true},{key:"Ctrl-f",run:K,shift:mt},{key:"Ctrl-p",run:tt,shift:vt},{key:"Ctrl-n",run:et,shift:Ct},{key:"Ctrl-a",run:at,shift:Lt},{key:"Ctrl-e",run:it,shift:Bt},{key:"Ctrl-d",run:Ft},{key:"Ctrl-h",run:zt},{key:"Ctrl-k",run:Tt},{key:"Ctrl-Alt-h",run:Kt},{key:"Ctrl-o",run:Xt},{key:"Ctrl-t",run:Yt},{key:"Ctrl-v",run:st}];const ke=[{key:"ArrowLeft",run:G,shift:kt,preventDefault:true},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:T,shift:pt},{mac:"Cmd-ArrowLeft",run:ot,shift:It},{key:"ArrowRight",run:K,shift:mt,preventDefault:true},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:W,shift:wt},{mac:"Cmd-ArrowRight",run:lt,shift:Dt},{key:"ArrowUp",run:tt,shift:vt,preventDefault:true},{mac:"Cmd-ArrowUp",run:Vt,shift:Ot},{mac:"Ctrl-ArrowUp",run:nt,shift:St},{key:"ArrowDown",run:et,shift:Ct,preventDefault:true},{mac:"Cmd-ArrowDown",run:Nt,shift:Rt},{mac:"Ctrl-ArrowDown",run:st,shift:bt},{key:"PageUp",run:nt,shift:St},{key:"PageDown",run:st,shift:bt},{key:"Home",run:ot,shift:It},{key:"Mod-Home",run:Vt,shift:Ot},{key:"End",run:lt,shift:Dt},{key:"Mod-End",run:Nt,shift:Rt},{key:"Enter",run:le},{key:"Mod-a",run:Ut},{key:"Backspace",run:zt,shift:zt},{key:"Delete",run:Ft},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Kt},{key:"Mod-Delete",mac:"Alt-Delete",run:Qt},{mac:"Mod-Backspace",run:Wt},{mac:"Mod-Delete",run:Tt}].concat(de.map((t=>({mac:t.key,run:t.run,shift:t.shift}))));const me=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Z,shift:gt},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:$,shift:At},{key:"Alt-ArrowUp",run:_t},{key:"Shift-Alt-ArrowUp",run:re},{key:"Alt-ArrowDown",run:te},{key:"Shift-Alt-ArrowDown",run:ne},{key:"Escape",run:Pt},{key:"Mod-Enter",run:oe},{key:"Alt-l",mac:"Ctrl-l",run:Jt},{key:"Mod-i",run:Ht,preventDefault:true},{key:"Mod-[",run:he},{key:"Mod-]",run:ce},{key:"Mod-Alt-\\",run:fe},{key:"Shift-Mod-k",run:se},{key:"Shift-Mod-\\",run:ct}].concat(ke);const ye=()=>{const t=JSON.parse(localStorage.getItem("isLineNumberEnabled"));const e=JSON.parse(localStorage.getItem("isHigglightActiveLine"));const r=JSON.parse(localStorage.getItem("isAutoCloseBracket"));const n=JSON.parse(localStorage.getItem("highlightSelectionMatches"));const s=JSON.parse(localStorage.getItem("isbracketMatchingEnabled"));return{isLineNumberEnabled:t===null?true:t,isHigglightActiveLine:e===null?true:e,isAutoCloseBracket:r===null?true:r,ishighlightSelectionMatches:n===null?true:n,isbracketMatchingEnabled:s===null?true:s}};const pe=ye();const we=[m(),y(),p(),w(),g(),A(),M.allowMultipleSelections.of(true),v(),C.fallback,E(),S(),b.of([...D,...me,...I,...L,...B,...V,...N,...O])];if(pe.isLineNumberEnabled)we.push(R());if(pe.ishighlightSelectionMatches)we.push(U());if(pe.isAutoCloseBracket)we.push(J());if(pe.isHigglightActiveLine)we.push(H());if(pe.isLineNumberEnabled)we.push(R());if(pe.isbracketMatchingEnabled)we.push(P());export{we as c};
//# sourceMappingURL=p-e9f9174b.js.map