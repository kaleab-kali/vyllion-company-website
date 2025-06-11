# Vyllion Company Landing Page

A beautifully designed, responsive landing page for Vyllion — a premium technology solutions provider for luxury brands. Built with Next.js, React, and Tailwind CSS, this project showcases portfolio projects, company information, blog, and legal pages with a modern, elegant aesthetic.

---

## 🚀 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Portfolio Showcase:** Dynamic, local-image-powered portfolio cards with retina-ready banners.
- **Blog Section:** Easily extendable blog with support for multiple posts.
- **Contact & Testimonials:** Smooth scroll navigation to contact and testimonials sections.
- **Elegant Footer:** Quick Links and Legal sections, mobile-optimized.
- **Social Links:** Integrated with Twitter, LinkedIn, Instagram, Facebook, GitHub, and YouTube.
- **Legal Pages:** Privacy Policy, Terms of Service, Cookie Policy, and Support.
- **Modern UI:** Uses Tailwind CSS and Lucide React icons for a clean, luxury feel.
- **AI Image Prompts:** Sample prompts for generating portfolio banners using Midjourney, DALL·E, or Stable Diffusion.

---

## 🏗️ Project Structure

```
.
├── app/                # Next.js app directory (pages, layouts, components)
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── portfolio/      # Portfolio project pages
│   ├── privacy/        # Privacy Policy
│   ├── terms/          # Terms of Service
│   ├── layout.tsx      # Main layout
│   ├── page.tsx        # Landing page (main entry)
│   └── globals.css     # Global styles
├── components/         # Shared React components and UI primitives
├── lib/                # Data and utility libraries
├── public/             # Static assets (images, logos, portfolio banners)
├── styles/             # Additional CSS files
├── types/              # TypeScript type definitions
├── tailwind.config.ts  # Tailwind CSS configuration
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

---

## ⚡ Getting Started

### 1. **Clone the Repository**
```bash
git clone https://github.com/Vyllion/landing-page.git
cd landing-page
```

### 2. **Install Dependencies**
```bash
# Using pnpm (recommended)
pnpm install

# Or npm
npm install

# Or yarn
yarn install
```

### 3. **Run the Development Server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 4. **Build for Production**
```bash
pnpm build
# or
npm run build
# or
yarn build
```

---

## 🖼️ Portfolio Images

- Place all portfolio banner images in `public/portfolio/`.
- Recommended aspect ratio: **4:1** (e.g., 576x144px standard, 1152x288px retina).
- Update `lib/data/portfolio-data.ts` to reference your images locally.

---

## 🌐 Deployment

This project is ready for deployment on any Vercel/Netlify/Static hosting provider.

**Deploy to Vercel:**
1. Push your code to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Follow the prompts (no extra configuration needed).

---

## 📝 Changelog / Log

### 2025-06-11
- Initial full project commit: landing page, blog, portfolio, legal, and about pages.
- Portfolio data updated to use local images.
- Footer mobile alignment and horizontal nav links improved.
- AI image prompts for portfolio banners added to documentation.
- All legal and support pages implemented.

### 2025-06-10
- UI refinements: portfolio card aspect ratio, retina image support.
- Social links and newsletter signup added.

### 2025-06-09
- Project scaffolded with Next.js, Tailwind CSS, and TypeScript.
- Initial layout and navigation structure.

---

## 🤖 AI Image Generation Prompts

See the comments in `lib/data/portfolio-data.ts` for detailed prompts to generate portfolio banners using tools like Midjourney, DALL·E, or Stable Diffusion.

---

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact

For questions, feedback, or support, email: [info@vyllion.com](mailto:info@vyllion.com)

---

## 💡 Credits

- Built by the Vyllion team.
- UI icons from [Lucide](https://lucide.dev/).
- Inspired by the best in luxury technology.
