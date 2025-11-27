import{_ as p,c as s,o as a,a7 as n}from"./chunks/framework.rGzEE5rn.js";const u=JSON.parse('{"title":"网易手机壁纸小偷程序","description":"","frontmatter":{"title":"网易手机壁纸小偷程序","tags":["spider","vbs"],"id":869,"categories":["Web"],"abbrlink":"bb255c33","date":"2006-03-09T23:06:55.000Z"},"headers":[],"relativePath":"web/网易手机壁纸小偷程序.md","filePath":"web/网易手机壁纸小偷程序.md","lastUpdated":1762742371000}'),t={name:"web/网易手机壁纸小偷程序.md"},e=n(`<p>四个月前发在落伍申请，居然被列入精华贴</p><p>该脚本已经弄到9千多套图片，并切成15种尺寸</p><p>240x320||176x220||176x180||144x176||132x160||128x160||128x146||128x128||128x96||120x160||120x144||120x128||120x101||96x113||80x80</p><p>只发在这里和<a href="http://www.im286.net/forum.php?mod=viewthread&amp;tid=1185221&amp;archiveid=1" target="_blank" rel="noreferrer">落伍</a>，转载的同志请保持完整哈</p><p>想知道<strong>WebSpider2</strong>是虾米东西，点击<a href="http://www.shaoys.com/Products/Default.asp?DocID=Y2006M01D27H15m11s39" target="_blank" rel="noreferrer">这里</a></p><p>oBlog居然不能发这么长的代码，那就贴壁纸的采集好了，完整的包括动画的采集请看<s>论坛 /bbs/Announce/announce.asp?BoardID=340&amp;ID=12636</s></p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39;网易手机壁纸小偷程序</span></span>
<span class="line"><span>&#39;For WebSpider2</span></span>
<span class="line"><span>&#39;改版本将下载最大尺寸图片，按照不同尺寸分目录保存</span></span>
<span class="line"><span>&#39;Blue Art Studio 梦游的猫</span></span>
<span class="line"><span>&#39;创建日期 2005-8-10</span></span>
<span class="line"><span>&#39;最后修改 2005年10月28日 15:25:55</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;http://mms.163.com/new_web/cm_lv2.jsp?type=0</span></span>
<span class="line"><span>&#39;http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=14</span></span>
<span class="line"><span>&#39;http://mmsimg.163.com/new_web/loaditem.jsp/type=1/path=/jrzh/gj/1_050815105637_718/128x128.gif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sub Main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;彩图    http://mms.163.com/new_web/cm_lv2.jsp?type=0</span></span>
<span class="line"><span>picAllName = &quot;灌篮高手||绝色美女||姿态撩人||手绘美女||制服诱惑||封面女郎||卡通美媚||真人美女秀||港台偶像||韩日红人馆||国内大腕||欧美明星||Q版明星||男欢女爱||两小无猜||爱情祝福||整蛊专家||搞怪BB||动物也疯狂||Q版卡通||手绘卡通||小美小美||家有贱狗||乱马1/2||火影忍者||圣斗士||暴暴牛||思思狗||绿豆蛙||水果部落||猪朋狗友||刀刀的世界||日本漫画系列||香港漫画系列||真情问候||生日祝福||春节||圣诞节||情人节||中秋节||元宵节||万圣节||劳动节||母亲节||端午节||绝色风光||四季花语||海底世界||手绘之美||校园风光||可爱宠物||奇趣动物||极品靓车||极速摩托||绿茵盛事||篮球风云||精彩瞬间||体坛明星||梦幻西游||大话西游||游戏精选||星球大战||偶像剧场||影视海报||广告精选||星座生肖||秀色可餐||时尚精品||水墨彩绘||纸醉金迷||怀旧情怀||地下铁||月亮忘记了||布瓜的世界||你们我们他们||听几米唱歌||我只能为你画一张小卡片||幸运儿||森林唱游||美食天堂||时尚精品||精品家居||另类一族||纸醉金迷||休闲生活||艺术名画||国画精粹||怀旧情怀||主题世界||枪林弹雨||武装天地||绚彩图片&quot;</span></span>
<span class="line"><span>picAllUrl = &quot;http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=217||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=34||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=201||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=33||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=35||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=36||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=37||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=198||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=39||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=104||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=40||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=43||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=222||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=119||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=120||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=60||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=94||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=93||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=110||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=112||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=152||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=62||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=63||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=111||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=181||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=182||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=202||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=221||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=151||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=240||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=121||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=179||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=65||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=166||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=175||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=59||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=50||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=58||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=52||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=57||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=51||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=54||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=183||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=189||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=195||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=90||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=91||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=89||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=200||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=92||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=87||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=88||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=97||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=108||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=99||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=100||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=102||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=246||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=75||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=76||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=78||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=85||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=149||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=84||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=86||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=146||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=248||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=249||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=251||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=250||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=252||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=107||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=160||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=161||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=170||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=171||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=172||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=173||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=190||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=44||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=45||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=46||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=48||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=136||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=150||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=80||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=81||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=82||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=83||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=95||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=96||http://mms.163.c</span></span>
<span class="line"><span>om/new_web/cm_lv2_pic.jsp?type=0&amp;catID=123&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;动画    http://mms.163.com/new_web/cm_lv2.jsp?type=1</span></span>
<span class="line"><span>&#39;picAllName = &quot;美女工场||美女表情||刀刀专栏||港台明星||日韩明星||欧美明星||鬼马明星秀||日常祝福||生日祝福||新婚喜庆||财源滚滚||春节||元宵节||情人节||妇女节||愚人节||母亲节||五一节||六一节||万圣节||中秋节||国庆节||圣诞节||七月十四||七夕节||父亲节||元旦||3.15消费权益保护日||搞怪语音贺卡||端午节||七一建党节||浓情蜜意||真情告白||美丽心情||小美系列||恋爱物语||灌篮高手||火影忍者||新世纪福音战士EVA||乱马二分之一||冒泡的天然画板||哆啦A梦||相聚一刻||家有贱狗||水果部落||暴暴牛||猪高乐翻天||韩国漫画精选||手机月历||来电显示||关机画面||文字秀||屏幕保护||星座生肖||开机画面||童话世界||文传漫画系列||功夫秘诀||KAK方块猪||友情万岁||约会娱乐||晚安道别||动感汽车||动感车徽||超炫体育||体坛明星||幽默男女||搞笑泡泡系列||搞怪宝贝||街头搞笑文化||爆笑SHOW||海底世界||恋恋风景||花花世界||时尚美女||古典美女||清纯可人||大话西游||梦幻西游||可爱宠物||宠物情缘||奇趣动物||猫言狗语||动画世界||你们我们他们||地下铁||向左走向右走||布瓜的世界||我只能为你画一张小卡片||我的心中每天开一朵花||月亮忘记了||森林唱游||森林里的秘密||照相本子||几米圣诞||几米新年||黑白异境||履历表||微笑的鱼||幸运儿||遗失了一只猫||123木头人||星球大战||韩日作品||掌上mtv||绿豆蛙LEON||星座物语||3D美女||嘟嘟与乐乐&quot;</span></span>
<span class="line"><span>&#39;picAllUrl = &quot;http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=14||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=122||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=83||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=18||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=19||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=118||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=152||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=20||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=21||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=22||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=87||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=23||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=24||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=25||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=26||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=27||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=28||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=29||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=30||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=31||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=32||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=33||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=34||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=78||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=79||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=84||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=117||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=86||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=120||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=137||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=138||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=35||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=36||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=37||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=38||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=115||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=40||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=133||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=141||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=43||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=147||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=74||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=103||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=114||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=151||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=153||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=156||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=157||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=44||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=45||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=46||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=48||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=49||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=47||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=88||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=106||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=111||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=121||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=123||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=50||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=51||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=52||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=54||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=55||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=57||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=75||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=59||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=60||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=61||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=131||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=132||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=67||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=112||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=130||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=127||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=128||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=129||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=139||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=140||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=69||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=107||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=71||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=80||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=72||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=93||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=94||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=95||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=96||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=97||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=98||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=99||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=100||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=101||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=102||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=116||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=119||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=142||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=143||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=144||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=145||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=146||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=148||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=125||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=126||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=134||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=136||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=150||http://mms.163.com/new_web/cm_lv2_pic.jsp?type=1&amp;catID=154||http://mms.163.com/</span></span>
<span class="line"><span>new_web/cm_lv2_pic.jsp?type=1&amp;catID=155&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>picAllNameArr = split(picAllName,&quot;||&quot;)</span></span>
<span class="line"><span>picAllUrlArr = split(picAllUrl,&quot;||&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ShowLog(&quot;爬行开始！&quot;)</span></span>
<span class="line"><span>Dim Url</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for i = 0 to ubound(picAllNameArr)</span></span>
<span class="line"><span>	showLog(&quot;开始抓取栏目： &quot; &amp; picAllNameArr(i))</span></span>
<span class="line"><span>	&#39;write_file &quot;test.txt&quot;,&quot;AAA&quot; &amp; chr(9) &amp; picAllUrlArr(i) &amp; chr(9) &amp; picAllNameArr(i) &amp; chr(10)</span></span>
<span class="line"><span>	getPageCount picAllUrlArr(i),picAllNameArr(i)</span></span>
<span class="line"><span>	showLog(&quot;累了，休息2秒钟&quot;)</span></span>
<span class="line"><span>	wait 2000</span></span>
<span class="line"><span>next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ShowLog(&quot;开始下载！&quot;)</span></span>
<span class="line"><span>savePath = &quot;E:\\切图\\163_pic&quot;    &#39;保存路径&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></span>
<span class="line"><span>down_head = &quot;http://mmsimg.163.com/new_web/loaditem.jsp/type=0/path=&quot;    &#39;彩图&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></span>
<span class="line"><span>&#39;down_head = &quot;http://mmsimg.163.com/new_web/loaditem.jsp/type=1/path=&quot;    &#39;动画&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></span>
<span class="line"><span>imageSize = &quot;240x320||176x220||176x180||144x176||132x160||128x160||128x146||128x128||128x96||120x160||120x144||120x128||120x101||96x113||80x80&quot;</span></span>
<span class="line"><span>imageSiezArr = split(imageSize ,&quot;||&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39;建立数据库连接</span></span>
<span class="line"><span>Set conn = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>DSNtemp = &quot;DRIVER={SQL Server};SERVER=127.0.0.1;UID=sa;PWD=cnnc;DATABASE=WebSpider&quot;</span></span>
<span class="line"><span>conn.open DSNtemp</span></span>
<span class="line"><span>sql = &quot;select * from pic where fromSite=&#39;网易&#39; and localPath is null order by id&quot;</span></span>
<span class="line"><span>set rs = CreateObject(&quot;Adodb.recordset&quot;)</span></span>
<span class="line"><span>rs.open sql,conn,1,3</span></span>
<span class="line"><span>id = 1</span></span>
<span class="line"><span>do while not rs.eof</span></span>
<span class="line"><span>	url = rs(&quot;url&quot;)</span></span>
<span class="line"><span>	if left(url,1) = &quot;/&quot; then url = right(url,len(url)-1)</span></span>
<span class="line"><span>	urlArr = split(url,&quot;/&quot;)</span></span>
<span class="line"><span>	urlPathNum = ubound(urlArr) - 1    &#39;有几级目录</span></span>
<span class="line"><span>	localPath = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39;第一种文件名命名方法,适用于一套图片放一个目录</span></span>
<span class="line"><span>	for i = 0 to urlPathNum</span></span>
<span class="line"><span>		localPath = localPath &amp; &quot;\\&quot; &amp; urlArr(i)</span></span>
<span class="line"><span>	next</span></span>
<span class="line"><span>	fileName = urlArr(urlPathNum + 1)    &#39;文件名</span></span>
<span class="line"><span>	&#39;filePath = savePath &amp; localPath    &#39;新路径</span></span>
<span class="line"><span>	&#39;fileExcArr = split(urlArr(urlPathNum + 1),&quot;.&quot;)    &#39;fileExcArr(ubound(fileExcArr))=扩展名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39;第二种文件名命名方法,适用于多套图片放同一目录,如a_01 a_02 b_01 b_02</span></span>
<span class="line"><span>	&#39;for i = 0 to urlPathNum - 1</span></span>
<span class="line"><span>	&#39;    localPath = localPath &amp; &quot;\\&quot; &amp; urlArr(i)</span></span>
<span class="line"><span>	&#39;next</span></span>
<span class="line"><span>	&#39;fileExcArr = split(urlArr(urlPathNum + 1),&quot;.&quot;)</span></span>
<span class="line"><span>	&#39;fileName = urlArr(urlPathNum) &amp; &quot;.&quot; &amp; fileExcArr(1)    &#39;新文件名</span></span>
<span class="line"><span>	&#39;filePath = savePath &amp; localPath    &#39;新路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39;msgbox(&quot;Path: &quot; &amp; filePath &amp; chr(13) &amp; &quot;Name: &quot; &amp; fileName &amp; &quot;&quot;)</span></span>
<span class="line"><span>	&#39;msgbox(&quot;url: &quot; &amp; down_head &amp; url_old &amp; chr(13) &amp; &quot;local: &quot; &amp; filePath &amp; &quot;\\&quot; &amp; fileName &amp; &quot;&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	down = False</span></span>
<span class="line"><span>	downSizeStatus = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for s = 0 to Ubound(imageSiezArr)</span></span>
<span class="line"><span>		downUrl = down_head &amp; &quot;/&quot; &amp; replace(url,&quot;128x128&quot;,imageSiezArr(s))</span></span>
<span class="line"><span>		fileStream = GetBody(downUrl)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if len(fileStream) &gt; 0 then</span></span>
<span class="line"><span>			fileNameTemp = split(fileName,&quot;.&quot;)</span></span>
<span class="line"><span>			fileName = imageSiezArr(s) &amp; &quot;.&quot; &amp; fileNameTemp(ubound(fileNameTemp))</span></span>
<span class="line"><span>			if not down then</span></span>
<span class="line"><span>				localSavePath =  savePath &amp; &quot;\\&quot; &amp; imageSiezArr(s) &amp; localPath</span></span>
<span class="line"><span>				CreateDIR localSavePath</span></span>
<span class="line"><span>				down = SaveToFile(fileStream , localSavePath &amp; &quot;\\&quot; &amp; fileName)    &#39;返回True则下载成功</span></span>
<span class="line"><span>				imageMaxSize = imageSiezArr(s)</span></span>
<span class="line"><span>			end if</span></span>
<span class="line"><span>			downSizeStatus = downSizeStatus &amp; &quot;1,&quot;</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			downSizeStatus = downSizeStatus &amp; &quot;0,&quot;</span></span>
<span class="line"><span>		end if</span></span>
<span class="line"><span>	next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39;ShowLog(replace(localPath,&quot;\\&quot;,&quot;/&quot;))</span></span>
<span class="line"><span>	&#39;ShowLog(fileName)</span></span>
<span class="line"><span>	&#39;ShowLog(imageWidth)</span></span>
<span class="line"><span>	&#39;ShowLog(imageHeight)</span></span>
<span class="line"><span>	if down then</span></span>
<span class="line"><span>		imageMaxSizeTemp = split(imageMaxSize , &quot;x&quot;)</span></span>
<span class="line"><span>		imageWidth = imageMaxSizeTemp (0)</span></span>
<span class="line"><span>		imageHeight = imageMaxSizeTemp (1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		rs(&quot;localPath&quot;) = localPath</span></span>
<span class="line"><span>		rs(&quot;localName&quot;) = fileName</span></span>
<span class="line"><span>		rs(&quot;maxWidth&quot;) = imageWidth</span></span>
<span class="line"><span>		rs(&quot;maxHeight&quot;) = imageHeight</span></span>
<span class="line"><span>		rs(&quot;downSizeStatus&quot;) = left(downSizeStatus , len(downSizeStatus)-1)</span></span>
<span class="line"><span>		rs(&quot;downtime&quot;) = now()</span></span>
<span class="line"><span>		rs.update</span></span>
<span class="line"><span>		ShowLog(&quot; 第 &quot; &amp; rs(0) &amp; &quot;条记录: [&quot; &amp; rs(&quot;name&quot;) &amp; &quot;] 下载完成 , 最大尺寸是: &quot; &amp; imageWidth &amp; &quot;x&quot; &amp; imageHeight)</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>	rs.movenext</span></span>
<span class="line"><span>	if id mod 10 = 0 then</span></span>
<span class="line"><span>		ShowLog(&quot;累了，休息5秒钟&quot;)</span></span>
<span class="line"><span>		wait 3000</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>	id = id + 1</span></span>
<span class="line"><span>loop</span></span>
<span class="line"><span>rs.close</span></span>
<span class="line"><span>set rs = Nothing</span></span>
<span class="line"><span>ShowLog(&quot;下载完成！&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>End Sub</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getPageCount(Url,picType)    &#39;读取栏目页面数</span></span>
<span class="line"><span>	html = getHTTPPage(url)</span></span>
<span class="line"><span>	index = instr(html,&quot;第&lt;select name=&quot;&quot;page&quot;&quot; onChange=&quot;&quot;javascript:document.upNavForm.submit();&quot;&quot;&gt;&lt;/select&gt;页&quot;)</span></span>
<span class="line"><span>	if index = 0 then    &#39;如果为空</span></span>
<span class="line"><span>		regStr = &quot;&lt;option value=\\&quot;&quot;(\\d+)\\&quot;&quot;(&gt;| selected&gt;)(\\d+)&lt;\\/option&gt;\\n&lt;\\/select&gt;页&lt;\\/td&gt;&lt;\\/tr&gt;&lt;\\/form&gt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		Set objRegExp = New Regexp            &#39;建立对象</span></span>
<span class="line"><span>		objRegExp.IgnoreCase = True            &#39;大小写忽略</span></span>
<span class="line"><span>		objRegExp.Global = True                &#39;全局为真</span></span>
<span class="line"><span>		objRegExp.Pattern = regStr            &#39;匹配字段</span></span>
<span class="line"><span>		set mm = objRegExp.Execute(html)    &#39;执行查找，Html为输入参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		For Each Match in mm                &#39;进入循环</span></span>
<span class="line"><span>			pageArr = split(CheckExp(regStr, Match.Value,&quot;$1||$3&quot;),&quot;||&quot;)</span></span>
<span class="line"><span>			if isArray(pageArr) and isNumeric(pageArr(0)) and pageArr(0) = pageArr(1) then exit for</span></span>
<span class="line"><span>		next</span></span>
<span class="line"><span>		set objRegExp = Nothing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if isArray(pageArr) and isNumeric(pageArr(0)) and pageArr(0) = pageArr(1) then</span></span>
<span class="line"><span>			&#39;msgbox(&quot;类别: &quot; &amp; picType &amp; Chr(13) &amp; &quot;地址: &quot; &amp; Url &amp; Chr(13) &amp; &quot;总共有: &quot;&amp; pageArr(0) &amp; &quot;页&quot;)</span></span>
<span class="line"><span>			msg = picType &amp; &quot; 共有&quot; &amp; pageArr(0) &amp; &quot;页&quot;</span></span>
<span class="line"><span>			getPicUrl url,pageArr(0),picType</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			msg = picType &amp; Chr(9) &amp; Url &amp; Chr(9) &amp; &quot;读取失败了&quot; &amp; chr(10)</span></span>
<span class="line"><span>		end if</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		msg = picType &amp; Chr(9) &amp; Url &amp; Chr(9) &amp; &quot;该类别没图片&quot; &amp; chr(10)</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>	showLog(msg)</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getPicUrl(url,page,picType)    &#39;抓取各分页图片信息</span></span>
<span class="line"><span>	for i = 1 to page</span></span>
<span class="line"><span>		&#39;http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=193</span></span>
<span class="line"><span>		&#39;http://mms.163.com/new_web/cm_lv2_pic.jsp?type=0&amp;catID=193&amp;ord=dDate&amp;page=2</span></span>
<span class="line"><span>		if i &gt; 1 then</span></span>
<span class="line"><span>			urlTemp = url &amp; &quot;&amp;ord=dDate&amp;page=&quot; &amp; i</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			urlTemp = url</span></span>
<span class="line"><span>		end if</span></span>
<span class="line"><span>		Html = getHTTPPage(urlTemp)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		&#39;&lt;SCRIPT&gt;showPic(&#39;44747&#39;,&#39;0&#39;,&#39;/ldw/0_050519115459_539/128x128.jpg&#39;,&#39;1&#39;,&#39;编号：44747\\n名字: 猴\\n人气:139&#39;);&lt;/SCRIPT&gt;</span></span>
<span class="line"><span>		regStr = &quot;&lt;SCRIPT&gt;showPic\\(&#39;\\d+\\&#39;,&#39;\\d\\&#39;,&#39;(.+)\\&#39;,&#39;\\d\\&#39;,&#39;编号：\\d+\\\\n名字: (.+)\\\\n人气:(\\d+)\\&#39;\\);&lt;\\/SCRIPT&gt;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		Set objRegExp = New Regexp            &#39;建立对象</span></span>
<span class="line"><span>		objRegExp.IgnoreCase = True            &#39;大小写忽略</span></span>
<span class="line"><span>		objRegExp.Global = True                &#39;全局为真</span></span>
<span class="line"><span>		objRegExp.Pattern = regStr            &#39;匹配字段</span></span>
<span class="line"><span>		set mm = objRegExp.Execute(Html)    &#39;执行查找，Html为输入参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		For Each Match in mm      &#39;进入循环</span></span>
<span class="line"><span>			picInfo = CheckExp(regStr, Match.Value,&quot;$1||$2||$3||&quot; &amp; picType)    &#39;地址||名称||人气||类别</span></span>
<span class="line"><span>			&#39;write_file &quot;网易MMS图片.txt&quot;,picInfo &amp; chr(9) &amp; urlTemp &amp; chr(10)</span></span>
<span class="line"><span>			showLog(&quot; &quot; &amp; picInfo)    &#39; &amp; chr(9) &amp; urlTemp &amp; chr(10)</span></span>
<span class="line"><span>			saveToDate picInfo</span></span>
<span class="line"><span>		next</span></span>
<span class="line"><span>		set mm = Nothing</span></span>
<span class="line"><span>		Set objRegExp = Nothing</span></span>
<span class="line"><span>	next</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function saveToDate(str)    &#39;保存到数据库</span></span>
<span class="line"><span>	arr = split(str,&quot;||&quot;)</span></span>
<span class="line"><span>	if ubound(arr)&gt;0 then</span></span>
<span class="line"><span>		picUrl = trim(arr(0))    &#39;trim(replace(arr(0),&quot;128x128&quot;,&quot;240x320&quot;))</span></span>
<span class="line"><span>		picName = trim(arr(1))</span></span>
<span class="line"><span>		picDown = trim(arr(2))</span></span>
<span class="line"><span>		picType = trim(arr(3))</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Set</span></span>
<span class="line"><span>conn = CreateObject(&quot;ADODB.Connection&quot;)</span></span>
<span class="line"><span>	DSNtemp=&quot;DRIVER={SQL Server};SERVER=127.0.0.1;UID=sa;PWD=cnnc;DATABASE=WebSpider&quot;</span></span>
<span class="line"><span>	conn.open DSNtemp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	pic_Type = 1    &#39;彩图 = 1 ,动画 = 2    &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></span>
<span class="line"><span>	sql = &quot;insert into pic (name,url,type,click,picType,fromSite) values(&#39;&quot;&amp;picName&amp;&quot;&#39;,&#39;&quot;&amp;picUrl&amp;&quot;&#39;,&#39;&quot;&amp;picType&amp;&quot;&#39;,&#39;&quot;&amp;picdown&amp;&quot;&#39;,&quot; &amp; pic_Type &amp; &quot;,&#39;网易&#39;)&quot;</span></span>
<span class="line"><span>	conn.execute(sql)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function getHTTPPage(url)    &#39;返回值getHTTPPage是目标网页的html代码</span></span>
<span class="line"><span>	dim Http</span></span>
<span class="line"><span>	set Http=createobject(&quot;MSXML2.XMLHTTP&quot;)</span></span>
<span class="line"><span>	Http.open &quot;GET&quot;,url,false</span></span>
<span class="line"><span>	Http.send()</span></span>
<span class="line"><span>	if Http.readystate&lt;&gt;4 then</span></span>
<span class="line"><span>	exit function</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>	getHTTPPage = BytesToBstr(Http.responseBody,&quot;GB2312&quot;)    &#39;转换原来默认的UTF-8编码转换成GB2312编码，否则直接用XMLHTTP组件调用有中文字符的网页得到的将是乱码</span></span>
<span class="line"><span>	set http=nothing</span></span>
<span class="line"><span>	if err.number&lt;&gt;0 then err.Clear</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function BytesToBstr(body,CodeType)    &#39;转换乱玛</span></span>
<span class="line"><span>	dim objstream</span></span>
<span class="line"><span>	set objstream = CreateObject(&quot;adodb.stream&quot;)</span></span>
<span class="line"><span>	objstream.Type = 1</span></span>
<span class="line"><span>	objstream.Mode = 3</span></span>
<span class="line"><span>	objstream.Open</span></span>
<span class="line"><span>	objstream.Write body</span></span>
<span class="line"><span>	objstream.Position = 0</span></span>
<span class="line"><span>	objstream.Type = 2</span></span>
<span class="line"><span>	objstream.Charset = CodeType</span></span>
<span class="line"><span>	BytesToBstr = objstream.ReadText</span></span>
<span class="line"><span>	objstream.Close</span></span>
<span class="line"><span>	set objstream = nothing</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function  CheckExp(patrn,str,tagstr)    &#39;匹配参数,文本,替换字符串</span></span>
<span class="line"><span>	Dim  regEx,Matches</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Set  regEx=New  RegExp    &#39;建立一个新对像</span></span>
<span class="line"><span>	regEx.Pattern=patrn    &#39;设置模板</span></span>
<span class="line"><span>	regEx.IgnoreCase=true    &#39;搜索是否区分大小写的  true表是不区分  flase表示区分</span></span>
<span class="line"><span>	regEx.Global=True    &#39;搜索是否应用于整个字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	Matches=regEx.replace(str,tagstr)    &#39;匹配并替代字符串</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	CheckExp=Matches    &#39;返回函数结果</span></span>
<span class="line"><span>end  function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function write_file(filename,Str)    &#39;向文件中写文字</span></span>
<span class="line"><span>	Const ForReading = 1, ForWriting = 2 ,ForAppending = 8</span></span>
<span class="line"><span>	Dim fso</span></span>
<span class="line"><span>	Set fso = CreateObject(&quot;Scripting.FileSystemObject&quot;)</span></span>
<span class="line"><span>	Set f = fso.OpenTextFile(filename, ForAppending , true)</span></span>
<span class="line"><span>	f.write Str</span></span>
<span class="line"><span>	f.close</span></span>
<span class="line"><span>	Set fso = nothing</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function CreateDIR(byval LocalPath) &#39;建立目录</span></span>
<span class="line"><span>	on error resume next</span></span>
<span class="line"><span>	LocalPath = replace(LocalPath,&quot;\\&quot;,&quot;/&quot;)</span></span>
<span class="line"><span>	set FileObject = createobject(&quot;Scripting.FileSystemObject&quot;)</span></span>
<span class="line"><span>	patharr = split(LocalPath,&quot;/&quot;)</span></span>
<span class="line"><span>	path_level = ubound(patharr)</span></span>
<span class="line"><span>	for i = 0 to path_level</span></span>
<span class="line"><span>		if i=0 then</span></span>
<span class="line"><span>			pathtmp=patharr(0) &amp; &quot;/&quot;</span></span>
<span class="line"><span>		else</span></span>
<span class="line"><span>			pathtmp = pathtmp &amp; patharr(i) &amp; &quot;/&quot;</span></span>
<span class="line"><span>			cpath = left(pathtmp,len(pathtmp)-1)</span></span>
<span class="line"><span>			if not FileObject.FolderExists(cpath) then</span></span>
<span class="line"><span>				FileObject.CreateFolder(cpath)</span></span>
<span class="line"><span>			end if</span></span>
<span class="line"><span>		end if</span></span>
<span class="line"><span>	next</span></span>
<span class="line"><span>	set FileObject = nothing</span></span>
<span class="line"><span>	if err.number&lt;&gt;0 then</span></span>
<span class="line"><span>		CreateDIR = false</span></span>
<span class="line"><span>		err.Clear</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		CreateDIR = true</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>end function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function GetBody(url)</span></span>
<span class="line"><span>	&#39;远程获取内容</span></span>
<span class="line"><span>	&#39;url地址可以是一个htm,也可以是gif或mid等其他媒体.或rar或zip文件.</span></span>
<span class="line"><span>	&#39;当媒体文件被下载,并没有过期之前,iis会返回一个403错误,提示媒体并没有过去.</span></span>
<span class="line"><span>	&#39;如果要强制重新下载,必须将ie的cooker清空.下载的历史脱机文件清空.</span></span>
<span class="line"><span>	Dim Retrieval</span></span>
<span class="line"><span>	Dim ret(2)</span></span>
<span class="line"><span>	&#39;建立XMLHTTP对象</span></span>
<span class="line"><span>	Set Retrieval = CreateObject(&quot;Microsoft.XMLHTTP&quot;)</span></span>
<span class="line"><span>	With Retrieval</span></span>
<span class="line"><span>		.Open &quot;Get&quot;, url, False, &quot;&quot;, &quot;&quot;</span></span>
<span class="line"><span>		.Send</span></span>
<span class="line"><span>		&#39;ret(0) = .ResponseBody</span></span>
<span class="line"><span>		GetBody = .ResponseBody</span></span>
<span class="line"><span>		&#39;MsgBox Left(getbody,4)</span></span>
<span class="line"><span>		&#39;MsgBox .getAllResponseHeaders()</span></span>
<span class="line"><span>		&#39;MsgBox .getResponseHeader(&quot;Content-Type&quot;)    &#39;当前下载对象的type</span></span>
<span class="line"><span>		ret(1)= .getResponseHeader(&quot;Content-Type&quot;)</span></span>
<span class="line"><span>		&#39;MsgBox .getResponseHeader(&quot;Content-Length&quot;)    &#39;当前下载对象的长度,即图片或铃声文件的长度</span></span>
<span class="line"><span>		ret(2) =.getResponseHeader(&quot;Content-Length&quot;)</span></span>
<span class="line"><span>	End With</span></span>
<span class="line"><span>	&#39;getbody=ret</span></span>
<span class="line"><span>	Set Retrieval = Nothing</span></span>
<span class="line"><span>End Function</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Function SaveToFile(Stream, FilePath)    &#39;将流内容保存为文件</span></span>
<span class="line"><span>	Dim objStream</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	On Error Resume Next</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&#39;建立ADODB.Stream对象，必须要ADO 2.5以上版本</span></span>
<span class="line"><span>	Set objStream = CreateObject(&quot;ADODB.Stream&quot;)</span></span>
<span class="line"><span>	objStream.Type = 1  &#39;以二进制模式打开</span></span>
<span class="line"><span>	objStream.Open</span></span>
<span class="line"><span>	objstream.write Stream</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	objstream.SaveToFile FilePath, 2    &#39;2=覆盖已经存在的文件,1=不覆盖</span></span>
<span class="line"><span>						  &#39;adSaveCreateNotExist  =1</span></span>
<span class="line"><span>							  &#39;adSaveCreateOverWrite =2</span></span>
<span class="line"><span>	objstream.Close()</span></span>
<span class="line"><span>	&#39;关闭对象，释放资源</span></span>
<span class="line"><span>	Set objstream = Nothing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if err.Number &lt;&gt; 0 then</span></span>
<span class="line"><span>		SaveToFile = false</span></span>
<span class="line"><span>	else</span></span>
<span class="line"><span>		SaveToFile = true</span></span>
<span class="line"><span>	end if</span></span>
<span class="line"><span>End Function</span></span></code></pre></div>`,7),c=[e];function m(l,i,o,_,w,r){return a(),s("div",{"data-pagefind-body":!0},c)}const b=p(t,[["render",m]]);export{u as __pageData,b as default};
