import{_ as a,o as s,c as e,a7 as t,aCZ as p,aC_ as l,aC$ as i}from"./chunks/framework.nrF9sM7m.js";const y=JSON.parse('{"title":"Blue Blog开发历程","description":"","frontmatter":{"title":"Blue Blog开发历程","tags":["blog"],"id":873,"categories":["Web"],"abbrlink":"21ca53d9","date":"2006-03-20T23:41:03.000Z"},"headers":[],"relativePath":"web/Blue_Blog开发历程.md","filePath":"web/Blue_Blog开发历程.md","lastUpdated":1719711816000}'),o={name:"web/Blue_Blog开发历程.md"},n=t('<p><img src="'+p+'" alt=""></p><p>应该没人记得这个Banner吧，这是最初的博客，程序写于03年9月。</p><p>当时只是几个简单的页面，自己可以发发日记，如此而已。</p><p><img src="'+l+'" alt=""></p><ul><li>03年12月，把Blog跟论坛数据库整合一起，所有论坛注册用户均可发表日志。上面是当时的Banner。</li></ul><p><img src="'+i+'" alt=""></p><ul><li><p>04年10月，开始学习网页标准，并应用到Blog中，CSS是通过W3C验证了，网页由于某些页面用了不符合XHTML的属性，没通过</p></li><li><p>05年12月，开始改版，开发真正支持多用户Blog</p></li><li><p>06年2月，终于放弃开发，采用Oblog系统架设Blue Blog</p><p>目前已运行一个来月，问题多多，不知所谓的“经过Oblog＆LeadBBS开发人员共同审核”的说法是怎么来的，于是自己在改，凡事还是靠自己的好。</p></li></ul><hr><p>补充一下Oblog to LEADBBS Access版转SQL的修改方法</p><p><strong>oBlog to Leadbbs 3.1 Access changeTo MSSQL</strong></p><p>conn.asp 第10行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Const is_sqldata=0</span></span></code></pre></div><p>改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Const is_sqldata=1</span></span></code></pre></div><p>在29行，自行配置数据库的连接参数</p><p>oBlogConn.asp 第4行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Const is_sqldata=0</span></span></code></pre></div><p>改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Const is_sqldata=1</span></span></code></pre></div><p>同样在下面配置连接参数</p><p>inc/class_blog.asp 第673行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>logdate = c_year &amp; &quot;-&quot; &amp; c_month</span></span></code></pre></div><p>改为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>logdate = c_year &amp; &quot;-&quot; &amp; c_month &amp; &quot;-&quot; &amp; c_day</span></span></code></pre></div>',24),c=[n];function d(g,h,r,u,_,b){return s(),e("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjJCbHVlJTIwQmxvZyVFNSVCQyU4MCVFNSU4RiU5MSVFNSU4RSU4NiVFNyVBOCU4QiUyMiUyQyUyMnRhZ3MlMjIlM0ElNUIlMjJibG9nJTIyJTVEJTJDJTIyaWQlMjIlM0E4NzMlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyV2ViJTIyJTVEJTJDJTIyYWJicmxpbmslMjIlM0ElMjIyMWNhNTNkOSUyMiUyQyUyMmRhdGUlMjIlM0ExMTQyODk4MDYzMDAwJTdE"},c)}const v=a(o,[["render",d]]);export{y as __pageData,v as default};
