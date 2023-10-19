//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import "../../../assets/css/flags.css";
import VoxService from "../../../Services/apiHandler.jsx";
import AddDomainModal from "../modalComponents/addDomainModal.jsx";
import AddSubDomainModal from "../modalComponents/addSubDomainModal.jsx";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import createResource from "../../../Store/resources";

function WebApplication() {
  const { resourcesStore, setResourcesStore } = createResource;

  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const { user } = createUser;

  createEffect(() => {
    if (!user()) return;
    VoxService.getWebResources(user().read_array[0]).then((res) => {
      console.log(res);
      setResourcesStore(res.data);
    });
  }, []);

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_domain"}>
        <div
          onClick={() => {
            setShowModal(!showModal());
          }}
          class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            class="max-h-full max-w-xl overflow-y-auto bg-white"
          >
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">
                    Add a new web resource
                  </p>
                </div>
                <AddDomainModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <Show when={showModal() && showModalStr() === "add_subdomain"}>
        <div
          onClick={() => {
            setShowModal(!showModal());
          }}
          class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            class="max-h-full max-w-xl overflow-y-auto bg-white"
          >
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">
                    Add a new web subresource
                  </p>
                </div>
                <AddSubDomainModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">
            Detected domains and subdomains
          </p>
          <p
            onClick={() => {
              setShowModal(!showModal());
              setShowModalStr("add_domain");
            }}
            class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
          >
            Add domain
          </p>
          <p
            onClick={() => {
              setShowModal(!showModal());
              setShowModalStr("add_subdomain");
            }}
            class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
          >
            Add subdomain
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-5/12">domain</p>
          <p class="text-base w-2/12">main server</p>
          <p class="text-base w-4/12">location</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For
          each={resourcesStore()?.filter(
            (resource) => resource.is_subdomain === 0
          )}
        >
          {(mainNetwork) => (
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format red-border">
                <p class="text-base w-1/12">{mainNetwork.id}</p>
                <p class="text-base w-5/12">{mainNetwork.resource_domain}</p>
                <p class="text-base w-2/12">{mainNetwork.server_ip}</p>
                <section class="flex w-4/12 items-center">
                  <div
                    class={
                      "flag flag-" +
                      mainNetwork.country_code.toLowerCase() +
                      " mr-3"
                    }
                  ></div>
                  <p class="text-base">{mainNetwork.country}</p>
                </section>
              </div>
              <For
                each={resourcesStore().filter(
                  (resource) => resource.is_subdomain === mainNetwork.id
                )}
              >
                {(subNetwork) => (
                  <div class="flex pl-8 text-format">
                    <p class="text-base w-1/12 pt-3 pb-3">{subNetwork.id}</p>
                    <div class="flex w-5/12">
                      <span class="sub-domain-icon-v"></span>
                      <span class="sub-domain-icon-h"></span>
                      <p class="text-base pt-3 pb-3">
                        {subNetwork.resource_domain}
                      </p>
                    </div>
                    <p class="text-base w-2/12 pt-3 pb-3">
                      {subNetwork.server_ip}
                    </p>
                    <section class="flex w-4/12 items-center">
                      <div
                        class={
                          "flag flag-" +
                          subNetwork.country_code.toLowerCase() +
                          " mr-3"
                        }
                      ></div>
                      <p class="text-base">{subNetwork.country}</p>
                    </section>
                  </div>
                )}
              </For>
            </>
          )}
        </For>
      </div>
    </>
  );
}

export default WebApplication;
