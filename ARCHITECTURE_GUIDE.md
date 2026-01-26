# TinkerHub CEKnpy - Architecture & Data Flow

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    BROWSER / CLIENT SIDE                     │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                    React Application                      ││
│  │  ┌─────────────────────────────────────────────────────┐││
│  │  │              App.jsx (Router Setup)                  │││
│  │  ├──────────────────────────────────────────────────────┤││
│  │  │  <Routes>                                             │││
│  │  │    ├─ / → HomePage                                    │││
│  │  │    ├─ /about → AboutPage                              │││
│  │  │    ├─ /team → TeamPage                                │││
│  │  │    ├─ /events → EventsPage                            │││
│  │  │    ├─ /projects → ProjectPage                         │││
│  │  │    ├─ /top-makers → TopMakersPage                     │││
│  │  │    ├─ /makers/:slug → MakerProfilePage                │││
│  │  │    ├─ /contact → ContactPage                          │││
│  │  │    └─ * → ErrorPage                                   │││
│  │  └──────────────────────────────────────────────────────┘││
│  │                                                            ││
│  │  ┌──────────────────────────────────────────────────────┐││
│  │  │            Layout (Wrapper for all pages)             │││
│  │  ├──────────────────┬──────────────────┬────────────────┤││
│  │  │    Navbar        │   Page Content   │    Footer       │││
│  │  │  (Navigation)    │   (Dynamic)      │  (Links/Info)   │││
│  │  └──────────────────┴──────────────────┴────────────────┘││
│  └─────────────────────────────────────────────────────────┘│
│                                                               │
└─────────────────────────────────────────────────────────────┘
         ↓ Uses Data From ↓
┌─────────────────────────────────────────────────────────────┐
│              DATA LAYER (JSON Objects)                        │
│  ┌─────────────┐ ┌────────────┐ ┌──────────┐                │
│  │  events.js  │ │  team.js   │ │makers.js │                │
│  │  (Events)   │ │  (Members) │ │(Profiles)│                │
│  └─────────────┘ └────────────┘ └──────────┘                │
│                                                               │
│  ┌──────────────┐ ┌──────────────┐ ┌───────────┐            │
│  │ projects.js  │ │  history.js  │ │contact.js │            │
│  │ (Showcase)   │ │ (Timeline)   │ │(Links)    │            │
│  └──────────────┘ └──────────────┘ └───────────┘            │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Component Dependency Tree

```
App.jsx (Root)
│
└─ Routes (React Router)
   │
   ├─ Layout (Master Component)
   │  ├─ Navbar.jsx
   │  │  └─ NavLink × 7
   │  ├─ Page Content (Children)
   │  │  └─ [Various Page Components]
   │  └─ Footer.jsx
   │
   ├─ HomePage
   │  ├─ AnnouncementBanner
   │  ├─ StatsPills
   │  └─ PastEventsPreview
   │     └─ EventCard
   │
   ├─ AboutPage
   │  └─ YearAccordion
   │     └─ Year Items (Team, Projects)
   │
   ├─ TeamPage
   │  └─ TeamGrid
   │     └─ TeamCard × N
   │
   ├─ EventsPage
   │  ├─ EventSection
   │  │  └─ EventCard × N
   │  └─ (Repeated for: Upcoming, Flagship, Past)
   │
   ├─ ProjectPage
   │  ├─ ProjectFilterBar
   │  ├─ ProjectCard × N (Featured)
   │  └─ ProjectCard × N (All)
   │
   ├─ TopMakersPage
   │  └─ MakerGrid
   │     └─ MakerCard × N
   │
   ├─ MakerProfilePage
   │  ├─ [Maker Hero Section]
   │  ├─ [Bio & Details]
   │  ├─ [Related Projects]
   │  └─ [Social Links]
   │
   ├─ ContactPage
   │  ├─ [Contact Form - MISSING]
   │  ├─ [Contact Info Display]
   │  └─ [Map - MISSING]
   │
   └─ ErrorPage
      └─ [404 Display]
```

---

## 🔄 Data Flow Diagrams

### Team Page Data Flow
```
team.js (Data)
     ↓
   CURRENT_TEAM array
     ↓
  TeamPage.jsx
     ↓
  <TeamGrid makers={CURRENT_TEAM} />
     ↓
  TeamGrid.jsx (Maps array)
     ↓
  TeamCard × 5
     ↓
  Display: Name, Role, Avatar, Socials
```

### Projects Page Data Flow with Filtering
```
projects.js (Data)
     ↓
  FEATURED_PROJECTS + ALL_PROJECTS
     ↓
  ProjectPage.jsx
     ↓
  useState(activeTag)
     ↓
  ProjectFilterBar (User selects tag)
     ↓
  useMemo - Filter projects by tag
     ↓
  ProjectCard × N (Filtered)
     ↓
  Display filtered results
```

### History Timeline Data Flow
```
history.js (Data)
     ↓
  CEKNPY_JOURNEY array (2021-2025)
     ↓
  AboutPage.jsx
     ↓
  <YearAccordion journey={CEKNPY_JOURNEY} />
     ↓
  YearAccordion.jsx (Maps years)
     ↓
  Accordion Items × 5 (One per year)
     ↓
  User clicks → Year expands
     ↓
  Show: Team, Highlights, Top Projects
```

### Maker Profile Navigation
```
TopMakersPage
     ↓
MakerCard (slug: "abhijith-b")
     ↓
Click → Navigate to /makers/abhijith-b
     ↓
MakerProfilePage.jsx
     ↓
useParams() → Extract slug
     ↓
Find maker from makers.js
     ↓
Display full profile, projects, links
```

---

## 📁 File Organization & Responsibilities

### `/src/pages/` - Route Components
**Each file = One page/route**
- 9 files total
- Handle layout for that page
- Import & compose reusable components
- Connect to data files
- Pass data as props down to components

### `/src/components/` - Reusable UI Blocks
**Organized by feature area:**
- `Layout.jsx` - Master wrapper (Navbar + Footer)
- `Navbar.jsx` - Navigation menu
- `Footer.jsx` - Page footer
- `/home/` - 3 homepage-specific components
- `/about/` - 1 timeline component
- `/events/` - 2 event components
- `/projects/` - 2 project components
- `/team/` - 2 team layout components
- `/makers/` - 2 maker gallery components

**Total: 20+ components**

### `/src/data/` - Content & Configuration
**Each file = Domain data**
- `events.js` - All event data
- `team.js` - Team member data
- `makers.js` - Maker profiles
- `projects.js` - Project showcase
- `history.js` - Campus journey
- `contact.js` - Contact info

**Easy to update without touching code!**

### `/src/` - Global Setup
- `App.jsx` - Router configuration
- `main.jsx` - React entry point
- `App.css`, `index.css` - Global styles

---

## 🎨 Styling Architecture

### CSS Layers
```
1. Tailwind Base Styles
   (Reset + default styles)
   ↓
2. Global CSS (index.css, App.css)
   (Custom variables, global rules)
   ↓
3. Component Classes
   (Tailwind utility classes in JSX)
   ↓
4. Animations
   (Framer Motion for dynamic effects)
```

### Tailwind Custom Colors (Inferred)
```javascript
- thDark      // Dark text/backgrounds
- thPurple    // Primary color
- thGreen     // Accent/success
- thCyan      // Secondary accent
- Gray shades // Neutral text
```

### Responsive Breakpoints
```
- Mobile: < 640px (default)
- sm: ≥ 640px
- md: ≥ 768px
- lg: ≥ 1024px (used for some grids)
```

---

## 🔐 State Management

### Current State Management
```
App.jsx (Global Navigation)
│
└─ Individual Page State
   ├─ ProjectPage
   │  └─ useState(activeTag) - Filter state
   │
   └─ Navbar
      └─ useState(open) - Mobile menu state
```

### No Global State Library Yet
- ✅ Simple for current size
- ⚠️ May need Context API or Redux if app grows
- 🔄 Props passed down from pages to components

---

## 🚀 Build & Deployment Pipeline

```
Source Code (Git)
     ↓
npm install
     ↓
npm run dev    OR    npm run build
     ↓              ↓
Dev Server      Production Build
(Hot Reload)    (Optimized dist/)
     ↓              ↓
localhost:5173      dist/ folder
                    ↓
                Deployed to:
                ├─ Vercel
                ├─ Netlify
                ├─ GitHub Pages
                └─ Other hosting
```

### Build Configuration
- **Vite** - Fast build tool
- **React Plugin** - Handles JSX transformation
- **Tailwind** - CSS processing
- **PostCSS** - CSS transformations

---

## 📦 Dependencies Overview

### Production Dependencies
```
react              v19.2.0   → UI library
react-dom          v19.2.0   → DOM rendering
react-router-dom   v7.10.1   → Client-side routing
framer-motion      v12.23.25 → Animations
@splinetool/*      v4.1.0    → 3D graphics
@vercel/analytics  v1.6.1    → Usage tracking
```

### Dev Dependencies
```
@vitejs/*          → Build tool plugins
tailwindcss        → Styling
postcss            → CSS processing
eslint             → Code quality
autoprefixer       → CSS vendor prefixes
```

---

## 🎯 Key Design Patterns Used

### 1. **Component Composition**
```jsx
<Layout>
  <Page>
    <Section>
      <Card />
      <Card />
    </Section>
  </Page>
</Layout>
```

### 2. **Data-Driven Rendering**
```jsx
{data.map(item => <Card item={item} />)}
```

### 3. **Props Drilling**
```jsx
<Page data={data}>
  <Component data={data}>
    <SubComponent data={data} />
  </Component>
</Page>
```

### 4. **Controlled Components**
```jsx
const [activeTag, setActiveTag] = useState("All");
<FilterBar onChange={setActiveTag} />
<Projects filter={activeTag} />
```

### 5. **Route-Based Code Splitting**
```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
</Routes>
```

---

## 🔍 Performance Considerations

### Current State
- ✅ Modular components reduce re-renders
- ✅ Data in separate files (easy caching)
- ⚠️ No lazy loading yet
- ⚠️ No code splitting
- ⚠️ No image optimization

### Future Optimizations
```javascript
// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Use useMemo for expensive computations
const filtered = useMemo(() => filter(data), [data]);

// Implement image lazy loading
<img loading="lazy" src={url} alt="" />
```

---

## 🧪 Testing Strategy (If Added)

### Recommended Testing Structure
```
src/
├── components/
│  ├── Navbar.jsx
│  └── __tests__/
│     └── Navbar.test.jsx
├── pages/
│  ├── HomePage.jsx
│  └── __tests__/
│     └── HomePage.test.jsx
└── data/
   └── __tests__/
      └── team.test.js
```

### Testing Tools
- **Vitest** - Fast unit test runner
- **React Testing Library** - Component testing
- **Playwright/Cypress** - E2E testing

---

## 🔐 Security Considerations

### Current Safeguards
- ✅ No sensitive data exposed
- ✅ Static site (no backend vulnerabilities)
- ⚠️ Contact form needs validation
- ⚠️ User inputs need sanitization (if added)

### Future Security Needs
```javascript
// Input validation
import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10)
});

// CSRF protection
// Rate limiting
// Content Security Policy headers
```

---

## 📈 Scalability Roadmap

### Current (Small)
- Static data files
- No backend
- Single SPA

### Phase 2 (Medium)
- Backend API (Node/Django)
- Database (MongoDB/PostgreSQL)
- Admin dashboard

### Phase 3 (Large)
- Microservices
- CDN for static assets
- Real-time features (WebSocket)
- Mobile app

---

**Last Updated:** January 2026  
**Audience:** Developers & Contributors  
**Status:** Architecture ready for expansion
