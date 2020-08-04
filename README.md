# NA报修网小程序前端
## 简介
NA报修网的小程序端，用wepy和vant高强度乐高积木式编程，感觉自己在前端的路上渐行渐远
## 实现功能
* 普通用户
    * 登陆
    * 忘记密码
    * 报修
    * 查看/修改/消除自己的报修单
    * 查看自己的历史报单
    * 查看个人信息
    * 查看公告
    * 客服
* 网管/管理员
    * 接单
    * 退/消单
    * 其余与普通用户一致
## notice
app.wpy 的 urlRequest 需要自行添加
## 展示
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/index_ex.png" width="30%" height="auto" alt="主页"/>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/baoxiu_index.png" width="30%" height="auto" alt="报修页面"/>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/history_ex.png" width="30%" height="auto" alt="保修历史"/>
</div>

## 技术栈
* Wepy 2.X
* vant

## <a href="./fix_log.md"><b>更新日志</b></a>

## 主要文件树
./src/<br>
...<br>
├─baoxiu=>报修填写页面<br>
├─common<br>
├─components=>组件<br>
│  └─vant<br>
│      <br>
├─findasb<br>
├─login=>登陆页面<br>
├─mainpage=>主页面<br>
├─noticebar=>更多公告页面<br>
├─myhistory=>报修历史页面<br>
├─static<br>
│  └─img=>图片<br>
├─ticketschange=>报修单修改页面<br>
├─ticketsupdate=>修改报修单页面<br>
├─fgpwd=>忘记密码页面<br>
├─myjob=>我的工作页面<br>
├─uncompleteticket=>未接单页面<br>
└─userinfo=>个人资料页面<br>
...
<br>
## todo
* 主体功能已完全开发完毕，非必要的话接下来基本不会新增功能或进行大面积的修改，只会针对显示和交互进行一定优化，以及维护比较严重的bug
