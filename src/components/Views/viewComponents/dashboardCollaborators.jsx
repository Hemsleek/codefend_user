//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import '../../../assets/css/flags.css';

function InternalNetworks() {

  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }, 
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }, 
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);

  return (
    <>
      <div class="w-full internal-tables  mt-4">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Collaborators and team members.</p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-3/12">full name</p>
          <p class="text-base w-3/12">email</p>
          <p class="text-base w-3/12">phone number</p>
          <p class="text-base w-2/12">role</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll its-30">
        <For each={cats()}>
          {
            () =>
            <>
              <div class="flex pl-8 text-format">
                <p class="text-base w-1/12 pt-3 pb-3">3046</p>
                <p class="text-base w-3/12 pt-3 pb-3">Chris Russo</p>
                <p class="text-base w-3/12 pt-3 pb-3">chris@codefend.com</p>
                <p class="text-base w-3/12 pt-3 pb-3">+54 11 2233-4455</p>
                <p class="text-base w-2/12 pt-3 pb-3">owner</p>
              </div>
            </>
          }
        </For>
      </div>
    </>
  );
}

export default InternalNetworks;

