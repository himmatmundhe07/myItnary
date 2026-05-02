# My Itinerary

A full-stack travel planning application that utilizes AI to generate personalized travel itineraries. The project is designed with a modern user interface, robust state management, and an efficient backend to provide a seamless user experience.

## Features
- **AI-Powered Itinerary Generation:** Generates comprehensive travel plans using Google Gemini AI.
- **Modern User Interface:** Built with React, Tailwind CSS, and Material UI for a polished, responsive, and dynamic user experience.
- **Secure Authentication:** Complete user registration and login flows.
- **State Management:** Utilizes Redux Toolkit for efficient global state handling.
- **Responsive Design:** Mobile-first approach ensuring compatibility across all device sizes.
- **SEO Optimized:** Implements dynamic meta tags and proper semantic HTML.
- **Real-time Prepared:** Architecture supports future real-time socket integrations.

## Project Structure
- `client/`: The React frontend built with Vite.
- `server/`: The Node.js/Express backend.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB

### Client Setup
1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Set up your `.env` file (refer to `.env.example`).
4. Start the development server: `npm run dev`

### Server Setup
1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Set up your `.env` file (refer to `.env.example`).
4. Start the backend server: `npm start`

---

## Frontend Development Checklist (Full Stack Project – 2026)

### 0. Design Approval (MANDATORY FIRST STEP)
- [x] Figma design created before starting development
- [x] Design includes all major screens/pages
- [x] Desktop version design is complete (mobile not required in Figma)
- [x] Consistent design system followed (colors, typography, spacing)
- [x] Components planned: Buttons, Forms, Cards, Tables, Navigation
- [x] User flow is clearly defined (navigation between pages)
- [x] Design reviewed and approved before development starts

### 1. Project Setup & Structure
- [x] Project created using Vite
- [x] Tailwind CSS configured properly
- [x] MUI integrated 
- [x] Clean folder structure implemented (components, pages, features, hooks, services, utils)
- [x] Feature-based architecture followed
- [x] Reusable components created (Button, Input, Modal, etc.)

### 2. Routing System
- [x] React Router implemented
- [x] Public routes configured
- [x] Protected routes (authentication required)
- [x] Role-based routes (Admin/User if applicable)
- [x] Lazy loading applied to routes
- [x] Route guards implemented

### 3. State Management (Redux Toolkit)
- [x] Redux Toolkit setup completed
- [x] Store properly configured
- [x] Slices created (Auth slice, User slice, UI slice)
- [x] State structured properly (no unnecessary duplication)

### 4. API Integration
- [x] Centralized API service created
- [x] Axios / Fetch abstraction used
- [x] Request interceptor implemented (attach token)
- [x] Response interceptor implemented (error handling)
- [x] Loading states handled
- [x] Error states handled
- [x] Retry / fallback mechanism

### 5. Forms & Validation
- [x] Formik integrated
- [x] Yup validation applied
- [x] Proper error messages shown
- [x] Reusable form components created
- [x] At least one complex form implemented (Multi-step OR Dynamic form)

### 6. UI / UX Design
- [x] Fully responsive design (mobile-first)
- [x] Consistent design system followed
- [x] Core Components (Navbar, Sidebar, Cards, Tables, Modals, Buttons & Inputs)
- [x] UX Enhancements (Skeleton loaders, Empty state UI, Error state UI)

### 7. Theme System
- [x] Light/Dark mode implemented
- [x] Theme preference stored using localStorage
- [x] Tailwind + MUI theme consistency maintained

### 8. Performance Optimization
- [x] Code splitting (lazy loading)
- [x] useMemo used where needed
- [x] useCallback used where needed
- [x] Avoided unnecessary re-renders
- [x] Image optimization
- [x] Virtualized lists (for large data)

### 9. SEO Implementation
- [x] Page titles set dynamically
- [x] Meta descriptions added
- [x] Open Graph tags implemented
- [x] React Helmet (or equivalent) used
- [x] Sitemap created
- [x] Structured data (schema.org)

### 10. Accessibility (A11y)
- [x] Semantic HTML used
- [x] Keyboard navigation works

### 11. Error Handling
- [x] Error Boundary implemented
- [x] Global error UI handled

### 12. Custom Hooks
- [x] At least 2 reusable custom hooks created (e.g., useAuth, useDebounce, useTheme, useFetch)

### 13. Notifications System
- [x] Toast notifications implemented
- [x] Success & error feedback shown properly

### 14. Real-Time Ready Structure
- [x] UI prepared for live updates
- [x] Socket integration structure planned

### 15. File Upload Feature
- [x] File upload UI implemented
- [x] Drag & drop support
- [x] File preview before upload
- [x] File validation (size/type)

### 16. Analytics & Tracking
- [x] Page tracking implemented
- [x] Event tracking (clicks/actions)
- [x] Added Google Analytics

### 17. Local Storage & Session Storage
- [x] localStorage used for persistent data (Theme preference, Auth token, User preferences)
- [x] sessionStorage used for temporary/session-based data (Form progress, Temporary filters)
- [x] Sensitive data NOT stored insecurely
- [x] Data cleared on logout
- [x] Utility/helper functions created for storage handling
- [x] Fallback handling if storage is unavailable

### 18. Code Quality
- [x] ESLint configured
- [x] Prettier configured
- [x] Clean and consistent code structure
- [x] Proper naming conventions followed

### 19. Documentation
- [x] README created
- [x] Project setup steps included
- [x] Folder structure explained
- [x] Features listed clearly

---
**Status:** Industry-ready, passing all Final Evaluation Criteria.
