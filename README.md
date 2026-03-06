# Django Admin Tabs

A Django admin extension that adds smart navigation tabs to help you quickly switch between recently visited admin pages.

**Zero Configuration Required** - Just add to `INSTALLED_APPS` and it works!

## Features

- **Zero Configuration** - Works out of the box with just INSTALLED_APPS setup
- **Smart Tab Navigation** - Automatically maintains a tab bar of your recent admin pages
- **Quick Page Switching** - Click any tab to instantly jump to that page
- **Close Tabs** - Remove individual tabs with a click
- **Persistent Tabs** - Your tabs survive page refreshes (stored in browser)
- **Theme Compatible** - Automatically adapts to Django Admin's color scheme
- **Custom Theme Support** - Works with django-admin-interface, django-jazzmin, etc.
- **Configurable** - Optional settings for customization

## Requirements

- Python 3.8+
- Django 3.2+

## Installation

```bash
pip install django-nav-toolbar
```

Or install from source:

```bash
pip install git+https://github.com/lazyjean/django-nav-toolbar.git
```

## Usage

### 1. Add to INSTALLED_APPS

**Important**: Place `nav_toolbar` **before** `django.contrib.admin` in `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    'nav_toolbar',       # Must come BEFORE django.contrib.admin
    'django.contrib.admin',
    # ... your other apps
]
```

### 2. Collect Static Files

```bash
python manage.py collectstatic
```

### 3. Run Your Project

```bash
python manage.py runserver
```

Navigate to Django admin, and you'll see the tabs bar at the top of the page!

## How It Works

As you navigate through different admin pages, **Django Admin Tabs** automatically maintains a tab bar showing your recent pages. This allows you to:

- **Quickly switch** between different admin sections without using the back button
- **Keep context** of where you've been working
- **Access previous pages** with a single click

The tabs are automatically managed based on your navigation patterns.

## Configuration (Optional)

All settings are optional. The package works with zero configuration.

### Available Settings

Add to your `settings.py`:

```python
DJANGO_ADMIN_TABS = {
    'MAX_ITEMS': 20,              # Maximum number of tabs to maintain
    'STORAGE_KEY': 'admin_tabs',  # Browser storage key prefix
}
```

### Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `MAX_ITEMS` | 20 | Maximum number of tabs to display |
| `STORAGE_KEY` | `'admin_tabs'` | Prefix for browser storage |

## Technical Details

### Template Override Mechanism

This package uses Django's template loading order to automatically extend admin templates:

1. Django's `app_directories` template loader searches apps in `INSTALLED_APPS` order
2. By placing `nav_toolbar` before `django.contrib.admin`, its template is found first
3. The package's template extends `admin/base.html` and injects CSS/JS automatically

This approach ensures compatibility with:
- Standard Django Admin
- django-admin-interface
- django-jazzmin
- django-admin-numeric-filter
- Any other admin theme that extends `admin/base.html`

### Styling

The package uses Django Admin's CSS variables to automatically match your admin theme:

- `--primary` - Primary color for active tabs
- `--body-bg` - Background color
- `--body-fg` - Text color
- `--border-color` - Border color
- `--header-link-color` - Active tab text color

If you have a custom admin theme with these CSS variables defined, the tabs will automatically match your theme.

## Troubleshooting

### Tabs not showing

1. **Check INSTALLED_APPS order**: Ensure `nav_toolbar` comes **before** `django.contrib.admin`
2. **Run collectstatic**: Make sure static files are collected
3. **Clear browser cache**: Hard refresh the admin page (Ctrl+F5 or Cmd+Shift+R)

### Warning about INSTALLED_APPS order

If you see a warning like:
```
UserWarning: nav_toolbar should be placed BEFORE django.contrib.admin...
```

Simply reorder your `INSTALLED_APPS` as shown in the Usage section above.

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/lazyjean/django-nav-toolbar.git
cd django-nav-toolbar

# Install in development mode
pip install -e .

# Run the example project
cd example
python manage.py migrate
python manage.py runserver
```

### Code Quality

```bash
# Linting
ruff check nav_toolbar/

# Formatting
ruff format nav_toolbar/
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
