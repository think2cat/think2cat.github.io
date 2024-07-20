import{_ as i,o as l,c as a,a7 as t}from"./chunks/framework.nrF9sM7m.js";const p=JSON.parse('{"title":"《ActionScript 3殿堂之路》学习笔记(1)","description":"","frontmatter":{"title":"《ActionScript 3殿堂之路》学习笔记(1)","tags":["actionscript","Book","Flash","flex","xml","笔记"],"id":1047,"categories":["Flash"],"abbrlink":"aed8f2da","date":"2008-09-04T09:24:33.000Z"},"headers":[],"relativePath":"Flash/ActionScript3殿堂之路_学习笔记_1.md","filePath":"Flash/ActionScript3殿堂之路_学习笔记_1.md","lastUpdated":1719711816000}'),e={name:"Flash/ActionScript3殿堂之路_学习笔记_1.md"},r=t(`<pre><code>创建时间：2008年9月2日
最后修改时间：2008年9月3日 10:18:58 PM
</code></pre><h2 id="一、actionscript-3-语言介绍" tabindex="-1">一、ActionScript 3 语言介绍 <a class="header-anchor" href="#一、actionscript-3-语言介绍" aria-label="Permalink to &quot;一、ActionScript 3 语言介绍&quot;">​</a></h2><p>ActionScript 3基本是ActionScript引擎的完全重写，代码执行效率最快可以比原有快10倍。 AVM2（ActionScript Virutal Machine 2）支持AS3，并向前兼容。</p><h3 id="_1-新特性" tabindex="-1">1.新特性 <a class="header-anchor" href="#_1-新特性" aria-label="Permalink to &quot;1.新特性&quot;">​</a></h3><ol><li>运行时异常处理机制</li><li>运行时类型</li><li>密封类</li><li>闭包方法</li><li>使用E4X理论处理XML数据</li><li>正则表达式</li><li>命名空间</li><li>新基元数据类型</li></ol><h3 id="_2-as3开发工具" tabindex="-1">2.AS3开发工具 <a class="header-anchor" href="#_2-as3开发工具" aria-label="Permalink to &quot;2.AS3开发工具&quot;">​</a></h3><ol><li>Flash CS3</li><li>Flex 2、Flex 3、Flex SDK</li></ol><h3 id="_3-编译" tabindex="-1">3.编译 <a class="header-anchor" href="#_3-编译" aria-label="Permalink to &quot;3.编译&quot;">​</a></h3><p>AS3被编译成ActionScript bytecode，简称ABC文件，ABC文件放入SWF方可被Flash Player执行。SWF是Flash文件格式，容纳媒体资源和ABC字节码。 Flash CS3源文件后缀名为 .fla，Flex Builder使用了MXML语言</p><h2 id="二、actionscript-3-基本元素" tabindex="-1">二、ActionScript 3 基本元素 <a class="header-anchor" href="#二、actionscript-3-基本元素" aria-label="Permalink to &quot;二、ActionScript 3 基本元素&quot;">​</a></h2><h3 id="_1-as3中的数据类型" tabindex="-1">1.AS3中的数据类型 <a class="header-anchor" href="#_1-as3中的数据类型" aria-label="Permalink to &quot;1.AS3中的数据类型&quot;">​</a></h3><ul><li>基本数据类型 Boolean、int、Numbers、String、uint</li><li>复杂数据类型 Array、Date、Error、Function、RegExp、XML、XMLList、自定义类</li></ul><h3 id="_2-变量命名规则" tabindex="-1">2.变量命名规则 <a class="header-anchor" href="#_2-变量命名规则" aria-label="Permalink to &quot;2.变量命名规则&quot;">​</a></h3><ol><li>使用有含义的英文单词作为变量名</li><li>采用骆驼式命名法</li><li>命名符合 min-length &amp;&amp; max-information 原则</li><li>尽量避免变量名出现数字符号</li></ol><h3 id="_3-值类型和引用类型" tabindex="-1">3.值类型和引用类型 <a class="header-anchor" href="#_3-值类型和引用类型" aria-label="Permalink to &quot;3.值类型和引用类型&quot;">​</a></h3><p>基本类型都是值类型，其余则为引用类型。值类型不用new来创建，必须用new创建的为引用类型。 AS3变量本身是不能持有值的，值类型变量持有的是指向值类型数据的引用，引用类型变量持有的是指向引用类型数据的引用。 不论值类型数据还是引用类型数据，实质都是对象。</p><h3 id="_4-使用int、uint、number注意事项" tabindex="-1">4.使用int、uint、Number注意事项 <a class="header-anchor" href="#_4-使用int、uint、number注意事项" aria-label="Permalink to &quot;4.使用int、uint、Number注意事项&quot;">​</a></h3><ol><li>整数值有正负之分时，使用int，只处理正整数或颜色相关数值时，使用uint</li><li>有小数点时使用Number</li><li>当心整型数值的边界</li><li>小数相加不一定能得到证书，可以用Math.round()修正</li><li>不要让数值差距过大的浮点数相加减，结果可能有偏差</li></ol><h3 id="_5-运算符" tabindex="-1">5.运算符 <a class="header-anchor" href="#_5-运算符" aria-label="Permalink to &quot;5.运算符&quot;">​</a></h3><ul><li>赋值运算符：=</li><li>算术运算符：加、减、乘、除、模运算、求反运算</li><li>算术赋值运算符：+=、-=、*=、/=、%=</li><li>关系运算符：==、!=、===、!==</li><li>关系运算符：&gt;=、&lt;=、&gt;、&lt;</li><li>逻辑运算符：&amp;&amp;、||、!</li><li>三元if-else运算符：?:</li><li>typeof、is、as（is返回布尔值，as直接返回值）</li><li>in</li></ul>`,20),o=[r];function n(c,h,s,d,_,U){return l(),a("div",{"data-pagefind-body":!0,"data-pagefind-meta":"base64:JTdCJTIydGl0bGUlMjIlM0ElMjIlRTMlODAlOEFBY3Rpb25TY3JpcHQlMjAzJUU2JUFFJUJGJUU1JUEwJTgyJUU0JUI5JThCJUU4JUI3JUFGJUUzJTgwJThCJUU1JUFEJUE2JUU0JUI5JUEwJUU3JUFDJTk0JUU4JUFFJUIwKDEpJTIyJTJDJTIydGFncyUyMiUzQSU1QiUyMmFjdGlvbnNjcmlwdCUyMiUyQyUyMkJvb2slMjIlMkMlMjJGbGFzaCUyMiUyQyUyMmZsZXglMjIlMkMlMjJ4bWwlMjIlMkMlMjIlRTclQUMlOTQlRTglQUUlQjAlMjIlNUQlMkMlMjJpZCUyMiUzQTEwNDclMkMlMjJjYXRlZ29yaWVzJTIyJTNBJTVCJTIyRmxhc2glMjIlNUQlMkMlMjJhYmJybGluayUyMiUzQSUyMmFlZDhmMmRhJTIyJTJDJTIyZGF0ZSUyMiUzQTEyMjA1MjAyNzMwMDAlN0Q="},o)}const J=i(e,[["render",n]]);export{p as __pageData,J as default};
