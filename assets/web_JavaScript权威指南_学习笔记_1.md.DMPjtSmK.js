import{_ as s,o as i,c as a,a7 as t}from"./chunks/framework.ClMj9r9D.js";const n="/images/2006/04/10_2006-4-410230953_12728.gif",y=JSON.parse('{"title":"《JavaScript权威指南》学习笔记(1)","description":"","frontmatter":{"title":"《JavaScript权威指南》学习笔记(1)","tags":["javascript","笔记"],"id":884,"categories":["Web"],"abbrlink":"d5ef69c5","date":"2006-04-10T00:32:30.000Z"},"headers":[],"relativePath":"web/JavaScript权威指南_学习笔记_1.md","filePath":"web/JavaScript权威指南_学习笔记_1.md","lastUpdated":1719711816000}'),l={name:"web/JavaScript权威指南_学习笔记_1.md"},p=t('<p><img src="'+n+`" alt=""></p><p>一直很想系统的学习下JS，这次有幸在公司借到本**《JavaScript权威指南(第四版)》<strong>，看了1天，还不错，但借的终究要还，好书还是希望自己手头有的好，决定自己去买一本。原价99大洋，打折后也要七、八十，真的蛮贵，相比之下，第三版就便宜多了，淘宝上三十多块就可以买了，比第四版便宜了50大洋，不过正好明天发工资，干脆买第四版好了，毕竟</strong>书中自有黄金屋**，知识带来的价值是远大于书本身的价格的。</p><h3 id="一、概述" tabindex="-1">一、概述 <a class="header-anchor" href="#一、概述" aria-label="Permalink to &quot;一、概述&quot;">​</a></h3><p>JavaScript是一种轻型的、解析型语言，具有面向对象能力。最先由Netscape开发，而并非SUN公司，但JavaScript和Java在语法上有很多相似之处。</p><p>JavaScript最新版是1.5，解析器有Mozilla组织维护，其中一个版本使用C语言编写，称为SpiderMonkey，另一个用Java编写，称为Rhino</p><h4 id="_1-主要特性" tabindex="-1">1.主要特性 <a class="header-anchor" href="#_1-主要特性" aria-label="Permalink to &quot;1.主要特性&quot;">​</a></h4><ol><li>控制文档外观和内容</li><li>对浏览器控制</li><li>与表单数据交互</li><li>与用户交互（通过定义事件例如submit、onclick）</li><li>读写cookie数据</li></ol><h4 id="_2-安全性" tabindex="-1">2.安全性 <a class="header-anchor" href="#_2-安全性" aria-label="Permalink to &quot;2.安全性&quot;">​</a></h4><p>JavaScript本身是无法读本地文件和执行网络操作，但可以利用XPCOM进行操作</p><h3 id="二、语法结构" tabindex="-1">二、语法结构 <a class="header-anchor" href="#二、语法结构" aria-label="Permalink to &quot;二、语法结构&quot;">​</a></h3><ol><li><p><strong>编码</strong> JavaScript程序是用16位的Unicode字符集编写，可以表示地球上每一种书面语言</p></li><li><p><strong>大小写敏感</strong> JavaScript和Java都是区分大小写的语言，例如HTML里面通常用onClick，但在JavaScript里面只能用onclick</p></li><li><p><strong>空白符</strong> JavaScript会忽略程序中记号之间的空格、制表符和换行符，除非是字符串或正则表达式的一部分，但为了使代码容易阅读和理解，请合理使用制表符和换行符</p></li><li><p><strong>句末分号</strong> 跟C、C++、Java一样，JavaScript在语句末尾通常带有分号”;”，主要为了分割语句，但在JavaScript，如果语句位于不同行，分号可以省略，但推荐养成句末加分号的编程习惯</p></li><li><p><strong>注释</strong> JavaScript跟C、C++、Java一样，支持使用”//”作为注释标记，也可以用”/<em>”和”</em>/”注释多行文本，但不能嵌套注释。</p></li><li><p><strong>识标符</strong> 用来命名变量和函数，或是某些循环的标签。识标符第一个字符必须使字母或下划线，在JavaScript1.1版本后可以使用 $ 作为第一个字符，但尽量避免使用美元字符，接下来的字符可以是字母、数字、下划线或美元符号</p></li><li><p><strong>保留字</strong> 以下的保留字不可以用作变量，函数名，对象名等，其中有的保留字是为以后 JavaScrip 扩展用的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">break</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> typeof</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> do</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> switch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">continue</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> false</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throw</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> while</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">debugger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> finally</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> with</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> for </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> try</span></span></code></pre></div><p>JavaScript还有一些未来保留字，这些字虽然现在没有用到JavaScrip语言中，但是将来有可能用到</p><p><strong>JavaScrip未来保留字列表：</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">abstract double </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">goto</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> native</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boolean </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> implements</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> package super</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">byte export import private synchronized</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">char extends int protected throws</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class final interface public transient</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const float long short volatile</span></span></code></pre></div><p>此外，每个特定JavaScript嵌入的客户端或服务器端会有自己的全局属性，也不能作为识标符。</p><p><strong>其它避免使用的识标符</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> encodeURI </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Infinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Array Error isFinite parseFloat SyntaxError</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Boonean escape iNaN parseInt TypeError</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Date eval Math RangeError </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">decodeURI EvalError </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ReferenceError unescape</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">decodeURIomponent Function Number RegExp URIError</span></span></code></pre></div></li></ol><h3 id="三、数据类型" tabindex="-1">三、数据类型 <a class="header-anchor" href="#三、数据类型" aria-label="Permalink to &quot;三、数据类型&quot;">​</a></h3><p>JavaScript支持基本数据类型－数字、文本字符串和布尔值，小数据类型null和undefined，复合型数据类型－函数、对象（数组、已命名的值的无序集合）。</p><h4 id="_1-数字" tabindex="-1">1.数字 <a class="header-anchor" href="#_1-数字" aria-label="Permalink to &quot;1.数字&quot;">​</a></h4><ol><li><strong>整型</strong>，包括-253和253之间所有整数（包括-253和253），但是要注意JavaScript中某些整数运算（例如逐位运算符）范围从-231和231-1</li><li><strong>八进制和十六进制</strong>，十六进制以”0X”或”0x”开头，例如 0xfff、0XCAE3；八进制以0开头，例如0377</li><li><strong>浮点型</strong>，最大可以到±1.7976931348623157x10308，最小到±5x10-324 可以采用传统科学记数法，例如3.14、.333，也可以使用指数记数法，例如6.02e23、1.43E-32</li><li><strong>特殊数值</strong>，大于浮点值所能表示范围时JavaScript输出Infinity，当负无穷大比所能表示负值还小时输出-Infinity，另外还有非数字特殊值NaN，例如一个数除与0将返回NaN，它和任何数值不相等，包括本身，可以使用isNaN()函数来检测这个值</li><li><strong>使用方法</strong><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sine_of_x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 26</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div></li></ol><h4 id="_2-字符串" tabindex="-1">2.字符串 <a class="header-anchor" href="#_2-字符串" aria-label="Permalink to &quot;2.字符串&quot;">​</a></h4><p>有单引号或双引号括起来的unicode字符序列，但字符串包括单引号或双引号时，要用反斜线符号()进行转移，例如”O’Reilly’s”应写为”O&amp;rsquo;Reilly&amp;rsquo;s”</p><p><strong>JavaScript 转移序列</strong></p><p>\\0 NUL字符 \\b 退格 \\f 走纸换页 \\n 换行 \\r 回车 \\t 水平制表符 \\v 垂直制表符 &#39; 单引号 &amp;quot; 双引号 \\ 反斜杠变量 \\xXX 2位十六进制指定Lation-1字符 \\uXXXX 4位十六进制指定Unicode字符</p><p>**使用方法 **</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello,&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Blue&quot;</span></span></code></pre></div><h4 id="_3-布尔值" tabindex="-1">3.布尔值 <a class="header-anchor" href="#_3-布尔值" aria-label="Permalink to &quot;3.布尔值&quot;">​</a></h4><p>数据类型只有true和false，表示真或假，常用在if 判断。</p><p>有时可以看作on和off，0和1</p><h4 id="_4-函数" tabindex="-1">4.函数 <a class="header-anchor" href="#_4-函数" aria-label="Permalink to &quot;4.函数&quot;">​</a></h4><p>函数是一个可执行的JavaScript代码段，定义一次就可以被多次调用执行。</p><p>JavaScript中的函数是一个真正的数据类型，所以函数可以被存储在变量、数组和对象中，还可以作为参数传递给其它函数。</p><h4 id="_5-对象" tabindex="-1">5.对象 <a class="header-anchor" href="#_5-对象" aria-label="Permalink to &quot;5.对象&quot;">​</a></h4><p>对象是已命名的数据集合，数据通常作为对象的属性来引用。</p><p>例如</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> image.width;</span></span></code></pre></div><p>对象里面包含方法，例如</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h4 id="_6-数组" tabindex="-1">6.数组 <a class="header-anchor" href="#_6-数组" aria-label="Permalink to &quot;6.数组&quot;">​</a></h4><p>JavaScript中数组下标值是从0开始的，例如a[3]表示a数组中第四个元素</p><p>使用方法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//创建3个元素的数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>也可以这样创建</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="四、变量" tabindex="-1">四、变量 <a class="header-anchor" href="#四、变量" aria-label="Permalink to &quot;四、变量&quot;">​</a></h3><p>变量是一个和数值相关的名字。</p><h4 id="_1-类型" tabindex="-1">1.类型 <a class="header-anchor" href="#_1-类型" aria-label="Permalink to &quot;1.类型&quot;">​</a></h4><p>在C、C++、Java中，变量只能存放所声明的数据类型，但在JavaScript中，变量是无类型的，你可以先把一个数值赋给变量，然后再把字符串赋给它，这是合法的。</p><p>基本类型和引用类型，……</p><h4 id="_2-声明" tabindex="-1">2.声明 <a class="header-anchor" href="#_2-声明" aria-label="Permalink to &quot;2.声明&quot;">​</a></h4><p>使用一个变量之前必须先声明，如果没有指定初始值那变量初始值是undefined，重复使用var声明同一个变量是合法的。</p><p>如果给一个未声明的变量赋值，JavaScript会隐式声明该变量，并且该变量会被创建为全局变量，但如果程序读取一个未声明的变量，将会报错。</p>`,47),h=[p];function e(k,r,d,o,g,c){return i(),a("div",{"data-pagefind-body":!0},h)}const u=s(l,[["render",e]]);export{y as __pageData,u as default};
