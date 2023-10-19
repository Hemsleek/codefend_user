///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const Settings = lazy(() => import("../components/Views/settings.jsx"));

function SettingsView() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Settings />
      </Router>
    </>
  );
}

export default SettingsView;
