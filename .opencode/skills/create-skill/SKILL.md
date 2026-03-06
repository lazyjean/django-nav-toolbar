---
name: create-skill
description: Create a new OpenCode skill with proper structure
---

# Create OpenCode Skill

创建一个符合规范的 OpenCode skill。

## 目录结构

必须放在以下位置之一：
- `.opencode/skills/<skill-name>/SKILL.md` (项目内)
- `~/.config/opencode/skills/<skill-name>/SKILL.md` (全局)

## 必须的 frontmatter

每个 SKILL.md 必须以 YAML frontmatter 开头：

```
---
name: skill-name
description: 简短描述（1-1024字符）
---
```

### 字段说明

| 字段 | 必需 | 说明 |
|------|------|------|
| name | 是 | 1-64字符，小写字母数字，单个连字符分隔 |
| description | 是 | 1-1024字符，描述 skill 用途 |
| license | 否 | MIT 等 |
| compatibility | 否 | opencode |
| metadata | 否 | 键值对 |

### name 格式规则

- 1-64 字符
- 小写字母数字
- 单个连字符分隔
- 不能以 `-` 开头或结尾
- 不能有连续 `--`

✅ 正确: `publish-django-package`, `create-skill`
❌ 错误: `Create-Skill`, `publish_django_package`, `-invalid`

## 创建步骤

### 1. 创建目录
```bash
mkdir -p .opencode/skills/<skill-name>
```

### 2. 创建 SKILL.md
```bash
cat > .opencode/skills/<skill-name>/SKILL.md << 'EOF'
---
name: <skill-name>
description: 简短描述
---

# Title

详细说明...
EOF
```

### 3. 验证

确保：
- 目录名与 name 相同
- 有 name 和 description
- 格式符合规范

## 示例

创建 `hello-world` skill：

```bash
mkdir -p .opencode/skills/hello-world

cat > .opencode/skills/hello-world/SKILL.md << 'EOF'
---
name: hello-world
description: Print hello world message
---

# Hello World

Prints "Hello, World!" to console.

```bash
echo "Hello, World!"
```
EOF
```

## 参考

- 文档: https://opencode.ai/docs/skills/
