import{_ as n,o as r,c as _,j as t,a as e,I as o,w as s,D as l}from"./chunks/framework.ClMj9r9D.js";const i="/images/2007/03/12_12771.gif",b=JSON.parse('{"title":"无法找到MSStart(或其组件)解决方法","description":"","frontmatter":{"title":"无法找到MSStart(或其组件)解决方法","tags":["多普达","mobile"],"id":923,"categories":["Digital"],"abbrlink":"b7871269","date":"2007-03-12T12:54:01.000Z"},"headers":[],"relativePath":"Digital/无法找到MSStart(或其组件)解决方法.md","filePath":"Digital/无法找到MSStart(或其组件)解决方法.md","lastUpdated":1719999875000}'),c={name:"Digital/无法找到MSStart(或其组件)解决方法.md"},d=t("p",null,[t("img",{src:i,alt:"MSStart"})],-1),S=t("p",null,'今天发现手机左键【开始】菜单出错了，提示：无法找到":MSStart"(或其组件)。右击通讯录也出错了，提示：无法找到"RunG2Contact"(或其组件)。',-1),p=t("p",null,"网上搜了一下，找不到答案，但是发现了相关资料。触发这2个按钮的事件存放在注册表，只要恢复原来键值即可。",-1),f=t("p",null,"因为之前运行过【右键管家】软件，怀疑是软件改了注册表，而设置回默认值的时候，注册表改动出错而导致的。",-1),u=t("strong",null,"开始菜单：",-1),m=t("p",null,"初始值如下图",-1),M=t("p",null,[t("strong",null,"通讯录："),e(" HKEY_CURRENT_USER\\Software\\Microsoft\\home\\keys\\113 这里是控制右键的，2个值 默认值(Default)是显示的名称，默认是”通讯录“，移动定制机是”全球通“，你可以改为你的名字或其它 Open表示触发程序，默认是 \\Windows\\Contacts.lnk，我的注册表被改成了\\Storage\\Windows\\RunG2Contact.exe，那应该是哪个版本的通讯录程序，而我的2003(SE)不存在这个程序，于是出错了。你也可以自己定义右键菜单，把值改为要执行的程序即可了。")],-1);function g(h,C,x,D,E,R){const a=l("font");return r(),_("div",{"data-pagefind-body":!0},[d,S,p,f,t("p",null,[u,e(" LOCAL-MACHINE\\SOFTWARE\\Microsoft\\shell\\Rai:MSStart 下面有几个值，0和1是字符串值，0默认为"),o(a,{color:"#ff0000"},{default:s(()=>[e("MSStart")]),_:1}),e("，1为"),o(a,{color:"#ff0000"},{default:s(()=>[e("appman.exe -s BootApps :MSStart tpcutil.dll AMStart")]),_:1}),e(" 触发的时候，先寻找名为MSStart的窗口，找到了则切换为当前窗口，找不到了继续找注册表 1，执行1的命令，我出错的时候检查注册表，发现1值完全被删除了，怪不得出错了。")]),m,M])}const k=n(c,[["render",g]]);export{b as __pageData,k as default};
