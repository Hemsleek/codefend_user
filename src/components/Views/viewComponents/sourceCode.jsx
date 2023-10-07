//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import AddRepositoryModal from '../modalComponents/addRepositoryModal.jsx';
import createInternalNetwork from "../../../Store/internalNetworks.jsx"
import VoxService from "../../../Services/apiHandler.jsx";

function SourceCode() {
  const { showModal, setShowModal, setShowModalStr, showModalStr } = createModal;
  const { user } = createUser;
  const [repositories, setRepositories] = createSignal([])

  createEffect(() => {
    VoxService.getRepositoryResources(user().read_array[0])
      .then((res) => {
        setRepositories(res.data);
      });
  }, []);

  return (
    <>
      <Show when={showModal() && showModalStr() === 'add_repository'}>
        <div onClick={() => {setShowModal(!showModal())}} class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} class="max-h-full max-w-xl overflow-y-auto bg-white">
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">Add a new repository</p>
                </div>
                <AddRepositoryModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">Source code</p>
          <p onClick={() => {setShowModal(!showModal()); setShowModalStr('add_repository')}} class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red">Add repository</p>
         </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-3/12">name</p>
          <p class="text-base w-5/12">address</p>
          <p class="text-base w-1/12">visibility</p>
          <p class="text-base w-2/12">source code</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={repositories()}>
          {
            (repository) =>
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format">
                <p class="text-base w-1/12">{repository.id}</p>
                <p class="text-base w-3/12">{repository.repository_name}</p>
                <p class="text-base w-5/12">{repository.repository_url}</p>
                <p class="text-base w-1/12">{repository.visibility}</p>
                <p class="text-base w-2/12">{repository.resource_language}</p>
              </div>
            </>
          }
        </For>
      </div>
    </>
  );
}

export default SourceCode;

