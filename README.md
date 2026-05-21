# Adhyshvi Montessori — Landing Page

A premium Montessori childcare school landing page built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Hero Image

Replace the placeholder hero with your Montessori playground photo:

```
public/images/hero-playground.jpg
```

Recommended: **2400px+ wide**, landscape, high quality JPEG or WebP.

After replacing images, do a **hard refresh** (`Ctrl+Shift+R`) or restart the dev server. If the old image still appears, delete the cache folder:

```bash
Remove-Item -Recurse -Force .next
npm run dev
```

## Favicon

Place your favicon here (either works):

```
app/favicon.ico
```

or

```
public/favicon.ico
```

Do **not** use `app/icon.svg` — that file was removed so your `.ico` is used instead. Browsers cache favicons heavily; hard-refresh or open an incognito window to verify.

## Project Structure

```
app/              # App Router pages & layout
components/       # FloatingNavbar, HeroSection, MobileMenu
lib/              # Shared nav configuration
public/images/    # Static assets
styles/           # Design tokens & utilities
```

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Production server    |

## Features

- Full-viewport hero with `next/image` preload
- Glassmorphism floating navbar with scroll state
- Mobile hamburger menu
- Subtle hero parallax (Framer Motion)
- Accessible semantic HTML
- Responsive desktop / tablet / mobile layouts
