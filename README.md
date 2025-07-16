# Angular Project Setup - Best Practices

This guide will help you set up an Angular project (Angular CLI v19+) and follow the best folder structure for scalability and maintainability.

---


## ✅ Step 1: Install Angular CLI Globally

Install the latest version of Angular CLI:

```bash
npm install -g @angular/cli
```

Or install a specific version (e.g., v19):

```bash
npm install -g @angular/cli@19
```


## ✅ Step 2: Create a New Angular Project

```bash
ng new my-app
```

⚙️ CLI Configuration Prompts:

- Zoneless App (Developer Preview)?
  - Choose Yes if you want to use Angular Signals and manual change detection (no zone.js).
  - Choose No to use zone.js for automatic change detection (recommended for most projects).

- Add Routing?
  - Choose Yes if your app will have multiple pages/routes.

- Stylesheet Format?
  - Recommended: SCSS (or CSS/LESS/etc. based on preference)

- Enable Server-Side Rendering (SSR/SSG)?
  - Choose No if you’re not using Angular Universal.
  - Choose Yes only if you need server-side rendering (advanced).


## ✅ Step 3: Navigate to Your Project

To build the project run:

```bash
cd my-app
```

## ✅ Step 4: Run the Angular App

```bash
ng serve
```
To open http://localhost:4200 in your default browser.
```bash
ng s -o
```

---


## 📁 Angular Best Folder Structure

Structure your application for clarity, reusability, and scalability:

```bash
src/
└── app/
    ├── core/
    │   ├── services/
    │   ├── interceptors/
    │   ├── guards/
    │   └── ...
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   ├── pipes/
    │   └── ...
    │
    ├── features/
    │   ├── auth/
    │   │   ├── pages/
    │   │   ├── store/
    │   │   ├── layoutComponent/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── guards/
    │   │   ├── directives/
    │   │   └── auth.routes.ts
    │   │
    │   ├── user/
    │   │   ├── pages/
    │   │   ├── store/
    │   │   ├── layoutComponent/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── guards/
    │   │   ├── directives/
    │   │   └── user.routes.ts
    │   │
    │   ├── adminAuth/
    │   │   ├── pages/
    │   │   ├── store/
    │   │   ├── layoutComponent/
    │   │   ├── components/
    │   │   ├── services/
    │   │   ├── guards/
    │   │   ├── directives/
    │   │   └── adminAuth.routes.ts

```


## Tips
- Place globally used singleton services, interceptors, and guards inside core/.
- Use shared/ for reusable components, pipes, and directives used across multiple features.
- Organize each major feature (e.g., auth, user, admin) in its own folder inside features/, keeping its routes, services, and components encapsulated.
