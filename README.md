# Astro 二次元简洁博客

使用 [Astro](https://astro.build) 搭建的偏二次元风格简洁博客框架，适合个人主页与 ACG 内容写作。

## 功能列表

- 🎨 蓝色二次元视觉：蓝色主题、圆角卡片、柔和光影，同时保持简洁
- 🖼️ 图片背景：使用本地 SVG 蓝色渐变背景图，非纯色
- ✨ 粒子动效：全站鼠标可交互蓝色粒子背景
- 🌗 深色模式切换：支持手动 Light/Dark 切换，并记住选择
- 🏠 个人主页（左右布局：左侧固定个人信息/分类/标签，右侧最新文章与快捷入口）
- 📝 博客文章列表与详情页
- 📖 文章目录：文章页左侧显示阅读目录，并高亮当前章节
- 📊 阅读进度条 + 回到顶部：文章页内提供滚动进度条和返回顶部按钮
- ⏱️ 阅读时长 / 字数统计：文章头部显示预计阅读时间和字数
- 🧭 上一篇 / 下一篇：文章底部提供前后文章导航
- 🧩 相关文章推荐：根据分类和标签推荐相关文章
- 📜 版权声明：文章底部显示 CC BY-NC-SA 版权信息
- 💬 评论系统：预留 Giscus 评论集成配置
- 📄 博客分页（`src/consts.ts` 可调整每页数量）
- 🏷️ 标签分类：标签总览页 + 每个标签的文章列表
- 📂 分类分类：分类总览页 + 每个分类的文章列表
- 🔗 友链：友链展示 + 申请规则
- 👤 关于我
- 🚀 项目展示
- 🗂️ 时间归档
- 🔍 站内搜索（标题/描述/标签/分类）
- ⌨️ Ctrl+K 全局搜索：任意页面按 Ctrl+K 打开搜索弹窗
- 📡 RSS 订阅
- 🗺️ Sitemap 站点地图
- 💬 SEO 基础（Open Graph / Twitter Card / canonical）
- 🌙 深色模式（跟随系统）
- 📱 响应式布局
- 🧭 404 页面
- ⬆️ 回到顶部按钮已移到页面最外层，避免被 Footer 遮挡

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建静态站点
npm run build

# 本地预览构建结果
npm run preview
```

## 目录结构

```text
.
├── public/                  # 静态资源（favicon 等）
├── src/
│   ├── components/          # Astro 组件（含分页组件）
│   ├── content/
│   │   └── blog/            # Markdown 博客文章
│   ├── consts.ts            # 全局常量（如每页文章数）
│   ├── content.config.ts    # 内容集合 schema
│   ├── data/                # 站点、友链、项目数据
│   ├── layouts/             # 页面布局
│   ├── pages/               # 页面与 API 路由
│   │   ├── blog/            # 博客列表与文章详情
│   │   ├── categories/      # 分类
│   │   ├── tags/            # 标签
│   │   └── ...
│   ├── styles/global.css    # 全局样式
│   └── utils/               # 工具函数
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 自动部署

仓库包含 GitHub Actions workflow：推送到 `main` 后自动构建，并通过 SSH + rsync
同步到 1Panel / OpenResty 的博客目录。首次使用需配置 SSH 密钥和仓库 Secrets，详见
[自动部署指南](docs/deployment.md)。

## 自定义

1. 修改 `src/data/site.ts` 中的站点标题、作者、导航、社交链接。
2. 修改 `src/data/links.ts` 维护友链。
3. 修改 `src/data/projects.ts` 维护项目展示。
4. 在 `src/content/blog` 下新增 Markdown 文件即可发布文章。

## 文章 Frontmatter 示例

```yaml
---
title: '文章标题'
description: '文章描述'
pubDate: 2025-01-01
updatedDate: 2025-01-02
category: '分类'
tags: ['标签1', '标签2']
draft: false
featured: false
---
```

> 默认站点地址是 `https://example.com`，部署前请修改 `astro.config.mjs` 中的 `site` 和 `src/data/site.ts` 中的 `site`。
