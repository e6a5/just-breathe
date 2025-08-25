# Just Breathe

A simple breathing companion app that guides you through peaceful breathing exercises.

## Project Principles

Following Unix philosophy:
- **"Do one thing, and do it well"** - Focus on breathing functionality only
- **Simplicity** - Prefer simple, obvious solutions over complex ones
- **Fail gracefully** - Clear error messages, degrade gracefully
- **Respect user environment** - Standard web technologies

## Development Workflow

### Development (Readable Code)
- Work with `index.html` - clean, maintainable, well-commented
- Easy to debug, modify, and extend
- Perfect for development and collaboration

### Production (2KB Constraint)
- Run `npm run build` to create `index.min.html`
- Automatically minified to meet 2KB size requirement
- Maintains exact same functionality

## Quick Start

```bash
# Development
npm run dev          # Open readable version in browser

# Production build
npm run build        # Create minified 2KB version
```

## File Structure

- `index.html` - Readable development version (~4.9KB) - **Tracked in Git**
- `index.min.html` - Minified production version (~278 bytes) - **Generated, not tracked**
- `build.js` - Simple build script - **Tracked in Git**
- `package.json` - Project configuration - **Tracked in Git**
- `.gitignore` - Excludes build artifacts - **Tracked in Git**

## Features

- Smooth breathing animation with expanding/contracting circles
- Responsive design for all devices
- Mobile-optimized with fullscreen support
- Pure HTML/CSS/JavaScript - no dependencies
- Optimized for performance with `requestAnimationFrame`

## License

MIT
