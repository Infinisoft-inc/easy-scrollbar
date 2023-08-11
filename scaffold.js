const fs = require('fs');
const path = require('path');

// Create main library directory
const libDir = path.join(__dirname, 'easy-scrollbar');
if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir);
}

// Create src directory
const srcDir = path.join(libDir, 'src');
if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
}

// Create EasyScrollBar.js
const componentPath = path.join(srcDir, 'EasyScrollBar.js');
if (!fs.existsSync(componentPath)) {
    const componentContent = `
import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const EasyScrollBar = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollHeight = containerRef.current._container.scrollHeight;
      containerRef.current._container.scrollTop = scrollHeight;
    }
  }, []);

  return (
    <PerfectScrollbar ref={containerRef}>
      {children}
    </PerfectScrollbar>
  );
};

export default EasyScrollBar;
    `;
    fs.writeFileSync(componentPath, componentContent);
}

// Create index.js
const indexPath = path.join(srcDir, 'index.js');
if (!fs.existsSync(indexPath)) {
    const indexContent = `
export { default as EasyScrollBar } from './EasyScrollBar';
    `;
    fs.writeFileSync(indexPath, indexContent);
}

// Create package.json
const packagePath = path.join(libDir, 'package.json');
if (!fs.existsSync(packagePath)) {
    const packageContent = {
        name: "easy-scrollbar-lib",
        version: "1.0.0",
        main: "./src/index.js",
        dependencies: {
            "react": "^17.0.2",
            "react-perfect-scrollbar": "^1.5.8"
        }
    };
    fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2));
}

// Create README.md
const readmePath = path.join(libDir, 'README.md');
if (!fs.existsSync(readmePath)) {
    const readmeContent = `
# Easy Scroll Bar Library

A minimalist library for a reusable scroll bar component.
    `;
    fs.writeFileSync(readmePath, readmeContent);
}

console.log('Library scaffolded successfully!');
