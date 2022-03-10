/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t,i,n=function(){return(n=Object.assign||function(t){for(var i,n=1,e=arguments.length;n<e;n++)for(var o in i=arguments[n])Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);return t}).apply(this,arguments)},e=function(){function t(t){this.options=t,this.listeners={}}return t.prototype.on=function(t,i){var n=this.listeners[t]||[];this.listeners[t]=n.concat([i])},t.prototype.triggerEvent=function(t,i){var n=this;(this.listeners[t]||[]).forEach((function(t){return t({target:n,event:i})}))},t}();(i=t||(t={}))[i.Add=0]="Add",i[i.Remove=1]="Remove";var o,s,a=function(){function i(){this.notifications=[]}return i.prototype.push=function(i){this.notifications.push(i),this.updateFn(i,t.Add,this.notifications)},i.prototype.splice=function(i,n){var e=this.notifications.splice(i,n)[0];return this.updateFn(e,t.Remove,this.notifications),e},i.prototype.indexOf=function(t){return this.notifications.indexOf(t)},i.prototype.onUpdate=function(t){this.updateFn=t},i}();(s=o||(o={})).Dismiss="dismiss",s.Click="click";var r={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},c=function(){function i(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),i=this._createHTMLElement({tagName:"div",className:"notyf"});t.appendChild(i),document.body.appendChild(t),this.container=i,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return i.prototype.on=function(t,i){var e;this.events=n(n({},this.events),((e={})[t]=i,e))},i.prototype.update=function(i,n){n===t.Add?this.addNotification(i):n===t.Remove&&this.removeNotification(i)},i.prototype.removeNotification=function(t){var i,n,e=this,o=this._popRenderedNotification(t);o&&((i=o.node).classList.add("notyf__toast--disappear"),i.addEventListener(this.animationEndEventName,n=function(t){t.target===i&&(i.removeEventListener(e.animationEndEventName,n),e.container.removeChild(i))}))},i.prototype.addNotification=function(t){var i=this._renderNotification(t);this.notifications.push({notification:t,node:i}),this._announce(t.options.message||"Notification")},i.prototype._renderNotification=function(t){var i,n=this._buildNotificationCard(t),e=t.options.className;return e&&(i=n.classList).add.apply(i,e.split(" ")),this.container.appendChild(n),n},i.prototype._popRenderedNotification=function(t){for(var i=-1,n=0;n<this.notifications.length&&i<0;n++)this.notifications[n].notification===t&&(i=n);if(-1!==i)return this.notifications.splice(i,1)[0]},i.prototype.getXPosition=function(t){var i;return(null===(i=null==t?void 0:t.position)||void 0===i?void 0:i.x)||"right"},i.prototype.getYPosition=function(t){var i;return(null===(i=null==t?void 0:t.position)||void 0===i?void 0:i.y)||"bottom"},i.prototype.adjustContainerAlignment=function(t){var i=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],e=this.container.style;e.setProperty("justify-content",n),e.setProperty("align-items",i)},i.prototype._buildNotificationCard=function(t){var i=this,n=t.options,e=n.icon;this.adjustContainerAlignment(n);var s=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),a=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),r=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),c=this._createHTMLElement({tagName:"div",className:"notyf__message"});c.innerHTML=n.message||"";var p=n.background||n.backgroundColor;if(e){var d=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if(("string"==typeof e||e instanceof String)&&(d.innerHTML=new String(e).valueOf()),"object"==typeof e){var l=e.tagName,u=void 0===l?"i":l,f=e.className,h=e.text,m=e.color,v=void 0===m?p:m,y=this._createHTMLElement({tagName:u,className:f,text:h});v&&(y.style.color=v),d.appendChild(y)}r.appendChild(d)}if(r.appendChild(c),s.appendChild(r),p&&(n.ripple?(a.style.background=p,s.appendChild(a)):s.style.background=p),n.dismissible){var _=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),g=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});_.appendChild(g),r.appendChild(_),s.classList.add("notyf__toast--dismissible"),g.addEventListener("click",(function(n){var e,s;null===(s=(e=i.events)[o.Dismiss])||void 0===s||s.call(e,{target:t,event:n}),n.stopPropagation()}))}s.addEventListener("click",(function(n){var e,s;return null===(s=(e=i.events)[o.Click])||void 0===s?void 0:s.call(e,{target:t,event:n})}));var N="top"===this.getYPosition(n)?"upper":"lower";return s.classList.add("notyf__toast--"+N),s},i.prototype._createHTMLElement=function(t){var i=t.tagName,n=t.className,e=t.text,o=document.createElement(i);return n&&(o.className=n),o.textContent=e||null,o},i.prototype._createA11yContainer=function(){var t=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},i.prototype._announce=function(t){var i=this;this.a11yContainer.textContent="",setTimeout((function(){i.a11yContainer.textContent=t}),100)},i.prototype._getAnimationEndEventName=function(){var t,i=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t];return"animationend"},i}(),p=function(){function t(t){var i=this;this.dismiss=this._removeNotification,this.notifications=new a,this.view=new c;var e=this.registerTypes(t);this.options=n(n({},r),t),this.options.types=e,this.notifications.onUpdate((function(t,n){return i.view.update(t,n)})),this.view.on(o.Dismiss,(function(t){var n=t.target,e=t.event;i._removeNotification(n),n.triggerEvent(o.Dismiss,e)})),this.view.on(o.Click,(function(t){var i=t.target,n=t.event;return i.triggerEvent(o.Click,n)}))}return t.prototype.error=function(t){var i=this.normalizeOptions("error",t);return this.open(i)},t.prototype.success=function(t){var i=this.normalizeOptions("success",t);return this.open(i)},t.prototype.open=function(t){var i=this.options.types.find((function(i){return i.type===t.type}))||{},o=n(n({},i),t);this.assignProps(["ripple","position","dismissible"],o);var s=new e(o);return this._pushNotification(s),s},t.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},t.prototype.assignProps=function(t,i){var n=this;t.forEach((function(t){i[t]=null==i[t]?n.options[t]:i[t]}))},t.prototype._pushNotification=function(t){var i=this;this.notifications.push(t);var n=void 0!==t.options.duration?t.options.duration:this.options.duration;n&&setTimeout((function(){return i._removeNotification(t)}),n)},t.prototype._removeNotification=function(t){var i=this.notifications.indexOf(t);-1!==i&&this.notifications.splice(i,1)},t.prototype.normalizeOptions=function(t,i){var e={type:t};return"string"==typeof i?e.message=i:"object"==typeof i&&(e=n(n({},e),i)),e},t.prototype.registerTypes=function(t){var i=(t&&t.types||[]).slice();return r.types.map((function(t){var e=-1;i.forEach((function(i,n){i.type===t.type&&(e=n)}));var o=-1!==e?i.splice(e,1)[0]:{};return n(n({},t),o)})).concat(i)},t}();export{p as N};
