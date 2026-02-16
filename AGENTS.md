# Development Guide for Kevin Hallett Portfolio

## Environment Setup

**Requirements:**
- Node.js: 20.18.0
- npm: 10.8.2
- Platform: Windows

**Installation:**
```bash
npm install --legacy-peer-deps
```

## Commands

### Development
- `npm run develop` or `npm start` - Start development server with hot reload
- `npm run build` - Build production site to `/public`
- `npm run serve` - Serve production build locally

### Scripts
- `npm run reset` - Run reset script at `.\scripts\reset-proj.bat`

### Testing & Linting
**Note:** No testing framework is currently configured in this project.
- No lint, test, or typecheck commands available
- Components rely on manual testing through Gatsby development server

## Code Style Guidelines

### General Principles
- **No TypeScript:** This is a JavaScript-only codebase
- **No automated linting/formatting:** Manual code review required
- **Functional components:** Use arrow functions with implicit returns when possible
- **Minimal state:** Keep components presentational when possible

### Component Structure

**File Organization:**
```
ComponentName/
├── index.js           # Component file
├── ComponentName.module.css  # CSS modules
└── (other assets)
```

**Component Pattern:**
```javascript
import React from 'react'
import { ExternalLib } from 'library'
import LocalComponent from '../local-component'
import * as styles from './ComponentName.module.css'

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  return <div className={styles.className}>Content</div>
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
}

ComponentName.defaultProps = {
  prop2: '',
}

export { ComponentName }
```

### Import Order
1. React imports: `import React from 'react'`
2. External libraries: `import classNames from 'classnames'`
3. Gatsby imports: `import { Link } from 'gatsby'`
4. Local components: `import LayoutContainer from './layout-container'`
5. CSS modules: `import * as styles from './header.module.css'`
6. Assets: `import avatar from '../images/avatar.png'`

### Naming Conventions

**Components:**
- File name: `kebab-case` (e.g., `about-me-section.js`)
- Component name: `PascalCase` (e.g., `AboutMeSection`)
- Use **named exports** (not default exports)
- Export statement: `export { ComponentName }`

**CSS Modules:**
- File name: `[component-name].module.css` (e.g., `header.module.css`)
- Class names: `kebab-case` (e.g., `.main-text`, `.button-primary`)
- Import pattern: `import * as styles from './component.module.css'`
- Usage: `className={styles.className}`

**Props:**
- Use descriptive, camelCase names
- Destructure props in function parameters
- Always define `propTypes` for component documentation

### CSS/Styling

**CSS Modules Pattern:**
```css
/* component.module.css */
.class-name {
  color: #fdc500;
  font-family: 'Roboto', sans-serif;
}

/* Responsive at 800px breakpoint */
@media screen and (max-width: 800px) {
  .class-name {
    font-size: 16px;
  }
}
```

**Colors:**
- Primary: `rgb(99, 45, 208)` (purple)
- Accent: `#fdc500` (gold)
- Use CSS custom properties for theme values when available

**Typography:**
- Font family: `'Roboto', sans-serif` throughout
- Responsive typography with media queries at 800px

### PropTypes & Validation

```javascript
import PropTypes from 'prop-types'

ComponentName.propTypes = {
  requiredProp: PropTypes.string.isRequired,
  optionalProp: PropTypes.string,
  arrayProp: PropTypes.arrayOf(PropTypes.string),
  objectProp: PropTypes.object,
}

ComponentName.defaultProps = {
  optionalProp: '',
  arrayProp: [],
}
```

### Error Handling

**Current Pattern:** Minimal error handling throughout codebase
- No try/catch blocks
- Form submissions use `.then()` without `.catch()`
- Rely on browser validation for forms (HTML5 `required` attributes)

**Forms:**
- Use HTML5 native validation (`required`, `type="email"`)
- Netlify form handling via `fetch` POST requests
- State management with `useState` hooks

### Responsive Design

**Breakpoint:** 800px maximum viewport width
- Always use `max-width: 800px` for mobile styles
- Desktop-first approach (desktop styles as default, mobile in media queries)
- Pattern:
```css
/* Desktop styles first */
.class-name {
  padding: 20px;
}

/* Mobile styles inside media query */
@media screen and (max-width: 800px) {
  .class-name {
    padding: 10px;
  }
}
```

### State Management

**Use hooks for state when needed:**
```javascript
const [formData, setFormData] = useState('')
const [errors, setErrors] = useState({})
```

**Avoid unnecessary state:** Most components are presentational with props only

### Theme-UI Integration

Some components use Theme-UI `css` prop:
```javascript
import { css } from 'theme-ui'

const styles = css({
  backgroundColor: 'input',
  color: 'text'
})
```

Use this pattern sparingly - prefer CSS modules for consistency.

### Component Examples

**Good patterns from the codebase:**
- `src/components/header.js` - Clean functional component with destructured props
- `src/components/about-me-section.js` - Named exports, proper PropTypes
- `src/components/layout-container.js` - Reusable layout component

**Files to reference:**
- `src/components/header.js:1-22` - Standard component structure
- `src/components/header.module.css:1-32` - CSS modules pattern
- `src/models/trait.js` - Data model structure

## File Structure Guidelines

**Components:** `src/components/[ComponentName]/`
**Pages:** `src/pages/` (Gatsby page components)
**Templates:** `src/templates/` (for dynamic pages)
**Images:** `src/images/` (favicon, project images, etc.)
**Projects data:** `src/projects/` (JSON files defining project metadata)
**Constants:** `src/constants/` (shared constants, layouts)
**Models:** `src/models/` (data type definitions)

## Dependencies

**Key libraries:**
- Gatsby 5.13.7
- React 18.3.1
- Theme-UI (styling)
- classnames (CSS class composition)
- PropTypes (prop validation)

**No testing frameworks configured.**

## Development Notes

- This is a portfolio site using Gatsby with blog functionality via `gatsby-theme-blog`
- Blog posts are MDX files in `content/posts/`
- Project data stored as JSON files in `src/projects/`
- Netlify Forms used for contact form
- Tailwind CSS is NOT used (despite mention in some files - custom CSS only)
- Uses CSS Grid and Flexbox for layouts

## YAML Frontmatter Considerations

When creating or editing blog post frontmatter in MDX files, special characters in YAML values must be handled properly:

- **Colons in values:** Wrap values containing colons in quotes
  ```yaml
  ---
  title: "Getting Started with AI Coding Assistant - Part 1: Introduction and Setup"
  date: 2024-12-15
  ---
  ```
  
- **Common problematic characters:** `:`, `-` at beginning of line, `#`
- **Best practice:** Always quote string values containing special characters
- **Example frontmatter:**
  ```yaml
  ---
  title: "Your Title: With Colons"
  date: 2024-12-15
  tags: ["tag1", "tag2"]
  ---
  ```
