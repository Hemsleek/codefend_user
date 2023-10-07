//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import AddAccessPointModal from '../modalComponents/addAccessPointModal.jsx';
import AddNetworkDeviceModal from '../modalComponents/addNetworkDeviceModal.jsx';
import createInternalNetwork from "../../../Store/internalNetworks.jsx"
import VoxService from "../../../Services/apiHandler.jsx";

function InternalNetworks() {
  const { showModal, setShowModal, setShowModalStr, showModalStr } = createModal;
  const { user } = createUser;
  const { internalNetworksStore, setInternalNetworksStore } = createInternalNetwork;

  createEffect(() => {
    VoxService.getInternalNetworks(user().read_array[0])
      .then((res) => {
        console.log(res)
        setInternalNetworksStore(res.data);
      });
  }, []);

  return (
    <>
      <Show when={showModal() && showModalStr() === 'add_access_point'}>
        <div onClick={() => {setShowModal(!showModal())}} class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} class="max-h-full max-w-xl overflow-y-auto bg-white">
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">Add a new access point</p>
                </div>
                <AddAccessPointModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <Show when={showModal() && showModalStr() === 'add_network_device'}>
        <div onClick={() => {setShowModal(!showModal())}} class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} class="max-h-full max-w-xl overflow-y-auto bg-white">
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">Add a network device</p>
                </div>
                <AddNetworkDeviceModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">Internal network structure</p>
          <p onClick={() => {setShowModal(!showModal()); setShowModalStr('add_access_point')}} class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red">Add acess point</p>
          <p onClick={() => {setShowModal(!showModal()); setShowModalStr('add_network_device')}} class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red">Add network device</p>
         </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-3/12">internal IP</p>
          <p class="text-base w-2/12">external IP</p>
          <p class="text-base w-2/12">os / vendor</p>
          <p class="text-base w-4/12">hostname</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={internalNetworksStore()?.filter(resource => resource.is_subdomain === 0)}>
          {
            (network) =>
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format red-border">
                <p class="text-base w-1/12">{network.id}</p>
                <p class="text-base w-3/12">{network.internal_ip}</p>
                <p class="text-base w-2/12">{network.external_ip}</p>
                <p class="text-base w-2/12">{network.vendor}</p>
                <p class="text-base w-4/12">{network.network_hostname}</p>
              </div>
              <For each={internalNetworksStore()?.filter(resource => resource.is_subdomain === network.id)}>
                {
                  (subnetwork) =>
                  <div class="flex pl-8 text-format">
                    <p class="text-base w-1/12 pt-3 pb-3">{subnetwork.id}</p>
                    <div class="flex w-3/12">
                      <span class="sub-domain-icon-v"></span>
                      <span class="sub-domain-icon-h"></span>
                      <p class="text-base pt-3 pb-3">{subnetwork.internal_ip}</p>
                    </div>
                    <p class="text-base w-2/12 pt-3 pb-3">{subnetwork.external_ip}</p>
                    <p class="text-base w-2/12 pt-3 pb-3">{subnetwork.vendor}</p>
                    <p class="text-base w-3/12 pt-3 pb-3">{subnetwork.network_hostname}</p>
                  </div>
                }
              </For>
            </>
          }
        </For>
      </div>
    </>
  );
}

export default InternalNetworks;

