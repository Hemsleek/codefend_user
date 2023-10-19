//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import history from "../../history.jsx";
import {
  FaSolidGlobe,
  FaSolidChartSimple,
  FaSolidMobileScreen,
  FaSolidCloud,
  FaSolidServer,
  FaSolidCode,
  FaSolidPeopleGroup,
  FaSolidBug,
  FaSolidMessage,
  FaSolidGear,
  FaRegularSquarePlus,
  FaRegularBuilding,
} from "solid-icons/fa";
import createUser from "../../Store/user.jsx";

const isActiveLinkColor = (path) => {
  const pathName = history.location.pathname;
  if (pathName === "/" && path === "/dashboard") return "codefend-text-red";
  const isActivePath = pathName.includes(path);
  return isActivePath ? "codefend-text-red" : "";
};

function Navbar() {
  const { user } = createUser;
  return (
    <>
      <aside class="flex sidebar">
        <div class="flex bg-sidebar flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700 mt-8 pt-32">
          <a
            href="#"
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            <FaSolidChartSimple class={isActiveLinkColor("/dashboard")} />
          </a>

          <a
            href="#"
            onClick={() => {
              history.push("/webapp");
            }}
          >
            <FaSolidGlobe class={isActiveLinkColor("/webapp")} />
          </a>

          <a
            href="#"
            onClick={() => {
              history.push("/mobileapp");
            }}
          >
            <FaSolidMobileScreen class={isActiveLinkColor("/mobileapp")} />
          </a>

          <a href="#" class="">
            <FaSolidCloud />
          </a>

          <a
            href="#"
            onClick={() => {
              history.push("/internalnetwork");
            }}
          >
            <FaSolidServer class={isActiveLinkColor("/internalnetwork")} />
          </a>

          <a
            href="#"
            class=""
            onClick={() => {
              history.push("/sourcecode");
            }}
          >
            <FaSolidCode class={isActiveLinkColor("/sourcecode")} />
          </a>

          <a
            href="#"
            class=""
            onClick={() => {
              history.push("/socialengineering");
            }}
          >
            <FaSolidPeopleGroup
              class={isActiveLinkColor("/socialengineering")}
            />
          </a>

          <a
            href="#"
            class=""
            onClick={() => {
              history.push("/issues");
            }}
          >
            <FaSolidBug class={isActiveLinkColor("/issues")} />
          </a>

          <a href="#" class="">
            <FaSolidMessage />
          </a>

          <Show when={user() && user().admin}>
            <a
              href="#"
              onClick={() => {
                history.push("/admin/panel");
              }}
              class=""
            >
              <FaRegularSquarePlus class={isActiveLinkColor("/admin/panel")} />
            </a>

            <a
              href="#"
              onClick={() => {
                history.push("/admin/company");
              }}
              class=""
            >
              <FaRegularBuilding class={isActiveLinkColor("/admin/company")} />
            </a>
          </Show>

          <a
            href="#"
            onClick={() => {
              history.push("/settings");
            }}
            class=""
          >
            <FaSolidGear class={isActiveLinkColor("/settings")} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
