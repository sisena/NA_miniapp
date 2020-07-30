# NA报修网小程序前端
## 
app.wpy 的 urlRequest 需要自行添加
## 展示
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/index.png" width="30%" height="auto" alt="主页"/>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/baoxiu.png" width="30%" height="auto" alt="报修页面"/>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/NA-miniapp/history.png" width="30%" height="auto" alt="保修历史"/>
</div>

## 技术栈
* Wepy 2.X
* vant

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
├─ticketsupdate=>查看报修单状态页面<br>
└─userinfo=>个人资料页面<br>
...
<br>
## todo
* 面向网管主体功能
* 或许还有别的功能
* 优化各页面前端显示(特别是订单查看页面)

## 更新日志
* 2020/7/12：<br>
    * 0.9.0
        * 修复
            * 各页面重新接上了新版本的接口
            * 修复各页面因为无jwt而无法正常使用的问题
        * 新增
            * 在<b>报修单历史页面(myhistory)</b>增加了filter以正确的显示历史报修单(取消与已完成) 
            * <b>主页面(mainpage)</b>新增公告栏功能，默认显示最新的一条公告
            * 在<b>个人资料页面(userinfo)</b>新增注销按钮

* 2020/7/23: <br>
    * 0.9.1
        * 修复
            * 修复各页面的api接口使其正常访问服务器
    * 0.9.2
        * 修复
            * 修复<b>报修填写页面(baoxiu)和报修单修改页面(ticketschange)</b>的<b>报修标题</b>和<b>报修详情</b>因原生组件问题会<b>覆盖报修时间选择的下拉菜单</b>问题
        * 更换
            * 更换了<b>报修时间选择</b>的下拉组件，以便其更快的渲染
            * 更换了<b>快速报修</b>的下拉菜单组件，使其用起来没这么反人类
    * 0.9.3
        * 修复：
            * 修复<b>报修页面(baoxiu)</br>和<br>报修单修改页面(ticketschange)<b>的报修时间选择下拉菜单无法正常显示被选中项的问题
            * 修复了无法提交报修单和无法修改报修单的问题
            * 使主页面(mainpage)公告正常显示，默认显示最新的两条，第一条为滚动，第二条换行
        * 新增：
            * 新增<b>更多公告页面(noticebar)</b>，现在可以在该页面看到所有公告了
* 2020/7/24: <br>
    * 0.9.4
        * 修复
            * 修复了<b>报修历史页面(myhistory)</b>显示错误问题，现在会显示账户下的所有报修单了
    * 0.9.5
        * 修复        
            * 修复了<b>个人资料页面(userinfo)</b>注销按钮无法正确注销(清除token)的问题
            * 修复了<b>报修单填写页面(baoxiu)</b>因为聚焦问题需要多次点击提交按钮的问题
        * 新增
            * 给<b>登陆页面(login)</b>新增了轻提示以提示用户没有正确输入账户或密码
            * 新增<b>主页面(mainpage)</b>的联系客服功能，会显示一张客服的二维码
    * 0.9.6
        * 修复
            * 修复<b>主页面(mainpage)</b>轮播图谜之压缩问题，现在至少能让NA的LOGO看起来正常点的了
            * 更换了<b>主页面(mainpage)</b>轮播图的图片
* 2020/7/25： <br>
    * 0.9.7
        * 新增
            * 在<b>报修填写页面(baoxiu)</b>新增了轻提示以提示用户完整输入所有信息
            * 给<b>报修填写页面(baoxiu)</b>和<b>查看报修单状态页面(ticketsupdate)</b>以及<b>个人资料页面(userinfo)</b>增加了新的icon以保证可阅读性


