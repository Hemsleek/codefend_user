//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";

//Components
import DashboardVulnerabilities from "./viewComponents/dashboardVulnerabilities.jsx";
import DashboardChart from "./viewComponents/dashboardChart.jsx";
import DashboardVulnerabilitiesStatus from "./viewComponents/dashboardVulnerabilitiesStatus.jsx";
import DashboardAssets from "./viewComponents/dashboardAssets.jsx";
import DashboardCollaborators from "./viewComponents/dashboardCollaborators.jsx";
import SettingsOrderAndBilling from "./viewComponents/SettingsOrderAndBilling.jsx";
import SettingsCollaboratorAndTeam from "./viewComponents/SettingsCollaboratorAndTeam.jsx";
import SettingCompanyInformation from "./viewComponents/SettingCompanyInformation.jsx";
import SettingPersonalDetails from "./viewComponents/SettingPersonalDetails.jsx";

function MainView() {
  return (
    <>
      <main class="pt-12 p-8">
        <section class="w-8/12 pr-2">
          <div class="pb-9 title title-format h-16">PREFERENCES & SETTINGS</div>
          <SettingsOrderAndBilling />
          <SettingsCollaboratorAndTeam />
        </section>
        <section class="w-4/12 pl-2">
          <div class="pb-9 title title-format h-16"></div>

          <SettingCompanyInformation />
          <SettingPersonalDetails />
        </section>
      </main>
    </>
  );
}

export default MainView;
