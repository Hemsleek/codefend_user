//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";

function SourceCodeCollab() {

  return (
    <>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Add our user to your repository</p>
        </div>

        <div class="flex pb-4 pt-4">

          <div class="pl-8 pr-8 w-12/12 no-border-bottom">
            In order to review the source code in your company private repositories we will need contributor access. Please add the following user: 
            <a class="cursor-pointer codefend-text-red underline">
              sourcecode@codefend.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SourceCodeCollab;

