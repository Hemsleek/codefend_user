//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import VoxService from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from 'solid-icons/fa'
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"

function MobileAppModal() {
  const { showModal, setShowModal } = createModal;
  const [repositoryName, setRepositoryName] = createSignal("");
  const [repositoryUrl, setRepositoryUrl] = createSignal("");
  const [sourceCode, setSourceCode] = createSignal("");
  const [visibility, setVisibility] = createSignal("");
  const { user } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      company_id: user().read_array[0],
      repository_name: repositoryName(),
      repository_url: repositoryUrl(),
      source_code: sourceCode(),
      visibility: visibility()
    };
    
    return VoxService.addRepositoryResources(requestBody)
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

                <input type="text" onChange={(e) => {setRepositoryName(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300" placeholder="repository name"></input>
            </div>

            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setRepositoryUrl(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="repository url"></input>
            </div>
            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setSourceCode(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="source code language"></input>
            </div>
            <div class="relative flex items-center w-96 mt-4">
                <span class="absolute">
                  <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>
                
                <select onChange={(e) => { setVisibility(e.target.value) }} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300">
                  <option value="0" disabled selected>
                    visibility
                  </option>
                  <option value="public">public</option>
                  <option value="private">private</option>
                </select>
              </div>
            <div class="mt-6 internal-tables flex">
                <button onClick={() => {setShowModal(!showModal())}} class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    cancel
                </button>
                <button onClick={(e) => {handleSubmit(e)}} class="log-inputs text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300">
                    add repository
                </button>
            </div>
        </form>
      </div>
    </>
  );
}

export default MobileAppModal;

