# Full-Stack Developer Portfolio

Modern portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, responsive design
- 🎨 Smooth animations with Framer Motion
- 🎯 Project showcase with AI collaboration insights
- 📱 Mobile-first approach
- ⚡ Fast performance with Next.js 15
- 🎭 Tailwind CSS for styling

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Projects.tsx     # Projects section
│   ├── ProjectCard.tsx  # Project card component
│   ├── AIExperience.tsx # AI collaboration section
│   └── Skills.tsx       # Skills section
├── public/              # Static assets
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
```

Upload the `.next` folder to your hosting provider.

## Customization

### Update Projects

Edit `components/Projects.tsx` to add/modify projects.

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Modify Content

- Hero: `components/Hero.tsx`
- Projects: `components/Projects.tsx`
- AI Experience: `components/AIExperience.tsx`
- Skills: `components/Skills.tsx`

## Technologies

- **Framework:** Next.js 15
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **Deployment:** Vercel

## License

MIT
