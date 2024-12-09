import{_ as i,o as s,c as a,a7 as t}from"./chunks/framework.Z1Dznsxj.js";const h="/images/2011/09/npapi.png",F=JSON.parse('{"title":"NPAPI使用指南","description":"","frontmatter":{"title":"NPAPI使用指南","tags":["npapi","javascript"],"categories":["Web"],"abbrlink":"d9859d53","date":"2011-09-05T15:47:30.000Z"},"headers":[],"relativePath":"web/NPAPI使用指南.md","filePath":"web/NPAPI使用指南.md","lastUpdated":1719711816000}'),l={name:"web/NPAPI使用指南.md"},p=t('<h2 id="_1-什么是npapi" tabindex="-1">1.什么是NPAPI <a class="header-anchor" href="#_1-什么是npapi" aria-label="Permalink to &quot;1.什么是NPAPI&quot;">​</a></h2><p>NPAPI是基于OWB的扩展插件，相当于IE的ActiveX控件</p><p>目前可分为2类 1). 功能性插件，如播放器、e视通、bulletin 2). 数据传输类，如爱音乐、我的好友，这类插件用于http网络数据传输，类似AJAX，区别在于不会暴露请求地址，以及可对数据进行加密处理</p><h2 id="_2-npapi组成" tabindex="-1">2.NPAPI组成 <a class="header-anchor" href="#_2-npapi组成" aria-label="Permalink to &quot;2.NPAPI组成&quot;">​</a></h2><h3 id="a-插件的组成" tabindex="-1">A. 插件的组成 <a class="header-anchor" href="#a-插件的组成" aria-label="Permalink to &quot;A. 插件的组成&quot;">​</a></h3><p>插件一般为后缀名 so 的库文件，一个插件有一个主so文件，同时可能附带其它文件（库或者配置文件），这跟插件本身所调用的库有关，类似java的import</p><h3 id="b-插件的存放目录" tabindex="-1">B. 插件的存放目录 <a class="header-anchor" href="#b-插件的存放目录" aria-label="Permalink to &quot;B. 插件的存放目录&quot;">​</a></h3><p>1). 系统插件的 基本存放于 /vendor/lib 比如播放器、bulletin等，这类跟系统结合紧密、版本更新相对少</p><p>2). 动态加载插件 存放于widget下面的 npapi 目录，如下图 <img src="'+h+`" alt="npapi"></p><p>这类插件是跟widget打包在一起的，安装时也随widget一起解压，当运行widget时OWB会自动映射虚拟目录，这样npapi目录下的so就可以为系统所识别，这一过程是OWB自动实现的</p><p>so的命名规范，<code>{lib库名}-{widget id}-plugin.so</code>，例如 <code>libimusic-20301-plugin.so</code> 库名是自定义的，推荐使用模块名或跟业务相关名称，方便识别，id为申请widget时的id，必须匹配，不然无法上传</p><h2 id="_3-npapi使用" tabindex="-1">3.NPAPI使用 <a class="header-anchor" href="#_3-npapi使用" aria-label="Permalink to &quot;3.NPAPI使用&quot;">​</a></h2><p>首先需要在html页面加入相应库的html代码，例如爱音乐</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bboImusic&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq-imusic-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>其中 <code>type</code> 属性为插件指定，每个插件均不同，id可自定义，调用插件接口时用到</p><p>在页面加载的时候，会自动载入库文件，然后可以用js来调用接口，例如</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bboImusic.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getChannelList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>getChannelList()</code> 为插件自定义方法，该方法返回爱音乐频道列表，类型为字符串，然后JS可以自行对返回进行处理</p><p>需要强调的是，因为调用的是外部接口，这些插件跟底层target版本、关联的库等使用环境都有很大关系，所以有可能会出现不兼容，甚至coredump等问题，也就是说随时可能出错 所以调用插件接口时，必须加上 <code>try{}catch(){}</code>，上面的调用必须这么写</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bboImusic.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getChannelList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(“bboImusic.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getChannelList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() err:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; + e)</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样可以保证插件出错的情况下，不会导致JS出错</p><h2 id="_4-技巧" tabindex="-1">4.技巧 <a class="header-anchor" href="#_4-技巧" aria-label="Permalink to &quot;4.技巧&quot;">​</a></h2><ul><li><p>动态加载插件 如果把 <code>&lt;embed&gt;</code> 标签放到html页面，这样在载入页面的时候，就会初始化这个插件，必将延长加载时间，而且大部分插件仍是单线程，会导致页面假死。 所以可以利用JS来动态记载插件，比如在页面载入完成之后，先显示LOADING，然后动态将 <code>&lt;embed&gt;</code> 标签插入到页面，此时插件才进行初始化，或者是在需要使用到该插件时再载入，也可以起到优化的目的</p></li><li><p>隐藏插件不可用display 因为插件会在页面留下一块黑色方块，1是影响美观，2是大部分时候需要隐掉，如果用CSS样式 <code>display = none</code>，会导致插件初始化失败，也就无法调用插件方法 而用 <code>visibility = hidden</code> 则可以正常加载，也达到隐藏的目的，需显示可以用 <code>visibility = visible</code></p></li></ul><h2 id="_5-附录" tabindex="-1">5.附录 <a class="header-anchor" href="#_5-附录" aria-label="Permalink to &quot;5.附录&quot;">​</a></h2><p>目前用到的NPAPI</p><ul><li>八宝好友</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npUserManage&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq-usermanage-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>播放器</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:hidden; position:absolute; left:0; top:0;z-index:-1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MediaPlayer&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq_music-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1360&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;768&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">embed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>无线传屏</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dlna_plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:hidden&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/babao-dlna-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>VOIP</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;VoipClient&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/vvoip-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;454&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;340&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;margin-top:-340px;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>Bulletin</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:hidden;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bboBulletin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq-bulletin-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">embed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>CAE</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;visibility:hidden;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bboCAE&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq-cae-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">embed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ul><li>优朋电影</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">embed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npVoole&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/bq-voole-plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">embed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,39),n=[p];function k(e,d,E,g,r,o){return s(),a("div",{"data-pagefind-body":!0},n)}const c=i(l,[["render",k]]);export{F as __pageData,c as default};
