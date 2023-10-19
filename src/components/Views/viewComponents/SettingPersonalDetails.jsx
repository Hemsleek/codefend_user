//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "../../../assets/css/flags.css";
import createResource from "../../../Store/resources";
import { RiUserFacesUserSettingsFill } from "solid-icons/ri";
import { FaRegularCircleUser } from "solid-icons/fa";

function SettingPersonalDetails() {
  const { resourcesStore, setResourcesStore } = createResource;
  const [resources, setResources] = createSignal([
    {
      title: "email",
      value: "hemsleek@codefend.com",
    },
    {
      title: "firstname",
      value: "Mubashir",
    },
    {
      title: "lastname",
      value: "Asiyanbi",
    },
    {
      title: "phone",
      value: "+2348108170354",
    },
    {
      title: "role",
      value: "technical leader",
    },
  ]);

  return (
    <>
      <div class="w-full internal-tables mt-6 ">
        <div class="py-3 px-5 internal-tables-active flex flex-row items-center gap-x-6 ">
          <RiUserFacesUserSettingsFill class="codefend-text-red w-4 h-4" />
          <p class="text-small text-left font-bold title-format">
            YOUR PERSONAL DETAILS
          </p>
          <p class="text-small text-left font-bold title-format border-x-[1.5px]  px-6 underline cursor-pointer title-format codefend-text-red">
            UPDATE
          </p>
        </div>
        <div class="flex flex-row gap-x-7 items-center px-8 py-2">
          <section class="flex  mb-20">
            <FaRegularCircleUser class="w-16 h-16" />
          </section>
          <div class="w-full mb-20">
            <For each={resources()}>
              {(resource) => (
                <div class="flex px-3 py-1 text-format">
                  <section class="flex w-full items-center">
                    <p class="w-1/2">{resource.title}</p>
                    <p class="text-base w-1/2">{resource.value}</p>
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

export default SettingPersonalDetails;
