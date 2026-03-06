---
name: admin-theme-integration
description: Configure Django Admin extension for zero-config template auto-discovery
---

# Django Admin Theme Integration

实现 Django Admin 扩展包的零配置集成。

## 步骤

### 1. 创建模板
`templates/admin/base_site.html`:
```html
{% extends "admin/base.html" %}
{% load static %}

{% block extrahead %}
{{ block.super }}
<link rel="stylesheet" href="{% static 'your_app/your.css' %}">
{% endblock %}

{% block footer %}
{{ block.super %}
<script src="{% static 'your_app/your.js' %}"></script>
{% endblock %}
```

### 2. AppConfig 顺序检查
在 `apps.py` 添加：
```python
def ready(self):
    self._check_installed_apps_order()

def _check_installed_apps_order(self):
    from django.conf import settings
    apps = [a.split('.')[-1] for a in settings.INSTALLED_APPS]
    try:
        if apps.index("your_app") > apps.index("admin"):
            warnings.warn("your_app must be before admin in INSTALLED_APPS")
    except ValueError:
        pass
```

### 3. CSS 变量
使用 `var(--primary, #fallback)` 格式

## 用户配置
```python
INSTALLED_APPS = [
    'your_app',
    'django.contrib.admin',
]
```
