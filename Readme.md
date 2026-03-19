# 🍵 Chai Tailwind

A lightweight Tailwind-like utility CSS engine built using pure JavaScript.
Apply utility classes directly in HTML — no build step required.

---

## 🚀 Features

- ⚡ No build tools required
- 🎯 Utility-first CSS approach
- 📦 Works via CDN and npm
- 🧠 Great for learning how Tailwind works internally
- 🔌 Zero dependencies

---

## 📦 Installation

### Using npm

```bash
npm install chai-tailwind
```

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/chai-tailwind@1.0.0/dist/chai-tailwind.js"></script>
```

---

## 🧪 Usage

### 🔹 Using npm

```js
import "chai-tailwind";
```

> 👉 That's it. The library automatically scans the DOM and applies styles.

### 🔹 Using CDN

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/chai-tailwind@1.0.0/dist/chai-tailwind.js"></script>
</head>
<body>
  <div class="chai-bg-red chai-text-white chai-p-4">
    Hello World 🚀
  </div>
</body>
</html>
```

---

## ⚙️ API

### `window.ChaiTailwind.init()`

Re-apply styles manually (useful for dynamically added elements):

```js
window.ChaiTailwind.init();
```

---

## 🎨 Utility Classes

### 🎯 Background Colors

| Class | CSS |
|---|---|
| `chai-bg-red` | `background-color: red` |
| `chai-bg-blue` | `background-color: blue` |
| `chai-bg-green` | `background-color: green` |
| `chai-bg-yellow` | `background-color: yellow` |
| `chai-bg-gray` | `background-color: #6b7280` |
| `chai-bg-white` | `background-color: #ffffff` |
| `chai-bg-black` | `background-color: #000000` |

---

### ✍️ Text & Typography

| Class | CSS |
|---|---|
| `chai-text-white` | `color: white` |
| `chai-text-black` | `color: black` |
| `chai-text-gray` | `color: #6b7280` |
| `chai-text-sm` | `font-size: 12px` |
| `chai-text-base` | `font-size: 16px` |
| `chai-text-lg` | `font-size: 18px` |
| `chai-text-xl` | `font-size: 20px` |
| `chai-font-bold` | `font-weight: bold` |
| `chai-font-medium` | `font-weight: 500` |

---

### 📦 Spacing

| Class | CSS |
|---|---|
| `chai-p-1` | `padding: 4px` |
| `chai-p-2` | `padding: 8px` |
| `chai-p-3` | `padding: 12px` |
| `chai-p-4` | `padding: 16px` |
| `chai-p-6` | `padding: 24px` |
| `chai-m-1` | `margin: 4px` |
| `chai-m-2` | `margin: 8px` |
| `chai-m-4` | `margin: 16px` |
| `chai-m-auto` | `margin: auto` |

---

### 🔲 Borders & Radius

| Class | CSS |
|---|---|
| `chai-border` | `1px solid #e5e7eb` |
| `chai-border-2` | `2px solid #e5e7eb` |
| `chai-border-black` | `border-color: #000` |
| `chai-border-white` | `border-color: #fff` |
| `chai-rounded-sm` | `border-radius: 4px` |
| `chai-rounded-md` | `border-radius: 8px` |
| `chai-rounded-lg` | `border-radius: 12px` |
| `chai-rounded-xl` | `border-radius: 16px` |
| `chai-rounded-full` | `border-radius: 9999px` |

---

### 📐 Layout & Flexbox

| Class | CSS |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-inline-flex` | `display: inline-flex` |
| `chai-flex-col` | `flex-direction: column` |
| `chai-flex-row` | `flex-direction: row` |
| `chai-flex-wrap` | `flex-wrap: wrap` |
| `chai-items-center` | `align-items: center` |
| `chai-items-start` | `align-items: flex-start` |
| `chai-items-end` | `align-items: flex-end` |
| `chai-justify-center` | `justify-content: center` |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-justify-around` | `justify-content: space-around` |
| `chai-gap-2` | `gap: 8px` |
| `chai-gap-4` | `gap: 16px` |

---

### 📏 Sizing

| Class | CSS |
|---|---|
| `chai-w-full` | `width: 100%` |
| `chai-w-screen` | `width: 100vw` |
| `chai-w-fit` | `width: fit-content` |
| `chai-h-full` | `height: 100%` |
| `chai-h-screen` | `height: 100vh` |
| `chai-max-w-sm` | `max-width: 640px` |
| `chai-max-w-md` | `max-width: 768px` |
| `chai-max-w-lg` | `max-width: 1024px` |

---

### 📍 Positioning

| Class | CSS |
|---|---|
| `chai-relative` | `position: relative` |
| `chai-absolute` | `position: absolute` |
| `chai-fixed` | `position: fixed` |
| `chai-top-0` | `top: 0` |
| `chai-left-0` | `left: 0` |
| `chai-right-0` | `right: 0` |
| `chai-bottom-0` | `bottom: 0` |

---

### 🎭 Effects & Misc

| Class | CSS |
|---|---|
| `chai-shadow-sm` | `box-shadow: small` |
| `chai-shadow-md` | `box-shadow: medium` |
| `chai-shadow-lg` | `box-shadow: large` |
| `chai-transition` | `transition: all 0.3s ease` |
| `chai-cursor-pointer` | `cursor: pointer` |
| `chai-text-center` | `text-align: center` |
| `chai-text-left` | `text-align: left` |
| `chai-text-right` | `text-align: right` |
| `chai-overflow-hidden` | `overflow: hidden` |
| `chai-opacity-50` | `opacity: 0.5` |
| `chai-opacity-75` | `opacity: 0.75` |
| `chai-opacity-100` | `opacity: 1` |
