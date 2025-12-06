import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function Placeholder({ title }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <p className="text-sm text-gray-600">
        This page is coming soon. We will plug in real data and UI next.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage  />} />
        <Route path="/team" element={<Placeholder title="Team" />} />
        <Route path="/events" element={<Placeholder title="Events" />} />
        <Route path="/projects" element={<Placeholder title="Projects" />} />
        <Route path="/top-makers" element={<Placeholder title="Top Makers" />} />
        <Route path="/contact" element={<Placeholder title="Contact / Join" />} />
      </Routes>
    </Layout>
  );
}
