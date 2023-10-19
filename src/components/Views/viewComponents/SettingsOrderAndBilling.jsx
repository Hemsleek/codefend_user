//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import "../../../assets/css/flags.css";

import { RiUserFacesUserSettingsFill } from "solid-icons/ri";

function SettingsOrderAndBilling() {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  return (
    <>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex flex-row items-center gap-x-3">
          <RiUserFacesUserSettingsFill class="codefend-text-red w-4 h-4" />

          <p class="text-small text-left font-bold title-format">
            ORDERS & BILLING DETAILS
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-2/12 codefend-text-red underline">cafe</p>
          <p class="text-base w-3/12">order</p>
          <p class="text-base w-1/12">duration</p>
          <p class="text-base w-1/12">price</p>
          <p class="text-base w-1/12">discount</p>
          <p class="text-base w-2/12">final price</p>
          <p class="text-base w-1/12">status</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll its-35">
        <For each={cats()}>
          {() => (
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format">
                <p class="text-base w-2/12">29-06-2022</p>
                <p class="text-base w-3/12">web application pentest</p>
                <p class="text-base w-1/12">3 weeks</p>
                <p class="text-base w-1/12">$15,000</p>
                <p class="text-base w-1/12">20%</p>
                <p class="text-base w-2/12">$12,000</p>
                <p class="text-base w-1/12">unpaid</p>
              </div>
            </>
          )}
        </For>
      </div>
    </>
  );
}

export default SettingsOrderAndBilling;
