//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "../../../assets/css/flags.css";
import createResource from "../../../Store/resources";

function WebApplicationLocation() {
  const { resourcesStore, setResourcesStore } = createResource;
  const [resources, setResources] = createSignal([]);

  createEffect(() => {
    const filteredResources = resourcesStore() ? resourcesStore() : [];

    const countryDataMap = {};

    for (const resource of filteredResources) {
      const { country, percent } = resource;

      if (!countryDataMap[country]) {
        countryDataMap[country] = {
          country,
          count: 0,
          percentage: 0,
        };
      }

      countryDataMap[country].count++;
      countryDataMap[country].percentage += percent;
    }

    const countryDataArray = Object.values(countryDataMap).map((data) => ({
      country: data.country,
      count: data.count,
      percentage: (data.count / filteredResources.length).toFixed(2) * 100,
    }));

    setResources(countryDataArray);
  });
  return (
    <>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">
            Network devices by technology
          </p>
        </div>
        <div class="flex p-8">
          <div class="w-full">
            <div class="flex p-3 text-format">
              <section class="flex w-full">
                <p class="text-base w-2/6">location</p>
                <p class="text-base w-2/6">count</p>
                <p class="text-base w-2/6">percent</p>
              </section>
            </div>

            <For each={resources()}>
              {(resource) => (
                <div class="flex p-3 text-format">
                  <section class="flex w-full items-center">
                    <div
                      class={
                        "flag flag-" + resource.country.toLowerCase() + " mr-3"
                      }
                    ></div>
                    <p class="w-2/6">{resource.country}</p>
                    <p class="text-base w-2/6">{resource.count}</p>
                    <p class="text-base w-2/6">{resource.percentage}%</p>
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

export default WebApplicationLocation;
