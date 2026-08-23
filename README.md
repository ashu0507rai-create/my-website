# 🚀 Aetheria Studio — Next.js 14 App Router Project

A full-stack, production-grade Next.js 14 application equipped with React 18, TypeScript, Tailwind CSS, Framer Motion animations, dark/light theme switching, interactive AI playground, dynamic pricing calculator, modal blog reader, validated contact form, and API route handlers.

This project is completely modular, responsive, and ready for instant deployment to Vercel or any cloud provider.

---

## 📦 Project ZIP Export
The workspace includes a complete downloadable ZIP package containing all source code, assets, configuration files, and documentation:
- **`nextjs-project-export.zip`** (located at the root directory)
- You can re-generate the ZIP archive anytime by running:
```bash
npm run export-zip
```

---

## 🛠 Tech Stack & Dependencies

- **Framework**: Next.js 14 (App Router)
- **UI & Components**: React 18, Lucide React Icons
- **Styling**: Tailwind CSS v3, PostCSS, Autoprefixer, Custom Glassmorphism Utilities
- **Animations**: Framer Motion & CSS Keyframe Smooth Transitions
- **State & Utilities**: React Context API, `clsx`, `tailwind-merge`
- **Language**: TypeScript 5+

---

## 📁 Directory Architecture

```
.
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts         # Contact submission API handler
│   │   └── newsletter/
│   │       └── route.ts         # Newsletter subscription API handler
│   ├── globals.css              # Global Tailwind directives & dark mode rules
│   ├── layout.tsx               # Root layout with Theme & Toast providers
│   └── page.tsx                 # Main landing & interactive dashboard page
├── components/
│   ├── BlogSection.tsx          # Searchable articles grid & modal reader
│   ├── ContactSection.tsx       # Validated contact form with toast feedback
│   ├── FAQ.tsx                  # Interactive accordion FAQ with search
│   ├── Features.tsx             # Tabbed architecture showcase with code preview
│   ├── Footer.tsx               # Multi-column footer & newsletter opt-in
│   ├── Hero.tsx                 # Hero banner with dynamic live stats ticker
│   ├── InteractiveTools.tsx     # AI Prompt & UI Code Generator Playground
│   ├── Navbar.tsx               # Sticky header, theme switcher & mobile drawer
│   ├── Portfolio.tsx            # Case study portfolio grid & detail modals
│   ├── PricingCalculator.tsx    # Monthly/Annual pricing switch & feature list
│   ├── Testimonials.tsx         # Customer quotes & industry filters
│   ├── ThemeProvider.tsx        # Dark/Light theme context provider
│   ├── ThemeToggle.tsx          # Smooth theme switch button
│   └── ToastContext.tsx         # Global notification toast provider
├── lib/
│   ├── data.ts                  # Structured datasets for features, plans, FAQs
│   └── utils.ts                 # Class merging & date formatting helpers
├── public/                      # Static assets & downloadable ZIP archive
├── scripts/
│   └── create_zip.py            # Python archive packager script
├── .env.example                 # Environment variables reference
├── next.config.mjs              # Next.js configuration
├── package.json                 # Node dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind theme extension & keyframe config
├── tsconfig.json                # TypeScript strict configuration
└── README.md                    # Project documentation & deployment guide
```

---

## ⚡ Quick Start (Local Development)

### 1. Extract & Install Dependencies
Unzip `nextjs-project-export.zip` or clone the repository into your local folder, then run:

```bash
npm install
```

### 2. Set Up Environment Variables
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live application.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Vercel Deployment Instructions

Deploying this Next.js project to **Vercel** takes less than 1 minute and requires zero manual server setup.

### Option A: Deployment via Vercel Web Dashboard (Recommended)

1. **Push to GitHub / GitLab / Bitbucket**:
   - Create a new repository on GitHub.
   - Extract the project zip file and push all files to your GitHub repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Next.js project export"
     git branch -M main
     git remote add origin https://github.com/your-username/your-repo-name.git
     git push -u origin main
     ```

2. **Import Project to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and log in.
   - Click **"Add New..."** → **"Project"**.
   - Select your GitHub repository from the list and click **"Import"**.

3. **Configure Build Settings**:
   - **Framework Preset**: Next.js (automatically detected).
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (default).
   - **Output Directory**: `.next` (default).

4. **Environment Variables**:
   - Expand the **Environment Variables** section.
   - Add any variables from `.env.example` (such as `NEXT_PUBLIC_SITE_NAME` or custom API keys).

5. **Deploy**:
   - Click **"Deploy"**.
   - Vercel will build your application, optimize static pages, and assign a production URL (e.g., `https://aetheria-studio.vercel.app`).

---

### Option B: Deployment via Vercel CLI

If you prefer command-line deployment:

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Authenticate Vercel CLI:
   ```bash
   vercel login
   ```

3. Run deployment from project root:
   ```bash
   vercel
   ```
   Follow the prompts to link the project to your Vercel workspace.

4. Deploy to Production:
   ```bash
   vercel --prod
   ```

---

## 🔑 Environment Variables Reference

Refer to `.env.example` for available variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_NAME` | Site title name | Optional |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL | Optional |
| `NEXT_PUBLIC_ANALYTICS_ID` | Measurement tracking ID | Optional |
| `CONTACT_FORM_SECRET` | Secret key for contact API route | Optional |
| `NEWSLETTER_API_KEY` | Key for email service | Optional |

---

## 📝 License
This project export is released under the MIT License. You are free to modify, extend, and deploy it commercially.
