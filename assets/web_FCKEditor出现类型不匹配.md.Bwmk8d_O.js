import{_ as s,o as n,c as a,a7 as t}from"./chunks/framework.nrF9sM7m.js";const U=JSON.parse(`{"title":"FCKEditor出现类型不匹配: 'Server.HTMLEncode' 解决方法","description":"","frontmatter":{"title":"FCKEditor出现类型不匹配: 'Server.HTMLEncode' 解决方法","tags":["asp"],"id":940,"categories":["Web"],"abbrlink":"f1a2a654","date":"2007-05-25T15:18:29.000Z"},"headers":[],"relativePath":"web/FCKEditor出现类型不匹配.md","filePath":"web/FCKEditor出现类型不匹配.md","lastUpdated":1719711816000}`),o={name:"web/FCKEditor出现类型不匹配.md"},e=t(`<p>程序如下：</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dim oFCKeditorIntro</span></span>
<span class="line"><span>Set oFCKeditorIntro = New FCKeditor</span></span>
<span class="line"><span>oFCKeditorIntro.BasePath = &quot;../FCKeditor/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>oFCKeditorIntro.ToolbarSet = &quot;Default&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Width = &quot;100%&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Height = &quot;350&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Value = rs(&quot;Info&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>oFCKeditorIntro.Create &quot;Info&quot;</span></span></code></pre></div><p>无情滴出错了</p><blockquote><p>Microsoft VBScript 运行时错误 错误 &#39;800a000d&#39; 类型不匹配: &#39;Server.HTMLEncode&#39; /fckeditor.asp，行97</p></blockquote><p>网上搜了一下，大都说是 rs(&quot;Info&quot;)内容有问题，然后提供了类似防SQL注入的解决方法，把xxxx非法字符做过滤处理</p><p>自己试了下，解决方法很简单</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dim oFCKeditorIntro,InfoText	&#39;多定义个变量</span></span>
<span class="line"><span>InfoText = rs(&quot;Info&quot;)		&#39;look</span></span>
<span class="line"><span>Set oFCKeditorIntro = New FCKeditor</span></span>
<span class="line"><span>oFCKeditorIntro.BasePath = &quot;../FCKeditor/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>oFCKeditorIntro.ToolbarSet = &quot;Default&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Width = &quot;100%&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Height = &quot;350&quot;</span></span>
<span class="line"><span>oFCKeditorIntro.Value = InfoText		&#39;look</span></span>
<span class="line"><span></span></span>
<span class="line"><span>oFCKeditorIntro.Create &quot;Info&quot;</span></span></code></pre></div>`,7),p=[e];function l(i,r,d,c,u,T){return n(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjJGQ0tFZGl0b3IlRTUlODclQkElRTclOEUlQjAlRTclQjElQkIlRTUlOUUlOEIlRTQlQjglOEQlRTUlOEMlQjklRTklODUlOEQlM0ElMjAnU2VydmVyLkhUTUxFbmNvZGUnJTIwJUU4JUE3JUEzJUU1JTg2JUIzJUU2JTk2JUI5JUU2JUIzJTk1JTIyJTJDJTIydGFncyUyMiUzQSU1QiUyMmFzcCUyMiU1RCUyQyUyMmlkJTIyJTNBOTQwJTJDJTIyY2F0ZWdvcmllcyUyMiUzQSU1QiUyMldlYiUyMiU1RCUyQyUyMmFiYnJsaW5rJTIyJTNBJTIyZjFhMmE2NTQlMjIlMkMlMjJkYXRlJTIyJTNBMTE4MDEwNjMwOTAwMCU3RA=="},p)}const C=s(o,[["render",l]]);export{U as __pageData,C as default};
