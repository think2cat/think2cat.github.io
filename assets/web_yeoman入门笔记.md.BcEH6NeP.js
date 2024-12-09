import{_ as s,o as a,c as e,a7 as i}from"./chunks/framework.Z1Dznsxj.js";const t="/images/2017/04/yeoman_1.png",p="/images/2017/04/yeoman_2.png",n="/images/2017/04/yeoman_3.png",b=JSON.parse('{"title":"yeoman入门笔记","description":"","frontmatter":{"title":"yeoman入门笔记","tags":["yeoman"],"id":1786,"categories":["Web"],"abbrlink":"b3a22ac5","date":"2017-04-19T16:23:26.000Z"},"headers":[],"relativePath":"web/yeoman入门笔记.md","filePath":"web/yeoman入门笔记.md","lastUpdated":1719711816000}'),o={name:"web/yeoman入门笔记.md"},l=i('<p>yeoman官网 <a href="http://yeoman.io/" target="_blank" rel="noreferrer">http://yeoman.io/</a></p><p>yeoman是一个脚手架工具，用来初始化项目目录结构，便于部署项目 早期的web项目基本目录接口大概是这样子</p><p><img src="'+t+'" alt=""></p><p>随着web技术发展，各种前端框架的广泛应用，现在的目录结构大概是这样子</p><p><img src="'+p+'" alt=""></p><p>根据不同框架、不同编译环境、不同测试环境，以及发布部署，结构更是千变万化，而这些都是比较耗时间去考虑的，现在有了yeoman，可以自动化生成这些结构，只需选好模板，一条命令几个回车即可搞定</p><p>首先要安装node.js，然后再安装yeoman</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yo</span></span></code></pre></div><p>然后执行</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yo</span></span></code></pre></div><p><img src="'+n+'" alt="yeoman"></p><p>使用默认自带的模板进行初始化，也可以在官网找其它模板来初始化 官网目前有6000+模板可使用，安装可用yo的向导式菜单进行安装，也可直接命令行安装，比如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generator-jquery</span></span></code></pre></div><p>然后初始化</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jquery</span></span></code></pre></div><p>目录结构到依赖的库什么的一次搞定，那酸爽！</p>',16),h=[l];function d(c,r,g,k,m,y){return a(),e("div",{"data-pagefind-body":!0},h)}const u=s(o,[["render",d]]);export{b as __pageData,u as default};
