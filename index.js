!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){!function(n){var e,o={},i={16:!1,18:!1,17:!1,91:!1},r="all",s={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},u={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},a=function(t){return u[t]||t.toUpperCase().charCodeAt(0)},c=[];for(e=1;e<20;e++)u["f"+e]=111+e;function f(t,n){for(var e=t.length;e--;)if(t[e]===n)return e;return-1}function l(t,n){if(t.length!=n.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}var h={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function p(t){for(e in i)i[e]=t[h[e]]}function d(t,n,e){var i,r;i=y(t),void 0===e&&(e=n,n="all");for(var s=0;s<i.length;s++)r=[],(t=i[s].split("+")).length>1&&(r=m(t),t=[t[t.length-1]]),t=t[0],(t=a(t))in o||(o[t]=[]),o[t].push({shortcut:i[s],scope:n,method:e,key:i[s],mods:r})}for(e in s)d[e]=!1;function g(){return r||"all"}function y(t){var n;return""==(n=(t=t.replace(/\s/g,"")).split(","))[n.length-1]&&(n[n.length-2]+=","),n}function m(t){for(var n=t.slice(0,t.length-1),e=0;e<n.length;e++)n[e]=s[n[e]];return n}function v(t,n,e){t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent&&t.attachEvent("on"+n,function(){e(window.event)})}v(document,"keydown",function(t){!function(t){var n,e,r,u,a,l;if(n=t.keyCode,-1==f(c,n)&&c.push(n),93!=n&&224!=n||(n=91),n in i)for(r in i[n]=!0,s)s[r]==n&&(d[r]=!0);else if(p(t),d.filter.call(this,t)&&n in o)for(l=g(),u=0;u<o[n].length;u++)if((e=o[n][u]).scope==l||"all"==e.scope){for(r in a=e.mods.length>0,i)(!i[r]&&f(e.mods,+r)>-1||i[r]&&-1==f(e.mods,+r))&&(a=!1);(0!=e.mods.length||i[16]||i[18]||i[17]||i[91])&&!a||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}(t)}),v(document,"keyup",function(t){var n,e=t.keyCode,o=f(c,e);if(o>=0&&c.splice(o,1),93!=e&&224!=e||(e=91),e in i)for(n in i[e]=!1,s)s[n]==e&&(d[n]=!1)}),v(window,"focus",function(){for(e in i)i[e]=!1;for(e in s)d[e]=!1});var k=n.key;n.key=d,n.key.setScope=function(t){r=t||"all"},n.key.getScope=g,n.key.deleteScope=function(t){var n,e,i;for(n in o)for(e=o[n],i=0;i<e.length;)e[i].scope===t?e.splice(i,1):i++},n.key.filter=function(t){var n=(t.target||t.srcElement).tagName;return!("INPUT"==n||"SELECT"==n||"TEXTAREA"==n)},n.key.isPressed=function(t){return"string"==typeof t&&(t=a(t)),-1!=f(c,t)},n.key.getPressedKeyCodes=function(){return c.slice(0)},n.key.noConflict=function(){var t=n.key;return n.key=k,t},n.key.unbind=function(t,n){var e,i,r,s,u,c=[];for(e=y(t),s=0;s<e.length;s++){if((i=e[s].split("+")).length>1&&(c=m(i),t=i[i.length-1]),t=a(t),void 0===n&&(n=g()),!o[t])return;for(r=0;r<o[t].length;r++)(u=o[t][r]).scope===n&&l(u.mods,c)&&(o[t][r]={})}},t.exports=d}(this)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(0),i=/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/,r=function(){function t(t){for(var n in t)this[n]=t[n]}return t.prototype.getFullState=function(){return this},t.prototype.set=function(t){for(var n in t)this[n]=t[n]},t}(),s=function(){function t(t,n,e,o){this.pluginName=t,this.domains=n,this.shortcuts=e,this.pluginState=new r(o),this.init()}return t.prototype.init=function(){var t=this;chrome.runtime.onMessage.addListener(function(n,e,i){if(n.loadShortcuts){o.filter=function(t){return!0};for(var r=function(n){o(n.keys.join(", "),function(e,o){n.action(e,t.pluginState),chrome.runtime.sendMessage({logEvent:!0,eventCategory:"shortcut-triggered",eventAction:t.pluginName,eventLabel:n.keys.join(", ")})})},s=0,u=t.shortcuts;s<u.length;s++){r(u[s])}}})},t.prototype.getShortcutsMDS=function(){return this.shortcuts.map(function(t){var n=t.keys.map(function(t){return{default:[t]}});return{name:t.name,keys:n}})},t.prototype.listShortcuts=function(){return this.shortcuts.map(function(t){return{name:t.name,keys:t.keys}})},t}();n.Plugin=s;var u=function(){function t(){this.shortcuts={},this.state={},this.domains=[]}return t.prototype.registerShortcut=function(t,n,e){if(!t)throw"Must include a name.";"string"==typeof n&&(n=[n]);var o={keys:n,action:e};this.validateConfig(o),this.shortcuts[t]=o},t.prototype.setPluginName=function(t){this.pluginName=t},t.prototype.addDomainName=function(t){if(!i.test(t))throw"Not a valid domain";this.domains.push(t)},t.prototype.validateConfig=function(t){if(t.keys.constructor!==Array)throw"Invalid or missing keys";if("function"!=typeof t.action)throw"Invalid or missing action";return!0},t.prototype.setInitialState=function(t){this.state=t},t.prototype.build=function(){if(!this.pluginName)throw"Plugin name is missing";if(0===this.domains.length)throw"Domain name is missing for plugin: "+this.pluginName;if(0===Object.keys(this.shortcuts).length)throw"You need at least one shortcut for a plugin.";var t=[];for(var n in this.shortcuts)t.push({name:n,keys:this.shortcuts[n].keys,action:this.shortcuts[n].action});return new s(this.pluginName,this.domains,t,this.state)},t}();n.PluginBuilder=u}]);