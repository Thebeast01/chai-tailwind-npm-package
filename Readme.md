# 🍵 Chai Tailwind

A lightweight Tailwind-like runtime CSS engine built using pure JavaScript.  
Apply utility classes directly in HTML — no build step required.

---

## 🚀 Features

- ⚡ No build tools required
- 🎯 Utility-first CSS approach
- 🎬 Built-in animations (fade, slide, bounce, spin)
- 🖱️ Hover utilities (scale, tilt, color, opacity)
- 🧊 Interactive 3D tilt cards (mouse-based)
- 📦 Works via CDN and npm
- 🔌 Zero dependencies

---

## 📦 Installation

### Using npm

```bash
npm install chai-tailwind
```

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/chai-tailwind@1.1.0/dist/chai-tailwind.js"></script>
```

---

## 🧪 Usage

### 🔹 Using npm

```js
import "chai-tailwind";
```

Automatically initializes and applies styles.

### 🔹 Using CDN

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/chai-tailwind@1.1.0/dist/chai-tailwind.js"></script>
</head>
<body>
  <div class="chai-bg-red chai-text-white chai-p-4">
    Hello World 🚀
  </div>
</body>
</html>
```

---

## 🎨 Utility Classes

###  Background Colors

| Class | CSS |
|---|---|
| `chai-bg-red` | `background-color: red` |
| `chai-bg-blue` | `background-color: blue` |
| `chai-bg-green` | `background-color: green` |
| `chai-bg-yellow` | `background-color: yellow` |
| `chai-bg-gray` | `background-color: #6b7280` |
| `chai-bg-white` | `background-color: #ffffff` |
| `chai-bg-black` | `background-color: #000000` |

###  Text & Typography

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

###  Spacing

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

###  Borders & Radius

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

###  Layout & Flexbox

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

###  Effects & Misc

| Class | CSS |
|---|---|
| `chai-shadow-sm` | subtle shadow |
| `chai-shadow-md` | medium shadow |
| `chai-shadow-lg` | strong shadow |
| `chai-transition` | smooth transition |
| `chai-cursor-pointer` | pointer cursor |
| `chai-text-center` | center text |
| `chai-text-left` | left text |
| `chai-text-right` | right text |
| `chai-overflow-hidden` | hide overflow |
| `chai-opacity-50` | 50% opacity |
| `chai-opacity-75` | 75% opacity |
| `chai-opacity-100` | 100% opacity |

---

##  Animations

| Class | Effect |
|---|---|
| `chai-animate-fade-in` | fade in |
| `chai-animate-slide-up` | slide from bottom |
| `chai-animate-bounce` | bouncing |
| `chai-animate-spin` | spinning |

---

##  Hover Utilities

| Class | Effect |
|---|---|
| `chai-hover-bg-red` | change bg on hover |
| `chai-hover-bg-blue` | change bg on hover |
| `chai-hover-scale` | scale up |
| `chai-hover-opacity-75` | reduce opacity |
| `chai-hover-tilt` | tilt right |
| `chai-hover-tilt-left` | tilt left |
| `chai-hover-tilt-3d` | 3D tilt effect |

---

##  3D Tilt Cards (Mouse-Based)

Interactive tilt based on cursor position.

```html
<div class="chai-card chai-tilt-3d chai-bg-white chai-p-6 chai-rounded-lg chai-shadow-lg">
  Move mouse on me 
</div>
```

> 👉 The card tilts dynamically based on cursor position.

---

## 💡 Example

```html
<div class="
  chai-card 
  chai-bg-blue 
  chai-text-white 
  chai-p-4 
  chai-rounded-lg 
  chai-shadow-lg 
  chai-hover-scale
">
  Hover me 
</div>
```

---


## 📄 License

MIT © 2026 Mohammad Saif
