---
name: publish-django-package
description: Build and publish Django package to PyPI
---

# Django Package Publish

发布 Django 包到 PyPI 的完整流程。

## 前置要求

1. PyPI 账户和 API Token 已配置 `~/.pypirc`
2. 安装工具：`pip install twine build`

## 步骤

### 1. 构建包
```bash
rm -rf dist/ build/ *.egg-info
python -m build
```

### 2. 上传
```bash
twine upload dist/*
```

### 3. 验证
- 检查 PyPI 页面
- 执行 `pip install <package-name>`
