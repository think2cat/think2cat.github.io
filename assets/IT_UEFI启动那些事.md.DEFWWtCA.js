import{_ as s,o as i,c as t,a7 as a}from"./chunks/framework.Z1Dznsxj.js";const e="/images/2017/12/DiskGenius-1.png",p="/images/2017/12/uefi%E4%BF%AE%E5%A4%8D.png",n="/images/2017/12/DiskGenius.png",I=JSON.parse('{"title":"UEFI启动那些事","description":"","frontmatter":{"title":"UEFI启动那些事","tags":["BIOS","ESP","MSR","UEFI","WIN10"],"id":1858,"categories":["IT"],"abbrlink":"7a24af62","date":"2017-12-11T17:35:58.000Z"},"headers":[],"relativePath":"IT/UEFI启动那些事.md","filePath":"IT/UEFI启动那些事.md","lastUpdated":1719711816000}'),r={name:"IT/UEFI启动那些事.md"},o=a('<p>UEFI早在大概05年就推出1.1版了，但是一直没有推广开，直到win7开始支持 我作为一个守旧派不大愿意接受新硬件，也一直坚守Legacy BIOS启动方式（下面简称BIOS）</p><p>但是最近换了新电脑，自带WIn10，格掉后重新分区，Ghost了一版Win10后发现无法启动，主板设置居然连硬盘启动都消失了，折腾半天无果，才不得已看了恶补了一下知识 关于BIOS启动和UEFI启动可以看这篇豆芽文 <a href="https://wiki.archlinux.org/index.php/Unified_Extensible_Firmware_Interface" target="_blank" rel="noreferrer">Unified Extensible Firmware Interface</a></p><p>简单来说，BIOS启动后从硬盘MBR引导扇区（Master Boot Record）加载引导信息，而UEFI是从\\ESP分区加载引导信息，这又涉及到MBR分区表和GPT分区表</p><p>MBR和GPT分区表在使用和性能上是没有差别的，只是由于MBR规定是硬盘扇区前面512字节，长度的限制，所以只能支持2.2T硬盘和最多4个分区，而GPT则没有这方面限制，理论上支持无限分区 在分区软件DiskGenius可以看到2种分区表类型，GUID则是GPT（GPT是缩写，全称是GUID Partition Table (GPT)）</p><p><img src="'+e+'" alt="DiskGenius"> （图片来自网络）</p><p>选择GPT分区表下方可以看到ESP和MSR分区</p><blockquote><p>ESP = EFI system partition MSR = Microsoft Reserved Partition</p></blockquote><p>其中ESP就是上面提到的引导区，如果硬盘不是系统启动盘，即使用GPT分区表，ESP分区也是 可以不要的，再者MSR分区是为了避免硬盘插到老系统提示硬盘未分区而做的兼容，如果不需要兼容老系统也是可以不要的</p><p>接着来说我遇到的主板设置找不到硬盘引导的问题，就是分区时用了MBR形式，而主板并不兼容这种老引导，解决就是重新用EFI分区表，然后重装系统，重装时会自动在ESP分区写入引导文件，如果跟我一样是GHOST的，那GHOST完后，还要手动往ESP分区写入引导文件，win10是自带了修复工具，命令行下敲bcdboot可以看到，如果有的话直接敲</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bcdboot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\W</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">indows</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> I:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UEFI</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zh-cn</span></span></code></pre></div><p>但是我启动的PE居然没有这个命令，好在自带了一个小工具</p><p><img src="'+p+'" alt=""></p><p>709KB 非常小巧，修复完重启，终于可以看到win10的启动画面了，内牛满面！</p><p>另外晒下新买的本本</p><p><img src="'+n+'" alt=""></p>',15),l=[o];function h(d,c,k,F,_,E){return i(),t("div",{"data-pagefind-body":!0},l)}const B=s(r,[["render",h]]);export{I as __pageData,B as default};
