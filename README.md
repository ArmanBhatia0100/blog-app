# Blog App

A modern blog application built with React, Vite, Tailwind CSS, and more. Users can view, search, and create blog posts, with a clean and responsive UI.

---

## 🚀 Technologies Used

- **React**: UI library for building interactive user interfaces.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router DOM**: For client-side routing and navigation.
- **React Context API**: For global state management (blog data, search, etc.).
- **uuid**: For generating unique IDs for new blog posts.
- **html-react-parser**: For rendering HTML content safely in React.
- **ESLint**: For code linting and quality.
- **PostCSS & Autoprefixer**: For CSS processing.
- **JIT Mode**: Tailwind JIT mode is enabled for arbitrary values and fast builds.

---

## ✨ Features

- View a list of blog posts (fetched from a public API).
- Search posts by title.
- View detailed information about each post.
- Create new blog posts (locally, added to the current session).
- Responsive and modern UI.
- Navigation and header with "Create Post" button.
- Loading and empty states for better UX.

---

## 📁 Project Structure

```
blog_app/
├── public/
├── src/
│   ├── api/                # API calls (fetchBlogs.js)
│   ├── components/         # Reusable components (BlogCard, BlogList, Header, SearchBar)
│   ├── context/            # React Context for blog state
│   ├── pages/              # Page components (Home, CreatePostForm, BlogDetailPage)
│   ├── util/               # Utility functions (searchBlogUtil.js)
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS imports
├── tailwind.config.js      # Tailwind configuration (JIT enabled)
├── vite.config.js          # Vite configuration
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. **Clone the repository**

```bash
git clone <your-repo-url>
cd blog_app
```

### 2. **Install dependencies**

```bash
npm install
# or
yarn install
```

### 3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

### 4. **Build for production**

```bash
npm run build
# or
yarn build
```

### 5. **Preview the production build**

```bash
npm run preview
# or
yarn preview
```

---

## ⚙️ Configuration

- **Tailwind CSS** is configured in `tailwind.config.js` with JIT mode enabled.
- **Vite** is used for fast development and builds.
- **API**: Blog posts are fetched from [Sling Academy Sample Blog API](https://api.slingacademy.com/v1/sample-data/blog-posts).
- **Local Posts**: New posts are added to the current session and not persisted after reload.

---

## 📝 Usage

- **Home Page**: View all blog posts and search by title.
- **Create Post**: Click "Create Post" in the header to add a new blog post.
- **Blog Details**: Click on a blog card to view its details.
- **Search**: Use the search bar to filter posts by title.

---

## 🧑‍💻 Scripts

- `npm run dev` — Start the development server.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build.
- `npm run lint` — Run ESLint on the codebase.

---

## 📦 Dependencies

See `package.json` for the full list, including:
- `react`, `react-dom`, `react-router-dom`, `tailwindcss`, `vite`, `uuid`, `html-react-parser`, `eslint`, and more.

---

## 📄 License

This project is for educational/demo purposes.

---

## 🙏 Acknowledgements

- [Sling Academy](https://slingacademy.com/) for the sample blog API.
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
