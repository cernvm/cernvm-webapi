window.CVM={version:"2.0.1"};(function(Z){var aa="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZnl5eczMzJ+fn////7Ozs4yMjGtra+Li4nFxcaampgAAAAAAAAAAAAAAAAAAACH5BAEHAAQALAAAAAAgACAAAASjkMhJq704681JKV04JYkYDgAwmBuSpgibGS9gyJdQpwJeBTtAwDcpBFMgYuJ1WKZKPlRqSACmVjLXK2l8xVi0raSbupl0Ne6uJ7K+zOEXtUOWS9zijrNGxT87UjtURyothAASh18YcUGJhGY5hzZ7R2wWfpNHcxR1lmiHSRSVQQoSCpNQE4GQEo1HWARamgcHmjCut7pvBKC7ugKZv4ecRMYsEQA7";var ae="data:image/gif;base64,R0lGODlhIAAgAMQAAGZmZnt7e8TExK2treXl5dXV1Wtra4qKivj4+L29vd7e3pGRke/v78zMzLW1tYSEhHR0dJmZmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHAAgALAAAAAAgACAAAAXUICKOZGmeKMoUguMIBZPOY3IAeI4fCX0KEJ0wBxH4RouhMrfwEQLLKCBAmEGl0UAqmRUQBsumSYBtjG5KYykoVYwiS0gpgQUsZAVp71zHsaMHIwx9hAAyCHmACQoEDn9RBSJkSweMI5NSag51VSJ1DiKbWJ0In5JYBiOJmSKrYSNgWJEIg3ojV1KHCGhLnbVSgTVRciINdXsjjzpaxVjEJJhDbiIKCrhCaiVcQwEJBAoJD68o14VTM0/mOFQ+231iR0B1RUdzvEI89SosLjC6+gBnhAAAOw==";var N="data:image/gif;base64,R0lGODlhIAAgALMAAGZmZpOTk93d3Wtra8zMzLW1tXNzc3p6eu/v78XFxYODg9bW1qWlpejo6Pj4+IqKiiH5BAEHAA4ALAAAAAAgACAAAATr0MlJq7046827p4QBGMTHicBoVohApTAlIN4yjE1TwGmRH4DBooMa3XipQXFA0wiQ0ChguAHyFCUJQYE8dBqogY8BPDB0R0Pje0zYkMJEcs3ZAQKII7zx6GlCPAsMKQcuC1YMBDwkF0UpDih0DgspBghIBhdQDjcDEgEOl0EOmxaOAJApLlqVojCZFoeBgwAHQ4AAiTy2GnZ4p619AAUdeSlupwYLckFNG2BJBQgMIgYMCAVpkhpWMFg0CFuYHE9S5lMnr3o8SjBM5DcHDdhI0g1AQh+rEkgyziupKgHMsKAalYEIEypcyHBDBAA7";var J="data:image/gif;base64,R0lGODlhIAAgANUAAPX19fT09PLy8vDw8O7u7uzs7OLi4tnZ2c/Pz83NzczMzMXFxby8vLKysqmpqZ+fn5iYmJWVlZKSkoyMjICAgHx8fHl5eXZ2dnR0dHBwcG9vb21tbWtra2pqamhoaGdnZ2ZmZkxMTEpKSv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEHACMALAAAAAAgACAAAAauwJFwSCwaj8ikcln5OJ/QqFRKnFqv0OpnyR05tV3mdvgNC87GslCtFbnf7/R4PTfLwfYjm41I+P+AgYB7cyAZG4iJiouIdHh5RYSQd2R1Sg0RDwwAkXV8R5iGoguPXpZGDKKqIAeVpXqrqq6zSbGyjrSgtqO4vbq7rL5Ylbumhm0eycoSQ6GxfYqQD8+TqNMTDgXV23nY0A3cyMHhdBqG4OSmBgvj5BEGQgvo6WFBADs=";var P=null,H=false,K=[];Z.debugLogging=true;Z.version="1.0";Z.markPageLoaded=function(){H=true};Z.launchRDP=function(an,ak){var am=800,ah=600,al=24;if(ak!=undefined){var aj=ak.split("x");am=parseInt(aj[0]);ah=parseInt(aj[1]);if(aj.length>2){al=parseInt(aj[2])}}var ai=window.open("http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#"+an+","+am+","+ah,"WebRDPClient","width="+am+",height="+ah);ai.moveTo((screen.width-am)/2,(screen.height-ah)/2);setTimeout(function(){ai.focus()},100);ai.focus()};Z.startCVMWebAPI=function(ak,aj,ah){var ai=function(){var al=new Z.WebAPIPlugin();al.connect(function(am){if(am){ak(al)}else{var an=document.createElement("iframe");an.src="http://labs.wavesoft.gr/webapi/install";an.width="100%";an.height=400;an.frameBorder=0;v.createFramedWindow({body:an,icon:N,disposable:false});var ao=function(){al=new Z.WebAPIPlugin();al.connect(function(ap){if(ap){ak(al);v.hideInteraction()}else{setTimeout(function(){ao()},250)}},false)};ao()}})};if(!H){K.push(ai)}else{ai()}};var l=0;var S=1;var af=2;var o=1;var s=0;var c=-1;var n=-2;var ac=-3;var e=-4;var b=-5;var O=-6;var q=-7;var y=-8;var A=-9;var M=-10;var i=-11;var k=-12;var t=-13;var Q=-99;var m=-100;var L=0;var d=1;var R=2;var z=3;var B=4;var T=5;var X=6;var ab=1;var x=2;var ad=4;var p=8;var V=16;var F=0,I=1,r=2,w=3,G=4,g=5;var u=1;var W=2;function E(ah){if(ah==L){return"Closed"}if(ah==d){return"Oppening"}if(ah==R){return"Open"}if(ah==z){return"Starting"}if(ah==B){return"Started"}if(ah==T){return"Error"}if(ah==X){return"Paused"}return"Unknown state "+ah}function D(ah){if(ah==af){return"Already exists"}if(ah==o){return"Scheduled"}if(ah==s){return"No error"}if(ah==c){return"Creation Error"}if(ah==n){return"Modification Error"}if(ah==ac){return"Control Error"}if(ah==e){return"Deletion Error"}if(ah==b){return"Query Error"}if(ah==O){return"I/O Error"}if(ah==q){return"Server/Library Error"}if(ah==y){return"Invalid state for such action"}if(ah==A){return"The requested resource was not found"}if(ah==M){return"Access denied"}if(ah==i){return"The requested action is not supported"}if(ah==k){return"Unable to validate the resource"}if(ah==t){return"The domain is not trusted"}if(ah==Q){return"Usage error"}if(ah==m){return"The requested functionality is not implemented"}return"Unknown error #"+ah}Z.EventDispatcher=function(ah){this.events={}};Z.EventDispatcher.prototype.__fire=function(ai,ah){if(Z.debugLogging){console.log("Firing",ai,"(",ah,")")}if(this.events[ai]==undefined){return}var ak=this.events[ai];for(var aj=0;aj<ak.length;aj++){ak[aj].apply(this,ah)}};Z.EventDispatcher.prototype.addEventListener=function(ah,ai){if(this.events[ah]==undefined){this.events[ah]=[]}this.events[ah].push(ai)};Z.EventDispatcher.prototype.removeEventListener=function(ah,aj){if(this.events[ah]==undefined){return}var ai=this.events[ah].indexOf(aj);if(ai<0){return}this.events.splice(ai,1)};var ab=1;var x=2;var ad=4;var p=8;var ag=function(ai){var ah=0;if(ai.use64bit){ah|=ab}if(ai.useBootDisk){ah|=x}if(ai.useGuestAdditions){ah|=ad}if(ai.useFloppyIO){ah|=p}if(ai.HVF_HEADFUL){ah|=V}return ah};var f=function(aj){var ah=function(ak){aj.__config.flags=ak;aj.setAsync("flags",ak)},ai=function(){return aj.__config.flags};Object.defineProperties(this,{value:{get:function(){return ai()},set:function(ak){ah(ak)}},use64bit:{get:function(){return((ai()&ab)!=0)},set:function(ak){if(ak){ah(ai()|ab)}else{ah(ai()&~ab)}}},useBootDisk:{get:function(){return((ai()&x)!=0)},set:function(ak){if(ak){ah(ai()|x)}else{ah(ai()&~x)}}},useGuestAdditions:{get:function(){return((ai()&ad)!=0)},set:function(ak){if(ak){ah(ai()|ad)}else{ah(ai()&~ad)}}},useFloppyIO:{get:function(){return((ai()&p)!=0)},set:function(ak){if(ak){ah(ai()|p)}else{ah(ai()&~p)}}},headful:{get:function(){return((ai()&V)!=0)},set:function(ak){if(ak){ah(ai()|V)}else{ah(ai()&~V)}}}})};Z.ProgressFeedback=function(){};var h="ws://127.0.0.1:5624",U="cernvm-webapi:";Z.Socket=function(){Z.EventDispatcher.call(this);this.interaction=new v(this);this.connecting=false;this.connected=false;this.socket=null;this.lastID=0;this.responseCallbacks={};this.authToken="";if(window.location.hash){this.authToken=window.location.hash.substr(1)}};Z.Socket.prototype=Object.create(Z.EventDispatcher.prototype);Z.Socket.prototype.__handleClose=function(){this.__fire("disconnected");v.hideInteraction()};Z.Socket.prototype.__handleOpen=function(ah){this.__fire("connected",ah.version)};Z.Socket.prototype.__handleData=function(ai){var aj=JSON.parse(ai);if(aj.id){var ah=this.responseCallbacks[aj.id];if(ah!=undefined){ah(aj)}}else{if(aj.type=="event"){var ai=aj.data;if(aj.name=="interact"){this.interaction.handleInteractionEvent(aj.data)}else{this.__fire(aj.name,aj.data)}}}};Z.Socket.prototype.send=function(aj,ak,am,al){var ao=this;var ap="a-"+(++this.lastID);var ah={type:"action",name:aj,id:ap,data:ak||{}};if(am){var an=null,ai=function(aq){if(!aq){return""}return"on"+aq[0].toUpperCase()+aq.substr(1)};if(al!==0){an=setTimeout(function(){delete ao.responseCallbacks[ap];if(am.onError){am.onError("Response timeout")}},al||10000)}this.responseCallbacks[ap]=function(ar){if(an!=null){clearTimeout(an)}if((ar.name=="succeed")||(ar.name=="failed")){delete ao.responseCallbacks[ap]}var aq=ai(ar.name);if(am[aq]){am[aq].apply(ao,ar.data||[])}}}this.socket.send(JSON.stringify(ah))};Z.Socket.prototype.close=function(){if(!this.connected){return}this.socket.close();this.connected=false;this.__handleClose()};Z.Socket.prototype.connect=function(al,ah){var ak=this;if(this.connected){return}if(ah==undefined){ah=true}if(this.connecting){return}this.connecting=true;var ao=function(ap,at){try{if(!at){at=100}var ar=false,av=setTimeout(function(){ar=true;ap(false)},at);var aq=new WebSocket(h);aq.onerror=function(aw){if(ar){return}clearTimeout(av);if(!ak.connecting){return}ap(false)};aq.onopen=function(aw){if(ar){return}clearTimeout(av);if(!ak.connecting){return}ap(true,aq)}}catch(au){console.warn("[socket] Error setting up socket! ",au);if(ar){return}ap(false)}};var aj=function(au,aw,az,aq){var ar=new Date().getTime();if(!aq){aq=ar}if(!az){az=500}var ap=aw-(ar-aq);var at=false,ax=setTimeout(function(){at=true;au(false)},ap);var ay=function(aB,aA){if(at){return}if(aB){clearTimeout(ax);au(true,aA)}else{if(ap<az){return}clearTimeout(ax);setTimeout(function(){aj(au,aw,az,aq)},az)}};var av=100;if(ap<av){av=ap}ao(ay,av)};var ai=function(ap){ak.connecting=false;ak.connected=true;ak.socket=ap;ak.socket.onclose=function(){console.warn("Remotely disconnected from CernVM WebAPI");ak.__handleClose()};ak.socket.onmessage=function(aq){ak.__handleData(aq.data)};ak.send("handshake",{version:Z.version,auth:ak.authToken},function(at,ar,aq){console.info("Successfuly contacted with CernVM WebAPI v"+at.version);ak.__handleOpen(at)});if(al){al(true)}};var an=function(ap){console.error("Unable to contact CernVM WebAPI");if(!ak.connecting){return}ak.connecting=false;ak.connected=false;if(al){al(false)}};var am=function(aq,ap){if(!aq){an()}else{ai(ap)}};ao(function(aq,ap){if(aq){ai(ap)}else{if(ah){var ar=document.createElement("iframe");ar.src=U+"launch";ar.style.display="none";document.body.appendChild(ar);aj(am,5000)}else{an()}}})};var j=1,Y=2,C=256;var v=Z.UserInteraction=function(ah){var ai=this;this.socket=ah;this.onResize=null;window.addEventListener("resize",function(){console.log("RESIZE!");if(ai.onResize){ai.onResize()}})};v.hideInteraction=function(){if(v.activeScreen!=null){try{document.body.removeChild(v.activeScreen)}catch(ah){}v.activeScreen=null}};v.createButton=function(ak,al){var ai=document.createElement("button");ai.innerHTML=ak;ai.style.display="inline-block";ai.style.marginBottom="0";ai.style.textAlign="center";ai.style.verticalAlign="middle";ai.style.borderStyle="solid";ai.style.borderWidth="1px";ai.style.borderRadius=ai.style.webkitBorderRadius=ai.style.mozBorderRadius="4px";ai.style.userSelect=ai.style.webkitUserSelect=ai.style.mozUserSelect=ai.style.msUserSelect="none";ai.style.margin="5px";ai.style.padding="6px 12px";ai.style.cursor="pointer";var ah=function(am,aq){var an=parseInt(am.slice(1),16),at=Math.round(2.55*aq),ap=(an>>16)+at,ao=(an>>8&255)+at,ar=(an&255)+at;return"#"+(16777216+(ap<255?ap<1?0:ap:255)*65536+(ao<255?ao<1?0:ao:255)*256+(ar<255?ar<1?0:ar:255)).toString(16).slice(1)},aj=function(aq){var an=parseInt(aq.slice(1),16),ap=(an>>16),ao=(an>>8&255),am=(an&255),ar=(ap*299+ao*587+am*114)/1000;return(ar>=128)?"black":"white"};ai.style.backgroundColor=al;ai.style.borderColor=ah(al,-20);ai.onmouseover=function(){ai.style.backgroundColor=ah(al,-10)};ai.onmouseout=function(){ai.style.backgroundColor=al};ai.style.color=aj(al);return ai};v.createFramedWindow=function(aj){if(!aj){aj={}}var am=aj.body||"",al=aj.header||false,aw=aj.footer||false,au=aj.icon||false,ao=aj.onClose||false,at=(aj.disposable!=undefined)?aj.disposable:true;var ar=document.createElement("div"),aq=document.createElement("div"),ai=document.createElement("div"),an=document.createElement("div"),ak=document.createElement("div");ar.style.position="absolute";ar.style.left="0";ar.style.top="0";ar.style.right="0";ar.style.bottom="0";ar.style.zIndex=60000;ar.style.backgroundColor="rgba(255,255,255,0.5)";ar.appendChild(aq);aq.style.marginLeft="auto";aq.style.marginRight="auto";aq.style.marginBottom=0;aq.style.marginTop=0;aq.style.backgroundColor="#FCFCFC";aq.style.border="solid 1px #E6E6E6";aq.style.borderRadius=aq.style.webkitBorderRadius=aq.style.mozBorderRadius="5px";aq.style.boxShadow=aq.style.webkitBoxShadow=aq.style.mozBoxShadow="1px 2px 4px 1px rgba(0,0,0,0.2)";aq.style.padding="10px";aq.style.fontFamily="Verdana, Geneva, sans-serif";aq.style.fontSize="14px";aq.style.color="#666;";aq.style.width="70%";ai.style.color="#333";ai.style.marginBottom="8px";an.style.textAlign="center";an.style.color="#333";an.style.marginTop="8px";aq.appendChild(ai);if(al){if(typeof(al)=="string"){var ap;if(au){ap=document.createElement("img");ap.src=au;ap.style.verticalAlign="-8px";ap.style.marginRight="6px"}else{ap=document.createElement("span")}var ah=document.createElement("span");ah.innerHTML=al;ah.style.fontSize="1.6em";ah.style.marginBottom="8px";ai.appendChild(ap);ai.appendChild(ah)}else{ai.appendChild(al)}}if(am){ak.style.overflow="auto";ak.appendChild(am)}aq.appendChild(ak);aq.appendChild(an);if(aw){if(typeof(aw)=="string"){an.innerHTML=aw}else{an.appendChild(aw)}}var av=function(){var ax=ai.offsetHeight+an.offsetHeight+50;var az=window.innerHeight-ax;ak.style.maxHeight=az+"px";var ay=(window.innerHeight-aq.offsetHeight)/2;if(ay<0){ay=0}aq.style.marginTop=ay+"px"};ar.onclick=function(){if(!at){return}if(ao){ao()}else{v.hideInteraction()}};aq.onclick=function(ax){ax.stopPropagation()};v.hideInteraction();document.body.appendChild(ar);v.activeScreen=ar;av();this.onResize=av;return ar};v.displayLicenseWindow=function(ap,am,ak,ao,aj){var al=document.createElement("div"),aq=document.createElement("span"),ai;aq.innerHTML="&nbsp;";if(ak){ai=document.createElement("iframe"),ai.src=am;ai.width="100%";ai.height=450;ai.frameBorder=0}else{ai=document.createElement("div");ai.width="100%";ai.style.height="450px";ai.style.display="block";ai.innerHTML=am}var ah=v.createButton("Accept License","#E1E1E1");lnkCancel=v.createButton("Decline License","#FAFAFA");al.style.padding="6px";al.appendChild(ah);al.appendChild(aq);al.appendChild(lnkCancel);var an;an=v.createFramedWindow({body:ai,header:ap,footer:al,icon:J,onClose:function(){document.body.removeChild(an);if(aj){aj()}}});ah.onclick=function(){document.body.removeChild(an);if(ao){ao()}};lnkCancel.onclick=function(){document.body.removeChild(an);if(aj){aj()}}};v.confirm=function(am,ah,ao){var al=document.createElement("div"),an=document.createElement("div");al.innerHTML=ah;al.style.width="100%";var ak,aj=v.createButton("Ok","#E1E1E1"),ai=v.createButton("Cancel","#FAFAFA");aj.onclick=function(){document.body.removeChild(ak);ao(true)};ai.onclick=function(){document.body.removeChild(ak);ao(false)};an.appendChild(aj);an.appendChild(ai);ak=v.createFramedWindow({body:al,header:am,footer:an,icon:ae,onClose:function(){document.body.removeChild(ak);ao(false)}})};v.alert=function(al,ah,an){var ak=document.createElement("div"),am=document.createElement("div");ak.innerHTML=ah;ak.style.width="100%";var aj,ai=v.createButton("Ok","#FAFAFA");ai.onclick=function(){document.body.removeChild(aj)};am.appendChild(ai);aj=v.createFramedWindow({body:ak,header:al,footer:am,icon:aa})};v.confirmLicense=function(ai,ah,aj){v.displayLicenseWindow(ai,ah,false,function(){aj(true)},function(){aj(false)})};v.confirmLicenseURL=function(ai,ah,aj){v.displayLicenseWindow(ai,ah,true,function(){aj(true)},function(){aj(false)})};v.prototype.handleInteractionEvent=function(ai){var ah=this.socket;if(ai[0]=="confirm"){v.confirm(ai[1],ai[2],function(aj,ak){if(aj){ah.send("interactionCallback",{result:j|(ak?C:0)})}else{ah.send("interactionCallback",{result:Y|(ak?C:0)})}})}else{if(ai[0]=="alert"){v.alert(ai[1],ai[2],function(aj){})}else{if(ai[0]=="confirmLicense"){v.confirmLicense(ai[1],ai[2],function(aj,ak){if(aj){ah.send("interactionCallback",{result:j|(ak?C:0)})}else{ah.send("interactionCallback",{result:Y|(ak?C:0)})}})}else{if(ai[0]=="confirmLicenseURL"){v.confirmLicenseURL(ai[1],ai[2],function(aj,ak){if(aj){ah.send("interactionCallback",{result:j|(ak?C:0)})}else{ah.send("interactionCallback",{result:Y|(ak?C:0)})}})}}}}};Z.WebAPIPlugin=function(){Z.Socket.call(this)};Z.WebAPIPlugin.prototype=Object.create(Z.Socket.prototype);Z.WebAPIPlugin.prototype.stopService=function(){this.send("stopService")};Z.WebAPIPlugin.prototype.requestSession=function(ak,aj,ai){var ah=this;this.send("requestSession",{vmcp:ak},{onSucceed:function(an,al){var am=new Z.WebAPISession(ah,al);ah.responseCallbacks[al]=function(ao){am.handleEvent(ao)};if(aj){aj(am)}},onFailed:function(am,al){console.error("Failed to request session! "+am);if(ai){ai(am,al)}},onProgress:function(am,al){ah.__fire("progress",[am,al])},onStarted:function(al){ah.__fire("started",[al])},onCompleted:function(al){ah.__fire("completed",[al])}})};function a(ai){var ah=["missing","available","poweroff","saved","paused","running"];if((ai<0)||(ai>=ah.length)){return"unknown"}return ah[ai]}Z.WebAPISession=function(ah,aj){Z.EventDispatcher.call(this);this.socket=ah;this.session_id=aj;this.__state=0;this.__properties={};this.__config={};this.__valid=true;var ai=undefined;Object.defineProperties(this,{state:{get:function(){if(!this.__valid){return ai}return this.__state}},stateName:{get:function(){if(!this.__valid){return ai}return a(this.__state)}},ip:{get:function(){if(!this.__valid){return ai}return this.__config.ip}},ram:{get:function(){if(!this.__valid){return ai}return this.__config.ram}},disk:{get:function(){if(!this.__valid){return ai}return this.__config.disk}},apiURL:{get:function(){if(!this.__valid){return ai}return this.__config.apiURL}},rdpURL:{get:function(){if(!this.__valid){return ai}return this.__config.rdpURL}},executionCap:{get:function(){if(!this.__valid){return ai}return this.__config.executionCap},set:function(ak){this.__config.executionCap=ak;this.setAsync("executionCap",ak)}},version:{get:function(){if(!this.__valid){return ai}return this.__config.cernvmVersion},set:function(ak){if(!this.__valid){return}this.__config.cernvmVersion=ak;this.setAsync("cernvmVersion",ak)}},"flavor ":{get:function(){if(!this.__valid){return ai}return this.__config.cernvmFlavor},set:function(ak){if(!this.__valid){return}this.__config.cernvmFlavor=ak;this.setAsync("cernvmFlavor",ak)}},diskURL:{get:function(){if(!this.__valid){return ai}return this.__config.diskURL},set:function(ak){if(!this.__valid){return}this.__config.diskURL=ak;this.setAsync("diskURL",ak)}},diskChecksum:{get:function(){if(!this.__valid){return ai}return this.__config.diskChecksum},set:function(ak){if(!this.__valid){return}this.__config.diskChecksum=ak;this.setAsync("diskChecksum",ak)}},flags:{get:function(){if(!this.__valid){return ai}return new f(this)},set:function(ak){if(typeof(ak)=="number"){this.__config.flags=ak}else{if(typeof(ak)=="object"){this.__config.flags=ag(ak)}}}}})};Z.WebAPISession.prototype=Object.create(Z.EventDispatcher.prototype);Z.WebAPISession.prototype.handleEvent=function(ah){if(ah.name=="stateVariables"){ah=ah.data;if(!ah){return}else{if(ah.length>1){this.__config=ah[0]||{}}if(ah.length>2){this.__properties=ah[0]||{}}}}else{if(ah.name=="stateChanged"){this.__state=ah.data[0]}}this.__fire(ah.name,ah.data)};Z.WebAPISession.prototype.start=function(ah){this.socket.send("start",{session_id:this.session_id,parameters:ah||{}})};Z.WebAPISession.prototype.stop=function(){this.socket.send("stop",{session_id:this.session_id})};Z.WebAPISession.prototype.pause=function(){this.socket.send("pause",{session_id:this.session_id})};Z.WebAPISession.prototype.resume=function(){this.socket.send("resume",{session_id:this.session_id})};Z.WebAPISession.prototype.reset=function(){this.socket.send("reset",{session_id:this.session_id})};Z.WebAPISession.prototype.hibernate=function(){this.socket.send("hibernate",{session_id:this.session_id})};Z.WebAPISession.prototype.close=function(){this.socket.send("close",{session_id:this.session_id})};Z.WebAPISession.prototype.getAsync=function(ai,ah){this.socket.send("get",{session_id:this.session_id,key:ai},{onSucceed:function(aj){ah(aj)}})};Z.WebAPISession.prototype.setAsync=function(aj,ai,ah){this.socket.send("set",{session_id:this.session_id,key:aj,value:ai},{onSucceed:function(){ah()}})};Z.WebAPISession.prototype.getProperty=function(ah){if(!ah){return""}if(this.__properties[ah]==undefined){return""}return this.__properties[ah]};Z.WebAPISession.prototype.setProperty=function(ah,ai){if(!ah){return""}this.__properties[ah]=ai;this.socket.send("setProperty",{session_id:this.session_id,key:ah,value:ai})};Z.WebAPISession.prototype.openRDPWindow=function(aj,ah){if(this.__config.rdpURL){var ai=this.__config.rdpURL.split("@");Z.launchRDP(ai[0],ai[1])}else{this.getAsync("rdpURL",function(al){var ak=al.split("@");Z.launchRDP(ak[0],ak[1])})}};if(window.jQuery==undefined){if(H){return}window.addEventListener("load",function(ai){H=true;for(var ah=0;ah<K.length;ah++){K[ah]()}})}else{jQuery(function(){if(H){return}H=true;for(var ah=0;ah<K.length;ah++){K[ah]()}})}})(window.CVM);