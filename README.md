# Kyara Beverages

Kyara Beverages is a modern and stylish landing page for a premium beverage brand. Built using **React**, **TypeScript**, **Vite**, and **TailwindCSS**, it features clean design, modular components, and responsive layouts to provide an engaging user experience.

## ✨ Features  

- 🎯 **Hero Section** – Eye-catching landing area with brand tagline and CTA  
- 🧃 **Product Display** – Highlight key beverage offerings with elegant visuals  
- 🧑‍💼 **About Section** – Showcase the brand story and mission  
- 📞 **Contact Form** – Let users reach out directly via a styled form  
- 📂 **Component-Based Structure** – Organized and scalable component system  
- 🎨 **Modern UI** – Built with **TailwindCSS**, **Radix UI**, and **Lucide Icons**  
- 🖥 **Fully Responsive** – Optimized for desktop, tablet, and mobile  

## 🌐 Live Demo  

🔗 **Deployed Project:** [Kyara Beverages](https://kyara-beverages.vercel.app/)  

## 🏗 Tech Stack  

| Frontend | Styling | UI Components | Utils & State |
|----------|---------|---------------|---------------|
| React 18 | TailwindCSS | Radix UI, ShadCN, Lucide Icons | React Hook Form, Zod |

## 🚀 Installation & Setup  

### Prerequisites  

Ensure you have the following installed:  
- **Node.js** (v18 or later)  
- **pnpm / npm** (Package Manager)  

### 1️⃣ Clone the Repository  

```sh
git clone https://github.com/Kashyap-Mokariya/kyara-beverages.git
cd kyara-beverages
```

### 2️⃣ Install Dependencies  

```sh
pnpm install
```

### 3️⃣ Start the Development Server  

```sh
pnpm run dev
```

## 🧑‍💻 Project Structure  

```
kyara-beverages/
├── public/           # Static assets
├── src/
│   ├── components/   # Page & UI components
│   │   └── ui/       # Reusable Radix-based UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Main pages (Home, 404)
│   ├── index.css     # Global styles
│   └── main.tsx      # App entry point
├── index.html        # HTML entry template
├── tailwind.config.ts # TailwindCSS configuration
├── vite.config.ts    # Vite configuration
├── package.json      # Project metadata & scripts
├── .eslintrc.js      # ESLint configuration
└── tsconfig.json     # TypeScript configuration
```

## 📌 API Routes  

| Route | Method | Description |
|-------|--------|------------|
| `/api/files` | `GET` | Get all files |
| `/api/files/upload` | `POST` | Upload a new file |
| `/api/files/:id` | `DELETE` | Delete a file |
| `/api/files/:id` | `PATCH` | Rename a file |
| `/api/transcribe` | `POST` | Transcribe an audio/video file |
| `/api/summarize` | `POST` | Generate a summary from a transcription |
