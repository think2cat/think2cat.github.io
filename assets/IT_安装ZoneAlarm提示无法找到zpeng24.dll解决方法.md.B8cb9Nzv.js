import{_ as l,o as e,c as a,a7 as t,b$ as n}from"./chunks/framework.nrF9sM7m.js";const c=JSON.parse('{"title":"安装ZoneAlarm提示无法找到zpeng24.dll解决方法","description":"","frontmatter":{"title":"安装ZoneAlarm提示无法找到zpeng24.dll解决方法","tags":["zonealarm"],"id":928,"categories":["IT"],"abbrlink":"7293e9ae","date":"2007-03-21T17:27:03.000Z"},"headers":[],"relativePath":"IT/安装ZoneAlarm提示无法找到zpeng24.dll解决方法.md","filePath":"IT/安装ZoneAlarm提示无法找到zpeng24.dll解决方法.md","lastUpdated":1719711816000}'),o={name:"IT/安装ZoneAlarm提示无法找到zpeng24.dll解决方法.md"},_=t('<p>一直用ZoneAlarm 6.5，今天程序提示升级，上<a href="http://www.zonelabs.com/" target="_blank" rel="noreferrer">官网</a>下了个7.0.337，经过各种尝试，蓝屏N次</p><ol><li>从ZoneAlarm 6.5升级安装7.0</li><li>完全安装</li><li>禁用卡巴KAV的主动防御后安装</li><li>卸除KAV后安装系统是Windows2003+sp1，每次都是在进度条滚动那个启动画面不久后就蓝屏，然后自动重启，蓝屏一闪而过，没法看到错误信息，只能进入安全模式，卸除后才能正常启动</li></ol><p>无奈只好装回6.5，没想到出现了以下错误提示，【vsmon.exe无法找到组件】：没有找到zpeng24.dll</p><p><img src="'+n+'" alt=""></p><p>解决方法是删除 \\WINDOWS\\system32下面的ZoneLabs目录，重启后就能再次安装了</p><p>顺便说下网上好多人说KAV和ZoneAlarm冲突，我不确定他们是什么系统，但是我用了多年这种搭配了，在2000/XP/2003都用过，不存在什么冲突</p>',6),r=[_];function i(s,p,M,T,d,m){return e(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTUlQUUlODklRTglQTMlODVab25lQWxhcm0lRTYlOEYlOTAlRTclQTQlQkElRTYlOTclQTAlRTYlQjMlOTUlRTYlODklQkUlRTUlODglQjB6cGVuZzI0LmRsbCVFOCVBNyVBMyVFNSU4NiVCMyVFNiU5NiVCOSVFNiVCMyU5NSUyMiUyQyUyMnRhZ3MlMjIlM0ElNUIlMjJ6b25lYWxhcm0lMjIlNUQlMkMlMjJpZCUyMiUzQTkyOCUyQyUyMmNhdGVnb3JpZXMlMjIlM0ElNUIlMjJJVCUyMiU1RCUyQyUyMmFiYnJsaW5rJTIyJTNBJTIyNzI5M2U5YWUlMjIlMkMlMjJkYXRlJTIyJTNBMTE3NDQ5ODAyMzAwMCU3RA=="},r)}const y=l(o,[["render",i]]);export{c as __pageData,y as default};
