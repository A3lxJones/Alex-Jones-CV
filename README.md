# Alex Jones — Online CV

A professional, reactive online CV built with **TypeScript**, **Tailwind CSS v4**, and **DaisyUI v5**.

## Features

- Scroll-triggered reveal animations (fade, slide, scale)
- Typing effect in the hero section
- Interactive tilt cards on hover
- Animated skill progress bars
- Counter animations on scroll
- Floating particle background
- Responsive navigation with scroll-aware behaviour
- Back-to-top button with smooth scrolling
- Scroll progress indicator bar
- Mobile-friendly responsive layout
- Image placeholders ready to swap in real photos

## Sections

| Section      | Content                                  |
|-------------|------------------------------------------|
| **Hero**      | Profile photo, name, typing tagline, CTAs |
| **About**     | Bio, stats counters, side image           |
| **Experience**| Work history cards (Kainos, etc.)         |
| **Education** | Ulster University, secondary school       |
| **Skills**    | Languages, frameworks, soft skills        |
| **Sport**     | Ireland hockey, inline hockey, coaching   |
| **Projects**  | Personal project showcase with links      |
| **Contact**   | Email, LinkedIn, GitHub, location         |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot-reloading)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customising

- **Images**: Replace the `image-placeholder` divs with your own `<img>` tags — commented-out examples are included.
- **Content**: Edit `index.html` directly — sections are clearly commented.
- **Skills**: Adjust `data-width` attributes on skill bars in the Skills section.
- **Stats**: Adjust `data-count` attributes for animated counters.
- **Links**: Update GitHub, LinkedIn, and email URLs in Contact and Footer.
- **Typing Strings**: Edit the `strings` array in `src/main.ts`.

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [DaisyUI v5](https://daisyui.com/)
