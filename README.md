# 🛒 FastCart

FastCart is an online store built with modern tools: **React**, **Vite**, **Redux Toolkit**, and **Shadcn/UI**.

## 🚀 Technology stack

- ⚛️ **React** — a library for building user interfaces.
- ⚡ **Vite** — a fast bundler and dev server.
- 🧠 **Redux Toolkit** — easy global state management.
- 🎨 **Shadcn/UI** — a modern UI components collection based on Radix UI and Tailwind CSS.

## 🔗 Demo

[https://fastcart-store.vercel.app/](https://fastcart-store.vercel.app/)

## 📦 Installation and start

```bash
# 1. Clone the repo
git clone https://github.com/your-username/fastcart-react-redux-shadcn.git
cd fastcart-react-redux-shadcn

# 2. Install dependencies
npm install

# 3. Run the project
npm run dev
```

## 📁 Project structure

```
src/
├── app/            # Redux store and global settings
├── pages/          # App pages (FSD style)
├── widgets/        # Page components
├── features/       # Features (FSD style)
├── shared/         # Reusable components, UI, utilities
└── entities/       # Entities (products, users, etc.)
```

## 🧩 Shadcn components

Add UI components via CLI:

```bash
npx shadcn-ui@latest add button
```

More info at [https://ui.shadcn.com](https://ui.shadcn.com)

## 🛠 Scripts

| Script            | Purpose                      |
|-------------------|------------------------------|
| `npm run dev`     | Start in development mode     |
| `npm run build`   | Build the project             |
| `npm run preview` | Preview the production build  |

## 📌 TODO

- [ ] Authentication
- [ ] Product catalog
- [ ] Filtering and search
- [ ] Cart
- [ ] Checkout

---

© 2025 FastCart. Made with ❤️ using React + Vite.
