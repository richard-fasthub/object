try{
fi(K.Ma(),"sy439");
di(K.Ma(),"sy439");gi(K.Ma(),"sy439");
}catch(e){_DumpException(e)}
try{
var J2e=function(a){switch(a){case "default":case "nav":return 1;case "card":return 3;case "canvas":return 2;case "picker":return 4;case "rhs":return 5}return 0};fi(K.Ma(),"sy440");var K2e={},L2e={},M2e={},sO={},N2e="gm-request-activeview gm-request-feature-info gm-register-viewchange gm-navigate gm-notification gm-showapplicationalert gm-register-event-notification resize_iframe set_title set_pref requestNavigateTo gadget-loaded google.debug.log gm-setdirty request_size gm-register-skinupdate gm-share-standalone close_popup gm-register-compose-details-change get_form_details".split(" "),O2e=function(a,b,c){var d=!1;if(K2e[a]){var d=!0,e=L2e[a];if(e&&(d=va(e)?nb(b,function(a){return sb(e, a)}):sb(b,e),!d))return!1;if(b=M2e[a])if(d=va(b)?sb(b,c):b==c,!d)return!1;(a=sO[a])&&(d=va(a)?!sb(a,c):a!=c)}return d},P2e=function(a,b){return kb(N2e,function(c){return O2e(c,a,b)})};
var R2e=function(a,b,c){A.call(this);this.controller=a;this.Uc=Q2e++;this.Ra={};for(var d in b)this.Ra[d]=b[d];this.yb=c};r(R2e,A);var Q2e=0;f=R2e.prototype;f.ona=!1;f.getId=function(){return this.Uc};f.lK=function(){return this.Ra};f.render=function(){this.yb&&(this.ona=!0)};f.V$=function(){return this.ona};f.reload=function(){We(this.yb);this.render()};f.Ba=function(){return this.yb};f.Sa=function(){this.controller.Aa()&&this.controller.unregister(this.Uc);R2e.Ea.Sa.call(this)};
f.register=function(a,b){return this.controller.register(this.Uc,a,b)};f.unregister=function(a){return this.controller.unregister(this.Uc,a)};f.call=function(a,b,c){var d=Array.prototype.slice.call(arguments,0);d.unshift(this.Uc);this.controller.call.apply(this.controller,d)};
var tO=function(a,b,c,d,e){R2e.call(this,d,a.wa,c);this.Oa=e;this.Ub=tA(e);this.Za=YB(e);this.yc=jD(e);this.Ae=zB(e);this.ha=a;this.wa=b;this.Zb=Ie(c);this.Qa=db();this.Ha=ok(e).Fb.Pb("domainInfo").qb("digu")?this.Ub.getData("ui:d"):"";this.Yb=top.location.protocol+"//"+top.location.host+(this.Ha?"/a/"+this.Ha:"")+"/html";this.Ia=[];this.Ca={};this.Xa=!1;a=S2e(this).wa();this.Ja=new oe(a.Da?a.hh():null);wd(this.ha,"p",this.Ta,!1,this)};r(tO,R2e);var T2e=window.location.protocol;f=tO.prototype;
f.lXc=Number.MAX_VALUE;f.KF=0;f.mXc=Number.MAX_VALUE;f.nXc=0;f.IY=null;f.VJb=!1;f.Sbb=!1;
f.render=function(){this.Wb=q();var a=S2e(this);this.Me=a.Ga;this.Sbb&&(this.Da=a.Aa);a="remote_iframe_"+this.getId();a=this.ra=this.Zb.Na("IFRAME",{src:U2e(this),id:a,name:a,className:"AFpHvf",height:this.Me+"px",width:this.Da?this.Da+"px":"100%",scrolling:"auto",marginWidth:0,marginHeight:0,frameBorder:0,vspace:0,hspace:0});V2e(this);this.ha.uda("google.waitforload")&&(a.style.position="absolute",a.style.top="-20000px",this.Qb=Wh("zf",this.Db,1E3,this),this.nb=Wh("Af",this.Fc,8E3,this),this.VJb&&
(this.Ba().style.height=this.Me+"px"));this.Ba().appendChild(this.ra);this.Za.ha(KCa,J2e(this.wa),this.ha.getUrl());this.ona=!0;a=this.controller;a.Aa()&&a.Ca?this.Ob():this.Aa=zd(a,"Ue",this.Ob,!1,this)};f.reload=function(){$e(this.ra);this.ha.uda("google.waitforload")&&this.Db();this.render()};f.Sa=function(){for(this.IY&&Ad(this.IY,"click",this.Va,!1,this);0<this.Ia.length;)this.Ia.pop().dispose();this.Ca=null;this.Aa&&(Bd(this.Aa),this.Aa=null);Ad(this.ha,"p",this.Ta,!1,this);tO.Ea.Sa.call(this)};
f.La=function(){return this.Oa};f.N_a=function(a){if(!(a>this.lXc||a<this.KF)&&this.Me!=a){var b=a-this.Me;this.ra.style.height=a+"px";this.Me=a;this.dispatchEvent({type:"Xe",uxc:b})}};f.Jd=function(){return this.Me};f.Kh=function(a){a>this.mXc||a<this.nXc||this.Da==a||(this.ra.style.width=a+"px",this.Da=a)};f.Ad=function(){return this.Da};f.MFb=function(a,b){!isNaN(a)&&0<a&&this.N_a(a);!isNaN(b)&&0<b&&this.Kh(b);this.dispatchEvent("Ye")};
var S2e=function(a){var b=a.ha.Eva(a.wa||"default");return null!=b?b:"default"!=a.wa?a.ha.Eva("default"):null};tO.prototype.setTitle=function(a){this.dispatchEvent({type:"Ve",title:a})};tO.prototype.Cb=function(){this.Xa=!0;this.Ba().style.height="";this.ra.style.position="";this.ra.style.top="";V2e(this);this.IY&&(this.IY.style.display="none");var a=q()-this.Wb;this.Za.ha(NCa,J2e(this.wa),this.ha.getUrl(),a);this.dispatchEvent("We")};
tO.prototype.Rb=function(a){var b=this.Oa.get("SI4cQe");b.wa=b.ha();LH(b,"url","uc");b.Ca={items:[{type:"http://schema.org/WebPage",properties:{url:[a]}}]};b.ra.gbar.lGC(m(b.Ga,b,"url",void 0))};tO.prototype.Ld=function(){return this.Xa};var W2e=function(a,b,c){a.controller.Aa()&&a.controller.Ca?a.register(b,m(c.execute,c)):a.Ca[b]=c;a.Ia.push(c)};
tO.prototype.Ob=function(){var a=this.controller.Da();this.Aa&&(Bd(this.Aa),this.Aa=null);a.xT(this.getId(),we(X2e(this),"/gadgets/files/container/rpc_relay.html").toString());a.gEa(this.getId(),this.Qa);if(a=P2e(this.ha.Qa(),this.wa))for(var b=0;b<a.length;b++){var c=a[b],d=K2e[c];if(!d)throw Error("Bf`"+c);d=new d(this,this.Oa);W2e(this,c,d)}for(var e in this.Ca)a=this.Ca[e],this.register(e,m(a.execute,a)),delete this.Ca[e]};tO.prototype.Va=function(a){sn(a.target,"cg")&&this.reload()};
tO.prototype.Ta=function(a){if(a.kE&2&&"URL"!=S2e(this).getType()&&(a=this.ha.gia())){this.ha.getUrl();try{this.call("update_security_token",null,decodeURIComponent(a))}catch(b){}}};var V2e=function(a){Xh(a.nb);Xh(a.Qb);a.nb=a.Qb=0};tO.prototype.Db=function(){Y2e(this,"Loading...")};tO.prototype.Fc=function(){var a;a={title:this.ha.getTitle()};a='Ooops!  "'+(M(a.title)+'" failed to load.');a=L(""+(a+' <span class="cg">Try again</span>'));Y2e(this,a)};
var Y2e=function(a,b){if(a.IY)a.IY.style.display="block";else{var c=a.Zb.createElement("div");c.className="m6";a.Ba().appendChild(c);a.IY=c;wd(c,"click",a.Va,!1,a)}lA(a.IY,b)},X2e=function(a){var b=S2e(a).wa();if(a.ha.yVa()){b.Il("");ke(b,null);je(b,"");var c="/mail/g";a.Ub.getData("adc:ihru")&&(c="/a/"+a.Ub.getData("ui:d")+"/g");le(b,c+b.getPath())}else""==b.ra&&je(b,T2e);return b},Z2e=function(a){var b=null;if(a.ha.uda("skins")){var c=a.yc;if(c){b={};c=c.ha.ra;switch(a.wa||"default"){case "default":case "canvas":case "rhs":case "nav":b.GM_BG_COLOR=
c[4];b.GM_TEXT_COLOR=c[5];b.GM_LINK_COLOR=c[6];break;case "card":b.GM_BG_COLOR=c[7];b.GM_TEXT_COLOR=c[8];b.GM_LINK_COLOR=c[9];break;case "picker":b.GM_BG_COLOR=c[10],b.GM_TEXT_COLOR=c[11],b.GM_LINK_COLOR=c[12]}b.GM_SELECTED_BG_COLOR=c[13];b.GM_SELECTED_TEXT_COLOR=c[14];b.GM_SELECTED_LINK_COLOR=c[15];b.GM_MENU_BORDER_COLOR=c[16];b.GM_MENU_BG_COLOR=c[17];b.GM_MENU_TEXT_COLOR=c[18];b.GM_MENU_LINK_COLOR=c[19]}}return b},$2e=function(a,b){var c=Z2e(a);if(c){var d=[],e;for(e in c)d.push(e+":"+c[e]);qe(b,
"skintype","gm");qe(b,"skinval",d.join(";"))}},a3e=function(a,b,c){b="st="+b;var d=a.indexOf("#"),e=0>a.indexOf("?")?"?":"&";return 0>d?a+(c?"#":e)+b:c?a+"&"+b:a.substring(0,d)+e+b+a.substring(d)},U2e=function(a){var b=X2e(a),c=a.Ja;b.wa.remove("st");c.remove("st");qe(b,"parent",a.Yb);a.Ha&&qe(b,"pid",a.Ha);a.wa&&qe(b,"view",a.wa);if(a.Fa)for(var d=a.Fa.Yd(),e=0;e<d.length;e++)qe(b,d[0],a.Fa.get(d[0]));"1"==MBd(new ie(Wf),"nogadgetcache")&&qe(b,"nocache","1");Zb(a.ha.wa,function(a,d){var e="up_"+
d;jia?c.set(e,a):qe(b,e,a)},a);$2e(a,b);"URL"==S2e(a).getType()?(qe(b,"rpctoken",a.Qa),qe(b,"mid",a.getId())):(c.set("rpctoken",a.Qa),c.set("mid",a.getId()),b.wa.remove("mid"),b.wa.remove("rpctoken"));ne(b,c.toString());d=a.ha.gia();e=b.toString();return d?a3e(e,d,a.ha.DVa()):e};tO.prototype.focus=function(){this.ra&&qf(this.ra).focus()};

di(K.Ma(),"sy440");gi(K.Ma(),"sy440");
}catch(e){_DumpException(e)}
try{
fi(K.Ma(),"sy438");var b3e=b3e||{};
di(K.Ma(),"sy438");gi(K.Ma(),"sy438");
}catch(e){_DumpException(e)}
try{
fi(K.Ma(),"sy441");var uO=function(a,b){this.Ga=a;this.Oa=b};r(uO,v);uO.prototype.execute=function(){return null};uO.prototype.La=function(){return this.Oa};uO.prototype.Pl=function(){return this.Ga};var vO=function(a,b){Pi.call(this,b);this.Db=a};r(vO,Pi);f=vO.prototype;f.W3=sa;f.X3=sa;f.jY=function(a){return a};f.kYa=function(a,b){b()};f.wAa=Sb;f.r3a=sa;f.KT=Pb;f.c4a=Pb;f.aEa=Pb;f.Xha=function(){return null};f.Ny=function(){return this.Db};var c3e=function(a,b,c){uO.call(this,a,b);this.we=c};r(c3e,uO);c3e.prototype.execute=function(a){var b={};sb(a,"subject")&&(b.subject=this.we.Mi());sb(a,"to")&&(b.to=this.we.Ql());sb(a,"cc")&&(b.cc=this.we.wp());sb(a,"bcc")&&(b.bcc=this.we.Rq());return b};
var d3e=function(a,b,c,d){vO.call(this,a,b);this.we=d;this.wa=c;this.Da=!1;this.Ca=[];this.Aa={};this.ha=new UC(this.La());Hx(this.ha,!0);this.ha.Jc().className="zU";qn(Um(this.ha),"NA");Ix(this.ha).className="zU";Ym(this.ha,null);a=this.wa.getTitle()||"Untitled gadget";this.La().get("b8dsi");this.ha.setTitle(a);this.Qa=this.ha.Jc();this.ra=Jx(this.ha);this.getHandler().listen(this.ha,"afterhide",this.CFc);this.ha.$m=!1;b=El(b,Mk);b.addCallback(this.rXc,this);Jf(b,Qf)};r(d3e,vO);
var e3e=function(a,b){y.call(this,a);this.e4=b||null};r(e3e,y);f=d3e.prototype;f.bMa="";f.KT=Qb;f.c4a=Qb;
f.rXc=function(a){this.Yh=a.wa(this.wa,"picker",this.Qa);this.Yh.Sbb=!0;this.Yh.ha.eEa("__COMPOSE_GADGETS_VERSION","gmail-compose-20091105");a=new c3e(this.Yh,this.La(),this.we);W2e(this.Yh,"get_form_details",a);this.Yh.render();this.Yh.Mf(this);this.getHandler().listen(this.Yh,"Ye",this.sXc);a=eo(this.La()).ha;this.getHandler().listen(a,"resize",this.GNc);this.getHandler().listen(this.Yh,"Ze",this.qXc);this.getHandler().listen(this.Yh,"change",this.Iu)};f.sXc=function(){this.ha&&f3e(this)};
var f3e=function(a){Ph(Um(a.ha));var b=Gh(Kx(a.ha)),b=new Be(a.Yh.Ad()||450,a.Yh.Jd()+b.height);Fh(Um(a.ha),b);a.ha.Cd()};f=d3e.prototype;f.GNc=function(){this.ha&&this.ha.Cd()};f.ZK=function(){return this.Ia};f.show=function(a){this.Da=a||!1;this.Ia=!0;this.ha.setVisible(!0);f3e(this);this.Yh.Ld()?this.Yh.focus():this.getHandler().ud(this.Yh,"We",m(tO.prototype.focus,this.Yh))};
f.Iu=function(){this.Ha&&!this.Ha.ra()&&this.Ha.Ta(!0);this.Da||this.dispatchEvent(new e3e("bf",this.Ny()));this.Da=!0;g3e(this,"gm-persist-to-array",this.QNc)};f.JL=function(a){this.Fa=a;this.dispatchEvent(new e3e("cf",this.Ny()))};f.Xha=function(){return this.Fa};f.QNc=function(a){this.Ja=a;g3e(this,"gm-render-html-preview",this.JL)};f.qXc=function(){this.ha.setVisible(!1)};f.CFc=function(){this.Ia=!1;this.Da?this.dispatchEvent("submit"):this.dispatchEvent("hide")};
f.kYa=function(a,b){this.Yh?(new h3e(this,"gm-handle-before-dispose",b,b,a)).call(1E4):b()};f.Sa=function(){d3e.Ea.Sa.call(this);YB(this.La()).ha(MCa,4,this.wa.getUrl());x(this.ha);this.Yh=this.Ja=null;for(var a in this.Aa){var b=this.Aa[a];b.ha&&(Xh(b.ha),b.ha=null)}this.Aa=null};f.jY=function(a){this.bMa="";this.Ca=[];var b=new Ff;b.addCallback(m(this.dic,this));b.addCallback(m(this.spc,this,a));b.callback(!0);return b};
f.dic=function(){var a=new Ff;this.Yh.Ld()?a.callback(!0):this.getHandler().ud(this.Yh,"We",function(){a.callback(!0)});return a};f.spc=function(a){var b=new Ff;g3e(this,"gm-handle-before-send",m(this.iOc,this,b,a),null,function(){b.cancel();a.f7()});return b};
f.iOc=function(a,b,c){if(c.isReady){if("http://www.google.com/ig/modules/compose-calendar.xml"==this.wa.getUrl()){if(c.content)if(c.type){var d=c.type;this.Ca.push(c.content);this.Ca.push(d)}else{for(var d=c.content,e=[],g="isevent eventtitle where startdatetime enddatetime allday".split(" "),h=0;h<g.length;h++){var l=g[h];d[l]&&(e.push(l),e.push(d[l]))}d.where||(e.push("where"),e.push(" "));this.bMa=e.join("\f")}}else c.type&&c.content&&(d=c.type,this.Ca.push(c.content),this.Ca.push(d));c.preview&&
this.JL(c.preview);YB(this.La()).ha(OCa,4,this.wa.getUrl())}else b.f7();a.callback(b)};f.W3=function(){};f.getContent=function(){return this.bMa};f.$i=function(){return!1};f.X3=function(){};f.gK=function(){return this.Ja};f.qX=function(a){this.Ja=a;this.Yh.Ld()?this.$tb(a):this.getHandler().ud(this.Yh,"We",m(this.$tb,this,a))};f.$tb=function(a){g3e(this,"gm-init-from-array",this.Czc,a)};f.Czc=function(){this.Da=!0;g3e(this,"gm-render-html-preview",this.JL)};f.r3a=function(a){this.Ha=a};
f.wAa=function(a){var b={};b.subject=a.Mi();b.to=a.Ql();b.cc=a.wp();b.bcc=a.Rq();this.Yh.dispatchEvent({type:"df",Edd:b})};
f.gkc=function(a,b){if(!this.Ia){var c=new UC(this.La());Hx(c,!0);var d="Remove "+this.wa.getTitle(),e="The "+(this.wa.getTitle()+(" embedded in this message has become unresponsive. You can repeat the operation or remove the "+(this.wa.getTitle()+"."))),g=new Vm;g.set("retry","Retry",!0);g.set("kill",d);Ym(c,g);c.setTitle("Gadget unresponsive");Sm(c,Mc(e));this.getHandler().ud(c,"dialogselect",function(c){switch(c.key){case "kill":a&&a.call(this);this.dispatchEvent("hide");break;case "retry":b.call(2*
b.ra)}});c.setVisible(!0)}};var g3e=function(a,b,c,d,e,g){(new h3e(a,b,m(c,a),m(a.gkc,a,e||null),d)).call(g||1E4)},h3e=function(a,b,c,d,e){this.wa=a;this.Ga=b;this.tf=c;this.Ha=d;this.Ca=e;this.id=i3e++},i3e=0;h3e.prototype.call=function(a){this.Aa=!1;this.ra=a;this.ha||(this.wa.Aa[this.id]=this,this.ha=Wh("Nf`"+this.Ga,this.Fa,this.ra,this),this.wa.Yh.call(this.Ga,m(this.Da,this),this.Ca))};h3e.prototype.Fa=function(){this.Aa=!0;this.ha=null;var a=this.wa;a.Aa&&delete a.Aa[this.id];this.Ha(this)}; h3e.prototype.Da=function(a){if(!this.Aa){this.ha&&(Xh(this.ha),this.ha=null);var b=this.wa;b.Aa&&delete b.Aa[this.id];this.tf(a)}};

di(K.Ma(),"sy441");gi(K.Ma(),"sy441");
}catch(e){_DumpException(e)}
try{
fi(K.Ma(),"sy442");
di(K.Ma(),"sy442");gi(K.Ma(),"sy442");
}catch(e){_DumpException(e)}
try{
var j3e=function(a,b,c,d){if(b=a.wa[b]){var e=a.ra;if(b=qb(b,function(a){return e[a+1]==c&&e[a+2]==d}))return a.xP(b)}return!1},k3e=function(a,b,c){return j3e(a.ra,String(b),c)},l3e=/^remote_iframe_([0-9]+)$/,m3e=function(a){return(a=a.match(l3e))&&a[1]?parseInt(a[1],10):NaN},n3e=function(){v.call(this)};r(n3e,v);n3e.prototype.register=function(){throw Error("Cf");};n3e.prototype.unregister=function(){throw Error("Df");};n3e.prototype.call=function(){throw Error("Ef");};var o3e=function(){v.call(this)};
r(o3e,n3e);o3e.prototype.register=function(a,b){this.K1a(a,function(a,d){Array.prototype.splice.call(arguments,0,1,m3e(a));return b.apply(null,arguments)})};o3e.prototype.K1a=function(){throw Error("Ff");};var p3e=[1],q3e=function(a){v.call(this);this.ha=a||b3e.rpc};r(q3e,o3e);f=q3e.prototype;f.xT=function(a,b,c){this.ha.xT("remote_iframe_"+a,b,c)};f.gEa=function(a,b){this.ha.gEa("remote_iframe_"+a,b)};f.K1a=function(a,b){this.ha.register(a,b)};f.unregister=function(a){this.ha.unregister(a)};
f.call=function(a,b,c,d){var e=Array.prototype.slice.call(arguments,1);e.unshift("remote_iframe_"+a);this.ha.call.apply(this.ha,e)};f.register=function(a,b){this.K1a(a,function(){var c=this.s;if(c!=a)throw Error("Gf`"+a+"`"+c);c=this.a;Array.prototype.splice.call(c,0,0,m3e(this.f));return b.apply(null,c)})};f.Sa=function(){Aa(this.ha.dispose)&&this.ha.dispose();q3e.Ea.Sa.call(this)};var r3e=function(a){D(this,a,0,-1,p3e,null)};r(r3e,C);
var s3e=function(a){A.call(this);this.Fb=ok(a).Fb;this.ra=hC(AD(a));this.ha=this.ra.top._GM_gRpc;this.Oa=a};r(s3e,A);s3e.prototype.Ha="//www-gm-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&debug=0&container=gm";s3e.prototype.wa=!1;s3e.prototype.Ca=0;var t3e=function(a){var b;if(b=(b=ok(a.Oa).Fb.Zk("$root/gadgets-config"))?b.qb("rpc_url"):null)a.Ha=b;a.load()};f=s3e.prototype;
f.load=function(){this.wa=!1;this.Ca=0;var a=this.ra.document,b=a.createElement("script");b.type="text/javascript";b.src=this.Ha;a.body.appendChild(b);this.geb()};f.register=function(a,b){if(this.wa)this.ha?this.ha("register",arguments):this.Da.apply(this.ra,arguments);else throw Error("Hf");};f.unregister=function(a){if(this.wa)this.ha?this.ha("unregister",arguments):this.Fa.apply(this.ra,arguments);else throw Error("If");};
f.call=function(a,b,c,d){if(this.wa)this.ha?this.ha("call",arguments):this.Wea.apply(this.ra,arguments);else throw Error("Jf");};f.xT=function(a,b){if(this.wa)this.ha?this.ha("setRelayUrl",arguments):this.Ja.apply(this.ra,arguments);else throw Error("Kf");};f.gEa=function(a,b){if(this.wa)this.ha?this.ha("setAuthToken",arguments):this.Ia.apply(this.ra,arguments);else throw Error("Lf");};
f.Sa=function(){s3e.Ea.Sa.call(this);this.Aa&&Bd(this.Aa);this.Yf&&(Xh(this.Yf),this.Yf=0);this.ra=this.Da=this.Fa=this.Wea=null};f.PNc=function(){t3e(this);Bd(this.Aa);this.Aa=null};
f.geb=function(){this.Yf&&(Xh(this.Yf),this.Yf=0);var a=this.ra.gadgets&&this.ra.gadgets.rpc;a?a.register&&a.unregister?(this.Da=a.register,this.Fa=a.unregister,this.Wea=a.call,this.Ja=a.setRelayUrl,this.Ia=a.setAuthToken,this.wa=!0,this.dispatchEvent("$e")):this.dispatchEvent("af"):16>this.Ca?(this.Ca++,this.Yf=Wh("Mf",m(this.geb,this),250)):this.dispatchEvent("af")};var u3e=function(a){D(this,a,"",-1,null,null)};r(u3e,C);u3e.prototype.getData=function(){return ah(this,r3e,1)};
u3e.prototype.setData=function(a){ch(this,1,a)};var v3e=function(){A.call(this)};r(v3e,A);v3e.prototype.Ca=!1;v3e.prototype.Aa=function(){return!!this.ha};v3e.prototype.Da=function(){wO(this);return this.ha};var wO=function(a){if(!a.Aa())throw Error("xf");};f=v3e.prototype;f.Uhc=function(a){wO(this);return this.ra[a]?!0:(this.ha.register(a,m(this.F5c,this,a)),this.ra[a]=!0,!1)};
f.register=function(a,b,c){wO(this);wO(this);if(!this.ra[b])throw Error("yf`"+b);var d=this.wa;d[a]||(d[a]={});var e=!1;d[a][b]&&(e=!0);d[a][b]=c;return e};f.unregister=function(a,b){wO(this);var c=!1;if(b){wO(this);if(!this.ra[b])throw Error("yf`"+b);this.wa[a][b]&&(c=!0,delete this.wa[a][b])}else delete this.wa[a];return c};f.call=function(a,b,c,d){wO(this);this.ha.call.apply(this.ha,arguments)};
f.Sa=function(){if(this.ha){for(var a in this.ra){var b=a;wO(this);if(this.ra[b]){this.ha.unregister(b);var c=void 0;for(c in this.wa)this.unregister(c,b);delete this.ra[b]}}this.ha.dispose();this.wa=this.ra=this.ha=null}v3e.Ea.Sa.call(this)};f.F5c=function(a,b,c){var d=this.wa;return!isNaN(b)&&d[b]&&d[b][a]?d[b][a].apply(null,Array.prototype.slice.call(arguments,2)):null};var w3e=function(a,b){y.call(this,"gadgetlog",a);this.ha=b};r(w3e,y);
var x3e=function(a){v.call(this);this.Oa=a;this.ha=new v3e;this.ra=new s3e(a);wd(this.ra,["$e","af"],this.Ga,!1,this);a=this.ra;var b=ok(a.Oa).Fb.Zk("$root/gadgets-config");b&&b.Gc.Nd("rpc_url")?t3e(a):a.Aa=wd(a.Fb.kc(),"$root/gadgets-config:rpc_url",a.PNc,!1,a)};r(x3e,v);x3e.prototype.wa=function(a,b,c){return new tO(a,b,c,this.ha,this.Oa)};x3e.prototype.Sa=function(){this.ha.dispose();this.ra.dispose()};
x3e.prototype.Ga=function(a){var b=this.ha,c=new q3e(this.ra);if(b.ha)for(var d in b.ra)throw Error("wf");b.ha=c;b.ra={};b.wa={};"$e"==a.type&&(t(N2e,this.ha.Uhc,this.ha),a=this.ha,a.Ca=!0,a.dispatchEvent("Ue"))};var y3e=function(a,b){WA.call(this,"gadgets-config",a);this.Gc=new uy(this);zy(this).listen(b,pz("gdi"),this.ha)};r(y3e,WA);y3e.prototype.get=function(){return this.Ld()?this.Gc:null};y3e.prototype.qb=function(a){return this.Gc.get(a)};y3e.prototype.Hb=function(a,b){this.Gc.set(a,b)};
y3e.prototype.ha=function(a){a=(new u3e(a.data)).getData();a=null!=a?E(a,2):null;this.Hb("rpc_url",a);aB(this)};var xO=function(a,b,c){K2e[a]=b;c&&(L2e[a]=c)},z3e=function(a,b){XJ.call(this,a,84,b)};r(z3e,XJ);z3e.prototype.Sk=function(){return!1};z3e.prototype.Sc=function(a){z3e.Ea.Sc.call(this,a);var b=new oe,c=0;if(this.ha)for(var d in this.ha){var e=this.ha[d];b.set("gadk_"+c,d);b.set("gadv_"+c,null!=e?Fd(e):"");c++}b.set("gadc",c);Ox(a,b,!0)}; z3e.prototype.fQb=function(a){if(this.ha){var b=a.get(),c;for(c in this.ha)b.eEa(c,this.ha[c]);a.Ca==b&&$A(a,void 0)}};fi(K.Ma(),"ga");
var A3e=function(a){lB.call(this,a,17)};r(A3e,lB);A3e.prototype.Sc=function(a){A3e.Ea.Sc.call(this,a);ul(a,"view","gdv");rl(a,"FAIL");a.zA=!1;se(Wf,"nogadgetcache")&&ul(a,"nogadgetcache","1");a.nj("Retrieving installed gadgets")};var B3e=function(a){this.Oa=a;this.Eb=0};B3e.prototype.ha=0;B3e.prototype.load=function(){if(0==this.Eb){this.Eb=1;var a=new A3e(this.Oa);a.Eg(this);a.send()}};B3e.prototype.ik=function(a){this.ha++;a.xj()?(this.Eb=0,5>this.ha&&(this.XD=Wh("Of",this.ra,3E4,this))):this.Eb=2};B3e.prototype.ra=function(){this.XD=null;this.load()};
var C3e=function(a,b){WA.call(this,"gmailgadgets",a,void 0);zy(this).listen(b,pz("gdi"),this.ha)};r(C3e,gB);f=C3e.prototype;f.NFb=function(a){this.Pb(a.jw()).set(a)};f.dnb=function(a){var b=null;RFd(this.getChildren(),function(c){return c.get().getUrl()==a&&(b=c)});return b};f.Lnb=function(){return D3e(this,!1)};f.alc=function(){return D3e(this,!0)};f.Tia=function(a){return RFd(this.getChildren(),function(b){return Swe(b.get(),a)},this)};
var D3e=function(a,b){var c=[];t(a.getChildren().zc(),function(a){a=a.get();!a.isInstalled()||b&&!a.bya()||vb(c,a)});return c};C3e.prototype.ha=function(a){a=(new u3e(a.data)).getData();if(null!=a){a=bh(a,axe,1);vy(this.Kd());try{for(var b=0;b<a.length;b++)this.NFb(fxe(new dxe,a[b]).create())}finally{wy(this.Kd())}aB(this)}};
var F3e=function(a){D(this,a,"",-1,E3e,null)};r(F3e,C);var E3e=[1];F3e.prototype.Ug=function(a,b){return eh(this,1,a,G3e,b)};var G3e=function(a){D(this,a,0,-1,null,null)};r(G3e,C);G3e.prototype.getAuthToken=function(){return E(this,2)};G3e.prototype.gEa=function(a){G(this,2,a)};
var H3e=function(a){lB.call(this,a,17)};r(H3e,lB);H3e.prototype.ha=null;H3e.prototype.Sc=function(a){H3e.Ea.Sc.call(this,a);ul(a,"view","gdt");ul(a,"auto","1");rl(a,"FAIL");a.zA=!1;a.nj("Refreshing gadget tokens.")};H3e.prototype.Rl=function(a,b,c){if("gdt"==b&&(a=bh(new F3e(c),G3e,1))&&0<a.length)for(this.ha={},b=0;b<a.length;b++)c=a[b],this.ha[E(c,1)]=c.getAuthToken()};
var I3e=function(a){v.call(this);this.Oa=a;this.Fb=ok(a).Fb;wd(this.Fb.kc(),"$root/gadgets/...",this.Pw,!1,this);wd(this.Fb.kc(),"$root/gmailgadgets/...",this.Pw,!1,this);this.Pw(null)};r(I3e,v);f=I3e.prototype;f.hma=!1;f.Jq=null;f.Gb=function(){return this.hma};f.Sa=function(){I3e.Ea.Sa.call(this);Ad(this.Fb.kc(),"$root/gadgets/...",this.Pw,!1,this);Ad(this.Fb.kc(),"$root/gmailgadgets/...",this.Pw,!1,this);this.hma=!1;J3e(this)};
f.iJb=function(){J3e(this);this.Jq=new H3e(this.Oa);this.Jq.Eg(this);this.Jq.send()};f.ik=function(a){if(a==this.Jq){if(a.xj()||!a.ha)a=12E4+Tb(12E4);else{vy(this.Fb);try{var b=a.ha,c;for(c in b){var d=this.Fb.Zk("$root/gadgets/"+c,!0);d||(d=this.Fb.Zk("$root/gmailgadgets/"+c,!0));if(d){var e=d.get(),g=encodeURIComponent(b[c]);e.ra!=g&&(e.ra=g,e.dispatchEvent(new Ywe(2)))}}}finally{wy(this.Fb)}a=24E5+Tb(6E5)}this.Jq=null;this.hma&&(Xh(this.Rc),this.Rc=Wh("Pf",this.iJb,a,this))}};
var K3e=function(a){var b=[],c=a.Fb.Zk("$root/gadgets");c&&Eb(b,c.Qb());(a=a.Fb.Zk("$root/gmailgadgets"))&&Eb(b,a.Lnb());return nb(b,function(a){return!!a.gia()})};I3e.prototype.Pw=function(){var a=K3e(this);this.hma!=a&&((this.hma=a)?(a=24E5+Tb(6E5),Xh(this.Rc),this.Rc=Wh("Pf",this.iJb,a,this)):J3e(this))};var J3e=function(a){a.Jq&&(a.Jq.abort(),a.Jq=null);Xh(a.Rc)};
var L3e=function(){v.call(this)};r(L3e,Yh);$h(ai(K.Ma(),"ga"),L3e);L3e.prototype.Zc=function(a){var b=ok(a).Fb,c=Al(a).Bj();new C3e(b,c);new y3e(b,c);this.ha=new I3e(a);(new B3e(a)).load();rj(a,Mk,M3e)};L3e.prototype.Sa=function(){this.ha.dispose();this.ha=null};var M3e=function(a){return new x3e(a)};
var N3e=function(a,b){uO.call(this,a,b)};r(N3e,uO);xO("close_popup",N3e);M2e.close_popup="picker";N3e.prototype.execute=function(){this.Pl().dispatchEvent("Ze");return null};var yO=function(a,b){uO.call(this,a,b)};r(yO,uO);yO.prototype.execute=function(a){a&&!this.ra?this.wa&&this.eventType&&(this.ra=wd(this.wa,this.eventType,this.Aa,!1,this)):!a&&this.ra&&(Bd(this.ra),delete this.ra);return null};yO.prototype.Sa=function(){yO.Ea.Sa.call(this);this.ra&&(Bd(this.ra),delete this.ra)};yO.prototype.ha=function(){return null};yO.prototype.Aa=function(a){var b=[this.xr,null];(a=this.ha(a))&&Eb(b,a);this.Ga.call.apply(this.Ga,b)};
var O3e=function(a,b){uO.call(this,a,b);this.wa=a;this.eventType="df";this.xr="gm-handle-form-details-change"};r(O3e,yO);xO("gm-register-compose-details-change",O3e);M2e["gm-register-compose-details-change"]="picker";O3e.prototype.ha=function(a){return a.Edd};
var P3e=function(a,b){uO.call(this,a,b);this.ha={}};r(P3e,uO);var Q3e=new Zc([205]);xO("gm-register-event-notification",P3e);sO["gm-register-event-notification"]="card";
P3e.prototype.execute=function(a,b){var c=Gb(arguments,1);if(nb(c,function(a){return!Q3e.contains(a)},this))return!1;for(var d=0;d<c.length;d++){var e=c[d];if(a)if(this.ha[e])this.ha[e].count++;else{var g=m(this.ra,this,e);this.ha[e]={callback:g,count:1};zA().subscribe(e,g)}else(g=this.ha[e])&&0==--g.count&&(k3e(zA(),e,g.callback),delete this.ha[e])}return!0};P3e.prototype.Sa=function(){P3e.Ea.Sa.call(this);for(var a in this.ha)k3e(zA(),a,this.ha[a].callback);delete this.ha}; P3e.prototype.ra=function(a,b){var c={eventKey:a,eventData:Gb(arguments,1)};this.Pl().call("gm-handle-event-notification",null,c)};
var R3e=function(a,b){uO.call(this,a,b)};r(R3e,uO);xO("gm-request-feature-info",R3e,"google.sharebox");M2e["gm-request-feature-info"]="card";R3e.prototype.execute=function(a){this.Jh||(this.Jh=hl(this.La()).Pc());var b=[];if(a&&wa(a))for(var c=0;c<a.length;c++)b.push(this.Jh.Gb(a[c]));return b};
var S3e=function(a,b){uO.call(this,a,b)};r(S3e,uO);xO("gm-request-activeview",S3e);sO["gm-request-activeview"]="card";S3e.prototype.execute=function(a){var b={},c=zB(this.La()).yf();if(c){var d=c.Gg();b.view=d;var e=c.Ec();null!=e&&sb(a,"search")&&(b.search=e.Lg());"cv"==d&&(sb(a,"threadId")&&(b.threadId=c.hd()),sb(a,"subject")&&(b.subject=c.yB()))}return b};
var T3e=function(a,b){uO.call(this,a,b)};r(T3e,uO);xO("google.debug.log",T3e,"google.debug");T3e.prototype.execute=function(a){var b=this.Pl();b.dispatchEvent(new w3e(b,a));return null};var U3e=function(a,b){uO.call(this,a,b);this.Ae=zB(b)};r(U3e,uO);xO("gm-navigate",U3e);sO["gm-navigate"]="card";U3e.prototype.execute=function(a,b){this.Pl();if("cv"==a){var c=b.tid;this.Ae.navigate({view:DC,Tl:c,oj:c})}else if("tl"==a)this.Ae.navigate({view:CC,search:b.search});else throw Error("Qf`"+a);return null};
var V3e=function(a,b){uO.call(this,a,b);this.Ae=zB(b)};r(V3e,uO);xO("requestNavigateTo",V3e,["views","maximize"]);sO.requestNavigateTo="card";V3e.prototype.execute=function(a,b){var c=this.Pl();"canvas"==a&&this.Ae.navigate({view:POd,qua:c.ha.jw(),params:b,Sf:GNd});return null};
var W3e=function(a,b){uO.call(this,a,b);if("undefined"==typeof a.MFb)throw Error("Rf");};r(W3e,uO);xO("request_size",W3e);M2e.request_size="picker";W3e.prototype.execute=function(a){var b=parseInt(a.height,10);a=parseInt(a.width,10);this.Pl().MFb(b,a);return null};
var X3e=function(a,b){uO.call(this,a,b);if("undefined"==typeof a.N_a)throw Error("Sf");};r(X3e,uO);xO("resize_iframe",X3e,"dynamic-height");X3e.prototype.execute=function(a){this.Pl().N_a(a);return null};var Y3e=function(a,b){uO.call(this,a,b)};r(Y3e,uO);xO("gm-setdirty",Y3e);M2e["gm-setdirty"]="picker";Y3e.prototype.execute=function(){this.Pl().dispatchEvent("change");return null};var Z3e=function(a,b){uO.call(this,a,b)};r(Z3e,uO);xO("set_pref",Z3e,"setprefs");Z3e.prototype.execute=function(a,b,c){a=b;this.ha||(this.ha={});Xh(this.Rc);a=Pa(Na(a));this.ha[a]=c;this.Rc=Wh("Tf",this.ra,750,this);return null};Z3e.prototype.Sa=function(){Xh(this.Rc);try{this.ha&&this.ra()}catch(a){}Z3e.Ea.Sa.call(this)};Z3e.prototype.ra=function(){var a=new z3e(this.La(),18),b=this.Pl().ha.getUrl();a.wa=b;a.ha=this.ha;a.ra=!0;a.send();this.ha=null};
var $3e=function(a,b){uO.call(this,a,b);if("undefined"==typeof a.setTitle)throw Error("Uf");};r($3e,uO);xO("set_title",$3e,"settitle");sO.set_title="card";$3e.prototype.execute=function(a){this.Pl().setTitle(a);return null};var a4e=function(a,b){uO.call(this,a,b);if("undefined"==typeof a.Rb)throw Error("Vf");};r(a4e,uO);xO("gm-share-standalone",a4e,"google.sharebox");M2e["gm-share-standalone"]="card";a4e.prototype.execute=function(a){this.Pl().Rb(a);return null};var b4e=function(a,b){uO.call(this,a,b)};r(b4e,uO);xO("gm-showapplicationalert",b4e);sO["gm-showapplicationalert"]="card";b4e.prototype.execute=function(a){a=Jl(a);Kl(this.La()).showNotification(a);return new String(Ea(a))};var c4e=function(a){for(var b=""+(a.title?"<b>"+M(a.title)+"</b><br>"+(a.lFa?"<em>"+M(a.lFa)+"</em><br>":""):"")+M(a.description)+"&nbsp; "+(a.title?'<br><div class="na">':""),c=a.Ek,d=c.length,e=0;e<d;e++)var g=c[e],b=b+('<span class="ata-asJ" index="'+O(g.index)+'">'+M(g.text)+"</span>&nbsp; ");b+='<span class="ata-asJ" index="-1">Close</span>'+(a.title?"</div>":"");return L(b)};
var d4e=function(a,b){uO.call(this,a,b);this.ha=[]};r(d4e,uO);xO("gm-notification",d4e);sO["gm-notification"]="card";var e4e=["http","https","ftp"];d4e.prototype.execute=function(a){var b=this.La().Nc(Gia);b&&this.ha.push(Ude(b,f4e(this,a),9E5,m(this.ra,this,a.actions)));return null};d4e.prototype.Sa=function(){d4e.Ea.Sa.call(this);var a=this.La().Nc(Gia);if(a)for(;0<this.ha.length;)Wde(a,this.ha.pop())};
var f4e=function(a,b){var c=[];b.actions&&t(b.actions,function(a,b){var d=a.action.match(/^([a-z]+):/);d&&sb(e4e,d[1])&&c.push({index:b,text:a.text})},a);return c4e({title:b.title?Za(b.title,75):null,lFa:b.subtitle?Za(b.subtitle,150):null,description:b.description?Za(b.description,300):null,Ek:c})};d4e.prototype.ra=function(a,b,c){b=b.target.getAttribute("index");if(a[b])kE(jE(this.La()),a[b].action,null,!0);else if(-1!=b)return!1;Ab(this.ha,c);return!0};
var g4e=function(a,b){uO.call(this,a,b);this.wa=jD(b);this.eventType="Bb";this.xr="gm-handle-skinupdate"};r(g4e,yO);xO("gm-register-skinupdate",g4e,"skins");g4e.prototype.ha=function(){return Z2e(this.Pl())};var h4e=function(a,b){uO.call(this,a,b);this.wa=cE(b);this.eventType="ec";this.xr="gm-handle-viewchange"};r(h4e,yO);xO("gm-register-viewchange",h4e);sO["gm-register-viewchange"]="card";h4e.prototype.ha=function(){return cE(this.La()).yf().getInfo()};var i4e=function(a,b){uO.call(this,a,b);if("undefined"==typeof a.Cb)throw Error("Wf");};r(i4e,uO);xO("gadget-loaded",i4e,"google.waitforload");i4e.prototype.execute=function(){this.Pl().Cb();return null};

di(K.Ma(),"ga");gi(K.Ma(),"ga");
}catch(e){_DumpException(e)}
try{
fi(K.Ma(),"sy443");var zO=function(a,b,c,d,e,g,h,l,n,p,w,z,F){this.Uc=a;this.wa=b;this.ra=c;this.FCb=d;this.JMb=n||null;this.yVc=e||null;this.uEc=g||!1;this.Aa=h||!1;this.ha=0;this.AAc=l||!1;this.dAc=w||!1;this.nya=!1;this.pNb=p||!1;this.Ga=z||!1;this.zVc=F||null};f=zO.prototype;f.Ny=function(){return this.Uc};f.dvb=Qb;f.rB=function(){return this.wa};f.doa=function(){return this.Ga};f.Gha=function(){return this.ra};

di(K.Ma(),"sy443");gi(K.Ma(),"sy443");
}catch(e){_DumpException(e)}
try{
var j4e=function(a){return a.isInstalled()&&nb(a.ha,function(a){return"picker"==a.ha})};fi(K.Ma(),"gp");var k4e=function(a){v.call(this);this.Oa=a;this.Fb=ok(a).Fb};r(k4e,v);f=k4e.prototype;f.Zc=function(){wd(this.Fb.kc(),"$root/gmailgadgets/...",this.Pw,!1,this);wd(this.Fb.kc(),"$root/gadgets/...",this.Pw,!1,this);var a=[],b=this.Fb.Zk("$root/gadgets");b&&Eb(a,b.getChildren().zc());(b=this.Fb.Zk("$root/gmailgadgets"))&&Eb(a,b.getChildren().zc());for(b=0;b<a.length;b++)this.vSa(a[b])};
f.Sa=function(){Ad(this.Fb.kc(),"$root/gmailgadgets/...",this.Pw,!1,this);Ad(this.Fb.kc(),"$root/gadgets/...",this.Pw,!1,this);this.Fb=null};f.La=function(){return this.Oa};f.vSa=function(){};f.M_a=function(){};f.Pw=function(a){var b=a.Zw;a=a.kE;mj++;try{for(var c=0;c<b.length;c++){var d=a[b[c]];this.M_a(this.Fb.Zk(b[c]),d)}}finally{nj()}};
var l4e=function(a){k4e.call(this,a)};r(l4e,k4e);l4e.prototype.vSa=function(a){m4e(this,a)};l4e.prototype.M_a=function(a,b){(!b||b&1)&&m4e(this,a)};var m4e=function(a,b){var c=b.get();c&&c.Uf()&&El(a.La(),Gk,!0).addCallback(m(a.ha,a,c))};l4e.prototype.ha=function(a,b){var c=b.ha,d=j4e(a);d&&!c[a.jw()]?(c=!0,hl(this.La()).Pc().Gb(6354)&&(c=!1),b.ra(new zO(a.jw(),a.getTitle()||"",null,d3e,a,!0,!1,!0,null,!1,c,!1,cza))):c[a.jw()]&&!d&&b.wa(a.jw())};
var n4e=function(){v.call(this)};r(n4e,Yh);$h(ai(K.Ma(),"gp"),n4e);n4e.prototype.Zc=function(a){rj(a,voa,o4e)};var o4e=function(a){return new l4e(a)};
di(K.Ma(),"gp");gi(K.Ma(),"gp");
}catch(e){_DumpException(e)}
try{
fi(K.Ma(),"sy444");var p4e=function(a,b,c){Pi.call(this,b);this.ha=a;this.Yh=b.get(Mk).wa(this.ha,c,this.Ba());this.Yh.Mf(this)};r(p4e,Pi);f=p4e.prototype;f.WBa=!0;f.$b=function(){return this.WBa};f.setVisible=function(a){!this.WBa&&a&&q4e(this);this.WBa=a};f.Sa=function(){this.Yh.dispose();p4e.Ea.Sa.call(this)};f.Ua=function(){p4e.Ea.Ua.call(this);this.WBa&&q4e(this)};f.reload=function(){this.Yh.reload()};var q4e=function(a){a.Yh.V$()||(a.Yh.render(),Eh(a.Ba(),a.Yh.Jd()),a.dispatchEvent("sc"))};

di(K.Ma(),"sy444");gi(K.Ma(),"sy444");
}catch(e){_DumpException(e)}
try{
var r4e=function(a){return a.isInstalled()&&nb(a.ha,function(a){a=a.ha;return"default"==a||"nav"==a||"home"==a})};fi(K.Ma(),"gn");var s4e=function(a,b){var c=a.get();dF.call(this,c.jw(),b);this.Jb=eo(b).Ka();this.Fb=ok(b).Fb;this.wa=a;bB(a);var d;a:{d=!1;for(var e=c.ha,g=0;g<e.length;g++){var h=e[g].ha;if("nav"==h){d="nav";break a}"home"==h&&(d=!0)}d=d?"home":"default"}this.ha=new p4e(c,b,d);this.ha.setVisible(this.Co());this.tb(this.ha);(c=c.getTitle())&&this.setTitle(c);this.getHandler().listen(this.ha,"Ve",this.HPc);this.getHandler().listen(this.Ue(),"qc",this.JPc);this.getHandler().listen(this.Fb.kc(),a.wi(),this.Pw)};
r(s4e,dF);f=s4e.prototype;f.Ua=function(){s4e.Ea.Ua.call(this);var a=this.wa.get();this.Ue().Ia&&a.uda("maximize")&&this.Ue().Ia(!0)};f.dispose=function(){s4e.Ea.dispose.call(this);this.ra&&(this.ra.dispose(),this.ra=null);cB(this.wa);this.wa=null};f.y8=function(a){s4e.Ea.y8.call(this,a);this.ha.setVisible(this.Co())};f.remove=function(){BG(this.getContext()).Xl("gadget").fna(this);this.dispose()};f.HPc=function(a){this.setTitle(a.title)}; f.JPc=function(){var a=this.ha.Yh;a.Ae.navigate({view:POd,qua:a.ha.jw(),params:void 0,Sf:GNd})};f.Pw=function(){r4e(this.wa.get())||this.remove()};
var t4e=function(a){k4e.call(this,a);this.ha=BG(a)};r(t4e,k4e);t4e.prototype.vSa=function(a){u4e(this,a)};t4e.prototype.M_a=function(a,b){(!b||b&1)&&u4e(this,a)};var u4e=function(a,b){var c=b.nq(),d=b.get();d&&d.Uf()&&r4e(d)&&null==l6d(a.ha,c)&&(c=new s4e(b,a.La()),j6d(a.ha,c,30,"gadget"))};
var v4e=function(){v.call(this)};r(v4e,Yh);$h(ai(K.Ma(),"gn"),v4e);v4e.prototype.Zc=function(a){rj(a,uoa,w4e)};var w4e=function(a){return new t4e(a)};
di(K.Ma(),"gn");gi(K.Ma(),"gn");
}catch(e){_DumpException(e)}
// Google Inc.
