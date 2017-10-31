# MD Converter
A Markdown Editor for Wechat Public Platform

体验地址：[http://md.imbeta.cn/](http://md.imbeta.cn/)

它的由来：[写个小编辑器娱乐自己](https://mp.weixin.qq.com/s?__biz=MzI5NDE2NTY3NA==&mid=2247483856&idx=1&sn=e546458bce813ed44e808f8939bed23f&chksm=ec664c15db11c5031dda301abce816b35230bb3c796482ce06fc3f881740cc0e5f83d044e088#rd)

主要使用的是 TypeScript + Vue，利用了 webpack 的 Tree Shaking 特性 ，用到几个开源库：

1. ShowDown，一个 Markdown 解析库，把 Markdown 文本变成 HTML；
2. Google Code Prettify，这个是用来做代码高亮的；
3. Clipboard，把生成的 HTML 复制到剪贴板。

涉及的技术点有：

1. TypeScript
2. Vue
3. SASS
4. CSS Module
5. Async/Await

要了解 TypeScript + Vue 可以参考 https://www.qcloud.com/community/article/935663

编译命令：

```bash
npm install && tsc -p src/tsconfig.json && gulp
```

生成的文件在 `dist` 目录。

### LICENSE
MIT License
