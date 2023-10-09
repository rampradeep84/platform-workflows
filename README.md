## About

Platform Workflows is a sample project very similar to any CI/CD pipeline tool, showing how to approach building easy to maintain portal applications with appropriate abstractions

The project shows the following use-cases:
- Listing of workflows
- Listing of workflow runs
- Viewing of workflow run details, with sample step details

## Demo
https://main--sage-pastelito-410f61.netlify.app/

## Overview Video
https://www.loom.com/share/bf1bd93638384514aab357aab8ae02be?sid=36b49101-6134-4e21-b411-ea50074bcd58

## Usage

```bash
# install dependencies
yarn
# Bring up the development server
yarn dev
# Build for production
yarn build
# Serve the production build locally
yarn serve
```


## Code Structure

- Components
  - Contains all the foundational React components used in the project, these components have no knowledge of the application state and are purely presentational, and encapsulate the styling and layout of the application.
- Models
  - Contains all the models used in the project, these models are used to represent the application state.
- Pages
  - Contains all the pages in the project, these pages are responsible for fetching data from the server and passing it down to the components.
- Services
  - Contains all the services used in the project, these services are responsible for fetching data from the server.
- Utils
  - Contains all the utility functions used in the project.




### Libraries

- [React 18](https://reactjs.org/)
  - React is currently the most popular UI library for building single page applications. Has vast community support and wide open source libraries that can be leveraged for the project.
- [React Router 6](https://reactrouter.com)
  - React Router is the de-facto standard for routing in React applications. It provides a declarative way to define routes and their corresponding components.
- [tailwindcss 3](https://tailwindcss.com/)
  - Tailwind is a utility-first CSS framework that provides a set of low-level CSS utility classes that can be composed to build any design, directly in your markup. This emliminates the need to manage/maintain css directly and establishes a highly scalable paradigm with minimal conflicts among developers as the application complexity grows over time.
- [TypeScript 4.9.5](https://www.typescriptlang.org/)
  - TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static typing and object oriented programming features to JavaScript. This helps in catching errors at compile time and provides better tooling support for the project.
- [Vite 4](https://vitejs.dev/)
  - Vite is a fast build tool for modern web applications. It provides a lightning fast development experience by leveraging native ES module imports in the browser and an on-demand compilation of TypeScript code. Significantly boosting development speed and productivity.


### Tools

- [commitlint 17](https://commitlint.js.org)
  - commitlint is a tool that checks if your commit messages meet the conventional commit format. This helps in enforcing a consistent commit message format across the project.
- [editorconfig](https://editorconfig.org/)
  - EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [eslint 8](https://eslint.org/)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It is highly configurable and can be used to enforce coding styles and best practices.
- [Prettier 2](https://prettier.io/)
  - Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.


