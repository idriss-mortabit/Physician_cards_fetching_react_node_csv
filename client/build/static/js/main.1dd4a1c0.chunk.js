(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);a(34);var n=a(1),s=a.n(n),i=a(10),o=a.n(i),l=(a(39),a(91)),c=a(78),r=a(79),m=a(11),p=a(12),d=a(14),u=a(13),h=a(15),y=a(9),g=a(16),f=a.n(g),E=a(85),b=a(86),w=a(87),_=a(88),v=a(89),N=a(80),C=a(81),x=a(82),k=a(83),j=a(84),O=a(75),P=a(93),R=a(76),S=a(77),L=(a(59),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).platform=null,a.map=null,a.state={app_id:e.app_id,app_code:e.app_code,useHTTPS:!0,coords:{lat:0,lng:0},isChecked:!1,address:{street:e.street,city:e.city,state:e.state,postalCode:e.postalCode,country:e.country},loading:!0,zoom:e.zoom,map:null,style:e.style},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"getPlatform",value:function(){return new window.H.service.Platform(this.state)}},{key:"getMap",value:function(e,t,a){return new window.H.Map(e,t,a)}},{key:"getEvents",value:function(e){return new window.H.mapevents.MapEvents(e)}},{key:"getBehavior",value:function(e){return new window.H.mapevents.Behavior(e)}},{key:"getUI",value:function(e,t){return new window.H.ui.UI.createDefault(e,t)}},{key:"componentDidMount",value:function(){var e=this,t={app_id:this.state.app_id,app_code:this.state.app_code,searchtext:this.state.address.street+this.state.address.city+this.state.address.state+this.state.address.postalCode+this.state.address.country};f.a.get("https://geocoder.api.here.com/6.2/geocode.json",{params:t}).then(function(t){var a=t.data.Response.View;if(a.length>0&&a[0].Result.length>0){var n=a[0].Result[0].Location;console.log(e.state.coords+" "+n.DisplayPosition.Latitude+"hahaha "+n.DisplayPosition.Longitude),e.setState({isChecked:!0,coords:{lat:n.DisplayPosition.Latitude,lng:n.DisplayPosition.Longitude},loading:!1}),console.log("ha ana f if"+e.state.coords.lat+12);var s=new window.H.map.Icon("https://img.icons8.com/color/48/000000/doctor-male.png"),i=new window.H.map.Marker(e.state.coords,{icon:s});e.map.setCenter(e.state.coords),e.map.addObject(i)}else e.setState({isChecked:!0,coords:null,loading:!1})}).catch(function(e){console.log("caught failed query "+e),this.setState({isChecked:!0,coords:null,loading:!1})}),this.platform=this.getPlatform();var a=this.platform.createDefaultLayers(),n=document.getElementById("here-map");this.map=this.getMap(n,a.normal.map,{center:this.state.coords,zoom:this.state.zoom})}},{key:"render",value:function(){return s.a.createElement("div",{id:"here-map",style:{width:"100%",height:"400px",background:"grey"}})}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(d.a)(this,Object(u.a)(t).call(this,e)),console.log("Hello from Map Modal"),a.state={modal:!1},a.toggle=a.toggle.bind(Object(y.a)(Object(y.a)(a))),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(O.a,{color:"info",className:"font-weight-bold btn float-right",onClick:this.toggle},s.a.createElement("i",{className:"fa fa-location-arrow","aria-hidden":"true"})," Address "),s.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.physician.Physician_Profile_ID},s.a.createElement(R.a,{toggle:this.toggle},"Location "),s.a.createElement(S.a,null,s.a.createElement(c.a,{className:"clearfix"},s.a.createElement(r.a,null,"Address:",s.a.createElement("address",null," ",this.props.physician.Recipient_Primary_Business_Street_Address_Line1))),s.a.createElement(L,{app_id:"0etNHVQpVlYq19ZIMA8r",app_code:"GnTQW_LcBFER-c7EX-0b3g",street:this.props.physician.Recipient_Primary_Business_Street_Address_Line1,city:this.props.physician.Recipient_City,state:this.props.physician.Recipient_State,postalCode:this.props.physician.Recipient_Zip_Code,country:this.props.physician.Recipient_Country,zoom:"12"}))))}}]),t}(s.a.Component),M=function(e){var t=e.physician;return s.a.createElement(n.Fragment,null,s.a.createElement(N.a,null,s.a.createElement(C.a,null,s.a.createElement(x.a,{className:"h3 mb-2 pt-2 font-weight-bold text-secondary"},t.Physician_Full_Name),s.a.createElement(k.a,{className:"text-secondary mb-3 font-weight-light text-uppercase",style:{fontSize:"0.8rem"}},t.Physician_Primary_Type+" "+t.Physician_Specialty),s.a.createElement(j.a,{className:"text-secondary"},"Address line1 : ",t.Recipient_Primary_Business_Street_Address_Line1," "),s.a.createElement(j.a,{className:"text-secondary"},"Recipient City :",t.Recipient_City),s.a.createElement(j.a,{className:"text-secondary"},"Recipient State :",t.Recipient_State),s.a.createElement(j.a,{className:"text-secondary"},"Recipient Zip_Code :",t.Recipient_Zip_Code),s.a.createElement(j.a,{className:"text-secondary"},"Recipient Country :",t.Recipient_Country),s.a.createElement(I,{physician:t}))))},D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={physicians:[],initialItems:[],physicianCount:0},a.filterList=a.filterList.bind(Object(y.a)(Object(y.a)(a))),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"filterList",value:function(e){console.log("Inside -- filterList");var t=this.state.initialItems;t=t.filter(function(t){return-1!==t.Physician_Full_Name.toLowerCase().search(e.target.value.toLowerCase())}),this.setState({physicians:t,physicianCount:t.length})}},{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/getphysicians").then(function(t){console.log("Got Response--"+JSON.stringify(t.data)),console.log("physicians before set"+JSON.stringify(Object.values(t.data[0]))),e.setState({initialItems:t.data,physicianCount:t.data.length,physicians:t.data})})}},{key:"render",value:function(){return s.a.createElement(n.Fragment,null,this.state.physicians&&s.a.createElement("div",{className:"position-relative"},s.a.createElement("span",{className:"d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold"},"Filter",s.a.createElement(E.a,{pill:!0,color:"success",className:"text-uppercase px-2 py-1 ml-3 mb-1 align-middle",style:{fontSize:"0.75rem"}},"New")),s.a.createElement(b.a,null,s.a.createElement(w.a,null)),s.a.createElement(c.a,{form:!0},s.a.createElement(r.a,{md:6},s.a.createElement(w.a,null,s.a.createElement(_.a,{type:"text",className:"form-control form-control-lg",placeholder:"Physician Name",onChange:this.filterList})))),s.a.createElement("span",{className:"d-block pb-4 h2 text-dark border-bottom border-gray"},"Physicians Around the US",s.a.createElement(E.a,{pill:!0,color:"success",className:"text-uppercase px-2 py-1 ml-3 mb-1 align-middle",style:{fontSize:"0.75rem"}},this.state.physicianCount)),s.a.createElement(c.a,null,s.a.createElement(v.a,null,this.state.physicians.map(function(e){return s.a.createElement(M,{physician:e})})))))}}]),t}(n.Component),H=a(90),z=a(92),B=function(){return s.a.createElement("header",null,s.a.createElement(H.a,{fixed:"top",color:"light",light:!0,expand:"xs",className:"border-bottom border-gray bg-white",style:{height:80}},s.a.createElement(l.a,null,s.a.createElement(c.a,{noGutters:!0,className:"position-relative w-100 align-items-center"},s.a.createElement(r.a,{className:"d-none d-lg-flex justify-content-start"}),s.a.createElement(r.a,{className:"d-flex justify-content-xs-start justify-content-lg-center"},s.a.createElement(z.a,{className:"d-inline-block p-0",href:"/",style:{width:80}},"Pysicians Cards")),s.a.createElement(r.a,{className:"d-none d-lg-flex justify-content-end"})))))},A=function(){return s.a.createElement(n.Fragment,null,s.a.createElement(B,null),s.a.createElement("main",{className:"my-5 py-5"},s.a.createElement(l.a,{className:"px-0"},s.a.createElement(c.a,null,s.a.createElement(r.a,{xs:{order:1},md:{size:12},tag:"section"},s.a.createElement(D,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.1dd4a1c0.chunk.js.map