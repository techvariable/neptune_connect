import{r as t,h as e,H as s}from"./p-584c1979.js";import{a as i}from"./p-18b27c92.js";const l=".sc-login-form-h{display:block}";let a=class{constructor(e){t(this,e);this.error="";this.mode="";this.url="";this.email="";this.password="";this.visitEmail="";this.visitSubmitError="";this.emailSubmited=false}async autoSubmitter(){try{await i.post(`${this.url}login`,{email:this.email,password:this.password});location.assign("/")}catch(t){throw Error("Form could not be submitted")}}async visitHandler(){try{await i.post(`${this.url}api/users/visit`,{email:this.visitEmail});this.visitSubmitError="";this.emailSubmited=true}catch(t){this.visitSubmitError=t.response.data.message;this.emailSubmited=false;throw Error("Visit could not be submitted")}}render(){return e(s,null,this.mode==="demo"&&!this.emailSubmited&&e("div",null,e("div",null,e("div",{class:"flex justify-center gap-4 items-center"},e("img",{class:"h-24",src:"public/assets/images/neptune.png",alt:"neptune logo"}),e("h3",{class:"font-semibold text-3xl font-serif text-indigo-600"},"Neptune Connect")),e("h2",{class:"mt-6 text-center text-2xl font-extrabold text-gray-600 font-serif"},"Welcome"),e("p",{class:"mt-2 text-center text-gray-400"},"Please enter your email to access demo mode!")),this.visitSubmitError&&e("p",{class:"flex items-center justify-center pb-2 text-red-600 text-center font-semibold"},e("svg",{"aria-hidden":"true",class:"mx-2 w-5 h-5 text-gray-800 dark:text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})),this.visitSubmitError),e("text-field",{onChange:t=>this.visitEmail=t.target.value,name:"email",type:"email",placeholder:"email"}),e("div",{class:"mt-2"},e("plain-button",{clickHandler:()=>this.visitHandler(),width:"full",type:"contained"}," Visit "))),(this.mode!=="demo"||this.emailSubmited)&&e("div",null,e("div",null,e("div",{class:"flex justify-center gap-4 items-center"},e("img",{class:"h-24",src:"public/assets/images/neptune.png",alt:"neptune logo"}),e("h3",{class:"font-semibold text-3xl font-serif text-indigo-600"},"Neptune Connect")),e("h2",{class:"mt-6 text-center text-2xl font-extrabold text-gray-600 font-serif"},"Welcome Back"),e("p",{class:"mt-2 text-center text-gray-400"},"Enter your credentials to access your account")),e("form",{class:"space-y-2",action:"/login",name:"loginForm",method:"post"},this.error&&e("p",{class:"flex items-center justify-center pb-2 text-red-600 text-center font-semibold"},e("svg",{"aria-hidden":"true",class:"mx-2 w-5 h-5 text-gray-800 dark:text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})),"Username or password is wrong!!!"),e("text-field",{name:"email",type:"email",placeholder:"email"}),e("div",{class:"mt-1 relative rounded-md shadow-sm"},e("text-field",{name:"password",type:"password",placeholder:"password",eye:true})),e("div",null,e("plain-button",{width:"full",type:"contained"}," submit ")),e("div",{class:"pt-2 flex flex-row-reverse"},e("a",{href:"/users/forgot",class:"text-indigo-500 font-semibold hover:underline"},"Forgot Password")))))}};a.style=l;export{a as login_form};
//# sourceMappingURL=p-3c376822.entry.js.map