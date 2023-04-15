/* eslint-disable */
import React, { useState, useEffect, lazy, Suspense } from "react";
import "./sass/main.scss";
import { Routes, Route } from "react-router-dom";
import HelmetMetaData from "./components/helmet-meta-data/helmet-meta-data";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component.jsx";
import PageLoader from "./components/page-loader/page-loader.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";
import HomePage from "./pages/homepage/homepage.component";

import AboutPage from "./pages/about/about.component.jsx";
import ContactPage from "./pages/contact/contact.component";

import GalleryPage from "./pages/gallery/gallery.component";
import CollectionOverview from "./components/collection-overview/collection-overview.component";
import ArtworkComponent from "./pages/artwork/artwork.component";

import DataProvider from "./context/DataProvider";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <DataProvider>
      <div className="App">
        <HelmetMetaData></HelmetMetaData>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route exact path="gallery" element={<GalleryPage />} />
            <Route
              exact
              path="gallery/:category"
              element={<CollectionOverview />}
            />
            <Route
              exact
              path="gallery/:category/:artworkId"
              element={<ArtworkComponent />}
            />
          </Routes>
        </div>
        <Footer />
        {loading === false ? null : <PageLoader />}
      </div>
    </DataProvider>
  );
}

export default App;
