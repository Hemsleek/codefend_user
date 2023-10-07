//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import VoxService from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from 'solid-icons/fa'
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"

function MobileAppModal() {
  const { showModal, setShowModal } = createModal;

  const [socialName, setSocialName] = createSignal("");
  const [socialMail, setSocialMail] = createSignal("");
  const [socialPhone, setSocialPhone] = createSignal("");
  const [socialRole, setSocialRole] = createSignal("");
  const { user } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      company_id: user().read_array[0],
      social_name: socialName(),
      social_mail: socialMail(),
      social_phone: socialPhone(),
      social_role: socialRole()
    };
    
    return VoxService.addSocialResources(requestBody)
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

                <input type="text" onChange={(e) => {setSocialName(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300" placeholder="full name"></input>
            </div>

            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setSocialMail(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="email address"></input>
            </div>
            <div class="relative flex items-center mt-4 w-96">
                <span class="absolute">
                  <FaSolidGlobe  class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>

                <input type="text" onChange={(e) => {setSocialPhone(e.target.value)}} class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300" placeholder="phone number"></input>
            </div>
            <div class="relative flex items-center w-96 mt-4">
                <span class="absolute">
                  <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red"/>
                </span>
                
                <select onChange={(e) => { setSocialRole(e.target.value) }} class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300">
                  <option value="0" disabled selected>
                    role
                  </option>
                  <option value="administrative">administrative</option>
                  <option value="human_resources">human resources</option>
                  <option value="information_tech">information tech</option>
                  <option value="marketing">marketing</option>
                  <option value="sales">sales</option>
                  <option value="finance">finance</option>
                  <option value="customer_service">customer service</option>
                  <option value="production_ops">production & ops</option>
                  <option value="strategy_planning">strategy & planning</option>
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

