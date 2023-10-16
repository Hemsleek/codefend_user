import { lazy } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";
import { render } from "solid-js/web";
import history from './history';
import './index.css'
import InternalNetworkView from "./views/InternalNetworkView";
import WebApplicationView from "./views/WebApplicationView";
import MobileApplicationView from "./views/MobileApplicationView";
import SourceCodeView from "./views/SourceCodeView";
import SocialView from "./views/SocialView";
import IssuesView from "./views/IssuesView";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AdminPanelView from "./views/AdminPanelView";
import AdminCompanyView from "./views/AdminCompanyView";
import IssueDetailView from "./views/IssueDetailView";
import createUser from "./Store/user.jsx"

const { user } = createUser;


// Mobile implementation

import { App as CapacitorApp } from '@capacitor/app';

CapacitorApp.addListener('backButton', ({canGoBack}) => {
  if(canGoBack){
    return history.go(-1);
  }
});

//

function renderApp() {
  
  let currentTimestamp = Math.floor(Date.now() / 1000);
  if (!user() || (currentTimestamp >= user().exp)) {
    const currentUrl = new URL(window.location.href);
    const path = currentUrl.pathname;
  
    if (path != '/auth/signin' && path != '/auth/signup') {
      history.push('/auth/signin');
    }
  }

  render(
    () => (
      <Router history={history}>
        <Routes>
          <Route path="/" component={DashboardView}/>
          <Route path="/auth/signup" component={RegisterView}/>
          <Route path="/auth/signin" component={LoginView}/>
          <Route path="/admin/panel" component={AdminPanelView}/>
          <Route path="/admin/company" component={AdminCompanyView}/>
          <Route path="/dashboard" component={DashboardView}/>
          <Route path="/webapp" component={WebApplicationView}/>
          <Route path="/mobileapp" component={MobileApplicationView}/>
          <Route path="/sourcecode" component={SourceCodeView}/>
          <Route path="/socialengineering" component={SocialView}/>
          <Route path="/issues" component={IssuesView}/>
          <Route path="/internalnetwork" component={InternalNetworkView}/>
          <Route path="/issues/:id" component={IssueDetailView}/>
        </Routes>
      </Router>
    ),
    document.getElementById('root')
  );
}

history.listen(({ action, location }) =>  {
  window.scrollTo(0, 0);
  if(['POP'].includes(action)) {
    history.go(0);
  }
  if(['PUSH'].includes(action)) {
      document.getElementById('root').innerHTML = '';
      renderApp();
    }
});

renderApp();

