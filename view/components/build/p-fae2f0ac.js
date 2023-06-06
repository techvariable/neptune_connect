import{a as r}from"./p-18b27c92.js";import{c as t,a as n}from"./p-112455b1.js";import{a as e,f as u}from"./p-62aab1e1.js";import{f as o}from"./p-02c57b85.js";var a=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.TokenType=void 0;(function(r){r["NonGremlinCode"]="NON_GREMLIN_CODE";r["Traversal"]="TRAVERSAL";r["Method"]="METHOD";r["Closure"]="CLOSURE";r["String"]="STRING";r["Word"]="WORD"})(t.TokenType||(t.TokenType={}))}));var i=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.choose=t.count=t.sum=t.neq=t.eq=t.spaces=t.pipe=t.last=void 0;var n=function(r){return r.slice(-1)[0]};t.last=n;var e=function(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}return function(t){return r.reduce((function(r,t){return t(r)}),t)}};t.pipe=e;var u=function(r){return Array(r+1).join(" ")};t.spaces=u;var o=function(r){return function(t){return r===t}};t.eq=o;var a=function(r){return function(t){return r!==t}};t.neq=a;var i=function(r,t){return r+t};t.sum=i;var f=function(r){var t;return(t=r===null||r===void 0?void 0:r.length)!==null&&t!==void 0?t:0};t.count=f;var s=function(r,t,n){return function(){var e=[];for(var u=0;u<arguments.length;u++){e[u]=arguments[u]}return r.apply(void 0,e)?t.apply(void 0,e):n.apply(void 0,e)}};t.choose=s}));var f=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});var n=function(r){if(r===void 0){r=0}return function(t){switch(t.type){case a.TokenType.NonGremlinCode:return t.code;case a.TokenType.Traversal:return(0,i.spaces)(r)+t.steps.map(n()).join(".");case a.TokenType.Method:return(0,i.spaces)(r)+n()(t.method)+"("+t.arguments.map(n()).join(", ")+")";case a.TokenType.Closure:return(0,i.spaces)(r)+n()(t.method)+"{"+(0,i.last)(t.closureCodeBlock.map((function(r){var t=r.lineOfCode,n=r.relativeIndentation;return"".concat((0,i.spaces)(Math.max(n,0))).concat(t)})))+"}";case a.TokenType.String:return(0,i.spaces)(r)+t.string;case a.TokenType.Word:return(0,i.spaces)(r)+t.word}}};t.default=n}));var s=t((function(r,t){var e=n&&n.__assign||function(){e=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u]}return r};return e.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:true});t.withIncreasedHorizontalPosition=t.withHorizontalPosition=t.withNoEndDotInfo=t.withZeroDotInfo=t.withDotInfo=t.withIncreasedIndentation=t.withZeroIndentation=t.withIndentation=void 0;var u=function(r){return function(t){return e(e({},t),{localIndentation:r})}};t.withIndentation=u;t.withZeroIndentation=(0,t.withIndentation)(0);var o=function(r){return function(t){return e(e({},t),{localIndentation:t.localIndentation+r})}};t.withIncreasedIndentation=o;var a=function(r){var t=r.shouldStartWithDot,n=r.shouldEndWithDot;return function(r){return e(e({},r),{shouldStartWithDot:t,shouldEndWithDot:n})}};t.withDotInfo=a;var i=function(r){return e(e({},r),{shouldStartWithDot:false,shouldEndWithDot:false})};t.withZeroDotInfo=i;var f=function(r){return e(e({},r),{shouldEndWithDot:false})};t.withNoEndDotInfo=f;var s=function(r){return function(t){return e(e({},t),{horizontalPosition:r})}};t.withHorizontalPosition=s;var c=function(r){return function(t){return e(e({},t),{horizontalPosition:t.horizontalPosition+r})}};t.withIncreasedHorizontalPosition=c}));var c=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.formatClosure=void 0;var n=function(r,t,n,e){if(e===0)return Math.max(r,0);return Math.max(r+t+n+1,0)};var e=function(r,t){return function(e,u){var o=e.lineOfCode,a=e.relativeIndentation;return{lineOfCode:o,relativeIndentation:a,localIndentation:n(a,r,t,u)}}};var u=function(r,t,n){return r.map(e(t,n))};var o=function(r){return function(t){return function(n){var e=n.closureCodeBlock,o=n.method;var i=t.localIndentation,c=t.horizontalPosition,v=t.maxLineLength,l=t.shouldEndWithDot;var d=(0,f.default)(i)(n);var h=r((0,s.withNoEndDotInfo)(t))(o);var p=h.width;if(d.length<=v){return{type:a.TokenType.Closure,method:h,closureCodeBlock:u(e,c,p),localIndentation:i,width:d.trim().length,shouldStartWithDot:false,shouldEndWithDot:Boolean(l)}}return{type:a.TokenType.Closure,method:h,closureCodeBlock:u(e,c,p),localIndentation:0,width:0,shouldStartWithDot:false,shouldEndWithDot:Boolean(l)}}}};t.formatClosure=o}));var v=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});t.formatMethod=void 0;var u=function(r){return function(t){return function(n){var u=(0,f.default)(t.localIndentation)(n);var o=r((0,s.withNoEndDotInfo)(t))(n.method);var c=u.length<=t.maxLineLength;if(c){return{type:a.TokenType.Method,method:o,arguments:n.arguments,argumentGroups:[n.arguments.reduce((function(n,u){return e(e([],n,true),[r((0,i.pipe)(s.withZeroIndentation,s.withZeroDotInfo,(0,s.withIncreasedHorizontalPosition)(o.width+1+n.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+n.length))(t))(u)],false)}),[])],argumentsShouldStartOnNewLine:false,localIndentation:t.localIndentation,shouldStartWithDot:false,shouldEndWithDot:Boolean(t.shouldEndWithDot),width:u.trim().length}}var v=n.arguments.map((function(n){return[r((0,i.pipe)((0,s.withIncreasedIndentation)(2),s.withZeroDotInfo,(0,s.withHorizontalPosition)(t.localIndentation+2))(t))(n)]}));var l=(0,i.last)(v);var d=l?l.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+l.length-1:0;return{type:a.TokenType.Method,method:o,arguments:n.arguments,argumentGroups:v,argumentsShouldStartOnNewLine:true,shouldStartWithDot:false,shouldEndWithDot:Boolean(t.shouldEndWithDot),localIndentation:0,width:d}}}};t.formatMethod=u}));var l=t((function(r,t){var e=n&&n.__assign||function(){e=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u]}return r};return e.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:true});t.formatNonGremlin=void 0;var u=function(r){return function(r){return e(e({},r),{width:(0,i.count)((0,i.last)(r.code.split("\n")))})}};t.formatNonGremlin=u}));var d=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.formatString=void 0;var n=function(r){return function(t){return{type:a.TokenType.String,string:t.string,localIndentation:r.localIndentation,width:t.string.length+2}}};t.formatString=n}));var h=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.STEP_MODULATORS=void 0;t.STEP_MODULATORS=["as","as_","by","emit","option","from","from_","to","read","times","until","with","with_","write"]}));var p=t((function(r,t){var e=n&&n.__assign||function(){e=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u]}return r};return e.apply(this,arguments)};var u=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});t.shouldStepBeLastStepInStepGroup=t.isStepFirstStepInStepGroup=t.isModulator=t.isTraversalSource=void 0;var o=function(r){return r.type===a.TokenType.Word&&r.word==="g"};t.isTraversalSource=o;var i=function(r){if(r.type!==a.TokenType.Method&&r.type!==a.TokenType.Closure)return false;if(r.method.type!==a.TokenType.Word)return false;return h.STEP_MODULATORS.includes(r.method.word)};t.isModulator=i;var s=function(r){var t=r.stepsInStepGroup;return!t.length};t.isStepFirstStepInStepGroup=s;var c=function(r){return function(n,o,i,s){var c=n.stepsInStepGroup,v=n.stepGroups;var l=s.slice(i+1).reduce((function(r,n){var o=r.stepsInStepGroup,a=r.hasReachedFinalModulator;if(a)return r;if((0,t.isModulator)(n)){return e(e({},r),{stepsInStepGroup:u(u([],o,true),[n],false)})}return e(e({},r),{hasReachedFinalModulator:true})}),{stepsInStepGroup:u(u([],c,true),[o],false),hasReachedFinalModulator:false}).stepsInStepGroup;var d=function(){var r=v[0]&&(0,t.isTraversalSource)(v[0].steps[0])?2:0;var n=(0,t.isModulator)(u(u([],c,true),[o],false)[0])?2:0;var e=r+n;return e}();var h=(0,f.default)(r.localIndentation+d)({type:a.TokenType.Traversal,steps:l});var p=h.length>r.maxLineLength;return p}};var v=function(r){return function(n,e,u,o){var i=n.stepsInStepGroup,f=n.stepGroups;var s=!i.length;var v=u===o.length-1;var l=!v&&(0,t.isModulator)(o[u+1]);var d=c(r)({stepsInStepGroup:i,stepGroups:f},e,u,o);var h=v||s&&(0,t.isModulator)(e)||(e.type===a.TokenType.Method||e.type===a.TokenType.Closure)&&!(l&&!d);return h}};t.shouldStepBeLastStepInStepGroup=v}));var y=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});var u=function(r,t){return function(n,u,o,a){var f=n.stepGroups;var c=f.length===0;var v=o===a.length-1;var l=f[0]&&(0,p.isTraversalSource)(f[0].steps[0])?2:0;var d=(0,p.isModulator)(u)?2:0;var h=t.localIndentation+l+d;var y=!c&&t.shouldPlaceDotsAfterLineBreaks;var b=!v&&!t.shouldPlaceDotsAfterLineBreaks;return{stepsInStepGroup:[],stepGroups:e(e([],f,true),[{steps:[r((0,i.pipe)((0,s.withIndentation)(h),(0,s.withDotInfo)({shouldStartWithDot:y,shouldEndWithDot:b}),(0,s.withHorizontalPosition)(h+ +t.shouldPlaceDotsAfterLineBreaks))(t))(u)]}],false)}}};t.default=u}));var b=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});var u=function(r,t){return function(n,u,o,a){var f=n.stepsInStepGroup,c=n.stepGroups;var v=o===a.length-1;var l=false;var d=!v&&!t.shouldPlaceDotsAfterLineBreaks;return{stepsInStepGroup:[],stepGroups:e(e([],c,true),[{steps:e(e([],f,true),[r((0,i.pipe)(s.withZeroIndentation,(0,s.withDotInfo)({shouldStartWithDot:l,shouldEndWithDot:d}),(0,s.withIncreasedHorizontalPosition)(f.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+f.length))(t))(u)],false)}],false)}}};t.default=u}));var g=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});var n=function(r,t){return function(n,e){var u=n.stepGroups;var o=t.localIndentation+(u[0]&&(0,p.isTraversalSource)(u[0].steps[0])?2:0);var a=u.length===0;var f=!a&&t.shouldPlaceDotsAfterLineBreaks;var c=false;return{stepsInStepGroup:[r((0,i.pipe)((0,s.withIndentation)(o),(0,s.withDotInfo)({shouldStartWithDot:f,shouldEndWithDot:c}),(0,s.withHorizontalPosition)(o))(t))(e)],stepGroups:u}}};t.default=n}));var m=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});var u=function(r,t){return function(n,u){var o=n.stepsInStepGroup,a=n.stepGroups;var f=t.localIndentation+o.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+o.length;return{stepsInStepGroup:e(e([],o,true),[r((0,i.pipe)(s.withZeroIndentation,(0,s.withDotInfo)({shouldStartWithDot:false,shouldEndWithDot:false}),(0,s.withHorizontalPosition)(f))(t))(u)],false),stepGroups:a}}};t.default=u}));var _=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.getStepGroups=void 0;var n=function(r,t,n){return t.reduce((0,i.choose)((0,p.shouldStepBeLastStepInStepGroup)(n),(0,i.choose)(p.isStepFirstStepInStepGroup,(0,y.default)(r,n),(0,b.default)(r,n)),(0,i.choose)(p.isStepFirstStepInStepGroup,(0,g.default)(r,n),(0,m.default)(r,n))),{stepsInStepGroup:[],stepGroups:[]}).stepGroups};t.getStepGroups=n}));var w=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});t.formatTraversal=void 0;var u=function(r){return function(t){return function(n){var u=n.steps[0]&&(0,p.isTraversalSource)(n.steps[0])?n.initialHorizontalPosition:0;var o=(0,f.default)(t.localIndentation+u)(n);if(o.length<=t.maxLineLength){return{type:a.TokenType.Traversal,steps:n.steps,stepGroups:[{steps:n.steps.reduce((function(u,o,a){var f=a===0?r(t)(o):r((0,i.pipe)(s.withZeroIndentation,(0,s.withIncreasedHorizontalPosition)(n.initialHorizontalPosition+u.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+u.length))(t))(o);return e(e([],u,true),[f],false)}),[])}],initialHorizontalPosition:n.initialHorizontalPosition,localIndentation:0,width:o.trim().length}}var c=(0,_.getStepGroups)(r,n.steps,t);var v=(0,i.last)(c);var l=v?v.steps.map((function(r){var t=r.width;return t})).reduce(i.sum,0)+c.length-1:0;return{type:a.TokenType.Traversal,steps:n.steps,stepGroups:c,initialHorizontalPosition:n.initialHorizontalPosition,localIndentation:0,width:l}}}};t.formatTraversal=u}));var O=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.formatWord=void 0;var n=function(r){return function(t){return{type:a.TokenType.Word,word:t.word,localIndentation:r.localIndentation,shouldStartWithDot:Boolean(r.shouldStartWithDot),shouldEndWithDot:Boolean(r.shouldEndWithDot),width:t.word.length}}};t.formatWord=n}));var j=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.formatSyntaxTrees=void 0;var n=function(r){return function(t){switch(t.type){case a.TokenType.NonGremlinCode:return(0,l.formatNonGremlin)(r)(t);case a.TokenType.Traversal:return(0,w.formatTraversal)(n)(r)(t);case a.TokenType.Method:return(0,v.formatMethod)(n)(r)(t);case a.TokenType.Closure:return(0,c.formatClosure)(n)(r)(t);case a.TokenType.String:return(0,d.formatString)(r)(t);case a.TokenType.Word:return(0,O.formatWord)(r)(t)}}};var e=function(r){return function(t){return t.map(n(r))}};t.formatSyntaxTrees=e}));var S=t((function(r,t){var e=n&&n.__assign||function(){e=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u]}return r};return e.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:true});t.extractGremlinQueries=void 0;var u="⦅";var o="⦆";var a="⟦";var i="⟧";var f="⦃";var s="⦄";var c="。";var v=function(r){var t=r.split("").reduce((function(r,t){if(t==="."){return e(e({},r),{word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&!r.squareBracketsCount&&!r.curlyBracketsCount?r.word+".":r.word+c})}if(t==="("){return e(e({},r),{parenthesesCount:r.parenthesesCount+(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&!r.squareBracketsCount&&!r.curlyBracketsCount?r.word+"(":r.word+u})}if(t==="["){return e(e({},r),{squareBracketsCount:r.squareBracketsCount+(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&!r.squareBracketsCount&&!r.curlyBracketsCount?r.word+"[":r.word+a})}if(t==="{"){return e(e({},r),{curlyBracketsCount:r.curlyBracketsCount+(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&!r.squareBracketsCount&&!r.curlyBracketsCount?r.word+"{":r.word+f})}if(t===")"){return e(e({},r),{parenthesesCount:r.parenthesesCount-(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&r.parenthesesCount===1&&!r.squareBracketsCount&&!r.curlyBracketsCount?r.word+")":r.word+o})}if(t==="]"){return e(e({},r),{squareBracketsCount:r.squareBracketsCount-(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&r.squareBracketsCount===1&&!r.curlyBracketsCount?r.word+"]":r.word+i})}if(t==="}"){return e(e({},r),{curlyBracketsCount:r.curlyBracketsCount-(r.isInsideSingleQuoteString?0:1),word:!r.isInsideSingleQuoteString&&!r.parenthesesCount&&!r.squareBracketsCount&&r.curlyBracketsCount===1?r.word+"}":r.word+s})}if(t==="'"){return e(e({},r),{isInsideSingleQuoteString:!r.isInsideSingleQuoteString,word:r.word+"'"})}return e(e({},r),{word:r.word+t})}),{word:"",parenthesesCount:0,squareBracketsCount:0,curlyBracketsCount:0,isInsideSingleQuoteString:false}).word;return t};var l=function(r){return r.split(c).join(".").split(u).join("(").split(o).join(")").split(a).join("[").split(i).join("]").split(f).join("{").split(s).join("}")};var d="\\s";var h="[^\\S\\r\\n]";var p="\\.";var y="\\w+".concat(h,"*\\([^\\)]*\\)");var b="\\w+".concat(h,"*\\{[^\\}]*\\}");var g="\\w+";var m="(".concat(y,"|").concat(b,"|").concat(g,")");var _="(".concat(d,"*").concat(p).concat(d,"*)");var w="g(".concat(_).concat(m,")+");var O=new RegExp(w,"g");var j=function(r){var t=v(r);var n=t.match(O);if(!n)return[];return n.map(l)};t.extractGremlinQueries=j}));var M=t((function(r,t){var e=n&&n.__spreadArray||function(r,t,n){if(n||arguments.length===2)for(var e=0,u=t.length,o;e<u;e++){if(o||!(e in t)){if(!o)o=Array.prototype.slice.call(t,0,e);o[e]=t[e]}}return r.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:true});t.parseToSyntaxTrees=t.parseNonGremlinCodeToSyntaxTree=void 0;var u=function(r){var t="";var n=0;var e=0;var u=0;var o=false;r.split("").forEach((function(r){if(r==="("&&!o){n++;t+="(";return}if(r==="["&&!o){e++;t+="[";return}if(r==="{"&&!o){u++;t+="{";return}if(r===")"&&!o){n--;t+=")";return}if(r==="]"&&!o){e--;t+="]";return}if(r==="}"&&!o){u--;t+="}";return}if(r==="'"){o=!o;t+="'";return}if(r==="."){t+=o||n||e||u?".":String.fromCharCode(28);return}t+=r}));return t.split(String.fromCharCode(28)).filter((function(r){return r!==""})).map((function(r){return r.trim()}))};var o=function(r){var t="";var n=0;var e=0;var u=0;var o=false;r.split("").forEach((function(r){if(r==="("&&!o){n++;t+="(";return}if(r==="["&&!o){e++;t+="[";return}if(r==="{"&&!o){u++;t+="{";return}if(r===")"&&!o){n--;t+=")";return}if(r==="]"&&!o){e--;t+="]";return}if(r==="}"&&!o){u--;t+="}";return}if(r==="'"){o=!o;t+="'";return}if(r===","){t+=o||n||e||u?",":String.fromCharCode(28);return}t+=r}));return t.split(String.fromCharCode(28)).filter((function(r){return r!==""})).map((function(r){return r.trim()}))};var f=function(r){var t="";var n=0;var e=false;r.split("").forEach((function(r){if(r==="("&&!e){if(n===0){t+=String.fromCharCode(28)}n++;t+="(";return}if(r==="["&&!e){t+="[";return}if(r==="{"&&!e){t+="{";return}if(r===")"&&!e){n--;t+=")";return}if(r==="]"&&!e){t+="]";return}if(r==="}"&&!e){t+="}";return}if(r==="'"){e=!e;t+="'";return}t+=r}));return t.split(String.fromCharCode(28)).filter((function(r){return r!==""})).map((function(r){return r.trim()}))};var s=function(r){var t="";var n=0;var e=false;r.split("").forEach((function(r){if(r==="("&&!e){t+="(";return}if(r==="["&&!e){t+="[";return}if(r==="{"&&!e){if(n===0){t+=String.fromCharCode(28)}n++;t+="{";return}if(r===")"&&!e){t+=")";return}if(r==="]"&&!e){t+="]";return}if(r==="}"&&!e){n--;t+="}";return}if(r==="'"){e=!e;t+="'";return}t+=r}));return t.split(String.fromCharCode(28)).filter((function(r){return r!==""})).map((function(r){return r.trim()}))};var c=function(r){if(r.length<2)return false;if(r.charAt(0)!=="(")return false;if(r.slice(-1)!==")")return false;return true};var v=function(r){if(r.length<2)return false;if(r.charAt(0)!=="{")return false;if(r.slice(-1)!=="}")return false;return true};var l=function(r){if(r.length<2)return false;if(r.charAt(0)!==r.substr(-1))return false;if(['"',"'"].includes(r.charAt(0)))return true;return false};var d=function(r){return(0,i.pipe)(f,i.last,c)(r)};var h=function(r){return(0,i.pipe)(s,i.last,v)(r)};var p=function(r){return r.slice(1,-1)};var y=function(r){return r.slice(1,-1)};var b=function(r){var t=f(r);return{methodToken:t.slice(0,-1).join(""),argumentTokens:(0,i.pipe)(p,o)(t.slice(-1)[0])}};var g=function(r){return r.split("").findIndex((0,i.neq)(" "))};var m=function(r,t){var n=s(r);var e=n.slice(0,-1).join("");var u=y(n.slice(-1)[0]);var o=t.substr(0,t.indexOf(u)).split("\n").slice(-1)[0].length;return{methodToken:e,closureCodeBlock:y(n.slice(-1)[0]).split("\n").map((function(r,t){return{lineOfCode:r.trimStart(),relativeIndentation:t===0?g(r):g(r)-o}}))}};var _=function(r,t){return function(n){var e=u(n);if(e.length===1){var o=e[0];if(d(o)){var i=b(o),f=i.methodToken,s=i.argumentTokens;return{type:a.TokenType.Method,method:_(r)(f),arguments:s.map(_(r))}}if(h(o)){var c=m(o,r),f=c.methodToken,v=c.closureCodeBlock;return{type:a.TokenType.Closure,method:_(r)(f),closureCodeBlock:v}}if(l(o)){return{type:a.TokenType.String,string:o}}return{type:a.TokenType.Word,word:o}}return{type:a.TokenType.Traversal,steps:e.map(_(r)),initialHorizontalPosition:t?r.substr(0,r.indexOf(n)).split("\n").slice(-1)[0].length:0}}};var w=function(r){return{type:a.TokenType.NonGremlinCode,code:r}};t.parseNonGremlinCodeToSyntaxTree=w;var O=function(r){var n=(0,S.extractGremlinQueries)(r);var u=n.reduce((function(n,u){var o=n.remainingCode.indexOf(u);var a=n.remainingCode.substr(0,o);return{syntaxTrees:e(e([],n.syntaxTrees,true),[(0,t.parseNonGremlinCodeToSyntaxTree)(a),_(r,true)(u)],false),remainingCode:n.remainingCode.substr(o+u.length)}}),{syntaxTrees:[],remainingCode:r}),o=u.syntaxTrees,a=u.remainingCode;if(!a)return o;return e(e([],o,true),[(0,t.parseNonGremlinCodeToSyntaxTree)(a)],false)};t.parseToSyntaxTrees=O}));var D=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.recreateQueryStringFromFormattedSyntaxTrees=void 0;var n=function(r){if(r.type===a.TokenType.NonGremlinCode){return r.code}if(r.type===a.TokenType.Traversal){return r.stepGroups.map((function(r){return r.steps.map(n).join(".")})).join("\n")}if(r.type===a.TokenType.Method){return(r.shouldStartWithDot?".":"")+[n(r.method)+"(",r.argumentGroups.map((function(r){return r.map(n).join(", ")})).join(",\n")+")"+(r.shouldEndWithDot?".":"")].join(r.argumentsShouldStartOnNewLine?"\n":"")}if(r.type===a.TokenType.Closure){return(r.shouldStartWithDot?".":"")+n(r.method)+"{"+r.closureCodeBlock.map((function(r,t){var n=r.lineOfCode,e=r.localIndentation;return"".concat((0,i.spaces)(e)).concat(n)})).join("\n")+"}"+(r.shouldEndWithDot?".":"")}if(r.type===a.TokenType.String){return(0,i.spaces)(r.localIndentation)+r.string}if(r.type===a.TokenType.Word){return(0,i.spaces)(r.localIndentation)+(r.shouldStartWithDot?".":"")+r.word+(r.shouldEndWithDot?".":"")}return""};var e=function(r){return function(t){if(!t)return t;return(0,i.spaces)(r)+t}};var u=function(r){return r.split("").every((0,i.eq)(" "))};var o=function(r){if(u(r))return"";return r};var f=function(r){var t=r.globalIndentation;return function(r){return r.map(n).join("").split("\n").map(e(t)).map(o).join("\n")}};t.recreateQueryStringFromFormattedSyntaxTrees=f}));var I=t((function(r,t){var e=n&&n.__assign||function(){e=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++){t=arguments[n];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u]}return r};return e.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:true});t.formatQuery=void 0;var u=function(r){return e({indentation:0,maxLineLength:80,shouldPlaceDotsAfterLineBreaks:false},r)};var o=function(r){var t=r.indentation,n=r.maxLineLength,e=r.shouldPlaceDotsAfterLineBreaks;return{globalIndentation:t,localIndentation:0,maxLineLength:n-t,shouldPlaceDotsAfterLineBreaks:e,shouldStartWithDot:false,shouldEndWithDot:false,horizontalPosition:0}};var a=function(r,t){var n=o(u(t!==null&&t!==void 0?t:{}));return(0,i.pipe)(M.parseToSyntaxTrees,(0,j.formatSyntaxTrees)(n),(0,D.recreateQueryStringFromFormattedSyntaxTrees)(n))(r)};t.formatQuery=a}));var W=t((function(r,t){Object.defineProperty(t,"__esModule",{value:true});t.formatQuery=void 0;Object.defineProperty(t,"formatQuery",{enumerable:true,get:function(){return I.formatQuery}})}));const C=(r,t,n)=>{const e=r.get(t);if(!e){r.set(t,[n])}else if(!e.includes(n)){e.push(n)}};const E=(r,t)=>{let n;return(...e)=>{if(n){clearTimeout(n)}n=setTimeout((()=>{n=0;r(...e)}),t)}};const A=r=>!("isConnected"in r)||r.isConnected;const G=E((r=>{for(let t of r.keys()){r.set(t,r.get(t).filter(A))}}),2e3);const B=()=>{if(typeof e!=="function"){return{}}const r=new Map;return{dispose:()=>r.clear(),get:t=>{const n=e();if(n){C(r,t,n)}},set:t=>{const n=r.get(t);if(n){r.set(t,n.filter(u))}G(r)},reset:()=>{r.forEach((r=>r.forEach(u)));G(r)}}};const k=r=>typeof r==="function"?r():r;const P=(r,t=((r,t)=>r!==t))=>{const n=k(r);let e=new Map(Object.entries(n!==null&&n!==void 0?n:{}));const u={dispose:[],get:[],set:[],reset:[]};const o=()=>{var t;e=new Map(Object.entries((t=k(r))!==null&&t!==void 0?t:{}));u.reset.forEach((r=>r()))};const a=()=>{u.dispose.forEach((r=>r()));o()};const i=r=>{u.get.forEach((t=>t(r)));return e.get(r)};const f=(r,n)=>{const o=e.get(r);if(t(n,o,r)){e.set(r,n);u.set.forEach((t=>t(r,n,o)))}};const s=typeof Proxy==="undefined"?{}:new Proxy(n,{get(r,t){return i(t)},ownKeys(r){return Array.from(e.keys())},getOwnPropertyDescriptor(){return{enumerable:true,configurable:true}},has(r,t){return e.has(t)},set(r,t,n){f(t,n);return true}});const c=(r,t)=>{u[r].push(t);return()=>{q(u[r],t)}};const v=(t,n)=>{const e=c("set",((r,e)=>{if(r===t){n(e)}}));const u=c("reset",(()=>n(k(r)[t])));return()=>{e();u()}};const l=(...r)=>{const t=r.reduce(((r,t)=>{if(t.set){r.push(c("set",t.set))}if(t.get){r.push(c("get",t.get))}if(t.reset){r.push(c("reset",t.reset))}if(t.dispose){r.push(c("dispose",t.dispose))}return r}),[]);return()=>t.forEach((r=>r()))};const d=r=>{const t=e.get(r);u.set.forEach((n=>n(r,t,t)))};return{state:s,get:i,set:f,on:c,onChange:v,use:l,dispose:a,reset:o,forceUpdate:d}};const q=(r,t)=>{const n=r.indexOf(t);if(n>=0){r[n]=r[r.length-1];r.length--}};const L=(r,t)=>{const n=P(r,t);n.use(B());return n};const{state:T,onChange:N,reset:x}=L({queryMode:"read",isCustomQuery:false,isFetchedData:false,showMeta:false,isLoading:false,isError:false,canEdit:false,hostUrl:"",selectedNodeName:null,limit:10,page:1,total:0,order:{},filter:{},updateId:null,changesMade:{},deleteId:null,insertNodeLabel:null,insertProperties:{},queryHistory:[],saveTitle:"",nodes:[],columnHeaders:[],savedColumnHeaders:[],availableNodes:[],query:"\n\n\n\n\n\n\n\n\n",queryParameter:"{\n  \n}\n\n\n\n\n\n",errorMessage:null,editorTextFlag:false,viewQuery:null,stateQuery:null,viewParameter:null,stateParameter:null,timeTaken:null,refreshData:async()=>{$(T.selectedNodeName)}});N("queryMode",(r=>{switch(r){case"read":T.insertNodeLabel=null;T.insertProperties={};T.updateId=null;T.changesMade={};T.deleteId=null;case"insert":T.limit=10;T.page=1;T.order={};T.filter={};T.updateId=null;T.changesMade={};T.deleteId=null;case"update":T.limit=10;T.page=1;T.order={};T.filter={};T.deleteId=null;T.insertNodeLabel=null;T.insertProperties={};case"delete":T.limit=10;T.page=1;T.order={};T.filter={};T.updateId=null;T.changesMade={};T.insertNodeLabel=null;T.insertProperties={}}}));N("queryHistory",(r=>{const t=new Set;r.forEach((r=>{let n=["id","ownerId"];Object.keys(r).filter((r=>!n.includes(r))).forEach((r=>{t.add(r)}))}));T.savedColumnHeaders=[...t].map((r=>{let t="string";T.queryHistory.every((n=>{if(n[r]!==undefined){t=typeof n[r];return false}return true}));return{alias:r,title:r,type:t}}))}));N("nodes",(r=>{const t=new Set;r.forEach((r=>{Object.keys(r).forEach((r=>{t.add(r)}))}));T.columnHeaders=[...t].map((t=>{let n="string";r.every((r=>{if(r[t]!==undefined){n=typeof r[t];return false}return true}));return{alias:t,title:t,type:n}}))}));N("query",(r=>{if(T.viewQuery){let t=T.viewQuery.state.update({changes:{from:0,to:T.viewQuery.state.doc.toString().length,insert:`${r}`}});T.viewQuery.dispatch(t)}}));N("queryParameter",(r=>{if(T.viewParameter){let t=T.viewParameter.state.update({changes:{from:0,to:T.viewParameter.state.doc.toString().length,insert:`${r}`}});T.viewParameter.dispatch(t)}}));const R=()=>({read:{showMeta:T.showMeta,limit:T.limit,offset:T.limit*T.page-T.limit,order:T.order,filter:T.filter},update:{updateId:T.updateId,changes:T.changesMade},delete:{deleteId:T.deleteId},insert:{label:T.insertNodeLabel,properties:T.insertProperties}});const H=async()=>{try{const t=await r.post(`${T.hostUrl}/query/builder/${T.selectedNodeName}/${T.queryMode}/preview`,R());return t.data}catch(r){T.isError=true;T.errorMessage="Failed to fetch data from db"}};const $=async t=>{if(T.selectedNodeName){T.isCustomQuery=false;T.timeTaken=null;T.isError=false;T.errorMessage=null;T.isLoading=true;T.selectedNodeName=t;try{const n=await r.post(`${T.hostUrl}/query/builder/${t}/${T.queryMode}`,R());T.nodes=n.data.nodes;T.total=n.data.count;T.query=W.formatQuery(n.data.query);T.queryParameter=o(n.data.queryParameters);let e=T.viewQuery.state.update({changes:{from:0,to:T.viewQuery.state.doc.toString().length,insert:T.query}});T.viewQuery.dispatch(e);let u=T.viewParameter.state.update({changes:{from:0,to:T.viewParameter.state.doc.toString().length,insert:T.queryParameter}});T.viewParameter.dispatch(u);T.timeTaken=n.data.timeTaken;T.isFetchedData=true}catch(r){T.isError=true;T.errorMessage="Failed to fetch data from db"}T.isLoading=false}};export{H as g,W as l,T as s};
//# sourceMappingURL=p-fae2f0ac.js.map