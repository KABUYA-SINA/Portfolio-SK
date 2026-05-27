import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './pages/layout';
import Error from './pages/Error';

import PageLoader from './components/ui/PageLoader';

import basename from './utils/routerConfig';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projets = lazy(() => import('./pages/Projets'));

export default function App() {

  // ========================
  // APPLICATION ROUTER SETUP
  // ========================

  return (
    <BrowserRouter basename={basename}>

      {/* ======================== */}
      {/* LAZY LOADING WRAPPER */}
      {/* ======================== */}
      <Suspense fallback={<PageLoader />}>

        {/* ======================== */}
        {/* ROUTES CONFIGURATION */}
        {/* ======================== */}
        <Routes>

          {/* ======================== */}
          {/* MAIN LAYOUT ROUTE */}
          {/* ======================== */}
          <Route path="/" element={<Layout />}>

            {/* ======================== */}
            {/* PAGES ROUTES */}
            {/* ======================== */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projets" element={<Projets />} />

            {/* ======================== */}
            {/* ERROR ROUTE */}
            {/* ======================== */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}