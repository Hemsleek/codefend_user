//Core packages
import { createSignal, createEffect, Show, For, onCleanup } from "solid-js";
import history from "../../history.jsx";
import { FaSolidPowerOff } from "solid-icons/fa";
import createUser from "../../Store/user.jsx";
import createModal from "../../Store/modal.jsx";

const logOut = (e) => {
  const { setUser, user } = createUser;

  e.preventDefault();

  setUser("");
  window.localStorage.removeItem("token");
  return history.push("/auth/signin");
};

function Navbar() {
  const { user, setUser } = createUser;
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  return (
    <>
      <Show when={showModal() && showModalStr() === "navbar_selector"}>
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
              <div class="w-full w-96 internal-tables">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">
                    Select a company
                  </p>
                </div>
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <nav class="bg-codefend">
        <div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-2.5 pl-10 pr-16">
          <div class="flex items-center cursor-pointer">
            <a class="flex items-center">
              <span
                onClick={() => history.push("/")}
                class="self-center text-2xl font-semibold whitespace-nowrap"
              >
                codefend
              </span>
              <Show when={user() && user().read_array.length > 0}>
                <span
                  onClick={() => {
                    setShowModal(!showModal());
                    setShowModalStr("navbar_selector");
                  }}
                  class="self-center text-2xl font-semibold whitespace-nowrap ml-2"
                >{` - ${user().read_array[0]}`}</span>
              </Show>
            </a>
          </div>
          <div class=" md:block md:w-auto cursor-pointer">
            <FaSolidPowerOff
              onClick={(e) => {
                // logOut(e);
                setShowModal(!showModal());
                setShowModalStr("logout_confirmation");
              }}
            />
          </div>
        </div>
      </nav>
      <Show when={showModal() && showModalStr() === "logout_confirmation"}>
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
            <div class="w-full ">
              <div class="w-full w-96 px-8 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">
                    Are you sure you want to Logout?
                  </p>
                </div>
                <div class="mt-6 internal-tables flex">
                  <button
                    onClick={() => {
                      setShowModal(!showModal());
                    }}
                    class="log-inputs text-gray focus:outline-none grow px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300"
                  >
                    cancel
                  </button>
                  <button
                    onClick={(e) => {
                      setShowModal(!showModal());
                      logOut(e);
                    }}
                    class="log-inputs text-white focus:outline-none bg-codefend px-6 grow py-3 text-sm tracking-wide text-white transition-colors duration-300"
                  >
                    Logout
                  </button>
                </div>
                {/* <AddDomainModal /> */}
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </>
  );
}

export default Navbar;
