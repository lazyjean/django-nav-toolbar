# Django Admin Tabs

A Django admin extension that adds a history bar with tabs to track and quickly navigate through recently visited admin pages.

## Features

- Automatically records visited admin pages
- Displays history as clickable tabs at the top of admin interface
- Quick navigation back to previous pages
- Close button to remove individual history records
- State persisted in browser's localStorage (survives page refreshes)
- Maximum of 20 history records (configurable)
- No database required - uses client-side storage only

## Requirements

- Python 3.8+
- Django 3.2+

## Installation

```bash
pip install django-admin-tabs
```

Or install the latest version from GitHub:

```bash
pip install git+https://github.com/lazyjean/django_admin_tabs.git
```

## Usage

### 1. Add to INSTALLED_APPS

In your Django project's `settings.py`:

```python
INSTALLED_APPS = [
    # ... your other apps
    'django_admin_tabs',
]
```

### 2. Create Template Override

In your project's template directory, create `templates/admin/base_site.html`:

```html
{% extends "django_admin_tabs/base.html" %}
```

Make sure your `TEMPLATES` setting includes the directory containing this template:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        # ...
    },
]
```

### 3. Run Your Project

```bash
python manage.py runserver
```

Navigate to Django admin, and you'll see the history bar at the top of the page.

## Configuration

You can customize the behavior by modifying the JavaScript file at:
`django_admin_tabs/static/django_admin_tabs/history.js`

| Variable | Default | Description |
|----------|---------|-------------|
| `MAX_ITEMS` | 20 | Maximum number of history items to store |
| `STORAGE_KEY` | 'admin_history_bar' | Key used in localStorage |

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/lazyjean/django_admin_tabs.git
cd django_admin_tabs

# Install in development mode
pip install -e .

# Run the example project
cd example
python manage.py runserver
```

### Code Quality

```bash
# Linting
ruff check django_admin_tabs/

# Formatting
ruff format django_admin_tabs/
```

### Testing

```bash
# Run tests
python -m pytest

# Or with Django's test runner
python manage.py test
```

## License

MIT License - see [LICENSE](LICENSE) for details.
