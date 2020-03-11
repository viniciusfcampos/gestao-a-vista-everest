(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(317)},190:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),c=(a(190),a(18)),s=a(19),l=a(24),f=a(23),u=a(25),p=a(11),m=a(5),h=Object(p.createMuiTheme)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),d=a(89),g=a.n(d),b=a(48),y=a(26),v=a.n(y),E=new(function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"listarEverest",value:function(){return g.a.get("https://one-on-ones-dti.herokuapp.com/api/data_tribe?tribe=Everest").then(function(e){return e.data.crafters}).catch(function(e){console.log(e)})}},{key:"parseEverest",value:function(e){return{Crafter:e[0],Data:v()(e[1],"DD/MM/YYYY"),Lider:e[2],Cliente:e[3],OKR:"TRUE"===e[4],Imagem:e[5],Pontos:Number(e[6])}}}]),e}()),w=(a(272),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).prettyName=function(e){return e.split("@")[0].split(".").join(" ")},a.corStatus=function(e){if(!e)return a.props.classes.Escalado;var t=v()().diff(v()(e.lastMeeting),"days");return t<21?a.props.classes.EmDia:t<30?a.props.classes.Proximo:t<45?a.props.classes.Atrasado:a.props.classes.Escalado},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.crafter;return r.a.createElement(m.f,{item:!0,xs:2},r.a.createElement(m.b,{className:this.corStatus(e.association)},r.a.createElement(m.d,{style:{paddingBottom:0},title:r.a.createElement(m.i,{align:"left",style:{fontSize:20,fontWeight:900,color:"#ffffff",height:100,overflow:"hidden",textTransform:"capitalize"}},e.name)}),r.a.createElement(m.c,{style:{minHeight:48}},r.a.createElement(m.f,{container:!0},r.a.createElement(m.f,{item:!0,xs:4},r.a.createElement(m.i,{style:{fontSize:14,fontWeight:200,fontStyle:"italic",color:"#ffffff"}},"Data:"),r.a.createElement(m.i,{style:{fontSize:16,fontWeight:700,color:"#ffffff"}},e.association?v()(e.association.lastMeeting).format("DD/MM"):"-")),r.a.createElement(m.f,{item:!0,xs:8},r.a.createElement(m.i,{style:{fontSize:14,fontWeight:200,fontStyle:"italic",color:"#ffffff"}},"L\xedder:"),r.a.createElement(m.i,{style:{fontSize:16,fontWeight:700,color:"#ffffff"},noWrap:!0},e.association?e.association.leader:"-"))),r.a.createElement(m.f,{container:!0}))))}}]),t}(r.a.Component)),O=Object(p.withStyles)(function(){return{Atrasado:{backgroundColor:"#e95d6a"},EmDia:{backgroundColor:"#57bb8a"},Proximo:{backgroundColor:"#f6b26b"},Escalado:{backgroundColor:"#505050"}}})(w),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,crafters:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;E.listarEverest().then(function(t){e.setState({crafters:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.card},r.a.createElement(m.f,{container:!0,spacing:8,direction:"row"},b.chain(this.state.crafters).orderBy(function(e){return e.association?e.association.lastMeeting:""}).map(function(e){return r.a.createElement(O,{key:e.name,crafter:e})}).value()))}}]),t}(r.a.Component),k=Object(p.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,"px)")}}})(j),x=a(90),S=a.n(x),C=a(91),M=a.n(C);var W=Object(p.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,"px)"),overflow:"hidden"},iframe:{marginTop:"-40px",height:"calc(100% + 100px)"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.card},r.a.createElement("iframe",{src:e.page,width:"100%",className:t.iframe,frameborder:"0","X-FrameOptions":"sameorigin"}))}),D=[0,1,2],A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,page:0,play:!0},a.handleChange=function(e,t){a.setState({page:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){if(e.state.play){var t=(e.state.index+1)%D.length;e.setState({index:t,page:D[t]})}},3e4)}},{key:"render",value:function(){var e=this.state.page,t=this.props.classes;return r.a.createElement(p.MuiThemeProvider,{theme:h},r.a.createElement(m.a,{position:"static"},r.a.createElement(m.h,{value:e,onChange:this.handleChange,style:{flexGrow:1}},r.a.createElement(m.g,{wrapped:!0,label:"Ritos"}),r.a.createElement(m.g,{wrapped:!0,label:"Diagn\xf3stico"}),r.a.createElement(m.g,{wrapped:!0,label:"1-1"})),r.a.createElement(m.e,{onClick:this.handleClick,className:t.fab,color:"secondary"},this.state.play?r.a.createElement(S.a,{style:{color:"#ffffff"}}):r.a.createElement(M.a,{style:{color:"#ffffff"}}))),0===e&&r.a.createElement(W,{page:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQxJMQAxD9LvF75dM89kX7MsN6W-GRKhwacM-J20YSfOfVKOCoTjIbSheLhUTl7d3ZAWHbZXT7q7Qdf/pubhtml?gid=2092766634&single=true"}),1===e&&r.a.createElement(W,{page:"https://docs.google.com/spreadsheets/d/e/2PACX-1vQxJMQAxD9LvF75dM89kX7MsN6W-GRKhwacM-J20YSfOfVKOCoTjIbSheLhUTl7d3ZAWHbZXT7q7Qdf/pubhtml?gid=890090851&single=true"}),2===e&&r.a.createElement(k,null))}}]),t}(r.a.Component),T=Object(p.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.c1e2352b.chunk.js.map