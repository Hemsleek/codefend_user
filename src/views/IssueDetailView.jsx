///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import('../components/Navbar/navbar.jsx'));
const Sidebar = lazy(() => import('../components/Sidebar/sidebar.jsx'));
const Issue = lazy(() => import('../components/Views/issueDetail.jsx'));

function IssuesView() {
  return (
    <>
      <Router>
          <Navbar/>
          <Sidebar/>
          <Issue/>
      </Router>
    </>
  );
}

export default IssuesView;
