//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Doughnut } from 'solid-chartjs'

function InternalNetworksChart() {

  onMount(() => {
      Chart.register(Title, Tooltip, Legend, Colors)
  })

  const chartData = {
      datasets: [{
          data: [2, 3, 3, 2, 7],
          backgroundColor: [
            '#e33556',
            '#dd3466',
            '#b43658',
            '#8d354e',
            '#643641'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(128, 128, 128, 1)'
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
          <p class="text-small text-left font-bold title-format">Vulnerabilities by risk</p>
        </div>

        <div class="flex pb-8 pt-8">
          <div class="flex text-format w-5/12 h-150 p-8  no-border-bottom">
              <Doughnut data={chartData} options={chartOptions}/>
          </div>
          <div class="w-7/12 no-border-bottom">
            <div class="flex p-3 text-format">
              <section class="flex w-full">
                <p class="text-base w-2/6">os</p>
                <p class="text-base w-2/6">count</p>
                <p class="text-base w-2/6">percent</p>
              </section>
            </div>
            <div class="flex p-3 text-format no-border-bottom">
              <section class="flex w-full">
                <p class="w-2/6">windows</p>
                <p class="text-base w-2/6">2</p>
                <p class="text-base w-2/6">10%</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;

