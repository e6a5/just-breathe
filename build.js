#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple minification function - do one thing well
function minifyHTML(html) {
  return html
    .replace(/\s+/g, ' ')           // Collapse whitespace
    .replace(/>\s+</g, '><')        // Remove space between tags
    .replace(/\s*{\s*/g, '{')       // Remove space around CSS braces
    .replace(/\s*}\s*/g, '}')       // Remove space around CSS braces
    .replace(/\s*:\s*/g, ':')       // Remove space around CSS colons
    .replace(/\s*;\s*/g, ';')       // Remove space around CSS semicolons
    .replace(/\/\*.*?\*\//g, '')    // Remove CSS comments
    .replace(/\s*\/\/.*$/gm, '')    // Remove JS single-line comments
    .replace(/\s*\/\*[\s\S]*?\*\//g, '') // Remove JS multi-line comments
    .trim();
}

// Main build process
function build() {
  try {
    const inputFile = 'index.html';
    const outputFile = 'index.min.html';
    
    // Read the readable version
    const html = fs.readFileSync(inputFile, 'utf8');
    
    // Minify it
    const minified = minifyHTML(html);
    
    // Write minified version
    fs.writeFileSync(outputFile, minified);
    
    // Show results
    const originalSize = Buffer.byteLength(html, 'utf8');
    const minifiedSize = Buffer.byteLength(minified, 'utf8');
    const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Build complete!`);
    console.log(`📁 Original: ${originalSize} bytes`);
    console.log(`📁 Minified: ${minifiedSize} bytes`);
    console.log(`💾 Saved: ${savings}%`);
    console.log(`🎯 Target: 2048 bytes (2KB)`);
    console.log(`📊 Status: ${minifiedSize <= 2048 ? '✅ Under 2KB' : '⚠️  Over 2KB'}`);
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Run build
build();
