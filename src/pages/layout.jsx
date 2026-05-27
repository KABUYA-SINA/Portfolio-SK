import { useLocation, Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import useBootScreen from '../hooks/useBootScreen';

import pageClassMap from '../data/pageClassMap';

export default function Layout() {

  // ========================
  // BOOT SCREEN EFFECT
  // ========================
  useBootScreen();

  // ========================
  // CURRENT ROUTE LOCATION
  // ========================
  const location = useLocation();

  // ========================
  // DYNAMIC MAIN CLASS MAPPING
  // ========================
  const mainClass =
    pageClassMap[location.pathname] || 'main-default';

  return (
    <div
      className="container"
      data-page={location.pathname}
    >

      {/* ======================== */}
      {/* HEADER COMPONENT */}
      {/* ======================== */}
      <Header />

      {/* ======================== */}
      {/* MAIN CONTENT AREA */}
      {/* ======================== */}
      <main className={mainClass} role="main">
        <Outlet />
      </main>

      {/* ======================== */}
      {/* FOOTER COMPONENT */}
      {/* ======================== */}
      <Footer />
    </div>
  );
}