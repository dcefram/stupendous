/* IE Polyfills */

if(Function.prototype.bind||(Function.prototype.bind=function(e){"use strict";if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),r=this,n=function(){},o=function(){return r.apply(this instanceof n&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,o.prototype=new n,o}),function(){"use strict";var e=Object.prototype,t=e.__defineGetter__,r=e.__defineSetter__,n=e.__lookupGetter__,o=e.__lookupSetter__,i=e.hasOwnProperty;t&&r&&n&&o&&(Object.defineProperty||(Object.defineProperty=function(e,a,c){if(arguments.length<3)throw new TypeError("Arguments not optional");if(a+="",i.call(c,"value")&&(n.call(e,a)||o.call(e,a)||(e[a]=c.value),i.call(c,"get")||i.call(c,"set")))throw new TypeError("Cannot specify an accessor and a value");if(!(c.writable&&c.enumerable&&c.configurable))throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable.");return c.get&&t.call(e,a,c.get),c.set&&r.call(e,a,c.set),e}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(e,t){if(arguments.length<2)throw new TypeError("Arguments not optional.");t+="";var r={configurable:!0,enumerable:!0,writable:!0},a=n.call(e,t),c=o.call(e,t);return i.call(e,t)?a||c?(delete r.writable,r.get=r.set=void 0,a&&(r.get=a),c&&(r.set=c),r):(r.value=e[t],r):r}),Object.defineProperties||(Object.defineProperties=function(e,t){var r;for(r in t)i.call(t,r)&&Object.defineProperty(e,r,t[r])}))}(),!(document.documentElement.dataset||Object.getOwnPropertyDescriptor(Element.prototype,"dataset")&&Object.getOwnPropertyDescriptor(Element.prototype,"dataset").get)){var propDescriptor={enumerable:!0,get:function(){"use strict";var e,t,r,n,o,i,a=this,c=this.attributes,p=c.length,l=function(e){return e.charAt(1).toUpperCase()},s=function(){return this},u=function(e,t){return"undefined"!=typeof t?this.setAttribute(e,t):this.removeAttribute(e)};try{({}).__defineGetter__("test",function(){}),t={}}catch(f){t=document.createElement("div")}for(e=0;p>e;e++)if(i=c[e],i&&i.name&&/^data-\w[\w\-]*$/.test(i.name)){r=i.value,n=i.name,o=n.substr(5).replace(/-./g,l);try{Object.defineProperty(t,o,{enumerable:this.enumerable,get:s.bind(r||""),set:u.bind(a,n)})}catch(b){t[o]=r}}return t}};try{Object.defineProperty(Element.prototype,"dataset",propDescriptor)}catch(e){propDescriptor.enumerable=!1,Object.defineProperty(Element.prototype,"dataset",propDescriptor)}}