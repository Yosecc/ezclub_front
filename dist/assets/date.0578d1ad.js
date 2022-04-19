import{d as t}from"./dayjs.min.a0c8f1ae.js";import{ad as e}from"./vendor.2e3b8db9.js";var r={exports:{}},n=r.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,s=/\d*[^\s\d-_:/()]+/,a={},o=function(t){return function(e){this[t]=+e}},i=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],f=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},h=function(t,e){var r,n=a.meridiem;if(n){for(var s=1;s<=24;s+=1)if(t.indexOf(n(s,0,e))>-1){r=s>12;break}}else r=t===(e?"pm":"PM");return r},d={A:[s,function(t){this.afternoon=h(t,!1)}],a:[s,function(t){this.afternoon=h(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,o("seconds")],ss:[n,o("seconds")],m:[n,o("minutes")],mm:[n,o("minutes")],H:[n,o("hours")],h:[n,o("hours")],HH:[n,o("hours")],hh:[n,o("hours")],D:[n,o("day")],DD:[r,o("day")],Do:[s,function(t){var e=a.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,o("month")],MM:[r,o("month")],MMM:[s,function(t){var e=f("months"),r=(f("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[s,function(t){var e=f("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[r,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,o("year")],Z:i,ZZ:i};function c(r){var n,s;n=r,s=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var a=n&&n.toUpperCase();return r||s[n]||t[n]||s[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),i=o.length,f=0;f<i;f+=1){var h=o[f],c=d[h],u=c&&c[0],m=c&&c[1];o[f]=m?{regex:u,parser:m}:h.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<i;r+=1){var s=o[r];if("string"==typeof s)n+=s.length;else{var a=s.regex,f=s.parser,h=t.substr(n),d=a.exec(h)[0];f.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0;var n=e.prototype,s=n.parse;n.parse=function(t){var e=t.date,n=t.utc,o=t.args;this.$u=n;var i=o[1];if("string"==typeof i){var f=!0===o[2],h=!0===o[3],d=f||h,u=o[2];h&&(u=o[2]),a=this.$locale(),!f&&u&&(a=r.Ls[u]),this.$d=function(t,e,r){try{var n=c(e)(t),s=n.year,a=n.month,o=n.day,i=n.hours,f=n.minutes,h=n.seconds,d=n.milliseconds,u=n.zone,m=new Date,Y=o||(s||a?1:m.getDate()),M=s||m.getFullYear(),l=0;s&&!a||(l=a>0?a-1:m.getMonth());var D=i||0,v=f||0,p=h||0,L=d||0;return u?new Date(Date.UTC(M,l,Y,D,v,p,L+60*u.offset*1e3)):r?new Date(Date.UTC(M,l,Y,D,v,p,L)):new Date(M,l,Y,D,v,p,L)}catch(g){return new Date("")}}(e,i,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!==this.format(i)&&(this.$d=new Date("")),a={}}else if(i instanceof Array)for(var m=i.length,Y=1;Y<=m;Y+=1){o[1]=i[Y-1];var M=r.apply(this,o);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}Y===m&&(this.$d=new Date(""))}else s.call(this,t)}}}();t.extend(n);const s=(e,r)=>{let n=!1;if(r)switch(r){case"ISO_8601":n=e;break;case"RFC_2822":n=t(e,"ddd, MM MMM YYYY HH:mm:ss ZZ").format("YYYYMMDD");break;case"MYSQL":n=t(e,"YYYY-MM-DD hh:mm:ss").format("YYYYMMDD");break;case"UNIX":n=t(e).unix();break;default:n=t(e,r).format("YYYYMMDD")}return n};export{s as parseDate};
