//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Doughnut } from 'solid-chartjs'
import createInternalNetwork from "../../../Store/internalNetworks.jsx"

function InternalNetworksChart() {
  const { internalNetworksStore, setInternalNetworksStore } = createInternalNetwork;
  const [internalNetworks, setInternalNetworks] = createSignal([]);

  createEffect(() => {
    const filteredResources = internalNetworksStore() ? internalNetworksStore() : [];

    const countryDataMap = {};

    for (const resource of filteredResources) {
      const { vendor, percent } = resource;

      if (!countryDataMap[vendor]) {
        countryDataMap[vendor] = {
          vendor,
          count: 0,
          percentage: 0,
        };
      }

      countryDataMap[vendor].count++;
      countryDataMap[vendor].percentage += percent;
    }

    const countryDataArray = Object.values(countryDataMap).map(data => ({
      vendor: data.vendor,
      count: data.count,
      percentage: (data.count / filteredResources.length).toFixed(2) * 100,
    }));

    setInternalNetworks(countryDataArray);
    chartData = {
      datasets: [{
          data: [
            internalNetworks()?.filter(item => item.vendor === 'windows')[0]?.count ? internalNetworks()?.filter(item => item.vendor === 'windows')[0]?.count : 0,
            internalNetworks()?.filter(item => item.vendor === 'linux')[0]?.count ? internalNetworks()?.filter(item => item.vendor === 'linux')[0]?.count : 0,
            internalNetworks()?.filter(item => item.vendor === 'android')[0]?.count ? internalNetworks()?.filter(item => item.vendor === 'android')[0]?.count : 0,
            internalNetworks()?.filter(item => item.vendor === 'ios')[0]?.count ? internalNetworks()?.filter(item => item.vendor === 'ios')[0]?.count : 0,
            internalNetworks()?.filter(item => item.vendor === 'unknown')[0]?.count ? internalNetworks()?.filter(item => item.vendor === 'unknown')[0]?.count : 0
          ],
          backgroundColor: [
            '#e33556',
            '#dd3466',
            '#b43658',
            '#8d354e',
            '#643641'
          ],
          borderWidth: 0
      }],
      labels: [
          'windows',
          'linux',
          'android',
          'ios',
          'unknown',
      ]
  }
    Chart.register(Title, Tooltip, Legend, Colors)
  });

  let chartData = {
      datasets: [{
          data: [
            internalNetworks()[0]?.count ? internalNetworks()[0]?.count : 5 
          ],
          backgroundColor: [
            '#e33556',
            '#dd3466',
            '#b43658',
            '#8d354e',
            '#643641'
          ],
          borderWidth: 0
      }],
      labels: [
          'windows',
          'linux',
          'android',
          'ios',
          'unknown',
      ]
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">Network devices by technology</p>
        </div>
        <div class="flex">
          <div class="flex text-format w-5/12 h-150 p-8">
            <Show when={internalNetworks()[ 0]}>
              <Doughnut data={chartData} options={chartOptions}/>
            </Show>
          </div>
          <div class="w-7/12">
            <div class="flex p-3 text-format">
              <section class="flex w-full">
                <p class="text-base w-2/6">os</p>
                <p class="text-base w-2/6">count</p>
                <p class="text-base w-2/6">percent</p>
              </section>
            </div>
            
            <For each={internalNetworks()}>
              {
                (network) =>
                  <div class="flex p-3 text-format">
                    <section class="flex w-full">
                      <p class="w-2/6">{network.vendor}</p>
                      <p class="text-base w-2/6">{network.count}</p>
                      <p class="text-base w-2/6">{network.percentage}%</p>
                    </section>
                  </div>
              }
            </For>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;

