//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import '../../../assets/css/flags.css';
import createResource from "../../../Store/resources"

function InternalNetworksChart() {
  const { resourcesStore, setResourcesStore } = createResource;
  const filterUniqueIPs = (resource, index, self) => {
    return self.findIndex(r => r.server_ip === resource.server_ip) === index;
  };

  return (
    <>
      <div class="w-full internal-tables mt-4">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Domain & server statics</p>
        </div>
        <div class="flex statics-table">
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">{resourcesStore()?.filter(resource => resource.is_subdomain === 0).length}</h6>
              <p class="text-sm uppercase font-bold">
                  Domains
              </p>
          </div>
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">{resourcesStore()?.filter(resource => resource.is_subdomain !== 0).length}</h6>
              <p class="text-sm uppercase font-bold">
                  Subdomains
              </p>
          </div>
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">{resourcesStore()?.filter(filterUniqueIPs).length}</h6>
              <p class="text-sm uppercase font-bold">
                  Unique IPS
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;

