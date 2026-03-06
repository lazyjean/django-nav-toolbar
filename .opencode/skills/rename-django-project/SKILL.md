---
name: rename-django-project
description: Rename Django package (directory, pyproject.toml, GitHub, PyPI)
---

# Django Project Rename

重命名 Django 包项目。

## 步骤

### 1. 重命名目录
```bash
mv old_name new_name
```

### 2. 更新 pyproject.toml
- `name`: 改为 `django-new-name`
- `include`: 改为 `new_name*`
- 更新 GitHub URLs

### 3. 更新 Python 文件
- `apps.py`: 更新 name 和 verbose_name
- 模板: 更新 static 路径引用
- `settings.py`: 更新 INSTALLED_APPS

### 4. 更新 README
- 替换包名
- 更新安装命令

### 5. 重命名 GitHub
```bash
gh repo rename new-name --yes
```

### 6. 发布
```bash
rm -rf dist/ build/ *.egg-info
python -m build
twine upload dist/*
```
