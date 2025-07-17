# -alx-project-0x01-setup

# React Genesis: Mastering Next.js Setup

## 📌 Overview

This project is a comprehensive Next.js-based application that mimics key features of platforms like Airbnb and showcases advanced structuring of modern React apps. You'll learn to build and scale React projects using best practices, reusable components, API integration, and more — all styled using **Tailwind CSS** and enforced with **ESLint** rules.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Scaffold a Next.js project with TypeScript, Tailwind CSS, and ESLint.
- Understand Next.js folder structure and organizational conventions.
- Build reusable React components typed with TypeScript.
- Work with external APIs (JSONPlaceholder) to fetch and display posts and users.
- Implement dynamic routing, modals, and form submissions.
- Master static generation with `getStaticProps`.
- Use React hooks for state management.
- Apply responsive UI design using Tailwind CSS.
- Follow atomic design and clean architecture principles.

---
### Technical Requirements

- Node.js (v16 or later)
- npm or yarn
- Next.js (v13+ or latest)
- TypeScript
- Tailwind CSS
- ESLint
- Visual Studio Code (recommended)

### Functional Requirements

#### ✅ Base Application Setup
- Create app with TypeScript, Tailwind CSS, and ESLint.
- Organize folders and configure Tailwind CSS.
- Add global styles and base layout components.

#### ✅ Navigation System
- Header with navigation links.
- Route between Home, Posts, and Users.
- Client-side navigation without reloads.

#### ✅ Posts Functionality
- Fetch and display posts from JSONPlaceholder.
- Create `PostCard` and `PostModal` components.
- Add post functionality with state management.

#### ✅ Users Functionality
- Display users from JSONPlaceholder.
- Create `UserCard` and `UserModal` components.
- Handle complex nested data (e.g., addresses, companies).

---

## 🧱 Best Practices

### 🔹 Component Design
- Use atomic design principles.
- Split UI into presentational and container components.
- Keep components modular and single-responsibility.

### 🔹 Type Safety
- Type props, state, and events using interfaces.
- Centralize interfaces for maintainability.

### 🔹 Styling
- Use Tailwind CSS for utility-first design.
- Maintain spacing, scale, and responsive breakpoints.

### 🔹 State Management
- Prefer React hooks for local state.
- Lift state when needed, avoid prop drilling.
- Keep state minimal and isolated.

### 🔹 Code Quality
- ESLint configured for consistent styling.
- Follow arrow function syntax.
- Apply consistent formatting.

---

## 🌍 API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) for posts and users data.

---

---

## 🧠 Final Notes

This project serves as a strong foundation for real-world full-stack development. By completing it, you’ll be equipped to handle scalable architecture, efficient UI design, and TypeScript-powered React development.

---


### 🔹 Project Structure

alx-project-0x01/
├── components/
│ ├── common/ # Reusable components
│ └── layout/ # Layout components
├── interfaces/ # TypeScript interfaces
├── pages/
│ ├── posts/ # Posts pages
│ ├── users/ # Users pages
│ └── index.tsx # Home page
├── public/ # Static assets
├── styles/ # Global styles
└── ...

