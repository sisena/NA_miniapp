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
            * 修复<b>报修页面(baoxiu)</b>和<b>报修单修改页面(ticketschange)</b>的报修时间选择下拉菜单无法正常显示被选中项的问题
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
        * 更换    
            * 更换了<b>主页面(mainpage)</b>轮播图的图片
* 2020/7/25： <br>
    * 0.9.7
        * 新增
            * 在<b>报修填写页面(baoxiu)</b>新增了轻提示以提示用户完整输入所有信息
            * 给<b>报修填写页面(baoxiu)</b>和<b>查看报修单状态页面(ticketsupdate)</b>以及<b>个人资料页面(userinfo)</b>增加了新的icon以保证可阅读性
* 2020/7/31: <br>
    * 0.9.8
        * 修复
            * 修复<b>报修单修改页面(ticketschange)</b>的轻提示无法正常显示的问题
            * 修复<b>查看报修单状态页面(ticketsupdate)</b>神奇的显示了不存在的回复的问题
        * 更换
            * 更换<b>报修填写页面(baoxiu)</b>的报修时间文字，“选择报修时间”变为“上满时间”，以便用户更好的理解
            * 顺应后端迭代更换<b>查看报修单状态页面(ticketsupdate)</b>提交报修单修改方法为 PUT
        * 新增
            * 为了更好的体验，将更新日志单独分离放至 fix_log.md 中
* 2020/8/1: <br>
    * 0.9.9
        * 更换
            * 顺应后端迭代给所有页面都更换了从数据获取的方式
    * 1.0.0
        * 进行微信小程序上线审核
        * 更换
            * 更换<b>报修填写页面(baoxiu)</b>的部分输入框的描述，让用户更高效的进行报修操作
            * 更换<b>查看报修单状态页面(ticketsupdate)</b>的部分按钮文字，使其看起来更合理
        * 修复
            * 修复<b>主页面(mainpage)</b>又又又读取不到公告的bug
    * 1.1.0
        * 微信小程序已正式上线
        * 修复
            * 修复<b>更多公告页面(noticebar)</b>又又又读取不到公告的bug(我上午怎么忘了修这个)
        * 更换
            * 更换了<b>登陆页面(login)</b>的整体布局和样式，让它看起来更像个人用的东西
            * 更换了<b>个人资料页面(userinfo)</b>的注销按钮样式
        * 新增
            * 在<b>登陆页面(login)</b>新增了<b>忘记密码页面(fgpwd)</b>的按钮
            * 在tabbar组件加了个NA的Logo
            * 新增<b>忘记密码页面(fgpwd)</b>，会调用API向用户的mysise邮箱发送重置密码邮件
    * 1.1.1
        * 更换
            * 将客服功能按钮从<b>主页面(mainpage)</b>移动到<b>个人资料页面(userinfo)</b>，且更换为微信公众平台客服接口
            * 更换了<b>登陆页面(login)</b>的两个按钮的样式
            * 更换了<b>个人资料页面(userinfo)</b>的样式
* 2020/8/4: <br>
    * 1.2.0
        * 更换
            * <b>查看报修单状态页面(ticketsupdate)</b>更名为<b>修改报修单页面(ticketsupdate)</b>
            * 更换了<b>修改单据页面(ticketsupdate)</b>的button为圆角中空，让其看起来更像2012年后的网页
            * 更换了<b>报修历史页面(myhistory)</b>显示的单据类别，仅显示“已完成”、“正在维修”、“机主取消”类别的单据
        * 修复
            * 修复<b>修改单据页面(ticketsupdate)</b>中因为个人骚操作原因，多个单据下拉同时打开时点击“修改单据”按钮无法跳转正确的单据页面
        * 新增
            * 新增<b>未接单页面(uncompleteticket)</b>,仅对网管开放
            * 新增<b>我的工作页面(myjob)</b>,仅对网管开放
        * 重要
            * 主体功能已完全开发完毕，非必要的话接下来基本不会新增功能，只会针对显示和交互进行一定优化，以及维护比较严重的bug
* 2020/8/28: <br>
    * 1.2.2
        * 新增
            * 在<b>报修填写页面(baoxiu)</b>新增toast轻提示，提示用户
* 2020/8/29： <br>
    * 1.2.3
        * 更换
            * 更换<b>报修填写页面(baoxiu)</b>的提示组件为dialog
        * 修复
            * 修复<b>报修填写页面(baoxiu)</b>中filed因为微信小程序原生组件导致placeholder属性覆盖弹窗的问题
* 2020/8/30： <br>
    * 1.2.4
        * 更换
            * 更换<b>未接单页面(uncompleteticket)</b>与<b>我的工作页面(myjob)</b>的简略显示方式，将宿舍号优先显示出来
* 2020/8/31: <br>
    * 1.2.5
        * 修复
            * 修复<b>主页面(mainpage)</b>tabbar遮挡页面的bug
* 2020/9/11：<br>
    * 1.3.0
        * 修复
            * 为了防止因网络卡顿导致的复数次提交相同表单和请求问题，在各个页面添加了Toast，阻止用户多次点击button的同时，提示用户请求已被受理
        * 新增
            * 新增<b>忘记密码页面(fgpwd)</b>的刷新按钮，现在可以刷新验证码了（其实是刷新页面）     
* 2021/10/14：<br>
    * 1.3.0
        * 修复
            * 移动端登录界面需要点击两次才能登录
            * Toast无限加载问题
            * 我的历史页没有单时无限刷新问题
        * 新增
            * 新增判断接口返回是否正确，不正确是显示后端返回的错误