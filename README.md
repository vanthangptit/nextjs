#Blog Application
Build a blog website using nextjs 14, tailwindcss

## Environment
* NodeJS: v22.10.0

## Introduce the folder structure

### 1. `app` folder
* The app folder provides a clear and structured foundation for the core application code, fostering better development
  practices, promoting code re-usability, and facilitating a more maintainable and scalable Next.js project.
    * `api` folder
      * Making APIs request inside the project.
    * Shared layout
    * Nested routing
    * Loading states
    * Error handling
    * More...

### 2. `assets` folder
* The `assets` folder holds static assets, such as images, fonts, and other files, that need to be publicly accessible from
  the browser.

### 3. `components` folder
* Here we can place the components that make up our pages. These components are highly tied to the domain 
  and are not supposed to be highly reusable across projects. They're business-logic rich,
  and we can build them using the reusable UI components from `Atom`, `Molecules` and `Organisms`.

* This folder will be organizational by atomic design:
    * `Atom`s of our interfaces serve as the foundational building blocks that comprise all our user interfaces.
      These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down
      any further without ceasing to be functional.

    * `Molecules` are relatively simple groups of UI elements functioning together as a unit. For example, a form label,
      search input, and button can join together to create a search form molecule.

    * `Organisms` are relatively complex UI components composed of groups of molecules and/or atoms and/or other
      organisms. These organisms form distinct sections of an interface.

### 4. `configs` folder
* The config folder to actual configuration of the project in itself and not database related stuff
    * App settings
    * i18n
    * caching
    * AWS
    * More...

### 5. `context` folder
* This directory contains files related to managing global state using the React Context API. Contexts are used to 
  share state across multiple components without having to pass props manually through each level of the 
  component tree.

* Using Context in `Client Components`
    * You can use all the context APIs, such as `createContext`, `useContext`, and `Provider`, in your Client Components

* Rendering Third-Party Context Providers in `Server Components`
    * React Server Components don't support creating or consuming context `directly`. If you try to create a context in
      a Server Component, it will result in an error. Similarly, rendering a third-party context provider that doesn't
      have the "use client" directive will also cause an error in Server Components.
    * Instead, you can create your own Client Component that wraps the third-party provider

### 6. `hooks` folder
* Hooks provide access to states for functional components while creating a React application. It allows you to use 
  state and other React features without writing a class. Placing them in a dedicated directory allows for easy access 
  and reuse across components throughout your application.

### 6. `middlewares` folder
* This folder contains of a configuration file where we store environment variables in config.js. We will use this file 
  to set up multiple environment configurations in your application. Ex- Environment Configuration, WebPack Configuration, 
  Babel Configuration, etc.

### 7. `services` folder
* In this directory, you’ll find files responsible for handling API calls and other services. `Services` keeps the 
  implementation details of interacting with external resources, provides separation of concerns and code maintainability.
  * `client`
      * Contains client related functions.
  * `server`
    * Contains server related functions.

### 8. `styles` folder
* The `styles` folder contains global styles and custom CSS files, allowing consistent styling across components and pages.

### 9. `utils` folder
* `enum`
    * Enum members are typically used to store constants. Members can have string constants, numerical constants 
      or mix of both. Homogeneity of member values determines whether the enum is a string enum or a numerical enum.
* `types`
    * Ensure you incorporate Typescript definitions within project `types` folder.
      This practice will boost type safety, deliver comprehensive code documentation, and foster better development practices.
* `utils`
    * Storing utility functions in a separate `utils` folder can help improve code organization and maintainability.
      By grouping common functionalities together, you can enhance code reusability and make it easier to and reference specific
      functions when needed.


## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
