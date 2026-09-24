import{_ as s,o as a,c as n,a7 as p}from"./chunks/framework.DHDObbvy.js";const i="/images/2026/model3.png",t="/images/2026/model3_bucket.png",e="/images/2026/model3_archive.png",l="/images/2026/model3_diff.png",y=JSON.parse('{"title":"借阅记录爆炸了，怎么办？MongoDB 数据建模进阶（二）","description":"","frontmatter":{"title":"借阅记录爆炸了，怎么办？MongoDB 数据建模进阶（二）","date":"2026-09-18T14:06:16.000Z","tags":["MongoDB"],"categories":["IT"]},"headers":[],"relativePath":"IT/借阅记录爆炸了，MongoDB 数据建模进阶（二）.md","filePath":"IT/借阅记录爆炸了，MongoDB 数据建模进阶（二）.md","lastUpdated":1790231748000}'),h={name:"IT/借阅记录爆炸了，MongoDB 数据建模进阶（二）.md"},o=p('<p><img src="'+i+'" alt="MongoDB model"></p><h1 id="借阅记录爆炸了-怎么办-mongodb-数据建模进阶-二" tabindex="-1">借阅记录爆炸了，怎么办？MongoDB 数据建模进阶（二） <a class="header-anchor" href="#借阅记录爆炸了-怎么办-mongodb-数据建模进阶-二" aria-label="Permalink to &quot;借阅记录爆炸了，怎么办？MongoDB 数据建模进阶（二）&quot;">​</a></h1><p>上一篇，我们解决了两个问题：</p><p><strong>一本书的数据太多怎么办？</strong></p><p>可以用 <strong>Subset Pattern</strong>，只把常用的数据放进主文档。</p><p><strong>少数数据特别大怎么办？</strong></p><p>可以用 <strong>Outlier Pattern</strong>，把特殊数据单独处理。</p><p>但如果问题再扩大一点呢？</p><p>图书馆每天都有几千、几万条借阅记录。</p><p>一个月几十万条，一年几百万条。</p><p>这时候麻烦的已经不是“一本书太大”，而是：</p><blockquote><p><strong>整个借阅记录库都在不断膨胀。</strong></p></blockquote><p>那这些数据应该怎么组织？</p><p><img src="'+t+`" alt=""></p><h2 id="一、借阅记录越来越多-能不能-分箱-保存" tabindex="-1">一、借阅记录越来越多，能不能“分箱”保存？ <a class="header-anchor" href="#一、借阅记录越来越多-能不能-分箱-保存" aria-label="Permalink to &quot;一、借阅记录越来越多，能不能“分箱”保存？&quot;">​</a></h2><p>想象一下，图书馆上线了一套新的借阅系统。</p><p>刚开始，每天只有几百条记录：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>9月15日：386 条</span></span>
<span class="line"><span>9月16日：421 条</span></span>
<span class="line"><span>9月17日：397 条</span></span></code></pre></div><p>几个月以后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>每天：几万条</span></span></code></pre></div><p>一年以后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>全年：几百万条</span></span></code></pre></div><p>如果所有记录都是这样平铺存储：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-20&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-20&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10003</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20003</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-20&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>当然没问题。</p><p>但管理员经常会问：</p><blockquote><p>“9 月 20 日一共借出了多少本书？”</p></blockquote><p>或者：</p><blockquote><p>“9 月 1 日到 9 月 7 日的借阅情况怎么样？”</p></blockquote><p>既然借阅记录天然带有时间属性，那么我们完全可以顺着这个规律来组织数据。</p><p>比如按天分组：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2026-09-20</span></span>
<span class="line"><span>├── 借阅记录</span></span>
<span class="line"><span>├── 借阅记录</span></span>
<span class="line"><span>├── 借阅记录</span></span>
<span class="line"><span>└── ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2026-09-21</span></span>
<span class="line"><span>├── 借阅记录</span></span>
<span class="line"><span>├── 借阅记录</span></span>
<span class="line"><span>└── ...</span></span></code></pre></div><p>在 MongoDB 中，可以把同一时间段的数据放进一个“桶”：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-20&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    records</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            bookId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20001</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            bookId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20002</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>第二天，再创建新的桶：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-21&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    records</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            bookId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10003</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            userId: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20003</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这样，原本一条一条不断增长的数据，就被整理成了：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>9月20日 → 一个桶</span></span>
<span class="line"><span>9月21日 → 一个桶</span></span>
<span class="line"><span>9月22日 → 一个桶</span></span>
<span class="line"><span>……</span></span></code></pre></div><p>这就是 <strong>Bucket Pattern（桶模式）</strong>。</p><h3 id="重点不是-按天" tabindex="-1">重点不是“按天” <a class="header-anchor" href="#重点不是-按天" aria-label="Permalink to &quot;重点不是“按天”&quot;">​</a></h3><p>这里最容易产生一个误解：</p><blockquote><p>Bucket Pattern 就是按天存数据。</p></blockquote><p>其实不是。</p><p>按天只是其中一种方式。</p><p>如果一天的数据太多，可以按小时：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>09:00～10:00</span></span>
<span class="line"><span>10:00～11:00</span></span>
<span class="line"><span>11:00～12:00</span></span></code></pre></div><p>也可以按照数量：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>每 1000 条记录一个桶</span></span></code></pre></div><p>甚至可以按照业务特点划分。</p><p>真正重要的是：</p><blockquote><p><strong>找到一种适合查询和数据增长方式的分组规则。</strong></p></blockquote><p>所以 Bucket Pattern 可以简单理解成：</p><blockquote><p><strong>数据越来越多，就别让它一直平铺着，按照合适的规则分成一桶一桶。</strong></p></blockquote><h2 id="二、几年以后-这些旧记录怎么办" tabindex="-1">二、几年以后，这些旧记录怎么办？ <a class="header-anchor" href="#二、几年以后-这些旧记录怎么办" aria-label="Permalink to &quot;二、几年以后，这些旧记录怎么办？&quot;">​</a></h2><p>借阅系统继续运行。</p><p>2026 年的数据变成了：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2026</span></span>
<span class="line"><span>2025</span></span>
<span class="line"><span>2024</span></span>
<span class="line"><span>2023</span></span>
<span class="line"><span>2022</span></span>
<span class="line"><span>2021</span></span>
<span class="line"><span>……</span></span></code></pre></div><p>这时候管理员又发现了一个有趣的规律：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>最近 3 个月</span></span>
<span class="line"><span>→ 经常查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1～2 年前</span></span>
<span class="line"><span>→ 偶尔查</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5 年前</span></span>
<span class="line"><span>→ 很少查</span></span></code></pre></div><p>比如今天是 2026 年 9 月</p><p>管理员每天最常看的，可能都是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2026 年</span></span>
<span class="line"><span>2025 年</span></span></code></pre></div><p>至于 2016 年的借阅记录，可能几个月都不会有人碰一次。</p><p>那有没有必要让这些十年前的数据，和今天的数据一样“活跃”？</p><p>其实没必要。</p><p><img src="`+e+`" alt=""></p><h3 id="图书馆里的做法更直观" tabindex="-1">图书馆里的做法更直观 <a class="header-anchor" href="#图书馆里的做法更直观" aria-label="Permalink to &quot;图书馆里的做法更直观&quot;">​</a></h3><p>现实中的图书馆不会把几十年前的所有资料都堆在服务台旁边。</p><p>通常会分成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>日常使用区</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>最近资料</span></span>
<span class="line"><span></span></span>
<span class="line"><span>历史档案区</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>很少使用的旧资料</span></span></code></pre></div><p>MongoDB 也可以采用类似思路。</p><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>borrow_records</span></span></code></pre></div><p>保存当前还比较活跃的数据。</p><p>而很久以前的数据：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>borrow_records_archive</span></span></code></pre></div><p>单独保存。</p><p>于是查询就很自然：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查最近借阅记录</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>borrow_records</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查十年前的历史记录</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>borrow_records_archive</span></span></code></pre></div><p>这就是 <strong>Archive Pattern（归档模式）</strong>。</p><p>它的重点不是：</p><blockquote><p>“旧数据没用了，删掉。”</p></blockquote><p>而是：</p><blockquote><p><strong>旧数据还要保留，但没必要和活跃数据采用完全一样的管理方式。</strong></p></blockquote><p>比如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2018 年借阅记录</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>历史档案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2026 年借阅记录</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>日常数据</span></span></code></pre></div><p>将来有人真的要查 2018 年的数据，仍然可以查到。</p><p><img src="`+l+`" alt=""></p><h2 id="三、bucket-和-archive-其实解决的是两个不同的问题" tabindex="-1">三、Bucket 和 Archive，其实解决的是两个不同的问题 <a class="header-anchor" href="#三、bucket-和-archive-其实解决的是两个不同的问题" aria-label="Permalink to &quot;三、Bucket 和 Archive，其实解决的是两个不同的问题&quot;">​</a></h2><p>这两个 Pattern 很容易混在一起。</p><p>其实可以用一句话区分。</p><h3 id="bucket" tabindex="-1">Bucket <a class="header-anchor" href="#bucket" aria-label="Permalink to &quot;Bucket&quot;">​</a></h3><p>面对的是：</p><blockquote><p><strong>数据正在不断增加。</strong></p></blockquote><p>于是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>大量数据</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>分成一个个桶</span></span></code></pre></div><p>解决的是：</p><blockquote><p><strong>数据怎么组织。</strong></p></blockquote><h3 id="archive" tabindex="-1">Archive <a class="header-anchor" href="#archive" aria-label="Permalink to &quot;Archive&quot;">​</a></h3><p>面对的是：</p><blockquote><p><strong>数据已经很久不活跃了。</strong></p></blockquote><p>于是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>活跃数据</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>正常使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>历史数据</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>单独归档</span></span></code></pre></div><p>解决的是：</p><blockquote><p><strong>数据怎么管理生命周期。</strong></p></blockquote><p>把借阅记录整个生命周期连起来看，就很好理解了：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>新借阅记录产生</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>按时间或其他规则分桶</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>持续使用</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>慢慢变成历史数据</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>进入归档区</span></span></code></pre></div><p>也就是说：</p><blockquote><p><strong>Bucket 负责“怎么装”，Archive 负责“老了以后放哪”。</strong></p></blockquote><h2 id="四、是不是数据一多-就必须上-pattern" tabindex="-1">四、是不是数据一多，就必须上 Pattern？ <a class="header-anchor" href="#四、是不是数据一多-就必须上-pattern" aria-label="Permalink to &quot;四、是不是数据一多，就必须上 Pattern？&quot;">​</a></h2><p>当然不是。</p><p>假设一家小图书馆每天只有：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>50 条借阅记录</span></span></code></pre></div><p>一年也就一两万条。</p><p>这种情况下，完全没必要为了使用 Bucket Pattern，而把数据模型搞得很复杂。</p><p>同样，如果五年前的借阅记录现在每天都有人查询，也没必要为了“Archive Pattern”强行搬走。</p><p>所以真正应该问的不是：</p><blockquote><p>“这个项目用了几个 Pattern？”</p></blockquote><p>而是：</p><blockquote><p><strong>现在的数据规模、查询方式和生命周期，真的需要吗？</strong></p></blockquote><p>MongoDB 数据建模一直强调一个原则：</p><blockquote><p><strong>先看业务怎么访问数据，再决定数据怎么组织。</strong></p></blockquote><p>Pattern 只是解决问题的工具，不是数据库设计的“必做题”。</p><h1 id="五、最后记住两个名字" tabindex="-1">五、最后记住两个名字 <a class="header-anchor" href="#五、最后记住两个名字" aria-label="Permalink to &quot;五、最后记住两个名字&quot;">​</a></h1><p>这一篇其实只需要记住两句话。</p><p><strong>Bucket Pattern（桶模式）</strong></p><blockquote><p><strong>数据越来越多，就按照合适的规则分成一桶一桶。</strong></p></blockquote><p>解决：</p><blockquote><p><strong>正在增长的数据怎么组织。</strong></p></blockquote><p><strong>Archive Pattern（归档模式）</strong></p><blockquote><p><strong>数据已经很久不活跃，就把它单独管理。</strong></p></blockquote><p>解决：</p><blockquote><p><strong>历史数据怎么管理。</strong></p></blockquote><p>放回我们的图书馆：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>借阅记录不断增加</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>Bucket</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>一桶一桶管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据慢慢变旧</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>Archive</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>历史数据单独保存</span></span></code></pre></div><p>所以，MongoDB 数据建模并不是在背一堆 Pattern。</p><p>真正重要的是看到数据以后，能够判断：</p><ul><li><strong>它会怎么增长？</strong></li><li><strong>它通常怎么查询？</strong></li><li><strong>它什么时候会从“活跃数据”变成“历史数据”？</strong></li></ul><p>想清楚这些问题，Pattern 自然就知道该不该用了。</p>`,139),c=[o];function k(d,r,g,u,E,b){return a(),n("div",{"data-pagefind-body":!0},c)}const C=s(h,[["render",k]]);export{y as __pageData,C as default};
