///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import('../components/Navbar/navbar.jsx'));
const Sidebar = lazy(() => import('../components/Sidebar/sidebar.jsx'));
const Dashboard = lazy(() => import('../components/Views/dashboard.jsx'));

function DashboardView() {
  return (
    <>
      <Router>
          <Navbar/>
          <Sidebar/>
          <Dashboard/>
      </Router>
    </>
  );
}

export default DashboardView;
