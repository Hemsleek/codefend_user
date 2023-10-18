//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import {
  AiOutlineMail,
  AiFillLock,
  AiFillIdcard,
  AiFillMobile,
  AiFillBank,
} from "solid-icons/ai";
import VoxService from "../../Services/apiHandler.jsx";
import history from "../../history.jsx";

function MainView() {
  const [email, setEmail] = createSignal("");
  const [phone, setPhone] = createSignal("");
  const [name, setName] = createSignal("");
  const [surname, setSurname] = createSignal("");
  const [companyName, setCompanyName] = createSignal("");
  const [companySize, setCompanySize] = createSignal("");
  const [companyRole, setCompanyRole] = createSignal("");
  const [companyCountry, setCompanyCountry] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      user_name: name(),
      user_surname: surname(),
      user_email: email(),
      user_phone: phone(),
      company_name: companyName(),
      company_role: companyRole(),
      company_size: companySize(),
      company_country: companyCountry(),
    };

    return VoxService.registerHandler(requestBody).then(() => {
      console.log(requestBody);
    });
  };

  return (
    <>
      <section class="log-component">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form class="w-full max-w-md">
            [[CODEFEND LOGO]]
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
              sign Up
            </h1>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillIdcard class="w-6 h-6 mx-3" />
              </span>

              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="First name"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillIdcard class="w-6 h-6 mx-3" />
              </span>

              <input
                type="text"
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Last name"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiOutlineMail class="w-6 h-6 mx-3" />
              </span>

              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Email address"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillMobile class="w-6 h-6 mx-3" />
              </span>

              <input
                type="tel"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Phone number"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillBank class="w-6 h-6 mx-3" />
              </span>

              <input
                type="text"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Company Name"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillBank class="w-6 h-6 mx-3" />
              </span>

              <input
                type="text"
                onChange={(e) => {
                  setCompanySize(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Company Size"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <AiFillBank class="w-6 h-6 mx-3" />
              </span>

              <input
                type="text"
                onChange={(e) => {
                  setCompanyRole(e.target.value);
                }}
                class="block w-full py-3 bg-white border rounded px-11 log-inputs dark:text-gray-300"
                placeholder="Company Role"
              ></input>
            </div>
            <div class="relative flex items-center mt-4">
              <select
                id="countries"
                onChange={(e) => setCompanyCountry(e.target.value)}
                class="log-inputs text-sm rounded block w-full p-2.5"
              >
                <option selected>Select your country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div class="mt-6 text-center ">
              <span href="#" class="text-sm ">
                I consent to be contacted about Codefend products
              </span>
            </div>
            <div class="mt-6">
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                class="bg-codefend w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded"
              >
                Sign up
              </button>

              <div class="mt-6 text-center ">
                <a
                  href="#"
                  onClick={() => {
                    history.push("/auth/signin");
                  }}
                  class="text-sm codefend-text-red hover:underline"
                >
                  Already have an account? Sign in
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default MainView;
