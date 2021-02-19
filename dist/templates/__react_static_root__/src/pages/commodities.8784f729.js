(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{49:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),o=n(0),i=n.n(o),l=n(45),u=n.n(l),s=n(46),c=n.n(s),m=function(){function e(t,n){if(u()(this,e),!t)throw Error("System name missing");if(!n)throw Error("Station name missing");this.system=t,this.name=n}return c()(e,[{key:"toString",value:function(){return JSON.stringify({system:this.system,name:this.name})}}]),e}(),y=function(){function e(){u()(this,e)}return c()(e,[{key:"create",value:function(e,t){"undefined"!=typeof window&&localStorage.setItem(e,JSON.stringify(t))}},{key:"read",value:function(e){return"undefined"!=typeof window?JSON.parse(localStorage.getItem(e)):void 0}},{key:"update",value:function(e,t){"undefined"!=typeof window&&localStorage.setItem(e,JSON.stringify(t))}},{key:"remove",value:function(e){"undefined"!=typeof window&&localStorage.removeItem(e)}}]),e}(),f=new(function(){function e(){u()(this,e),this.strategy=new y}return c()(e,[{key:"queryStationData",value:function(e){return fetch("https://inara.cz/market/?ps1=Bodhinga+%5BHay+Forum%5D",{mode:"no-cors"}).then((function(e){return e.body}))}},{key:"addStation",value:function(e){if(!(e instanceof m))throw Error("Not a Station object");var t=this.strategy.read("stations_array_key"),n=Array.isArray(t)?t:[];n.push(e),this.strategy.update("stations_array_key",n)}},{key:"removeStation",value:function(e){if(!(e instanceof m))throw Error("Not a Station object");var t=this.strategy.read("stations_array_key");if(console.log("test : ",t),Array.isArray(t)){var n=t.filter((function(t){return!(t.name===e.name&&t.system===e.system)}));this.strategy.update("stations_array_key",n)}else console.warn("Stations is not array")}},{key:"getStations",value:function(){var e=this.strategy.read("stations_array_key");return Array.isArray(e)?e.map((function(e){return new m(e.system,e.name)})):[]}}]),e}());t.default=function(){var e=Object(o.useState)(E()),t=r()(e,2),n=t[0],a=t[1],l=Object(o.useState)(),u=r()(l,2),s=u[0],c=u[1],y=Object(o.useState)(),d=r()(y,2),S=(d[0],d[1]);function v(){var e=E();a(e)}function E(){return f.getStations()}return Object(o.useEffect)((function(){console.info("Stations: ",n)}),[n]),Object(o.useEffect)((function(){console.info("Selected: ",s)}),[s]),i.a.createElement("div",null,i.a.createElement("h1",null,"Select Station"),i.a.createElement("br",null),i.a.createElement("select",{name:"stations",value:s,onChange:function(e){return t=e.target.value,c(t),void f.queryStationData().then((function(e){S(e)}));var t}},i.a.createElement("option",{key:"null",value:""}),n.map((function(e,t){return i.a.createElement("option",{key:e.name+t,value:e},e.system,", ",e.name)}))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{disabled:!s||0===s.length,onClick:function(){var e=JSON.parse(s),t=new m(e.system,e.name);f.removeStation(t),v(),c("")}},"Delete"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t){var n=new m(e,t);f.addStation(n),v()}(e.target.elements.system.value,e.target.elements.station.value)}},i.a.createElement("label",null,"System Name",i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"system"})),i.a.createElement("br",null),i.a.createElement("label",null,"Station Name",i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"station"})),i.a.createElement("br",null),i.a.createElement("input",{type:"submit",value:"Add Station",style:{marginTop:24}})),i.a.createElement("br",null),i.a.createElement("h1",null,"Station Data"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null))}}}]);