(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},57:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),o=a.n(r),c=(a(55),a(16)),s=a(17),i=a(20),m=a(19),p=(a(56),a(57),a(25)),d=a(14),u=a.n(d),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={name:"",email:"",phone:"",gender:""},e.handleSend=function(){return""===e.state.name||""===e.state.email||""===e.state.phone||""===e.state.gender?alert("Please fill all the fields"):new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.state.email)?e.state.phone.length>10||e.state.phone.length<10?alert("Enter valid 10 digit Phone number!"):void u.a.post("/create-customer",e.state).then((function(e){alert("Customer added"),window.location.reload()})).catch((function(e){alert("Faild to add Customer")})):alert("Please enter valid email")},e.handleInput=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"d-flex flex-row justify-content-center pt-4 mt-4 text-center"},l.a.createElement("div",{className:"card",style:{width:"22rem",borderRadius:"20px"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"p-4"},l.a.createElement("h3",{className:"card-title float-left pt-2 pb-3"},"Add Customer"),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/material-rounded/24/000000/user.png"}))),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleInput})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/material-rounded/24/000000/important-mail.png"})," ")),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",phone:this.state.email,onChange:this.handleInput})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/phone.png"})," ")),l.a.createElement("input",{type:"number",className:"form-control",placeholder:"phone",name:"phone",value:this.state.phone,onChange:this.handleInput})),l.a.createElement("div",{className:"d-flex justify-content-around pt-2 pb-2"},l.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male",onChange:this.handleInput}),l.a.createElement("label",{for:"male"},"Male"),l.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female",onChange:this.handleInput}),l.a.createElement("label",{for:"female"},"Female"),l.a.createElement("input",{type:"radio",id:"other",name:"gender",value:"other",onChange:this.handleInput}),l.a.createElement("label",{for:"other"},"Other"),l.a.createElement("br",null)),l.a.createElement("button",{id:"send",className:"mt-2 float-right",onClick:function(){e.handleSend()}},"Create"))))))}}]),a}(l.a.Component),g=a(18),E=a(83),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={show:!1,id:e.props.update._id,name:e.props.update.name,email:e.props.update.email,phone:e.props.update.phone,gender:e.props.update.gender},e.handleInput=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.Delete=function(e){u.a.delete("/delete-customer/".concat(e)).then((function(e){alert("Customer deleted"),window.location.reload()})).catch((function(e){console.log(e),alert("Failed to Delete!")}))},e.handleOption=function(t){e.setState({gender:t.target.value})},e.handleUpdate=function(){if(""===e.state.name||""===e.state.email||""===e.state.phone||""===e.state.gender)return alert("Please fill all the fields");if(!new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.state.email))return alert("Please enter valid email");if(e.state.phone.length>10||e.state.phone.length<10)return alert("Enter valid 10 digit Phone number!");var t={name:e.state.name,email:e.state.email,phone:e.state.phone,gender:e.state.gender};u.a.put("/update-customer/".concat(e.props.update._id),t).then((function(t){e.props.dispatch({type:"uncheck"}),alert("Customer updated"),e.handleHide(),window.location.reload()})).catch((function(e){console.log(e),alert("Failed to update")}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){console.log(this.props),this.props.update.name===e.update.name&&this.props.update.email===e.update.email&&this.props.update.phone===e.update.phone&&this.props.update.gender===e.update.gender||this.setState({show:!0,name:this.props.update.name,email:this.props.update.email,phone:this.props.update.phone,gender:this.props.update.gender})}},{key:"handleShow",value:function(e){this.props.dispatch({type:"check",payload:e}),this.setState({show:!0})}},{key:"handleHide",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"d-flex flex-row w-100 border border-light bg-light"},l.a.createElement("h3",{className:"text-secondary pl-3"},"All Customers")),l.a.createElement("table",{className:"table table-striped  text-center"},l.a.createElement("tbody",null,this.props.customers?this.props.customers.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,t.gender),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning",onClick:function(){e.handleShow(t)}},"update")),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.Delete(t._id)}},"delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{className:" text-center"},"No Customer available"))))),l.a.createElement(E.a,{show:this.state.show,onHide:function(){e.handleHide()}},l.a.createElement(E.a.Header,{closeButton:!0},l.a.createElement(E.a.Title,null,"Update Customer")),l.a.createElement(E.a.Body,null,l.a.createElement("div",{className:"text-center mt-3"},l.a.createElement("div",null,l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/material-rounded/24/000000/user.png"}))),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleInput})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/material-rounded/24/000000/important-mail.png"})," ")),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/phone.png"})," ")),l.a.createElement("input",{type:"number",className:"form-control",placeholder:"phone",name:"phone",value:this.state.phone,onChange:this.handleInput})),l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{src:"https://img.icons8.com/metro/26/000000/gender--v1.png"})," ")),l.a.createElement("select",{className:"form-control",value:this.state.gender,onChange:function(t){e.handleOption(t)}},l.a.createElement("option",{value:"male"},"male"),l.a.createElement("option",{value:"female"},"female"),l.a.createElement("option",{value:"other"},"other")))))),l.a.createElement(E.a.Footer,null,l.a.createElement("button",{className:"btn btn-primary",disabled:!this.state.name||!this.state.email||!this.state.phone||!this.state.gender,onClick:function(){e.handleUpdate()}},"Add"))))}}]),a}(l.a.Component),v=Object(g.b)((function(e){return{customers:e.customers,update:e.update}}))(f),b=a(28),N=a(4),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("/customer").then((function(t){e.props.dispatch({type:"list",payload:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"container-fluid pt-3",style:{height:"100vh"}},l.a.createElement(b.a,null,l.a.createElement("div",{className:"pb-3"},l.a.createElement(b.b,{to:"/add"},l.a.createElement("button",{id:"send"},"Add customer"))," ",l.a.createElement(b.b,{to:"/"},l.a.createElement("button",{id:"send",className:"ml-3"},"List"))," "),l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",component:v}),l.a.createElement(N.a,{path:"/add",component:h})))))}}]),a}(l.a.Component),y=Object(g.b)((function(e){return e}))(w),x=a(26),C={customers:[],update:""},O=Object(x.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"list":return a.customers=t.payload,console.log(a),a;case"check":return a.update=t.payload,a;case"uncheck":return a.update="",a;default:return a}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g.a,{store:O},l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.d869adf3.chunk.js.map