var e=require("jszip"),t=require("tweetnacl"),n=require("tweetnacl-util"),r=require("web3"),o=require("@metamask/detect-provider"),i=require("protons"),a=require("multihashing"),s=require("cids"),u=require("libp2p"),c=require("libp2p-websockets"),l=require("libp2p-webrtc-direct"),d=require("libp2p-noise"),p=require("libp2p-mplex"),y=require("libp2p-kad-dht"),f=require("peer-id");require("multiaddr");var h=require("libp2p-bootstrap"),m=require("it-pipe");require("it-length-prefixed"),require("it-pushable");var g=require("secrets.js-lit"),v=require("uint8arrays/from-string"),b=require("uint8arrays/to-string"),w=require("it-all");function P(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var T=P(e),k=P(t),S=P(n),E=P(r),x=P(o),A=P(i),I=P(a),N=P(s),K=P(u),R=P(c),L=P(l),F=P(p),C=P(y),j=P(f),_=P(h),O=P(m),B=P(g),M=P(v),q=P(b),D=P(w);!function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=Object.create((t&&t.prototype instanceof m?t:m).prototype),i=new I(r||[]);return o._invoke=function(e,t,n){var r=d;return function(o,i){if(r===y)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return K()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=y;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?f:p,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=f,n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",p="suspendedYield",y="executing",f="completed",h={};function m(){}function g(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,P=w&&w(w(N([])));P&&P!==n&&r.call(P,i)&&(b=P);var T=v.prototype=m.prototype=Object.create(b);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){function n(o,i,a,s){var u=l(e[o],e,i);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then(function(e){n("next",e,a,s)},function(e){n("throw",e,a,s)}):t.resolve(d).then(function(e){c.value=e,a(c)},function(e){return n("throw",e,a,s)})}s(u.arg)}var o;this._invoke=function(e,r){function i(){return new t(function(t,o){n(e,r,t,o)})}return o=o?o.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:K}}function K(){return{value:t,done:!0}}return g.prototype=T.constructor=v,v.constructor=g,g.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,s,"GeneratorFunction")),e.prototype=Object.create(T),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[a]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then(function(e){return e.done?e.value:a.next()})},k(T),u(T,s,"Generator"),T[i]=function(){return this},T.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}({});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}();var G={name:"AES-CBC",length:256};function U(e,t,n){switch(n){case"x25519-xsalsa20-poly1305":var r,o=k.default.box.keyPair();try{r=S.default.decodeBase64(e)}catch(e){throw new Error("Bad public key")}var i=S.default.decodeUTF8(t),a=k.default.randomBytes(k.default.box.nonceLength),s=k.default.box(i,a,r,o.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:S.default.encodeBase64(a),ephemPublicKey:S.default.encodeBase64(o.publicKey),ciphertext:S.default.encodeBase64(s)};default:throw new Error("Encryption type/version not supported")}}var H=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],J=A.default("\nmessage Request {\n  enum Type {\n    HANDSHAKE = 0;\n    GET_KEY_FRAGMENT = 1;\n    STORE_KEY_FRAGMENT = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n  optional bytes clientPubKey = 6;\n}\nmessage Response {\n  enum Type {\n    HANDSHAKE_RESPONSE = 0;\n    GET_KEY_FRAGMENT_RESPONSE = 1;\n    STORE_KEY_FRAGMENT_RESPONSE = 2;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n  optional bytes serverPubKey = 4;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 1;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 1;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),Y={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}},V=function(){try{var e=(new Date).toISOString(),t=z.replace("{{timestamp}}",e);return Promise.resolve(function(e){var t=e.body;try{return Promise.resolve(Z()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.eth.personal.sign(t,r)).then(function(e){var o=n.eth.accounts.recover(t,e).toLowerCase();if(console.log("Signature: ",e),console.log("recovered address: ",o),o!==r){var i="ruh roh, the user signed with a different address ("+o+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:o}})})}catch(e){return Promise.reject(e)}}({body:t})).then(function(e){localStorage.setItem("lit-auth-signature",JSON.stringify({sig:e.signature,derivedVia:"web3.eth.personal.sign",signedMessage:t,address:e.address}))})}catch(e){return Promise.reject(e)}},W=function(){try{var e=function(){return t=JSON.parse(t),Promise.resolve(Z()).then(function(e){var n=e.account,r=function(){if(n!==t.address)return Promise.resolve(V()).then(function(){t=localStorage.getItem("lit-auth-signature"),t=JSON.parse(t)})}();return r&&r.then?r.then(function(){return t}):t})},t=localStorage.getItem("lit-auth-signature"),n=function(){if(!t)return Promise.resolve(V()).then(function(){t=localStorage.getItem("lit-auth-signature")})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},Z=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(x.default()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0].toLowerCase();return{web3:new E.default(e),account:n}})})}catch(e){return Promise.reject(e)}},z="I am creating an account to use LITs at {{timestamp}}";function Q(e,t,n){if(!e.s){if(n instanceof X){if(!n.s)return void(n.o=Q.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Q.bind(null,e,t),Q.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var X=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{Q(r,1,i(this.v))}catch(e){Q(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?Q(r,1,t?t(o):o):n?Q(r,1,n(o)):Q(r,2,o)}catch(e){Q(r,2,e)}},r},e}(),$=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(G,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),{symmetricKey:JSON.stringify(e),encryptedZip:t}})})})})})}catch(e){return Promise.reject(e)}},ee=function(e,t){try{return Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),G,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(t)).then(function(t){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(e){var t=new T.default;return Promise.resolve(t.loadAsync(e)).then(function(e){return e.files})})})}catch(e){return Promise.reject(e)}},te={},ne=function(e){var t=e.tokenId,n=e.chain,r=e.tokenAddress.toLowerCase(),o=t.toString(16).padStart(64,"0"),i=I.default(Buffer.from(r+"|"+o+"|"+n),"sha2-256");return new N.default(i).toString()},re=J.Request,oe=J.Response,ie=J.StoreKeyFragmentResponse,ae=J.GetKeyFragmentResponse;module.exports={zipAndEncryptString:function(e){try{var t=new T.default;return t.file("string.txt",e),$(t)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(e){try{for(var t=new T.default,n=0;n<e.length;n++)t.folder("encryptedAssets").file(e[n].name,e[n]);return $(t)}catch(e){return Promise.reject(e)}},encryptZip:$,decryptZip:ee,connectWeb3:Z,checkAndSignAuthMessage:W,createHtmlLIT:function(e){var t,n,r,o,i,a=e.title,s=e.htmlBody,u=e.css,c=e.encryptedZipDataUrl,l=e.tokenAddress,d=e.tokenId,p=e.chain,y=e.npmPackages,f=void 0===y?[]:y;try{var h="",m=(t=f,n=function(e){return Promise.resolve(function(e){try{return te[e]?Promise.resolve(te[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve((n=t,new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){e(r.result)},r.readAsDataURL(n)}))).then(function(t){return te[e]=t,t});var n})})}catch(e){return Promise.reject(e)}}(f[e])).then(function(e){h+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(a){try{for(;++i<t.length;)if((a=n(i))&&a.then){if(!((s=a)instanceof X&&1&s.s))return void a.then(e,o||(o=Q.bind(null,r=new X,2)));a=a.v}r?Q(r,1,a):r=a}catch(e){Q(r||(r=new X),2,e)}var s}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+h+'\n    <script>\n      var encryptedZipDataUrl = "'+c+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+h+'\n    <script>\n      var encryptedZipDataUrl = "'+c+'"\n      var tokenAddress = "'+l+'"\n      var tokenId = "'+d+'"\n      var chain = "'+p+'"\n      var locked = true\n\n      function litJsSdkLoaded(){\n         var litNodeClient = new LitJsSdk.default.LitNodeClient()\n        litNodeClient.connect()\n        window.litNodeClient = litNodeClient\n      }\n    <\/script>\n    <script onload=\'litJsSdkLoaded()\' src="https://unpkg.com/lit-js-sdk/build/index.web.js"><\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(W()).then(function(e){return Promise.resolve(Z()).then(function(r){var o=r.web3,i=r.account;return Promise.resolve(o.eth.getChainId()).then(function(r){if(r!==Y[t].chainId)return{errorCode:"wrong_chain"};var a=Y[t].contractAddress,s=new o.eth.Contract(H,a);return console.log("sending to chain..."),function(t,r){try{var o=Promise.resolve(s.methods.mint(n).send({from:i})).then(function(t){return console.log("txReceipt: ",t),{txHash:t.transactionHash,tokenId:t.events.TransferSingle.returnValues.id,tokenAddress:a,mintingAddress:i,authSig:e}})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(W()).then(function(n){return Promise.resolve(window.litNodeClient.getEncryptionKey({tokenAddress:window.tokenAddress,tokenId:window.tokenId,authSig:n,chain:window.chain})).then(function(n){return Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(r){return Promise.resolve(r.blob()).then(function(r){return Promise.resolve(ee(r,n)).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:Y,LitNodeClient:function(){function e(e){this.libp2p=null,this.connectedNodes=new Set,this.serverPubKeys={}}var t=e.prototype;return t.getEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain;try{return Promise.resolve(this.getEncryptionKeyFragments({tokenAddress:t,tokenId:n,authSig:r,chain:o})).then(function(e){var t=B.default.combine(e),n=Buffer.from(t,"hex").toString();return console.log("recombined symmetric key: "+n),n})}catch(e){return Promise.reject(e)}},t.saveEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.symmetricKey,o=e.authSig,i=e.chain;try{var a=this;console.log("saveEncryptionKey with tokenAddress "+t+" and tokenId "+n+" and symmetricKey "+r+" and authSig "+o+" and chain "+i);var s=Array.from(a.connectedNodes),u=s.length,c=Math.floor(u/2),l=Buffer.from(r).toString("hex");console.debug("splitting up into "+u+" shares with a threshold of "+c);var d=B.default.share(l,u,c);if(d.length!==s.length)throw new Error("kFrags.length ("+d.length+") !== nodes.length ("+s.length+")");for(var p=[],y=t.toLowerCase(),f=0;f<s.length;f++){var h=s[f];console.debug("storing kFrag in node "+(f+1)+" of "+s.length);var m=S.default.encodeBase64(a.serverPubKeys[h]),g=JSON.stringify(U(m,d[f],"x25519-xsalsa20-poly1305"));console.log("encrypted kFrag is "+g),p.push(a.storeDataWithNode({peerId:h,tokenAddress:y,tokenId:n,val:g,authSig:o,chain:i}))}return Promise.resolve(Promise.all(p)).then(function(){return console.log("all stored"),{success:!0}})}catch(e){return Promise.reject(e)}},t.getEncryptionKeyFragments=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain;try{var i=this,a=t.toLowerCase(),s=ne({tokenAddress:t,tokenId:n,chain:o}),u=new N.default(s);return Promise.resolve(D.default(i.libp2p.contentRouting.findProviders(u,{timeout:3e3}))).then(function(e){console.log("Found "+e.length+" providers");for(var t=[],u=0;u<e.length;u++){var c=e[u].id.toB58String();console.debug("Getting "+s+" from "+c),t.push(i.getDataFromNode({peerId:c,tokenAddress:a,tokenId:n,authSig:r,keyId:s,chain:o}))}return Promise.resolve(Promise.all(t))})}catch(e){return Promise.reject(e)}},t.storeDataWithNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.val,i=e.authSig,a=e.chain;try{console.debug("storing data with node "+t+" with tokenAddress "+n+" and tokenId "+r);var s=re.encode({type:re.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:M.default(o)},authSig:M.default(JSON.stringify(i)),tokenParams:{tokenAddress:M.default(n),tokenId:M.default(r.toString()),chain:M.default(a)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:s}))}catch(e){return Promise.reject(e)}},t.getDataFromNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.keyId,i=e.authSig,a=e.chain;try{console.debug("getDataFromNode "+t+" with keyId "+o);var s=re.encode({type:re.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:M.default(o)},authSig:M.default(JSON.stringify(i)),tokenParams:{tokenAddress:M.default(n),tokenId:M.default(r.toString()),chain:M.default(a)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:s}))}catch(e){return Promise.reject(e)}},t.handshakeWithSgx=function(e){var t=e.peerId;try{console.debug("handshakeWithSgx "+t);var n=re.encode({type:re.Type.HANDSHAKE});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:n}))}catch(e){return Promise.reject(e)}},t.sendCommandToPeer=function(e){var t=e.peerId,n=e.data;try{var r=this,o=r.libp2p.connectionManager.get(j.default.createFromB58String(t));return Promise.resolve(o.newStream(["/lit/1.0.0"])).then(function(e){var o=e.stream;console.debug("sendCommandToPeer "+t);var i=null;return Promise.resolve(O.default([n],o,function(e){try{return console.debug("in sendCommandToPeer callback"),Promise.resolve(e.next()).then(function(e){var n=e.value;console.debug("got value from source.next()",n);var o=oe.decode(n.slice());o.type===oe.Type.HANDSHAKE_RESPONSE?(r.serverPubKeys[t]=o.serverPubKey,console.log("handshake success for "+t+" - got server pub key "+S.default.encodeBase64(o.serverPubKey)),i=!0):o.type===oe.Type.STORE_KEY_FRAGMENT_RESPONSE?o.storeKeyFragmentResponse.result===ie.Result.SUCCESS?(console.log("success storing key fragment"),i=!0):(console.log("error storing key fragment: "),console.log(q.default(o.storeKeyFragmentResponse.errorMessage)),i=!1):o.type===oe.Type.GET_KEY_FRAGMENT_RESPONSE?o.getKeyFragmentResponse.result===ae.Result.SUCCESS?(console.log("success getting key fragment"),i=q.default(o.getKeyFragmentResponse.fragmentValue)):o.getKeyFragmentResponse.result===ae.Result.NOT_FOUND?(console.log("key fragment not found"),i=!1):(console.log("unknown error getting key fragment"),i=!1):console.log("unknown response type")})}catch(e){return Promise.reject(e)}})).then(function(){return i})})}catch(e){return Promise.reject(e)}},t.connect=function(){try{var e,t=this;return Promise.resolve(K.default.create({modules:{transport:[R.default,L.default],connEncryption:[d.NOISE],streamMuxer:[F.default],dht:C.default,peerDiscovery:[_.default]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[_.default.tag]={enabled:!0,list:["/ip4/51.222.108.215/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{var n=e.remotePeer.toB58String();return console.debug("Connected to "+n),t.connectedNodes.has(n)||(t.connectedNodes.add(n),setTimeout(function(){try{return Promise.resolve(t.handshakeWithSgx({peerId:n})).then(function(){})}catch(e){return Promise.reject(e)}},1e3)),Promise.resolve()}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){var n=e.remotePeer.toB58String();console.debug("Disconnected from "+n),t.connectedNodes.delete(n)}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())}),window.libp2p=t.libp2p,window.PeerId=j.default})})}catch(e){return Promise.reject(e)}},e}(),protobufs:J,kFragKey:ne};
//# sourceMappingURL=index.js.map
