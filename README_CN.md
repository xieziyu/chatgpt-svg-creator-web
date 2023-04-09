<div align="center">
  <a href="https://github.com/xieziyu/chatgpt-svg-creator-web">
    <img src="./src/assets/icon.png" alt="Logo" width="60" height="60">
  </a>
  <h3 align="center">ChatGPT SVG Creator</h3>
  <p align="center">
    借助 ChatGPT 来创建、修改和预览 SVG 的小工具
  </p>
  <p align="center">
    <a href="./README.md">English</a> | 中文
  </p>
</div>

<details open>
  <summary>目录</summary>
  <ul>
    <li><a href="#概述">概述</a></li>
    <li><a href="#主要功能">主要功能</a></li>
    <li><a href="#演示">演示</a></li>
    <li><a href="#本地启动">本地启动</a></li>
    <li><a href="#浏览器扩展">浏览器扩展</a></li>
  </ul>
</details>

## 概述

借助 ChatGPT SVG Creator Web 小工具，我们可以使用自然语言来设计和修改 SVG，提供了基础的预览以及导入、导出功能。

**使用方法**

1. 使用前请先在 `Settings` 中配置 OpenAI 相关的参数。
2. 导入已有的 SVG 或者从 0 开始创建。
3. 之后进行的每轮对话，GPT 都会附加右侧预览中的 SVG 作为提示。
4. 导出你的作品

## 主要功能

* 使用自然语言来设计和修改 SVG
* 基础的 SVG 预览功能
* 支持导入和导出 SVG 源码和文件

## 演示

#### 创建一个新的 SVG 并修改
![demo1](./docs/svg-creator-demo-1.gif)

#### 导入已有的 SVG 并修改
![demo2](./docs/svg-creator-demo-2.gif)


## 本地启动

1. clone 当前仓库
2. `yarn && yarn start`

## 浏览器扩展

[ChatGPT SVG Creator](https://github.com/xieziyu/chatgpt-svg-creator)