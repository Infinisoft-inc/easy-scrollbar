

# EasyScrollBar

Ever spent hours trying to get a scrollbar to stick to the bottom? Ever felt like throwing your computer out the window because of it? Well, fret no more! Introducing `EasyScrollBar` - the minimalist wrapper around `react-perfect-scrollbar` that does one thing and does it well: sticks that scrollbar right where you want it - at the bottom!

## Why Does This Exist?

Because life's too short to spend hours on scrollbars. And because we believe that no one should write 25 lines of code and waste 2 hours for such a simple task. So, we made it easy for you. You're welcome!

## Getting Started

### Installation

First, you need to have `react-perfect-scrollbar` installed. If you haven't already:

```bash
npm install react-perfect-scrollbar
```

Then, install `EasyScrollBar`:

```bash
npm install easy-scroll-bar
```

### Usage

Here's a simple example:

```jsx
import React from 'react';
import EasyScrollBar from 'easy-scroll-bar';

function MyComponent() {
  return (
    <EasyScrollBar trigger={myTriggerVariable}>
      {/* Your overflowing content here */}
    </EasyScrollBar>
  );
}
```

### Props

- `children`: The content you want to be scrollable.
- `trigger`: A variable that, when changed, will cause the scrollbar to stick to the bottom. Useful if you're adding new content to the scrollable area and want the scrollbar to adjust.

## A Fun Note

Remember the time when you tried to use a stick and a piece of string to retrieve a toy from under the bed? This is like that, but for scrollbars. And way more effective!

---

