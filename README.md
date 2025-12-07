# 🎨 Minimalist Multi-Page Portfolio Website

A modern, fully-featured portfolio website built with React, Vite, TailwindCSS, and Framer Motion. Features a complete Admin Panel for dynamic content management with localStorage, no authentication required.

## 🎁 Pre-loaded Sample Data

This portfolio comes with **complete sample data** about "Adrian Wijaya" - a Computer Science student. This includes:
- Full profile with biography in Indonesian
- 18 professional skills across Frontend, Backend, Database, Cloud, and Tools
- 4 detailed projects (ShopMart, TaskMaster, WeatherKu, CodeSnippet)
- 6 certificates from Meta, AWS, Google, and more
- Professional resume with achievements
- All images from Unsplash (high-quality, working URLs)

**You can edit everything!** Just go to `/admin` and modify any section - all data is editable through the admin panel.

## ✨ Features

### 🎯 Multi-Page Structure
- **Home** - Hero section with smooth animations, skills preview, featured projects
- **About** - Full profile with education timeline, experience, and detailed skills
- **Projects** - Portfolio gallery with filtering by technology
- **Project Details** - Individual project pages with galleries and tech stacks
- **Certificates** - Certificate showcase with modal preview
- **Resume** - Professional resume with download option
- **Contact** - Contact form with validation (saves to localStorage)
- **Admin Panel** - Complete CRUD operations for all content

### 🔧 Admin Panel Features
Accessible at `/admin` - No login required!

**Manage:**
- ✅ Profile (name, title, description, photo, social links)
- ✅ Education & Experience
- ✅ Skills (with levels and categories)
- ✅ Projects (full details, galleries, tech stacks)
- ✅ Certificates
- ✅ Resume content
- ✅ View inbox messages
- ✅ Theme settings
- ✅ Reset all data to defaults

### 🎨 Design Features
- Minimalist, clean, modern design
- Smooth page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- Fully responsive (mobile, tablet, desktop)
- Custom scrollbar
- Gradient backgrounds
- Card-based layouts

### 💾 Data Management
- All data stored in localStorage
- No backend required
- Instant updates across all pages
- Persistent between sessions
- Easy data reset option

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:5173
```

4. **Access Admin Panel**
```
http://localhost:5173/admin
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
delive_porto_7/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── PageTransition.jsx # Smooth page transitions
│   │   └── SectionTitle.jsx # Reusable section headers
│   │
│   ├── pages/               # All page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About page
│   │   ├── Projects.jsx     # Projects gallery
│   │   ├── ProjectDetails.jsx # Individual project
│   │   ├── Certificates.jsx # Certificates showcase
│   │   ├── Resume.jsx       # Resume page
│   │   ├── Contact.jsx      # Contact form
│   │   └── Admin.jsx        # Complete Admin panel
│   │
│   ├── utils/
│   │   └── storage.js       # localStorage management
│   │
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
│
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Main color
      secondary: '#1E293B',  // Text color
      accent: '#60A5FA',     // Accent color
    }
  }
}
```

### Modify Default Data
Edit `src/utils/storage.js` to change the default content.

## 📝 Usage Guide

### For Content Managers

**Access Admin Panel:**
1. Navigate to `/admin` in your browser
2. No login required!

**Managing Content:**
- **Profile Tab**: Update personal information, photo, social links, education, experience
- **Skills Tab**: Add/edit/delete skills with proficiency levels
- **Projects Tab**: Manage your project portfolio with full details
- **Certificates Tab**: Add your certifications with images
- **Resume Tab**: Update professional summary and achievements
- **Inbox Tab**: View messages from the contact form
- **Theme Tab**: Customize colors and preferences

**Tips:**
- All changes save automatically to localStorage
- Refresh the page to see updates on the main site
- Use "Reset All Data" button to start fresh (warning: irreversible!)

## 🔑 Key Technologies

- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Multi-page routing
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **localStorage** - Data persistence

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1366px+)
- Tablet (768px+)
- Mobile (375px+)

## 🎯 Features Implemented

✅ Multi-page navigation
✅ Complete Admin Panel with CRUD
✅ LocalStorage persistence
✅ Responsive design
✅ Contact form with validation
✅ Project filtering
✅ Certificate modal viewer
✅ Smooth animations
✅ Custom scrollbar
✅ Mobile-friendly navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy with one click

### Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify

## 🌟 Highlights

- **No Backend Needed** - Everything runs in the browser
- **No Authentication** - Admin panel accessible to owner
- **Real-time Updates** - Changes reflect immediately
- **Easy to Deploy** - Static site, deploy anywhere
- **Fully Customizable** - Modify colors, content, structure
- **Modern Stack** - Latest React and Vite
- **Beautiful UI** - Minimalist and professional design
- **Fast Performance** - Optimized with Vite

---

## 🎉 Quick Start

1. **Run the dev server**: `npm run dev`
2. **Visit**: `http://localhost:5173`
3. **Go to Admin**: `http://localhost:5173/admin`
4. **Start customizing your content!**

**Built with ❤️ using React, Vite, and TailwindCSS**

Enjoy your new portfolio website! 🚀
