## 公众号『程序员的诗和远方』编辑器

GitHub 地址：[https://github.com/bob-chen/md](https://github.com/bob-chen/md)

在线体验地址：[http://md.imbeta.cn](http://md.imbeta.cn)

欢迎关注公众号『*程序员的诗和远方*』，扯淡，交流，成长。

![公众号：程序员的诗和远方](http://www.imbeta.cn/images/wx-qrcode.jpg)


### 一些示例

用了 webpack 的 **TreeShaking** 特性，开心。


```javascript
	async loadInitMD(){
		try {
			let response = await fetch(this.url, { mode: 'cors'});
			let data = await response.text();
			// console.log(data);
			this.editorText = data;
		  } catch(e) {
			console.log("Load init md error", e);
		  }
	}
```
***

```python
print '人生苦短，我用 Python'
```

涉及的技术点有：

1. TypeScript
2. Vue
3. SASS
4. CSS Module
5. Async/Await
6. Webpack

用到几个开源库：

- Showdown.js
- Google Code Prettify
- Clipboard.js

表格示例：

| h1    |    h2   |      h3 |
|-------|---------|---------|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
| *foo* | **bar** | ~~baz~~ |



