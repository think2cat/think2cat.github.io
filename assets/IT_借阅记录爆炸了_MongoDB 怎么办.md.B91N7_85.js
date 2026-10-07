import{_ as s,o as a,c as n,a7 as p}from"./chunks/framework.iV91xLPg.js";const i="/images/2026/model4_top.png",e="/images/2026/model4_1.png",l="/images/2026/model4_2.png",t="/images/2026/model4_3.png",o="/images/2026/model4_4.png",c="/images/2026/model4_5.png",h="/images/2026/model4_6.png",d="/images/2026/model4_7.png",k="/images/2026/model4_8.png",_=JSON.parse('{"title":"借阅记录爆炸了，MongoDB 怎么办？MongoDB 数据建模进阶（二）","description":"","frontmatter":{"title":"借阅记录爆炸了，MongoDB 怎么办？MongoDB 数据建模进阶（二）","date":"2026-09-18T14:06:16.000Z","tags":["MongoDB"],"categories":["IT"]},"headers":[],"relativePath":"IT/借阅记录爆炸了_MongoDB 怎么办.md","filePath":"IT/借阅记录爆炸了_MongoDB 怎么办.md","lastUpdated":1791382292000}'),r={name:"IT/借阅记录爆炸了_MongoDB 怎么办.md"},g=p('<p><img src="'+i+'" alt=""></p><h1 id="借阅统计每次都要重新算-mongodb-数据建模进阶-三" tabindex="-1">借阅统计每次都要重新算？MongoDB 数据建模进阶（三） <a class="header-anchor" href="#借阅统计每次都要重新算-mongodb-数据建模进阶-三" aria-label="Permalink to &quot;借阅统计每次都要重新算？MongoDB 数据建模进阶（三）&quot;">​</a></h1><p>前两篇，我们一直在解决一个问题：</p><blockquote><p><strong>数据越来越多以后，应该怎么组织？</strong></p></blockquote><p>我们先后讲了：</p><ul><li><strong>Subset Pattern</strong>：只保留常用的数据</li><li><strong>Outlier Pattern</strong>：特殊数据单独处理</li><li><strong>Bucket Pattern</strong>：把不断增长的数据分组</li><li><strong>Archive Pattern</strong>：把历史数据单独管理</li></ul><p>这一篇我们换一个角度。</p><p>假设图书馆现在已经积累了大量借阅记录，数据结构也设计得比较合理。</p><p>但是管理人员又提出了一个问题：</p><blockquote><p><strong>“我每天打开借阅统计报表，为什么数据库每次都要重新算？”</strong></p></blockquote><p>这时候，我们就遇到了 <strong>Computed Pattern（计算模式）</strong>。</p><p><img src="'+e+`" alt=""></p><h1 id="一、统计报表为什么越来越慢" tabindex="-1">一、统计报表为什么越来越慢？ <a class="header-anchor" href="#一、统计报表为什么越来越慢" aria-label="Permalink to &quot;一、统计报表为什么越来越慢？&quot;">​</a></h1><p>图书馆后台有一个“借阅统计”页面。</p><p>管理员打开以后，可以看到：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2026 年 9 月借阅排行榜</span></span>
<span class="line"><span></span></span>
<span class="line"><span>《三体》        12,856 次</span></span>
<span class="line"><span>《活着》         9,632 次</span></span>
<span class="line"><span>《百年孤独》     8,421 次</span></span>
<span class="line"><span>《围城》         7,982 次</span></span>
<span class="line"><span>……</span></span></code></pre></div><p>这些数据来自最原始的借阅记录：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-15&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>一天几千条，一年下来可能就是几百万甚至更多。</p><p>现在管理员每打开一次“9 月借阅排行榜”，系统都可以从 <code>borrow_records</code> 中重新统计：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>borrow_records</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>筛选 2026 年 9 月</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>按 bookId 分组</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>统计每本书借了多少次</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>排序</span></span>
<span class="line"><span>       ↓</span></span>
<span class="line"><span>返回排行榜</span></span></code></pre></div><p>MongoDB 的聚合管道本来就是用来对大量文档进行分组、计算和分析的，所以这种做法完全可以成立。</p><p>问题在于：</p><blockquote><p><strong>如果这个统计页面一天被打开很多次，相同的计算就会被反复执行。</strong></p></blockquote><p>例如上午 9 点有人查一次，10 点又有人查一次，下午又有人查几十次。</p><p>数据可能根本没有发生明显变化，但系统却一次又一次地重复做同样的统计。</p><p><img src="`+l+`" alt=""></p><h1 id="二、第一种办法-每次查询时现算" tabindex="-1">二、第一种办法：每次查询时现算 <a class="header-anchor" href="#二、第一种办法-每次查询时现算" aria-label="Permalink to &quot;二、第一种办法：每次查询时现算&quot;">​</a></h1><p>最简单的办法当然是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户打开页面</span></span>
<span class="line"><span>     ↓</span></span>
<span class="line"><span>MongoDB 聚合</span></span>
<span class="line"><span>     ↓</span></span>
<span class="line"><span>统计借阅记录</span></span>
<span class="line"><span>     ↓</span></span>
<span class="line"><span>返回结果</span></span></code></pre></div><p>例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.borrow_records.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $match: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            borrowDate: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                $gte: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09-01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                $lt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-10-01&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $group: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            _id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$bookId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            borrowCount: { $sum: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $sort: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            borrowCount: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre></div><p>这种方式最大的优点是：</p><blockquote><p><strong>结果直接来自原始数据，逻辑简单，数据也容易保持最新。</strong></p></blockquote><p>而且对于数据量不大、查询不频繁的系统，这种方式可能已经完全够用了。</p><p>所以不要看到“Computed Pattern”，就觉得所有统计都应该提前计算。</p><p><strong>数据量小、查询少，直接计算往往更简单。</strong></p><h1 id="三、第二种办法-给结果加一个缓存" tabindex="-1">三、第二种办法：给结果加一个缓存 <a class="header-anchor" href="#三、第二种办法-给结果加一个缓存" aria-label="Permalink to &quot;三、第二种办法：给结果加一个缓存&quot;">​</a></h1><p>如果统计数据计算比较重，但是结果又经常被查询，一个非常常见的办法就是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>第一次查询</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>MongoDB 聚合</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>得到结果</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>放入 Redis 等缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后面的查询</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>直接读取缓存</span></span></code></pre></div><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>借阅排行榜</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>Redis</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>《三体》：12856</span></span>
<span class="line"><span>《活着》：9632</span></span>
<span class="line"><span>……</span></span></code></pre></div><p>这样，后面的请求就不需要重复进行 MongoDB 聚合。</p><p>这种方案在真实项目里非常常见。</p><p>但是：</p><blockquote><p><strong>缓存解决的是“重复读取/重复计算”的问题，并不等于 Computed Pattern。</strong></p></blockquote><p>因为缓存本质上还是应用层的缓存。</p><p>它可能会：</p><ul><li>过期</li><li>被删除</li><li>因为缓存失效重新计算</li><li>因为更新策略不同出现短暂不一致</li></ul><p>而且缓存中的数据通常也不是数据库的正式数据模型。</p><p>所以，我们还有第三种办法。</p><p><img src="`+t+`" alt=""></p><h1 id="四、第三种办法-直接把计算结果保存下来" tabindex="-1">四、第三种办法：直接把计算结果保存下来 <a class="header-anchor" href="#四、第三种办法-直接把计算结果保存下来" aria-label="Permalink to &quot;四、第三种办法：直接把计算结果保存下来&quot;">​</a></h1><p>图书馆发现：</p><blockquote><p>这个排行榜每天都会被大量查询，但借阅记录本身只是在不断增加，排行榜没必要每次都重新从头计算。</p></blockquote><p>于是可以把统计结果保存起来。</p><p>例如增加一个集合：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>book_borrow_stats</span></span></code></pre></div><p>里面保存：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12856</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>另外一本：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bookId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2026-09&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    borrowCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9632</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>现在整个流程变成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原始借阅记录</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>    定时 / 异步统计</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>book_borrow_stats</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>接口直接查询统计结果</span></span></code></pre></div><p>用户打开排行榜的时候，不再扫描大量借阅记录。</p><p>而是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>接口</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>book_borrow_stats</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>排行榜</span></span></code></pre></div><p>这样，<strong>统计计算和用户查询被分开了。</strong></p><p>MongoDB 官方将这种“预先计算并保存结果，查询时直接读取”的方式归入 Computed Pattern。官方文档也明确提到，计算结果可以在写入时更新，也可以通过周期性任务重新计算；当读操作明显多于写操作时，这种方式可以减少重复计算。</p><p><img src="`+o+`" alt=""></p><h1 id="五、统计结果怎么更新" tabindex="-1">五、统计结果怎么更新？ <a class="header-anchor" href="#五、统计结果怎么更新" aria-label="Permalink to &quot;五、统计结果怎么更新？&quot;">​</a></h1><p>这才是这个方案真正值得讨论的地方。</p><p>我们不可能只计算一次。</p><p>因为借阅数据还在不断增加：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>今天</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>12,856 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>明天</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>12,920 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后天</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>13,041 次</span></span></code></pre></div><p>所以统计结果也需要更新。</p><p>一种非常实际的方式是：</p><blockquote><p><strong>定时重新计算。</strong></p></blockquote><p>例如每天凌晨：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>00:00</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>统计昨天的借阅记录</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>更新统计集合</span></span></code></pre></div><p>或者每小时：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>每小时</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>重新统计</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>更新结果</span></span></code></pre></div><p>MongoDB 官方文档也给出了周期任务更新计算结果的方案，并展示了通过聚合管道配合 <code>$merge</code> 将计算结果写回目标集合的方式。</p><p>例如可以简化成：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db.borrow_records.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aggregate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $group: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            _id: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                bookId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$bookId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                month: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    $dateToString: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%Y-%m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                        date: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$borrowDate&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            borrowCount: { $sum: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        $merge: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            into: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;book_borrow_stats&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            on: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            whenMatched: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;replace&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            whenNotMatched: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;insert&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span></code></pre></div><p>这里的思路并不复杂：</p><blockquote><p><strong>原始数据负责保存事实，统计集合负责保存已经计算好的结果。</strong></p></blockquote><h1 id="六、一定要实时计算吗" tabindex="-1">六、一定要实时计算吗？ <a class="header-anchor" href="#六、一定要实时计算吗" aria-label="Permalink to &quot;六、一定要实时计算吗？&quot;">​</a></h1><p>不一定。</p><p>这恰恰是实际项目中很重要的一点。</p><p>例如图书馆后台的“月度借阅排行榜”：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>每天凌晨更新一次</span></span></code></pre></div><p>完全可能已经满足业务需求。</p><p>管理员看到：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>截至昨天</span></span>
<span class="line"><span>《三体》：12,856 次</span></span></code></pre></div><p>通常不会认为系统出了问题。</p><p>但如果是：</p><blockquote><p><strong>当前馆内还有多少本书可借？</strong></p></blockquote><p>那就明显不一样了。</p><p>这种数据可能要求非常高的实时性，就不适合简单地每天计算一次。</p><p>所以是否使用 Computed Pattern，需要先问：</p><blockquote><p><strong>这个结果需要多实时？</strong></p></blockquote><p>可以大致分成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>强实时</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>直接查询 / 实时更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>允许延迟几分钟</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>异步计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>允许延迟几小时</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>定时计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>允许每天更新</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>定时批量统计</span></span></code></pre></div><p>MongoDB 官方也明确指出，周期性更新的计算结果不一定始终精确到最新数据；但如果业务并不要求绝对实时，这种方式可能换来更好的性能。</p><h1 id="七、那接口-延迟计算-又是什么" tabindex="-1">七、那接口“延迟计算”又是什么？ <a class="header-anchor" href="#七、那接口-延迟计算-又是什么" aria-label="Permalink to &quot;七、那接口“延迟计算”又是什么？&quot;">​</a></h1><p>还有一种很常见的做法：</p><blockquote><p><strong>不要提前永久保存，等真正有人请求的时候再算。</strong></p></blockquote><p>比如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用户请求排行榜</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>最近一次统计结果不存在</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>接口执行聚合</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>返回结果</span></span>
<span class="line"><span>      ↓</span></span>
<span class="line"><span>顺便保存到缓存</span></span></code></pre></div><p>这其实就是一种“按需计算”。</p><p>它和 Computed Pattern 并不冲突。</p><p>实际项目中甚至可以组合起来：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>正常情况</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>直接读取已经计算好的统计结果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果过期</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>重新计算</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重新计算完成</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>更新统计结果</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>后续请求直接读取</span></span></code></pre></div><p>所以真实系统里，经常不是：</p><blockquote><p><strong>只能选一种方式。</strong></p></blockquote><p>而是根据数据特点，把：</p><p><strong>数据库聚合 + 异步任务 + 持久化统计结果 + Redis 缓存</strong></p><p>组合起来使用。</p><p><img src="`+c+`" alt=""></p><h1 id="八、computed-pattern-到底是什么" tabindex="-1">八、Computed Pattern 到底是什么？ <a class="header-anchor" href="#八、computed-pattern-到底是什么" aria-label="Permalink to &quot;八、Computed Pattern 到底是什么？&quot;">​</a></h1><p>讲到这里，再回头看这个 Pattern，就很好理解了。</p><p>它并不是：</p><blockquote><p>“给数据加一个 <code>count</code> 字段。”</p></blockquote><p>也不是：</p><blockquote><p>“必须实时计算。”</p></blockquote><p>更准确地说：</p><blockquote><p><strong>把原本需要查询时反复计算的结果，提前计算出来，并保存下来供后续查询使用。</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原来的方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>借阅记录</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>用户查询</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>重新统计</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>返回结果</span></span></code></pre></div><p>变成：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Computed Pattern</span></span>
<span class="line"><span></span></span>
<span class="line"><span>借阅记录</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>定时 / 异步计算</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>保存统计结果</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>用户查询</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>直接读取</span></span></code></pre></div><p>这就是 <strong>Computed Pattern（计算模式）</strong>。</p><h1 id="九、这种设计有什么代价" tabindex="-1">九、这种设计有什么代价？ <a class="header-anchor" href="#九、这种设计有什么代价" aria-label="Permalink to &quot;九、这种设计有什么代价？&quot;">​</a></h1><p>当然不会只有好处。</p><p>最大的代价就是：</p><blockquote><p><strong>原始数据和计算结果之间需要维护一致性。</strong></p></blockquote><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>borrow_records</span></span>
<span class="line"><span>真实借阅：12,920 次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>book_borrow_stats</span></span>
<span class="line"><span>统计结果：12,856 次</span></span></code></pre></div><p>这并不一定是错误。</p><p>如果我们的统计任务是每天凌晨执行，那么白天产生的新借阅还没有进入统计结果，这是预期的。</p><p>但如果业务要求：</p><blockquote><p>“统计结果必须实时准确。”</p></blockquote><p>那就不能简单依赖每天一次的批处理。</p><p>可能需要：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>写入借阅记录</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>同时更新统计结果</span></span></code></pre></div><p>或者：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>写入借阅记录</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>发送消息 / 触发异步任务</span></span>
<span class="line"><span>        ↓</span></span>
<span class="line"><span>更新统计结果</span></span></code></pre></div><p>具体采用哪种方式，取决于业务对：</p><ul><li>实时性</li><li>一致性</li><li>写入压力</li><li>计算成本</li></ul><p>的要求。</p><p>这也是 Computed Pattern 最大的特点：</p><blockquote><p><strong>它不是白拿性能，而是用额外的数据维护换取更低的查询计算成本。</strong></p></blockquote><p>MongoDB 官方也提醒，Schema Pattern 本身存在性能、一致性和复杂度方面的取舍，不能脱离具体业务直接套用。</p><h1 id="十、别把-computed-pattern-和缓存混在一起" tabindex="-1">十、别把 Computed Pattern 和缓存混在一起 <a class="header-anchor" href="#十、别把-computed-pattern-和缓存混在一起" aria-label="Permalink to &quot;十、别把 Computed Pattern 和缓存混在一起&quot;">​</a></h1><p>到这里可以简单区分一下。</p><h3 id="直接计算" tabindex="-1">直接计算 <a class="header-anchor" href="#直接计算" aria-label="Permalink to &quot;直接计算&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请求</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>MongoDB 聚合</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>返回</span></span></code></pre></div><p>优点是简单、结果新。</p><p><img src="`+h+`" alt=""></p><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请求</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>Redis</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>直接返回</span></span>
<span class="line"><span></span></span>
<span class="line"><span>没有缓存</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>重新计算</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>写入缓存</span></span></code></pre></div><p>重点是：</p><blockquote><p><strong>减少重复访问和计算。</strong></p></blockquote><h3 id="computed-pattern" tabindex="-1">Computed Pattern <a class="header-anchor" href="#computed-pattern" aria-label="Permalink to &quot;Computed Pattern&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>原始数据</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>提前计算</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>保存统计结果</span></span>
<span class="line"><span> ↓</span></span>
<span class="line"><span>请求直接读取</span></span></code></pre></div><p>重点是：</p><blockquote><p><strong>把计算结果变成数据模型的一部分。</strong></p></blockquote><p>MongoDB 本身还提供了 <strong>On-Demand Materialized View（按需物化视图）</strong>，本质上就是把聚合结果保存下来供读取，通常通过 <code>$merge</code> 或 <code>$out</code> 更新。它和这里讨论的“预计算并保存结果”思路非常接近。</p><p>对于初学者来说，可以先记住：</p><blockquote><p><strong>缓存是缓存，Computed 是数据建模。</strong></p></blockquote><p>两者可以一起使用，但不是同一个概念。</p><h1 id="十一、什么情况下值得使用" tabindex="-1">十一、什么情况下值得使用？ <a class="header-anchor" href="#十一、什么情况下值得使用" aria-label="Permalink to &quot;十一、什么情况下值得使用？&quot;">​</a></h1><p>并不是看到统计数据就应该使用 Computed Pattern。</p><p>比较典型的情况是：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>数据量比较大</span></span>
<span class="line"><span>        +</span></span>
<span class="line"><span>同一个结果经常被查询</span></span>
<span class="line"><span>        +</span></span>
<span class="line"><span>计算成本比较高</span></span>
<span class="line"><span>        +</span></span>
<span class="line"><span>结果不要求每次都实时重新计算</span></span></code></pre></div><p>例如：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>月度借阅排行榜</span></span>
<span class="line"><span>年度借阅统计</span></span>
<span class="line"><span>热门图书排行</span></span>
<span class="line"><span>每日借阅趋势</span></span>
<span class="line"><span>图书馆运营报表</span></span></code></pre></div><p>这些都比较适合考虑预计算。</p><p>而下面这种查询：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查询某个读者</span></span>
<span class="line"><span>最近 7 天借了哪些书？</span></span></code></pre></div><p>如果数据量不大，而且查询并不频繁，就没必要为了它专门维护一份计算结果。</p><p>所以最终还是回到这一系列一直强调的原则：</p><blockquote><p><strong>先看业务怎么查询，再决定数据怎么设计。</strong></p></blockquote><p><img src="`+d+`" alt=""></p><h1 id="十二、这一系列终于串起来了" tabindex="-1">十二、这一系列终于串起来了 <a class="header-anchor" href="#十二、这一系列终于串起来了" aria-label="Permalink to &quot;十二、这一系列终于串起来了&quot;">​</a></h1><p>到这里，我们这一组 MongoDB 数据建模文章也基本完整了。</p><p>从最开始：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>相关数据放一起还是分开？</span></span></code></pre></div><p>到后来：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>数据太多怎么办？</span></span></code></pre></div><p>再到：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>数据越来越多怎么办？</span></span></code></pre></div><p>最后：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>查询时总是重复计算怎么办？</span></span></code></pre></div><p>对应的 Pattern 就变成了：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Subset</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>只保留常用的数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Outlier</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>特殊数据单独处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bucket</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>不断增长的数据分组管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Archive</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>历史数据单独管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Computed</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>把常用计算结果提前保存</span></span></code></pre></div><p>其实你会发现：</p><blockquote><p><strong>这些 Pattern 并不是五个需要死记的英文名词。</strong></p></blockquote><p>它们只是数据库在不同阶段遇到不同问题时，给出的解决思路。</p><p><img src="`+k+`" alt=""></p><h1 id="十三、最后记住一句话" tabindex="-1">十三、最后记住一句话 <a class="header-anchor" href="#十三、最后记住一句话" aria-label="Permalink to &quot;十三、最后记住一句话&quot;">​</a></h1><p>Computed Pattern 可以简单理解成：</p><blockquote><p><strong>不要让每个请求都重复做同一道计算题。</strong></p></blockquote><p>如果一个统计结果：</p><ul><li>计算成本比较高</li><li>查询次数很多</li><li>数据更新没有那么频繁</li><li>业务允许一定程度的延迟</li></ul><p>那么就可以考虑：</p><blockquote><p><strong>提前算好，保存下来，需要的时候直接拿。</strong></p></blockquote><p>这就是 MongoDB 的：</p><p><strong>Computed Pattern（计算模式）。</strong></p><p>而在真实项目中，它往往不会孤立存在。</p><p>它可能和：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Aggregation</span></span>
<span class="line"><span>Redis</span></span>
<span class="line"><span>定时任务</span></span>
<span class="line"><span>异步消息</span></span>
<span class="line"><span>物化视图</span></span>
<span class="line"><span>Bucket Pattern</span></span></code></pre></div><p>一起使用。</p><p>这才是实际系统中的数据建模：</p><blockquote><p><strong>不是为了使用某个 Pattern，而是根据真实的读写、查询、实时性和数据规模，选择合适的组合。</strong></p></blockquote>`,216),u=[g];function E(b,v,y,m,C,x){return a(),n("div",{"data-pagefind-body":!0},u)}const F=s(r,[["render",E]]);export{_ as __pageData,F as default};
