# My Angular Learning Journey 🚀

This document summarizes my daily learning progress in Angular.

## Day 1: Introduction to Angular & SPA
- **What is Angular?** → A powerful framework for building Single Page Applications (SPA).
- **What is an SPA (Single Page Application)?** → A web app that loads a single HTML page and dynamically updates content without refreshing.
- **Why use Angular?** → Provides a **structured, component-based architecture** that makes applications easy to maintain and scale.
- **Bootstrapping in Angular** → The process of **initializing the app**, starting from `main.ts`, loading `AppModule`, and injecting `AppComponent` into `index.html`.
- **What happens when we run `ng serve`?** → Compiles the project, starts a dev server, enables hot reloading, and serves the app.

## Day 2: Components & View Templates
- **What is a Component?**
  - A component is a reusable UI block that consists of:
    - **Logic** (TypeScript)
    - **Structure** (HTML - View Template)
    - **Styling** (CSS)
- **What is a View Template?**
  - Defines how a component looks and can be written in two ways:
    1. **Inline Template** – HTML inside the component itself.
    2. **External Template** – HTML in a separate `.html` file for better organization.
- **Using a Component in the UI**
  - After creating a component, we can use it in the application.
  - This makes the UI **modular and easy to maintain!**

## Day 3: Data Binding in Angular 🎯
- **Interpolation (`{{ }}`)** → Displays dynamic data inside elements.
- **Property Binding (`[ ]`)** → Modifies HTML element properties like `src` and `disabled`.
- **Attribute Binding (`[attr.]`)** → Used for attributes like `colspan` and `aria-label` that don’t work with `[ ]`.

💡 **Key Takeaway:**  
Use **Interpolation** for text, **Property Binding** for properties, and **Attribute Binding** for custom attributes to keep your UI dynamic and efficient.

## Day 4: Directives in Angular 🎯
- **Structural Directives** → Modify the DOM layout.
  - `*ngIf` → Show/hide elements based on a condition.
  - `*ngFor` → Loop through a list and display items.
- **Attribute Directives** → Modify element appearance/behavior.
  - `[ngClass]` → Dynamically apply CSS classes.
  - `[ngStyle]` → Apply styles dynamically.
- **Custom Directives** → Create your own directives to add new functionality.

## Day 5: Product Listing & UI Enhancements
- **Product List Component**
  - Iterated over a list of **products** using `*ngFor` to render multiple product cards.
  - Styled the product list using **Tailwind CSS** for responsiveness.
  - Implemented:
    - Wishlist icon with a heart symbol.
    - Sale badge displaying the discount percentage.
    - Product details (price, category, brand, available colors).
- **Conditional Styling**
  - Applied different styles for **out-of-stock** products and **bestsellers**.
  - Used dynamic classes based on product availability.

---

This README documents my Angular learning journey so far. I will continue updating it as I progress! 🚀
