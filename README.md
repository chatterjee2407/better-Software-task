# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

---

# Assignment

## Table of Contents
- [Introduction](#introduction)
- [How to Run the Project](#how-to-run-the-project)
- [Design Choices](#design-choices)
- [Assumptions and Limitations](#assumptions-and-limitations)

---

## Introduction
This project is a modern React-based web application designed to manage user interactions through two forms. It leverages Formik for efficient and declarative form handling and integrates Yup for robust validation to ensure user inputs meet specified criteria. The application is thoughtfully crafted with a primary focus on responsive design, ensuring compatibility across devices, and accessibility, adhering to best practices for usability and inclusion. Its minimalist design and organized codebase aim to provide both developers and end-users with a seamless experience.

---

## How to Run the Project

### Prerequisites
1. Ensure you have the following installed:
   - **Node.js** (version X.X.X or later)
   - **npm** or **yarn**
2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/projectname.git
   cd projectname
   ```

### Steps to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

### Production Build
To build the project for production:
```bash
npm run build
```

The optimized output will be in the `/build` directory.

---

## Design Choices

1. **UI/UX Design**:
   - A **minimalist design** using soft colors for an aesthetically pleasing interface.
   - **Responsiveness** achieved using media queries and CSS Grid/Flexbox.
   - **User-friendly labels and error messages** for clarity in form validation.

2. **Validation**:
   - Implemented form validation using **Formik** and **Yup** to ensure robust error handling and feedback.

3. **Code Organization**:
   - Followed a **component-based architecture** for reusability and maintainability.
   - Used **SCSS modules** to style components for modularity.

4. **Accessibility**:
   - Included semantic HTML elements and ARIA roles where necessary.
   - Used proper label associations for form inputs.

---

## Assumptions and Limitations

### Assumptions:
1. Users are expected to have a stable internet connection to run this web application.
2. The project assumes Node.js version **X.X.X** or higher for dependency compatibility.
3. Default styling is optimized for modern browsers like Chrome, Firefox, and Edge.

### Limitations:
1. **Cross-browser support**: The application may have minor UI inconsistencies on older browsers like Internet Explorer.
2. **State Management**: The current setup uses local state for simplicity. For larger applications, a global state management library like Redux might be needed.
3. **Backend Integration**: This project uses mocked data for login/sign-up. Full backend integration is beyond the current scope.

---

Feel free to contribute to this project by opening issues or submitting pull requests!

---

### Candidate - Somnath Chatterjee