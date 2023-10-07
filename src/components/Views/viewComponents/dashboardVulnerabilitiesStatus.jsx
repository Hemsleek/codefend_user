//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import '../../../assets/css/flags.css';

function InternalNetworksChart() {

  return (
    <>
      <div class="w-full internal-tables mt-4">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Vulnerabilities by status</p>
        </div>
        <div class="flex statics-table">
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">3/20</h6>
              <p class="text-sm uppercase font-bold">
                  Open issues
              </p>
          </div>
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">17/20</h6>
              <p class="text-sm uppercase font-bold">
                  Fixed issues
              </p>
          </div>
          <div class="text-center w-4/12 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">20</h6>
              <p class="text-sm uppercase font-bold">
                  Total issues
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;

