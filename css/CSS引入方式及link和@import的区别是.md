<!--
 * @Author: kingford
 * @Date: 2021-04-23 08:50:56
 * @LastEditTime: 2021-04-24 11:30:10
-->

# CSS 引入方式及 link 和@import 的区别是?

## css 引入方式

在 html 设计制作中，css 有四种引入方式。

### 方式一：内联样式

内联样式，也叫行内样式，指的是直接在 HTML 标签中的 style 属性中添加 CSS。

```html
<div style="display: none;background:red"></div>
```

很显然，内联方式引入 CSS 代码会导致 HTML 代码变得冗长，且使得网页难以维护。

### 方式二：嵌入样式

在 HTML 头部中的 \<style> 标签下书写 CSS 代码。

```html
<head>
  <style>
    .content {
      background: red;
    }
  </style>
</head>
```

### 方式三：链接样式

链接方式指的是使用 HTML 头部的 标签引入外部的 CSS 文件。

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
```

这是最常见的也是最推荐的引入 CSS 的方式。使用这种方式，所有的 CSS 代码只存在于单独的 CSS 文件中，所以具有良好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件会在第一次加载时引入，以后切换页面时只需加载 HTML 文件即可。

### 方式四：导入样式

使用 CSS 规则引入外部 CSS 文件。

```html
<style>
  @import url(style.css);
</style>
```

或者写在 css 样式中

```css
@charset "utf-8";
@import url(style.css);
* {
  margin: 0;
  padding: 0;
}
.notice-link a {
  color: #999;
}
```

## link 与@import 对比

### 1.区别

- 区别 1：link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。

- 区别 2：link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
  所以会出现一开始没有 css 样式，闪烁一下出现样式后的页面(网速慢的情况下)

- 区别 3：link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。

- 区别 4：link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。

### 2.补充

@import 最优写法
@import 的写法一般有下列几种：

- @import ‘style.css’ //Windows IE4/ NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4 不识别

- @import “style.css” //Windows IE4/ NS4, Macintosh IE4/NS4 不识别

* @import url(style.css) //Windows NS4, Macintosh NS4 不识别

- @import url(‘style.css’) //Windows NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4 不识别
- @import url(“style.css”) //Windows NS4, Macintosh NS4 不识别

---

由上分析知道，@import url(style.css) 和@import url(“style.css”)是最优的选择，兼容的浏览器最多。从字节优化的角度来看@import url(style.css)最值得推荐。

> 注意：@import url(xxx.css); 有最大次数的限制，经测试 IE6 的最大次数是 31 次，第 32 个 import 及以后的都不能生效。虽然最多只能 import 31 次，但不会影响 css 里面的其他规则，如 body{}的定义还能正常显示。 Firefox 没有发现有 import 的最大值。 另外，既然纵向 import 有最大次数限制，却可以通过横向 import 来继续扩展
