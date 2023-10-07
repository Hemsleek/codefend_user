//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import AddSocialModal from '../modalComponents/addSocialModal.jsx';
import VoxService from "../../../Services/apiHandler.jsx";

function SourceCode() {
  const { showModal, setShowModal, setShowModalStr, showModalStr } = createModal;
  const { user } = createUser;
  const [social, setSocial] = createSignal([])

  createEffect(() => {
    VoxService.getSocialResources(user().read_array[0])
      .then((res) => {
        setSocial(res.data);
      });
  }, []);

  return (
    <>
      <Show when={showModal() && showModalStr() === 'add_member'}>
        <div onClick={() => {setShowModal(!showModal())}} class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} class="max-h-full max-w-xl overflow-y-auto bg-white">
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">Add a new member</p>
                </div>
                <AddSocialModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">Organization members</p>
          <p onClick={() => {setShowModal(!showModal()); setShowModalStr('add_member')}} class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red">Add member</p>
         </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-3/12">full name</p>
          <p class="text-base w-3/12">email</p>
          <p class="text-base w-3/12">phone</p>
          <p class="text-base w-2/12">role</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={social()}>
          {
            (social) =>
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format">
                <p class="text-base w-1/12">{social.id}</p>
                <p class="text-base w-3/12">{social.member_fname}</p>
                <p class="text-base w-3/12">{social.member_email}</p>
                <p class="text-base w-3/12">{social.member_phone}</p>
                <p class="text-base w-2/12">{social.member_role}</p>
              </div>
            </>
          }
        </For>
      </div>
    </>
  );
}

export default SourceCode;

