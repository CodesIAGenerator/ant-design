"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5164],{875164:function(Nn,en,w){w.d(en,{Z:function(){return En}});var Fe=w(487462),z=w(974902),le=w(297685),nn=w(912402),Ee=w(388905),an=w(88708),Ae=w(517341),Ue=w(366680),Be=w(821770),i=w(667294),tn=i.createContext(null),ke=tn,je=w(671002),H=w(204942),ue=w(601413),pe="__rc_cascader_search_mark__",rn=function(n,a,t){var r=t.label;return a.some(function(l){return String(l[r]).toLowerCase().includes(n.toLowerCase())})},ln=function(n,a,t,r){return a.map(function(l){return l[r.label]}).join(" / ")},on=function(e,n,a,t,r,l){var o=r.filter,s=o===void 0?rn:o,d=r.render,c=d===void 0?ln:d,V=r.limit,h=V===void 0?50:V,y=r.sort;return i.useMemo(function(){var m=[];if(!e)return[];function p(S,v){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;S.forEach(function(L){if(!(!y&&h!==!1&&h>0&&m.length>=h)){var N=[].concat((0,z.Z)(v),[L]),g=L[a.children],X=M||L.disabled;if((!g||g.length===0||l)&&s(e,N,{label:a.label})){var x;m.push((0,ue.Z)((0,ue.Z)({},L),{},(x={disabled:X},(0,H.Z)(x,a.label,c(e,N,t,a)),(0,H.Z)(x,pe,N),(0,H.Z)(x,a.children,void 0),x)))}g&&p(L[a.children],N,X)}})}return p(n,[]),y&&m.sort(function(S,v){return y(S[pe],v[pe],e,a)}),h!==!1&&h>0?m.slice(0,h):m},[e,n,a,t,c,l,s,y,h])},Ie="__RC_CASCADER_SPLIT__",Xe="SHOW_PARENT",Ge="SHOW_CHILD";function Q(e){return e.join(Ie)}function ge(e){return e.map(Q)}function un(e){return e.split(Ie)}function cn(e){var n=e||{},a=n.label,t=n.value,r=n.children,l=t||"value";return{label:a||"label",value:l,key:l,children:r||"children"}}function Pe(e,n){var a,t;return(a=e.isLeaf)!==null&&a!==void 0?a:!((t=e[n.children])!==null&&t!==void 0&&t.length)}function sn(e){var n=e.parentElement;if(n){var a=e.offsetTop-n.offsetTop;a-n.scrollTop<0?n.scrollTo({top:a}):a+e.offsetHeight-n.scrollTop>n.offsetHeight&&n.scrollTo({top:a+e.offsetHeight-n.offsetHeight})}}function Je(e,n){return e.map(function(a){var t;return(t=a[pe])===null||t===void 0?void 0:t.map(function(r){return r[n.value]})})}function Ye(e,n,a){var t=new Set(e),r=n();return e.filter(function(l){var o=r[l],s=o?o.parent:null,d=o?o.children:null;return o&&o.node.disabled?!0:a===Ge?!(d&&d.some(function(c){return c.key&&t.has(c.key)})):!(s&&!s.node.disabled&&t.has(s.key))})}function Ve(e,n,a){for(var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=n,l=[],o=function(){var c,V,h,y=e[s],m=(c=r)===null||c===void 0?void 0:c.findIndex(function(S){var v=S[a.value];return t?String(v)===String(y):v===y}),p=m!==-1?(V=r)===null||V===void 0?void 0:V[m]:null;l.push({value:(h=p==null?void 0:p[a.value])!==null&&h!==void 0?h:y,index:m,option:p}),r=p==null?void 0:p[a.children]},s=0;s<e.length;s+=1)o();return l}var dn=function(e,n,a,t,r){return i.useMemo(function(){var l=r||function(o){var s=t?o.slice(-1):o,d=" / ";return s.every(function(c){return["string","number"].includes((0,je.Z)(c))})?s.join(d):s.reduce(function(c,V,h){var y=i.isValidElement(V)?i.cloneElement(V,{key:h}):V;return h===0?[y]:[].concat((0,z.Z)(c),[d,y])},[])};return e.map(function(o){var s,d,c=Ve(o,n,a),V=l(c.map(function(y){var m,p=y.option,S=y.value;return(m=p==null?void 0:p[a.label])!==null&&m!==void 0?m:S}),c.map(function(y){var m=y.option;return m})),h=Q(o);return{label:V,value:h,key:h,valueCells:o,disabled:(s=c[c.length-1])===null||s===void 0||(d=s.option)===null||d===void 0?void 0:d.disabled}})},[e,n,a,r,t])},vn=w(501089),fn=function(e,n){var a=i.useRef({options:null,info:null}),t=i.useCallback(function(){return a.current.options!==e&&(a.current.options=e,a.current.info=(0,vn.I8)(e,{fieldNames:n,initWrapper:function(l){return(0,ue.Z)((0,ue.Z)({},l),{},{pathKeyEntities:{}})},processEntity:function(l,o){var s=l.nodes.map(function(d){return d[n.value]}).join(Ie);o.pathKeyEntities[s]=l,l.key=s}})),a.current.info.pathKeyEntities},[n,e]);return t},hn=function(e,n){return i.useCallback(function(a){var t=[],r=[];return a.forEach(function(l){var o=Ve(l,e,n);o.every(function(s){return s.option})?r.push(l):t.push(l)}),[r,t]},[e,n])},Fn=w(580334);function pn(e){return i.useMemo(function(){if(!e)return[!1,{}];var n={matchInputWidth:!0,limit:50};return e&&(0,je.Z)(e)==="object"&&(n=(0,ue.Z)((0,ue.Z)({},n),e)),n.limit<=0&&delete n.limit,[!0,n]},[e])}var gn=w(294184),Le=w.n(gn),mn=i.memo(function(e){var n=e.children;return n},function(e,n){return!n.open}),Cn=mn;function Sn(e){var n,a=e.prefixCls,t=e.checked,r=e.halfChecked,l=e.disabled,o=e.onClick,s=e.disableCheckbox,d=i.useContext(ke),c=d.checkable,V=typeof c!="boolean"?c:null;return i.createElement("span",{className:Le()("".concat(a),(n={},(0,H.Z)(n,"".concat(a,"-checked"),t),(0,H.Z)(n,"".concat(a,"-indeterminate"),!t&&r),(0,H.Z)(n,"".concat(a,"-disabled"),l||s),n)),onClick:o},V)}var ze="__cascader_fix_label__";function bn(e){var n=e.prefixCls,a=e.multiple,t=e.options,r=e.activeValue,l=e.prevValuePath,o=e.onToggleOpen,s=e.onSelect,d=e.onActive,c=e.checkedSet,V=e.halfCheckedSet,h=e.loadingKeys,y=e.isSelectable,m=e.searchValue,p="".concat(n,"-menu"),S="".concat(n,"-menu-item"),v=i.useContext(ke),M=v.fieldNames,L=v.changeOnSelect,N=v.expandTrigger,g=v.expandIcon,X=v.loadingIcon,x=v.dropdownMenuColumnStyle,b=N==="hover",E=i.useMemo(function(){return t.map(function(u){var k,C=u.disabled,D=u.disableCheckbox,F=u[pe],R=(k=u[ze])!==null&&k!==void 0?k:u[M.label],$=u[M.value],G=Pe(u,M),ie=F?F.map(function(ce){return ce[M.value]}):[].concat((0,z.Z)(l),[$]),K=Q(ie),q=h.includes(K),J=c.has(K),O=V.has(K);return{disabled:C,label:R,value:$,isLeaf:G,isLoading:q,checked:J,halfChecked:O,option:u,disableCheckbox:D,fullPath:ie,fullPathKey:K}})},[t,c,M,V,h,l]);return i.createElement("ul",{className:p,role:"menu"},E.map(function(u){var k,C=u.disabled,D=u.label,F=u.value,R=u.isLeaf,$=u.isLoading,G=u.checked,ie=u.halfChecked,K=u.option,q=u.fullPath,J=u.fullPathKey,O=u.disableCheckbox,ce=function(){if(!(C||m)){var j=(0,z.Z)(q);b&&R&&j.pop(),d(j)}},ve=function(){y(K)&&s(q,R)},U;return typeof K.title=="string"?U=K.title:typeof D=="string"&&(U=D),i.createElement("li",{key:J,className:Le()(S,(k={},(0,H.Z)(k,"".concat(S,"-expand"),!R),(0,H.Z)(k,"".concat(S,"-active"),r===F||r===J),(0,H.Z)(k,"".concat(S,"-disabled"),C),(0,H.Z)(k,"".concat(S,"-loading"),$),k)),style:x,role:"menuitemcheckbox",title:U,"aria-checked":G,"data-path-key":J,onClick:function(){ce(),!O&&(!a||R)&&ve()},onDoubleClick:function(){L&&o(!1)},onMouseEnter:function(){b&&ce()},onMouseDown:function(j){j.preventDefault()}},a&&i.createElement(Sn,{prefixCls:"".concat(n,"-checkbox"),checked:G,halfChecked:ie,disabled:C||O,disableCheckbox:O,onClick:function(j){O||(j.stopPropagation(),ve())}}),i.createElement("div",{className:"".concat(S,"-content")},D),!$&&g&&!R&&i.createElement("div",{className:"".concat(S,"-expand-icon")},g),$&&X&&i.createElement("div",{className:"".concat(S,"-loading-icon")},X))}))}var yn=function(){var e=(0,Ee.lk)(),n=e.multiple,a=e.open,t=i.useContext(ke),r=t.values,l=i.useState([]),o=(0,le.Z)(l,2),s=o[0],d=o[1];return i.useEffect(function(){if(a&&!n){var c=r[0];d(c||[])}},[a]),[s,d]},oe=w(915105),kn=function(e,n,a,t,r,l){var o=(0,Ee.lk)(),s=o.direction,d=o.searchValue,c=o.toggleOpen,V=o.open,h=s==="rtl",y=i.useMemo(function(){for(var x=-1,b=n,E=[],u=[],k=t.length,C=Je(n,a),D=function(K){var q=b.findIndex(function(J,O){return(C[O]?Q(C[O]):J[a.value])===t[K]});if(q===-1)return"break";x=q,E.push(x),u.push(t[K]),b=b[x][a.children]},F=0;F<k&&b;F+=1){var R=D(F);if(R==="break")break}for(var $=n,G=0;G<E.length-1;G+=1)$=$[E[G]][a.children];return[u,x,$,C]},[t,a,n]),m=(0,le.Z)(y,4),p=m[0],S=m[1],v=m[2],M=m[3],L=function(b){r(b)},N=function(b){var E=v.length,u=S;u===-1&&b<0&&(u=E);for(var k=0;k<E;k+=1){u=(u+b+E)%E;var C=v[u];if(C&&!C.disabled){var D=p.slice(0,-1).concat(M[u]?Q(M[u]):C[a.value]);L(D);return}}},g=function(){if(p.length>1){var b=p.slice(0,-1);L(b)}else c(!1)},X=function(){var b,E=((b=v[S])===null||b===void 0?void 0:b[a.children])||[],u=E.find(function(C){return!C.disabled});if(u){var k=[].concat((0,z.Z)(p),[u[a.value]]);L(k)}};i.useImperativeHandle(e,function(){return{onKeyDown:function(b){var E=b.which;switch(E){case oe.Z.UP:case oe.Z.DOWN:{var u=0;E===oe.Z.UP?u=-1:E===oe.Z.DOWN&&(u=1),u!==0&&N(u);break}case oe.Z.LEFT:{if(d)break;h?X():g();break}case oe.Z.RIGHT:{if(d)break;h?g():X();break}case oe.Z.BACKSPACE:{d||g();break}case oe.Z.ENTER:{if(p.length){var k=v[S],C=(k==null?void 0:k[pe])||[];C.length?l(C.map(function(D){return D[a.value]}),C[C.length-1]):l(p,v[S])}break}case oe.Z.ESC:c(!1),V&&b.stopPropagation()}},onKeyUp:function(){}}})},Pn=i.forwardRef(function(e,n){var a,t,r,l,o=(0,Ee.lk)(),s=o.prefixCls,d=o.multiple,c=o.searchValue,V=o.toggleOpen,h=o.notFoundContent,y=o.direction,m=o.open,p=i.useRef(),S=y==="rtl",v=i.useContext(ke),M=v.options,L=v.values,N=v.halfValues,g=v.fieldNames,X=v.changeOnSelect,x=v.onSelect,b=v.searchOptions,E=v.dropdownPrefixCls,u=v.loadData,k=v.expandTrigger,C=E||s,D=i.useState([]),F=(0,le.Z)(D,2),R=F[0],$=F[1],G=function(f){if(!(!u||c)){var Z=Ve(f,M,g),I=Z.map(function(Ce){var Se=Ce.option;return Se}),B=I[I.length-1];if(B&&!Pe(B,g)){var te=Q(f);$(function(Ce){return[].concat((0,z.Z)(Ce),[te])}),u(I)}}};i.useEffect(function(){R.length&&R.forEach(function(A){var f=un(A),Z=Ve(f,M,g,!0).map(function(B){var te=B.option;return te}),I=Z[Z.length-1];(!I||I[g.children]||Pe(I,g))&&$(function(B){return B.filter(function(te){return te!==A})})})},[M,R,g]);var ie=i.useMemo(function(){return new Set(ge(L))},[L]),K=i.useMemo(function(){return new Set(ge(N))},[N]),q=yn(),J=(0,le.Z)(q,2),O=J[0],ce=J[1],ve=function(f){ce(f),G(f)},U=function(f){var Z=f.disabled,I=Pe(f,g);return!Z&&(I||X||d)},_=function(f,Z){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;x(f),!d&&(Z||X&&(k==="hover"||I))&&V(!1)},j=i.useMemo(function(){return c?b:M},[c,b,M]),me=i.useMemo(function(){for(var A=[{options:j}],f=j,Z=Je(f,g),I=function(){var Se=O[B],fe=f.find(function(Ke,be){return(Z[be]?Q(Z[be]):Ke[g.value])===Se}),de=fe==null?void 0:fe[g.children];if(!(de!=null&&de.length))return"break";f=de,A.push({options:de})},B=0;B<O.length;B+=1){var te=I();if(te==="break")break}return A},[j,O,g]),Re=function(f,Z){U(Z)&&_(f,Pe(Z,g),!0)};kn(n,j,g,O,ve,Re),i.useEffect(function(){for(var A=0;A<O.length;A+=1){var f,Z=O.slice(0,A+1),I=Q(Z),B=(f=p.current)===null||f===void 0?void 0:f.querySelector('li[data-path-key="'.concat(I.replace(/\\{0,2}"/g,'\\"'),'"]'));B&&sn(B)}},[O]);var Y=!((a=me[0])!==null&&a!==void 0&&(t=a.options)!==null&&t!==void 0&&t.length),ne=[(r={},(0,H.Z)(r,g.value,"__EMPTY__"),(0,H.Z)(r,ze,h),(0,H.Z)(r,"disabled",!0),r)],ae=(0,ue.Z)((0,ue.Z)({},e),{},{multiple:!Y&&d,onSelect:_,onActive:ve,onToggleOpen:V,checkedSet:ie,halfCheckedSet:K,loadingKeys:R,isSelectable:U}),se=Y?[{options:ne}]:me,$e=se.map(function(A,f){var Z=O.slice(0,f),I=O[f];return i.createElement(bn,(0,Fe.Z)({key:f},ae,{searchValue:c,prefixCls:C,options:A.options,prevValuePath:Z,activeValue:I}))});return i.createElement(Cn,{open:m},i.createElement("div",{className:Le()("".concat(C,"-menus"),(l={},(0,H.Z)(l,"".concat(C,"-menu-empty"),Y),(0,H.Z)(l,"".concat(C,"-rtl"),S),l)),ref:p},$e))}),Vn=Pn;function Un(e){var n=e.onPopupVisibleChange,a=e.popupVisible,t=e.popupClassName,r=e.popupPlacement;warning(!n,"`onPopupVisibleChange` is deprecated. Please use `onDropdownVisibleChange` instead."),warning(a===void 0,"`popupVisible` is deprecated. Please use `open` instead."),warning(t===void 0,"`popupClassName` is deprecated. Please use `dropdownClassName` instead."),warning(r===void 0,"`popupPlacement` is deprecated. Please use `placement` instead.")}function Bn(e,n){if(e){var a=function t(r){for(var l=0;l<r.length;l++){var o=r[l];if(o[n==null?void 0:n.value]===null)return warning(!1,"`value` in Cascader options should not be `null`."),!0;if(Array.isArray(o[n==null?void 0:n.children])&&t(o[n==null?void 0:n.children]))return!0}};a(e)}}var jn=null,xn=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","autoClearSearchValue","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy"];function On(e){return Array.isArray(e)&&Array.isArray(e[0])}function Qe(e){return e?On(e)?e:(e.length===0?[]:[e]).map(function(n){return Array.isArray(n)?n:[n]}):[]}var De=i.forwardRef(function(e,n){var a=e.id,t=e.prefixCls,r=t===void 0?"rc-cascader":t,l=e.fieldNames,o=e.defaultValue,s=e.value,d=e.changeOnSelect,c=e.onChange,V=e.displayRender,h=e.checkable,y=e.autoClearSearchValue,m=y===void 0?!0:y,p=e.searchValue,S=e.onSearch,v=e.showSearch,M=e.expandTrigger,L=e.options,N=e.dropdownPrefixCls,g=e.loadData,X=e.popupVisible,x=e.open,b=e.popupClassName,E=e.dropdownClassName,u=e.dropdownMenuColumnStyle,k=e.popupPlacement,C=e.placement,D=e.onDropdownVisibleChange,F=e.onPopupVisibleChange,R=e.expandIcon,$=R===void 0?">":R,G=e.loadingIcon,ie=e.children,K=e.dropdownMatchSelectWidth,q=K===void 0?!1:K,J=e.showCheckedStrategy,O=J===void 0?Xe:J,ce=(0,nn.Z)(e,xn),ve=(0,an.ZP)(a),U=!!h,_=(0,Be.default)(o,{value:s,postState:Qe}),j=(0,le.Z)(_,2),me=j[0],Re=j[1],Y=i.useMemo(function(){return cn(l)},[JSON.stringify(l)]),ne=i.useMemo(function(){return L||[]},[L]),ae=fn(ne,Y),se=i.useCallback(function(T){var P=ae();return T.map(function(W){var re=P[W].nodes;return re.map(function(ee){return ee[Y.value]})})},[ae,Y]),$e=(0,Be.default)("",{value:p,postState:function(P){return P||""}}),A=(0,le.Z)($e,2),f=A[0],Z=A[1],I=function(P,W){Z(P),W.source!=="blur"&&S&&S(P)},B=pn(v),te=(0,le.Z)(B,2),Ce=te[0],Se=te[1],fe=on(f,ne,Y,N||r,Se,d),de=hn(ne,Y),Ke=i.useMemo(function(){var T=de(me),P=(0,le.Z)(T,2),W=P[0],re=P[1];if(!U||!me.length)return[W,[],re];var ee=ge(W),Oe=ae(),he=(0,Ae.S)(ee,!0,Oe),we=he.checkedKeys,Me=he.halfCheckedKeys;return[se(we),se(Me),re]},[U,me,ae,se,de]),be=(0,le.Z)(Ke,3),ye=be[0],Te=be[1],xe=be[2],wn=i.useMemo(function(){var T=ge(ye),P=Ye(T,ae,O);return[].concat((0,z.Z)(xe),(0,z.Z)(se(P)))},[ye,ae,se,xe,O]),Mn=dn(wn,ne,Y,U,V),We=(0,Ue.Z)(function(T){if(Re(T),c){var P=Qe(T),W=P.map(function(Oe){return Ve(Oe,ne,Y).map(function(he){return he.option})}),re=U?P:P[0],ee=U?W:W[0];c(re,ee)}}),He=(0,Ue.Z)(function(T){if((!U||m)&&Z(""),!U)We(T);else{var P=Q(T),W=ge(ye),re=ge(Te),ee=W.includes(P),Oe=xe.some(function(Ze){return Q(Ze)===P}),he=ye,we=xe;if(Oe&&!ee)we=xe.filter(function(Ze){return Q(Ze)!==P});else{var Me=ee?W.filter(function(Ze){return Ze!==P}):[].concat((0,z.Z)(W),[P]),_e=ae(),Ne;if(ee){var Tn=(0,Ae.S)(Me,{checked:!1,halfCheckedKeys:re},_e);Ne=Tn.checkedKeys}else{var Wn=(0,Ae.S)(Me,!0,_e);Ne=Wn.checkedKeys}var Hn=Ye(Ne,ae,O);he=se(Hn)}We([].concat((0,z.Z)(we),(0,z.Z)(he)))}}),An=function(P,W){if(W.type==="clear"){We([]);return}var re=W.values[0],ee=re.valueCells;He(ee)},In=x!==void 0?x:X,Ln=E||b,Dn=C||k,Rn=function(P){D==null||D(P),F==null||F(P)},$n=i.useMemo(function(){return{options:ne,fieldNames:Y,values:ye,halfValues:Te,changeOnSelect:d,onSelect:He,checkable:h,searchOptions:fe,dropdownPrefixCls:N,loadData:g,expandTrigger:M,expandIcon:$,loadingIcon:G,dropdownMenuColumnStyle:u}},[ne,Y,ye,Te,d,He,h,fe,N,g,M,$,G,u]),qe=!(f?fe:ne).length,Kn=f&&Se.matchInputWidth||qe?{}:{minWidth:"auto"};return i.createElement(ke.Provider,{value:$n},i.createElement(Ee.Ac,(0,Fe.Z)({},ce,{ref:n,id:ve,prefixCls:r,autoClearSearchValue:m,dropdownMatchSelectWidth:q,dropdownStyle:Kn,displayValues:Mn,onDisplayValuesChange:An,mode:U?"multiple":void 0,searchValue:f,onSearch:I,showSearch:Ce,OptionList:Vn,emptyOptions:qe,open:In,dropdownClassName:Ln,placement:Dn,onDropdownVisibleChange:Rn,getRawInputElement:function(){return ie}})))});De.SHOW_PARENT=Xe,De.SHOW_CHILD=Ge;var Zn=De,En=Zn}}]);
