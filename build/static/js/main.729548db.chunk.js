(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},54:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=a(9),m=a(6),o=a(24),i=a(25),u=a(31),E=a(30),p=a(26),f=a.n(p),h=function(){return f.a.get("https://randomuser.me/api/?results=100&nat=us")};a(54);var d=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var y=function(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var v=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",Object.assign({className:t},e))};a(55);var g=function(e){return l.a.createElement("form",{className:"search"},l.a.createElement("div",{className:"form-group"},l.a.createElement("h4",null,"Search:"),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"Employees",type:"text",className:"form-control",placeholder:"Type in an employee name to search...",id:"index"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),e.findEmployee()},className:"btn btn-success"},"Search")))},b=a(27),N=a.n(b),z=function(e){Object(u.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={Employees:[],filteredEmployees:[],sortDirection:"asc",search:"",error:""},e.handleInputChange=function(t){console.log(t.target.value),console.log(e.state.search),""===t.target.value?e.setState({filteredEmployees:e.state.Employees}):e.setState({search:t.target.value},(function(){e.findEmployee()}))},e.findEmployee=function(t){var a,n=e.state.search;return a=e.state.Employees.filter((function(e){return console.log(e.name.first),console.log(n),(n=(n=n.toLowerCase()).charAt(0).toUpperCase()+n.slice(1))===e.name.first})),e.setState({filteredEmployees:a})},e.sortName=function(){var t,a;"asc"===e.state.sortDirection?(t=e.state.Employees.sort((function(e,t){return e.name.last>t.name.last?1:-1})),a="dsc"):(t=e.state.Employees.sort((function(e,t){return e.name.last<t.name.last?1:-1})),a="asc"),e.setState({Employees:t,sortDirection:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h().then((function(t){console.log(t),e.setState({Employees:t.data.results,filteredEmployees:t.data.results})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{style:{minHeight:"80%"}},l.a.createElement(y,null,l.a.createElement(g,{findEmployee:this.findEmployee,handleInputChange:this.handleInputChange,Employees:this.state.Employees})),l.a.createElement(y,null,l.a.createElement(v,{size:"md-2"},l.a.createElement("h3",null,"Image"),l.a.createElement("hr",null)),l.a.createElement(v,{size:"md-2"},l.a.createElement("h3",null,"Name"," ",l.a.createElement("button",{onClick:this.sortName},l.a.createElement("i",{className:"fas fa-sort fa-xs"}))),l.a.createElement("hr",null)),l.a.createElement(v,{size:"md-2"},l.a.createElement("h3",null,"Phone"),l.a.createElement("hr",null)),l.a.createElement(v,{size:"md-3"},l.a.createElement("h3",null,"E-mail"),l.a.createElement("hr",null)),l.a.createElement(v,{size:"md-2"},l.a.createElement("h3",null,"DOB"),l.a.createElement("hr",null))),this.state.filteredEmployees.map((function(e,t){return l.a.createElement(y,{key:t},l.a.createElement(v,{size:"md-2"},l.a.createElement("img",{src:e.picture.medium,alt:"employee_image"})),l.a.createElement(v,{size:"md-2"},e.name.last,", ",e.name.first),l.a.createElement(v,{size:"md-2"},e.phone),l.a.createElement(v,{size:"md-3"},l.a.createElement(s.b,{to:"/"},e.email)),l.a.createElement(v,{size:"md-2"},N()(e.dob.date.split("T")[0],"YYYY-MM-DD").format("l")))}))))}}]),a}(n.Component);a(62);var C=function(){return l.a.createElement("nav",{className:"navbar-expand-lg navb"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("p",null,"To navigate, either sort by name or utilize search to narrow results"))};a(63);var j=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};var D=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(C,null),l.a.createElement(j,null,l.a.createElement(m.a,{exact:!0,path:"/",component:z}))))};c.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.729548db.chunk.js.map