# Install Tailwind CSS

## Install Tailwind and dependencies

```
yarn add -D tailwindcss@latest @tailwindcss/postcss@latest postcss autoprefixer
```

## config tailwindcss.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}", // for your app directory
        "./src/components/**/*.{js,ts,jsx,tsx}", // optional if you use components
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## config postcss.config.js

```
// postcss.config.js
module.exports = {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
    },
};
```