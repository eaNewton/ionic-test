<template>
  <Bar
    id="bar-chart"
    :options="options"
    :data="data"
  />
</template>

<script>
  import { Bar } from "vue-chartjs"
  import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
  } from "chart.js"
  import * as chartConfig from "@/data/chartConfig"

  ChartJS.register(
    BarElement,
    CategoryScale,
    Legend,
    LinearScale,
    Title,
    Tooltip
  )

  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return chartConfig
    }
  }
</script>

<style>
  #bar-chart {
    max-height: 300px;
  }
</style>
