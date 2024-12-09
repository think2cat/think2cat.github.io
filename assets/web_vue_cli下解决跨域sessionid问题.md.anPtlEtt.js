import{_ as s,o as i,c as a,a7 as t}from"./chunks/framework.Z1Dznsxj.js";const e="/images/2017/09/sessionid.png",n="/images/2017/09/cookie_session.fw_.png",u=JSON.parse('{"title":"vue-cli下解决跨域sessionid问题","description":"","frontmatter":{"title":"vue-cli下解决跨域sessionid问题","tags":["nodejs","vuejs","javascript"],"id":1835,"categories":["Web"],"author":"","abbrlink":"33570702","date":"2017-09-12T23:31:00.000Z"},"headers":[],"relativePath":"web/vue_cli下解决跨域sessionid问题.md","filePath":"web/vue_cli下解决跨域sessionid问题.md","lastUpdated":1721497158000}'),p={name:"web/vue_cli下解决跨域sessionid问题.md"},l=t('<p><img src="'+e+`" alt=""></p><p>项目开始为了方便直接把页面包在Java容器里面，而实际设计应该是前后端分离的 最近在做分离时api请求发现，因为前端web和后端portal不在一个容器，存在跨域，会造成每次ajax请求都生成不同sessionid，而portal是通过session来识别用户，从而控制权限，这将导致登录后依旧无法获取数据，因为sessionid变了，portal认为没有权限并302重定向到首页</p><p>网上有不同解决办法，比如通过java去获取sessionid，并在每次请求时通过http带过去 因为之前做过几年的Facebook、Twitter等这类app，他们用的都是token，应该是相当成熟的解决办法，但是后端的哥们不想动代码，因为涉及到整个认证框架的修改，然后就只能从前端来解决</p><p>前端用的vue.js，配合vue-cli搭起来的webpack环境，其实只要修改下配置就可以了 打开 ./config/index.js，找到 proxyTable，改为</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxyTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;/api/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://10.242.129.164:8080/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		changeOrigin: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		pathRewrite: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">			&#39;^/api&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><p>然后ajax请求 <code>http://localhost:8080/api/xxxxx</code> 就可以了，node会匹配url然后通过代理去请求远程api</p><p><strong>2018-1-10 更新</strong></p><p>今天同事用这个方法调试发现依然不能保存session，登录后session跟着变，看了一下请求</p><p><img src="`+n+'" alt=""></p><p>重点就是红框，因为请求的是 /api/xxx</p><p>即使反向代理设置了 /api/ 的重写，但是作为浏览器并不会知道后端的套路，于是路径不必配自然不会 set-cookie，于是下次请求又是新的session</p><p>解决办法一是改后台，二是把反向代理设置成后端一样 /manage/</p>',12),o=[l];function h(k,d,r,c,E,_){return i(),a("div",{"data-pagefind-body":!0},o)}const y=s(p,[["render",h]]);export{u as __pageData,y as default};
