# wechat_group_robot
微信群助手 自动通过好友请求 拉人进群 智能陪聊

# 案例
下面是我用wechaty快速搭建的一个**机器人小助手 感兴趣的可以体验下**
![进群.png](https://upload-images.jianshu.io/upload_images/10518780-af0600cb81dfe2bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 步骤
- 1.首先需要一个可以登录上微信网页版(https://wx2.qq.com/)的微信号 这个号要在你要操作的微信群里

- 2.配置淘宝源
```
    npm config set registry https://registry.npm.taobao.org
    npm config set disturl https://npm.taobao.org/dist
    npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```

- 3.npm install

- 4.设置下index.js里的常量就可以直接使用了
```
/************************  常量   ***************************/
const ROBOTNAME = '你的机器人微信号' // 机器人微信名
const ROOMNAME = '/^你的群名/i' //群名
const ADDFRIENDWORD = '/加群验证的关键词/i'//自动加好友填写的关键词
const ADDROOMWORD = '/私聊机器人的关键词/'
/***********************************************************/
```
- 5.npm start 该步骤时间较长 请耐心等待