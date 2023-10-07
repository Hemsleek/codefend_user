//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import '../../../assets/css/flags.css';

function InternalNetworksChart() {

  return (
    <>
      <div class="w-full internal-tables mt-4">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Supervised assets</p>
        </div>
        <div class="flex statics-table">
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">23</h6>
              <p class="text-sm uppercase font-bold">
                  Web external
              </p>
          </div>
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">3</h6>
              <p class="text-sm uppercase font-bold">
                  Mobile app
              </p>
          </div>
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">23</h6>
              <p class="text-sm uppercase font-bold">
                  Internal
              </p>
          </div>
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">10</h6>
              <p class="text-sm uppercase font-bold">
                  Cloud assets
              </p>
          </div>
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">10</h6>
              <p class="text-sm uppercase font-bold">
                  Source code
              </p>
          </div>
          <div class="text-center w-1/6 p-6">
              <h6 class="text-4xl font-bold lg:text-5xl xl:text-4xl">62</h6>
              <p class="text-sm uppercase font-bold">
                  Social engineering
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;

