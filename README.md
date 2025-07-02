# 🔄 Cypress Test Automation Pipeline

This workflow automatically runs Cypress tests based on commit message tags in square brackets `[ ]` when a pull request is opened, reopened, or synchronized with the `master` branch.

## Workflow Summary

### Trigger Conditions
- **Runs on**: `pull_request` events (`opened`, `reopened`, `synchronize`)
- **Branch**: `master` only

## Key Features

### 1. **Commit Message Scanning**
   - Looks for square brackets `[tag]` in commit messages
   - Skips entire pipeline if no brackets found
   - Supports multiple tags (e.g., `[spins][bets]`)

### 2. **Tag-Based Test Selection**

| Tag          | Tests Executed |
|--------------|----------------|
| `[spins]`    | `Spins.cy.js` |
| `[features]` | `Features.cy.js` |
| `[bonus]`    | `bonus_and_autospin_stop_on_bonus_feature.cy.js` |
| `[limits]`   | `limit_multiply.cy.js` |
| `[bets]`     | `inside_bets.cy.js`, `outside_bets.cy.js`, `race_sectors_bets.cy.js` |

### 3. **Smart Caching**
   - Caches `node_modules` and Cypress binaries for faster execution

### 4. **Reporting**
   - Generates Mochawesome HTML reports
   - Uploads test videos on failure
   - Artifacts available in GitHub Actions UI

## Execution Flow

### 1. **Preparations**
   - Checks out code with full git history
   - Initializes submodules
   - Validates commit messages

### 2. **Test Setup**
   - Installs Node.js v22
   - Restores cached dependencies (or installs fresh)
   - Starts local test server on port 8000

### 3. **Test Execution**
   - Runs only the Cypress specs matching commit tags
   - Uses Chrome browser
   - Records videos of test runs

### 4. **Post-Processing**
   - Merges individual test reports
   - Generates consolidated HTML report
   - Uploads artifacts:
     - `chrome-test-report.html`
     - Test videos (on failure)

## Usage Examples

**✅ Valid Commit Messages**:
```plaintext
feat: [spins] Add new rotation logic
fix: [bets] Correct stake calculation
chore: [limits][bonus] Update test cases
❌ Invalid Commit Messages (will skip tests):

plaintext
docs: Update README
fix: broken component
📦 Artifacts
After pipeline runs:

Download chrome-test-report.html from Actions tab

View test videos if any failures occurred

Note: The pipeline will only execute when commit messages contain at least one valid tag in square brackets.

text

### Key Formatting Features:
1. **Emoji Headers** for better visual scanning
2. **Bold Markdown** (`**text**`) for important elements
3. **Code Blocks** for commit message examples
4. **Table Formatting** for tag mapping
5. **Status Indicators** (✅/❌) for valid/invalid examples
6. **Note Box** for important caveat
