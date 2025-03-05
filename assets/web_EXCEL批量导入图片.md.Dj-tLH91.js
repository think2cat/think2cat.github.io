import{_ as s,c as a,o as n,a7 as p}from"./chunks/framework.H1k9SCod.js";const e="/images/2007/02/26_200702261437022173_12748.jpg",b=JSON.parse('{"title":"EXCEL批量导入图片","description":"","frontmatter":{"title":"EXCEL批量导入图片","tags":["EXCEL","vbs","批量"],"id":918,"categories":["Web"],"abbrlink":"8db6a251","date":"2007-02-26T14:15:28.000Z"},"headers":[],"relativePath":"web/EXCEL批量导入图片.md","filePath":"web/EXCEL批量导入图片.md","lastUpdated":1721497158000}'),l={name:"web/EXCEL批量导入图片.md"},i=p('<p>之前在<a href="http://www.521000.com/bbs/dispbbs.asp?boardID=11&amp;ID=349215" target="_blank" rel="noreferrer">小桥流水</a>看到有人问怎样在Excel批量导入图片，随手写了个宏，没想到今天又有人问我，中午把VBA小改一下</p><p>图片用1.jpg 2.jpg 3.jpg ... 10.jpg 12.jpg依次命名</p><p>图片间隔是2张相邻图片左上角的间隔，例如图片尺寸100像素，间隔写100就刚好紧挨着</p><p>默认开始位置是以选择框所在位置，例如下图，选择框在B2，图片就从B2开始排列了</p><p><img src="'+e+`" alt=""></p><p><s>演示下载 /upload/200702261437022175.rar</s>，解压到D盘就可以直接执行了，如果打开弹出提示窗口，是因为你Excel安全性设置高，没事，一样可以执行</p><p>VBA代码如下</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Sub Macro1()</span></span>
<span class="line"><span>&#39; 宏由 CAT 录制，时间: 2007-2-7</span></span>
<span class="line"><span>&#39; 批量导入图片</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Dim picPath, picWidth, picHeight, fileExt</span></span>
<span class="line"><span>    picPath = &quot;D:\\&quot;     &#39;图片存放路径</span></span>
<span class="line"><span>    picN = 4            &#39;图片数量</span></span>
<span class="line"><span>    fileExt = &quot;.jpg&quot;    &#39;图片后缀名</span></span>
<span class="line"><span>    picScale = 30       &#39;图片缩放百分比，不带 %</span></span>
<span class="line"><span>    perPic = 2          &#39;每行图片数量</span></span>
<span class="line"><span>    xWidth = 202        &#39;图片水平间隔，即水平相邻的图片左上角间隔</span></span>
<span class="line"><span>    xHeight = 152       &#39;图片垂直间隔</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Dim x, y</span></span>
<span class="line"><span>    x = 0</span></span>
<span class="line"><span>    y = 0</span></span>
<span class="line"><span>    For i = 1 To picN</span></span>
<span class="line"><span>         ActiveSheet.Pictures.Insert(picPath &amp; i &amp; fileExt).Select</span></span>
<span class="line"><span>         Selection.ShapeRange.ScaleWidth picScale / 100, msoFalse, msoScaleFromTopLeft</span></span>
<span class="line"><span>         Selection.ShapeRange.ScaleHeight picScale / 100, msoFalse, msoScaleFromTopLeft</span></span>
<span class="line"><span>         Selection.ShapeRange.IncrementLeft xWidth * x</span></span>
<span class="line"><span>         Selection.ShapeRange.IncrementTop xHeight * y</span></span>
<span class="line"><span>         If i Mod perPic = 0 Then</span></span>
<span class="line"><span>            x = 0</span></span>
<span class="line"><span>            y = y + 1</span></span>
<span class="line"><span>        Else</span></span>
<span class="line"><span>            x = x + 1</span></span>
<span class="line"><span>        End If</span></span>
<span class="line"><span>    Next</span></span>
<span class="line"><span>End Sub</span></span></code></pre></div>`,8),t=[i];function c(o,r,d,_,h,g){return n(),a("div",{"data-pagefind-body":!0},t)}const E=s(l,[["render",c]]);export{b as __pageData,E as default};
