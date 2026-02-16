# Elif Altındaş | Frontend Developer Portfolio 👩‍💻

A modern, responsive personal portfolio website built **exclusively with Semantic HTML5 and CSS3**. This project serves as a central hub to showcase my frontend development journey, demonstrating how powerful modern CSS can be without relying on JavaScript or external frameworks.

## 🚀 Overview

The goal was to create a clean, professional and accessible portfolio that reflects my engineering background. The site features a dark-themed design with custom typography, interactive "scroll-on-hover" project cards and a fully responsive layout that adapts seamlessly from mobile to desktop—all achieved with pure CSS.

## 🔗 Links

- **Live Site:** [View Portfolio](https://altindaselif.github.io/elif-altindas-portfolio/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/elif-altindas-portfolio)

## 💡 Key Features

- **🎨 Pure CSS Design System:** Built using CSS Custom Properties (Variables) for consistent theming (colors, spacing, typography) and easy maintenance.
- **🖱️ CSS-Only Interactive Cards:** "Scroll-on-hover" effect for long landing page screenshots using CSS transforms, allowing users to preview full designs interactively.
- **📱 Fully Responsive:** Optimized for all device sizes using extensive **CSS Grid** and **Flexbox** architectures.
- **✨ Native Smooth Scrolling:** Utilized `scroll-behavior: smooth` and `scroll-margin-top` for polished navigation without a single line of JavaScript.
- **⚡ High Performance:** Zero JavaScript and zero dependencies ensure lightning-fast load times.

## 🛠️ Technical Implementation

### 1. CSS-Only Dynamic Project Previews

Displaying long landing page designs (like the "Galleria Slideshow") in a compact card usually requires JS or cropping.

- **Solution:** The `transform` property was utilized in combination with `transition` and `calc()`. When hovering over a long project card, the image automatically flows to the bottom, revealing the full design interactively without any scripts.

### 2. Scalable Typography with CSS Variables

To maintain visual hierarchy across different screens without hardcoding values repeatedly.

- **Solution:** A robust set of CSS variables (`--tp-1` to `--tp-8`) was implemented based on the **Space Grotesk** font family. This establishes a scalable design system directly within the CSS root.

### 3. Modern Reset & Layout

To ensure consistent rendering across browsers.

- **Solution:** A custom CSS reset and `box-sizing: border-box` were employed. The layout relies heavily on **CSS Grid** for the project gallery and **Flexbox** for the alignment of internal components.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Landscape Tablet Version](./landscape-tablet-screenshot.png)
- [View Portrait Tablet Version](./portrait-tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **Semantic HTML5**
- **CSS3 (Custom Properties & BEM Naming Convention)**
- **Flexbox & CSS Grid**
- **Space Grotesk Typeface**
- **Zero JavaScript** 🚫

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
