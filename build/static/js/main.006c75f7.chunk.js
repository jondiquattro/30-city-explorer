(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),o=(a(19),a(2)),u=a(3),i=a(5),m=a(4),s=a(6),h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("h1",null,"City Explorer!"),l.a.createElement("p",null,"Enter a location below to learn about the weather, events, restaurants, movies, filmed there, and more!")))},p=a(11),E=a(7),d=a.n(E),f=a(12),b=a(1),w=a.n(b),v=function(e){return l.a.createElement("div",{className:e.className,id:"map-container"},l.a.createElement("img",{id:"map",src:"https://maps.googleapis.com/maps/api/staticmap?center="+e.location.latitude+"%2c%20"+e.location.longitude+"&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk",alt:"Map of search query"}),l.a.createElement("h2",{className:"query-placeholder"},"Here are the results for ",e.location.formatted_query))},y=function(){return l.a.createElement("h3",null,"Results from the Dark Sky API")},g=function(e){return l.a.createElement("ul",null,e.weather.map(function(e,t){return l.a.createElement("li",{key:"weather-".concat(t)},"The forecast for ",e.time," is: ",e.forecast)}))},k=function(){return l.a.createElement("h3",null,"Results from the Yelp API")},j=function(e){return l.a.createElement("ul",null,l.a.createElement("li",null,"Hello Yelp!"))},O=function(){return l.a.createElement("h3",null,"Results from the Meetup API")},S=function(e){return l.a.createElement("ul",null,l.a.createElement("li",null,"Hello Meetup!"))},N=function(){return l.a.createElement("h3",null,"Results from the Movie DB API")},x=function(e){return l.a.createElement("ul",null,l.a.createElement("li",null,"Hello Movies!"))},C=function(){return l.a.createElement("h3",null,"Results from the Hiking Project API")},H=function(e){return l.a.createElement("ul",null,l.a.createElement("li",null,"Hello Trails!"))},A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(d.a.mark(function e(t){var n,l;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,w.a.get("https://city-explorer-backend.herokuapp.com/location?data=".concat(t.target.inputsearch.value));case 3:return n=e.sent,a.setState({location:n.body}),console.log("Query: ".concat(a.state.location.formatted_query,", Lat: ").concat(a.state.location.latitude,", Long: ").concat(a.state.location.longitude)),e.next=8,w.a.get("https://city-explorer-backend.herokuapp.com/weather").query({data:a.state.location});case 8:l=e.sent,a.setState({weather:l.body}),a.setState({mapClassName:""});case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(p.a)({},n,l))},a.state={mapClassName:"hide",divClassName:"column-container hide",location:{},weather:[]},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement(I,{handleSubmit:this.handleSubmit}),l.a.createElement(v,{location:this.state.location,className:this.state.mapClassName}),l.a.createElement("div",{className:this.state.divClassName},l.a.createElement("section",null,l.a.createElement(y,null),l.a.createElement(g,{weather:this.state.weather})),l.a.createElement("section",null,l.a.createElement(k,null),l.a.createElement(j,null)),l.a.createElement("section",null,l.a.createElement(O,null),l.a.createElement(S,null)),l.a.createElement("section",null,l.a.createElement(N,null),l.a.createElement(x,null)),l.a.createElement("section",null,l.a.createElement(C,null),l.a.createElement(H,null)))))}}]),t}(l.a.Component),I=function(e){return l.a.createElement("form",{id:"search-form",onSubmit:e.handleSubmit},l.a.createElement("label",{for:"search"},"Search for a location"),l.a.createElement("input",{type:"text",name:"search",id:"inputsearch",placeholder:"Enter a location here"}),l.a.createElement("button",{type:"submit"},"Explore!"))},L=A,M=(a(28),function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("main",null,l.a.createElement(L,{prompt:"Update Location",handler:this.handleLocation,updateLocation:this.updateLocation})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.006c75f7.chunk.js.map