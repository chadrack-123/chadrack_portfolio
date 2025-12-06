# Portfolio Website

A modern, interactive portfolio website for a Software Developer and Data Scientist, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful, modern design with gradient effects
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 App Router for optimal performance
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🌙 Dark theme optimized for developer aesthetics

## Sections

- **Hero**: Eye-catching landing section with animated background
- **About**: Dual focus on software development and data science
- **Experience**: Professional timeline with skills
- **Projects**: Showcase of featured work
- **Skills**: Categorized technical skills
- **Contact**: Get in touch form with social links

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Content

1. **Personal Information**: Edit the components in `src/components/`
   - `Hero.tsx`: Update your title and introduction
   - `About.tsx`: Customize your professional summary
   - `Experience.tsx`: Add your work experience
   - `Projects.tsx`: Showcase your projects
   - `Skills.tsx`: List your technical skills
   - `Contact.tsx`: Update contact form and social links

2. **Styling**: Modify `src/app/globals.css` and Tailwind classes

3. **Metadata**: Update SEO information in `src/app/layout.tsx`

### Add Your CV

Place your CV PDF in the `public` folder and link it in your components.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any hosting platform that supports Node.js

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## License

MIT License - feel free to use this template for your own portfolio!
