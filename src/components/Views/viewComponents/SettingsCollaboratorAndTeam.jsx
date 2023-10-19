//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import "../../../assets/css/flags.css";
import { HiSolidUserGroup } from "solid-icons/hi";

function SettingCollaboratorAndTeam() {
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
      <div class="w-full internal-tables mt-6">
        <div class="py-3 px-7 internal-tables-active flex flex-row items-center gap-x-4 ">
          <HiSolidUserGroup class="codefend-text-red w-4 h-4" />
          <p class="text-small text-left font-bold title-format">
            COLLABORATORS AND TEAM MEMBERS
          </p>
          <p class="text-small text-left font-bold title-format 5px]  cursor-pointer codefend-text-red pl-2">
            ADD NEW MEMBER
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-2/12">id</p>
          <p class="text-base w-3/12">full name</p>
          <p class="text-base w-3/12">email</p>
          <p class="text-base w-2/12">phone number</p>
          <p class="text-base w-2/12">role</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll its-40">
        <For each={cats()}>
          {() => (
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format">
                <p class="text-base w-2/12">3046</p>
                <p class="text-base w-3/12">Asiyanbi Mubashir</p>
                <p class="text-base w-3/12">hemsleek@codefend.com</p>
                <p class="text-base w-2/12">+2348108170354</p>
                <p class="text-base w-2/12">administrator</p>
              </div>
            </>
          )}
        </For>
      </div>
    </>
  );
}

export default SettingCollaboratorAndTeam;
