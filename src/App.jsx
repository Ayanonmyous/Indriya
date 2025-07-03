import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeCards from "./components/HomeCards";
import Footer from "./components/Footer";
import Assessment from "./components/Assessment";
import Games from "./components/Games";
import Blogs from "./components/Blogs";
import About from "./components/About";
import { Blog1, Blog2, Blog3, Blog4 } from "./components/Blog1";
import CallToAction from "./components/CallToAction";
import TrackMedication from "./components/TrackMedication";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HomeCards />
              <CallToAction />
            </>
          }
        />

        <Route
          path="/assessment"
          element={
            <ProtectedRoute>
              <Assessment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/games"
          element={
            <ProtectedRoute>
              <Games />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trackmedication"
          element={
            <ProtectedRoute>
              <TrackMedication />
            </ProtectedRoute>
          }
        />
        <Route path="/aboutus" element={<About />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
