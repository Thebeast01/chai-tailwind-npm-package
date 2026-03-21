# 🍵 Chai Tailwind

A lightweight Tailwind-like runtime CSS engine built using pure JavaScript.  
Apply utility classes directly in HTML — no build step required.

---

## 🚀 Features

- ⚡ No build tools required
- 🎯 Utility-first CSS approach
- 🎨 60+ colors with shade variants (50–900 scale)
- 🌈 Built-in gradient background utilities
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
  <div class="chai-bg-amber chai-text-black chai-p-4 chai-rounded-lg">
    Hello World 🚀
  </div>
</body>
</html>
```

---

## 🎨 Utility Classes

### Background Colors — Solid

| Class | CSS |
|---|---|
| `chai-bg-red` | `background-color: red` |
| `chai-bg-blue` | `background-color: blue` |
| `chai-bg-green` | `background-color: green` |
| `chai-bg-yellow` | `background-color: yellow` |
| `chai-bg-orange` | `background-color: #f97316` |
| `chai-bg-purple` | `background-color: #a855f7` |
| `chai-bg-pink` | `background-color: #ec4899` |
| `chai-bg-teal` | `background-color: #14b8a6` |
| `chai-bg-cyan` | `background-color: #06b6d4` |
| `chai-bg-indigo` | `background-color: #6366f1` |
| `chai-bg-lime` | `background-color: #84cc16` |
| `chai-bg-amber` | `background-color: #f59e0b` |
| `chai-bg-emerald` | `background-color: #10b981` |
| `chai-bg-rose` | `background-color: #f43f5e` |
| `chai-bg-violet` | `background-color: #8b5cf6` |
| `chai-bg-fuchsia` | `background-color: #d946ef` |
| `chai-bg-sky` | `background-color: #0ea5e9` |
| `chai-bg-slate` | `background-color: #64748b` |
| `chai-bg-zinc` | `background-color: #71717a` |
| `chai-bg-stone` | `background-color: #78716c` |
| `chai-bg-brown` | `background-color: #92400e` |
| `chai-bg-coral` | `background-color: #f87171` |
| `chai-bg-gold` | `background-color: #fbbf24` |
| `chai-bg-silver` | `background-color: #9ca3af` |
| `chai-bg-navy` | `background-color: #1e3a5f` |
| `chai-bg-maroon` | `background-color: #7f1d1d` |
| `chai-bg-olive` | `background-color: #4d7c0f` |
| `chai-bg-gray` | `background-color: #6b7280` |
| `chai-bg-white` | `background-color: #ffffff` |
| `chai-bg-black` | `background-color: #000000` |

### Background Colors — Shade Variants

Each shade follows the 50 → 100 → 200 → 500 → 700 → 900 scale.

| Class | CSS |
|---|---|
| `chai-bg-red-50` | `background-color: #fef2f2` |
| `chai-bg-red-100` | `background-color: #fee2e2` |
| `chai-bg-red-200` | `background-color: #fecaca` |
| `chai-bg-red-500` | `background-color: #ef4444` |
| `chai-bg-red-700` | `background-color: #b91c1c` |
| `chai-bg-red-900` | `background-color: #7f1d1d` |
| `chai-bg-blue-50` | `background-color: #eff6ff` |
| `chai-bg-blue-100` | `background-color: #dbeafe` |
| `chai-bg-blue-200` | `background-color: #bfdbfe` |
| `chai-bg-blue-500` | `background-color: #3b82f6` |
| `chai-bg-blue-700` | `background-color: #1d4ed8` |
| `chai-bg-blue-900` | `background-color: #1e3a8a` |
| `chai-bg-green-50` | `background-color: #f0fdf4` |
| `chai-bg-green-100` | `background-color: #dcfce7` |
| `chai-bg-green-200` | `background-color: #bbf7d0` |
| `chai-bg-green-500` | `background-color: #22c55e` |
| `chai-bg-green-700` | `background-color: #15803d` |
| `chai-bg-green-900` | `background-color: #14532d` |
| `chai-bg-yellow-50` | `background-color: #fefce8` |
| `chai-bg-yellow-100` | `background-color: #fef9c3` |
| `chai-bg-yellow-200` | `background-color: #fef08a` |
| `chai-bg-yellow-500` | `background-color: #eab308` |
| `chai-bg-yellow-700` | `background-color: #a16207` |
| `chai-bg-purple-50` | `background-color: #faf5ff` |
| `chai-bg-purple-100` | `background-color: #f3e8ff` |
| `chai-bg-purple-200` | `background-color: #e9d5ff` |
| `chai-bg-purple-500` | `background-color: #a855f7` |
| `chai-bg-purple-700` | `background-color: #7e22ce` |
| `chai-bg-purple-900` | `background-color: #4a044e` |
| `chai-bg-pink-50` | `background-color: #fdf2f8` |
| `chai-bg-pink-100` | `background-color: #fce7f3` |
| `chai-bg-pink-500` | `background-color: #ec4899` |
| `chai-bg-pink-700` | `background-color: #be185d` |
| `chai-bg-orange-50` | `background-color: #fff7ed` |
| `chai-bg-orange-100` | `background-color: #ffedd5` |
| `chai-bg-orange-500` | `background-color: #f97316` |
| `chai-bg-orange-700` | `background-color: #c2410c` |
| `chai-bg-teal-50` | `background-color: #f0fdfa` |
| `chai-bg-teal-100` | `background-color: #ccfbf1` |
| `chai-bg-teal-500` | `background-color: #14b8a6` |
| `chai-bg-teal-700` | `background-color: #0f766e` |
| `chai-bg-indigo-50` | `background-color: #eef2ff` |
| `chai-bg-indigo-100` | `background-color: #e0e7ff` |
| `chai-bg-indigo-500` | `background-color: #6366f1` |
| `chai-bg-indigo-700` | `background-color: #4338ca` |
| `chai-bg-gray-50` | `background-color: #f9fafb` |
| `chai-bg-gray-100` | `background-color: #f3f4f6` |
| `chai-bg-gray-200` | `background-color: #e5e7eb` |
| `chai-bg-gray-300` | `background-color: #d1d5db` |
| `chai-bg-gray-400` | `background-color: #9ca3af` |
| `chai-bg-gray-500` | `background-color: #6b7280` |
| `chai-bg-gray-600` | `background-color: #4b5563` |
| `chai-bg-gray-700` | `background-color: #374151` |
| `chai-bg-gray-800` | `background-color: #1f2937` |
| `chai-bg-gray-900` | `background-color: #111827` |

### Background Colors — Gradients

| Class | CSS |
|---|---|
| `chai-bg-gradient-to-r-red-orange` | `background: linear-gradient(to right, #ef4444, #f97316)` |
| `chai-bg-gradient-to-r-blue-purple` | `background: linear-gradient(to right, #3b82f6, #a855f7)` |
| `chai-bg-gradient-to-r-green-teal` | `background: linear-gradient(to right, #22c55e, #14b8a6)` |
| `chai-bg-gradient-to-r-pink-rose` | `background: linear-gradient(to right, #ec4899, #f43f5e)` |
| `chai-bg-gradient-to-r-yellow-amber` | `background: linear-gradient(to right, #eab308, #f59e0b)` |
| `chai-bg-gradient-to-br-indigo-purple` | `background: linear-gradient(to bottom right, #6366f1, #a855f7)` |
| `chai-bg-gradient-to-br-sky-blue` | `background: linear-gradient(to bottom right, #0ea5e9, #3b82f6)` |

---

### Text & Typography

| Class | CSS |
|---|---|
| `chai-text-white` | `color: white` |
| `chai-text-black` | `color: black` |
| `chai-text-gray` | `color: #6b7280` |
| `chai-text-red` | `color: #ef4444` |
| `chai-text-blue` | `color: #3b82f6` |
| `chai-text-green` | `color: #22c55e` |
| `chai-text-yellow` | `color: #eab308` |
| `chai-text-orange` | `color: #f97316` |
| `chai-text-purple` | `color: #a855f7` |
| `chai-text-pink` | `color: #ec4899` |
| `chai-text-teal` | `color: #14b8a6` |
| `chai-text-cyan` | `color: #06b6d4` |
| `chai-text-indigo` | `color: #6366f1` |
| `chai-text-amber` | `color: #f59e0b` |
| `chai-text-emerald` | `color: #10b981` |
| `chai-text-rose` | `color: #f43f5e` |
| `chai-text-violet` | `color: #8b5cf6` |
| `chai-text-slate` | `color: #64748b` |
| `chai-text-lime` | `color: #84cc16` |
| `chai-text-sky` | `color: #0ea5e9` |

**Shade variants** — available for `red`, `blue`, `green`, `purple`, `orange`, `teal`, `gray`:

| Class | CSS |
|---|---|
| `chai-text-red-400` | `color: #f87171` |
| `chai-text-red-600` | `color: #dc2626` |
| `chai-text-blue-400` | `color: #60a5fa` |
| `chai-text-blue-600` | `color: #2563eb` |
| `chai-text-green-400` | `color: #4ade80` |
| `chai-text-green-600` | `color: #16a34a` |
| `chai-text-gray-400` | `color: #9ca3af` |
| `chai-text-gray-500` | `color: #6b7280` |
| `chai-text-gray-600` | `color: #4b5563` |
| `chai-text-gray-700` | `color: #374151` |
| `chai-text-gray-800` | `color: #1f2937` |
| `chai-text-gray-900` | `color: #111827` |
| `chai-text-purple-400` | `color: #c084fc` |
| `chai-text-purple-600` | `color: #9333ea` |
| `chai-text-orange-400` | `color: #fb923c` |
| `chai-text-orange-600` | `color: #ea580c` |
| `chai-text-teal-400` | `color: #2dd4bf` |
| `chai-text-teal-600` | `color: #0d9488` |

**Font size & weight:**

| Class | CSS |
|---|---|
| `chai-text-sm` | `font-size: 12px` |
| `chai-text-base` | `font-size: 16px` |
| `chai-text-lg` | `font-size: 18px` |
| `chai-text-xl` | `font-size: 20px` |
| `chai-font-bold` | `font-weight: bold` |
| `chai-font-medium` | `font-weight: 500` |

---

### Spacing

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

### Borders & Radius

| Class | CSS |
|---|---|
| `chai-border` | `1px solid #e5e7eb` |
| `chai-border-2` | `2px solid #e5e7eb` |
| `chai-border-black` | `border-color: #000` |
| `chai-border-white` | `border-color: #fff` |
| `chai-border-red` | `border-color: #ef4444` |
| `chai-border-blue` | `border-color: #3b82f6` |
| `chai-border-green` | `border-color: #22c55e` |
| `chai-border-yellow` | `border-color: #eab308` |
| `chai-border-orange` | `border-color: #f97316` |
| `chai-border-purple` | `border-color: #a855f7` |
| `chai-border-pink` | `border-color: #ec4899` |
| `chai-border-teal` | `border-color: #14b8a6` |
| `chai-border-cyan` | `border-color: #06b6d4` |
| `chai-border-indigo` | `border-color: #6366f1` |
| `chai-border-gray-200` | `border-color: #e5e7eb` |
| `chai-border-gray-300` | `border-color: #d1d5db` |
| `chai-border-gray-400` | `border-color: #9ca3af` |
| `chai-border-gray-600` | `border-color: #4b5563` |
| `chai-border-gray-700` | `border-color: #374151` |
| `chai-border-gray-800` | `border-color: #1f2937` |
| `chai-rounded-sm` | `border-radius: 4px` |
| `chai-rounded-md` | `border-radius: 8px` |
| `chai-rounded-lg` | `border-radius: 12px` |
| `chai-rounded-xl` | `border-radius: 16px` |
| `chai-rounded-full` | `border-radius: 9999px` |

---

### Layout & Flexbox

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
| `chai-w-full` | `width: 100%` |
| `chai-w-screen` | `width: 100vw` |
| `chai-w-fit` | `width: fit-content` |
| `chai-h-full` | `height: 100%` |
| `chai-h-screen` | `height: 100vh` |
| `chai-max-w-sm` | `max-width: 640px` |
| `chai-max-w-md` | `max-width: 768px` |
| `chai-max-w-lg` | `max-width: 1024px` |

---

### Positioning

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

### Effects & Misc

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
| `chai-block` | `display: block` |
| `chai-inline-block` | `display: inline-block` |
| `chai-hidden` | `display: none` |

---

## Animations

| Class | Effect |
|---|---|
| `chai-animate-fade-in` | fade in |
| `chai-animate-slide-up` | slide from bottom |
| `chai-animate-bounce` | bouncing |
| `chai-animate-spin` | spinning |

---

## Hover Utilities

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

## 3D Tilt Cards (Mouse-Based)

Interactive tilt based on cursor position.

```html
<div class="chai-card chai-tilt-3d chai-bg-white chai-p-6 chai-rounded-lg chai-shadow-lg">
  Move mouse on me 
</div>
```

> 👉 The card tilts dynamically based on cursor position.

---

## 💡 Examples

### Gradient Button

```html
<button class="
  chai-bg-gradient-to-r-blue-purple
  chai-text-white
  chai-p-4
  chai-rounded-full
  chai-shadow-md
  chai-hover-scale
  chai-transition
">
  Click me 🚀
</button>
```

### Shade-based Card

```html
<div class="chai-bg-purple-100 chai-border chai-border-purple-500 chai-rounded-xl chai-p-6">
  <h2 class="chai-text-purple-600 chai-font-bold chai-text-xl">Card Title</h2>
  <p class="chai-text-gray-600 chai-text-base">Card description here.</p>
</div>
```

### Hover Color Change

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

### Animated Badge

```html
<span class="
  chai-bg-amber
  chai-text-black
  chai-p-2
  chai-rounded-full
  chai-font-bold
  chai-animate-bounce
">
  New ✨
</span>
```

---

## 📄 License

MIT © 2026 Mohammad Saif
