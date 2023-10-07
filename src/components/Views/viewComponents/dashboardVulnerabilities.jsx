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
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Top priority vulnerabilities.</p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-2/12">published</p>
          <p class="text-base w-1/12">author</p>
          <p class="text-base w-1/12">class</p>
          <p class="text-base w-1/12">risk</p>
          <p class="text-base w-2/12">score</p>
          <p class="text-base w-6/12">issue title</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll its-30">
        <For each={cats()}>
          {
            () =>
              <>
                <div class="flex p-3 pl-8 internal-tables-active text-format">
                  <p class="text-base w-2/12">01-01-2023</p>
                  <p class="text-base w-1/12">@ chris</p>
                  <p class="text-base w-1/12">web</p>
                  <p class="text-base w-1/12">elevated</p>
                  <p class="text-base w-2/12">4</p>
                  <p class="text-base w-6/12">Frameable response, weaponization</p>
                </div>
              </>
          }
        </For>
      </div>
    </>
  );
}

export default InternalNetworks;

