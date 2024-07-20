import{_ as a,o as n,c as s,a7 as p}from"./chunks/framework.nrF9sM7m.js";const u=JSON.parse('{"title":"智能数据库链接","description":"","frontmatter":{"title":"智能数据库链接","tags":["asp"],"id":775,"categories":["Web"],"abbrlink":"df8b585","date":"2003-10-01T20:21:00.000Z"},"headers":[],"relativePath":"web/智能数据库链接.md","filePath":"web/智能数据库链接.md","lastUpdated":1719711816000}'),e={name:"web/智能数据库链接.md"},l=p(`<div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Dim DBName(4)</span></span>
<span class="line"><span>DBName(4)=&quot;/Tsys/DataBase/DataBase.mdb&quot;</span></span>
<span class="line"><span>DBName(1)=&quot;DataBase/DataBase.mdb&quot;</span></span>
<span class="line"><span>DBName(2)=&quot;../DataBase/DataBase.mdb&quot;</span></span>
<span class="line"><span>DBName(3)=&quot;../../DataBase/DataBase.mdb&quot;</span></span>
<span class="line"><span>Dim DBName_Level</span></span>
<span class="line"><span>DBName_Level=0</span></span>
<span class="line"><span>Dim Connstr</span></span>
<span class="line"><span>Connstr = &quot;Provider=Microsoft.Jet.OLEDB.4.0;Data Source=&quot;</span></span>
<span class="line"><span>Dim Conn</span></span>
<span class="line"><span>Set Conn=Server.CreateObject(&quot;ADODB.CONNECTION&quot;)</span></span>
<span class="line"><span>Call ConnOpen()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function ConnOpen()</span></span>
<span class="line"><span>    On Error Resume Next</span></span>
<span class="line"><span>    Dim I</span></span>
<span class="line"><span>    For I=1 To UBound(DBName)</span></span>
<span class="line"><span>        Err.Clear</span></span>
<span class="line"><span>        Conn.Open Connstr &amp; Server.MapPath(DBName(I))</span></span>
<span class="line"><span>        If Err.Number=0 Then</span></span>
<span class="line"><span>            DBName_Level=I</span></span>
<span class="line"><span>            ConnOpen=true</span></span>
<span class="line"><span>            Exit Function</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>    Next</span></span>
<span class="line"><span>    If DBName_Level=0 Then</span></span>
<span class="line"><span>        Err.Clear</span></span>
<span class="line"><span>        Response.Write &quot;&lt;p&gt;以下数据库无法打开，请查看Conn.asp文件及*.mdb数据库的位置&lt;/p&gt;&quot;</span></span>
<span class="line"><span>        For I=1 To UBound(DBName)</span></span>
<span class="line"><span>            &#39;打印所有数据库路径</span></span>
<span class="line"><span>            &#39;Response.Write(&quot;&quot; &amp; DBName(I) &amp; &quot;&lt;br&gt;&quot;)</span></span>
<span class="line"><span>        Next</span></span>
<span class="line"><span>    End If</span></span>
<span class="line"><span>End Function</span></span></code></pre></div>`,1),t=[l];function i(o,c,r,T,d,m){return n(),s("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTYlOTklQkElRTglODMlQkQlRTYlOTUlQjAlRTYlOEQlQUUlRTUlQkElOTMlRTklOTMlQkUlRTYlOEUlQTUlMjIlMkMlMjJ0YWdzJTIyJTNBJTVCJTIyYXNwJTIyJTVEJTJDJTIyaWQlMjIlM0E3NzUlMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyV2ViJTIyJTVEJTJDJTIyYWJicmxpbmslMjIlM0ElMjJkZjhiNTg1JTIyJTJDJTIyZGF0ZSUyMiUzQTEwNjUwMzk2NjAwMDAlN0Q="},t)}const D=a(e,[["render",i]]);export{u as __pageData,D as default};
