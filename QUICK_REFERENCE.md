# TinkerHub CEKnpy - Quick Reference Guide

## 🗂️ Directory Structure at a Glance

```
src/
├── pages/          → 9 Page Routes
├── components/     → 20+ Reusable Components
├── data/           → 6 Data/Config Files
├── App.jsx         → Main Router
├── main.jsx        → Entry Point
└── styles/         → Global CSS
```

---

## 🌐 Page Map

| Page | Route | Purpose | Status |
|------|-------|---------|--------|
| Home | `/` | Landing & showcase | ✅ Layout done |
| About | `/about` | Campus journey timeline | ⚠️ Needs history data |
| Team | `/team` | Core team members | ⚠️ Missing avatars |
| Events | `/events` | Upcoming & past events | ⚠️ Dates incomplete |
| Projects | `/projects` | Project showcase | ✅ Structure done |
| Top Makers | `/top-makers` | Featured makers | ⚠️ Missing images |
| Maker Profile | `/makers/:slug` | Individual maker | 🔄 Needs routing |
| Contact | `/contact` | Get in touch | ❌ Form missing |
| 404 Error | `/404` | Not found | ✅ Complete |

---

## 📦 Component Hierarchy

```
Layout (Master)
├── Navbar
│   └── NavLink × 7
├── Page Content
│   └── Various Components
└── Footer
```

### Component Tree by Section

**Home:**
- AnnouncementBanner
- StatsPills
- PastEventsPreview

**About:**
- YearAccordion
  └── Year items with team & projects

**Team:**
- TeamGrid
  └── TeamCard × N

**Events:**
- EventSection
  └── EventCard × N

**Projects:**
- ProjectFilterBar
- ProjectCard × N (featured)
- ProjectCard × N (all)

**Top Makers:**
- MakerGrid
  └── MakerCard × N

---

## 🗂️ Data Files Explained

| File | Contains | Status |
|------|----------|--------|
| `team.js` | Core team members & roles | ⚠️ Avatars/links missing |
| `events.js` | Upcoming, flagship, past events | ⚠️ Dates incomplete |
| `makers.js` | Featured makers profiles | ⚠️ Images missing |
| `projects.js` | Featured & all projects | ⚠️ Links missing |
| `history.js` | Campus journey 2021–2025 | ❌ Mostly empty |
| `contact.js` | Contact info & links | ✅ Complete |

---

## 🎯 Feature Status Summary

### ✅ Working (14 items)
- ✅ Routing to all 9 pages
- ✅ Responsive navbar with mobile menu
- ✅ Footer on all pages
- ✅ Project filtering by tags
- ✅ Year accordion for timeline
- ✅ Team member grid layout
- ✅ Maker profile cards
- ✅ Event card display
- ✅ Styling with Tailwind CSS
- ✅ Framer Motion imported
- ✅ Vercel Analytics imported
- ✅ Overall layout & structure
- ✅ Component reusability
- ✅ Data-driven content approach

### ⚠️ Partially Working (8 items)
- ⚠️ Team page (no avatars/links)
- ⚠️ Makers page (no images)
- ⚠️ Projects page (no links)
- ⚠️ Events page (no dates)
- ⚠️ About page (history empty)
- ⚠️ Home page (stats hardcoded)
- ⚠️ Maker profiles (no routing)
- ⚠️ Analytics (not configured)

### ❌ Missing (6 items)
- ❌ Contact form & email
- ❌ All image assets
- ❌ SEO meta tags
- ❌ Dark mode
- ❌ Search functionality
- ❌ Test coverage

---

## 📊 Content Completion Matrix

```
Data Item              | Defined | Images | Links | Verified
-----------------------+---------+--------+-------+----------
Team Members (5)       |    ✅   |   ❌   |  ❌   |    ⚠️
Featured Makers (3)    |    ✅   |   ❌   |  ❌   |    ⚠️
Projects (5+)          |    ✅   |   ❌   |  ❌   |    ⚠️
Events (Upcoming)      |    ⚠️   |   ❌   |  ⚠️   |    ❌
Events (Past)          |    ⚠️   |   ❌   |  ⚠️   |    ❌
Campus History (2021+) |    ❌   |   N/A  |  N/A  |    ❌
Contact Info           |    ✅   |   N/A  |  ✅   |    ✅
```

---

## 🚀 Quick Wins (Easy to Complete)

1. **Update Team Avatars** (15 mins)
   - Find/create profile images
   - Add URLs to `team.js`

2. **Add GitHub/LinkedIn** (10 mins)
   - Fill in `links` fields in `team.js`, `makers.js`

3. **Update Event Dates** (5 mins)
   - Replace "To be announced" in `events.js`

4. **Add Project Links** (10 mins)
   - Add GitHub URLs to `projects.js`

5. **Fill History Data** (30 mins)
   - Populate `history.js` with 2021–2025 data

---

## 🔧 Common Tasks

### Add a New Team Member
```javascript
// In src/data/team.js
{
  name: "Your Name",
  role: "Your Role",
  avatar: "https://example.com/avatar.jpg",
  socials: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
  },
}
```

### Add a New Project
```javascript
// In src/data/projects.js
{
  title: "Project Name",
  type: "Category / Type",
  year: 2024,
  summary: "One-line description",
  tags: ["Tag1", "Tag2"],
  link: "https://github.com/...",
}
```

### Add a New Page
1. Create `/src/pages/YourPage.jsx`
2. Add route to `App.jsx`
3. Add nav link to `Navbar.jsx`

---

## 📈 Development Roadmap

**Week 1:** Fill data gaps
- [ ] History data
- [ ] Upload images
- [ ] Add social links

**Week 2:** Missing features
- [ ] Contact form
- [ ] Maker profile pages
- [ ] SEO setup

**Week 3:** Polish
- [ ] Performance optimization
- [ ] Bug fixes
- [ ] Testing

**Week 4:** Deploy & monitor
- [ ] Deploy to production
- [ ] Monitor analytics
- [ ] Gather feedback

---

## 🎓 Learning Resources

- **React Documentation:** https://react.dev
- **React Router:** https://reactrouter.com
- **Tailwind CSS:** https://tailwindcss.com
- **Vite Guide:** https://vite.dev
- **Framer Motion:** https://www.framer.com/motion

---

## 🔗 Important Links

**Repository Links:**
- TinkerHub Campus: https://tinkerhub.org/campus/2607/
- TinkerHub Main: https://tinkerhub.org
- TinkerHub App: https://app.tinkerhub.org

**Campus Contact:**
- Email: tinkerhub.ceknpy@example.com
- Instagram: @tinkerhub.ceknpy
- LinkedIn: TinkerHub CEKnpy

---

**Last Updated:** January 2026  
**Status:** 🔄 In Development  
**Maintainer:** CEKnpy Development Team
