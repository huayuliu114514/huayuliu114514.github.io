# 万束屋

我的个人博客：https://huayuliu114514.github.io/

Hugo + PaperMod 主题，推送到 main 分支后由 GitHub Actions 自动部署。

## 写一篇新文章

1. 在 `F:\BLOG` 目录下运行：

   ```
   hugo new content posts/文章名.md
   ```

2. 编辑 `content/posts/文章名.md`，把开头的 `draft: true` 改成 `draft: false` 才会发布
3. 本地预览：`hugo server`，浏览器打开 http://localhost:1313
4. 发布：

   ```
   git add -A
   git commit -m "新文章：xxx"
   git push
   ```

   一两分钟后，网站自动更新。

## 常用链接

- 源码仓库：https://github.com/huayuliu114514/huayuliu114514.github.io
- 部署状态：https://github.com/huayuliu114514/huayuliu114514.github.io/actions
- PaperMod 主题文档：https://github.com/adityatelange/hugo-PaperMod
