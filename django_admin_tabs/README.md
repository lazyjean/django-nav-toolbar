# Django Admin History Bar

Django Admin 历史记录工具条组件，在页面顶部显示最近访问的 Admin 页面，方便快速切换。

## 功能

- 自动记录访问过的 Admin 页面
- 点击标签快速跳转
- 关闭按钮删除记录
- 状态保存在 localStorage，刷新不丢失
- 最多保存 20 条记录

## 安装

1. 将 `admin_history_bar` 目录复制到你的 Django 项目中

2. 在 `settings.py` 中添加应用：

```python
INSTALLED_APPS = [
    # ...
    'admin_history_bar',
]
```

3. 在模板目录创建 `templates/admin/base_site.html`，内容如下：

```html
{% extends "admin_history_bar/base.html" %}
```

## 配置

### 修改记录数量

在 `admin_history_bar/static/admin_history_bar/history.js` 中修改：

```javascript
const MAX_ITEMS = 20;  // 改成你想要的数字
```

### 修改 localStorage 键名

在 `history.js` 中修改：

```javascript
const STORAGE_KEY = 'admin_history_bar';
```

## 文件结构

```
admin_history_bar/
├── __init__.py
├── apps.py
├── static/
│   └── admin_history_bar/
│       ├── history.js
│       └── history.css
└── templates/
    └── admin_history_bar/
        └── base.html
```

## 依赖

- Django 3.2+
- 不需要其他第三方依赖
