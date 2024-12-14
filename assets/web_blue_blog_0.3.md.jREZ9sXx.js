import{_ as a,o as l,c as e,a7 as o}from"./chunks/framework.Z1Dznsxj.js";const B=JSON.parse('{"title":"Blue Blog 0.3 发布","description":"","frontmatter":{"title":"Blue Blog 0.3 发布","tags":["blog"],"id":817,"categories":["Web"],"abbrlink":"90b85a16","date":"2004-08-27T19:16:00.000Z"},"headers":[],"relativePath":"web/blue_blog_0.3.md","filePath":"web/blue_blog_0.3.md","lastUpdated":1721497158000}'),t={name:"web/blue_blog_0.3.md"},i=o(`<h3 id="blue-blog-readme" tabindex="-1">Blue Blog Readme <a class="header-anchor" href="#blue-blog-readme" aria-label="Permalink to &quot;Blue Blog Readme&quot;">​</a></h3><p>最后更新：ver 0.3 2004-08-27 &gt;&gt;这天是我生日 作者：梦游的猫 (Gavin / C.A.T.) 网址：<a href="http://www.21ido.com" target="_blank" rel="noreferrer">http://www.21ido.com</a> 论坛：<a href="http://bbs.21ido.com" target="_blank" rel="noreferrer">http://bbs.21ido.com</a> Blog：<a href="http://blog.21ido.com" target="_blank" rel="noreferrer">http://blog.21ido.com</a> Email：gavin2026cn[at]163.com</p><p>Blue Blog原名Gavin&#39;s Blog ，最大的特点就是跟LeadBBS结合，实现会员数据库共享，该Blog写于2003年9月，期间因为在广州考试无法上网而中止了很长时间，春节过后因网站空间被停，又停了很长时间，现在快一年了，其实很早就想公开源码，让更多人参与，共同来完善，但又怕因程序漏洞自己网站受攻击，看着别人写的Blog渐渐流传开来而自己的Blog却无人访问，自己蛮难受的。 现在正在学习XHTML，准备重新设计Blue Blog，或许需要很长一段时间，所以这个版本就公开吧。我知道存在很多bug，希望大家能一起来完善，有问题或建议请发Email给我，还有就是因为我现在不方便上网，只能访问www，无法上FTP，所以拜托请别拿我网站做测试。一旦被黑我就只能欲苦无泪了 这里推荐几个很厉害的Blog程序 Dlog : <a href="http://www.duoluo.com" target="_blank" rel="noreferrer">http://www.duoluo.com</a> Poorlish&#39;s Blog : <a href="http://www.dcshooter.com/dlog/" target="_blank" rel="noreferrer">http://www.dcshooter.com/dlog/</a> L-Blog : <a href="http://www.loveyuki.com/" target="_blank" rel="noreferrer">http://www.loveyuki.com/</a> 最后，引用Poorfish的话：** BLOG最重要的不是程序，而是它的内容和背后的Blogger **</p><p>** 你可以自由传播、修改该Blog，但我希望能保留我的网页链接以及版权信息 ^_^ **</p><hr><h2 id="如何安装" tabindex="-1">如何安装？ <a class="header-anchor" href="#如何安装" aria-label="Permalink to &quot;如何安装？&quot;">​</a></h2><ol><li>备份原有的数据库</li><li>打开BlueBlog.asp文件，修改下面字段</li></ol><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>db = &quot;../bbs/data/LeadBBS.mdb&quot; &#39;数据库位置</span></span></code></pre></div><p>然后运行该文件，进行数据库转换 3. 打开conn.asp文件，修改下面字段</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>db = db_path &amp; &quot;../bbs/data /BlueBBS.mdb&quot; &#39;数据库地址</span></span>
<span class="line"><span>DEF_MasterCookies = &quot;LeadBBS&quot; &#39;Cookie名称，保持与LeadBBS论坛的Cookie名称一样</span></span>
<span class="line"><span>DEF_BlogPath = &quot;http://www.21ido.com/blog/&quot; &#39;BlueBlog网址</span></span>
<span class="line"><span>DEF_LeadBBSPath = &quot;../bbs/&quot; &#39;LeadBBS论坛相对BlueBlog的路径</span></span>
<span class="line"><span>bfnum = 16 &#39;笑脸图像数量，一般默认即可</span></span>
<span class="line"><span>DEF_UBBiconNumber = 14 &#39;表情图像数量</span></span></code></pre></div><ol start="4"><li>打开rss.asp 和 rss1.asp，修改&gt;channel&gt;字段相关属性</li><li>你可以运行你的Blog了，请用站长身份登陆，对Blog进行个性设置</li></ol><h2 id="已知问题" tabindex="-1">已知问题： <a class="header-anchor" href="#已知问题" aria-label="Permalink to &quot;已知问题：&quot;">​</a></h2><ol><li>首页截取日志显示时，UBB标记会被截断；</li><li>RSS解析未能通过<a href="http://feedvalidator.org/check" target="_blank" rel="noreferrer">http://feedvalidator.org/check</a> 的验证，但可正确被RSS阅读软件识别；</li><li>之前对PingBack理解错误，造成这一功能跟被误用；</li></ol><blockquote><p>用户权限(即荣誉): 0:会员:发表评论 1:版主:发表评论 2:贵宾:发表评论,发布Blog,编辑自己Blog 3:成员:发表评论,发布Blog,编辑自己Blog 4:站长:发表评论,发布Blog,编辑所以成员Blog,修改网站设置</p></blockquote><hr><h2 id="更新记录" tabindex="-1">更新记录： <a class="header-anchor" href="#更新记录" aria-label="Permalink to &quot;更新记录：&quot;">​</a></h2><ul><li><p>2004-8-15 月历跟Blog日期连接上了</p></li><li><p>2004-01-02 修正:</p><ol><li>后台用户Blog计数修复sub</li><li>其它小问题 增加:</li><li>全文阅读TrackBack显示;</li><li>删除单篇评论(其实这个脚本已经写了只是网页显示没加入链接</li><li>编辑评论,因为评论表只建了一个文本的字段,之前是写入数据库时进行UBB编码,现在要考虑要不要原文写入,显示时再进行UBB</li></ol></li><li><p>2003-12-01 重新取名Blue Blog 修正:</p><ol><li>加快页面处理速度</li><li>修正及增加UBB代码</li><li>关于图像尺寸大小的问题</li><li>RSS2描述字段 增加:</li><li>用户注册,跟论坛(LeadBBS)共享一个成员数据库</li><li>用户评论,多建一个表,效率可能会很低</li></ol></li><li><p>2003-10-21 增加RSS</p></li><li><p>2003-10-08 重新制作界面</p></li><li><p>2003-09-30 完成框架设计，取名Gavin&#39;s Blog Gavin是我的英文名</p></li></ul><p><s>点击下载 /upload/2004/08/27/27_1914886220.rar</s></p>`,18),s=[i];function r(n,p,d,c,g,b){return l(),e("div",{"data-pagefind-body":!0},s)}const u=a(t,[["render",r]]);export{B as __pageData,u as default};