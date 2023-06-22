import{r as e,h as s,H as t}from"./p-62aab1e1.js";import{a}from"./p-18b27c92.js";import{s as i}from"./p-ca2a764d.js";import{h as r}from"./p-02c57b85.js";import"./p-112455b1.js";const l=".sc-profile-component-h{display:block}";let o=class{constructor(s){e(this,s);this.parsedPermissions=[];this.password="";this.repassword="";this.name="";this.error=null}componentWillLoad(){this.user=JSON.parse(this.stringifieduser);this.name=this.user.name;this.parsedPermissions=JSON.parse(this.permissions||"[]")}async handleSubmit(e){this.error=null;e.preventDefault();if(this.name===""){this.error="User name is empty"}else if(this.password.length<7){this.error="Password length is less than 7 characters"}else if(!this.password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){this.error="Password does not contain any special character"}else if(this.password!==this.repassword){this.error="Password does not match with re-entered password"}else{try{await a.put(`${this.url}api/users/password`,{name:this.name,email:this.user.email,password:this.password});this.password="";this.name="";this.error="";i.fire({position:"center",icon:"success",text:"User credentials updated successfully!",showConfirmButton:false,timer:1500});await a.post(`${this.url}logout`);window.location.reload()}catch(e){i.fire({icon:"error",title:"Oops...",text:e.response.data.message})}}}passwordHandler(e){this.password=e.target.value}repasswordHandler(e){this.repassword=e.target.value}nameChangeHandler(e){this.name=e.target.value}render(){return s(t,{class:"rounded-lg w-auto bg-gray-100 shadow-gray-600 py-2 px-3 space-y-2 gap-4"},s("form",{onSubmit:e=>this.handleSubmit(e),class:"w-full"},s("div",{class:"flex flex-wrap -mx-3 mb-3"},s("div",{class:"w-full px-3"},s("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Name"),s("input",{onInput:e=>this.nameChangeHandler(e),class:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-user-name",type:"text",placeholder:"",value:this.name,disabled:!r(this.parsedPermissions,{name:"myprofile",permission:"update"})}),s("p",{class:"text-gray-600 text-xs italic"},"Enter updated name"))),s("div",{class:"flex flex-wrap -mx-3 mb-3"},s("div",{class:"w-full px-3 mb-6 md:mb-0"},s("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Email"),s("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",disabled:true,id:"grid-email",type:"text",value:this.user.email,placeholder:"Enter email"}))),s("div",{class:"flex flex-wrap -mx-3 mb-3"},s("div",{class:"w-full px-3"},s("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Password"),s("input",{onInput:e=>this.passwordHandler(e),class:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-password",type:"password",placeholder:"******************",value:this.password,disabled:!r(this.parsedPermissions,{name:"myprofile",permission:"update"})}),s("p",{class:"text-gray-600 text-xs italic"},"Enter updated password"))),s("div",{class:"flex flex-wrap -mx-3 mb-2"},s("div",{class:"w-full px-3"},s("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"},"Re-enter Password"),s("input",{onInput:e=>this.repasswordHandler(e),class:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-password",type:"password",placeholder:"******************",value:this.repassword,disabled:!r(this.parsedPermissions,{name:"myprofile",permission:"update"})}),s("p",{class:"text-gray-600 text-xs italic"},"Re-enter the password"))),s("div",{class:"flex flex-row-reverse -mx-3 mb-4 "},s("icon-label-submit-button",{customClass:"mx-4",type:"submit",disabled:!r(this.parsedPermissions,{name:"myprofile",permission:"update"})},"Update"),this.error?s("p",{class:"rounded-lg mx-4 my-2 px-3 py-2 bg-red-200 text-red-800 border-l-4 border-red-600 w-full"},this.error):null)))}};o.style=l;export{o as profile_component};
//# sourceMappingURL=p-eecff978.entry.js.map