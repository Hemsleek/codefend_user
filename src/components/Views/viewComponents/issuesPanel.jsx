//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import AddVulnerabilityModal from '../modalComponents/addVulnerabilityModal.jsx';
import VoxService from "../../../Services/apiHandler.jsx";
import history from '../../../history.jsx'

function SourceCode() {
  const { showModal, setShowModal, setShowModalStr, showModalStr } = createModal;
  const { user } = createUser;
  const [vulnerabilities, setVulnerabilities] = createSignal([])

  createEffect(() => {
    VoxService.getVulnerabilityResources(user().read_array[0])
      .then((res) => {
        setVulnerabilities(res.data);
      });
  }, []);


  return (
    <>
      <Show when={showModal() && showModalStr() === 'add_issue'}>
        <div onClick={() => {setShowModal(!showModal())}} class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <div onClick={(e) => {e.preventDefault(); e.stopPropagation()}} class="max-h-full max-w-xl overflow-y-auto bg-white">
            <div class="w-full">
              <div class="w-full w-96 internal-tables disable-border">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">Add a vulnerability</p>
                </div>
                <AddVulnerabilityModal />
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">Vulnerabilities</p>
          <p onClick={() => {setShowModal(!showModal()); setShowModalStr('add_issue')}} class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red">Add finding</p>
         </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-2/12">published</p>
          <p class="text-base w-2/12">author</p>
          <p class="text-base w-2/12">class</p>
          <p class="text-base w-2/12">score</p>
          <p class="text-base w-5/12">issue title</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={vulnerabilities()}>
          {
            (vulnerability) =>
            <>
              <div class="flex p-3 pl-8 internal-tables-active text-format cursor-pointer" onClick={() => {history.push('/issues/' + vulnerability.id)}}>
                <p class="text-base w-2/12">{new Date(vulnerability.created).toISOString().split('T')[0]}</p>
                <p class="text-base w-2/12">{vulnerability.researcher.name}</p>
                <p class="text-base w-2/12">{vulnerability.issue_class}</p>
                <div class="flex no-border-bottom text-base w-2/12">
                  {vulnerability.risk_score}
                  <div class="mr-1"></div>
                  <For each={new Array(vulnerability.risk_score)}>
                    {
                      () =>
                      <>
                        <div class="w-2 h-2 ml-0.5 mt-2 red-border rounded-full codefend-bg-red"></div>
                      </>
                    }
                  </For>
                  <For each={new Array(5 - vulnerability.risk_score)}>
                    {
                      () =>
                      <>
                        <div class="w-2 h-2 ml-0.5 mt-2 codefend-border-red rounded-full"></div>
                      </>
                    }
                  </For>
                </div>
                <p class="text-base w-5/12">{vulnerability.issue_name}</p>
              </div>
            </>
          }
        </For>
      </div>
    </>
  );
}

export default SourceCode;

