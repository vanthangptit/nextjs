#Blog Application
Build a blog website using nextjs 14, tailwindcss

## Environment
* NodeJS: v20.9.0

## Introduce the folder structure

### 1. App folder
* The app folder provides a clear and structured foundation for the core application code, fostering better development
  practices, promoting code re-usability, and facilitating a more maintainable and scalable Next.js project.
     * Shared layout
     * Nested routing
     * Loading states
     * Error handling
     * More...

### 2. Components folder
* Here we can place the components that make up our pages. These components are highly tied to the domain 
  and are not supposed to be highly reusable across projects. They're business-logic rich,
  and we can build them using the reusable UI components from `shared`.
  
* `shared`
  * Placing the components have reusability and ensures that standard components can be easily accessed 
    and utilized across different application parts. Such as buttons, input fields, modals, 
    or other UI elements used in multiple places throughout the application.

### 3. Context folder
* Using Context in `Client Components`
  * You can use all the context APIs, such as `createContext`, `useContext`, and `Provider`, in your Client Components

* Rendering Third-Party Context Providers in `Server Components`
  * React Server Components don't support creating or consuming context `directly`. If you try to create a context in 
    a Server Component, it will result in an error. Similarly, rendering a third-party context provider that doesn't 
    have the "use client" directive will also cause an error in Server Components.
  * Instead, you can create your own Client Component that wraps the third-party provider

### 4. Assets folder
* The `assets` folder holds static assets, such as images, fonts, and other files, that need to be publicly accessible from
the browser.

### 5. Config folder
* The config folder to actual configuration of the project in itself and not database related stuff
  * App settings
  * i18n
  * caching
  * AWS
  * More...

### 6. Database folder
* Within the `database` folder, database related code, such as queries and mutations, is centralized, 
  enabling clear separation of concerns and streamlining data interactions with the backend.

### 7. Services folder
* `apis`
  * Making APIs request inside the project.
* `hooks`
  * Create and custom hooks in the project.
* `types`
  * Ensure you incorporate Typescript definitions within project `types` folder.
  This practice will boost type safety, deliver comprehensive code documentation, and foster better development practices.
* `utils`
  * Storing utility functions in a separate `utils` folder can help improve code organization and maintainability.
   By grouping common functionalities together, you can enhance code reusability and make it easier to and reference specific
   functions when needed.

### 8. Styles folder
* The `styles` folder contains global styles and custom CSS files, allowing consistent styling across components and pages.

### 9 Vendor folder
* Vendor is just to include everything related to third-party apis that you might be using in your app


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
