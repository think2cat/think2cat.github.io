import{_ as s,o as n,c as a,a7 as p}from"./chunks/framework.Z1Dznsxj.js";const m=JSON.parse('{"title":"NB文章系统2.0 转 Z-Blog1.7","description":"","frontmatter":{"title":"NB文章系统2.0 转 Z-Blog1.7","tags":["asp","blog"],"id":937,"categories":["Web"],"abbrlink":"4d80ea3f","date":"2007-04-10T23:38:38.000Z"},"headers":[],"relativePath":"web/nb文章系统2.0_转_z_blog1.7.md","filePath":"web/nb文章系统2.0_转_z_blog1.7.md","lastUpdated":1719711816000}'),t={name:"web/nb文章系统2.0_转_z_blog1.7.md"},l=p(`<p>~~<a href="http://www.17google.com.cn" target="_blank" rel="noreferrer">17google</a>~~是在05年制作的，现有文章1630篇，基本是人工整理进去的，后来因时间有限，一直搁着没更新，实在有点遗憾</p><p>今天写了个程序把数据库转为Z-Blog 1.7，以后应该会不定期更新下的</p><p>NB文章系统2.0 MSSQL数据库 &gt;&gt; Z-Blog 1.7 Access数据库</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;%@LANGUAGE=&quot;VBSCRIPT&quot; CODEPAGE=&quot;65001&quot;%&gt;</span></span>
<span class="line"><span>&lt;%Response.Charset=&quot;UTF-8&quot;</span></span>
<span class="line"><span>Session.CodePage=&quot;65001&quot;</span></span>
<span class="line"><span>Response.buffer=False</span></span>
<span class="line"><span>server.ScriptTimeout = 999999</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;NB文章系统2.0 change to Z-Blog 1.7</span></span>
<span class="line"><span>&#39;梦游的猫</span></span>
<span class="line"><span>&#39;建立时间 2007年4月10日 15:53:49</span></span>
<span class="line"><span>&#39;最后修改 2007年4月10日 22:53:41</span></span>
<span class="line"><span>%&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;&gt;</span></span>
<span class="line"><span>&lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; lang=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>	&lt;style&gt;</span></span>
<span class="line"><span>		body {FONT-FAMILY: 宋体; FONT-SIZE: 12px;padding:30px 0 0 30px;}</span></span>
<span class="line"><span>		#title {border:1px solid #EAEAEA;padding:10px;}</span></span>
<span class="line"><span>	&lt;/style&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NB文章系统2.0 change to Z-Blog 1.7&lt;br /&gt;</span></span>
<span class="line"><span>作者：梦游的猫&lt;br /&gt;</span></span>
<span class="line"><span>http://www.21ido.com&lt;br /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div id = &quot;title&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div id = &quot;log&quot;&gt;&lt;/div&gt;&lt;%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db1 = &quot;cat|pass|daName|(local)&quot;		&#39;NB文章系统数据库链接，Access的请参考下面设置</span></span>
<span class="line"><span>db2 = &quot;data/cat.mdb&quot;						&#39;博客数据库地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;进行替换，可自行定义</span></span>
<span class="line"><span>Function filtContent(str)</span></span>
<span class="line"><span>	If IsNull(str) Or str = &quot;&quot; Then</span></span>
<span class="line"><span>		filtContent = &quot;&quot;</span></span>
<span class="line"><span>	Else</span></span>
<span class="line"><span>		str = Replace(str,&quot;=&quot;&quot;/UserFiles/&quot;,&quot;=&quot;&quot;/UPLOAD/&quot;)</span></span>
<span class="line"><span>		str = Replace(str,&quot;=&quot;&quot;/editor/UploadFile/&quot;,&quot;=&quot;&quot;/UPLOAD/&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		Do While InStr(str,&quot;&lt;IFRAME&quot;) &gt; 0</span></span>
<span class="line"><span>			p1 = InStr(str,&quot;&lt;IFRAME&quot;)</span></span>
<span class="line"><span>			p2 = InStr(p1,str,&quot;&lt;/IFRAME&gt;&quot;)</span></span>
<span class="line"><span>			If p2 &gt; p1 then</span></span>
<span class="line"><span>				p2 = p2 + Len(&quot;&lt;/IFRAME&gt;&quot;)</span></span>
<span class="line"><span>			Else</span></span>
<span class="line"><span>				p2 = InStr(p1,str,&quot;&gt;&quot;)</span></span>
<span class="line"><span>			End If</span></span>
<span class="line"><span>			If p2 &gt; p1 then</span></span>
<span class="line"><span>				strTemp = Mid(str,p1,p2-p1)</span></span>
<span class="line"><span>				str = Replace(str,strTemp,&quot;&quot;)</span></span>
<span class="line"><span>			End if</span></span>
<span class="line"><span>		loop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		Do While InStr(str,&quot;&lt;SCRIPT&quot;) &gt; 0</span></span>
<span class="line"><span>			p1 = InStr(str,&quot;&lt;SCRIPT&quot;)</span></span>
<span class="line"><span>			p2 = InStr(p1,str,&quot;&lt;/SCRIPT&gt;&quot;)</span></span>
<span class="line"><span>			If p2 &gt; p1 then</span></span>
<span class="line"><span>				p2 = p2 + Len(&quot;&lt;/SCRIPT&gt;&quot;)</span></span>
<span class="line"><span>			Else</span></span>
<span class="line"><span>				p2 = InStr(p1,str,&quot;&gt;&quot;)</span></span>
<span class="line"><span>			End If</span></span>
<span class="line"><span>			If p2 &gt; p1 then</span></span>
<span class="line"><span>				strTemp = Mid(str,p1,p2-p1)</span></span>
<span class="line"><span>				str = Replace(str,strTemp,&quot;&quot;)</span></span>
<span class="line"><span>			End if</span></span>
<span class="line"><span>		loop</span></span>
<span class="line"><span>		filtContent = str</span></span>
<span class="line"><span>	End if</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;以下部分一般不用修改</span></span>
<span class="line"><span>&#39;=========================================================================</span></span>
<span class="line"><span>timeStart = timer</span></span>
<span class="line"><span>dbArr = Split(db1,&quot;|&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>showTitle &quot;开始</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>Set conn1 = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>Set conn2 = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>If UBound(dbArr) &gt; 0 then</span></span>
<span class="line"><span>	ConnStr = &quot;Provider = Sqloledb; User ID = &quot; &amp; dbArr(0) &amp; &quot;; Password = &quot; &amp; dbArr(1) &amp; &quot;; Initial Catalog = &quot; &amp; dbArr(2) &amp; &quot;; Data Source = &quot; &amp; dbArr(3) &amp; &quot;;&quot;</span></span>
<span class="line"><span>Else</span></span>
<span class="line"><span>	ConnStr = &quot;Provider=Microsoft.Jet.OLEDB.4.0;Data Source=&quot; &amp; server.MapPath(db1)</span></span>
<span class="line"><span>End if</span></span>
<span class="line"><span>conn1.Open connstr</span></span>
<span class="line"><span>connstr=&quot;Provider=Microsoft.Jet.OLEDB.4.0;Data Source=&quot; &amp; server.MapPath(db2)</span></span>
<span class="line"><span>conn2.Open connstr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set rs = Server.CreateObject(&quot;adodb.recordset&quot;)</span></span>
<span class="line"><span>Set rsTemp = Server.CreateObject(&quot;adodb.recordset&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;---------------------------------------------------------------转换文章</span></span>
<span class="line"><span>showTitle &quot;正在转换文章。。。&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sql = &quot;select T1.id,T2.title as className,T1.title,T1.addDate,T1.content,T1.keyword,T1.viewNum,T1.author,T1.source,T1.sourceUrl,T1.summary from NB_Content T1 inner join NB_Column T2 on T1.columnId = T2.id order by T1.adddate&quot;</span></span>
<span class="line"><span>rs.open sql,conn1,1,1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sql = &quot;select top 1 * from [blog_Article]&quot;</span></span>
<span class="line"><span>rsTemp.open sql,conn2,1,3</span></span>
<span class="line"><span>For i = 1 To rs.recordCount</span></span>
<span class="line"><span>	showLog &quot;正在添加 [&quot; &amp; rs(&quot;className&quot;) &amp; &quot;] &lt;span style=&#39;color:blue;bold-weight:bolder;&#39;&gt;&quot; &amp; Replace(rs(&quot;title&quot;),&quot;&amp;nbsp;&quot;,&quot; &quot;) &amp; &quot;&lt;/span&gt; 。。。&quot;</span></span>
<span class="line"><span>	rsTemp.Addnew</span></span>
<span class="line"><span>	rsTemp(&quot;log_CateID&quot;) = findCatID(rs(&quot;className&quot;))</span></span>
<span class="line"><span>	rsTemp(&quot;log_AuthorID&quot;) = 1</span></span>
<span class="line"><span>	rsTemp(&quot;log_Level&quot;) = 4</span></span>
<span class="line"><span>	rsTemp(&quot;log_Title&quot;) = replace(rs(&quot;title&quot;),&quot;&amp;nbsp;&quot;,&quot; &quot;)</span></span>
<span class="line"><span>	content = filtContent(rs(&quot;content&quot;))</span></span>
<span class="line"><span>	summary = rs(&quot;summary&quot;)</span></span>
<span class="line"><span>	If IsNull(summary) or Len(summary) &lt; 10 Then summary = Left(noHTML(content),150)</span></span>
<span class="line"><span>	rsTemp(&quot;log_Intro&quot;) = summary</span></span>
<span class="line"><span>	author = rs(&quot;author&quot;)</span></span>
<span class="line"><span>	source = rs(&quot;source&quot;)</span></span>
<span class="line"><span>	sourceUrl = rs(&quot;sourceUrl&quot;)</span></span>
<span class="line"><span>	If Not IsNull(source) And source &lt;&gt; &quot;&quot; Then</span></span>
<span class="line"><span>		If Not IsNull(sourceUrl) And sourceUrl &lt;&gt; &quot;&quot; Then</span></span>
<span class="line"><span>			content = &quot;转自：[&quot; &amp; source &amp; &quot;]()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot; &amp; vbCrlf &amp; content</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			content = &quot;转自：&quot; &amp; source &amp; &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot; &amp; vbCrlf &amp; content</span></span>
<span class="line"><span>		End if</span></span>
<span class="line"><span>	End if</span></span>
<span class="line"><span>	If Not IsNull(author) And author &lt;&gt; &quot;17google.com.cn&quot; And author &lt;&gt; &quot;&quot; Then</span></span>
<span class="line"><span>		content = &quot;作者：&quot; &amp; author &amp; &quot;</span></span>
<span class="line"><span>&quot; &amp; vbCrlf &amp; content</span></span>
<span class="line"><span>	End if</span></span>
<span class="line"><span>	rsTemp(&quot;log_content&quot;) = content</span></span>
<span class="line"><span>	rsTemp(&quot;log_ip&quot;) = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>	rsTemp(&quot;log_postTime&quot;) = rs(&quot;addDate&quot;)</span></span>
<span class="line"><span>	rsTemp(&quot;log_viewNums&quot;) = rs(&quot;viewNum&quot;)</span></span>
<span class="line"><span>	rsTemp(&quot;log_Tag&quot;) = addTag(rs(&quot;keyword&quot;))</span></span>
<span class="line"><span>	showLog &quot;&lt;span style=&#39;color:red&#39;&gt;完成&lt;/span&gt;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>	rsTemp.update</span></span>
<span class="line"><span>	If i Mod 20 = 0 Then Call clsLog</span></span>
<span class="line"><span>	rs.movenext</span></span>
<span class="line"><span>next</span></span>
<span class="line"><span>rsTemp.close</span></span>
<span class="line"><span>rs.close</span></span>
<span class="line"><span>Call clsLog</span></span>
<span class="line"><span>showTitle &quot;&lt;span style=&#39;color:red&#39;&gt;完成&lt;/span&gt;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;---------------------------------------------------------------转换评论</span></span>
<span class="line"><span>showTitle &quot;转换评论。。。&quot;</span></span>
<span class="line"><span>sql = &quot;select T1.addDate,T1.content,T1.username,T2.title,T1.ip from [NB_Review] T1 inner join [NB_Content] T2 on T1.id = T2.id order by T1.adddate&quot;</span></span>
<span class="line"><span>rs.open sql,conn1,1,1</span></span>
<span class="line"><span>For i = 1 To rs.recordCount</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	str=Replace(rs(&quot;title&quot;),&quot;&amp;nbsp;&quot;,&quot; &quot;)</span></span>
<span class="line"><span>	str=replace(str,&quot;&#39;&quot;,&quot;&#39;&#39;&quot;)</span></span>
<span class="line"><span>	showLog &quot;正在添加 [&lt;span style=&#39;color:blue;bold-weight:bolder;&#39;&gt;&quot; &amp; str &amp; &quot;&lt;/span&gt;]。。。&quot;</span></span>
<span class="line"><span>	sql = &quot;select top 1 log_ID from [blog_Article] where log_title = &#39;&quot; &amp; str &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	rsTemp.open sql,conn2,1,1</span></span>
<span class="line"><span>	If Not rsTemp.eof Then</span></span>
<span class="line"><span>		blog_ID = rsTemp(&quot;log_ID&quot;)</span></span>
<span class="line"><span>		rsTemp.close</span></span>
<span class="line"><span>		sql = &quot;select top 1 * from [blog_comment]&quot;</span></span>
<span class="line"><span>		rsTemp.open sql,conn2,1,3</span></span>
<span class="line"><span>		rsTemp.addnew</span></span>
<span class="line"><span>		rsTemp(&quot;log_id&quot;) = blog_id</span></span>
<span class="line"><span>		rsTemp(&quot;comm_authorID&quot;) = 0</span></span>
<span class="line"><span>		rsTemp(&quot;comm_author&quot;) = rs(&quot;username&quot;)</span></span>
<span class="line"><span>		rsTemp(&quot;comm_content&quot;) = rs(&quot;content&quot;)</span></span>
<span class="line"><span>		rsTemp(&quot;comm_postTime&quot;) = rs(&quot;adddate&quot;)</span></span>
<span class="line"><span>		rsTemp(&quot;comm_IP&quot;) = rs(&quot;ip&quot;)</span></span>
<span class="line"><span>		rsTemp.update</span></span>
<span class="line"><span>		sql = &quot;update [blog_Article] set log_commNums = log_commNums + 1 where log_ID = &quot; &amp; blog_ID</span></span>
<span class="line"><span>		conn2.execute(sql)</span></span>
<span class="line"><span>		showLog &quot;&lt;span style=&#39;color:red&#39;&gt;完成&lt;/span&gt;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>	Else</span></span>
<span class="line"><span>		showLog &quot;&lt;span style=&#39;color:red&#39;&gt;出错，跳过&lt;/span&gt; &quot; &amp; sql &amp; &quot;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>	End If</span></span>
<span class="line"><span>	rsTemp.close</span></span>
<span class="line"><span>	If i Mod 20 = 0 Then Call clsLog</span></span>
<span class="line"><span>	rs.movenext</span></span>
<span class="line"><span>next</span></span>
<span class="line"><span>rs.close</span></span>
<span class="line"><span>&#39;Call clsLog</span></span>
<span class="line"><span>showTitle &quot;&lt;span style=&#39;color:red&#39;&gt;完成&lt;/span&gt;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;---------------------------------------------------------------重新统计博客数据</span></span>
<span class="line"><span>showTitle &quot;重新统计博客数据。。。&quot;</span></span>
<span class="line"><span>sql = &quot;select log_cateid,count(1) from [blog_article] group by log_cateid&quot;</span></span>
<span class="line"><span>rs.open sql,conn2,1,1</span></span>
<span class="line"><span>cateCount = rs.getrows</span></span>
<span class="line"><span>rs.close</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For i = 0 To UBound(cateCount,2)</span></span>
<span class="line"><span>	sql = &quot;select cate_id,cate_name,cate_count from [blog_Category] where cate_id = &quot; &amp; cateCount(0,i)</span></span>
<span class="line"><span>	rs.open sql,conn2,1,3</span></span>
<span class="line"><span>	rs(&quot;cate_count&quot;) = cateCount(1,i)</span></span>
<span class="line"><span>	rs.update</span></span>
<span class="line"><span>	showLog &quot;[&quot; &amp; rs(&quot;cate_name&quot;) &amp; &quot;]有文章数：&quot; &amp; cateCount(1,i) &amp; &quot;</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>	rs.close</span></span>
<span class="line"><span>next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Set rs = Nothing</span></span>
<span class="line"><span>showLog &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>转换完成，请登录博客后台[初始化数据]</span></span>
<span class="line"><span>&quot;</span></span>
<span class="line"><span>showTitle &quot;&lt;span style=&#39;color:red&#39;&gt;完成&lt;/span&gt;，耗时 &quot; &amp; Int((timer - timeStart)*10)/10 &amp; &quot; 秒&quot;</span></span>
<span class="line"><span>%&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;%</span></span>
<span class="line"><span>&#39;----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>&#39;--</span></span>
<span class="line"><span>--------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span>Function findCatID(str)</span></span>
<span class="line"><span>	If isnull(str) Or str = &quot;&quot; Then</span></span>
<span class="line"><span>		catID = 0</span></span>
<span class="line"><span>	Else</span></span>
<span class="line"><span>		Set rsT = server.CreateObject(&quot;adodb.recordset&quot;)</span></span>
<span class="line"><span>		sql = &quot;select top 1 cate_id,cate_name from [blog_Category] where cate_name = &#39;&quot; &amp; str &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span>		rsT.open sql,conn2,1,3</span></span>
<span class="line"><span>		If Not rsT.eof Then</span></span>
<span class="line"><span>			catID = rsT(&quot;cate_id&quot;)</span></span>
<span class="line"><span>		Else</span></span>
<span class="line"><span>			rsT.addNew</span></span>
<span class="line"><span>			rsT(&quot;cate_name&quot;) = str</span></span>
<span class="line"><span>			rsT.update</span></span>
<span class="line"><span>			rsT.close</span></span>
<span class="line"><span>			showLog &quot;创建类别 [&quot; &amp; str &amp; &quot;]。。&quot;</span></span>
<span class="line"><span>			sql = &quot;select top 1 cate_id from [blog_Category] where cate_name = &#39;&quot; &amp; str &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span>			rsT.open sql,conn2,1,1</span></span>
<span class="line"><span>			catID = rsT(&quot;cate_id&quot;)</span></span>
<span class="line"><span>		End If</span></span>
<span class="line"><span>		rsT.close</span></span>
<span class="line"><span>		Set rsT = Nothing</span></span>
<span class="line"><span>	End If</span></span>
<span class="line"><span>	findCatID = catID</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function addTag(str)</span></span>
<span class="line"><span>	If IsNull(str) Or Trim(str) = &quot;&quot; Then</span></span>
<span class="line"><span>		addTag = &quot;&quot;</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		str = Trim(str)</span></span>
<span class="line"><span>		str = Replace(str,&quot;,&quot;,&quot;|&quot;)</span></span>
<span class="line"><span>		str = Replace(str,&quot;，&quot;,&quot;|&quot;)</span></span>
<span class="line"><span>		str = Replace(str,&quot; &quot;,&quot;|&quot;)</span></span>
<span class="line"><span>		Do While InStr(str,&quot;||&quot;) &gt; 0</span></span>
<span class="line"><span>			str = Replace(str,&quot;||&quot;,&quot;|&quot;)</span></span>
<span class="line"><span>		Loop</span></span>
<span class="line"><span>		If Left(str,1) = &quot;|&quot; Then str = Right(str,Len(str)-1)</span></span>
<span class="line"><span>		If Right(str,1) = &quot;|&quot; Then str = left(str,Len(str)-1)</span></span>
<span class="line"><span>		tagArr = Split(str,&quot;|&quot;)</span></span>
<span class="line"><span>		addTag = &quot;&quot;</span></span>
<span class="line"><span>		Set rsT = server.CreateObject(&quot;Adodb.recordset&quot;)</span></span>
<span class="line"><span>		For iTag = 0 To UBound(tagArr)</span></span>
<span class="line"><span>			tagArr(iTag) = Trim(tagArr(iTag))</span></span>
<span class="line"><span>			sql = &quot;select top 1 * from [blog_Tag] where tag_name = &#39;&quot; &amp; tagArr(iTag) &amp; &quot;&#39;&quot;</span></span>
<span class="line"><span>			rsT.open sql,conn2,1,3</span></span>
<span class="line"><span>			If Not rsT.eof Then</span></span>
<span class="line"><span>				rsT(&quot;tag_count&quot;) = rsT(&quot;tag_count&quot;) + 1</span></span>
<span class="line"><span>				rsT.update</span></span>
<span class="line"><span>			Else</span></span>
<span class="line"><span>				showlog &quot; [&quot; &amp; tagArr(iTag) &amp; &quot;]&quot;</span></span>
<span class="line"><span>				rsT.addNew</span></span>
<span class="line"><span>				rsT(&quot;tag_name&quot;) = tagArr(iTag)</span></span>
<span class="line"><span>				rsT(&quot;tag_count&quot;) = 1</span></span>
<span class="line"><span>				rsT.update</span></span>
<span class="line"><span>				showlog &quot;创建标签[&quot; &amp; tagArr(iTag) &amp; &quot;]&quot;</span></span>
<span class="line"><span>				rsT.close</span></span>
<span class="line"><span>				sql = &quot;select top 1 * from [blog_tag] where tag_name = &#39;&quot; &amp; tagArr(iTag) &amp; &quot;&#39; order by tag_id desc&quot;</span></span>
<span class="line"><span>				rsT.open sql,conn2,1,1</span></span>
<span class="line"><span>			End If</span></span>
<span class="line"><span>			If InStr(addTag,&quot;{&quot; &amp; rsT(&quot;tag_id&quot;) &amp; &quot;}&quot;) &gt; 0 Then</span></span>
<span class="line"><span>				&#39;skin</span></span>
<span class="line"><span>			else</span></span>
<span class="line"><span>				addTag = addTag &amp; &quot;{&quot; &amp; rsT(&quot;tag_id&quot;) &amp; &quot;}&quot;</span></span>
<span class="line"><span>			End if</span></span>
<span class="line"><span>			rsT.close</span></span>
<span class="line"><span>		Next</span></span>
<span class="line"><span>		Set rsT = Nothing</span></span>
<span class="line"><span>		showlog addTag &amp; &quot;。。&quot;</span></span>
<span class="line"><span>	End if</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub showLog(str)</span></span>
<span class="line"><span>	response.write &quot;&lt;script language=&#39;javascript&#39;&gt;document.all.log.innerHTML += &#39;&quot; &amp; Replace(Replace(str,&quot;&#39;&quot;,&quot;\\&#39;&quot;),&quot;&quot;&quot;&quot;,&quot;\\&quot;&quot;&quot;) &amp; &quot;&#39;;&lt;/script&gt;&quot;</span></span>
<span class="line"><span>	&#39;response.write str</span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub showtitle(str)</span></span>
<span class="line"><span>	response.write &quot;&lt;script language=&#39;javascript&#39;&gt;document.all.title.innerHTML += &#39;&quot; &amp; Replace(Replace(str,&quot;&#39;&quot;,&quot;\\&#39;&quot;),&quot;&quot;&quot;&quot;,&quot;\\&quot;&quot;&quot;) &amp; &quot;&#39;;&lt;/script&gt;&quot;</span></span>
<span class="line"><span>	&#39;response.write str</span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub clsLog</span></span>
<span class="line"><span>	response.write &quot;&lt;script language=&#39;javascript&#39;&gt;document.all.log.innerHTML = &#39;&#39;;&lt;/script&gt;&quot;</span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function noHTML(str)</span></span>
<span class="line"><span>	dim re</span></span>
<span class="line"><span>	Set re=new RegExp</span></span>
<span class="line"><span>	re.IgnoreCase =true</span></span>
<span class="line"><span>	re.Global=True</span></span>
<span class="line"><span>	re.Pattern=&quot;(\\&lt;.[^\\&lt;]*\\&gt;)&quot;</span></span>
<span class="line"><span>	str=re.replace(str,&quot; &quot;)</span></span>
<span class="line"><span>	re.Pattern=&quot;(\\&lt;\\/[^\\&lt;]*\\&gt;)&quot;</span></span>
<span class="line"><span>	str=re.replace(str,&quot; &quot;)</span></span>
<span class="line"><span>	nohtml=str</span></span>
<span class="line"><span>	set re=nothing</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span>%&gt;</span></span></code></pre></div>`,4),e=[l];function o(c,i,u,r,q,g){return n(),a("div",{"data-pagefind-body":!0},e)}const T=s(t,[["render",o]]);export{m as __pageData,T as default};
