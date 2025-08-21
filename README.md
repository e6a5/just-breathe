# Just Breathe

A simple breathing companion that follows Unix philosophy: **"Do one thing, and do it well."**

## What It Does

Guides you through natural breathing with a gentle, flowing animation. No instructions, no complexity - just breathe.

## How to Use

### Simple (No Server)
1. Open `src/index.html` in any modern browser
2. Follow the breathing animation
3. That's it!

### With Local Server
```bash
cd src
python3 -m http.server 8080
# Open http://localhost:8080
```

### Deploy Anywhere
Upload the `src/` folder to any web server. No build step required.

## Project Structure

```
just-breathe/
├── src/                    # Production files
│   ├── index.html         # Main interface
│   ├── breathing.js       # Breathing logic
│   └── icons/            # App icons
├── README.md              # This file
└── AGENTS.md              # Project principles
```

## Features

- **Simple**: Pure JavaScript, no complex dependencies
- **Focused**: One purpose - breathing guidance
- **Universal**: Works on any device with a browser
- **Graceful**: Falls back to text if canvas fails

## Unix Philosophy Compliance

**"Do one thing, and do it well"** - Pure breathing exercise  
**Simplicity** - No build tools, no compilation  
**Fail gracefully** - Multiple fallback levels  
**Respect user environment** - Standard web technologies  

## Customization

Edit `src/breathing.js` to change:
- Breathing pattern timing
- Colors and visual effects
- Instructions and text



## Browser Support

Works on any modern browser that supports:
- HTML5 Canvas
- JavaScript ES6+

## Error Handling

The app gracefully degrades:
1. **Canvas fails** → Text-based breathing
2. **JavaScript fails** → Static breathing guide
3. **Everything fails** → Simple text instructions

---

**Just breathe, find your calm.**

*Simple, focused, and accessible to everyone.*
