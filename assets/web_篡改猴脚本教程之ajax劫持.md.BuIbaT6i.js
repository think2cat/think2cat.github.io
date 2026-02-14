import{_ as s,o as a,c as n,a7 as p}from"./chunks/framework.CmR4KQfH.js";const e="/images/2024/05/monkey_1.png",m=JSON.parse('{"title":"篡改猴脚本教程之ajax劫持","description":"","frontmatter":{"sticky":1,"title":"篡改猴脚本教程之ajax劫持","categories":["Web"],"tags":["Tampermonkey","http","js"],"abbrlink":"44bb9485","date":"2024-05-03T15:36:05.000Z"},"headers":[],"relativePath":"web/篡改猴脚本教程之ajax劫持.md","filePath":"web/篡改猴脚本教程之ajax劫持.md","lastUpdated":1736179012000}'),t={name:"web/篡改猴脚本教程之ajax劫持.md"},i=p('<p>篡改猴，最强浏览器扩展，英文名Tampermonkey，最早出现在Firefox，名叫油猴（Greasemonkey ），两者有相似的功能和脚本语法，但并非同个扩展。</p><p>可以在页面注入JS脚本，实现一些功能。</p><p>最早写脚本始于18年玩新浪微博时，由于每次打开都会弹出安装Flash插件的提示，所以写了个脚本把提示窗移除。</p><p>本文以修改表格数据列为例，简单介绍篡改猴脚本开发。</p><p><img src="'+e+`" alt=""></p><p>目标页面，缺少金额数据，每次查看都要点详情进去，很不方便，更不利于对比，所以想直接显示在外面表格。</p><p>本例因涉及集团内部系统，只讲重点代码和注意点，不展示完整代码。</p><p>在插件点击【添加新脚本】会创建一个模板</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// ==UserScript==</span></span>
<span class="line"><span>// @name         New Userscript</span></span>
<span class="line"><span>// @namespace    http://tampermonkey.net/</span></span>
<span class="line"><span>// @version      2024-05-03</span></span>
<span class="line"><span>// @description  try to take over the world!</span></span>
<span class="line"><span>// @author       You</span></span>
<span class="line"><span>// @match        http://*/*</span></span>
<span class="line"><span>// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==</span></span>
<span class="line"><span>// @grant        none</span></span>
<span class="line"><span>// ==/UserScript==</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(function() {</span></span>
<span class="line"><span>    &#39;use strict&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Your code here...</span></span>
<span class="line"><span>})();</span></span></code></pre></div><p>内部系统采用React16，要想直接获取数据实在艰难，所以换个思路，拦截ajax请求，拿到数据后直接插入表格，这里涉及http拦截，采用<code>ajaxHooker.js</code>这个库</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// @run-at document-start</span></span>
<span class="line"><span>// @require https://scriptcat.org/lib/637/1.3.4/ajaxHooker.js#sha256=fWw0ORFWJPYQXZqlv9oxxC96PK/oGwgVpiWCDaC3YPU=</span></span></code></pre></div><p>需要注意劫持库的加载，劫持发生的时机是其它库引入的时候，至少是http请求之前，因此脚本应运行于document-start阶段</p><p>其使用语法如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ajaxHooker.hook(request =&gt; {</span></span>
<span class="line"><span>    console.log(request);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>当页面发出ajax请求时，会被劫持，此时可以通过<code>request.url</code>判断是否为所需数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ajaxHooker.hook(request =&gt; {</span></span>
<span class="line"><span>    if (request.url === &#39;/api/v1/query&#39;) {</span></span>
<span class="line"><span>        request.response = res =&gt; {</span></span>
<span class="line"><span>          // res.responseText 为接口返回数据，可存起来使用</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>取到数据后，不要急着去修改表格，因为此时表格可能还未完成渲染，可以通过<code>setTimeout</code>做延迟修改，也可通过<code>querySelector</code>判断表格是否渲染完成，从而再做修改表格的操作</p><p>操作表格就跟平时操作DOM一样，这里不再讲述，值得一提的是像React或Vue这种单页面系统，篡改猴的脚步一旦注入，是一直存在的，要注意变量的使用，在做路由跳转时才不会相互干扰</p>`,18),l=[i];function c(o,r,d,h,u,g){return a(),n("div",{"data-pagefind-body":!0},l)}const b=s(t,[["render",c]]);export{m as __pageData,b as default};
