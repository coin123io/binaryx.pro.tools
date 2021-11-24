# binaryx.pro.tools自动打工脚本
binaryx.pro 脚本工具
主要是解决频繁让小可爱工作点击授权的琐事，完全自动化解决这个问题，支持windows和macos

# #第一步下载浏览器：
下载 [Chrome](https://www.google.com/intl/zh-CN/chrome/ "Chrome")，并进入https://www.binaryx.pro/#/game/work?workType=partTime 这个界面,BSC钱包我暂时用的Math钱包（麦子钱包）或者 MetaMask .

# #第二步配置脚本：
在当前页面右键：
[![](https://github.com/coin123io/binaryx.pro.tools/blob/main/image/a75de11c47f9e40d456fc0b0a9ec0e3a9ce9513e.jpeg?raw=true)]()

复制代码：[bnx_work.js](https://github.com/coin123io/binaryx.pro.tools/blob/main/bnx_work.js "bnx_work.js")


![](https://github.com/coin123io/binaryx.pro.tools/blob/main/image/48591a9e9a142c5ce22df066ce16439ed5620c0e.jpeg?raw=true)
按键：回车即可运行

# #第三步配置自动鼠标点击工具：


WINDOWS下载：https://zhuanlan.zhihu.com/p/25967941


MAC OS下载：rapidclick.zip
![](https://github.com/coin123io/binaryx.pro.tools/blob/main/image/de5ba2884360b997917831efee21840d96266cfd.jpeg?raw=true)

这里频率设置为1-2都可以，表示没秒点击多少次，然后点击“Start”即可运行，鼠标放在Math或MetaMask 提示授权的位置。
![](https://github.com/coin123io/binaryx.pro.tools/blob/main/image/95945a03435a2f8345200f26d8acf7da3d409600.png?raw=true)


# #第四步：

如果遇到运行中中断或网络不佳的情况下可以尝试刷新界面，然后重新输入脚本运行，重复第二步



####*可能遇到的问题*
- 如遇：「RapidClick.app已损坏，打不开。你应该将它移到废纸篓」!!!
- 解决：
```

安装xCode，你可以在App Store中下载安装，并且至少运行一次。

安装Command Line Tools 工具

打开终端工具输入如下命令：

xcode-select --install

弹出后选择继续安装。

打开终端工具输入并执行如下命令：

codesign --force --deep --sign - /Applications/RapidClick.app

然后重新运行即可

```

------------

#####如果工具对您有用，请我喝杯咖啡，谢谢啦
![](https://github.com/coin123io/binaryx.pro.tools/blob/main/image/Snipaste_2021-11-24_15-18-13.png?raw=true)
