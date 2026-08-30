# RoboMaster 电控组培训教程

基于 MkDocs Material 的教程站，内容定位是**学习路线 + 资料导航**（不写知识点讲解，只给推荐教程、资料链接和学习建议）。

## 本地预览

```bash
# 首次：创建虚拟环境并安装依赖（Windows / Git Bash）
python -m venv .venv
.venv/Scripts/python -m pip install -r requirements.txt

# 启动本地预览，浏览器打开 http://127.0.0.1:8000
.venv/Scripts/python -m mkdocs serve
```

日常写作流程：改 `docs/` 下的 Markdown 文件 → 保存 → 浏览器自动刷新。

## 目录结构

```
docs/
├── index.md      欢迎页（培训目标、如何使用本教程）
├── about.md      比赛与电控组简介
├── resources.md  如何寻找资源
├── c-lang.md     C 语言学习
├── dsa.md        数据结构与算法
├── git.md        Git 与工程化
├── stm32.md      STM32 开发基础
├── comm.md       通信协议
├── modules.md    常用模块
├── rtos.md       RTOS
├── motor.md      电机控制
├── debugging.md  调试方法
└── project.md    综合项目
```

章节顺序与分组在 `mkdocs.yml` 的 `nav` 字段里调整；站名、配色也在 `mkdocs.yml` 里改。

## 写作约定

- 每章结构：导语（为什么学）→ 环境配置（可选）→ 学习资料（名称 + 链接 + 一两句推荐语）→ 学习建议 → `## 待补充`（checkbox 清单）
- 待补内容：勾选框逐条填充；正文里的 `[截图：xxx]` 是贴图占位
- 不写知识点讲解和代码教程，保持"资源导航"定位

## 发布（以后做）

1. 在 GitHub 新建仓库并推送本目录
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**
3. 之后每次 `git push` 到 main 分支，`.github/workflows/deploy.yml` 会自动构建并发布

## 搜索说明

中文搜索使用 Material 自带方案。若后续对搜索质量有更高要求，可研究 [mkdocs-jieba 相关方案](https://github.com/fxsjy/jieba)（按 jieba 分词重建搜索索引）。
