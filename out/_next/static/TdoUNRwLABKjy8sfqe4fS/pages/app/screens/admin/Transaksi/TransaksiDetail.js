(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"1lQr":function(e,a,i){"use strict";i.r(a);var n=i("6BQ9"),s=i.n(n),t=i("Chh1"),l=i("52Dj"),r=i("mDt/"),o=i("oMaz"),c=i("Z/of"),u=i("5niy"),m=i("q1tI"),z=i.n(m),d=i("IIls"),f=z.a.createElement;a.default=Object(u.a)(function(e){var a=e.navigation,i=Object(u.b)({form:(a||{getParam:function(){return{}}}).getParam("item")}).form,n=s()(i.amount||i.nominal||0),m=(i.paid||i.detail||i.status||"").toLowerCase();return"paid"===m&&(m="success"),f(r.a,null,f(o.a,{navigation:a,title:"#".concat(i.id," ").concat((i.kewajiban||"").nama_kewajiban," - Rp ").concat(n.toLocaleString()),onBack:function(){a.goBack()}}),""!==m&&f(t.a,null,f(c.a,null,f(l.a,{size:1,sizexs:4,sizemd:4},"Siswa:"),f(l.a,{size:11,sizexs:8,sizemd:8},i.murid.nama_murid)),f(c.a,null,f(l.a,{size:1,sizexs:4,sizemd:4},"Kelas:"),f(l.a,{size:11,sizexs:8,sizemd:8},i.murid.kelas_murids[0].kelas.nama_kelas||"Semua Kelas")),f(c.a,null,f(l.a,{size:1,sizexs:4,sizemd:4},"Nominal:"),f(l.a,{size:11,sizexs:8,sizemd:8},f(d.a,null,"Rp ",n.toLocaleString()))),f(c.a,null,f(l.a,{size:1,sizexs:4,sizemd:4},"Status:"),f(l.a,{size:11,sizexs:8,sizemd:8},m))))})},"39C4":function(e,a,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app/screens/admin/Transaksi/TransaksiDetail",function(){return i("1lQr")}])},"52Dj":function(e,a,i){"use strict";var n=i("q1tI"),s=i.n(n),t=i("C7Rh"),l=i("jzUF"),r=i("IIls"),o=i("l0wL"),c=s.a.createElement,u=t.a.get("window").width;a.a=function(e){var a=e.size,i=void 0===a?12:a,n=e.children,s=(e.sizexs,e.sizesm),t=e.sizemd,m=e.sizelg,z=e.sizexl,d=e.sizexxl,f=i;return u<=410?f=s||i:u>=411&&u<=567?f=s||i:u>=568&&u<=767?f=t||i:u>=768&&u<=1023?f=m||i:u>=1024&&u<=1279?f=z||i:u>=1280&&(f=d||i),c(l.a,{style:{flexBasis:f/12*100+"%"}},n&&n.map&&n.length>1?n.map(function(e,a){return"object"!==typeof e?"string"===typeof e&&""===e.trim()?null:c(r.a,{key:a,style:Object(o.c)({paddingVertical:1,marginVertical:1})},e):e}):"object"===typeof n?n:c(r.a,null,n))}},"Z/of":function(e,a,i){"use strict";var n=i("zrwo"),s=i("q1tI"),t=i.n(s),l=i("jzUF"),r=t.a.createElement;a.a=function(e){return r(l.a,{style:Object(n.a)({},e.style,{flexDirection:"row",flexWrap:"wrap"})},e.children)}}},[["39C4",1,0]]]);