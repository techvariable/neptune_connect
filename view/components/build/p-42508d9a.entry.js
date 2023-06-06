import{r as t,h as s,H as e}from"./p-62aab1e1.js";import{a as o}from"./p-18b27c92.js";import{s as r}from"./p-ca2a764d.js";import{h as i}from"./p-02c57b85.js";import"./p-112455b1.js";const a=".sc-side-bar-h{display:block}";let l=class{constructor(s){t(this,s);this.apiExist=false;this.parsedPermissions=[]}componentWillLoad(){this.parsedPermissions=JSON.parse(this.permissions);return o.get(this.url).then((t=>{const s=t.data;if(s.apiKey){this.api=s.apiKey;this.name=s.user.name;this.apiExist=true}else{this.apiExist=false}})).catch((t=>console.log("Error Found",t)))}async createHandler(){let t="";try{const s=await o.post(this.url);const e=s.data;this.api=e.apiKey;this.name=e.user.name;this.apiExist=true;t=e.message;r.fire({position:"center",icon:"success",text:"New API key created!",showConfirmButton:false,timer:1500})}catch(s){r.fire({icon:"error",title:"Oops...",text:t})}}async deleteHandler(){try{await o.delete(this.url);this.apiExist=false;r.fire({position:"center",icon:"success",text:"API key deleted successfully!",showConfirmButton:false,timer:1500})}catch(t){console.log(t);r.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}}copyToClipboard(){navigator.clipboard.writeText(this.api);r.fire({position:"center",icon:"success",text:"API key copied!",showConfirmButton:false,timer:1500})}render(){return s(e,null,this.apiExist?s("div",{class:"overflow-x-auto shadow-md sm:rounded-lg"},s("table",{class:"w-full text-sm text-left text-gray-500 "},s("thead",{class:"text-xs text-gray-700 uppercase bg-gray-100 "},s("tr",null,s("th",{scope:"col",class:"px-6 py-3"},"Name"),s("th",{scope:"col",class:"px-6 py-3"},"API Key"),s("th",{scope:"col",class:"px-6 py-3"},s("span",{class:"sr-only"},"Copy")),s("th",{scope:"col",class:"px-6 py-3"},s("span",{class:"sr-only"},"Delete")))),s("tbody",null,s("tr",{class:"bg-white border-b "},s("th",{scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"},this.name),s("td",{class:"px-6 py-4 "},this.api),s("td",{class:"px-6 py-4 text-right"},s("icon-button-basic",{title:"Copy to Clip Board",clickHandler:()=>this.copyToClipboard(),color:"secondary",icon:s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}))})),s("td",{class:"px-6 py-4 text-right"},s("icon-label-submit-button",{title:"Delete API key",varient:"text",color:"secondary",disabled:!i(this.parsedPermissions,{name:"settings",permission:"delete"}),clickHandler:()=>this.deleteHandler(),startIcon:s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))})))))):s("div",null,s("p",{class:"border-l-4 border-indigo-700 px-3 py-6 bg-indigo-100 text-indigo-700 flex gap-2 items-center rounded-[5px]",id:"warning-msg"},s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),"You have no API key currently"),s("icon-label-submit-button",{title:"Create New API Key",clickHandler:()=>this.createHandler(),disabled:!i(this.parsedPermissions,{name:"settings",permission:"write"}),color:"secondary",customClass:"mt-3"},"Create New Key")))}};l.style=a;export{l as side_bar};
//# sourceMappingURL=p-42508d9a.entry.js.map