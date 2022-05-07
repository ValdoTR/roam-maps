/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={910:(e,o,t)=>{t.r(o),t.d(o,{Properties:()=>r,VariableDescriptor:()=>s,bootstrapExtra:()=>Q,findLayerBoundaries:()=>m,findLayersBoundaries:()=>b,getLayersMap:()=>u,getVariables:()=>i,initDoors:()=>Z,initPropertiesTemplates:()=>q,initVariableActionLayer:()=>K,openConfig:()=>n});class r{constructor(e){this.properties=null!=e?e:[]}get(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.value));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,o){const t=this.get(e);if(void 0!==t){if(typeof t!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return t}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,o){const t=this.get(e);if(void 0===t)throw new Error('Property "'+e+'" is missing');if(typeof t!==o)throw new Error('Expected property "'+e+'" to have type "'+o+'"');return t}getType(e){const o=this.properties.filter((o=>o.name===e)).map((e=>e.type));if(o.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==o.length)return o[0]}}const a="https://unpkg.com/@workadventure/scripting-api-extra@1.3.2/dist";class s{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new r(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}function n(e){const o=e?"#"+e.join():"";WA.nav.openCoWebSite(a+"/configuration.html"+o)}async function i(e,o){const t=await WA.room.getTiledMap(),r=new Map;return l(t.layers,r,e,o),r}function l(e,o,t,r){for(const a of e)if("objectgroup"===a.type){for(const e of a.objects)if("variable"===e.type){if(t&&a.name!==t)continue;if(r&&!r.includes(e.name))continue;o.set(e.name,new s(e))}}else"group"===a.type&&l(a.layers,o,t,r)}let c;async function u(){return void 0===c&&(c=async function(){return function(e){const o=new Map;return p(e.layers,"",o),o}(await WA.room.getTiledMap())}()),c}function p(e,o,t){for(const r of e)"group"===r.type?p(r.layers,o+r.name+"/",t):(r.name=o+r.name,t.set(r.name,r))}function m(e){let o=1/0,t=1/0,r=0,a=0;const s=e.data;if("string"==typeof s)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let n=0;n<e.height;n++)for(let i=0;i<e.width;i++)0!==s[i+n*e.width]&&(o=Math.min(o,i),a=Math.max(a,i),t=Math.min(t,n),r=Math.max(r,n));return{top:t,left:o,right:a+1,bottom:r+1}}function b(e){let o=1/0,t=1/0,r=0,a=0;for(const s of e){const e=m(s);e.left<o&&(o=e.left),e.top<t&&(t=e.top),e.right>a&&(a=e.right),e.bottom>r&&(r=e.bottom)}return{top:t,left:o,right:a,bottom:r}}var h=Object.prototype.toString,d=Array.isArray||function(e){return"[object Array]"===h.call(e)};function A(e){return"function"==typeof e}function W(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(e,o){return null!=e&&"object"==typeof e&&o in e}var f=RegExp.prototype.test,v=/\S/;var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},L=/\s*/,k=/\s+/,w=/\s*=/,P=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;function N(e){this.string=e,this.tail=e,this.pos=0}function z(e,o){this.view=e,this.cache={".":this.view},this.parent=o}function D(){this.templateCache={_cache:{},set:function(e,o){this._cache[e]=o},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}N.prototype.eos=function(){return""===this.tail},N.prototype.scan=function(e){var o=this.tail.match(e);if(!o||0!==o.index)return"";var t=o[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t},N.prototype.scanUntil=function(e){var o,t=this.tail.search(e);switch(t){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=o.length,o},z.prototype.push=function(e){return new z(e,this)},z.prototype.lookup=function(e){var o,t,r,a=this.cache;if(a.hasOwnProperty(e))o=a[e];else{for(var s,n,i,l=this,c=!1;l;){if(e.indexOf(".")>0)for(s=l.view,n=e.split("."),i=0;null!=s&&i<n.length;)i===n.length-1&&(c=y(s,n[i])||(t=s,r=n[i],null!=t&&"object"!=typeof t&&t.hasOwnProperty&&t.hasOwnProperty(r))),s=s[n[i++]];else s=l.view[e],c=y(l.view,e);if(c){o=s;break}l=l.parent}a[e]=o}return A(o)&&(o=o.call(this.view)),o},D.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},D.prototype.parse=function(e,o){var t=this.templateCache,r=e+":"+(o||S.tags).join(":"),a=void 0!==t,s=a?t.get(r):void 0;return null==s&&(s=function(e,o){if(!e)return[];var t,r,a,s,n=!1,i=[],l=[],c=[],u=!1,p=!1,m="",b=0;function h(){if(u&&!p)for(;c.length;)delete l[c.pop()];else c=[];u=!1,p=!1}function A(e){if("string"==typeof e&&(e=e.split(k,2)),!d(e)||2!==e.length)throw new Error("Invalid tags: "+e);t=new RegExp(W(e[0])+"\\s*"),r=new RegExp("\\s*"+W(e[1])),a=new RegExp("\\s*"+W("}"+e[1]))}A(o||S.tags);for(var y,g,z,D,U,O,R=new N(e);!R.eos();){if(y=R.pos,z=R.scanUntil(t))for(var q=0,B=z.length;q<B;++q)s=D=z.charAt(q),function(e,o){return f.call(e,o)}(v,s)?(p=!0,n=!0,m+=" "):(c.push(l.length),m+=D),l.push(["text",D,y,y+1]),y+=1,"\n"===D&&(h(),m="",b=0,n=!1);if(!R.scan(t))break;if(u=!0,g=R.scan(E)||"name",R.scan(L),"="===g?(z=R.scanUntil(w),R.scan(w),R.scanUntil(r)):"{"===g?(z=R.scanUntil(a),R.scan(P),R.scanUntil(r),g="&"):z=R.scanUntil(r),!R.scan(r))throw new Error("Unclosed tag at "+R.pos);if(U=">"==g?[g,z,y,R.pos,m,b,n]:[g,z,y,R.pos],b++,l.push(U),"#"===g||"^"===g)i.push(U);else if("/"===g){if(!(O=i.pop()))throw new Error('Unopened section "'+z+'" at '+y);if(O[1]!==z)throw new Error('Unclosed section "'+O[1]+'" at '+y)}else"name"===g||"{"===g||"&"===g?p=!0:"="===g&&A(z)}if(h(),O=i.pop())throw new Error('Unclosed section "'+O[1]+'" at '+R.pos);return function(e){for(var o,t=[],r=t,a=[],s=0,n=e.length;s<n;++s)switch((o=e[s])[0]){case"#":case"^":r.push(o),a.push(o),r=o[4]=[];break;case"/":a.pop()[5]=o[2],r=a.length>0?a[a.length-1][4]:t;break;default:r.push(o)}return t}(function(e){for(var o,t,r=[],a=0,s=e.length;a<s;++a)(o=e[a])&&("text"===o[0]&&t&&"text"===t[0]?(t[1]+=o[1],t[3]=o[3]):(r.push(o),t=o));return r}(l))}(e,o),a&&t.set(r,s)),s},D.prototype.render=function(e,o,t,r){var a=this.getConfigTags(r),s=this.parse(e,a),n=o instanceof z?o:new z(o,void 0);return this.renderTokens(s,n,t,e,r)},D.prototype.renderTokens=function(e,o,t,r,a){for(var s,n,i,l="",c=0,u=e.length;c<u;++c)i=void 0,"#"===(n=(s=e[c])[0])?i=this.renderSection(s,o,t,r,a):"^"===n?i=this.renderInverted(s,o,t,r,a):">"===n?i=this.renderPartial(s,o,t,a):"&"===n?i=this.unescapedValue(s,o):"name"===n?i=this.escapedValue(s,o,a):"text"===n&&(i=this.rawValue(s)),void 0!==i&&(l+=i);return l},D.prototype.renderSection=function(e,o,t,r,a){var s=this,n="",i=o.lookup(e[1]);if(i){if(d(i))for(var l=0,c=i.length;l<c;++l)n+=this.renderTokens(e[4],o.push(i[l]),t,r,a);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)n+=this.renderTokens(e[4],o.push(i),t,r,a);else if(A(i)){if("string"!=typeof r)throw new Error("Cannot use higher-order sections without the original template");null!=(i=i.call(o.view,r.slice(e[3],e[5]),(function(e){return s.render(e,o,t,a)})))&&(n+=i)}else n+=this.renderTokens(e[4],o,t,r,a);return n}},D.prototype.renderInverted=function(e,o,t,r,a){var s=o.lookup(e[1]);if(!s||d(s)&&0===s.length)return this.renderTokens(e[4],o,t,r,a)},D.prototype.indentPartial=function(e,o,t){for(var r=o.replace(/[^ \t]/g,""),a=e.split("\n"),s=0;s<a.length;s++)a[s].length&&(s>0||!t)&&(a[s]=r+a[s]);return a.join("\n")},D.prototype.renderPartial=function(e,o,t,r){if(t){var a=this.getConfigTags(r),s=A(t)?t(e[1]):t[e[1]];if(null!=s){var n=e[6],i=e[5],l=e[4],c=s;0==i&&l&&(c=this.indentPartial(s,l,n));var u=this.parse(c,a);return this.renderTokens(u,o,t,c,r)}}},D.prototype.unescapedValue=function(e,o){var t=o.lookup(e[1]);if(null!=t)return t},D.prototype.escapedValue=function(e,o,t){var r=this.getConfigEscape(t)||S.escape,a=o.lookup(e[1]);if(null!=a)return"number"==typeof a&&r===S.escape?String(a):r(a)},D.prototype.rawValue=function(e){return e[1]},D.prototype.getConfigTags=function(e){return d(e)?e:e&&"object"==typeof e?e.tags:void 0},D.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!d(e)?e.escape:void 0};var S={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){U.templateCache=e},get templateCache(){return U.templateCache}},U=new D;S.clearCache=function(){return U.clearCache()},S.parse=function(e,o){return U.parse(e,o)},S.render=function(e,o,t,r){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(d(a=e)?"array":typeof a)+'" was given as the first argument for mustache#render(template, view, partials)');var a;return U.render(e,o,t,r)},S.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return g[e]}))},S.Scanner=N,S.Context=z,S.Writer=D;const O=S;class R{constructor(e,o){this.template=e,this.state=o,this.ast=O.parse(e)}getValue(){return void 0===this.value&&(this.value=O.render(this.template,this.state)),this.value}onChange(e){const o=[];for(const t of this.getUsedVariables().values())o.push(this.state.onVariableChange(t).subscribe((()=>{const o=O.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))})));return{unsubscribe:()=>{for(const e of o)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,o){for(const t of e){const e=t[0],r=t[1],a=t[4];["name","&","#","^"].includes(e)&&o.add(r),void 0!==a&&"string"!=typeof a&&this.recursiveGetUsedVariables(a,o)}}}async function q(){var e;const o=await u();for(const[t,r]of o.entries()){const o=null!==(e=r.properties)&&void 0!==e?e:[];for(const e of o){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const o=new R(e.value,WA.state);if(o.isPureString())continue;const r=o.getValue();B(t,e.name,r),o.onChange((o=>{B(t,e.name,o)}))}}}function B(e,o,t){WA.room.setProperty(e,o,t),"visible"===o&&(t?WA.room.showLayer(e):WA.room.hideLayer(e))}let C,x,V=0,F=0;function T(e){if(WA.state[e.name]){let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.showLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.hideLayer(e)}else{let o=e.properties.mustGetString("openLayer");for(const e of o.split("\n"))WA.room.hideLayer(e);o=e.properties.mustGetString("closeLayer");for(const e of o.split("\n"))WA.room.showLayer(e)}}function M(e){return e.map((e=>C.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function j(e){const o=b(M(e)),t=32*((o.right-o.left)/2+o.left),r=32*((o.bottom-o.top)/2+o.top);return Math.sqrt(Math.pow(V-t,2)+Math.pow(F-r,2))}function G(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const o=e.properties.getString("openSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=j(e.properties.mustGetString("openLayer").split("\n"));if(o>t)return;r=1-o/t}o&&WA.sound.loadSound(o).play({volume:r})}(e):function(e){const o=e.properties.getString("closeSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=j(e.properties.mustGetString("closeLayer").split("\n"));if(o>t)return;r=1-o/t}o&&WA.sound.loadSound(o).play({volume:r})}(e),T(e)})),T(e)}function I(e,o,t,r){const a=e.name;let s,n,i=!1;const l=t.getString("tag");let c=!0;l&&!WA.player.tags.includes(l)&&(c=!1);const u=!!l;function p(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=t.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[o.name]=!1,m()}})}function m(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=t.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[o.name]=!0,p()}})}function h(){n&&(WA.room.website.delete(n.name),n=void 0)}WA.room.onEnterLayer(a).subscribe((()=>{i=!0,t.getBoolean("autoOpen")&&c?WA.state[o.name]=!0:WA.state[o.name]||(!u||c)&&u||!t.getString("code")&&!t.getString("codeVariable")?c&&(WA.state[o.name]?p():m()):function(e){const t=b(M(o.properties.mustGetString("closeLayer").split("\n")));n=WA.room.website.create({name:"doorKeypad"+e,url:r+"/keypad.html#"+encodeURIComponent(e),position:{x:32*t.right,y:32*t.top,width:96,height:128},allowApi:!0})}(a)})),WA.room.onLeaveLayer(a).subscribe((()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[o.name]=!1),s&&s.remove(),h()})),WA.state.onVariableChange(o.name).subscribe((()=>{i&&(t.getBoolean("autoClose")||!0!==WA.state[o.name]||p(),n&&!0===WA.state[o.name]&&h(),t.getBoolean("autoOpen")||!1!==WA.state[o.name]||m())}))}function _(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const o=e.properties.mustGetString("bellSound"),t=e.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(e.x-V,2)+Math.pow(e.y-F,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(o).play({volume:r})}(e)}))}function $(e,o,t){let r;const a=o.getString("bellPopup");WA.room.onEnterLayer(t).subscribe((()=>{var t;a?r=WA.ui.openPopup(a,"",[{label:null!==(t=o.getString("bellButtonText"))&&void 0!==t?t:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveLayer(t).subscribe((()=>{r&&(r.close(),r=void 0)}))}async function Z(e){e=null!=e?e:a;const o=await i();C=await u();for(const e of o.values())e.properties.get("door")&&G(e),e.properties.get("bell")&&_(e);for(const t of C.values()){const a=new r(t.properties),s=a.getString("doorVariable");if(s&&"tilelayer"===t.type){const r=o.get(s);if(void 0===r)throw new Error('Cannot find variable "'+s+'" referred in the "doorVariable" property of layer "'+t.name+'"');I(t,r,a,e)}const n=a.getString("bellVariable");n&&$(n,a,t.name)}WA.player.onPlayerMove((e=>{V=e.x,F=e.y}))}function K(e,o){const t=e.getString("bindVariable");t&&function(e,o,t,r,a,s){s&&!WA.player.tags.includes(s)||(void 0!==t&&WA.room.onEnterLayer(o).subscribe((()=>{a||(WA.state[e]=t)})),void 0!==r&&WA.room.onLeaveLayer(o).subscribe((()=>{WA.state[e]=r})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}function X(e,o,t){let r;const a=t.getString("openConfigAdminTag");let s=!0;function i(){WA.nav.closeCoWebSite()}a&&!WA.player.tags.includes(a)&&(s=!1),WA.room.onEnterLayer(o).subscribe((()=>{const o=t.getString("openConfigTrigger");var a;s&&(o&&"onaction"===o?(r&&r.remove(),r=WA.ui.displayActionMessage({message:null!==(a=t.getString("openConfigTriggerMessage"))&&void 0!==a?a:"Press SPACE or touch here to configure",callback:()=>n(e)})):n(e))})),WA.room.onLeaveLayer(o).subscribe((()=>{r?(r.remove(),i()):i()}))}const H=[{lowerBound:0,uppperBound:.5,config:{width:250,height:390,scale:1}},{lowerBound:.5,uppperBound:.8,config:{width:224,height:350,scale:.9}},{lowerBound:.8,uppperBound:1.25,config:{width:132,height:211,scale:.53}},{lowerBound:1.25,uppperBound:2.28,config:{width:64,height:99,scale:.25}},{lowerBound:1.25,config:{width:39,height:63,scale:.16}}],J=[{lowerBound:0,uppperBound:1,config:{width:427,height:270,scale:1}},{lowerBound:1,uppperBound:1.9,config:{width:300,height:188,scale:.7}},{lowerBound:1.9,uppperBound:3.5,config:{width:150,height:94,scale:.35}},{lowerBound:3.5,uppperBound:5,config:{width:93,height:58,scale:.21}},{lowerBound:4,config:{width:75,height:46,scale:.17}}];function Q(){return WA.onInit().then((()=>{Z().catch((e=>console.error(e))),async function(){const e=await u();for(const o of e.values())K(new r(o.properties),o.name)}().catch((e=>console.error(e))),async function(e){const o=await WA.room.getTiledMap();e=null!=e?e:a,x=await u();const t=o.layers.find((e=>"configuration"===e.name));if(t){const o=new r(t.properties).getString("tag");o&&!WA.player.tags.includes(o)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of x.values()){const o=new r(e.properties),t=o.getString("openConfig");t&&"tilelayer"===e.type&&X(t.split(","),e.name,o)}}}().catch((e=>console.error(e))),q().catch((e=>console.error(e))),async function(){var e;const o=WA.player.state.tutorialDone,t=/Mobi|Android/i.test(navigator.userAgent),r=await WA.room.getTiledMap(),s=await(null===(e=r.properties)||void 0===e?void 0:e.find((e=>"tutorial"===e.name))),n=s&&s.value;if(!o&&n){!function(e){let o={allow:"",name:"tutorial",url:a+"/tutorial.html",position:{height:224,width:407,x:16,y:-112},visible:!0,allowApi:!0,origin:"player",scale:.9};e&&(o={...o,position:{x:32,y:-225,height:390,width:250},scale:1}),WA.room.website.create(o)}(t);let e,o=await WA.player.getPosition();const r=await WA.room.website.get("tutorial"),s=()=>{const t=o.x+r.x+r.width>e.x+e.width,a=o.x+r.x<e.x,s=o.y+r.y+r.height>e.y+e.height,n=o.y+r.y<e.y;t?r.x=-r.width-24:a&&(r.x=24),s?r.y=-r.height:n&&(r.y=16)},n=e=>{r.width=e.width,r.height=e.height,r.scale=e.scale},i=e=>{const o=(t?H:J).filter((o=>{if(o.lowerBound&&o.uppperBound)return o.lowerBound<e&&e<=o.uppperBound;if(o.lowerBound&&!o.uppperBound)return o.lowerBound<e;if(!o.lowerBound&&o.uppperBound)return e<=o.uppperBound;throw new Error(`Zoom level of: ${e} could not fit in any of the desktopConfig's ranges.`)}));n(o[0].config)},l=()=>{if(void 0===e)return;const o=e.zoom;i(o),s()};WA.player.onPlayerMove((e=>{o=e,l()})),WA.camera.onCameraUpdate().subscribe((o=>{e=o,l()})),WA.player.state.tutorialDone=!0}}().catch((e=>console.error(e)))})).catch((e=>console.error(e)))}}},o={};function t(r){var a=o[r];if(void 0!==a)return a.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=t(910);let o;function r(e,o=!0){o?WA.nav.openCoWebSite(e):WA.nav.openTab(e),a()}function a(){void 0!==o&&(o.close(),o=void 0)}console.log("Script started successfully"),WA.onInit().then((()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.onEnterLayer("zones/bibliotheque/1").subscribe((()=>{const e=WA.state.bibliotheque1Description,t=WA.state.bibliotheque1URL,s=WA.state.bibliotheque1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque1Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/1").subscribe(a),WA.room.onEnterLayer("zones/bibliotheque/2").subscribe((()=>{const e=WA.state.bibliotheque2Description,t=WA.state.bibliotheque2URL,s=WA.state.bibliotheque2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque2Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/2").subscribe(a),WA.room.onEnterLayer("zones/bibliotheque/3").subscribe((()=>{const e=WA.state.bibliotheque3Description,t=WA.state.bibliotheque3URL,s=WA.state.bibliotheque3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque3Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/3").subscribe(a),WA.room.onEnterLayer("zones/bibliotheque/4").subscribe((()=>{const e=WA.state.bibliotheque4Description,t=WA.state.bibliotheque4URL,s=WA.state.bibliotheque4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque4Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/4").subscribe(a),WA.room.onEnterLayer("zones/bibliotheque/5").subscribe((()=>{const e=WA.state.bibliotheque5Description,t=WA.state.bibliotheque5URL,s=WA.state.bibliotheque5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque5Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/5").subscribe(a),WA.room.onEnterLayer("zones/bibliotheque/6").subscribe((()=>{const e=WA.state.bibliotheque6Description,t=WA.state.bibliotheque6URL,s=WA.state.bibliotheque6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("bibliotheque6Popup",e,n)})),WA.room.onLeaveLayer("zones/bibliotheque/6").subscribe(a),WA.room.onEnterLayer("zones/videos/1").subscribe((()=>{const e=WA.state.videos1Description,t=WA.state.videos1URL,s=WA.state.videos1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos1Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/1").subscribe(a),WA.room.onEnterLayer("zones/videos/2").subscribe((()=>{const e=WA.state.videos2Description,t=WA.state.videos2URL,s=WA.state.videos2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos2Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/2").subscribe(a),WA.room.onEnterLayer("zones/videos/3").subscribe((()=>{const e=WA.state.videos3Description,t=WA.state.videos3URL,s=WA.state.videos3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos3Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/3").subscribe(a),WA.room.onEnterLayer("zones/videos/4").subscribe((()=>{const e=WA.state.videos4Description,t=WA.state.videos4URL,s=WA.state.videos4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos4Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/4").subscribe(a),WA.room.onEnterLayer("zones/videos/5").subscribe((()=>{const e=WA.state.videos5Description,t=WA.state.videos5URL,s=WA.state.videos5Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos5Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/5").subscribe(a),WA.room.onEnterLayer("zones/videos/6").subscribe((()=>{const e=WA.state.videos6Description,t=WA.state.videos6URL,s=WA.state.videos6Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("videos6Popup",e,n)})),WA.room.onLeaveLayer("zones/videos/6").subscribe(a),WA.room.onEnterLayer("zones/metaverse/1").subscribe((()=>{const e=WA.state.metaverse1Description,t=WA.state.metaverse1URL,s=WA.state.metaverse1Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("metaverse1Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/1").subscribe(a),WA.room.onEnterLayer("zones/metaverse/2").subscribe((()=>{const e=WA.state.metaverse2Description,t=WA.state.metaverse2URL,s=WA.state.metaverse2Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("metaverse2Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/2").subscribe(a),WA.room.onEnterLayer("zones/metaverse/3").subscribe((()=>{const e=WA.state.metaverse3Description,t=WA.state.metaverse3URL,s=WA.state.metaverse3Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("metaverse3Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/3").subscribe(a),WA.room.onEnterLayer("zones/metaverse/4").subscribe((()=>{const e=WA.state.metaverse4Description,t=WA.state.metaverse4URL,s=WA.state.metaverse4Embed;let n=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&n.push({label:"Ouvrir",className:"primary",callback:()=>r(t,s)}),o=WA.ui.openPopup("metaverse4Popup",e,n)})),WA.room.onLeaveLayer("zones/metaverse/4").subscribe(a),WA.room.onEnterLayer("zones/discord").subscribe((()=>{o=WA.ui.openPopup("discordPopup","Rejoignez la communauté WorkAdventure sur Discord! \nAide, conseils, discussions, avant-premières...",[{label:"Me voilà!",className:"primary",callback:()=>r("https://discord.gg/G6Xh9ZM9aR",!1)}])})),WA.room.onLeaveLayer("zones/discord").subscribe(a),WA.room.onEnterLayer("zones/marketing/video").subscribe((()=>{const e=WA.state.marketingVideoDescription,t=WA.state.marketingVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("marketingPopup",e,s)})),WA.room.onLeaveLayer("zones/marketing/video").subscribe(a),WA.room.onEnterLayer("zones/marketing/doc1").subscribe((()=>{const e=WA.state.marketingDoc1Description,t=WA.state.marketingDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("marketingPopup",e,s)})),WA.room.onLeaveLayer("zones/marketing/doc1").subscribe(a),WA.room.onEnterLayer("zones/marketing/doc2").subscribe((()=>{const e=WA.state.marketingDoc2Description,t=WA.state.marketingDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("marketingPopup",e,s)})),WA.room.onLeaveLayer("zones/marketing/doc2").subscribe(a),WA.room.onEnterLayer("zones/informatique/video").subscribe((()=>{const e=WA.state.informatiqueVideoDescription,t=WA.state.informatiqueVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("informatiquePopup",e,s)})),WA.room.onLeaveLayer("zones/informatique/video").subscribe(a),WA.room.onEnterLayer("zones/informatique/doc1").subscribe((()=>{const e=WA.state.informatiqueDoc1Description,t=WA.state.informatiqueDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("informatiquePopup",e,s)})),WA.room.onLeaveLayer("zones/informatique/doc1").subscribe(a),WA.room.onEnterLayer("zones/informatique/doc2").subscribe((()=>{const e=WA.state.informatiqueDoc2Description,t=WA.state.informatiqueDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("informatiquePopup",e,s)})),WA.room.onLeaveLayer("zones/informatique/doc2").subscribe(a),WA.room.onEnterLayer("zones/rh/video").subscribe((()=>{const e=WA.state.rhVideoDescription,t=WA.state.rhVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("rhPopup",e,s)})),WA.room.onLeaveLayer("zones/rh/video").subscribe(a),WA.room.onEnterLayer("zones/rh/doc1").subscribe((()=>{const e=WA.state.rhDoc1Description,t=WA.state.rhDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("rhPopup",e,s)})),WA.room.onLeaveLayer("zones/rh/doc1").subscribe(a),WA.room.onEnterLayer("zones/rh/doc2").subscribe((()=>{const e=WA.state.rhDoc2Description,t=WA.state.rhDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("rhPopup",e,s)})),WA.room.onLeaveLayer("zones/rh/doc2").subscribe(a),WA.room.onEnterLayer("zones/finance/video").subscribe((()=>{const e=WA.state.financeVideoDescription,t=WA.state.financeVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("financePopup",e,s)})),WA.room.onLeaveLayer("zones/finance/video").subscribe(a),WA.room.onEnterLayer("zones/finance/doc1").subscribe((()=>{const e=WA.state.financeDoc1Description,t=WA.state.financeDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("financePopup",e,s)})),WA.room.onLeaveLayer("zones/finance/doc1").subscribe(a),WA.room.onEnterLayer("zones/finance/doc2").subscribe((()=>{const e=WA.state.financeDoc2Description,t=WA.state.financeDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("financePopup",e,s)})),WA.room.onLeaveLayer("zones/finance/doc2").subscribe(a),WA.room.onEnterLayer("zones/mutualisme/video").subscribe((()=>{const e=WA.state.mutualismeVideoDescription,t=WA.state.mutualismeVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("mutualismePopup",e,s)})),WA.room.onLeaveLayer("zones/mutualisme/video").subscribe(a),WA.room.onEnterLayer("zones/mutualisme/doc1").subscribe((()=>{const e=WA.state.mutualismeDoc1Description,t=WA.state.mutualismeDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("mutualismePopup",e,s)})),WA.room.onLeaveLayer("zones/mutualisme/doc1").subscribe(a),WA.room.onEnterLayer("zones/mutualisme/doc2").subscribe((()=>{const e=WA.state.mutualismeDoc2Description,t=WA.state.mutualismeDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("mutualismePopup",e,s)})),WA.room.onLeaveLayer("zones/mutualisme/doc2").subscribe(a),WA.room.onEnterLayer("zones/client/video").subscribe((()=>{const e=WA.state.clientVideoDescription,t=WA.state.clientVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("clientPopup",e,s)})),WA.room.onLeaveLayer("zones/client/video").subscribe(a),WA.room.onEnterLayer("zones/client/doc1").subscribe((()=>{const e=WA.state.clientDoc1Description,t=WA.state.clientDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("clientPopup",e,s)})),WA.room.onLeaveLayer("zones/client/doc1").subscribe(a),WA.room.onEnterLayer("zones/client/doc2").subscribe((()=>{const e=WA.state.clientDoc2Description,t=WA.state.clientDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("clientPopup",e,s)})),WA.room.onLeaveLayer("zones/client/doc2").subscribe(a),WA.room.onEnterLayer("zones/entreprise/video").subscribe((()=>{const e=WA.state.entrepriseVideoDescription,t=WA.state.entrepriseVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("entreprisePopup",e,s)})),WA.room.onLeaveLayer("zones/entreprise/video").subscribe(a),WA.room.onEnterLayer("zones/entreprise/doc1").subscribe((()=>{const e=WA.state.entrepriseDoc1Description,t=WA.state.entrepriseDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("entreprisePopup",e,s)})),WA.room.onLeaveLayer("zones/entreprise/doc1").subscribe(a),WA.room.onEnterLayer("zones/entreprise/doc2").subscribe((()=>{const e=WA.state.entrepriseDoc2Description,t=WA.state.entrepriseDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("entreprisePopup",e,s)})),WA.room.onLeaveLayer("zones/entreprise/doc2").subscribe(a),WA.room.onEnterLayer("zones/distribution/video").subscribe((()=>{const e=WA.state.distributionVideoDescription,t=WA.state.distributionVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("distributionPopup",e,s)})),WA.room.onLeaveLayer("zones/distribution/video").subscribe(a),WA.room.onEnterLayer("zones/distribution/doc1").subscribe((()=>{const e=WA.state.distributionDoc1Description,t=WA.state.distributionDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("distributionPopup",e,s)})),WA.room.onLeaveLayer("zones/distribution/doc1").subscribe(a),WA.room.onEnterLayer("zones/distribution/doc2").subscribe((()=>{const e=WA.state.distributionDoc2Description,t=WA.state.distributionDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("distributionPopup",e,s)})),WA.room.onLeaveLayer("zones/distribution/doc2").subscribe(a),WA.room.onEnterLayer("zones/conformite/video").subscribe((()=>{const e=WA.state.conformiteVideoDescription,t=WA.state.conformiteVideoURL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("conformitePopup",e,s)})),WA.room.onLeaveLayer("zones/conformite/video").subscribe(a),WA.room.onEnterLayer("zones/conformite/doc1").subscribe((()=>{const e=WA.state.conformiteDoc1Description,t=WA.state.conformiteDoc1URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("conformitePopup",e,s)})),WA.room.onLeaveLayer("zones/conformite/doc1").subscribe(a),WA.room.onEnterLayer("zones/conformite/doc2").subscribe((()=>{const e=WA.state.conformiteDoc2Description,t=WA.state.conformiteDoc2URL;let s=[{label:"Fermer",className:"normal",callback:()=>a()}];t&&s.push({label:"Ouvrir",className:"primary",callback:()=>r(t,!0)}),o=WA.ui.openPopup("conformitePopup",e,s)})),WA.room.onLeaveLayer("zones/conformite/doc2").subscribe(a),(0,e.bootstrapExtra)().then((()=>{console.log("Scripting API Extra ready")})).catch((e=>console.error(e)))})).catch((e=>console.error(e)))})()})();
//# sourceMappingURL=script.js.map