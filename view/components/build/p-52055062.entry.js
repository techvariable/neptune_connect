import{r as s,h as e,H as t}from"./p-584c1979.js";import{a as i}from"./p-18b27c92.js";import{s as l}from"./p-ca2a764d.js";import{h as r}from"./p-02c57b85.js";import"./p-112455b1.js";let o=class{constructor(e){s(this,e);this.rolesobj=[];this.email="";this.loading=false}openDropDown(){this.choicesRef.showDropdown(false)}componentWillLoad(){this.email=this.value;for(let s of this.allPermissions){let e={value:s.roleName,id:s.id,label:s.roleName,selected:false,disabled:false};const t=[...this.rolesobj];t.push(e);this.rolesobj=t}i.get(`${this.url}/users/roles?userId=${this.userid}`).then((s=>{for(let e of this.rolesobj){if(s.data.includes(e["id"])){e["selected"]=true}else{e["selected"]=false}}this.rolesobj=[...this.rolesobj]})).catch((s=>console.log(s)))}async handleSubmit(s){this.loading=true;s.preventDefault();let e=[];for(let t of s.target[1]){if(t.selected===true){e.push(Number(t.value))}}try{await i.put(`${this.url}/users/roles`,{userId:this.userid,roles:e});this.loading=false;l.fire({position:"center",icon:"success",text:"Roles updated successfully!",showConfirmButton:false,timer:1500});for(let s of this.rolesobj){if(e.includes(s["id"])){s["selected"]=true}else{s["selected"]=false}}this.value="";this.toggle()}catch(s){this.loading=false;l.fire({icon:"error",title:"Oops...",text:s.response.data.message});this.value="";this.toggle()}}handleChange(s){this.value=s.target.value}render(){return e(t,null,this.ismodelopen&&e("form",{onSubmit:s=>this.handleSubmit(s),class:"pt-10 space-y-3"},e("div",{class:"fixed z-10 inset-0 overflow-y-scroll custom-scrollbar ","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},e("div",{class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"}),e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),e("div",{class:"relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},e("div",{class:"bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4"},e("div",{class:"sm:flex sm:items-start"},e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 sm:mx-0 sm:h-10 sm:w-10"},e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-sky-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),e("div",{class:"mt-3 text-center sm:mt-0 sm:ml-4 p-4 sm:text-left flex-grow"},e("h3",{class:"text-lg leading-6 font-medium text-gray-900",id:"modal-title"},"Edit User"),e("div",{class:"mt-2"},e("p",{class:"text-md text-gray-500 mb-4"},"Email of the user."),e("input",{type:"email",name:"email",required:true,placeholder:"email@example.com",class:"border w-full px-4 py-2 rounded-md text-sm mb-4",readOnly:true,disabled:true,value:this.email,onInput:s=>this.handleChange(s)})),e("div",{class:"w-full"},e("p",{class:"z-10 text-md text-gray-500 mb-4"},"Select permissions"),e("label",{class:"block text-left"},e("select",{name:"role",class:"form-multiselect block w-full mt-1 border rounded-md ",multiple:true},this.rolesobj.map((s=>e("option",{class:"px-6 py-1 hover:bg-gray-200 cursor-pointer",selected:s.selected,value:s.id},s.value))))))))),e("div",null,e("div",{class:"bg-gray-50 pb-4 sm:px-6 sm:flex sm:flex-row-reverse gap-4"},e("icon-label-submit-button",{type:"submit",color:"tertiary",loading:this.loading},"Update"),e("icon-label-submit-button",{clickHandler:()=>this.toggle(),varient:"outlined"},"Cancel"))))))))}};const a=".sc-user-drop-down-h{display:block}.disabled-custom.sc-user-drop-down:disabled{opacity:0.5;color:rgb(204, 202, 202)}";let d=class{constructor(e){s(this,e);this.userId=0;this.ismodelopen=false;this.showDropdown=false;this.option=[{edit:"update"},{delete:"delete"}];this.toggleDropdown=()=>{this.showDropdown=!this.showDropdown};this.backDropHandler=()=>{this.showDropdown=false}}async deleteHandler(){try{await i.delete(`${this.url}/users/`,{data:{id:this.userId}});l.fire({position:"center",icon:"success",text:"User deleted successfully!",showConfirmButton:false,timer:1500});this.refresh()}catch(s){l.fire({icon:"error",title:"Oops...",text:s.response.data.message})}}clickHandler(s){if(s==="edit"){this.ismodelopen=!this.ismodelopen}if(s==="delete"){this.deleteHandler()}this.toggleDropdown()}dropDownClickHandler(s){s.stopPropagation();this.toggleDropdown()}render(){var s;return e("div",{class:"relative"},e("h2",{onClick:s=>this.dropDownClickHandler(s),class:"font-sans text-gray-600 hover:text-indigo-800 cursor-pointer transition text-sm capitalize flex gap-1 items-center"},e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"}))),e("backdrop-filter",{showBackDrop:this.showDropdown,backDropHandler:this.backDropHandler}),e("div",{class:this.showDropdown===true?"absolute right-0 bg-gray-100 z-10 w-28 text-sm list-none mt-2 rounded divide-y divide-gray-100 shadow ":"hidden"},e("ul",{class:"py-1"},(s=this.option)===null||s===void 0?void 0:s.map((s=>e("li",{class:"hover:bg-gray-300"},e("button",{class:"disabled-custom w-full",onClick:e=>{e.stopPropagation();this.clickHandler(Object.keys(s)[0])},disabled:!r(this.parsedPermissions,{name:"users",permission:s[Object.keys(s)[0]]})},e("a",{href:"#",class:"block py-2 px-4 text-base font-sm font-medium text-gray-700"},Object.keys(s)[0].toUpperCase()))))))),this.ismodelopen&&e("edit-user",{url:this.url,userid:this.userId,ismodelopen:this.ismodelopen,value:this.email,toggle:()=>this.ismodelopen=!this.ismodelopen,allPermissions:this.allPermissions}))}};d.style=a;export{o as edit_user,d as user_drop_down};
//# sourceMappingURL=p-52055062.entry.js.map