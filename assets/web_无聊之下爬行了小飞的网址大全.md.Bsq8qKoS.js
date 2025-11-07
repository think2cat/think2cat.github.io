import{_ as n,c as s,o as a,a7 as p}from"./chunks/framework.DZen7A7t.js";const e="/images/2006/02/24_2006-2-224737505_12713.gif",g=JSON.parse('{"title":"无聊之下爬行了小飞的网址大全","description":"","frontmatter":{"title":"无聊之下爬行了小飞的网址大全","tags":["vb","vbs","spider"],"id":865,"categories":["Web"],"abbrlink":"ca437a69","date":"2006-02-24T01:37:14.000Z"},"headers":[],"relativePath":"web/无聊之下爬行了小飞的网址大全.md","filePath":"web/无聊之下爬行了小飞的网址大全.md","lastUpdated":1719711816000}'),t={name:"web/无聊之下爬行了小飞的网址大全.md"},l=p('<p><img src="'+e+`" alt="WebSpider"></p><p>共采集了1501条记录，先放着，以后可能有用</p><p>源码如下</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;768.cc网址大全爬行脚本</span></span>
<span class="line"><span>&#39;For WebSpider2</span></span>
<span class="line"><span>&#39;梦游的猫</span></span>
<span class="line"><span>&#39;创建时间 2006年02月23日 23:27:37</span></span>
<span class="line"><span>&#39;最后修改 2006年02月24日 01:23:39</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;Option Explicit</span></span>
<span class="line"><span>Set conn = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>MyConn=&quot;Provider=SQLOLEDB.1;Persist Security InFso=true;Data Source=127.0.0.1;Initial Catalog=&#39;WebSpider&#39;;User ID=&#39;spider&#39;;Password=&#39;spider&#39;;CONNect Timeout=30&quot;</span></span>
<span class="line"><span>Conn.Open MyConn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub Main</span></span>
<span class="line"><span> urlMain = &quot;http://768.cc/DH/page/&quot;</span></span>
<span class="line"><span> urlType = &quot;党政|新闻|文教|贸易|广告|科技|交通|建筑|工业|日用品|旅游|副食|娱乐|医疗|论坛|其它&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> urlTypeArr = split(urlType,&quot;|&quot;)</span></span>
<span class="line"><span> getType = true</span></span>
<span class="line"><span> for i = 1 to 16</span></span>
<span class="line"><span>  Call Spider.OpenURL(Document,urlMain &amp; i &amp; &quot;.htm&quot;)</span></span>
<span class="line"><span>  For Each it in Document.getElementsByTagName(&quot;table&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   if getType then</span></span>
<span class="line"><span>    For Each itTD in it.getElementsByTagName(&quot;td&quot;)</span></span>
<span class="line"><span>     if instr(itTD.innerHTML,&quot;**&lt;FONT color=#996600&gt;&quot;) &gt; 0 and len(itTD.innerHTML)&lt;70 then</span></span>
<span class="line"><span>      urlType2 = trim(replace(replace(itTD.innerHTML , &quot;&lt;STRONG&gt;&lt;FONT color=#996600&gt;&quot;,&quot;&quot;),&quot;&lt;/FONT&gt;**&quot;,&quot;&quot;))</span></span>
<span class="line"><span>      showLog urlTypeArr(i-1) &amp; &quot; &gt;&gt; &quot; &amp; urlType2</span></span>
<span class="line"><span>      getType = false</span></span>
<span class="line"><span>      exit for</span></span>
<span class="line"><span>     end if</span></span>
<span class="line"><span>    next</span></span>
<span class="line"><span>   elseif not getType then</span></span>
<span class="line"><span>    if it.width=&quot;100%&quot; and it.align=&quot;center&quot; and it.bgColor=&quot;#ffffff&quot; and it.border=0 then</span></span>
<span class="line"><span>     For Each itA in it.getElementsByTagName(&quot;a&quot;)</span></span>
<span class="line"><span>      if len(itA.href)&gt;4 and instr(itA.href,&quot;http://768.cc&quot;)=0 then</span></span>
<span class="line"><span>       writeTMPXML urlTypeArr(i-1) &amp; &quot; &gt;&gt; &quot; &amp; urlType2 &amp; &quot; : &quot; &amp; itA.innerHtml &amp; &quot;:&quot; &amp; itA.href &amp; vbCrlf</span></span>
<span class="line"><span>       saveDate urlTypeArr(i-1),urlType2 ,itA.innerHtml,itA.href</span></span>
<span class="line"><span>      end if</span></span>
<span class="line"><span>     next</span></span>
<span class="line"><span>     getType = true</span></span>
<span class="line"><span>    end if</span></span>
<span class="line"><span>   end if</span></span>
<span class="line"><span>  next</span></span>
<span class="line"><span> next</span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function saveDate(type1,type2,name,url)</span></span>
<span class="line"><span> url = replace(url,&quot;&#39;&quot;,&quot;&quot;)</span></span>
<span class="line"><span> if left(url,7) &lt;&gt; &quot;http://&quot; then url = &quot;http://&quot; &amp; url</span></span>
<span class="line"><span> set rs = CreateObject(&quot;ADODB.RecordSet&quot;)</span></span>
<span class="line"><span> sql = &quot;select * from czNetURL where url = &#39;&quot; &amp; url &amp; &quot;&#39; and type1&lt;&gt;&#39;&quot; &amp; type1 &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span> rs.open sql,conn,1,3</span></span>
<span class="line"><span> if rs.eof then</span></span>
<span class="line"><span>  rs.addNew</span></span>
<span class="line"><span> end if</span></span>
<span class="line"><span> rs(&quot;type1&quot;) = trim(type1)</span></span>
<span class="line"><span> rs(&quot;type2&quot;) = trim(type2)</span></span>
<span class="line"><span> rs(&quot;name&quot;) = trim(name)</span></span>
<span class="line"><span> rs(&quot;url&quot;) = trim(url)</span></span>
<span class="line"><span> rs.update</span></span>
<span class="line"><span> rs.close</span></span>
<span class="line"><span> set rs = Nothing</span></span>
<span class="line"><span>end Function</span></span></code></pre></div>`,4),i=[l];function o(c,r,u,q,d,m){return a(),s("div",{"data-pagefind-body":!0},i)}const f=n(t,[["render",o]]);export{g as __pageData,f as default};
