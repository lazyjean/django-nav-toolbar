# Contributing to Django Admin Tabs

Thank you for your interest in contributing to Django Admin Tabs! This document provides guidelines for contributing to the project.

## Getting Started

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/django_admin_tabs.git
cd django_admin_tabs
```

### 2. Set Up Development Environment

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install in development mode
pip install -e ".[dev]"

# Install pre-commit hooks
pre-commit install
```

### 3. Run Tests

```bash
# Run example project
cd example
python manage.py runserver
```

## Development Workflow

### Code Style

We use **Ruff** for code formatting and linting:

```bash
# Check code style
ruff check django_admin_tabs/

# Format code
ruff format django_admin_tabs/
```

Pre-commit hooks will automatically run these checks before each commit.

### Making Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Run tests and linting:
   ```bash
   ruff check django_admin_tabs/
   ruff format django_admin_tabs/
   ```

4. Commit your changes:
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues
- Ensure all checks pass
- Keep PRs focused and small

## Code of Conduct

Be respectful and inclusive. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## Questions?

Open an issue for any questions or discussions.
