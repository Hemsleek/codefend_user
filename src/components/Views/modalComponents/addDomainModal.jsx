//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import VoxService from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from 'solid-icons/fa'
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"

function AddDomainModal() {
  const { showModal, setShowModal } = createModal;
  const [domainName, setDomainName] = createSignal("");
  const [ipAddress, setIpAddress] = createSignal("");
  const [subdomainDetection, setSubdomainDetection] = createSignal(false)
  const { user } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      company_id: user().read_array[0],
      domain: domainName(),
      ip: ipAddress(),
      subdomain_detection: subdomainDetection()
    };
    
    return VoxService.addWebResources(requestBody)
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

                <input type="text" onChange={(e) => {setDomainName(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300" placeholder="domain name"></input>
            </div>

            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setIpAddress(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="IP address"></input>
            </div>
            <div class="flex items-center mt-4 border-none">
                <input onClick={setSubdomainDetection(!subdomainDetection())} id="link-checkbox" type="checkbox" checked={subdomainDetection()} class="w-4 h-4 codefend-text-red bg-gray-100 border-gray-300 checkbox-color"></input>
                <label for="link-checkbox" class="ml-3 text-sm font-medium">Automatic subdomain detection</label>
            </div>
            <div class="mt-6 internal-tables flex">
                <button onClick={() => {setShowModal(!showModal())}} class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    cancel
                </button>
                <button onClick={(e) => {handleSubmit(e)}} class="log-inputs text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    add web resource
                </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default AddDomainModal;

