# Git Setup Guide

## 🚀 Quick Start

### Initialize Git Repository

```bash
# Navigate to project root
cd playwright-typescript-demo

# Initialize Git repository
git init

# Add all files (respecting .gitignore)
git add .

# Create initial commit
git commit -m "Initial commit: Playwright TypeScript automation framework"
```

---

## 🔗 Connect to Remote Repository

### Option 1: GitHub

```bash
# Create repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/playwright-typescript-demo.git
git branch -M main
git push -u origin main
```

### Option 2: Azure DevOps

```bash
# Create repository in Azure DevOps first, then:
git remote add origin https://dev.azure.com/YOUR_ORG/YOUR_PROJECT/_git/playwright-typescript-demo
git branch -M main
git push -u origin main
```

### Option 3: GitLab

```bash
# Create repository on GitLab first, then:
git remote add origin https://gitlab.com/YOUR_USERNAME/playwright-typescript-demo.git
git branch -M main
git push -u origin main
```

---

## 📝 What Will Be Committed?

### ✅ Included (Source Code & Config)

```
src/                          # Source code
tests/                        # Test files
playwright.config.ts          # Playwright configuration
tsconfig.json                 # TypeScript configuration
package.json                  # Dependencies
.env.example                  # Environment template
README.md                     # Documentation
docs/                         # Additional documentation
.eslintrc.json               # Linting configuration
.prettierrc                   # Code formatting
.husky/                       # Git hooks
.github/workflows/            # CI/CD workflows
Dockerfile                    # Docker configuration
.dockerignore                 # Docker ignore rules
.gitignore                    # Git ignore rules
```

### ❌ Excluded (Generated/Sensitive)

```
node_modules/                 # 250+ MB of dependencies
test-results/                 # Test execution results
playwright-report/            # HTML reports
logs/                         # Log files
.env                          # Sensitive credentials
.vscode/                      # Personal IDE settings
.DS_Store                     # macOS system files
*.log                         # All log files
```

---

## 🧹 Clean Before Committing

### Remove Generated Files

```bash
# Remove all ignored directories
Remove-Item -Recurse -Force test-results, playwright-report, logs, allure-results, allure-report -ErrorAction SilentlyContinue

# Verify what will be committed
git status
```

### Check Repository Size

```bash
# See total size
git count-objects -vH
```

---

## 🔐 Secure Your Repository

### Before Committing

1. **Verify `.env` is NOT included:**

   ```bash
   git status | Select-String ".env"
   # Should show nothing or only .env.example
   ```

2. **Check for sensitive data:**

   ```bash
   # Search for potential secrets
   git grep -i "password"
   git grep -i "api[_-]?key"
   git grep -i "secret"
   ```

3. **Use `.env.example` instead:**
   ```bash
   # Copy .env to .env.example and remove real values
   cp .env .env.example
   # Edit .env.example to replace real values with placeholders
   ```

---

## 🔀 Git Workflow

### Daily Workflow

```bash
# 1. Check status
git status

# 2. Pull latest changes
git pull origin main

# 3. Create feature branch
git checkout -b feature/api-test-improvements

# 4. Make changes, then stage
git add .

# 5. Commit with meaningful message
git commit -m "feat: add API test coverage for Petstore"

# 6. Push to remote
git push origin feature/api-test-improvements

# 7. Create Pull Request on GitHub/Azure DevOps
```

### Commit Message Format

```bash
# Use conventional commits
feat: Add new feature
fix: Fix bug
docs: Update documentation
test: Add or update tests
refactor: Refactor code
style: Code formatting
chore: Build/config changes
perf: Performance improvements

# Examples:
git commit -m "feat: add DummyJSON API client"
git commit -m "fix: resolve error handling in Petstore tests"
git commit -m "docs: update README with API testing section"
git commit -m "test: add integration tests for login flow"
```

---

## 🌱 Branch Strategy

### Recommended Structure

```
main                    # Production-ready code
└── develop             # Integration branch
    ├── feature/*       # New features
    ├── bugfix/*        # Bug fixes
    ├── hotfix/*        # Urgent fixes
    └── release/*       # Release preparation
```

### Branch Naming

```bash
feature/add-api-tests
bugfix/fix-login-timeout
hotfix/critical-security-patch
release/v1.2.0
```

---

## 🛠️ Useful Git Commands

### Status & Inspection

```bash
# Check status
git status

# View changes
git diff

# View staged changes
git diff --staged

# View commit history
git log --oneline --graph --all

# Show specific commit
git show <commit-hash>
```

### Undo Changes

```bash
# Discard changes in working directory
git checkout -- <file>

# Unstage file
git reset HEAD <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Branches

```bash
# List branches
git branch -a

# Create and switch to new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Delete branch
git branch -d feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

---

## 🔒 .gitignore Already Configured

✅ **The project includes a comprehensive `.gitignore` file** that automatically excludes:

- Node modules
- Test results and reports
- Log files
- Environment variables (`.env`)
- IDE settings
- OS-specific files
- Build outputs

See [`docs/GITIGNORE_GUIDE.md`](./GITIGNORE_GUIDE.md) for complete details.

---

## 🤖 Pre-commit Hooks (Optional)

### Install Husky (Already configured)

```bash
# Install dependencies (includes Husky)
npm install

# Husky will automatically:
# - Run linting before commit
# - Run formatting before commit
# - Prevent commits with errors
```

### Manual Hook Setup

```bash
# If Husky not installed
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run lint"
npx husky add .husky/pre-commit "npm run format"
```

---

## 📦 First Commit Checklist

Before your first commit:

- [ ] `.gitignore` exists and is comprehensive
- [ ] `.env` is NOT committed (only `.env.example`)
- [ ] `node_modules/` is NOT committed
- [ ] `test-results/` and `logs/` are NOT committed
- [ ] All source code files are included
- [ ] `package.json` and `package-lock.json` are included
- [ ] `README.md` is complete and up-to-date
- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)

---

## 🔄 Syncing with Remote

### Regular Updates

```bash
# Fetch and merge changes
git pull origin main

# Or fetch + rebase (cleaner history)
git pull --rebase origin main

# Push your changes
git push origin main
```

### Sync Fork

```bash
# Add upstream remote (original repo)
git remote add upstream https://github.com/ORIGINAL_OWNER/repo.git

# Fetch upstream changes
git fetch upstream

# Merge upstream into your branch
git merge upstream/main
```

---

## 🎯 Best Practices

1. **Commit often** - Small, focused commits are better than large ones
2. **Write clear messages** - Use conventional commit format
3. **Pull before push** - Always sync with remote before pushing
4. **Test before commit** - Run `npm test` before committing
5. **Review changes** - Use `git diff` to review what you're committing
6. **Use branches** - Never commit directly to `main`
7. **Keep .env local** - Never commit sensitive credentials

---

## 🔗 Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

## ❓ Troubleshooting

### Large File Error

```bash
# Error: file exceeds GitHub's 100 MB limit
# Solution: Add to .gitignore and remove from staging
git rm --cached large-file.zip
echo "large-file.zip" >> .gitignore
git commit -m "Remove large file"
```

### Accidentally Committed .env

```bash
# Remove from staging (before commit)
git rm --cached .env

# Remove from history (after commit)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all
```

### Merge Conflicts

```bash
# 1. See conflicting files
git status

# 2. Open files and resolve conflicts (remove <<<< ==== >>>> markers)

# 3. Stage resolved files
git add <resolved-file>

# 4. Complete merge
git commit
```

---

**Last Updated:** 2026-08-03
