# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# Article Viewer App

This is a simple React app using Vite. It shows a list of articles from a JSON file.

## Features

- React + Vite setup
- Loads data from `long_dummy_articles.json`
- Shows each article with title and short content
- Clean and simple UI

## How to run

1. Install dependencies:

```bash
npm install



=> How It Works-:


JSON Data Source:

=>Articles are stored in public/long_dummy_articles.json.

Fetching Data:

=>App.jsx uses fetch() to load the data when the app starts.

Displaying Articles:

=>The fetched articles are passed to ArticleList.

=>ArticleList maps over the array and renders an ArticleCard for each one.

Optional Styling:

=>You can use Tailwind CSS or your own styles for layout and visuals.
