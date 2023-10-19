//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "../../../assets/css/flags.css";
import createResource from "../../../Store/resources";
import { RiUserFacesUserSettingsFill } from "solid-icons/ri";

function SettingCompanyInformation() {
  const { resourcesStore, setResourcesStore } = createResource;
  const [resources, setResources] = createSignal([
    {
      title: "web",
      value: "hemsleek.com",
    },
    {
      title: "mercado",
      value: "Information Security",
    },
    {
      title: "owner",
      value: "Asiyanbi mubashir",
    },
    {
      title: "email",
      value: "hemsleek@codefend.com",
    },
    {
      title: "location",
      value: "buenos aires",
    },
    {
      title: "address",
      value: "Libertador",
    },
  ]);

  return (
    <>
      <div class="w-full internal-tables">
        <div class="py-3 px-5 internal-tables-active flex flex-row items-center gap-x-6 ">
          <RiUserFacesUserSettingsFill class="codefend-text-red w-4 h-4" />
          <p class="text-small text-left font-bold title-format">
            COMPANY INFORMATION
          </p>
          <p class="text-small text-left font-bold title-format border-x-[1.5px]  title-format px-6 underline cursor-pointer codefend-text-red">
            UPDATE
          </p>
        </div>
        <div class="flex px-8 py-2">
          <div class="w-full">
            <div class="flex p-3 text-format">
              <section class="flex w-full">
                <p class="text-base w-2/4">name</p>
                <p class="text-base w-2/4">hemsleek</p>
              </section>
            </div>

            <For each={resources()}>
              {(resource) => (
                <div class="flex px-3 py-1 text-format">
                  <section class="flex w-full items-center">
                    <p class="w-2/4">{resource.title}</p>
                    <p class="text-base w-2/4">{resource.value}</p>
                  </section>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingCompanyInformation;
