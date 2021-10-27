(this["webpackJsonptwitch-app"]=this["webpackJsonptwitch-app"]||[]).push([[0],{151:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),s=n.n(c),i=(n(151),n(41)),o=n(44),l=n(43),d=n(235),u=n(142),j=n(74),h=n(39),b=n(58),m=n(241),p=n(239),f=n(237),O=n(238),g=n(243),x=n(244),y="",S="".concat(y,"/login"),v=function(e){return fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to log in");return e.json()}))},C="".concat(y,"/register"),w=function(e){return fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to register")}))},I="".concat(y,"/logout"),k=function(){return fetch(I,{method:"POST",credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log out")}))},F="".concat(y,"/game"),P=function(){return fetch(F).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},M="".concat(y,"/game?game_name="),_="".concat(y,"/search?game_id="),E=function(e){return fetch("".concat(_).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},R=function(e){return function(e){return fetch("".concat(M).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return E(e.id);throw Error("Fail to find the game")}))},T="".concat(y,"/favorite"),D=function(){return fetch(T,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},L="".concat(y,"/recommendation"),A=function(){return fetch(L,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},G=n(6),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signinOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){v(t).then((function(t){e.setState({displayModal:!1}),u.b.success("Welcome back, ".concat(t.name)),e.props.onSuccess()})).catch((function(e){u.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{shape:"round",onClick:e.signinOnClick,style:{marginRight:"20px"},children:"Login"}),Object(G.jsx)(p.a,{title:"Log in",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(f.a,{name:"normal_login",onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(f.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(f.a.Item,{children:Object(G.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})},e}return n}(a.a.Component),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){w(t).then((function(){e.setState({displayModal:!1}),u.b.success("Successfully signed up")})).catch((function(e){u.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(G.jsx)(p.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(f.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(f.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(f.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(O.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(f.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(G.jsx)(O.a,{placeholder:"firstname"})}),Object(G.jsx)(f.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(G.jsx)(O.a,{placeholder:"lastname"})}),Object(G.jsx)(f.a.Item,{children:Object(G.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(a.a.Component),N=n(240),J=n(245),U=n(145),B=n(246),K=n(247),H=m.a.SubMenu,W="streams",z="videos",Q="clips",X=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayDrawer:!1,data:{VIDEO:[],STREAM:[],CLIP:[]}},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){D().then((function(t){e.setState({data:t,displayDrawer:!0})})).catch((function(e){u.b.error(e.message)}))},e.render=function(){var t=e.state.data,n=t.VIDEO,r=t.STREAM,a=t.CLIP;return Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(G.jsx)(J.a,{}),children:"My Favorites"}),Object(G.jsx)(N.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(G.jsxs)(m.a,{mode:"inline",defaultOpenKeys:[W],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(G.jsx)(H,{icon:Object(G.jsx)(U.a,{}),title:"Streams",children:r.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},W),Object(G.jsx)(H,{icon:Object(G.jsx)(B.a,{}),title:"Videos",children:n.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},z),Object(G.jsx)(H,{icon:Object(G.jsx)(K.a,{}),title:"Clips",children:a.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Q)]})})]})},e}return n}(a.a.Component),Y=n(249),Z=n(250),$=n(114),ee=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(t){R(t.game_name).then((function(t){e.setState({displayModal:!1}),e.props.onSuccess(t)})).catch((function(e){u.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{shape:"round",onClick:e.searchOnClick,icon:Object(G.jsx)($.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search "}),Object(G.jsx)(p.a,{title:"Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(G.jsxs)(f.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(G.jsx)(f.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(G.jsx)(O.a,{placeholder:"Game name"})}),Object(G.jsx)(f.a.Item,{children:Object(G.jsx)(b.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return n}(a.a.Component),te=n(138),ne=n.n(te),re=n(120),ae=n(107),ce=n(236),se=n(242),ie=n(248),oe=re.a.TabPane,le="stream",de="videos",ue="clips",je=function(e,t){var n="".concat(e.broadcaster_name," - ").concat(e.title);return Object(G.jsxs)("div",{children:[t&&Object(G.jsx)(ae.a,{title:"Add to favorite list",children:Object(G.jsx)(b.a,{shape:"circle",icon:Object(G.jsx)(ie.a,{})})}),Object(G.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(G.jsx)(ae.a,{title:n,children:Object(G.jsx)("span",{children:n})})})]})},he=function(e,t){return Object(G.jsx)(ce.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:function(e){return Object(G.jsx)(ce.b.Item,{style:{marginRight:"20px"},children:Object(G.jsx)(se.a,{title:je(e,t),children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("img",{alt:"Placeholder",src:(n=e.thumbnail_url,n.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var n}})},be=function(e){var t=e.resources,n=e.loggedIn,r=t.VIDEO,a=t.STREAM,c=t.CLIP;return Object(G.jsxs)(re.a,{defaultActiveKey:le,children:[Object(G.jsx)(oe,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:he(a,n)},le),Object(G.jsx)(oe,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:he(r,n)},de),Object(G.jsx)(oe,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:he(c,n)},ue)]})},me=d.a.Header,pe=d.a.Content,fe=d.a.Sider,Oe=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]}},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?E(n).then((function(t){e.setState({resources:t})})):A().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){e.setState({loggedIn:!0})},e.signoutOnClick=function(){k().then((function(){e.setState({loggedIn:!1}),u.b.success("Successfull signed out")})).catch((function(e){u.b.error(e.message)}))},e.componentDidMount=function(){P().then((function(t){e.setState({topGames:t})})).catch((function(e){u.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(d.a,{children:[Object(G.jsx)(me,{children:Object(G.jsxs)(j.a,{justify:"space-between",children:[Object(G.jsx)(h.a,{children:e.state.loggedIn&&Object(G.jsx)(X,{})}),Object(G.jsx)(h.a,{children:e.state.loggedIn?Object(G.jsx)(b.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(G.jsxs)("div",{children:[Object(G.jsx)(q,{onSuccess:e.signinOnSuccess}),Object(G.jsx)(V,{})]})})]})}),Object(G.jsxs)(d.a,{children:[Object(G.jsxs)(fe,{width:300,className:"site-layout-background",children:[Object(G.jsx)(ee,{onSuccess:e.customSearchOnSuccess}),Object(G.jsxs)(m.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(G.jsx)(m.a.Item,{icon:Object(G.jsx)(Y.a,{}),children:"Recommend for you!"},"Recommendation"),Object(G.jsx)(ne.a,{icon:Object(G.jsx)(Z.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(G.jsxs)(m.a.Item,{style:{height:"50px"},children:[Object(G.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(G.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(G.jsx)(d.a,{style:{padding:"24px"},children:Object(G.jsx)(pe,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(G.jsx)(be,{resources:e.state.resources,loggedIn:e.state.loggedIn})})})]})]})},e}return n}(a.a.Component),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,251)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(G.jsx)(Oe,{}),document.getElementById("root")),ge()}},[[233,1,2]]]);
//# sourceMappingURL=main.0dbd8161.chunk.js.map