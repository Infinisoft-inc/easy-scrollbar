

# EasyScrollBar

Ever spent hours trying to get a scrollbar to stick to the bottom? Ever felt like throwing your computer out the window because of it? Well, fret no more! Introducing `EasyScrollBar` - the minimalist wrapper around `react-perfect-scrollbar` that does one thing and does it well: sticks that scrollbar right where you want it - at the bottom!

## Why Does This Exist?

Because life's too short to spend hours on scrollbars. And because we believe that no one should write 25 lines of code and waste 2 hours for such a simple task. So, we made it easy for you. You're welcome!

## Getting Started

### Installation


Then, install `EasyScrollBar`:

```bash
npm install easy-scrollbar
```

### Usage

Here's a simple example:

```jsx
import React from 'react';
import {EasyScrollBar} from 'easy-scrollbar';

function MyComponent() {
  return (
    <EasyScrollBar trigger={myTriggerVariable}>
      {/* Your overflowing content here */}
    </EasyScrollBar>
  );
}
```

### Props

- `trigger`: A variable that, when changed, will cause the scrollbar to stick to the bottom. Useful if you're adding new content to the scrollable area and want the scrollbar to adjust.
- `any other props`: Any props will be passed down to `React Perfect Scrollbar`

## A Fun Note

Remember the time when you tried to use a stick and a piece of string to retrieve a toy from under the bed? This is like that, but for scrollbars. And way more effective!

---

