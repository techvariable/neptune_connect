import{r as t,h as e,H as s}from"./p-584c1979.js";import{a as i}from"./p-18b27c92.js";import{s as l}from"./p-ca2a764d.js";import{h as o}from"./p-02c57b85.js";import"./p-112455b1.js";const n=".sc-dialog-component-h{display:block}";let a=class{constructor(e){t(this,e);this.isModalOpen=false;this.parsedPermissions=[];this.loading=false}componentWillLoad(){this.parsedPermissions=JSON.parse(this.permissions)}toggleModalState(){this.isModalOpen=!this.isModalOpen}async handleSubmit(t){this.loading=true;t.preventDefault();try{await i.post(this.url,{email:this.value});this.loading=false;l.fire({position:"center",icon:"success",text:"Invitation sent successfully!",showConfirmButton:false,timer:1500});this.value=""}catch(t){this.loading=false;console.log(t);l.fire({icon:"error",title:"Oops...",text:t.response.data.message})}this.toggleModalState()}handleChange(t){this.value=t.target.value}render(){return e(s,null,e("icon-label-submit-button",{disabled:!o(this.parsedPermissions,{name:"users",permission:"write"}),clickHandler:()=>this.toggleModalState(),varient:"outlined",startIcon:e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"-ml-1 mr-2 h-5 w-5 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}))},"Add New User"),this.isModalOpen&&e("form",{onSubmit:t=>this.handleSubmit(t),class:"pt-6 space-y-3",action:"/invite"},e("div",{class:"fixed z-10 inset-0 overflow-y-auto","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},e("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),e("div",{class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},e("div",{class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},e("div",{class:"sm:flex sm:items-start"},e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10"},e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-sky-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),e("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},e("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-title"},"Send Invitation"),e("div",{class:"mt-2"},e("p",{class:"text-sm text-gray-500 mb-4"},"Are you sure you want to send invitation? Enter email of the recipient."),e("input",{type:"email",name:"email",required:true,placeholder:"email@example.com",class:"border w-full px-4 py-2 rounded-md text-sm",value:this.value,onInput:t=>this.handleChange(t)}))))),e("div",{class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-4"},e("icon-label-submit-button",{type:"submit",color:"tertiary",startIcon:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})),loading:this.loading},"Send Invite"),e("icon-label-submit-button",{clickHandler:()=>this.toggleModalState(),varient:"outlined"},"Cancel")))))))}};a.style=n;export{a as dialog_component};
//# sourceMappingURL=p-16ff66cc.entry.js.map