import{_ as s,c as n,o as a,a7 as t}from"./chunks/framework.DZen7A7t.js";const d=JSON.parse('{"title":"zblog文章归档修改","description":"","frontmatter":{"title":"zblog文章归档修改","tags":["asp","blog","zblog"],"id":1004,"categories":["Web"],"abbrlink":"da1c3810","date":"2008-02-18T17:26:12.000Z"},"headers":[],"relativePath":"web/zblog文章归档修改.md","filePath":"web/zblog文章归档修改.md","lastUpdated":1719811188000}'),p={name:"web/zblog文章归档修改.md"},e=t(`<p>默认是按月划分的，时间久了就一大堆，占空间也影响美观，改了一下，本想用中文，发现文字很难对齐（下图），只好用英文缩写，其实用阿拉伯数字是最漂亮的，对的最整齐</p><p>修改后的效果看右侧【文章归档】</p><p>以zblog 1.8(080201)为例，修改如下，打开 <strong>function/c_system_event.asp</strong>，搜索 <code>Function BlogReBuild_Archives()</code>，完整代码如下，需根据自己使用的样式对代码进行修改</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Function BlogReBuild_Archives()</span></span>
<span class="line"><span>	Dim firstTime,lastTime</span></span>
<span class="line"><span>	Dim sql,objRS,objStream</span></span>
<span class="line"><span>	sql = &quot;SELECT [log_PostTime] FROM [blog_Article] WHERE ([log_Level]&gt;1) ORDER BY [log_PostTime]&quot;</span></span>
<span class="line"><span>	Set objRS = Server.CreateObject(&quot;adodb.recordset&quot;)</span></span>
<span class="line"><span>	objRS.open sql,objConn,1,1</span></span>
<span class="line"><span>	If (Not objRS.bof) And (Not objRS.eof) Then</span></span>
<span class="line"><span>		firstTime = objRS(&quot;log_PostTime&quot;)</span></span>
<span class="line"><span>		objRS.movelast</span></span>
<span class="line"><span>		lastTime = objRS(&quot;log_PostTime&quot;)</span></span>
<span class="line"><span>	End if</span></span>
<span class="line"><span>	objRS.Close</span></span>
<span class="line"><span>	Set objRS=Nothing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Dim i,j,strArchives</span></span>
<span class="line"><span>	For i = Year(lastTime) To Year(firstTime) step -1</span></span>
<span class="line"><span>		strArchives = strArchives &amp; &quot;&lt;li&gt;&lt;span class=&quot;&quot;year&quot;&quot;&gt;&quot; &amp; i &amp; &quot;&lt;/span&gt;</span></span>
<span class="line"><span>&quot; &amp; vbCrlf</span></span>
<span class="line"><span>		For j = 1 To 12</span></span>
<span class="line"><span>			If i&gt;= Year(Now()) And j &gt; Month(Now()) Then Exit For</span></span>
<span class="line"><span>			If i = Year(firstTime) And  j &lt; Month(firstTime) Then j = Month(firstTime)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			Set objRS=objConn.Execute(&quot;SELECT COUNT([log_ID]) FROM [blog_Article] WHERE ([log_Level]&gt;1) AND year(log_PostTime) = &quot; &amp; i &amp; &quot; and month(log_PostTime) = &quot; &amp; j)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			If (Not objRS.bof) And (Not objRS.eof) Then</span></span>
<span class="line"><span>				If objRS(0) &gt; 0 then</span></span>
<span class="line"><span></span></span>
<span class="line"><span>					If ZC_MOONSOFT_PLUGIN_ENABLE=True Then</span></span>
<span class="line"><span>						strArchives = strArchives &amp; &quot;[&quot; &amp; Left(ZVA_Month(j),3) &amp; &quot;.]() &quot;</span></span>
<span class="line"><span>						Call BuildCategory(Empty,Empty,Empty,i &amp; &quot;-&quot; &amp; j,Empty,ZC_DISPLAY_MODE_ALL,ZC_STATIC_DIRECTORY,i &amp; &quot;_&quot; &amp; j&amp; &quot;.&quot; &amp; ZC_STATIC_TYPE)</span></span>
<span class="line"><span>					Else</span></span>
<span class="line"><span>						strArchives = strArchives &amp; &quot;[&quot; &amp; Left(ZVA_Month(j),3) &amp; &quot;.]() &quot;</span></span>
<span class="line"><span>					End If</span></span>
<span class="line"><span>				Else</span></span>
<span class="line"><span>					strArchives = strArchives &amp; &quot;&lt;span&gt;&quot; &amp; Left(ZVA_Month(j),3) &amp; &quot;.&lt;/span&gt; &quot;</span></span>
<span class="line"><span>				End If</span></span>
<span class="line"><span>			End If</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			objRS.Close</span></span>
<span class="line"><span>			Set objRS=Nothing</span></span>
<span class="line"><span>		next</span></span>
<span class="line"><span>		strArchives = strArchives &amp; &quot;&lt;/li&gt;&quot; &amp; vbCrlf</span></span>
<span class="line"><span>	Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	strArchives=TransferHTML(strArchives,&quot;[no-asp]&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Call SaveToFile(BlogPath &amp; &quot;/include/archives.asp&quot;,strArchives,&quot;utf-8&quot;,True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	BlogReBuild_Archives=True</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Function</span></span></code></pre></div>`,4),l=[e];function o(i,c,r,u,_,m){return a(),n("div",{"data-pagefind-body":!0},l)}const g=s(p,[["render",o]]);export{d as __pageData,g as default};
