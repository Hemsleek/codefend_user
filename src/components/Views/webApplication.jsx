//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";

//Components
import WebApplication from "./viewComponents/webApplication.jsx";
import WebApplicationLocation from "./viewComponents/webApplicationLocation.jsx";
import WebApplicationStatics from "./viewComponents/webApplicationStatics.jsx";
import WebApplicationCredentials from "./viewComponents/webApplicationCredentials.jsx";

function MainView() {
  return (
    <>
      <main class="pt-12 p-8">
        <section class="w-8/12 pr-2">
          <div class="pb-9 title title-format h-16">
            Web applications & network
          </div>
          <WebApplication />
        </section>
        <section class="w-4/12 pl-2">
          <div class="pb-9 title title-format h-16"></div>

          <WebApplicationLocation />
          <WebApplicationStatics />
          <WebApplicationCredentials />
        </section>
      </main>
    </>
  );
}

export default MainView;
