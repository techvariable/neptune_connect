import{r as t,h as s}from"./p-584c1979.js";import{a as e}from"./p-18b27c92.js";import{f as l,i}from"./p-02c57b85.js";import{s as o,l as r}from"./p-4a400f73.js";import"./p-112455b1.js";let n=class{constructor(s){t(this,s);this.nodeList=[];this.queryDocument="\n\n\n\n";this.parameterDocument="\n\n\n\n";this.nodeData=[];this.nodeDataColumns=[];this.errorMessage=null;this.isLoading=false;this.loadingNodes=false;this.nodeError=null;this.fetchNavigators=()=>{this.loadingNodes=true;this.errorMessage=null;this.nodeError=null;e.get(`${this.url}/nodes`).then((t=>{o.availableNodes=t.data.nodes;this.loadingNodes=false})).catch((t=>{this.loadingNodes=false;this.nodeError=t;console.log(t)}))};this.btnClassType={true:`mr-4 animate-spin`,false:`mr-4`};this.formatter=()=>{let t=o.viewQuery.state.update();const s=t.state.doc.toString().trim();let e=o.viewQuery.state.update({changes:{from:0,to:o.viewQuery.state.doc.toString().length,insert:`${r.formatQuery(s)}`}});o.viewQuery.dispatch(e);let i=o.viewParameter.state.update();const n=i.state.doc.toString().trim();let a=o.viewParameter.state.update({changes:{from:0,to:o.viewParameter.state.doc.toString().length,insert:`${l(JSON.parse(n))}`}});o.viewParameter.dispatch(a)};this.onClickRun=async()=>{var t,s;if(o.editorTextFlag){o.selectedNodeName=null;o.filter={};o.order={};o.isError=false;o.errorMessage=null;o.isLoading=true;o.isCustomQuery=true;try{let t=o.viewQuery.state.update();const s=t.state.doc.toString().trim();o.viewQuery.dispatch(t);let l=o.viewParameter.state.update();const r=l.state.doc.toString().trim();o.viewParameter.dispatch(l);const{isValid:n,error:a}=i(s,r);if(n){o.timeTaken=null;const t=await e.post(`${o.hostUrl}/query/`,{query:s,parameters:JSON.parse(r)});o.query=s;o.queryParameter=r;o.nodes=t.data.result;o.timeTaken=t.data.timeTaken;o.isFetchedData=true;this.formatter()}else{o.isError=true;o.errorMessage=a}}catch(e){console.log({error:e});o.isError=true;o.errorMessage=((s=(t=e===null||e===void 0?void 0:e.response)===null||t===void 0?void 0:t.data)===null||s===void 0?void 0:s.error)?e.response.data.error:"Failed to fetch data from db server."}o.isLoading=false}}}componentWillLoad(){o.hostUrl=this.url;this.fetchNavigators()}render(){return s("div",null,s("div",{class:"w-full md:flex justify-center gap-4 mt-4"},s("div",null,s("aside",{class:"w-full md:w-80","aria-label":"Sidebar"},s("div",{class:"w-full flex justify-between "},s("h2",{class:"font-mono text-lg font-bold leading-7 text-gray-600"},"Nodes"),s("icon-button-basic",{color:"secondary",size:"md",title:"Refresh Nodes",clickHandler:()=>this.fetchNavigators(),loading:this.loadingNodes,icon:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-7 h-7"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))})),s("div",{class:"custom-scrollbar ",style:{maxHeight:"43.5rem",overflowX:"visible",overflowY:"auto",minHeight:"20rem"}},s("node-item",{nodeError:this.nodeError})))),s("div",{class:"w-full md:w-3/4"},s("h2",{class:"pb-3 font-mono text-lg font-bold leading-7 text-gray-600"},"Write your Gremlin Query Here"),s("code-editor",{formatter:()=>this.formatter(),onClickRun:this.onClickRun,fetchNavigators:this.fetchNavigators}),o.isFetchedData&&o.nodes.length===0&&!o.isLoading&&!o.isError&&s("div",{class:"flex items-center bg-gray-500 text-white text-sm font-bold px-4 py-3",role:"alert"},s("p",null,"No Data Found in Database")),o.nodes.length>0&&!o.isLoading&&!o.isError&&s("tab-component",null))))}};export{n as editor_page};
//# sourceMappingURL=p-36facc12.entry.js.map