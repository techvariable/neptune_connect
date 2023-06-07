import{r as e,h as t,H as s}from"./p-584c1979.js";import{s as l}from"./p-4a400f73.js";import{s as r}from"./p-ca2a764d.js";import"./p-18b27c92.js";import"./p-112455b1.js";import"./p-02c57b85.js";const o=".sc-basic-dropdown-h{display:block}";const i={true:"",false:"hidden"};let a=class{constructor(t){e(this,t);this.label="DropDown";this.toggle=false;this.selectedOption=""}validateName(e,t){if(e!==t){this.options=[...this.options].map((t=>{if(t.label===e){return{label:e,selected:true}}return{label:t.label,selected:false}}));this.selectedOption=this.propSelectedOptionLabel;this.optionHandler(this.selectedOption)}}componentWillLoad(){this.selectedOption=this.propSelectedOptionLabel;this.options=this.propOptions}toggleDropDown(){this.toggle=!this.toggle}selectHandler(e){this.selectedOption=e;this.options=[...this.options].map((t=>{if(t.label===e){return{label:e,selected:true}}return{label:t.label,selected:false}}));this.optionHandler(e);this.toggleDropDown()}render(){return t(s,null,t("button",{onClick:()=>this.toggleDropDown(),id:"dropdownDefaultButton","data-dropdown-toggle":"dropdown",class:"justify-between bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full",type:"button"},this.label," ",this.selectedOption," ",t("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),t("div",{id:"dropdown",class:`absolute my-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 ${i[this.toggle.toString()]}`},t("ul",{class:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownDefaultButton"},this.options.map((e=>t("li",{onClick:()=>this.selectHandler(e.label)},t("a",{href:"#",class:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"},e.label)))))))}static get watchers(){return{propSelectedOptionLabel:["validateName"]}}};a.style=o;const n=".sc-custom-drop-down-h{display:block}";const d={true:"",false:"hidden"};let c=class{constructor(t){e(this,t);this.optionListProp=[{label:"Durga",selected:false},{label:"Phukan",selected:false}];this.isDropDownOpen=false;this.optionList=[];this.dropdownSearchKey=""}componentWillLoad(){this.dropdownSearchKey=this.dropDownValue;this.optionList=[...this.optionListProp]}dropDownHandler(){this.isDropDownOpen=!this.isDropDownOpen}inputSearchHandler(e){this.dropdownSearchKey=e.target.value;const t=this.optionListProp.map((t=>{if(t.label.toLowerCase().search(e.target.value.toLowerCase())!==-1){return t}}));this.optionList=t.filter((e=>e!==undefined))}handleSelect(){this.selectHandler(this.dropdownSearchKey);this.dropDownHandler()}render(){return t(s,null,t("button",{onClick:()=>this.dropDownHandler(),id:"dropdownSearchButton","data-dropdown-toggle":"dropdownSearch","data-dropdown-placement":"bottom",class:"justify-between bg-gray-100 border border-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full",type:"button"},`Selected Node: ${this.dropdownSearchKey||""}`,t("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}))),t("form",{style:{width:"93%"},id:"dropdownSearch",class:`absolute my-2 bg-white rounded-lg shadow dark:bg-gray-700 ${d[this.isDropDownOpen.toString()]}`},t("div",{class:"p-3"},t("label",{htmlFor:"input-group-search",class:"sr-only"},"Search"),t("div",{class:"relative"},t("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},t("svg",{class:"w-5 h-5 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},t("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}))),t("input",{type:"text",id:"input-group-search",class:"block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search",onInput:e=>this.inputSearchHandler(e),value:this.dropdownSearchKey}))),t("ul",{class:"h-28 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownSearchButton"},this.optionList.map((e=>t("li",null,t("div",{class:"flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"},t("label",{onClick:()=>{this.dropdownSearchKey=e.label;this.handleSelect()},htmlFor:"checkbox-item-11",class:"w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"},e.label)))))),t("button",{type:"button",onClick:()=>this.handleSelect(),class:"flex w-full items-center p-3 text-sm font-medium text-gray-700 border-t border-gray-400 rounded-b-lg bg-gray-100 dark:border-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 "},t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})),t("span",{class:"px-3"},"Select"))))}};c.style=n;const h=".sc-insert-node-modal-h{display:block}";let u=class{constructor(t){e(this,t);this.isModalOpen=false;this.downloadError=null;this.addNodeState=[{property:"",value:"",valueType:""}];this.customDropDownValue="";this.nodes=[{label:"",selected:false}];this.valueOptions=[{label:"String",selected:true},{label:"Number",selected:false}];this.propSelectedOptionLabel="String";this.isFormValid=true}nodeMapper(){const e=l.availableNodes.map((e=>({label:e,selected:false})));return e}toggleModalState(){this.isModalOpen=!this.isModalOpen}discardAddNode(){this.isFormValid=true;this.toggleModalState();this.addNodeState=[{property:"",value:"",valueType:""}]}async submitHandler(e){e.preventDefault()}handleChange(e,t,s){if(t==="value"){this.propSelectedOptionLabel=/^-?\d+\.?\d*$/.test(e.target.value)?"Number":"String"}this.addNodeState[s][t]=e.target.value}onAddNode(){const e=[...this.addNodeState];let t={property:"",value:"",valueType:""};e.push(t);this.addNodeState=e}removeNodeHandler(e){this.addNodeState=[...this.addNodeState].filter(((t,s)=>s!==e))}handleCustomSelect(e){this.customDropDownValue=e}optionHandler(e,t){this.addNodeState[e]["valueType"]=t}validationChecker(){let e=false;this.addNodeState.forEach((t=>{if(t.property===""||t.value==="")e=true}));if(this.customDropDownValue===""||e){this.isFormValid=false;return false}this.isFormValid=true;return true}async handleSubmit(){if(this.validationChecker()){const e={};this.addNodeState.forEach((t=>{switch(t.valueType){case"String":e[t.property]=t.value;break;case"Number":e[t.property]=parseFloat(t.value);break;default:e[t.property]=t.value;break}}));l.queryMode="insert";l.insertNodeLabel=this.customDropDownValue;l.insertProperties=e;l.selectedNodeName=l.insertNodeLabel;this.customDropDownValue="";await l.refreshData();this.toggleModalState();this.addNodeState=[{property:"",value:"",valueType:""}];await this.fetchNavigators()}}render(){return t(s,null,t("icon-button-basic",{title:"Add Node",color:"secondary",size:"md",clickHandler:()=>this.toggleModalState(),icon:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-7 h-7"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"}))}),this.isModalOpen&&t("form",{onSubmit:e=>this.submitHandler(e),class:" space-y-3"},t("div",{class:"fixed z-10 inset-0 overflow-y-auto"},t("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​"),t("div",{class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"},t("div",{class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},t("div",null,t("div",{class:"mt-3 text-center sm:mt-0 sm:text-left"},t("div",{class:"flex justify-between"},t("h3",{class:"text-lg leading-6 font-semibold text-gray-600 my-2 pb-3",id:"modal-title"},"Add Node")),t("custom-drop-down",{class:"py-4",selectHandler:e=>this.handleCustomSelect(e),optionListProp:this.nodeMapper()}),t("div",{class:"max-h-60 overflow-auto custom-scrollbar"},this.addNodeState.map(((e,s)=>t("div",{class:"mt-2 flex gap-4"},t("div",null,t("label",{class:"block pb-2 font-medium text-gray-600",htmlFor:"searchText"},"Property"),t("input",{type:"text",required:true,name:`property_${s}`,placeholder:"Enter file name",class:"mb-2 border active:border-2 outline-none px-2 py-2 rounded-md text-sm w-full",value:this.addNodeState[s]["property"],onInput:e=>this.handleChange(e,"property",s)})),t("div",null,t("label",{class:"block pb-2 font-medium text-gray-600",htmlFor:"searchText"},"Value"),t("input",{type:"text",name:`value_${s}`,required:true,placeholder:"Enter file name",class:"mb-2 border active:border-2 outline-none px-2 p-2 rounded-md text-sm w-full",value:this.addNodeState[s]["value"],onInput:e=>this.handleChange(e,"value",s)})),t("div",{class:"w-56 h-5 align-middle"},t("label",{class:"block pb-2 font-medium text-gray-600",htmlFor:"valueType"},"Value Type"),t("basic-dropdown",{label:"Select:",propOptions:this.valueOptions,propSelectedOptionLabel:this.propSelectedOptionLabel,optionHandler:e=>this.optionHandler(s,e),class:"w-40",id:"valueType"})),t("div",{class:"align-middle"},t("label",{class:"block pb-2 font-medium text-gray-600",htmlFor:"valueType"},t("span",{class:"mb-4"},"Remove")),t("button",{disabled:this.addNodeState.length<=1,type:"button",onClick:()=>this.removeNodeHandler(s),class:"mt-1 mx-3 disabled:text-gray-200"},t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})))))))),t("div",{onClick:()=>this.onAddNode(),class:"flex gap-4 justify-center align-middle border bg-gray-100 border-gray-200 rounded-md my-6 p-2 cursor-pointer hover:bg-gray-200 hover:border-gray-300"},t("div",null,t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.2",stroke:"currentColor",class:"w-8 h-8 "},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}))),t("span",{class:"pt-1"},"Add Node"))))),t("div",{class:"px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},t("button",{type:"submit",onClick:()=>this.handleSubmit(),class:"w-full gap-2 inline-flex justify-center rounded-md border-transparent shadow-sm px-4 py-2 border border-gray-300 bg-gray-600 text-base font-medium text-white disabled:bg-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"},t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})),t("span",{class:"text-md font-semibold"},"Add")),t("button",{type:"button",onClick:()=>this.discardAddNode(),class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},"Cancel"),t("div",{class:"mt-2"},!this.isFormValid&&t("span",{class:" rounded-lg px-20 py-2 border border-red-300 bg-gray-100 text-red-500"},"Please fill up all the required fields"))))))))}};u.style=h;const p=".sc-save-query-modal-h{display:block}";let m=class{constructor(t){e(this,t);this.isModalOpen=false;this.editModalTabActiveIndex=0;this.query="";this.parameters="{}";this.handleTableIndex=e=>{this.editModalTabActiveIndex=e}}submitHandler(e){e.preventDefault()}async deleteQueryHandler(e){try{this.deleteQueryData(e);r.fire({position:"center",icon:"success",text:"Query deleted successfully!",showConfirmButton:false,timer:1500});await this.queryDataFetcher()}catch(e){r.fire({icon:"error",title:"Query could not be deleted",text:e});console.log(e)}}async getPreviewData(){this.query=l.query;this.parameters=l.queryParameter}copyDataHandler(e){l.query=e.query;l.queryParameter=e.parameter;let t=l.viewQuery.state.update({changes:{from:0,to:l.viewQuery.state.doc.toString().length,insert:l.query}});l.viewQuery.dispatch(t);let s=l.viewParameter.state.update({changes:{from:0,to:l.viewParameter.state.doc.toString().length,insert:l.queryParameter}});l.viewParameter.dispatch(s);r.fire({position:"center",icon:"success",text:"Query copied to editor successfully!",showConfirmButton:false,timer:1500});this.toggleModalState()}copyToClipboard(){l.queryMode="read";navigator.clipboard.writeText(`${this.query}\n\n// please move the parameters to the parameters section\n${this.parameters}`);this.toggleModalState();r.fire({position:"center",icon:"success",text:"Query copied!",showConfirmButton:false,timer:1500})}cancelEdit(){l.queryMode="read";this.toggleModalState()}toggleModalState(){this.getPreviewData();this.isModalOpen=!this.isModalOpen}async dataLoader(){this.toggleModalState();await this.queryDataFetcher()}render(){return t(s,null,t("icon-button-basic",{title:"Saved Query",color:"secondary",size:"md",clickHandler:()=>this.dataLoader(),icon:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"}))}),this.isModalOpen&&t("form",{style:{display:"contents"},class:"pt-6 space-y-3"},t("div",{class:"fixed z-30 inset-0 overflow-y-auto"},t("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​"),t("div",{class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full"},t("h3",{class:"pt-3 px-4 font-semibold text-lg text-gray-400"},"Saved Query"),l.queryHistory.length>0?t("div",{class:"px-8"},t("div",{class:"flex gap-4 py-2 mb-2 px-4 rounded-lg"},t("pre",{class:"text-lg font-semibold rounded-lg w-1/4 text-center text-indigo-500"},"Title"),t("pre",{class:"text-lg font-semibold rounded-lg w-5/12 text-center  text-indigo-500"},"Query"),t("pre",{class:"text-lg font-semibold rounded-lg w-2/6 text-center  text-indigo-500"},"Parameter")),t("div",{class:"custom-scrollbar overflow-auto w-full h-96 px-8 mt-3"},l.queryHistory.map((e=>t("div",{class:"flex px-2 justify-between"},t("div",{style:{alignItems:"center"},class:"flex gap-4 my-2 mb-2 rounded-lg mr-4 w-full"},t("div",{onClick:()=>this.copyDataHandler(e),style:{width:"300px"},class:"px-4 bg-slate-200 rounded-lg overflow-hidden cursor-pointer"},t("nobr",{style:{alignItems:"center"},title:e.title,class:"mx-auto h-8 flex w-11/12 overflow-hidden overflow-ellipsis"},e.title)),t("div",{onClick:()=>this.copyDataHandler(e),style:{width:"470px"},class:"bg-slate-200 rounded-lg overflow-hidden cursor-pointer"},t("nobr",{style:{alignItems:"center"},title:e.query,class:"mx-auto h-8 w-11/12 flex overflow-hidden overflow-ellipsis"},e.query)),t("div",{onClick:()=>this.copyDataHandler(e),style:{width:"360px"},class:" bg-gray-200  rounded-lg overflow-hidden cursor-pointer"},t("nobr",{style:{alignItems:"center"},title:e.parameter,class:"mx-auto h-8 w-11/12 flex overflow-hidden overflow-ellipsis"},e.parameter)),t("svg",{onClick:()=>this.deleteQueryHandler(e.id),class:"cursor-pointer hover:text-indigo-400 w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})))))))):t("h3",{class:"mx-4 text-indigo-400 text-center text-lg font-semibold"},"No Saved Query Found !!!"),t("div",{class:"bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse gap-4"},t("icon-label-submit-button",{startIcon:t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})),title:"Cancel",varient:"outlined",customClass:"mr-6",clickHandler:()=>this.cancelEdit()},"Cancel")))))))}};m.style=p;export{a as basic_dropdown,c as custom_drop_down,u as insert_node_modal,m as save_query_modal};
//# sourceMappingURL=p-4e643461.entry.js.map