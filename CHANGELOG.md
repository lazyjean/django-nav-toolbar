# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

