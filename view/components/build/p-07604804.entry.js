import{r as t,h as s}from"./p-584c1979.js";const i=".sc-icon-button-basic-h{display:block}";let h=class{constructor(s){t(this,s);this.customClass="";this.width="auto";this.disabled=false;this.color="primary";this.size="sm";this.loading=false;this.title=null;this.type="button";this.colorClasses={primary:"gray",secondary:"indigo",tertiary:"blue"};this.sizeClasses={sm:"py-2 px-4  rounded-md",md:"py-2 px-4 rounded-md",lg:"py-3 px-5 rounded-lg"};this.svgSize={sm:"h-5 w-5",md:"h-6 w-6",lg:"h-7 w-7"}}render(){return s("button",{class:`flex border border-transparent ${this.sizeClasses[this.size]} bg-${this.colorClasses[this.color]}-500  text-${this.colorClasses[this.color]}-600 hover:text-${this.colorClasses[this.color]}-800 justify-center w-${this.width} ${this.customClass} cursor-pointer disabled:cursor-default disabled:text-${this.colorClasses[this.color]}-400 `,title:this.title,onClick:this.clickHandler,disabled:this.disabled||this.loading,type:this.type},!this.loading&&this.icon,this.loading&&s("span",{class:"animate-spin ml-2"},s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:this.svgSize[this.size]},s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"}))))}};h.style=i;export{h as icon_button_basic};
//# sourceMappingURL=p-07604804.entry.js.map