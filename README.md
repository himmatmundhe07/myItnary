# My Itinerary — Travel Freely. Stay Safe.

<div align="center">

![My Itinerary Banner](https://img.shields.io/badge/My%20Itinerary-Travel%20Freely.%20Stay%20Safe.-E8640C?style=for-the-badge&labelColor=1E1410)

[![MIT License](https://img.shields.io/badge/License-MIT-2D6A4F?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Status](https://img.shields.io/badge/Status-Design%20Complete%2C%20In%20Development-F0A500?style=flat-square)]()
[![College Project](https://img.shields.io/badge/Type-College%20Project-E8640C?style=flat-square)]()

**India's first safety-first travel companion — built for solo travelers, women explorers, and backpackers navigating the length and breadth of Bharat.**

[View Figma Design]([#screenshots](https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=544-1907&t=TbFlAKX2Bwqk5ct9-1)) · [Report a Bug](https://github.com/himmatmundhe07/myItnary/issues) · [Request a Feature](https://github.com/himmatmundhe07/myItnary/issues)

</div>

---

## Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Our Solution](#2-our-solution)
3. [Features](#3-features)
4. [Tech Stack](#4-tech-stack)
5. [System Architecture](#5-system-architecture)
6. [Folder Structure](#6-folder-structure)
7. [Installation Guide](#7-installation-guide)
8. [Usage Guide](#8-usage-guide)
9. [Screenshots](#9-screenshots)
10. [API Documentation](#10-api-documentation)
11. [Database Schema](#11-database-schema)
12. [Future Improvements](#12-future-improvements)
13. [Challenges Faced](#13-challenges-faced)
14. [Contributing](#14-contributing)
15. [License](#15-license)
16. [Author](#16-author)

---

## 1. Problem Statement

India attracts millions of domestic and international travelers every year. Yet despite its vastness and diversity, the travel infrastructure for **safety** remains critically underdeveloped. Existing platforms — Google Maps, MakeMyTrip, TripAdvisor — solve logistics and bookings. None of them solve safety.

The following problems are real, widespread, and currently have no dedicated solution:

---

### Problem 1 — Women and Solo Traveler Safety

Solo women travelers and backpackers exploring unfamiliar cities face genuine safety concerns — getting lost in unknown areas, experiencing harassment, or facing emergencies far from home with no local support. There is no platform that connects travelers with verified, trusted local residents who can provide immediate ground-level assistance.

**The gap:** No platform provides a verified local guardian system for travelers in India.

---

### Problem 2 — Healthcare Access in Unfamiliar Cities

International travelers and domestic tourists who fall ill in unfamiliar cities have no reliable way to find trusted doctors, understand if a doctor speaks their language, or know what a consultation will cost before walking into a clinic. There is no travel-focused healthcare discovery system in India.

**The gap:** Zero travel-specific healthcare discovery platforms exist for Indian travel contexts.

---

### Problem 3 — Authentic Experience Discovery

Tourists tired of visiting the same overcrowded landmarks mentioned in every guidebook cannot easily connect with authentic local experiences, hidden neighborhood spots, or cultural activities known only to locals. Current platforms (blogs, YouTube, random contacts) are scattered, unverified, and impersonal.

**The gap:** No personalized, verified discovery of real local culture exists in one place.

---

### Problem 4 — Connectivity and Utilities

Travelers are routinely misled by "high-speed WiFi" claims from hotels and cafes because connectivity quality is never measured or verified. Finding a public charging station when your phone dies during sightseeing is nearly impossible.

**The gap:** No crowdsourced, verified WiFi and charging station network exists for Indian travelers.

---

### The Core Truth

> **Google Maps gives you directions. Nobody gives you safety. My Itinerary does.**

---

## 2. Our Solution

**My Itinerary** is not a tour booking website. It is not a simple itinerary generator. It is India's first **travel safety infrastructure** — a platform that helps people travel anywhere in India safely, confidently, and independently.

The platform is built around one core shift in thinking:

```
Instead of:   "Where should I go?"
We solve:     "How do I travel safely there?"
```

My Itinerary provides five interlocking solutions:

| Solution | What it Does |
|---|---|
| Safety Network | Connects travelers with background-verified local guardians in real time |
| SOS System | One-tap emergency alert that notifies contacts and assigns a guardian |
| Healthcare Access | Verified English-speaking doctors with cost estimates, near your location |
| Smart Itinerary | AI-generated day-by-day trip plan based on budget, days, and interests |
| Experience Discovery | Curated hidden gems and authentic local experiences beyond guidebooks |

### Why Users Will Come

Users will not download My Itinerary to plan a trip. They will download it because they feel unsafe traveling alone — and staying because the trip planning and discovery is genuinely better than what exists.

```
They come for:    Safety + real-world support
They stay for:    Planning + discovery
```

---

## 3. Features

### Core Features (MVP)

#### 3.1 Safety Network

- Verified local guardian profiles with background check indicators
- Browse guardians by city, language, gender preference, and response time
- Request a guardian for a specific location, date, time, and duration
- Active guardian session tracking
- Women-first matching — solo women travelers are matched with verified women guardians first
- Safety status dashboard showing guardian proximity, hospital distance, and SOS readiness

#### 3.2 SOS Emergency System

- One-tap SOS activation from any screen via the persistent safety button in the navigation bar
- Immediate alert broadcast to all saved emergency contacts with the user's GPS coordinates
- Auto-assignment of the nearest available guardian
- SOS confirmation screen with guardian contact details and actionable next steps
- Cancel SOS with an all-clear message to all contacts

#### 3.3 Healthcare Access

- Search and filter verified doctors and clinics by city, specialty, language spoken, and cost range
- Doctor profiles with qualifications, hospital affiliation, consultation cost, and operating hours
- Verified patient reviews from other travelers
- One-tap call and direction features
- Nearby hospital map view using Google Maps API
- Language support indicator — know which doctors speak your language before you visit

#### 3.4 Smart Itinerary (Gemini AI Powered)

- Multi-step trip creation: Destination → Dates and Budget → Interests and Preferences
- AI-generated day-by-day itinerary using Gemini API based on user inputs
- Real cost breakdowns per activity, accommodation type, and transport
- Day-by-day timeline view with activity cards, photos, timing, and safety notes
- Safety profile overlay on each itinerary — nearest hospital per day, guardian availability, local emergency numbers

#### 3.5 Experience Discovery

- Curated hidden gems database — locations not found in mainstream guidebooks
- Filter by category: Nature, Culture, Heritage, Festivals, Food, Adventure, Spiritual
- Detailed gem profiles with insider tips, getting-there guide, gallery, and nearby spots
- Community-submitted spots from fellow travelers
- Save gems to your trips directly from the discovery screen

#### 3.6 Utilities

- Verified WiFi Finder — crowdsourced and verified WiFi spots near your current location
- Charging Station Locator — public powerbank kiosk locations along your route
- National and state-level emergency helpline directory
- Offline safety guide accessible without internet connectivity

### Supporting Features

- User authentication with JWT — login, signup (3-step), OTP verification
- 3-step onboarding with location and notification permissions
- Personalized home dashboard with safety status, active trip, and nearby recommendations
- Global search across destinations, doctors, guardians, and hidden gems
- Full notification system with categorized alerts — Safety, Trips, Healthcare, Account
- Profile management with travel identity, safety profile, and achievement badges
- Granular notification settings with quiet hours
- Privacy controls for location sharing, profile visibility, and data preferences

---

## 4. Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 18.x | UI framework — component-based architecture |
| React Router DOM | 6.x | Client-side routing and navigation |
| Axios | 1.x | HTTP client for API communication |
| React Query | 5.x | Server state management and caching |
| Zustand | 4.x | Client-side global state management |
| Tailwind CSS | 3.x | Utility-first CSS framework |
| React Hook Form | 7.x | Form management and validation |
| Zod | 3.x | Schema validation for forms and API responses |
| @react-google-maps/api | Latest | Google Maps integration |
| React Hot Toast | 2.x | Toast notification system |
| Lucide React | Latest | SVG icon system |
| Vite | 5.x | Build tool and development server |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 20.x LTS | Runtime environment |
| Express.js | 4.x | Web application framework |
| Mongoose | 8.x | MongoDB object modeling (ODM) |
| JSON Web Tokens (JWT) | 9.x | Stateless authentication and authorization |
| bcryptjs | 2.x | Password hashing |
| express-validator | 7.x | Input validation and sanitization |
| multer | 1.x | File upload handling (profile photos) |
| cors | 2.x | Cross-Origin Resource Sharing |
| dotenv | 16.x | Environment variable management |
| helmet | 7.x | HTTP security headers |
| morgan | 1.x | HTTP request logging |
| node-cron | 3.x | Scheduled background jobs |

### Database

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Primary database — cloud hosted NoSQL |
| Mongoose ODM | Schema definition, validation, and query building |

### External APIs

| API | Purpose |
|---|---|
| Google Maps JavaScript API | Interactive maps, location display, directions |
| Google Places API | Nearby hospitals, clinics, and place search |
| Google Geocoding API | Convert coordinates to readable addresses |
| Google Distance Matrix API | Calculate distances and travel times |
| Gemini API (Google AI) | AI-powered itinerary generation |

### Authentication

| Technology | Purpose |
|---|---|
| JWT (JSON Web Tokens) | Access token and refresh token authentication |
| bcryptjs | Secure password hashing with salt rounds |

### Development Tools

| Tool | Purpose |
|---|---|
| VS Code | Primary code editor |
| Postman | API testing and documentation |
| MongoDB Compass | Database visualization and management |
| Figma | UI/UX design (complete — 36 screens) |
| Git + GitHub | Version control |
| ESLint + Prettier | Code linting and formatting |

---

## 5. System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │              React Application (Vite)                   │   │
│   │                                                         │   │
│   │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────┐  │   │
│   │  │  Pages   │  │Components│  │  Hooks   │  │ Store │  │   │
│   │  │          │  │          │  │          │  │(Zustand│  │   │
│   │  │ Auth     │  │ Cards    │  │ useAuth  │  │       │  │   │
│   │  │ Onboard  │  │ Maps     │  │ useTrip  │  │ user  │  │   │
│   │  │ Home     │  │ Forms    │  │ useSafety│  │ safety│  │   │
│   │  │ Safety   │  │ Modals   │  │ useSearch│  │ trips │  │   │
│   │  │ Health   │  │ Sheets   │  │          │  │       │  │   │
│   │  │ Trips    │  │ Toasts   │  │          │  │       │  │   │
│   │  │ Discover │  │          │  │          │  │       │  │   │
│   │  │ Profile  │  │          │  │          │  │       │  │   │
│   │  │ Settings │  │          │  │          │  │       │  │   │
│   │  └──────────┘  └──────────┘  └──────────┘  └───────┘  │   │
│   └─────────────────────────────────────────────────────────┘   │
└─────────────────────┬───────────────────────────────────────────┘
                      │  HTTPS / REST API
                      │  JWT Bearer Token
                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                        SERVER LAYER                             │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │              Express.js Application                     │   │
│   │                                                         │   │
│   │  ┌──────────────┐        ┌──────────────────────────┐  │   │
│   │  │  Middleware  │        │         Routes           │  │   │
│   │  │              │        │                          │  │   │
│   │  │ cors         │──────▶ │ /api/auth                │  │   │
│   │  │ helmet       │        │ /api/users               │  │   │
│   │  │ morgan       │        │ /api/trips               │  │   │
│   │  │ JWT verify   │        │ /api/safety              │  │   │
│   │  │ rate limiter │        │ /api/guardians           │  │   │
│   │  │ validator    │        │ /api/healthcare          │  │   │
│   │  │ error handler│        │ /api/gems                │  │   │
│   │  └──────────────┘        │ /api/search              │  │   │
│   │                          │ /api/notifications       │  │   │
│   │                          └──────────────────────────┘  │   │
│   │                                      │                  │   │
│   │                          ┌───────────▼──────────────┐  │   │
│   │                          │       Controllers        │  │   │
│   │                          │  Business Logic Layer    │  │   │
│   │                          └───────────┬──────────────┘  │   │
│   │                                      │                  │   │
│   │                          ┌───────────▼──────────────┐  │   │
│   │                          │         Models           │  │   │
│   │                          │   Mongoose Schemas       │  │   │
│   │                          └──────────────────────────┘  │   │
│   └─────────────────────────────────────────────────────────┘   │
└──────────┬──────────────────────────────┬───────────────────────┘
           │                              │
           ▼                              ▼
┌─────────────────────┐      ┌─────────────────────────────────────┐
│   MongoDB Atlas     │      │         External APIs               │
│                     │      │                                     │
│  Collections:       │      │  ┌─────────────────────────────┐   │
│  - users            │      │  │  Google Maps JavaScript API │   │
│  - trips            │      │  │  Google Places API          │   │
│  - guardians        │      │  │  Google Geocoding API       │   │
│  - guardian_sessions│      │  │  Google Distance Matrix API │   │
│  - healthcare       │      │  └─────────────────────────────┘   │
│  - gems             │      │                                     │
│  - notifications    │      │  ┌─────────────────────────────┐   │
│  - reviews          │      │  │  Gemini API (Google AI)     │   │
│  - emergency_contacts      │  │  Itinerary Generation       │   │
│  - sos_alerts       │      │  └─────────────────────────────┘   │
└─────────────────────┘      └─────────────────────────────────────┘
```

### Authentication Flow

```
Client                    Server                     Database
  │                          │                           │
  │──── POST /auth/register ─▶│                           │
  │                          │──── Hash Password ────────▶│
  │                          │◀─── User Created ──────────│
  │◀─── 201 + Access Token ──│                           │
  │                          │                           │
  │──── POST /auth/login ────▶│                           │
  │                          │──── Find User ────────────▶│
  │                          │◀─── User Document ─────────│
  │                          │──── Verify Password        │
  │                          │──── Sign JWT               │
  │◀─── 200 + JWT Token ─────│                           │
  │                          │                           │
  │──── GET /api/protected   │                           │
  │     Authorization:       │                           │
  │     Bearer <token> ─────▶│                           │
  │                          │──── Verify JWT Middleware  │
  │                          │──── Attach req.user        │
  │◀─── 200 + Protected Data─│                           │
```

### SOS Alert Flow

```
User taps SOS
      │
      ▼
POST /api/safety/sos
      │
      ├── Save SOS record to MongoDB
      │
      ├── Get user's emergency contacts
      │
      ├── Get user's GPS coordinates
      │
      ├── Find nearest available guardians
      │   (via Google Distance Matrix API)
      │
      ├── Assign closest guardian
      │
      ├── Send alert notifications
      │   (to all emergency contacts)
      │
      └── Return SOS confirmation to client
            with guardian details
```

### Itinerary Generation Flow (Gemini AI)

```
User completes Trip Creator (Step 1 → 2 → 3)
      │
      ▼
POST /api/trips/generate
      │
      ├── Validate inputs (destination, dates, budget, interests)
      │
      ├── Build structured prompt for Gemini API
      │   ├── Destination: Jaisalmer, Rajasthan
      │   ├── Duration: 5 days
      │   ├── Budget: Rs. 15,000
      │   ├── Interests: Heritage, Food, Photography
      │   └── Safety preferences: Solo Woman, Guardian matching
      │
      ├── Call Gemini API
      │   └── Returns structured JSON itinerary
      │
      ├── Enrich itinerary with real data
      │   ├── Google Places API (actual place details)
      │   ├── Safety score for destination
      │   └── Nearest hospitals per day location
      │
      ├── Save trip to MongoDB
      │
      └── Return full itinerary to client
```

---

## 6. Folder Structure

```
myItnary/
│
├── client/                          # React Frontend (Vite)
│   ├── public/
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── api/                     # Axios API call functions
│   │   │   ├── auth.api.js
│   │   │   ├── trips.api.js
│   │   │   ├── safety.api.js
│   │   │   ├── guardians.api.js
│   │   │   ├── healthcare.api.js
│   │   │   ├── gems.api.js
│   │   │   ├── search.api.js
│   │   │   └── notifications.api.js
│   │   │
│   │   ├── assets/                  # Static assets
│   │   │   ├── images/
│   │   │   └── icons/
│   │   │
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   ├── Avatar.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   ├── BottomSheet.jsx
│   │   │   │   ├── SkeletonLoader.jsx
│   │   │   │   ├── Toggle.jsx
│   │   │   │   └── Chip.jsx
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── TopAppBar.jsx
│   │   │   │   ├── BottomNavBar.jsx
│   │   │   │   └── PageWrapper.jsx
│   │   │   │
│   │   │   ├── cards/
│   │   │   │   ├── TripCard.jsx
│   │   │   │   ├── GuardianCard.jsx
│   │   │   │   ├── DoctorCard.jsx
│   │   │   │   ├── GemCard.jsx
│   │   │   │   ├── NotificationCard.jsx
│   │   │   │   └── ActivityCard.jsx
│   │   │   │
│   │   │   ├── maps/
│   │   │   │   ├── MapView.jsx
│   │   │   │   ├── MapPreview.jsx
│   │   │   │   └── LocationPicker.jsx
│   │   │   │
│   │   │   └── safety/
│   │   │       ├── SafetyStatusCard.jsx
│   │   │       ├── SOSButton.jsx
│   │   │       └── GuardianAvatarStack.jsx
│   │   │
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useLocation.js
│   │   │   ├── useTrips.js
│   │   │   ├── useSafety.js
│   │   │   ├── useGuardians.js
│   │   │   ├── useSearch.js
│   │   │   └── useNotifications.js
│   │   │
│   │   ├── pages/                   # Page-level components
│   │   │   ├── auth/
│   │   │   │   ├── LoginPage.jsx
│   │   │   │   ├── SignUpPage.jsx       # Multi-step (3 steps)
│   │   │   │   ├── ForgotPasswordPage.jsx
│   │   │   │   └── OTPVerificationPage.jsx
│   │   │   │
│   │   │   ├── onboarding/
│   │   │   │   ├── WelcomePage.jsx
│   │   │   │   ├── SafetyIntroPage.jsx
│   │   │   │   └── PermissionsPage.jsx
│   │   │   │
│   │   │   ├── home/
│   │   │   │   └── HomePage.jsx
│   │   │   │
│   │   │   ├── search/
│   │   │   │   └── SearchPage.jsx
│   │   │   │
│   │   │   ├── safety/
│   │   │   │   ├── SafetyDashboardPage.jsx
│   │   │   │   ├── SOSPage.jsx
│   │   │   │   ├── SOSConfirmationPage.jsx
│   │   │   │   ├── EmergencyContactsPage.jsx
│   │   │   │   ├── GuardianBrowsePage.jsx
│   │   │   │   ├── GuardianProfilePage.jsx
│   │   │   │   └── RequestGuardianPage.jsx
│   │   │   │
│   │   │   ├── healthcare/
│   │   │   │   ├── HealthcareHomePage.jsx
│   │   │   │   ├── DoctorResultsPage.jsx
│   │   │   │   └── DoctorDetailPage.jsx
│   │   │   │
│   │   │   ├── trips/
│   │   │   │   ├── MyTripsPage.jsx
│   │   │   │   ├── CreateTripPage.jsx      # Multi-step (3 steps)
│   │   │   │   └── TripItineraryPage.jsx
│   │   │   │
│   │   │   ├── discover/
│   │   │   │   ├── HiddenGemsPage.jsx
│   │   │   │   └── GemDetailPage.jsx
│   │   │   │
│   │   │   ├── account/
│   │   │   │   ├── MyProfilePage.jsx
│   │   │   │   └── EditProfilePage.jsx
│   │   │   │
│   │   │   ├── settings/
│   │   │   │   ├── SettingsHomePage.jsx
│   │   │   │   ├── NotificationSettingsPage.jsx
│   │   │   │   └── PrivacySettingsPage.jsx
│   │   │   │
│   │   │   ├── notifications/
│   │   │   │   └── NotificationsPage.jsx
│   │   │   │
│   │   │   └── system/
│   │   │       └── NotFoundPage.jsx
│   │   │
│   │   ├── routes/                  # Route definitions
│   │   │   ├── AppRoutes.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── PublicRoute.jsx
│   │   │
│   │   ├── store/                   # Zustand global state
│   │   │   ├── authStore.js
│   │   │   ├── safetyStore.js
│   │   │   ├── tripStore.js
│   │   │   └── notificationStore.js
│   │   │
│   │   ├── utils/                   # Utility functions
│   │   │   ├── formatDate.js
│   │   │   ├── formatCurrency.js
│   │   │   ├── calculateDistance.js
│   │   │   ├── validateForm.js
│   │   │   └── constants.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env.example
│   ├── .eslintrc.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                          # Node.js + Express Backend
│   │
│   ├── config/
│   │   ├── db.js                    # MongoDB connection
│   │   ├── gemini.js                # Gemini API configuration
│   │   └── googleMaps.js            # Google Maps client setup
│   │
│   ├── controllers/                 # Request handlers
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── trip.controller.js
│   │   ├── safety.controller.js
│   │   ├── guardian.controller.js
│   │   ├── healthcare.controller.js
│   │   ├── gem.controller.js
│   │   ├── search.controller.js
│   │   └── notification.controller.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js       # JWT verification
│   │   ├── validate.middleware.js   # Input validation
│   │   ├── rateLimiter.middleware.js
│   │   ├── upload.middleware.js     # Multer file upload
│   │   └── error.middleware.js      # Global error handler
│   │
│   ├── models/                      # Mongoose schemas
│   │   ├── User.model.js
│   │   ├── Trip.model.js
│   │   ├── Guardian.model.js
│   │   ├── GuardianSession.model.js
│   │   ├── Healthcare.model.js
│   │   ├── Gem.model.js
│   │   ├── Notification.model.js
│   │   ├── Review.model.js
│   │   ├── EmergencyContact.model.js
│   │   └── SOSAlert.model.js
│   │
│   ├── routes/                      # Express route definitions
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── trip.routes.js
│   │   ├── safety.routes.js
│   │   ├── guardian.routes.js
│   │   ├── healthcare.routes.js
│   │   ├── gem.routes.js
│   │   ├── search.routes.js
│   │   └── notification.routes.js
│   │
│   ├── services/                    # Business logic services
│   │   ├── gemini.service.js        # Gemini itinerary generation
│   │   ├── maps.service.js          # Google Maps API calls
│   │   ├── notification.service.js  # Notification dispatch
│   │   ├── safety.service.js        # Safety score calculation
│   │   └── guardian.service.js      # Guardian matching logic
│   │
│   ├── utils/
│   │   ├── generateToken.js         # JWT token generation
│   │   ├── hashPassword.js
│   │   ├── apiResponse.js           # Standardized API response
│   │   ├── buildGeminiPrompt.js     # Prompt builder for Gemini
│   │   └── constants.js
│   │
│   ├── .env.example
│   ├── .eslintrc.js
│   ├── app.js                       # Express app setup
│   ├── server.js                    # Entry point
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 7. Installation Guide

### Prerequisites

Make sure the following are installed on your machine before you begin:

| Tool | Version | Download |
|---|---|---|
| Node.js | 20.x LTS or higher | [nodejs.org](https://nodejs.org) |
| npm | 10.x or higher | Comes with Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com) |
| MongoDB Compass | Latest | [mongodb.com/compass](https://www.mongodb.com/products/compass) |

You will also need accounts and API keys for:

- [MongoDB Atlas](https://cloud.mongodb.com) — free tier is sufficient
- [Google Cloud Console](https://console.cloud.google.com) — for Maps, Places, Geocoding, Distance Matrix APIs
- [Google AI Studio](https://aistudio.google.com) — for Gemini API key

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/himmatmundhe07/myItnary.git
cd myItnary
```

---

### Step 2 — Set Up the Backend

```bash
# Navigate to the server directory
cd server

# Install all dependencies
npm install

# Create your environment file from the example
cp .env.example .env
```

Open `server/.env` and fill in your values:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myitnary?retryWrites=true&w=majority

# JWT Secrets
JWT_ACCESS_SECRET=your_super_secret_access_key_here_minimum_32_characters
JWT_REFRESH_SECRET=your_super_secret_refresh_key_here_minimum_32_characters
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# Google APIs
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GOOGLE_PLACES_API_KEY=your_google_places_api_key
GOOGLE_GEOCODING_API_KEY=your_google_geocoding_api_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Client URL (for CORS)
CLIENT_URL=http://localhost:5173
```

```bash
# Start the development server
npm run dev
```

The backend will run at `http://localhost:5000`

---

### Step 3 — Set Up the Frontend

Open a new terminal window:

```bash
# Navigate to the client directory
cd client

# Install all dependencies
npm install

# Create your environment file
cp .env.example .env
```

Open `client/.env` and fill in your values:

```env
# API Base URL
VITE_API_BASE_URL=http://localhost:5000/api

# Google Maps (public key — restricted to your domain)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

```bash
# Start the development server
npm run dev
```

The frontend will run at `http://localhost:5173`

---

### Step 4 — Set Up MongoDB

**Option A — MongoDB Atlas (Recommended):**

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) and create a free account
2. Create a new cluster (free M0 tier is sufficient for development)
3. Click `Connect` → `Connect your application`
4. Copy the connection string and paste it as `MONGODB_URI` in `server/.env`
5. Under `Database Access`, create a database user with read/write permissions
6. Under `Network Access`, add your IP address (or `0.0.0.0/0` for development)

**Option B — Local MongoDB:**

```bash
# Install MongoDB Community Edition
# Follow the guide for your OS at docs.mongodb.com

# Start MongoDB locally
mongod

# Use this as your MONGODB_URI
MONGODB_URI=mongodb://localhost:27017/myitnary
```

---

### Step 5 — Enable Google APIs

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project called `myitnary`
3. Go to `APIs and Services` → `Library`
4. Enable the following APIs one by one:
   - Maps JavaScript API
   - Places API
   - Geocoding API
   - Distance Matrix API
5. Go to `APIs and Services` → `Credentials`
6. Create an API key
7. Restrict the key to your development domain for security

---

### Step 6 — Get Gemini API Key

1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Click `Get API Key` → `Create API key`
4. Copy the key and paste it as `GEMINI_API_KEY` in `server/.env`

---

### Step 7 — Verify Everything is Running

Open your browser and go to:
- Frontend: `http://localhost:5173` — You should see the My Itinerary landing page
- Backend health check: `http://localhost:5000/api/health` — You should see `{ "status": "ok", "message": "My Itinerary API is running" }`

---

### Running Both Servers Simultaneously (Optional)

Install `concurrently` in the root directory:

```bash
# In the root myItnary/ directory
npm init -y
npm install concurrently --save-dev
```

Add to root `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm run dev\"",
    "install:all": "cd server && npm install && cd ../client && npm install"
  }
}
```

Then run both with:

```bash
npm run dev
```

---

## 8. Usage Guide

### For a Traveler (End User)

**1. Create Your Account**
- Visit the app and click `Create Account`
- Complete 3-step sign-up: Basic Info → Travel Preferences → Safety Setup
- Add at least one emergency contact during Step 3
- Verify your phone number with OTP

**2. Complete Onboarding**
- Read the safety feature introduction
- Allow location and notification permissions — these are required for the guardian network and SOS to function

**3. Check Your Safety Dashboard**
- The Safety Status Card on your Home Dashboard shows your real-time protection status
- A green `Protected` indicator means your location is shared, a guardian is nearby, and SOS is armed
- A red `Inactive` indicator means you need to enable location access

**4. Plan a Trip**
- Go to `Trips` in the bottom navigation
- Tap the `+` icon to create a new trip
- Step 1: Search and select your destination
- Step 2: Set your travel dates, group size, and total budget
- Step 3: Select your interests and safety preferences
- Tap `Generate My Itinerary` — Gemini AI builds your day-by-day plan with real cost estimates

**5. Find a Guardian**
- Go to the `Safety` tab (center button in the navigation bar)
- Tap `Guardian Network`
- Filter by city, language, and gender preference
- View a guardian's full profile — experience, reviews, credentials, response time
- Tap `Request Guardian` and fill in your location, time, and duration

**6. Activate SOS**
- Tap the `Safety` button in the center of the bottom navigation bar from any screen
- Tap the red `SOS` button
- Your location is immediately broadcast to all emergency contacts
- The nearest available guardian is automatically assigned

**7. Find Healthcare**
- Go to `Healthcare` from the Home Dashboard or bottom navigation
- Search by specialty, language, or location
- View doctor profiles with verified credentials, cost estimates, and patient reviews
- Book a consultation or get directions directly

**8. Discover Hidden Gems**
- Go to `Explore` in the bottom navigation
- Browse by category or search for a specific place
- Read insider tips, how to get there, gallery, and nearby spots
- Save any gem directly to your active trip

---

### For a Developer

**Running Tests:**
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

**Building for Production:**
```bash
# Build frontend
cd client
npm run build

# The dist/ folder contains the production build
# Serve it with any static file server
```

**Linting:**
```bash
# Backend
cd server
npm run lint

# Frontend
cd client
npm run lint
```

---

## 9. Screenshots

> The complete UI design for My Itinerary — all 36 screens — is available in Figma.

**Figma Design File:** [View Complete Figma Design]([https://www.figma.com/design/your-figma-link-here](https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=544-1907&t=TbFlAKX2Bwqk5ct9-1))

## Design Overview

| Section | Preview |
|--------|--------|
| Landing Page | ![](https://github.com/user-attachments/assets/76d66782-c1bc-47bc-9a77-2b67692381f6) |
| Auth Flow | ![](https://github.com/user-attachments/assets/e531bd11-a811-4e56-8424-23b1d5bef303) |
| Onboarding | ![](https://github.com/user-attachments/assets/98fbe365-50d7-4b6f-a735-af20eda1fd81) |
| Core App | ![](https://github.com/user-attachments/assets/8fe2725f-1f1b-4754-8f79-caec31bb74d4) |
| Healthcare | ![](https://github.com/user-attachments/assets/b58fdc20-9113-497e-b3da-2df9c14915ab) |


> Screenshots will be added here once the development build is complete.

---

## 10. API Documentation

All API endpoints require a `Content-Type: application/json` header.

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <your_access_token>
```

All responses follow this standard format:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE"
}
```

---

### Authentication Routes — `/api/auth`

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "fullName": "Priya Venkatesh",
  "email": "priya.v@example.com",
  "phone": "9876543210",
  "password": "SecurePass@123",
  "travelType": ["solo", "backpacking"],
  "travelerGender": "woman",
  "emergencyContact": {
    "name": "Meera Venkatesh",
    "phone": "9876543211",
    "relationship": "Mother"
  }
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "fullName": "Priya Venkatesh",
      "email": "priya.v@example.com"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

#### POST `/api/auth/login`
Authenticate an existing user.

**Request Body:**
```json
{
  "email": "priya.v@example.com",
  "password": "SecurePass@123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { "_id": "...", "fullName": "Priya Venkatesh", "email": "..." },
    "accessToken": "eyJ...",
    "refreshToken": "eyJ..."
  }
}
```

---

#### POST `/api/auth/verify-otp`
Verify phone number with OTP.

**Request Body:**
```json
{
  "phone": "9876543210",
  "otp": "482931"
}
```

---

#### POST `/api/auth/forgot-password`
Send a password reset link to email.

**Request Body:**
```json
{
  "email": "priya.v@example.com"
}
```

---

#### POST `/api/auth/reset-password`
Reset the password using a token from the email link.

**Request Body:**
```json
{
  "token": "reset_token_from_email",
  "newPassword": "NewSecurePass@456"
}
```

---

#### POST `/api/auth/refresh-token`
Get a new access token using a refresh token.

**Request Body:**
```json
{
  "refreshToken": "eyJ..."
}
```

---

#### POST `/api/auth/logout`
🔒 Protected. Invalidate the current session.

---

### Trip Routes — `/api/trips`

#### POST `/api/trips/generate`
🔒 Protected. Generate an AI-powered itinerary using Gemini API.

**Request Body:**
```json
{
  "destination": "Jaisalmer, Rajasthan",
  "startDate": "2025-05-10",
  "endDate": "2025-05-15",
  "totalBudget": 15000,
  "totalTravelers": 1,
  "accommodationType": "guesthouse",
  "interests": ["heritage", "food", "photography"],
  "travelVibe": "slow-travel",
  "dietaryPreference": "vegetarian",
  "safetyPreferences": {
    "womenOnlyGuardians": true,
    "realTimeAlerts": true,
    "shareLocation": true
  }
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Itinerary generated successfully",
  "data": {
    "trip": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
      "name": "Jaisalmer Explorer",
      "destination": "Jaisalmer, Rajasthan",
      "startDate": "2025-05-10",
      "endDate": "2025-05-15",
      "totalDays": 5,
      "totalBudget": 15000,
      "safetyScore": 87,
      "itinerary": [
        {
          "day": 1,
          "date": "2025-05-10",
          "activities": [
            {
              "time": "09:00",
              "name": "Jaisalmer Fort",
              "description": "Explore the living fort...",
              "category": "heritage",
              "estimatedCost": 50,
              "duration": "2.5 hours",
              "location": { "lat": 26.9124, "lng": 70.9124 }
            }
          ],
          "safetyNotes": {
            "nearestHospital": "MG Hospital, 2.3 km",
            "guardianAvailable": true,
            "emergencyNumber": "1363"
          }
        }
      ]
    }
  }
}
```

---

#### GET `/api/trips`
🔒 Protected. Get all trips for the authenticated user.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| status | string | `upcoming` `active` `past` |
| page | number | Page number (default: 1) |
| limit | number | Results per page (default: 10) |

---

#### GET `/api/trips/:tripId`
🔒 Protected. Get a specific trip by ID.

---

#### PUT `/api/trips/:tripId`
🔒 Protected. Update trip details.

---

#### DELETE `/api/trips/:tripId`
🔒 Protected. Delete a trip.

---

### Safety Routes — `/api/safety`

#### POST `/api/safety/sos`
🔒 Protected. Activate an SOS emergency alert.

**Request Body:**
```json
{
  "latitude": 26.9124,
  "longitude": 70.9124,
  "address": "Sadar Bazaar, Jodhpur, Rajasthan"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "SOS alert activated",
  "data": {
    "sosId": "64f8a1b2c3d4e5f6a7b8c9d2",
    "contactsAlerted": 3,
    "assignedGuardian": {
      "_id": "...",
      "name": "Anjali Gupta",
      "phone": "9876543212",
      "estimatedArrival": "4 minutes"
    },
    "activatedAt": "2025-05-09T10:30:00.000Z"
  }
}
```

---

#### DELETE `/api/safety/sos/:sosId`
🔒 Protected. Cancel an active SOS alert (sends all-clear to contacts).

---

#### GET `/api/safety/score`
🔒 Protected. Get the safety score for a location.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| lat | number | Latitude |
| lng | number | Longitude |

---

#### GET `/api/safety/emergency-contacts`
🔒 Protected. Get all emergency contacts for the authenticated user.

---

#### POST `/api/safety/emergency-contacts`
🔒 Protected. Add a new emergency contact.

**Request Body:**
```json
{
  "name": "Meera Venkatesh",
  "phone": "9876543211",
  "relationship": "Mother"
}
```

---

#### DELETE `/api/safety/emergency-contacts/:contactId`
🔒 Protected. Remove an emergency contact.

---

### Guardian Routes — `/api/guardians`

#### GET `/api/guardians`
🔒 Protected. Get available guardians near a location.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| lat | number | Latitude (required) |
| lng | number | Longitude (required) |
| city | string | Filter by city name |
| language | string | Filter by language spoken |
| gender | string | `woman` `man` |
| radius | number | Search radius in km (default: 20) |

---

#### GET `/api/guardians/:guardianId`
🔒 Protected. Get a guardian's full profile.

---

#### POST `/api/guardians/request`
🔒 Protected. Send a guardian request.

**Request Body:**
```json
{
  "guardianId": "64f8a1b2c3d4e5f6a7b8c9d3",
  "location": "Old City, Jodhpur, Rajasthan",
  "latitude": 26.2389,
  "longitude": 73.0243,
  "scheduledDate": "2025-05-10",
  "scheduledTime": "14:00",
  "duration": "2",
  "notes": "Arriving late night, need help navigating to my guesthouse."
}
```

---

#### GET `/api/guardians/sessions`
🔒 Protected. Get all guardian sessions for the user.

---

### Healthcare Routes — `/api/healthcare`

#### GET `/api/healthcare/doctors`
Search for doctors and clinics.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| lat | number | Latitude |
| lng | number | Longitude |
| specialty | string | Medical specialty |
| language | string | Language spoken |
| isOpenNow | boolean | Filter for currently open |
| maxCost | number | Maximum consultation fee |
| radius | number | Search radius in km |
| page | number | Pagination |

---

#### GET `/api/healthcare/doctors/:doctorId`
Get full doctor or clinic profile.

---

#### GET `/api/healthcare/hospitals`
Get nearby hospitals using Google Places API.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| lat | number | Latitude (required) |
| lng | number | Longitude (required) |
| radius | number | Radius in km (default: 5) |

---

### Gems Routes — `/api/gems`

#### GET `/api/gems`
Get hidden gems with filtering.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| lat | number | Latitude |
| lng | number | Longitude |
| category | string | `nature` `culture` `heritage` `festival` `food` `adventure` `spiritual` |
| state | string | Indian state name |
| page | number | Pagination |

---

#### GET `/api/gems/:gemId`
Get full hidden gem detail.

---

#### POST `/api/gems/:gemId/save`
🔒 Protected. Save a gem to user's saved places.

---

### Search Routes — `/api/search`

#### GET `/api/search`
🔒 Protected. Global search across all entity types.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| q | string | Search query (required) |
| type | string | `destinations` `guardians` `doctors` `gems` `all` |
| lat | number | User latitude for proximity sorting |
| lng | number | User longitude for proximity sorting |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "destinations": [],
    "guardians": [],
    "doctors": [],
    "gems": []
  }
}
```

---

### Notification Routes — `/api/notifications`

#### GET `/api/notifications`
🔒 Protected. Get all notifications for the user.

**Query Parameters:**
| Parameter | Type | Description |
|---|---|---|
| category | string | `safety` `trips` `healthcare` `account` |
| isRead | boolean | Filter read/unread |
| page | number | Pagination |

---

#### PUT `/api/notifications/:notificationId/read`
🔒 Protected. Mark a notification as read.

---

#### PUT `/api/notifications/read-all`
🔒 Protected. Mark all notifications as read.

---

#### DELETE `/api/notifications/:notificationId`
🔒 Protected. Delete a notification.

---

## 11. Database Schema

### Users Collection

```javascript
{
  _id: ObjectId,
  fullName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true          // bcrypt hashed — never stored plain
  },
  profilePhoto: {
    type: String,           // URL to uploaded photo
    default: null
  },
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ["woman", "man", "prefer-not-to-say"]
  },
  cityOfResidence: String,
  bio: {
    type: String,
    maxLength: 200
  },

  // Travel Identity
  travelStyle: [{
    type: String,
    enum: ["solo", "with-friends", "with-family", "backpacking", "road-trip", "work-travel"]
  }],
  travelFrequency: {
    type: String,
    enum: ["once-a-year", "2-4-times", "monthly", "frequent"]
  },
  regionsOfInterest: [String],
  travelInterests: [String],
  dietaryPreference: {
    type: String,
    enum: ["vegetarian", "non-vegetarian", "vegan", "jain", "no-preference"]
  },
  accommodationPreference: {
    type: String,
    enum: ["budget-hostel", "guesthouse", "mid-range-hotel", "luxury-resort"]
  },

  // Safety Profile
  safetyProfile: {
    travelerType: {
      type: String,
      enum: ["solo-woman", "solo-man", "group-or-couple"]
    },
    medicalInfo: {
      bloodGroup: String,
      allergies: [String],
      conditions: [String],
      medications: [String]
    },
    womenOnlyGuardians: {
      type: Boolean,
      default: false
    }
  },

  // Settings
  settings: {
    notifications: {
      push: { type: Boolean, default: true },
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: true },
      quietHours: {
        enabled: { type: Boolean, default: false },
        startTime: { type: String, default: "22:00" },
        endTime: { type: String, default: "07:00" }
      }
    },
    privacy: {
      profileVisibility: {
        type: String,
        enum: ["guardians-only", "all-users", "private"],
        default: "guardians-only"
      },
      shareLocationWithGuardians: { type: Boolean, default: true },
      shareLocationWithEmergencyContacts: { type: Boolean, default: true },
      locationHistory: { type: Boolean, default: false }
    },
    language: { type: String, default: "en" }
  },

  // Auth
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },
  refreshToken: String,
  passwordResetToken: String,
  passwordResetExpiry: Date,
  otpCode: String,
  otpExpiry: Date,
  lastLogin: Date,

  // Meta
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
}
```

---

### Trips Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  name: { type: String, required: true },   // e.g. "Jaisalmer Explorer"
  destination: { type: String, required: true },
  state: String,
  coordinates: {
    lat: Number,
    lng: Number
  },

  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalDays: Number,
  totalTravelers: { type: Number, default: 1 },
  totalBudget: Number,
  accommodationType: String,

  interests: [String],
  travelVibe: String,
  dietaryPreference: String,

  safetyPreferences: {
    womenOnlyGuardians: Boolean,
    realTimeAlerts: Boolean,
    shareLocation: Boolean
  },

  status: {
    type: String,
    enum: ["upcoming", "active", "completed", "cancelled"],
    default: "upcoming"
  },

  safetyScore: Number,               // 0-100 score for the destination

  itinerary: [{
    day: Number,
    date: Date,
    activities: [{
      time: String,
      name: String,
      description: String,
      category: String,
      estimatedCost: Number,
      duration: String,
      location: { lat: Number, lng: Number },
      address: String,
      photoUrl: String,
      tags: [String]
    }],
    safetyNotes: {
      nearestHospital: String,
      hospitalDistance: String,
      guardianAvailable: Boolean,
      emergencyNumber: String
    },
    totalDayCost: Number
  }],

  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
}
```

---

### Guardians Collection

```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  email: String,
  phone: { type: String, required: true },
  profilePhoto: String,
  gender: { type: String, enum: ["woman", "man"] },

  location: {
    city: { type: String, required: true },
    state: String,
    coordinates: { lat: Number, lng: Number }
  },

  languages: [String],

  bio: { type: String, maxLength: 500 },

  credentials: {
    isBackgroundVerified: { type: Boolean, default: false },
    isIdVerified: { type: Boolean, default: false },
    isFirstAidCertified: { type: Boolean, default: false },
    verifiedAt: Date
  },

  availability: {
    startTime: String,           // e.g. "07:00"
    endTime: String,             // e.g. "22:00"
    availableDays: [String]      // ["monday", "tuesday", ...]
  },

  stats: {
    totalSessions: { type: Number, default: 0 },
    averageResponseTime: Number, // in minutes
    satisfactionRate: Number,    // 0-100
    averageRating: { type: Number, default: 0 }
  },

  isActive: { type: Boolean, default: true },
  isAvailableNow: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now }
}
```

---

### Guardian Sessions Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  guardianId: { type: ObjectId, ref: "Guardian", required: true },

  requestedLocation: String,
  coordinates: { lat: Number, lng: Number },
  scheduledDate: Date,
  scheduledTime: String,
  duration: String,
  notes: String,

  status: {
    type: String,
    enum: ["pending", "accepted", "active", "completed", "cancelled", "declined"],
    default: "pending"
  },

  isSOSTriggered: { type: Boolean, default: false },
  sosAlertId: { type: ObjectId, ref: "SOSAlert" },

  startedAt: Date,
  completedAt: Date,
  createdAt: { type: Date, default: Date.now }
}
```

---

### SOS Alerts Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  assignedGuardianId: { type: ObjectId, ref: "Guardian" },

  location: {
    address: String,
    coordinates: { lat: Number, lng: Number }
  },

  contactsAlerted: [{
    contactId: { type: ObjectId, ref: "EmergencyContact" },
    name: String,
    phone: String,
    alertSentAt: Date,
    status: { type: String, enum: ["sending", "sent", "failed"] }
  }],

  status: {
    type: String,
    enum: ["active", "resolved", "cancelled"],
    default: "active"
  },

  resolvedAt: Date,
  cancelledAt: Date,
  allClearSentAt: Date,
  activatedAt: { type: Date, default: Date.now }
}
```

---

### Healthcare Collection

```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["doctor", "clinic", "hospital"],
    required: true
  },
  specialty: String,
  qualifications: String,

  location: {
    address: { type: String, required: true },
    city: String,
    state: String,
    coordinates: { lat: Number, lng: Number }
  },

  contact: {
    phone: String,
    email: String,
    website: String
  },

  consultationFee: {
    min: Number,
    max: Number,
    currency: { type: String, default: "INR" }
  },

  operatingHours: {
    monday: { open: String, close: String },
    tuesday: { open: String, close: String },
    wednesday: { open: String, close: String },
    thursday: { open: String, close: String },
    friday: { open: String, close: String },
    saturday: { open: String, close: String },
    sunday: { open: String, close: String }
  },

  languagesSpoken: [String],

  verification: {
    isVerified: { type: Boolean, default: false },
    verifiedAt: Date
  },

  stats: {
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 }
  },

  photoUrl: String,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}
```

---

### Gems Collection

```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  tagline: String,
  description: { type: String, required: true },

  location: {
    address: String,
    city: String,
    district: String,
    state: { type: String, required: true },
    region: {
      type: String,
      enum: ["north", "south", "east", "west", "northeast", "himalayan", "coastal", "central"]
    },
    coordinates: { lat: Number, lng: Number }
  },

  category: {
    type: String,
    enum: ["nature", "culture", "heritage", "festival", "food", "adventure", "spiritual"],
    required: true
  },

  vibeTags: [String],           // e.g. ["Remote", "Peaceful", "Altitude"]

  visitInfo: {
    bestTimeToVisit: String,
    entryFee: String,
    recommendedDuration: String,
    openingHours: String
  },

  gettingThere: {
    byRoad: String,
    byBus: String,
    byTrain: String,
    byAir: String,
    recommendedMode: String
  },

  insiderTips: [String],

  gallery: [String],            // Array of photo URLs

  submittedBy: {
    type: String,
    enum: ["editorial", "community"],
    default: "editorial"
  },
  submittedByUserId: { type: ObjectId, ref: "User" },

  stats: {
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    saves: { type: Number, default: 0 }
  },

  isVerified: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}
```

---

### Emergency Contacts Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  relationship: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}
```

---

### Notifications Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: {
    type: String,
    enum: ["safety", "trips", "healthcare", "account"],
    required: true
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "critical"],
    default: "medium"
  },
  isRead: { type: Boolean, default: false },
  actions: [{
    label: String,
    actionType: String,
    actionPayload: String
  }],
  relatedEntityId: ObjectId,
  relatedEntityType: String,
  createdAt: { type: Date, default: Date.now }
}
```

---

### Reviews Collection

```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  entityId: { type: ObjectId, required: true },
  entityType: {
    type: String,
    enum: ["guardian", "doctor", "gem"],
    required: true
  },
  rating: { type: Number, min: 1, max: 5, required: true },
  body: { type: String, required: true, maxLength: 500 },
  createdAt: { type: Date, default: Date.now }
}
```

---

## 12. Future Improvements

### Phase 2 — Real Guardian Network

The MVP uses simulated guardian data. Phase 2 will build a full guardian onboarding and verification system including:

- Guardian application portal with multi-step background check consent
- Integration with a third-party background verification API
- Guardian dashboard for managing requests, active sessions, and earnings
- Real-time guardian location tracking during active sessions
- Guardian rating and review system that affects their visibility in search results
- Guardian reward program — badges, leaderboards, and eventual monetization

### Phase 3 — Real-Time Features

- WebSocket integration (Socket.io) for live SOS tracking and guardian location updates
- Live safety alert broadcasting using real news feeds and government APIs
- Real-time guardian session chat between traveler and guardian
- Live location sharing with emergency contacts during SOS

### Phase 4 — Expanded Healthcare

- Partnerships with verified hospital networks across India
- Online consultation booking with payment integration
- Prescription management and medical history sync
- Telemedicine integration for remote locations

### Phase 5 — AI Enhancements

- Personalized safety score prediction using travel history and ML models
- Natural language trip planning via conversational Gemini chat interface
- Predictive danger alerts based on time, location, and event patterns
- Sentiment analysis of traveler reviews to detect emerging safety issues

### Phase 6 — Utility Expansion

- Real powerbank kiosk network integration with pickup and drop-off
- Verified WiFi speed testing and reporting
- Offline-first mode — full itinerary and safety guide available without internet
- Integration with Indian Railway (IRCTC) and bus booking APIs

### Phase 7 — International Expansion

- Multi-language interface starting with Hindi, Tamil, Telugu, and Bengali
- International tourist mode — English-first with currency and visa info
- ISO 27001 compliance for data security in preparation for international markets

---

## 13. Challenges Faced

### Challenge 1 — Defining the Core Identity

The biggest early challenge was resisting the temptation to build another trip planner. The pivot to "travel safety infrastructure" required rewriting the problem statement multiple times before the positioning felt genuinely differentiated from MakeMyTrip, Google Maps, and TripAdvisor.

**How it was resolved:** Anchoring every feature decision to one question — *does this make the traveler safer?* — eliminated feature creep and kept the product focused.

---

### Challenge 2 — Guardian Network Trust Problem

A guardian network is only as valuable as the trust users place in it. A single bad incident would destroy the product's reputation. The challenge is that real background verification is expensive, slow, and legally complex.

**How it was resolved for MVP:** The MVP simulates the guardian network with mock data and UI flows. The trust and verification system will be built in Phase 2 with proper legal and operational infrastructure before going live with real users.

---

### Challenge 3 — Gemini Prompt Engineering for Itinerary Quality

Getting Gemini to generate itineraries that are genuinely useful — with real Indian places, accurate distances, realistic costs in rupees, and culturally appropriate recommendations — required significant prompt engineering work.

**How it was resolved:** The `buildGeminiPrompt.js` utility constructs a highly structured prompt that provides destination context, user constraints, budget breakdowns per category, and output format specifications in JSON. The response is then enriched with real data from the Google Places API.

---

### Challenge 4 — Location Sensitivity and Privacy

Sharing a user's live location is the most privacy-sensitive feature in the product. Users — especially solo women travelers — needed to trust that their location data would not be misused, sold, or exposed.

**How it was resolved:** Location data is never stored in the database in real time. It is used ephemerally for guardian matching and SOS alerts only. Emergency contacts receive a one-time location snapshot at SOS activation, not continuous tracking. This is communicated clearly in the permissions onboarding screen and privacy settings.

---

### Challenge 5 — Designing 36 Screens for a Safety-Critical Product

Most design systems optimize for beauty or engagement. My Itinerary's design had to optimize for trust and clarity — particularly for the SOS screen, which a user might need to operate in a high-stress situation.

**How it was resolved:** The SOS screen uses a full Sindoor Red background, a single action, and maximum contrast — the design is intentionally unlike every other screen in the app. The persistent center Safety button in the bottom navigation ensures SOS is always reachable within one tap from any screen.

---

## 14. Contributing

This is a college project maintained by a single developer. Contributions, suggestions, and feedback are genuinely welcome.

### How to Contribute

```bash
# 1. Fork the repository
# Go to https://github.com/himmatmundhe07/myItnary and click Fork

# 2. Clone your fork
git clone https://github.com/your-username/myItnary.git
cd myItnary

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
# Follow the existing code style and folder structure

# 5. Commit with a clear message
git commit -m "feat: add guardian rating system"

# 6. Push to your fork
git push origin feature/your-feature-name

# 7. Open a Pull Request
# Go to the original repository and open a PR from your branch
```

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use For |
|---|---|
| `feat:` | A new feature |
| `fix:` | A bug fix |
| `docs:` | Documentation changes |
| `style:` | Code formatting, no logic changes |
| `refactor:` | Code restructuring, no feature change |
| `test:` | Adding or fixing tests |
| `chore:` | Build process, dependencies |

### Reporting Issues

Use [GitHub Issues](https://github.com/himmatmundhe07/myItnary/issues) to report bugs or request features. Please include:
- A clear description of the issue
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

### Code Style

- **JavaScript:** Follow the ESLint configuration in the repository
- **React:** Functional components only, no class components
- **Naming:** camelCase for variables and functions, PascalCase for components
- **Files:** One component per file, file name matches component name

---

## 15. License

```
MIT License

Copyright (c) 2025 Himmat Mundhe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 16. Author

<div align="center">

### Himmat Mundhe

**Full Stack Developer · UI/UX Designer · College Student**

*Designed 36 screens in Figma, architected the full system, and built the complete product solo.*

[![GitHub](https://img.shields.io/badge/GitHub-himmatmundhe07-1E1410?style=flat-square&logo=github)](https://github.com/himmatmundhe07)

---

**My Itinerary** is a college project built with the belief that technology should make travel in India safer for everyone — especially those who travel alone.

> *"Travel Freely. Stay Safe."*

</div>

---

<div align="center">

Made with care for every solo traveler in India.

⭐ If this project helped you or inspired you, consider starring the repository.

[Report Bug](https://github.com/himmatmundhe07/myItnary/issues) · [Request Feature](https://github.com/himmatmundhe07/myItnary/issues) · [View Figma]([https://figma.com](https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=544-1907&t=TbFlAKX2Bwqk5ct9-1))

</div>
