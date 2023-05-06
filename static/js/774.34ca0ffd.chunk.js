"use strict";(self.webpackChunkminter_lab_1155=self.webpackChunkminter_lab_1155||[]).push([[774],{29042:function(e,t,n){n.d(t,{CV:function(){return N},Id:function(){return j},t0:function(){return M},zv:function(){return W},uA:function(){return Z},uc:function(){return $},jb:function(){return re},zb:function(){return A},AV:function(){return O},Ic:function(){return le},Vs:function(){return fe},kD:function(){return te}});var r=n(93433),a=n(37762),o=n(74165),i=n(15861),s=n(29439),c=(Symbol(),Symbol()),u=Object.getPrototypeOf,l=new WeakMap,d=function(e){return e&&(l.has(e)?l.get(e):u(e)===Object.prototype||u(e)===Array.prototype)},f=function(e){return d(e)&&e[c]||null},p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];l.set(e,t)},v=function(e){return"object"===typeof e&&null!==e},h=new WeakMap,b=new WeakSet,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return new Proxy(e,t)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return v(e)&&!b.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,r=o.get(e);if((null==r?void 0:r[0])===t)return r[1];var c=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return p(c,!0),o.set(e,[t,c]),Reflect.ownKeys(e).forEach((function(t){if(!Object.getOwnPropertyDescriptor(c,t)){var r=Reflect.get(e,t),a={value:r,enumerable:!0,configurable:!0};if(b.has(r))p(r,!1);else if(r instanceof Promise)delete a.value,a.get=function(){return n(r)};else if(h.has(r)){var o=h.get(r),u=(0,s.Z)(o,2),l=u[0],d=u[1];a.value=i(l,d(),n)}Object.defineProperty(c,t,a)}})),c},c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:function(a){if(!v(a))throw new Error("object required");var o=c.get(a);if(o)return o;var d=u[0],p=new Set,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++u[0];d!==t&&(d=t,p.forEach((function(n){return n(e,t)})))},g=u[1],m=function(e){return function(t,n){var a=(0,r.Z)(t);a[1]=[e].concat((0,r.Z)(a[1])),w(a,n)}},y=new Map,C=function(e){var t,n=y.get(e);n&&(y.delete(e),null==(t=n[1])||t.call(n))},I=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),k={deleteProperty:function(e,t){var n=Reflect.get(e,t);C(t);var r=Reflect.deleteProperty(e,t);return r&&w(["delete",[t],n]),r},set:function(t,r,a,o){var i=Reflect.has(t,r),s=Reflect.get(t,r,o);if(i&&(e(s,a)||c.has(a)&&e(s,c.get(a))))return!0;C(r),v(a)&&(a=f(a)||a);var u=a;if(a instanceof Promise)a.then((function(e){a.status="fulfilled",a.value=e,w(["resolve",[r],e])})).catch((function(e){a.status="rejected",a.reason=e,w(["reject",[r],e])}));else{!h.has(a)&&n(a)&&(u=l(a));var d=!b.has(u)&&h.get(u);d&&function(e,t){if(y.has(e))throw new Error("prop listener already exists");if(p.size){var n=t[3](m(e));y.set(e,[t,n])}else y.set(e,[t])}(r,d)}return Reflect.set(t,r,u,o),w(["set",[r],a,s]),!0}},j=t(I,k);c.set(a,j);var E=[I,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++u[1];return g===e||p.size||(g=e,y.forEach((function(t){var n=(0,s.Z)(t,1)[0][1](e);n>d&&(d=n)}))),d},i,function(e){p.add(e),1===p.size&&y.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0];if(n[1])throw new Error("remove already exists");var a=r[3](m(t));y.set(t,[r,a])}));return function(){p.delete(e),0===p.size&&y.forEach((function(e,t){var n=(0,s.Z)(e,2),r=n[0],a=n[1];a&&(a(),y.set(t,[r]))}))}}];return h.set(j,E),Reflect.ownKeys(a).forEach((function(e){var t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(j[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),j};return[l,h,b,e,t,n,a,o,i,c,u]},g=w(),m=(0,s.Z)(g,1)[0];function y(){return m(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function C(e,t,n){var r,a=h.get(e);a||console.warn("Please use proxy object");var o=[],i=a[3],s=!1,c=i((function(e){o.push(e),n?t(o.splice(0)):r||(r=Promise.resolve().then((function(){r=void 0,s&&t(o.splice(0))})))}));return s=!0,function(){s=!1,c()}}var I,k=n(19778),j={ethereumClient:void 0,setEthereumClient:function(e){I=e},client:function(){if(I)return I;throw new Error("ClientCtrl has no client set")}},E=y({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),O={state:E,subscribe:function(e){return C(E,(function(){return e(E)}))},push:function(e,t){e!==E.view&&(E.view=e,t&&(E.data=t),E.history.push(e))},reset:function(e){E.view=e,E.history=[e]},replace:function(e){E.history.length>1&&(E.history[E.history.length-1]=e,E.view=e)},goBack:function(){if(E.history.length>1){E.history.pop();var e=E.history.slice(-1),t=(0,s.Z)(e,1)[0];E.view=t}},setData:function(e){E.data=e}},W={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",W3M_VERSION:"W3M_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:function(){return typeof window<"u"&&!(!window.matchMedia("(pointer:coarse)").matches&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent))},isAndroid:function(){return W.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos:function(){var e=navigator.userAgent.toLowerCase();return W.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:function(e){return e.startsWith("http://")||e.startsWith("https://")},isArray:function(e){return Array.isArray(e)&&e.length>0},formatNativeUrl:function(e,t,n){if(W.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);var r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r="".concat(r,"://")),this.setWalletConnectDeepLink(r,n);var a=encodeURIComponent(t);return"".concat(r,"wc?uri=").concat(a)},formatUniversalUrl:function(e,t,n){if(!W.isHttpUrl(e))return this.formatNativeUrl(e,t,n);var r=e;e.endsWith("/")&&(r=e.slice(0,-1)),this.setWalletConnectDeepLink(r,n);var a=encodeURIComponent(t);return"".concat(r,"/wc?uri=").concat(a)},wait:function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}),t)})))()},openHref:function(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink:function(e,t){localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))},setWalletConnectAndroidDeepLink:function(e){var t=e.split("?"),n=(0,s.Z)(t,1)[0];localStorage.setItem(W.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:n,name:"Android"}))},setWeb3ModalVersionInStorage:function(){typeof localStorage<"u"&&localStorage.setItem(W.W3M_VERSION,"2.3.7")},getWalletRouterData:function(){var e,t=null==(e=O.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t},getSwitchNetworkRouterData:function(){var e,t=null==(e=O.state.data)?void 0:e.SwitchNetwork;if(!t)throw new Error('Missing "SwitchNetwork" view data');return t}},x=y({userSessionId:"",events:[],connectedWalletId:void 0}),Z={state:x,subscribe:function(e){return C(x.events,(function(){return e(function(e,t){var n=h.get(e);n||console.warn("Please use proxy object");var r=(0,s.Z)(n,3),a=r[0],o=r[1];return(0,r[2])(a,o(),t)}(x.events[x.events.length-1]))}))},initialize:function(){typeof crypto<"u"&&(x.userSessionId=crypto.randomUUID())},setConnectedWalletId:function(e){x.connectedWalletId=e},click:function(e){var t={type:"CLICK",name:e.name,userSessionId:x.userSessionId,timestamp:Date.now(),data:e};x.events.push(t)},track:function(e){var t={type:"TRACK",name:e.name,userSessionId:x.userSessionId,timestamp:Date.now(),data:e};x.events.push(t)},view:function(e){var t={type:"VIEW",name:e.name,userSessionId:x.userSessionId,timestamp:Date.now(),data:e};x.events.push(t)}},S=y({selectedChain:void 0,chains:void 0,standaloneChains:void 0,standaloneUri:void 0,isStandalone:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1,isInjectedMobile:!1,walletConnectVersion:1}),A={state:S,subscribe:function(e){return C(S,(function(){return e(S)}))},setChains:function(e){S.chains=e},setStandaloneChains:function(e){S.standaloneChains=e},setStandaloneUri:function(e){S.standaloneUri=e},getSelectedChain:function(){var e=j.client().getNetwork().chain;return e&&(S.selectedChain=e),S.selectedChain},setSelectedChain:function(e){S.selectedChain=e},setIsStandalone:function(e){S.isStandalone=e},setIsCustomDesktop:function(e){S.isCustomDesktop=e},setIsCustomMobile:function(e){S.isCustomMobile=e},setIsDataLoaded:function(e){S.isDataLoaded=e},setIsUiLoaded:function(e){S.isUiLoaded=e},setWalletConnectVersion:function(e){S.walletConnectVersion=e},setIsInjectedMobile:function(e){S.isInjectedMobile=e}},L=y({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chainImages:void 0,tokenImages:void 0,tokenContracts:void 0,standaloneChains:void 0,enableStandaloneMode:!1,enableNetworkView:!1,enableAccountView:!0,enableExplorer:!0,defaultChain:void 0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),M={state:L,subscribe:function(e){return C(L,(function(){return e(L)}))},setConfig:function(e){var t,n,r,a;Z.initialize(),A.setStandaloneChains(e.standaloneChains),A.setIsStandalone(!(null==(t=e.standaloneChains)||!t.length)||!!e.enableStandaloneMode),A.setIsCustomMobile(!(null==(n=e.mobileWallets)||!n.length)),A.setIsCustomDesktop(!(null==(r=e.desktopWallets)||!r.length)),A.setWalletConnectVersion(null!=(a=e.walletConnectVersion)?a:1),A.state.isStandalone||(A.setChains(j.client().chains),A.setIsInjectedMobile(W.isMobile()&&j.client().isInjectedProviderInstalled())),e.defaultChain&&A.setSelectedChain(e.defaultChain),W.setWeb3ModalVersionInStorage(),Object.assign(L,e)}},P=y({address:void 0,profileName:void 0,profileAvatar:void 0,profileLoading:!1,balanceLoading:!1,balance:void 0,isConnected:!1}),N={state:P,subscribe:function(e){return C(P,(function(){return e(P)}))},getAccount:function(){var e=j.client().getAccount();P.address=e.address,P.isConnected=e.isConnected},fetchProfile:function(e,t){return(0,i.Z)((0,o.Z)().mark((function n(){var r,a,i,c,u,l,d;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,P.profileLoading=!0,a=null!==t&&void 0!==t?t:P.address,i=null==(r=A.state.chains)?void 0:r.find((function(e){return 1===e.id})),!a||!i){n.next=16;break}return n.next=6,Promise.all([j.client().fetchEnsName({address:a,chainId:1}),j.client().fetchEnsAvatar({address:a,chainId:1})]);case 6:if(c=n.sent,u=(0,s.Z)(c,2),l=u[0],d=u[1],n.t0=d,!n.t0){n.next=14;break}return n.next=14,e(d);case 14:P.profileName=l,P.profileAvatar=d;case 16:return n.prev=16,P.profileLoading=!1,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,,16,19]])})))()},fetchBalance:function(e){return(0,i.Z)((0,o.Z)().mark((function t(){var n,r,a,i,s,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=j.client().getNetwork(),r=n.chain,a=M.state.tokenContracts,r&&a&&(i=a[r.id]),P.balanceLoading=!0,!(s=null!==e&&void 0!==e?e:P.address)){t.next=9;break}return t.next=7,j.client().fetchBalance({address:s,token:i});case 7:c=t.sent,P.balance={amount:c.formatted,symbol:c.symbol};case 9:return t.prev=9,P.balanceLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,,9,12]])})))()},setAddress:function(e){P.address=e},setIsConnected:function(e){P.isConnected=e},resetBalance:function(){P.balance=void 0},resetAccount:function(){P.address=void 0,P.isConnected=!1,P.profileName=void 0,P.profileAvatar=void 0,P.balance=void 0}},U="https://explorer-api.walletconnect.com";function D(e,t){return R.apply(this,arguments)}function R(){return R=(0,i.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(t,U)).searchParams.append("projectId",M.state.projectId),Object.entries(n).forEach((function(e){var t=(0,s.Z)(e,2),n=t[0],a=t[1];a&&r.searchParams.append(n,String(a))})),e.next=5,fetch(r);case 5:return e.abrupt("return",e.sent.json());case 6:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var T=function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D("/w3m/v1/getDesktopListings",e));case 1:case"end":return t.stop()}}),t)})))()},V=function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D("/w3m/v1/getMobileListings",e));case 1:case"end":return t.stop()}}),t)})))()},_=function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D("/w3m/v1/getInjectedListings",e));case 1:case"end":return t.stop()}}),t)})))()},B=function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D("/w3m/v1/getAllListings",e));case 1:case"end":return t.stop()}}),t)})))()},z=function(e){return"".concat(U,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(M.state.projectId)},H=function(e){return"".concat(U,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(M.state.projectId)},K=Object.defineProperty,J=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,G=function(e,t,n){return t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Q=function(e,t){for(var n in t||(t={}))q.call(t,n)&&G(e,n,t[n]);if(J){var r,o=(0,a.Z)(J(t));try{for(o.s();!(r=o.n()).done;){n=r.value;F.call(t,n)&&G(e,n,t[n])}}catch(i){o.e(i)}finally{o.f()}}return e},X=W.isMobile(),Y=y({wallets:{listings:[],total:0,page:1},injectedWallets:[],search:{listings:[],total:0,page:1},recomendedWallets:[]}),$={state:Y,getRecomendedWallets:function(){return(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r,a,i,s,c,u,l,d,f,p,v,h,b;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=M.state,n=t.explorerRecommendedWalletIds,r=t.explorerExcludedWalletIds,"NONE"!==n&&("ALL"!==r||n)){e.next=3;break}return e.abrupt("return",Y.recomendedWallets);case 3:if(!W.isArray(n)){e.next=13;break}return a={recommendedIds:n.join(",")},e.next=7,B(a);case 7:i=e.sent,s=i.listings,(c=Object.values(s)).sort((function(e,t){return n.indexOf(e.id)-n.indexOf(t.id)})),Y.recomendedWallets=c,e.next=31;break;case 13:if(u=A.state,l=u.standaloneChains,d=u.walletConnectVersion,f=null===l||void 0===l?void 0:l.join(","),p=W.isArray(r),v={page:1,entries:W.RECOMMENDED_WALLET_AMOUNT,chains:f,version:d,excludedIds:p?r.join(","):void 0},!X){e.next=25;break}return e.next=22,V(v);case 22:e.t0=e.sent,e.next=28;break;case 25:return e.next=27,T(v);case 27:e.t0=e.sent;case 28:h=e.t0,b=h.listings,Y.recomendedWallets=Object.values(b);case 31:return e.abrupt("return",Y.recomendedWallets);case 32:case"end":return e.stop()}}),e)})))()},getWallets:function(e){return(0,i.Z)((0,o.Z)().mark((function t(){var n,a,i,s,c,u,l,d,f,p,v,h;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Q({},e),a=M.state,i=a.explorerRecommendedWalletIds,s=a.explorerExcludedWalletIds,c=Y.recomendedWallets,"ALL"!==s){t.next=3;break}return t.abrupt("return",Y.wallets);case 3:if(n.search||(c.length?n.excludedIds=c.map((function(e){return e.id})).join(","):W.isArray(i)&&(n.excludedIds=i.join(","))),W.isArray(s)&&(n.excludedIds=[n.excludedIds,s].filter(Boolean).join(",")),u=e.page,l=e.search,!X){t.next=12;break}return t.next=9,V(n);case 9:t.t0=t.sent,t.next=15;break;case 12:return t.next=14,T(n);case 14:t.t0=t.sent;case 15:return d=t.t0,f=d.listings,p=d.total,v=Object.values(f),h=l?"search":"wallets",t.abrupt("return",(Y[h]={listings:[].concat((0,r.Z)(Y[h].listings),v),total:p,page:null!==u&&void 0!==u?u:1},{listings:v,total:p}));case 21:case"end":return t.stop()}}),t)})))()},getInjectedWallets:function(){return(0,i.Z)((0,o.Z)().mark((function e(){var t,n,r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_({});case 2:return t=e.sent,n=t.listings,r=Object.values(n),e.abrupt("return",(Y.injectedWallets=r,Y.injectedWallets));case 6:case"end":return e.stop()}}),e)})))()},getWalletImageUrl:function(e){return z(e)},getAssetImageUrl:function(e){return H(e)},resetSearch:function(){Y.search={listings:[],total:0,page:1}}},ee=y({pairingUri:"",pairingError:!1}),te={state:ee,subscribe:function(e){return C(ee,(function(){return e(ee)}))},setPairingUri:function(e){ee.pairingUri=e},setPairingError:function(e){ee.pairingError=e}},ne=y({open:!1}),re={state:ne,subscribe:function(e){return C(ne,(function(){return e(ne)}))},open:function(e){return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var n=A.state,r=n.isStandalone,a=n.isUiLoaded,o=n.isDataLoaded,i=te.state.pairingUri,s=N.state.isConnected,c=M.state.enableNetworkView;if(r?(A.setStandaloneUri(null===e||void 0===e?void 0:e.uri),A.setStandaloneChains(null===e||void 0===e?void 0:e.standaloneChains),O.reset("ConnectWallet")):null!=e&&e.route?O.reset(e.route):s?O.reset("Account"):c?O.reset("SelectNetwork"):O.reset("ConnectWallet"),a&&o&&(r||i||s))ne.open=!0,t();else var u=setInterval((function(){var e=A.state,n=te.state;e.isUiLoaded&&e.isDataLoaded&&(e.isStandalone||n.pairingUri||s)&&(clearInterval(u),ne.open=!0,t())}),200)})));case 1:case"end":return t.stop()}}),t)})))()},close:function(){ne.open=!1}},ae=Object.defineProperty,oe=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ce=function(e,t,n){return t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n};var ue=y({themeMode:typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),le={state:ue,subscribe:function(e){return C(ue,(function(){return e(ue)}))},setThemeConfig:function(e){var t=e.themeMode,n=e.themeVariables;t&&(ue.themeMode=t),n&&(ue.themeVariables=function(e,t){for(var n in t||(t={}))ie.call(t,n)&&ce(e,n,t[n]);if(oe){var r,o=(0,a.Z)(oe(t));try{for(o.s();!(r=o.n()).done;)n=r.value,se.call(t,n)&&ce(e,n,t[n])}catch(i){o.e(i)}finally{o.f()}}return e}({},n))}},de=y({open:!1,message:"",variant:"success"}),fe={state:de,subscribe:function(e){return C(de,(function(){return e(de)}))},openToast:function(e,t){de.open=!0,de.message=e,de.variant=t},closeToast:function(){de.open=!1}};typeof window<"u"&&(window.Buffer||(window.Buffer=k.Buffer),window.global||(window.global=window),window.process||(window.process={env:{}}))},90774:function(e,t,n){n.r(t),n.d(t,{Web3Modal:function(){return h}});var r=n(74165),a=n(15861),o=n(15671),i=n(43144),s=n(37762),c=n(29042),u=Object.defineProperty,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},v=function(e,t){for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(l){var r,a=(0,s.Z)(l(t));try{for(a.s();!(r=a.n()).done;){n=r.value;f.call(t,n)&&p(e,n,t[n])}}catch(o){a.e(o)}finally{a.f()}}return e},h=function(){function e(t){(0,o.Z)(this,e),this.openModal=c.jb.open,this.closeModal=c.jb.close,this.subscribeModal=c.jb.subscribe,this.setTheme=c.Ic.setThemeConfig,c.Ic.setThemeConfig(t),c.t0.setConfig(v({enableStandaloneMode:!0},t)),this.initUi()}return(0,i.Z)(e,[{key:"initUi",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(typeof window<"u")){e.next=5;break}return e.next=3,n.e(782).then(n.bind(n,58782));case 3:t=document.createElement("w3m-modal"),document.body.insertAdjacentElement("beforeend",t),c.zb.setIsUiLoaded(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=774.34ca0ffd.chunk.js.map