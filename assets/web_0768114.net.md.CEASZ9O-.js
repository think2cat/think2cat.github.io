import{_ as n,o as s,c as a,a7 as p}from"./chunks/framework.ClMj9r9D.js";const t="/images/2006/02/25_2006-2-225454264_12714.gif",h=JSON.parse('{"title":"0768114.net网址大全爬行脚本","description":"","frontmatter":{"title":"0768114.net网址大全爬行脚本","tags":["spider","vb","vbs"],"id":866,"categories":["Web"],"abbrlink":"afb4ae18","date":"2006-02-25T02:49:58.000Z"},"headers":[],"relativePath":"web/0768114.net.md","filePath":"web/0768114.net.md","lastUpdated":1719711816000}'),e={name:"web/0768114.net.md"},l=p('<p><img src="'+t+`" alt=""></p><p>跟昨晚的768.cc爬行差不多，因为昨晚已经爬了一些数据，所以插入数据库函数做了点修改</p><p>2个脚本其实大同小异，用到的函数并不多</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;0768114.net网址大全爬行脚本</span></span>
<span class="line"><span>&#39;For WebSpider2</span></span>
<span class="line"><span>&#39;梦游的猫</span></span>
<span class="line"><span>&#39;创建时间 2006年02月25日 01:11:01</span></span>
<span class="line"><span>&#39;最后修改 2006年02月25日 02:29:31</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;Option Explicit</span></span>
<span class="line"><span>Set conn = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>MyConn=&quot;Provider=SQLOLEDB.1;Persist Security InFso=true;Data Source=127.0.0.1;Initial Catalog=&#39;WebSpider&#39;;User ID=&#39;spider&#39;;Password=&#39;spider&#39;;CONNect Timeout=30&quot;</span></span>
<span class="line"><span>Conn.Open MyConn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub Main</span></span>
<span class="line"><span> urlMain = &quot;http://0768114.net/&quot;</span></span>
<span class="line"><span> CLSLog()</span></span>
<span class="line"><span> CLSTMPXML()</span></span>
<span class="line"><span> Call Spider.OpenURL(Document,urlMain)</span></span>
<span class="line"><span> tempI = 0</span></span>
<span class="line"><span> For Each it in Document.getElementsByTagName(&quot;table&quot;)</span></span>
<span class="line"><span>  if it.id = &quot;AutoNumber7&quot; then</span></span>
<span class="line"><span>   if  tempI = 1 then</span></span>
<span class="line"><span>    For Each itA in it.getElementsByTagName(&quot;a&quot;)</span></span>
<span class="line"><span>     if instr(itA.href,&quot;sc.asp?classid&quot;) &gt; 0 then</span></span>
<span class="line"><span>      showlog trim(itA.innerHtml)</span></span>
<span class="line"><span>      myUrl = myUrl &amp; &quot;||&quot; &amp; itA.href</span></span>
<span class="line"><span>      myType = myType &amp; &quot;||&quot; &amp; trim(itA.innerHtml)</span></span>
<span class="line"><span>     end if</span></span>
<span class="line"><span>    next</span></span>
<span class="line"><span>    exit for</span></span>
<span class="line"><span>   end if</span></span>
<span class="line"><span>   tempI = tempI + 1</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span> next</span></span>
<span class="line"><span></span></span>
<span class="line"><span> urlArr = split(myUrl,&quot;||&quot;)</span></span>
<span class="line"><span> typeArr = split(myType,&quot;||&quot;)</span></span>
<span class="line"><span> for i = 0 to ubound(urlArr)</span></span>
<span class="line"><span>  if instr(urlArr(i) , &quot;http://0768114.net/&quot;) &gt; 0 then getPage urlArr(i),typeArr(i)</span></span>
<span class="line"><span> next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function getPage(myUrl,myType)</span></span>
<span class="line"><span> Call Spider.OpenURL(Document,myUrl)</span></span>
<span class="line"><span> html = document.body.innerHtml</span></span>
<span class="line"><span> type2 = trim(getStr(html,&quot;本分类的下级分类:** &quot;,&quot;**&quot;))</span></span>
<span class="line"><span>&#39; if type2 = &quot;无下级分类&quot; then type2 = null</span></span>
<span class="line"><span></span></span>
<span class="line"><span> page = trim(getStr(html,&quot;页/共&quot;,&quot;页 总计&quot;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span> for i = 1 to page</span></span>
<span class="line"><span>  if i &gt; 1 then Call Spider.OpenURL(Document,myUrl &amp; &quot;&amp;pn=&quot; &amp; i)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tempI = 0</span></span>
<span class="line"><span>  For Each it in Document.getElementsByTagName(&quot;table&quot;)</span></span>
<span class="line"><span>   if it.id = &quot;AutoNumber7&quot; then</span></span>
<span class="line"><span>    if tempI = 3 then</span></span>
<span class="line"><span>     For Each itA in it.getElementsByTagName(&quot;a&quot;)</span></span>
<span class="line"><span>       writeTMPXML myType &amp; &quot; &gt;&gt; &quot; &amp; type2 &amp; &quot; : &quot; &amp; trim(itA.innerHtml) &amp; chr(9) &amp; itA.href &amp; vbCrlf</span></span>
<span class="line"><span>       saveDate myType,type2,trim(itA.innerHtml),itA.href</span></span>
<span class="line"><span>     next</span></span>
<span class="line"><span>     exit for</span></span>
<span class="line"><span>    end if</span></span>
<span class="line"><span>    tempI = tempI + 1</span></span>
<span class="line"><span>   end if</span></span>
<span class="line"><span>  next</span></span>
<span class="line"><span> next</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function getStr(str,str1,str2)  &#39;返回str1和str2之间的字符串</span></span>
<span class="line"><span> if isNull(str1) then str1 = &quot;&quot;</span></span>
<span class="line"><span> if isNull(str2) then str2 = &quot;&quot;</span></span>
<span class="line"><span> pStart = instr(str,str1) + len(str1)</span></span>
<span class="line"><span> if pStart &gt; 0 then</span></span>
<span class="line"><span>  pEnd = instr(pStart,str,str2)</span></span>
<span class="line"><span>  if str2 = &quot;&quot; then</span></span>
<span class="line"><span>   getStr = mid(str,pStart)</span></span>
<span class="line"><span>  elseif pEnd &gt; 0 then</span></span>
<span class="line"><span>   getStr = mid(str,pStart,pEnd – pStart)</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>   getStr = mid(str,pStart)</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span> else</span></span>
<span class="line"><span>  pEnd = instr(str,str2)</span></span>
<span class="line"><span>  if pEnd &gt; 0 then</span></span>
<span class="line"><span>   getStr = mid(str,0,pEnd – len(str))</span></span>
<span class="line"><span>  else</span></span>
<span class="line"><span>   getStr = getStr</span></span>
<span class="line"><span>  end if</span></span>
<span class="line"><span> end if</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function saveDate(type1,type2,name,url)</span></span>
<span class="line"><span> url = replace(url,&quot;&#39;&quot;,&quot;&quot;)</span></span>
<span class="line"><span> if left(url,7) &lt;&gt; &quot;http://&quot; then url = &quot;http://&quot; &amp; url</span></span>
<span class="line"><span> set rs = CreateObject(&quot;ADODB.RecordSet&quot;)</span></span>
<span class="line"><span> sql = &quot;select * from czNetURL where url = &#39;&quot; &amp; url &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span> rs.open sql,conn,1,3</span></span>
<span class="line"><span> if rs.eof then</span></span>
<span class="line"><span>  rs.addNew</span></span>
<span class="line"><span> end if</span></span>
<span class="line"><span> if isNull(rs(&quot;type1&quot;)) or isEmpty(rs(&quot;type1&quot;)) then rs(&quot;type1&quot;) = trim(type1)</span></span>
<span class="line"><span> if isNull(rs(&quot;type2&quot;)) or isEmpty(rs(&quot;type2&quot;)) then rs(&quot;type2&quot;) = trim(type2)</span></span>
<span class="line"><span> if isNull(rs(&quot;name&quot;)) or isEmpty(rs(&quot;name&quot;)) then rs(&quot;name&quot;) = trim(name)</span></span>
<span class="line"><span> rs(&quot;url&quot;) = trim(url)</span></span>
<span class="line"><span> rs.update</span></span>
<span class="line"><span> rs.close</span></span>
<span class="line"><span> set rs = Nothing</span></span>
<span class="line"><span>end Function</span></span></code></pre></div>`,4),i=[l];function r(c,o,u,m,q,d){return s(),a("div",{"data-pagefind-body":!0},i)}const g=n(e,[["render",r]]);export{h as __pageData,g as default};
