var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,r=(e,t)=>{for(var s in t||(t={}))i.call(t,s)&&l(e,s,t[s]);if(a)for(var s of a(t))n.call(t,s)&&l(e,s,t[s]);return e},h=(e,a)=>t(e,s(a));import{d as o,r as d,A as c,o as p,ag as u,ah as g,w as f,h as b,i as m,l as v,L as y}from"./vendor.4454b83d.js";const C=e=>"[object Object]"===Object.prototype.toString.call(e),w=(e,t)=>{const s=document.createElement(e);if(t&&"object"==typeof t)for(const a in t)"html"===a?s.innerHTML=t[a]:s.setAttribute(a,t[a]);return s},E=e=>{e instanceof NodeList?e.forEach((e=>E(e))):e.innerHTML=""},x=(e,t,s)=>w("li",{class:e,html:`<a href="#" data-page="${t}">${s}</a>`}),T=(e,t)=>{let s,a;1===t?(s=0,a=e.length):-1===t&&(s=e.length-1,a=-1);for(let i=!0;i;){i=!1;for(let n=s;n!=a;n+=t)if(e[n+t]&&e[n].value>e[n+t].value){const s=e[n],a=e[n+t],l=s;e[n]=a,e[n+t]=l,i=!0}}return e};class L{constructor(e,t){return this.dt=e,this.rows=t,this}build(e){const t=w("tr");let s=this.dt.headings;return s.length||(s=e.map((()=>""))),s.forEach(((s,a)=>{const i=w("td");e[a]&&e[a].length||(e[a]=""),i.innerHTML=e[a],i.data=e[a],t.appendChild(i)})),t}render(e){return e}add(e){if(Array.isArray(e)){const t=this.dt;Array.isArray(e[0])?e.forEach((e=>{t.data.push(this.build(e))})):t.data.push(this.build(e)),t.data.length&&(t.hasRows=!0),this.update(),t.columns().rebuild()}}remove(e){const t=this.dt;Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>{t.data.splice(e,1)}))):"all"==e?t.data=[]:t.data.splice(e,1),t.data.length||(t.hasRows=!1),this.update(),t.columns().rebuild()}update(){this.dt.data.forEach(((e,t)=>{e.dataIndex=t}))}}class H{constructor(e){return this.dt=e,this}swap(e){if(e.length&&2===e.length){const t=[];this.dt.headings.forEach(((e,s)=>{t.push(s)}));const s=e[0],a=e[1],i=t[a];t[a]=t[s],t[s]=i,this.order(t)}}order(e){let t,s,a,i,n,l,r;const h=[[],[],[],[]],o=this.dt;e.forEach(((e,a)=>{n=o.headings[e],l="false"!==n.getAttribute("data-sortable"),t=n.cloneNode(!0),t.originalCellIndex=a,t.sortable=l,h[0].push(t),o.hiddenColumns.includes(e)||(s=n.cloneNode(!0),s.originalCellIndex=a,s.sortable=l,h[1].push(s))})),o.data.forEach(((t,s)=>{a=t.cloneNode(!1),i=t.cloneNode(!1),a.dataIndex=i.dataIndex=s,null!==t.searchIndex&&void 0!==t.searchIndex&&(a.searchIndex=i.searchIndex=t.searchIndex),e.forEach((e=>{r=t.cells[e].cloneNode(!0),r.data=t.cells[e].data,a.appendChild(r),o.hiddenColumns.includes(e)||(r=t.cells[e].cloneNode(!0),r.data=t.cells[e].data,i.appendChild(r))})),h[2].push(a),h[3].push(i)})),o.headings=h[0],o.activeHeadings=h[1],o.data=h[2],o.activeRows=h[3],o.update()}hide(e){if(e.length){const t=this.dt;e.forEach((e=>{t.hiddenColumns.includes(e)||t.hiddenColumns.push(e)})),this.rebuild()}}show(e){if(e.length){let t;const s=this.dt;e.forEach((e=>{t=s.hiddenColumns.indexOf(e),t>-1&&s.hiddenColumns.splice(t,1)})),this.rebuild()}}visible(e){let t;const s=this.dt;return e=e||s.headings.map((e=>e.originalCellIndex)),isNaN(e)?Array.isArray(e)&&(t=[],e.forEach((e=>{t.push(!s.hiddenColumns.includes(e))}))):t=!s.hiddenColumns.includes(e),t}add(e){let t;const s=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[e.heading],data:e.data.map((e=>[e]))}),void this.rebuild();this.dt.hiddenHeader?s.innerHTML="":e.heading.nodeName?s.appendChild(e.heading):s.innerHTML=e.heading,this.dt.headings.push(s),this.dt.data.forEach(((s,a)=>{e.data[a]&&(t=document.createElement("td"),e.data[a].nodeName?t.appendChild(e.data[a]):t.innerHTML=e.data[a],t.data=t.innerHTML,e.render&&(t.innerHTML=e.render.call(this,t.data,t,s)),s.appendChild(t))})),e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&(s.sortable=e.sortable,s.setAttribute("data-sortable",!0===e.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(e){Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>this.remove(e)))):(this.dt.headings.splice(e,1),this.dt.data.forEach((t=>{t.removeChild(t.cells[e])}))),this.rebuild()}filter(e,t,s,a){const i=this.dt;if(i.filterState||(i.filterState={originalData:i.data}),!i.filterState[e]){const t=[...a,()=>!0];i.filterState[e]=function(){let e=0;return()=>t[e++%t.length]}()}const n=i.filterState[e](),l=Array.from(i.filterState.originalData).filter((t=>{const s=t.cells[e],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;return"function"==typeof n?n(a):a===n}));i.data=l,this.rebuild(),i.update(),s||i.emit("datatable.sort",e,t)}sort(e,t,s){const a=this.dt;if(a.hasHeadings&&(e<0||e>a.headings.length))return!1;const i=a.options.filters&&a.options.filters[a.headings[e].textContent];if(i&&0!==i.length)return void this.filter(e,t,s,i);a.sorting=!0,s||a.emit("datatable.sorting",e,t);let n=a.data;const l=[],r=[];let h=0,o=0;const d=a.headings[e],c=[];if("date"===d.getAttribute("data-type")){let e=!1;d.hasAttribute("data-format")&&(e=d.getAttribute("data-format")),c.push(import("./date.a3f1fe30.js").then((({parseDate:t})=>s=>t(s,e))))}Promise.all(c).then((i=>{const c=i[0];let p,u;Array.from(n).forEach((t=>{const s=t.cells[e],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;let i;i=c?c(a):"string"==typeof a?a.replace(/(\$|,|\s|%)/g,""):a,parseFloat(i)==i?r[o++]={value:Number(i),row:t}:l[h++]={value:"string"==typeof a?a.toLowerCase():a,row:t}})),t||(t=d.classList.contains("asc")?"desc":"asc"),"desc"==t?(p=T(l,-1),u=T(r,-1),d.classList.remove("asc"),d.classList.add("desc")):(p=T(r,1),u=T(l,1),d.classList.remove("desc"),d.classList.add("asc")),a.lastTh&&d!=a.lastTh&&(a.lastTh.classList.remove("desc"),a.lastTh.classList.remove("asc")),a.lastTh=d,n=p.concat(u),a.data=[];const g=[];n.forEach(((e,t)=>{a.data.push(e.row),null!==e.row.searchIndex&&void 0!==e.row.searchIndex&&g.push(t)})),a.searchData=g,this.rebuild(),a.update(),s||a.emit("datatable.sort",e,t)}))}rebuild(){let e,t,s,a;const i=this.dt,n=[];i.activeRows=[],i.activeHeadings=[],i.headings.forEach(((e,t)=>{e.originalCellIndex=t,e.sortable="false"!==e.getAttribute("data-sortable"),i.hiddenColumns.includes(t)||i.activeHeadings.push(e)})),i.data.forEach(((l,r)=>{e=l.cloneNode(!1),t=l.cloneNode(!1),e.dataIndex=t.dataIndex=r,null!==l.searchIndex&&void 0!==l.searchIndex&&(e.searchIndex=t.searchIndex=l.searchIndex),Array.from(l.cells).forEach((n=>{s=n.cloneNode(!0),s.data=n.data,e.appendChild(s),i.hiddenColumns.includes(s.cellIndex)||(a=s.cloneNode(!0),a.data=s.data,t.appendChild(a))})),n.push(e),i.activeRows.push(t)})),i.data=n,i.update()}}const P=function(e){let t=!1,s=!1;if((e=e||this.options.data).headings){t=w("thead");const s=w("tr");e.headings.forEach((e=>{const t=w("th",{html:e});s.appendChild(t)})),t.appendChild(s)}e.data&&e.data.length&&(s=w("tbody"),e.data.forEach((t=>{if(e.headings&&e.headings.length!==t.length)throw new Error("The number of rows do not match the number of headings.");const a=w("tr");t.forEach((e=>{const t=w("td",{html:e});a.appendChild(t)})),s.appendChild(a)}))),t&&(null!==this.table.tHead&&this.table.removeChild(this.table.tHead),this.table.appendChild(t)),s&&(this.table.tBodies.length&&this.table.removeChild(this.table.tBodies[0]),this.table.appendChild(s))},A={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,labels:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",info:"Showing {start} to {end} of {rows} entries"},layout:{top:"{select}{search}",bottom:"{info}{pager}"}};class I{constructor(e,t={}){if(this.initialized=!1,this.options=h(r(r({},A),t),{layout:r(r({},A.layout),t.layout),labels:r(r({},A.labels),t.labels)}),"string"==typeof e&&(e=document.querySelector(e)),this.initialLayout=e.innerHTML,this.initialSortable=this.options.sortable,this.options.header||(this.options.sortable=!1),null===e.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),e.tBodies.length&&!e.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.table=e,this.listeners={onResize:e=>this.onResize(e)},this.init()}static extend(e,t){"function"==typeof t?I.prototype[e]=t:I[e]=t}init(e){if(this.initialized||this.table.classList.contains("dataTable-table"))return!1;Object.assign(this.options,e||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach((([e,t])=>{this[e]&&"function"==typeof this[e]&&(this[e]=this[e](t,{createElement:w}),t.enabled&&this[e].init&&"function"==typeof this[e].init&&this[e].init())}))}),10)}render(e){if(e){switch(e){case"page":this.renderPage();break;case"pager":this.renderPager();break;case"header":this.renderHeader()}return!1}const t=this.options;let s="";if(t.data&&P.call(this),this.body=this.table.tBodies[0],this.head=this.table.tHead,this.foot=this.table.tFoot,this.body||(this.body=w("tbody"),this.table.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const e=w("thead"),s=w("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach((()=>{s.appendChild(w("th"))})),e.appendChild(s)),this.head=e,this.table.insertBefore(this.head,this.body),this.hiddenHeader=t.hiddenHeader}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),t.header||this.head&&this.table.removeChild(this.table.tHead),t.footer?this.head&&!this.foot&&(this.foot=w("tfoot",{html:this.head.innerHTML}),this.table.appendChild(this.foot)):this.foot&&this.table.removeChild(this.table.tFoot),this.wrapper=w("div",{class:"dataTable-wrapper dataTable-loading"}),s+="<div class='dataTable-top'>",s+=t.layout.top,s+="</div>",t.scrollY.length?s+=`<div class='dataTable-container' style='height: ${t.scrollY}; overflow-Y: auto;'></div>`:s+="<div class='dataTable-container'></div>",s+="<div class='dataTable-bottom'>",s+=t.layout.bottom,s+="</div>",s=s.replace("{info}",t.paging?"<div class='dataTable-info'></div>":""),t.paging&&t.perPageSelect){let e="<div class='dataTable-dropdown'><label>";e+=t.labels.perPage,e+="</label></div>";const a=w("select",{class:"dataTable-selector"});t.perPageSelect.forEach((e=>{const s=e===t.perPage,i=new Option(e,e,s,s);a.add(i)})),e=e.replace("{select}",a.outerHTML),s=s.replace("{select}",e)}else s=s.replace("{select}","");if(t.searchable){const e=`<div class='dataTable-search'><input class='dataTable-input' placeholder='${t.labels.placeholder}' type='text'></div>`;s=s.replace("{search}",e)}else s=s.replace("{search}","");this.hasHeadings&&this.render("header"),this.table.classList.add("dataTable-table");const a=w("nav",{class:"dataTable-pagination"}),i=w("ul",{class:"dataTable-pagination-list"});a.appendChild(i),s=s.replace(/\{pager\}/g,a.outerHTML),this.wrapper.innerHTML=s,this.container=this.wrapper.querySelector(".dataTable-container"),this.pagers=this.wrapper.querySelectorAll(".dataTable-pagination-list"),this.label=this.wrapper.querySelector(".dataTable-info"),this.table.parentNode.replaceChild(this.wrapper,this.table),this.container.appendChild(this.table),this.rect=this.table.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),this.setColumns(),this.fixHeight(),this.fixColumns(),t.header||this.wrapper.classList.add("no-header"),t.footer||this.wrapper.classList.add("no-footer"),t.sortable&&this.wrapper.classList.add("sortable"),t.searchable&&this.wrapper.classList.add("searchable"),t.fixedHeight&&this.wrapper.classList.add("fixed-height"),t.fixedColumns&&this.wrapper.classList.add("fixed-columns"),this.bindEvents()}renderPage(){if(this.hasHeadings&&(E(this.header),this.activeHeadings.forEach((e=>this.header.appendChild(e)))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const e=this.currentPage-1,t=document.createDocumentFragment();this.pages[e].forEach((e=>t.appendChild(this.rows().render(e)))),this.clear(t),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let e,t=0,s=0,a=0;if(this.totalPages&&(t=this.currentPage-1,s=t*this.options.perPage,a=s+this.pages[t].length,s+=1,e=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",s).replace("{end}",a).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",e);this.label.innerHTML=e?t:""}1==this.currentPage&&this.fixHeight()}renderPager(){if(E(this.pagers),this.totalPages>1){const e="pager",t=document.createDocumentFragment(),s=this.onFirstPage?1:this.currentPage-1,a=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&t.appendChild(x(e,1,this.options.firstText)),this.options.nextPrev&&t.appendChild(x(e,s,this.options.prevText));let i=this.links;this.options.truncatePager&&(i=((e,t,s,a,i)=>{let n;const l=2*(a=a||2);let r=t-a,h=t+a;const o=[],d=[];t<4-a+l?h=3+l:t>s-(3-a+l)&&(r=s-(2+l));for(let c=1;c<=s;c++)if(1==c||c==s||c>=r&&c<=h){const t=e[c-1];t.classList.remove("active"),o.push(t)}return o.forEach((t=>{const s=t.children[0].getAttribute("data-page");if(n){const t=n.children[0].getAttribute("data-page");if(s-t==2)d.push(e[t]);else if(s-t!=1){const e=w("li",{class:"ellipsis",html:`<a href="#">${i}</a>`});d.push(e)}}d.push(t),n=t})),d})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),i.forEach((e=>{e.classList.remove("active"),t.appendChild(e)})),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&t.appendChild(x(e,a,this.options.nextText)),this.options.firstLast&&t.appendChild(x(e,this.totalPages,this.options.lastText)),this.pagers.forEach((e=>{e.appendChild(t.cloneNode(!0))}))}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach(((e,t)=>{if(this.labels[t]=e.textContent,e.firstElementChild&&e.firstElementChild.classList.contains("dataTable-sorter")&&(e.innerHTML=e.firstElementChild.innerHTML),e.sortable="false"!==e.getAttribute("data-sortable"),e.originalCellIndex=t,this.options.sortable&&e.sortable){const t=w("a",{href:"#",class:"dataTable-sorter",html:e.innerHTML});e.innerHTML="",e.setAttribute("data-sortable",""),e.appendChild(t)}})),this.fixColumns()}bindEvents(){const e=this.options;if(e.perPageSelect){const t=this.wrapper.querySelector(".dataTable-selector");t&&t.addEventListener("change",(()=>{e.perPage=parseInt(t.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",e.perPage)}),!1)}e.searchable&&(this.input=this.wrapper.querySelector(".dataTable-input"),this.input&&this.input.addEventListener("keyup",(()=>this.search(this.input.value)),!1)),this.wrapper.addEventListener("click",(t=>{const s=t.target.closest("a");s&&"a"===s.nodeName.toLowerCase()&&(s.hasAttribute("data-page")?(this.page(s.getAttribute("data-page")),t.preventDefault()):e.sortable&&s.classList.contains("dataTable-sorter")&&"false"!=s.parentNode.getAttribute("data-sortable")&&(this.columns().sort(this.headings.indexOf(s.parentNode)),t.preventDefault()))}),!1),window.addEventListener("resize",this.listeners.onResize)}onResize(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.fixColumns()}setColumns(e){e||this.data.forEach((e=>{Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.options.columns&&this.headings.length&&this.options.columns.forEach((e=>{Array.isArray(e.select)||(e.select=[e.select]),e.hasOwnProperty("render")&&"function"==typeof e.render&&(this.selectedColumns=this.selectedColumns.concat(e.select),this.columnRenderers.push({columns:e.select,renderer:e.render})),e.select.forEach((t=>{const s=this.headings[t];e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&s.setAttribute("data-sortable",e.sortable),e.hasOwnProperty("hidden")&&!1!==e.hidden&&this.columns().hide([t]),e.hasOwnProperty("sort")&&1===e.select.length&&this.columns().sort(e.select[0],e.sort,!0)}))})),this.hasRows&&(this.data.forEach(((e,t)=>{e.dataIndex=t,Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.selectedColumns.length&&this.data.forEach((e=>{Array.from(e.cells).forEach(((t,s)=>{this.selectedColumns.includes(s)&&this.columnRenderers.forEach((a=>{a.columns.includes(s)&&(t.innerHTML=a.renderer.call(this,t.data,t,e))}))}))})),this.columns().rebuild()),this.render("header")}destroy(){this.table.innerHTML=this.initialLayout,this.table.classList.remove("dataTable-table"),this.wrapper.parentNode.replaceChild(this.table,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize)}update(){this.wrapper.classList.remove("dataTable-empty"),this.paginate(this),this.render("page"),this.links=[];let e=this.pages.length;for(;e--;){const t=e+1;this.links[e]=x(0===e?"active":"",t,t)}this.sorting=!1,this.render("pager"),this.rows().update(),this.emit("datatable.update")}paginate(){const e=this.options.perPage;let t=this.activeRows;return this.searching&&(t=[],this.searchData.forEach((e=>t.push(this.activeRows[e])))),this.options.paging?this.pages=t.map(((s,a)=>a%e==0?t.slice(a,a+e):null)).filter((e=>e)):this.pages=[t],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let e,t=!1;if(this.columnWidths=[],this.table.tHead){if(this.options.scrollY.length&&(t=w("thead"),t.appendChild(w("tr")),t.style.height="0px",this.headerTable&&(this.table.tHead=this.headerTable.tHead)),this.activeHeadings.forEach((e=>{e.style.width=""})),this.activeHeadings.forEach(((e,s)=>{const a=e.offsetWidth,i=a/this.rect.width*100;if(e.style.width=`${i}%`,this.columnWidths[s]=a,this.options.scrollY.length){const e=w("th");t.firstElementChild.appendChild(e),e.style.width=`${i}%`,e.style.paddingTop="0",e.style.paddingBottom="0",e.style.border="0"}})),this.options.scrollY.length){const e=this.table.parentElement;if(!this.headerTable){this.headerTable=w("table",{class:"dataTable-table"});const t=w("div",{class:"dataTable-headercontainer"});t.appendChild(this.headerTable),e.parentElement.insertBefore(t,e)}const s=this.table.tHead;this.table.replaceChild(t,s),this.headerTable.tHead=s,this.headerTable.parentElement.style.paddingRight=`${this.headerTable.clientWidth-this.table.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)}px`,e.scrollHeight>e.clientHeight&&(e.style.overflowY="scroll")}}else{e=[],t=w("thead");const s=w("tr");Array.from(this.table.tBodies[0].rows[0].cells).forEach((()=>{const t=w("th");s.appendChild(t),e.push(t)})),t.appendChild(s),this.table.insertBefore(t,this.body);const a=[];e.forEach(((e,t)=>{const s=e.offsetWidth,i=s/this.rect.width*100;a.push(i),this.columnWidths[t]=s})),this.data.forEach((e=>{Array.from(e.cells).forEach(((e,t)=>{this.columns(e.cellIndex).visible()&&(e.style.width=`${a[t]}%`)}))})),this.table.removeChild(t)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=`${this.rect.height}px`)}search(e){return!!this.hasRows&&(e=e.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],e.length?(this.clear(),this.data.forEach(((t,s)=>{const a=this.searchData.includes(t);e.split(" ").reduce(((e,s)=>{let a=!1,i=null,n=null;for(let l=0;l<t.cells.length;l++)if(i=t.cells[l],n=i.hasAttribute("data-content")?i.getAttribute("data-content"):i.textContent,n.toLowerCase().includes(s)&&this.columns(i.cellIndex).visible()){a=!0;break}return e&&a}),!0)&&!a?(t.searchIndex=s,this.searchData.push(s)):t.searchIndex=null})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noRows)),void this.emit("datatable.search",e,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",e,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(e){return e!=this.currentPage&&(isNaN(e)||(this.currentPage=parseInt(e,10)),!(e>this.pages.length||e<0)&&(this.render("page"),this.render("pager"),void this.emit("datatable.page",e)))}sortColumn(e,t){this.columns().sort(e,t)}insert(e){let t=[];if(C(e)){if(e.headings&&!this.hasHeadings&&!this.hasRows){const t=w("tr");e.headings.forEach((e=>{const s=w("th",{html:e});t.appendChild(s)})),this.head.appendChild(t),this.header=t,this.headings=[].slice.call(t.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.render("header"),this.activeHeadings=this.headings.slice()}e.data&&Array.isArray(e.data)&&(t=e.data)}else Array.isArray(e)&&e.forEach((e=>{const s=[];Object.entries(e).forEach((([e,t])=>{const a=this.labels.indexOf(e);a>-1&&(s[a]=t)})),t.push(s)}));t.length&&(this.rows().add(t),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(e){this.body&&E(this.body);let t=this.body;if(this.body||(t=this.table),e){if("string"==typeof e){document.createDocumentFragment().innerHTML=e}t.appendChild(e)}}export(e){if(!this.hasHeadings&&!this.hasRows)return!1;const t=this.activeHeadings;let s=[];const a=[];let i,n,l,h;if(!C(e))return!1;const o=r(r({},{download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4}),e);if(o.type){if("txt"!==o.type&&"csv"!==o.type||(s[0]=this.header),o.selection)if(isNaN(o.selection)){if(Array.isArray(o.selection))for(i=0;i<o.selection.length;i++)s=s.concat(this.pages[o.selection[i]-1])}else s=s.concat(this.pages[o.selection-1]);else s=s.concat(this.activeRows);if(s.length){if("txt"===o.type||"csv"===o.type){for(l="",i=0;i<s.length;i++){for(n=0;n<s[i].cells.length;n++)if(!o.skipColumn.includes(t[n].originalCellIndex)&&this.columns(t[n].originalCellIndex).visible()){let e=s[i].cells[n].textContent;e=e.trim(),e=e.replace(/\s{2,}/g," "),e=e.replace(/\n/g,"  "),e=e.replace(/"/g,'""'),e=e.replace(/#/g,"%23"),e.includes(",")&&(e=`"${e}"`),l+=e+o.columnDelimiter}l=l.trim().substring(0,l.length-1),l+=o.lineDelimiter}l=l.trim().substring(0,l.length-1),o.download&&(l=`data:text/csv;charset=utf-8,${l}`)}else if("sql"===o.type){for(l=`INSERT INTO \`${o.tableName}\` (`,i=0;i<t.length;i++)!o.skipColumn.includes(t[i].originalCellIndex)&&this.columns(t[i].originalCellIndex).visible()&&(l+=`\`${t[i].textContent}\`,`);for(l=l.trim().substring(0,l.length-1),l+=") VALUES ",i=0;i<s.length;i++){for(l+="(",n=0;n<s[i].cells.length;n++)!o.skipColumn.includes(t[n].originalCellIndex)&&this.columns(t[n].originalCellIndex).visible()&&(l+=`"${s[i].cells[n].textContent}",`);l=l.trim().substring(0,l.length-1),l+="),"}l=l.trim().substring(0,l.length-1),l+=";",o.download&&(l=`data:application/sql;charset=utf-8,${l}`)}else if("json"===o.type){for(n=0;n<s.length;n++)for(a[n]=a[n]||{},i=0;i<t.length;i++)!o.skipColumn.includes(t[i].originalCellIndex)&&this.columns(t[i].originalCellIndex).visible()&&(a[n][t[i].textContent]=s[n].cells[i].textContent);l=JSON.stringify(a,o.replacer,o.space),o.download&&(l=`data:application/json;charset=utf-8,${l}`)}return o.download&&(o.filename=o.filename||"datatable_export",o.filename+=`.${o.type}`,l=encodeURI(l),h=document.createElement("a"),h.href=l,h.download=o.filename,document.body.appendChild(h),h.click(),document.body.removeChild(h)),l}}return!1}import(e){let t=!1;if(!C(e))return!1;const s=r(r({},{lineDelimiter:"\n",columnDelimiter:","}),e);if(s.data.length||C(s.data)){if("csv"===s.type){t={data:[]};const e=s.data.split(s.lineDelimiter);e.length&&(s.headings&&(t.headings=e[0].split(s.columnDelimiter),e.shift()),e.forEach(((e,a)=>{t.data[a]=[];const i=e.split(s.columnDelimiter);i.length&&i.forEach((e=>{t.data[a].push(e)}))})))}else if("json"===s.type){const e=(e=>{let t=!1;try{t=JSON.parse(e)}catch(s){return!1}return!(null===t||!Array.isArray(t)&&!C(t))&&t})(s.data);e&&(t={headings:[],data:[]},e.forEach(((e,s)=>{t.data[s]=[],Object.entries(e).forEach((([e,a])=>{t.headings.includes(e)||t.headings.push(e),t.data[s].push(a)}))})))}C(s.data)&&(t=s.data),t&&this.insert(t)}return!1}print(){const e=this.activeHeadings,t=this.activeRows,s=w("table"),a=w("thead"),i=w("tbody"),n=w("tr");e.forEach((e=>{n.appendChild(w("th",{html:e.textContent}))})),a.appendChild(n),t.forEach((e=>{const t=w("tr");Array.from(e.cells).forEach((e=>{t.appendChild(w("td",{html:e.textContent}))})),i.appendChild(t)})),s.appendChild(a),s.appendChild(i);const l=window.open();l.document.body.appendChild(s),l.print()}setMessage(e){let t=1;this.hasRows?t=this.data[0].cells.length:this.activeHeadings.length&&(t=this.activeHeadings.length),this.wrapper.classList.add("dataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.render("pager"),this.clear(w("tr",{html:`<td class="dataTables-empty" colspan="${t}">${e}</td>`}))}columns(e){return new H(this,e)}rows(e){return new L(this,e)}on(e,t){this.events=this.events||{},this.events[e]=this.events[e]||[],this.events[e].push(t)}off(e,t){this.events=this.events||{},e in this.events!=!1&&this.events[e].splice(this.events[e].indexOf(t),1)}emit(e){if(this.events=this.events||{},e in this.events!=!1)for(let t=0;t<this.events[e].length;t++)this.events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}}var R=o({expose:[],props:{options:{type:Object,default:()=>({})},autoupdate:{type:Boolean,default:!1}},emits:["init","refresh","update","page","sort","perpage","search"],setup(e,{emit:t}){const s=e,a=d(null),i=d(null),n=d(null),l=d(!1),o=c({column:0,direction:""}),C=e=>{l.value||(l.value=!0)},w=e=>{l.value&&(l.value=!1)},E=()=>{if(i.value){const e=i.value.querySelector(".dataTable-input"),t=i.value.querySelector(".dataTable-selector"),s=i.value.querySelector(".dataTable-pagination"),a=i.value.querySelectorAll(".dataTable-sorter");e&&(e.addEventListener("focus",C,!1),e.addEventListener("blur",w,!1)),t&&(t.addEventListener("focus",C,!1),t.addEventListener("blur",w,!1),t.addEventListener("change",w,!1)),s&&(s.addEventListener("mousedown",C,!1),s.addEventListener("mouseup",w,!1)),a.forEach((e=>{let t=e;t&&(t.addEventListener("mousedown",C,!1),t.addEventListener("mouseup",w,!1))}))}n.value&&(n.value.on("datatable.init",(()=>{t("init")})),n.value.on("datatable.refresh",(()=>{t("refresh")})),n.value.on("datatable.update",(()=>{t("update")})),n.value.on("datatable.page",(e=>{t("page",e)})),n.value.on("datatable.sort",((e,s)=>{o.column=e,o.direction=s||"",t("sort",e,s)})),n.value.on("datatable.perpage",(e=>{t("perpage",e)})),n.value.on("datatable.search",((e,s)=>{t("search",e,s)})))},x=()=>{if(n.value&&(n.value.destroy(),n.value=null),i.value){const e=i.value.querySelector(".dataTable-input"),t=i.value.querySelector(".dataTable-selector"),s=i.value.querySelector(".dataTable-pagination"),a=i.value.querySelectorAll(".dataTable-sorter");e&&(e.removeEventListener("focus",C),e.removeEventListener("blur",w)),t&&(t.removeEventListener("focus",C),t.removeEventListener("blur",w),t.removeEventListener("change",w)),s&&(s.removeEventListener("mousedown",C),s.removeEventListener("mouseup",w)),a.forEach((e=>{let t=e;t&&(t.removeEventListener("mousedown",C),t.removeEventListener("mouseup",w))}))}};return p((()=>{a.value&&(n.value=new I(a.value,s.options)),E()})),u((()=>{x()})),g(s.options)&&f([s.options,()=>s.autoupdate],(()=>{var e,t;if(a.value&&s.autoupdate&&!l.value){let i=1,l=10,d="";n.value&&(i=n.value.currentPage,d=null==(e=n.value.input)?void 0:e.value,l=null==(t=n.value.options)?void 0:t.perPage,x()),n.value=new I(a.value,h(r({},s.options),{perPage:l})),!1!==s.options.searchable&&(n.value.input.value=d,n.value.input.dispatchEvent(new Event("keyup"))),""!==o.direction&&n.value.columns().sort(o.column,o.direction),n.value.page(i),E()}})),(e,t)=>(b(),m("div",{ref:i},[v("table",{ref:a},[y(e.$slots,"default")],512)],512))}});export{R as _};
