window.CVM={version:"2.0.11"};(function(u){var k="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZnl5eczMzJ+fn////7Ozs4yMjGtra+Li4nFxcaampgAAAAAAAAAAAAAAAAAAACH5BAEHAAQALAAAAAAgACAAAASjkMhJq704681JKV04JYkYDgAwmBuSpgibGS9gyJdQpwJeBTtAwDcpBFMgYuJ1WKZKPlRqSACmVjLXK2l8xVi0raSbupl0Ne6uJ7K+zOEXtUOWS9zijrNGxT87UjtURyothAASh18YcUGJhGY5hzZ7R2wWfpNHcxR1lmiHSRSVQQoSCpNQE4GQEo1HWARamgcHmjCut7pvBKC7ugKZv4ecRMYsEQA7";var e="data:image/gif;base64,R0lGODlhIAAgAMQAAGZmZnt7e8TExK2treXl5dXV1Wtra4qKivj4+L29vd7e3pGRke/v78zMzLW1tYSEhHR0dJmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAgALAAAAAAgACAAAAXUICKOZGmeKMoUguMIBZPOY3IAeI4fCX0KEJ0wBxH4RouhMrfwEQLLKCBAmEGl0UAqmRUQBsumSYBtjG5KYykoVYwiS0gpgQUsZAVp71zHsaMHIwx9hAAyCHmACQoEDn9RBSJkSweMI5NSag51VSJ1DiKbWJ0In5JYBiOJmSKrYSNgWJEIg3ojV1KHCGhLnbVSgTVRciINdXsjjzpaxVjEJJhDbiIKCrhCaiVcQwEJBAoJD68o14VTM0/mOFQ+231iR0B1RUdzvEI89SosLjC6+gBnhAAAOw==";var n="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZpOTk93d3Wtra8zMzLW1tXNzc3p6eu/v78XFxYODg9bW1qWlpejo6Pj4+IqKiiH5BAEHAA4ALAAAAAAgACAAAATr0MlJq7046827p4QBGMTHicBoVohApTAlIN4yjE1TwGmRH4DBooMa3XipQXFA0wiQ0ChguAHyFCUJQYE8dBqogY8BPDB0R0Pje0zYkMJEcs3ZAQKII7zx6GlCPAsMKQcuC1YMBDwkF0UpDih0DgspBghIBhdQDjcDEgEOl0EOmxaOAJApLlqVojCZFoeBgwAHQ4AAiTy2GnZ4p619AAUdeSlupwYLckFNG2BJBQgMIgYMCAVpkhpWMFg0CFuYHE9S5lMnr3o8SjBM5DcHDdhI0g1AQh+rEkgyziupKgHMsKAalYEIEypcyHBDBAA7";var w="data:image/gif;base64,R0lGODlhIAAgANUAAPX19fT09PLy8vDw8O7u7uzs7OLi4tnZ2c/Pz83NzczMzMXFxby8vLKysqmpqZ+fn5iYmJWVlZKSkoyMjICAgHx8fHl5eXZ2dnR0dHBwcG9vb21tbWtra2pqamhoaGdnZ2ZmZkxMTEpKSv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHACMALAAAAAAgACAAAAauwJFwSCwaj8ikcln5OJ/QqFRKnFqv0OpnyR05tV3mdvgNC87GslCtFbnf7/R4PTfLwfYjm41I+P+AgYB7cyAZG4iJiouIdHh5RYSQd2R1Sg0RDwwAkXV8R5iGoguPXpZGDKKqIAeVpXqrqq6zSbGyjrSgtqO4vbq7rL5Ylbumhm0eycoSQ6GxfYqQD8+TqNMTDgXV23nY0A3cyMHhdBqG4OSmBgvj5BEGQgvo6WFBADs=";var b=null,l=false,p=[];u.debugLogging=true;u.markPageLoaded=function(){l=true};u.launchRDP=function(I,F){var H=800,C=600,G=24;if(F!=undefined){var E=F.split("x");H=parseInt(E[0]);C=parseInt(E[1]);if(E.length>2){G=parseInt(E[2])}}var D=window.open("http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#"+I+","+H+","+C,"WebRDPClient","width="+H+",height="+(C+100));D.moveTo((screen.width-H)/2,(screen.height-(C+100))/2);setTimeout(function(){D.focus()},100);D.focus();return D};u.startCVMWebAPI=function(F,E,C){var D=function(){var G=new u.WebAPIPlugin();G.connect(function(H){if(H){F(G)}else{var I=document.createElement("iframe");I.src="http://cernvm.cern.ch/releases/webapi/install";I.width="100%";I.height=400;I.frameBorder=0;c.createFramedWindow({body:I,icon:n,disposable:false});var J=function(){G=new u.WebAPIPlugin();G.connect(function(K){if(K){F(G);c.hideInteraction()}else{setTimeout(function(){J()},1000)}},false)};J()}})};if(!l){p.push(D)}else{D()}};var m=0;var d=1;var r="ws://127.0.0.1:5624",j="cernvm-webapi://launch";var v=1,g=2,i=4,y=8,o=16;var f=1,A=2,B=256;var q=1;function z(D){var C=["missing","available","poweroff","saved","paused","running"];if((D<0)||(D>=C.length)){return"unknown"}return C[D]}function h(H,G){var F=H.split("."),D=F[2]+F[1]*100+F[0]*10000,E=G.split("."),C=E[2]+E[1]*100+E[0]*10000;return D-C}var a="cernvm-webapi-launcher-"+(Math.random().toString().substr(2));u.EventDispatcher=function(C){this.events={}};u.EventDispatcher.prototype.__fire=function(D,C){if(u.debugLogging){console.log("Firing",D,"(",C,")")}if(this.events[D]==undefined){return}var F=this.events[D];for(var E=0;E<F.length;E++){F[E].apply(this,C)}};u.EventDispatcher.prototype.addEventListener=function(C,D){if(this.events[C]==undefined){this.events[C]=[]}this.events[C].push(D)};u.EventDispatcher.prototype.removeEventListener=function(C,E){if(this.events[C]==undefined){return}var D=this.events[C].indexOf(E);if(D<0){return}this.events.splice(D,1)};var t=function(D){var C=0;if(D.use64bit){C|=v}if(D.useBootDisk){C|=g}if(D.useGuestAdditions){C|=i}if(D.useFloppyIO){C|=y}if(D.headful){C|=o}return C};var s=function(E){var C=function(F){E.__config.flags=F;E.setAsync("flags",F)},D=function(){return E.__config.flags};Object.defineProperties(this,{value:{get:function(){return D()},set:function(F){C(F)}},use64bit:{get:function(){return((D()&v)!=0)},set:function(F){if(F){C(D()|v)}else{C(D()&~v)}}},useBootDisk:{get:function(){return((D()&g)!=0)},set:function(F){if(F){C(D()|g)}else{C(D()&~g)}}},useGuestAdditions:{get:function(){return((D()&i)!=0)},set:function(F){if(F){C(D()|i)}else{C(D()&~i)}}},useFloppyIO:{get:function(){return((D()&y)!=0)},set:function(F){if(F){C(D()|y)}else{C(D()&~y)}}},headful:{get:function(){return((D()&o)!=0)},set:function(F){if(F){C(D()|o)}else{C(D()&~o)}}}})};u.ProgressFeedback=function(){};u.Socket=function(){u.EventDispatcher.call(this);this.interaction=new c(this);this.connecting=false;this.connected=false;this.socket=null;this.lastID=0;this.responseCallbacks={};this.authToken="";if(window.location.hash){this.authToken=window.location.hash.substr(1)}};u.Socket.prototype=Object.create(u.EventDispatcher.prototype);u.Socket.prototype.__reheat=function(C){};u.Socket.prototype.__handleClose=function(){this.__fire("disconnected",[]);c.hideInteraction()};u.Socket.prototype.__handleOpen=function(C){this.__fire("connected",C.version)};u.Socket.prototype.__handleData=function(D){var E=JSON.parse(D);if(E.id){var C=this.responseCallbacks[E.id];if(C!=undefined){C(E)}}else{if(E.type=="event"){var D=E.data;if(E.name=="interact"){this.interaction.handleInteractionEvent(E.data)}else{this.__fire(E.name,E.data)}}}};u.Socket.prototype.send=function(E,F,H,G){var J=this;var I=null;var K="a-"+(++this.lastID);var C={type:"action",name:E,id:K,data:F||{}};if(typeof(H)=="function"){if(G!==0){I=setTimeout(function(){delete J.responseCallbacks[K];H(null,"Response timeout")},G||10000)}this.responseCallbacks[K]=function(L){if(I!=null){clearTimeout(I)}if(L.type=="result"){delete J.responseCallbacks[K];H(L.data)}}}else{if(typeof(H)=="object"){var D=function(L){if(!L){return""}return"on"+L[0].toUpperCase()+L.substr(1)};if(G!==0){I=setTimeout(function(){delete J.responseCallbacks[K];if(H.onError){H.onError("Response timeout")}},G||10000)}this.responseCallbacks[K]=function(M){if(I!=null){clearTimeout(I)}if((M.name=="succeed")||(M.name=="failed")){delete J.responseCallbacks[K]}var L=D(M.name);if(H[L]){H[L].apply(J,M.data||[])}}}}this.socket.send(JSON.stringify(C))};u.Socket.prototype.close=function(){if(!this.connected){return}this.socket.close();this.connected=false;this.__handleClose()};u.Socket.prototype.connect=function(C,D){var K=this;if(this.connected){return}if(D==undefined){D=false}if(this.connecting){return}this.connecting=true;var J=function(L,O){try{if(!O){O=500}var N=false,Q=setTimeout(function(){N=true;L(false)},O);var M=new WebSocket(r);M.onerror=function(R){if(N){return}clearTimeout(Q);if(!K.connecting){return}M.close();L(false)};M.onopen=function(R){if(N){return}clearTimeout(Q);if(!K.connecting){return}L(true,M)}}catch(P){console.warn("[socket] Error setting up socket! ",P);if(N){return}clearTimeout(Q);if(!K.connecting){return}M.close();L(false)}};var F=function(P,R,U,M){var N=new Date().getTime();if(!M){M=N}if(!U){U=500}var L=R-(N-M);var O=false,S=setTimeout(function(){O=true;P(false)},L);var T=function(W,V){if(O){return}if(W){clearTimeout(S);P(true,V)}else{if(L<U){return}clearTimeout(S);setTimeout(function(){F(P,R,U,M)},U)}};var Q=500;if(L<Q){Q=L}J(T,Q)};var E=function(L,M){K.connecting=false;K.connected=true;K.socket=L;K.socket.onclose=function(){console.warn("Socket disconnected");c.hideInteraction();K.connecting=true;F(function(O,N){if(!O){console.error("Connection with CernVM WebAPI interrupted");K.__handleClose()}else{E(N,true)}},2000)};K.socket.onmessage=function(N){K.__handleData(N.data)};K.send("handshake",{version:u.version,auth:K.authToken},function(P,O,N){console.info("Successful handshake with CernVM WebAPI v"+P.version);K.version=P.version;if(h(u.version,K.version)>0){c.alertUpgrade("You are using an old version of CernVM WebAPI. Click here to upgrade to <strong>"+u.version+"</strong>.")}K.__handleOpen(P);if(M){K.__reheat(L)}});if(C){C(true)}};var H=function(L){console.error("Unable to contact CernVM WebAPI");if(!K.connecting){return}K.connecting=false;K.connected=false;if(C){C(false)}};var G=function(M,L){if(!M){H()}else{E(L)}};var I=function(N,L,P){var O=1,M=function(){console.log("[socket] Probe try");J(function(R,Q){if(R){P(R,Q);return}else{if(++O>L){console.log("[socket] Ran out of retries");P(false);return}else{console.log("[socket] Scheduling retry in 100ms");setTimeout(M,100)}}},N)};console.log("[socket] Trying socket probe with ",L," retries");M()};console.log("[socket] Starting probe with 4 retries");I(500,4,function(M,L){if(M){console.log("[socket] Got socket");E(L)}else{if(D){console.log("[socket] Auto-launching");var N=document.getElementById(a);if(!N){N=document.createElement("iframe");N.style.width="1";N.style.height="1";N.style.position="absolute";N.style.left="-1000px";N.style.top="-1000px";N.id=a;document.body.appendChild(N)}var N=document.getElementById(a);N.src=j;F(G,5000)}else{H()}}})};var x=null;var c=u.UserInteraction=function(C){var D=this;this.socket=C;this.onResize=null;window.addEventListener("resize",function(){if(D.onResize){D.onResize()}})};c.hideScreen=function(D){try{document.body.removeChild(D)}catch(C){}};c.hideInteraction=function(){if(c.activeScreen!=null){try{document.body.removeChild(c.activeScreen)}catch(C){}c.activeScreen=null}};c.createButton=function(F,G){var D=document.createElement("button");D.innerHTML=F;D.style.display="inline-block";D.style.marginBottom="0";D.style.textAlign="center";D.style.verticalAlign="middle";D.style.borderStyle="solid";D.style.borderWidth="1px";D.style.borderRadius=D.style.webkitBorderRadius=D.style.mozBorderRadius="4px";D.style.userSelect=D.style.webkitUserSelect=D.style.mozUserSelect=D.style.msUserSelect="none";D.style.margin="5px";D.style.padding="6px 12px";D.style.cursor="pointer";var C=function(H,L){var I=parseInt(H.slice(1),16),N=Math.round(2.55*L),K=(I>>16)+N,J=(I>>8&255)+N,M=(I&255)+N;return"#"+(16777216+(K<255?K<1?0:K:255)*65536+(J<255?J<1?0:J:255)*256+(M<255?M<1?0:M:255)).toString(16).slice(1)},E=function(L){var I=parseInt(L.slice(1),16),K=(I>>16),J=(I>>8&255),H=(I&255),M=(K*299+J*587+H*114)/1000;return(M>=128)?"black":"white"};D.style.backgroundColor=G;D.style.borderColor=C(G,-20);D.onmouseover=function(){D.style.backgroundColor=C(G,-10)};D.onmouseout=function(){D.style.backgroundColor=G};D.style.color=E(G);return D};c.styleFrame=function(C){C.style.backgroundColor="#FCFCFC";C.style.border="solid 1px #E6E6E6";C.style.borderRadius=C.style.webkitBorderRadius=C.style.mozBorderRadius="5px";C.style.boxShadow=C.style.webkitBoxShadow=C.style.mozBoxShadow="1px 2px 4px 1px rgba(0,0,0,0.2)";C.style.padding="10px";C.style.fontFamily="Verdana, Geneva, sans-serif";C.style.fontSize="14px";C.style.color="#666"};c.createGrowlWindow=function(D){if(!D){D={}}var F=D.body||"",C=D.href||"",I=D.target||"",K=D.icon||false,G=D.onClick||false;var E=document.createElement("a"),J=document.createElement("img"),H=document.createElement("div");E.appendChild(J);J.style.position="absolute";J.style.left="6px";J.style.top="12px";J.src=K||k;E.appendChild(H);H.style.position="absolute";H.style.left="45px";H.style.top="8px";H.style.width="300px";H.style.height="42px";H.style.fontSize="14px";H.style.color="#333";H.innerHTML=F;E.style.position="absolute";E.style.display="block";E.style.top="10px";E.style.right="10px";E.style.zIndex=60000;E.style.width="350px";E.style.height="60px";E.style.backgroundImage=n;E.style.backgroundPosition="bottom left";E.style.textDecoration="none";E.href=C;E.target=I;c.styleFrame(E);E.onclick=function(){document.body.removeChild(E);if(G){G()}};document.body.appendChild(E);return E};c.createFramedWindow=function(E){if(!E){E={}}var H=E.body||"",G=E.header||false,Q=E.footer||false,O=E.icon||false,J=E.onClose||false,N=(E.disposable!=undefined)?E.disposable:true;var M=document.createElement("div"),L=document.createElement("div"),D=document.createElement("div"),I=document.createElement("div"),F=document.createElement("div");M.style.position="absolute";M.style.left="0";M.style.top="0";M.style.right="0";M.style.bottom="0";M.style.zIndex=60000;M.style.backgroundColor="rgba(255,255,255,0.5)";M.appendChild(L);L.style.marginLeft="auto";L.style.marginRight="auto";L.style.marginBottom=0;L.style.marginTop=0;c.styleFrame(L);L.style.width="70%";D.style.color="#333";D.style.marginBottom="8px";I.style.textAlign="center";I.style.color="#333";I.style.marginTop="8px";L.appendChild(D);if(G){if(typeof(G)=="string"){var K;if(O){K=document.createElement("img");K.src=O;K.style.verticalAlign="-8px";K.style.marginRight="6px"}else{K=document.createElement("span")}var C=document.createElement("span");C.innerHTML=G;C.style.fontSize="1.6em";C.style.marginBottom="8px";D.appendChild(K);D.appendChild(C)}else{D.appendChild(G)}}if(H){F.style.overflow="auto";F.appendChild(H)}L.appendChild(F);L.appendChild(I);if(Q){if(typeof(Q)=="string"){I.innerHTML=Q}else{I.appendChild(Q)}}var P=function(){var R=D.offsetHeight+I.offsetHeight+50;var T=window.innerHeight-R;F.style.maxHeight=T+"px";var S=(window.innerHeight-L.offsetHeight)/2;if(S<0){S=0}L.style.marginTop=S+"px"};M.onclick=function(){if(!N){return}if(J){J()}else{c.hideInteraction()}};L.onclick=function(R){R.stopPropagation()};c.hideInteraction();document.body.appendChild(M);c.activeScreen=M;P();this.onResize=P;return M};c.displayLicenseWindow=function(K,H,F,J,E){var G=document.createElement("div"),L=document.createElement("span"),D;L.innerHTML="&nbsp;";if(F){D=document.createElement("iframe"),D.src=H;D.width="100%";D.height=450;D.frameBorder=0}else{D=document.createElement("div");D.width="100%";D.style.height="450px";D.style.display="block";D.innerHTML=H.replace(/\n/g,"<br/>\n")}var C=c.createButton("Accept License","#E1E1E1");lnkCancel=c.createButton("Decline License","#FAFAFA");G.style.padding="6px";G.appendChild(C);G.appendChild(L);G.appendChild(lnkCancel);var I;I=c.createFramedWindow({body:D,header:K,footer:G,icon:w,onClose:function(){document.body.removeChild(I);if(E){E()}}});C.onclick=function(){document.body.removeChild(I);if(J){J()}};lnkCancel.onclick=function(){document.body.removeChild(I);if(E){E()}};return win};c.alertUpgrade=function(C,D){c.createGrowlWindow({body:C,icon:n,cbClick:D,target:"_blank",href:"http://cernvm.cern.ch/releases/webapi/install"})};c.confirm=function(H,C,J){var G=document.createElement("div"),I=document.createElement("div");G.innerHTML=C;G.style.width="100%";var F,E=c.createButton("Ok","#E1E1E1"),D=c.createButton("Cancel","#FAFAFA");E.onclick=function(){document.body.removeChild(F);J(true)};D.onclick=function(){document.body.removeChild(F);J(false)};I.appendChild(E);I.appendChild(D);F=c.createFramedWindow({body:G,header:H,footer:I,icon:e,onClose:function(){document.body.removeChild(F);J(false)}});return F};c.alert=function(G,C,I){var F=document.createElement("div"),H=document.createElement("div");F.innerHTML=C;F.style.width="100%";var E,D=c.createButton("Ok","#FAFAFA");D.onclick=function(){document.body.removeChild(E)};H.appendChild(D);E=c.createFramedWindow({body:F,header:G,footer:H,icon:k});return E};c.occupied=function(F,C){var E=document.createElement("div");E.innerHTML=C;E.style.width="100%";var D=c.createFramedWindow({body:E,header:F,icon:n,disposable:false});return D};c.confirmLicense=function(D,C,E){c.displayLicenseWindow(D,C,false,function(){E(true)},function(){E(false)})};c.confirmLicenseURL=function(D,C,E){c.displayLicenseWindow(D,C,true,function(){E(true)},function(){E(false)})};c.controlOccupied=function(C,D){if(C){if(!x){x=c.occupied("Installation in progress","<p>Pay attention on the the pop-up windows and follow the on-screen instructions.</p><p>When completed, please close any open installation window in order to continue.</p>")}}else{if(x){c.hideScreen(x);x=null}}};c.prototype.handleInteractionEvent=function(D){var C=this.socket;if(D[0]=="confirm"){c.confirm(D[1],D[2],function(E,F){if(E){C.send("interactionCallback",{result:f|(F?B:0)})}else{C.send("interactionCallback",{result:A|(F?B:0)})}})}else{if(D[0]=="alert"){c.alert(D[1],D[2],function(E){})}else{if(D[0]=="confirmLicense"){c.confirmLicense(D[1],D[2],function(E,F){if(E){C.send("interactionCallback",{result:f|(F?B:0)})}else{C.send("interactionCallback",{result:A|(F?B:0)})}})}else{if(D[0]=="confirmLicenseURL"){c.confirmLicenseURL(D[1],D[2],function(E,F){if(E){C.send("interactionCallback",{result:f|(F?B:0)})}else{C.send("interactionCallback",{result:A|(F?B:0)})}})}}}}};u.WebAPIPlugin=function(){u.Socket.call(this);this._sessions=[]};u.WebAPIPlugin.prototype=Object.create(u.Socket.prototype);u.WebAPIPlugin.prototype.__reheat=function(C){var D=this,F=false;this.responseCallbacks={};for(var E=0;E<this._sessions.length;E++){var G=this._sessions[E].ref,H=this._sessions[E].vmcp;if(G.__valid){this.send("requestSession",{vmcp:H},{onSucceed:function(J,I){console.log("Session ",I," reheated");G.session_id=I;D.responseCallbacks[I]=function(K){G.handleEvent(K)};setTimeout(function(){G.sync()},100)},onFailed:function(J,I){console.warn("Unable to reheat a saved session!");if(F){return}D.__handleClose();F=true},onLengthyTask:function(J,I){u.UserInteraction.controlOccupied(I,J)},onProgress:function(J,I){D.__fire("progress",[J,I])},onStarted:function(I){D.__fire("started",[I])},onCompleted:function(I){D.__fire("completed",[I])}})}}};u.WebAPIPlugin.prototype.stopService=function(){this.send("stopService")};u.WebAPIPlugin.prototype.requestSession=function(F,E,D){var C=this;this.send("requestSession",{vmcp:F},{onSucceed:function(I,G){var H=new u.WebAPISession(C,G,function(){if(E){E(H)}});C._sessions.push({vmcp:F,ref:H});C.responseCallbacks[G]=function(J){H.handleEvent(J)}},onFailed:function(H,G){console.error("Failed to request session! "+H);C.__fire("failed",[H]);if(D){D(H,G)}},onLengthyTask:function(H,G){u.UserInteraction.controlOccupied(G,H)},onProgress:function(H,G){C.__fire("progress",[H,G])},onStarted:function(G){C.__fire("started",[G])},onCompleted:function(G){C.__fire("completed",[G])}})};u.WebAPIPlugin.prototype.enumSessions=function(D){var C=this;if(!D){return}this.send("enumSessions",{},{onSucceed:function(E){D(E)},onFailed:function(F,E){D(null,F,E)}})};u.WebAPIPlugin.prototype.controlSession=function(D,E,F){var C=this;if(!F){return}this.send("controlSession",{session_id:D,action:E},{onSucceed:function(G){F(G)},onFailed:function(H,G){F(null,H,G)}})};u.WebAPISession=function(C,E,F){u.EventDispatcher.call(this);this.socket=C;this.session_id=E;this.__state=0;this.__apiState=false;this.__properties={};this.__config={};this.__valid=true;this.__lastRDPWindow=null;this.__initCallback=F;var D=undefined;Object.defineProperties(this,{state:{get:function(){if(!this.__valid){return D}return this.__state}},stateName:{get:function(){if(!this.__valid){return D}return z(this.__state)}},ip:{get:function(){if(!this.__valid){return D}return this.__config.ip}},memory:{get:function(){if(!this.__valid){return D}return this.__config.memory}},cpus:{get:function(){if(!this.__valid){return D}return this.__config.cpus}},disk:{get:function(){if(!this.__valid){return D}return this.__config.disk}},apiURL:{get:function(){if(!this.__valid){return D}return this.__config.apiURL}},apiAvailable:{get:function(){if(!this.__valid){return D}return this.__apiState}},rdpURL:{get:function(){if(!this.__valid){return D}return this.__config.rdpURL}},executionCap:{get:function(){if(!this.__valid){return D}return this.__config.executionCap},set:function(G){this.__config.executionCap=G;this.setAsync("executionCap",G)}},version:{get:function(){if(!this.__valid){return D}return this.__config.cernvmVersion},set:function(G){if(!this.__valid){return}this.__config.cernvmVersion=G;this.setAsync("cernvmVersion",G)}},"flavor ":{get:function(){if(!this.__valid){return D}return this.__config.cernvmFlavor},set:function(G){if(!this.__valid){return}this.__config.cernvmFlavor=G;this.setAsync("cernvmFlavor",G)}},diskURL:{get:function(){if(!this.__valid){return D}return this.__config.diskURL},set:function(G){if(!this.__valid){return}this.__config.diskURL=G;this.setAsync("diskURL",G)}},diskChecksum:{get:function(){if(!this.__valid){return D}return this.__config.diskChecksum},set:function(G){if(!this.__valid){return}this.__config.diskChecksum=G;this.setAsync("diskChecksum",G)}},flags:{get:function(){if(!this.__valid){return D}return new s(this)},set:function(G){if(typeof(G)=="number"){this.__config.flags=G}else{if(typeof(G)=="object"){this.__config.flags=t(G)}}}}})};u.WebAPISession.prototype=Object.create(u.EventDispatcher.prototype);u.WebAPISession.prototype.handleEvent=function(D){if(D.name=="stateVariables"){D=D.data;if(!D){return}else{if(D.length>=1){this.__config=D[0]||{}}if(D.length>=2){this.__properties=D[1]||{}}}if(this.__initCallback){this.__initCallback();this.__initCallback=null}return}else{if(D.name=="failure"){var C=D.data[0];if(C&q!=0){u.UserInteraction.alert("Virtualization Failure",'<p>The hypervisor was unable to use your hardware\'s virtualization capabilities. This happens either if you have an old hardware (more than 4 years old) or if the <strong>Virtualization Technology</strong> features is disabled from your <strong>BIOS</strong>.</p><p>There are various articles on the internet on how to enable this option from your BIOS. <a target="_blank" href="http://www.sysprobs.com/disable-enable-virtualization-technology-bios">You can read this article for example.</a></p>')}}else{if(D.name=="stateChanged"){this.__state=D.data[0]}else{if(D.name=="lengthyTask"){u.UserInteraction.controlOccupied(D.data[1],D.data[0])}else{if(D.name=="apiStateChanged"){this.__apiState=(D.data[0]==1)}else{if(D.name=="resolutionChanged"){if(this.__config.rdpURL!=undefined){var F=this.__config.rdpURL.split("@");this.__config.rdpURL=F[0]+"@"+D.data[0]+"x"+D.data[1]+"x"+D.data[2];if(this.__lastRDPWindow){try{this.__lastRDPWindow.resizeTo(parseInt(D.data[0]),parseInt(D.data[1]))}catch(E){}}}}}}}}}this.__fire(D.name,D.data)};u.WebAPISession.prototype.start=function(C){if(!this.__valid){return}this.socket.send("start",{session_id:this.session_id,parameters:C||{}})};u.WebAPISession.prototype.stop=function(){if(!this.__valid){return}this.socket.send("stop",{session_id:this.session_id})};u.WebAPISession.prototype.pause=function(){if(!this.__valid){return}this.socket.send("pause",{session_id:this.session_id})};u.WebAPISession.prototype.resume=function(){if(!this.__valid){return}this.socket.send("resume",{session_id:this.session_id})};u.WebAPISession.prototype.reset=function(){if(!this.__valid){return}this.socket.send("reset",{session_id:this.session_id})};u.WebAPISession.prototype.hibernate=function(){if(!this.__valid){return}this.socket.send("hibernate",{session_id:this.session_id})};u.WebAPISession.prototype.close=function(){this.socket.send("close",{session_id:this.session_id});this.__valid=false};u.WebAPISession.prototype.sync=function(){if(!this.__valid){return}this.socket.send("sync",{session_id:this.session_id})};u.WebAPISession.prototype.getAsync=function(D,C){if(!this.__valid){return}this.socket.send("get",{session_id:this.session_id,key:D},{onSucceed:function(E){if(C){C(E)}}})};u.WebAPISession.prototype.setAsync=function(E,D,C){if(!this.__valid){return}this.socket.send("set",{session_id:this.session_id,key:E,value:D},{onSucceed:function(){if(C){C()}}})};u.WebAPISession.prototype.getProperty=function(C){if(!this.__valid){return}if(!C){return""}if(this.__properties[C]==undefined){return""}return this.__properties[C]};u.WebAPISession.prototype.setProperty=function(C,D){if(!this.__valid){return}if(!C){return""}this.__properties[C]=D;this.socket.send("setProperty",{session_id:this.session_id,key:C,value:D})};u.WebAPISession.prototype.openRDPWindow=function(F,C){if(!this.__valid){return}var D=this;if(this.__config.rdpURL){var E=this.__config.rdpURL.split("@");this.__lastRDPWindow=u.launchRDP(E[0],E[1])}else{this.getAsync("rdpURL",function(H){var G=H.split("@");D.__lastRDPWindow=u.launchRDP(G[0],G[1])})}};if(window.jQuery==undefined){if(l){return}window.addEventListener("load",function(D){l=true;for(var C=0;C<p.length;C++){p[C]()}})}else{jQuery(function(){if(l){return}l=true;for(var C=0;C<p.length;C++){p[C]()}})}})(window.CVM);