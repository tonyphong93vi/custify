# Custify Website Clone

A modern, responsive clone of the Custify website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design matching the original Custify website
- **Responsive Layout**: Fully responsive design that works on all devices
- **AI Features Section**: Showcases CusAI assistant capabilities
- **Omnichannel Support**: Demonstrates multi-channel customer support features
- **Knowledge Base**: Interactive help center and documentation features
- **Security & Open Source**: Highlights security features and open-source nature
- **Interactive Components**: Hover effects, animations, and interactive elements

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion (installed but not used in current implementation)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── AISection.tsx
    ├── OmnichannelSection.tsx
    ├── KnowledgeBaseSection.tsx
    ├── SecuritySection.tsx
    └── Footer.tsx
```

## Sections

1. **Header**: Navigation with logo, menu items, and CTA buttons
2. **Hero**: Main headline with AI badge and social proof
3. **AI Section**: CusAI assistant features and demos
4. **Omnichannel**: Multi-channel support capabilities
5. **Knowledge Base**: Help center and documentation features
6. **Security**: Open-source and security compliance information
7. **Footer**: Links, social media, and company information

## Customization

The website is built with modular components, making it easy to customize:

- Update colors in Tailwind classes
- Modify content in component files
- Add new sections by creating new components
- Customize animations and interactions

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## License

This is a clone project for educational purposes. The original Custify website and brand are owned by Custify Inc.