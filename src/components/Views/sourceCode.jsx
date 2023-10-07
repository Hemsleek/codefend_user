//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";

//Components
import SourceCode from './viewComponents/sourceCode.jsx';
import SourceCodeCollab from './viewComponents/sourceCodeCollab.jsx';

function SourceCodeView() {
  return (
    <>
      <main class="pt-12 p-8">
        <section class="w-8/12 pr-2">
          <div class="pb-9 title title-format h-16">
            Source code
          </div>
          <SourceCode/>
        </section>
        <section  class="w-4/12 pl-2">
          <div class="pb-9 title title-format h-16">
          </div>
          <SourceCodeCollab/>
        </section>
      </main>
    </>
  );
}

export default SourceCodeView;
