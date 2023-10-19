//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import "../../../assets/css/flags.css";
import VoxService from "../../../Services/apiHandler.jsx";
import AddMobileModal from "../modalComponents/addMobileModal.jsx";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import createResource from "../../../Store/resources";

function MobileApplication() {
  const [mobileResources, setMobileResources] = createSignal([]);

  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const { user } = createUser;

  createEffect(() => {
    console.log("mobile called", { user: user() });
    if (!user()) return;
    VoxService.getMobileResources(user().read_array[0]).then((res) => {
      const mobileResources = res.data;

      // Create an object to store the filtered results
      const filteredResources = {};

      // Loop through the mobileResources array and group by app_name
      mobileResources.forEach((resource) => {
        const appName = resource.app_name;
        if (!filteredResources[appName]) {
          filteredResources[appName] = [];
        }
        filteredResources[appName].push(resource);
      });

      // Convert the grouped objects into an array
      const resultArray = Object.values(filteredResources);

      // Now resultArray contains arrays of objects with the same app_name
      console.log(resultArray);

      // If you want to flatten the resultArray into a single array of objects
      // const flattenedArray = [].concat(...resultArray);
      // console.log(flattenedArray);

      // Set the mobileResources state with the filtered data
      setMobileResources(resultArray);
    });
  }, []);

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_mobile_app"}>
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
                    Add a mobile application
                  </p>
                </div>
                <AddMobileModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">
            Mobile application
          </p>
          <p
            onClick={() => {
              setShowModal(!showModal());
              setShowModalStr("add_mobile_app");
            }}
            class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
          >
            Add application
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-7/12">name</p>
          <p class="text-base w-2/12">reviews</p>
          <p class="text-base w-1/12">rank</p>
          <p class="text-base w-2/12">version</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={mobileResources()}>
          {(resource) => (
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format red-border">
                <p class="text-base w-12/12">{resource[0].app_name}</p>
              </div>

              <For each={resource}>
                {(subresource) => (
                  <div class="flex pl-8 text-format">
                    <div class="flex w-7/12">
                      <span class="sub-domain-icon-v"></span>
                      <span class="sub-domain-icon-h"></span>
                      <p class="text-base pt-3 pb-3">{subresource.app_link}</p>
                    </div>
                    <p class="text-base w-2/12 pt-3 pb-3">
                      {subresource.app_reviews}
                    </p>
                    <p class="text-base w-1/12 pt-3 pb-3">
                      {subresource.app_rank}
                    </p>
                    <p class="text-base w-2/12 pt-3 pb-3">
                      {subresource.app_version}
                    </p>
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

export default MobileApplication;
