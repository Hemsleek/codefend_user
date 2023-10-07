//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import VoxService from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from 'solid-icons/fa'
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import createInternalNetwork from "../../../Store/internalNetworks.jsx"

function NetworkDeviceModal() {
  const { showModal, setShowModal } = createModal;
  const [domainName, setDomainName] = createSignal("");
  const [vendorName, setVendorName] = createSignal("");
  const [mainDomainId, setMainDomainId] = createSignal(0);
  const [internalIpAddress, setInternalIpAddress] = createSignal("");
  const [externalIpAddress, setExternalIpAddress] = createSignal("");
  const { user } = createUser;
  const { internalNetworksStore } = createInternalNetwork;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      company_id: user().read_array[0],
      resource_id: mainDomainId(),
      hostname: domainName(),
      vendor: vendorName(),
      internal_ip: internalIpAddress(),
      external_ip: externalIpAddress()
    };
    
    return VoxService.addNetworkDevice(requestBody)
      .then(() => {
        setShowModal(!showModal());
      })
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form class="p-6">
            <div class="relative flex items-center w-96">
                <span class="absolute">
                  <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>
                
                <select onChange={(e) => { setMainDomainId(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300">
                  <option value="0" disabled selected>
                    main resource
                  </option>
                  <For each={internalNetworksStore()?.filter(resource => resource.is_subdomain === 0)}>
                    {
                      (resource) =>
                      <option value={resource.id}>{`${resource.network_hostname} - ${resource.external_ip}`}</option>
                    }
                  </For>
                </select>
              </div>
            <div class="relative flex items-center w-96 mt-4">
                <span class="absolute">
                  <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>
                
                <select onChange={(e) => { setVendorName(e.target.value) }} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300">
                  <option value="unknown" disabled selected>
                    os / vendor
                  </option>
                  <option value="windows">windows</option>
                  <option value="linux">linux</option>
                  <option value="unknown">unknown</option>
                  <option value="android">android</option>
                  <option value="ios">ios</option>
                </select>
              </div>
            <div class="relative flex items-center w-96 mt-4">
                <span class="absolute">
                  <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setDomainName(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300" placeholder="hostname"></input>
            </div>

            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setInternalIpAddress(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="internal IP"></input>
            </div>
            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setExternalIpAddress(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="external IP"></input>
            </div>
            <div class="mt-6 internal-tables flex">
                <button onClick={() => {setShowModal(!showModal())}} class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    cancel
                </button>
                <button onClick={(e) => {handleSubmit(e)}} class="log-inputs text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    add access point
                </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default NetworkDeviceModal;

