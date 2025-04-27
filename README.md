# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js** - React framework with server-side rendering and static site generation
- 📝 **TypeScript** - Type safety for better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first approach for all screen sizes
- 🧩 **Component Reusability** - Well-structured, reusable components
- 🔄 **Framer Motion** - Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JackAnderson04/personal-site.git
   cd personal-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
my-portfolio/
├── app/                    # Next.js 13+ app directory
│   ├── projects/           # Projects page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── Layout.tsx          # Layout wrapper
│   ├── Header.tsx          # Header with navigation
│   ├── Footer.tsx          # Footer component
│   └── ProjectList.tsx     # Projects grid
├── public/                 # Static files
│   └── images/             # Image assets
└── ...                     # Config files
```

## Customization

### Personal Information

Edit the following files to customize with your information:

- `app/page.tsx` - Update hero section with your name and skills
- `components/Header.tsx` - Update the logo/name
- `components/Footer.tsx` - Update social links and copyright

### Styling

This project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)