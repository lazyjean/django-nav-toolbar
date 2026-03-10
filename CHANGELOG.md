# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.1] - 2026-03-10

### Fixed
- Removed duplicate `{% block footer %}` in template that caused rendering issues

## [0.2.0] - 2026-03-10

### Changed
- **Middleware Injection**: Replaced template overriding with middleware-based HTML injection for better compatibility
- **Zero Configuration**: Fully automatic setup - no INSTALLED_APPS ordering requirements
- **django-admin-interface Support**: Full compatibility with admin themes via middleware approach
- **Visual Design**: Improved tab styling with better contrast between active/inactive states
- **No Layout Jump**: Pre-inserted container eliminates visual flicker during page navigation

### Fixed
- Conflicts with django-admin-interface template overrides
- Visual jump when navigating between pages
- Tab visibility and contrast issues in various themes

## [0.1.0] - 2026-03-04

### Changed
- **Zero Configuration**: No longer requires manual template setup, works with INSTALLED_APPS order only
- **Template Auto-discovery**: Uses Django's template loading order to automatically override admin templates
- **AppConfig Order Check**: Added automatic validation for INSTALLED_APPS ordering
- **System Styling**: Now uses Django Admin CSS variables for automatic theme compatibility
- **Documentation**: Updated to focus on "Tabs Navigation" as primary feature rather than "History Tracking"
- **File Naming**: Renamed `history.css/js` to `tabs.css/js` for clarity

### Fixed
- Compatibility with django-admin-interface and other admin themes
- Hard-coded colors replaced with CSS variables

## [0.0.1] - 2024-03-04

### Added
- Initial release
- History bar with tabs for tracking visited admin pages
- Close button to remove individual history records
- localStorage persistence for history state
- Maximum 20 history records (configurable)
- Example Django project for local development
- Comprehensive README with installation instructions
- Contributing guidelines
- Code of Conduct
- Pre-commit hooks for code quality
- Ruff for linting and formatting

### Changed
- Standardized project structure for Python packaging
- Fixed static file paths in template
- Replaced flake8/black/isort with ruff

### Fixed
- Static file reference paths (admin_history_bar -> django_admin_tabs)
- Unused import lint errors

