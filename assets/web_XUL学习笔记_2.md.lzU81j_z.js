import{_ as e,o as a,c as o,a7 as r}from"./chunks/framework.ClMj9r9D.js";const h=JSON.parse('{"title":"XUL学习笔记(2)","description":"","frontmatter":{"title":"XUL学习笔记(2)","tags":["XUL"],"id":876,"categories":["Web"],"abbrlink":"697236ca","date":"2006-03-23T22:20:59.000Z"},"headers":[],"relativePath":"web/XUL学习笔记_2.md","filePath":"web/XUL学习笔记_2.md","lastUpdated":1719711816000}'),i={name:"web/XUL学习笔记_2.md"},t=r('<h4 id="_1-3-xul可以做什么" tabindex="-1">1.3 XUL可以做什么 <a class="header-anchor" href="#_1-3-xul可以做什么" aria-label="Permalink to &quot;1.3 XUL可以做什么&quot;">​</a></h4><p>先补充一下，XUL发音为：zool XUL可以创建图形界面的绝大多数元素，像Firefox、Thunderbird界面都是XUL的应用。</p><h4 id="_1-4-xul相关资料" tabindex="-1">1.4 XUL相关资料 <a class="header-anchor" href="#_1-4-xul相关资料" aria-label="Permalink to &quot;1.4 XUL相关资料&quot;">​</a></h4><p>目前XUL应用并不多，相关资料(无论中文或英文)非常的少，大多仅有一些简单的介绍而已，下面是几个相关网站 <a href="http://www.xulplanet.com/" target="_blank" rel="noreferrer">http://www.xulplanet.com</a><a href="http://developer.mozilla.com/" target="_blank" rel="noreferrer">http://developer.mozilla.com</a></p><h3 id="二、开发平台" tabindex="-1">二、开发平台 <a class="header-anchor" href="#二、开发平台" aria-label="Permalink to &quot;二、开发平台&quot;">​</a></h3><h4 id="_2-1-开发工具" tabindex="-1">2.1 开发工具 <a class="header-anchor" href="#_2-1-开发工具" aria-label="Permalink to &quot;2.1 开发工具&quot;">​</a></h4><p>以下为扩展开发所需工具，可以在下面的两上网站下载和获取到帮助信息： <a href="https://addons.mozilla.org/extensions/?application=firefox" target="_blank" rel="noreferrer">https://addons.mozilla.org/extensions/?application=firefox</a><a href="http://www.extensionsmirror.nl/" target="_blank" rel="noreferrer">http://www.extensionsmirror.nl/</a></p><h4 id="_2-2-配置环境变量" tabindex="-1">2.2 配置环境变量 <a class="header-anchor" href="#_2-2-配置环境变量" aria-label="Permalink to &quot;2.2 配置环境变量&quot;">​</a></h4><p>Firefox 是一个允许创建多个 Profile 的浏览器，不同的 Profile 被分别进行管理。由于在开发扩展时，我们希望一个 Profile 用来做开发，一个 Profile 用来测试扩展的发布版本。所以，我们要配置不同的 Profile 来满足这种要求。 操作系统 Proile 对应的目录 Windows 9x/Me C:\\Windows\\Application Data\\Mozilla\\Firefox\\Profiles&amp;lt;Profile name&gt;<br> Windows 9x/Me, alternate C:\\Windows\\Profiles&amp;lt;Windows login/user name&gt;\\Application Data\\Mozilla\\Firefox\\Profiles&amp;lt;Profile name&gt;<br> Windows NT 4.x C:\\Winnt\\Profiles&amp;lt;Windows login/user name&gt;\\Application Data\\Mozilla\\Firefox\\Profiles&amp;lt;Profile name&gt;<br> Windows 2000/XP C:\\Documents and Settings&amp;lt;Windows login/user name&gt;\\Application Data\\Mozilla\\Firefox\\Profiles&amp;lt;Profile name&gt;\\ 或 %APPDATA%\\Mozilla\\Firefox\\Profiles&amp;lt;Profile name&gt;<br> Unix ~/.mozilla/firefox/&lt;Profile name&gt;/ Mac OS X ~/Library/Mozilla/Firefox/Profiles/&lt;Profile name&gt;/ 或 ~/Library/Application Support/Firefox/Profiles/&lt;Profile name&gt;/</p><p>一般把默认的 Profile 做为开发的 Profile，所以，我们不用做什么特殊的设置。你可以把上面提到的那些扩展，全部安装到此 Profile 下。 那么，我们还要创建一个新的 Profile 来完成扩展的安装，或者说是发布测试工作。通过下面的两个步骤，你可以实现这种需求。</p><p>首先，我们需要在命令行方式下，定位到 Firefox 的安装目录，通过运行 firefox -P 启动 Firefox 的 Profile 管理器窗口，建立一个负责测试安装的 Profile。当然，也可以建立更多的 Profile。 假设你建立了一个名为“test&quot;的 Profile，想启用这个 Profile，你需要通过 set MOZ_NO_REMOTE=1 firefox -P test 这两行命令来启用这个非默认启动状态的 Profile。为了方便测试，这两条命令可以写成一个 Shell 脚本或做成一个批处理文件。 下面列出Profile几个需要更改的设置项。</p><p>通过在地址栏中键入 about:config，你可以打开 Mozilla 内置的配置界面，这样你就可以更改那些设置项的值。在更改完这些设置项之后，我们会在以后的开发中更加得心应手。</p>',12),l=[t];function n(f,s,p,d,_,P){return a(),o("div",{"data-pagefind-body":!0},l)}const m=e(i,[["render",n]]);export{h as __pageData,m as default};
