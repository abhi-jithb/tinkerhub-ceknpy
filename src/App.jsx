import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";
import TopMakersPage from "./pages/TopMakersPage.jsx";
import MakerProfilePage from "./pages/MakerProfilePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default function App() {
  return (
    <Routes>
      {/* All normal pages wrapped with Layout (so they get navbar + footer) */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/team"
        element={
          <Layout>
            <TeamPage />
          </Layout>
        }
      />
      <Route
        path="/events"
        element={
          <Layout>
            <EventsPage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectsPage />
          </Layout>
        }
      />
      <Route
        path="/top-makers"
        element={
          <Layout>
            <TopMakersPage />
          </Layout>
        }
      />
      <Route
        path="/top-makers/:id"
        element={
          <Layout>
            <MakerProfilePage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />

      {/* 404: no Layout, so no navbar/footer */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
