<template>
  <Doughnut :data="data" :options="options" />
</template>

<script>
  import { Doughnut } from "vue-chartjs"
  import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    Tooltip,
  } from "chart.js"

  ChartJS.register(
    ArcElement,
    Legend,
    Tooltip,
  )

  export default {
    name: 'DoughtnutChart',
    components: { Doughnut },
    data() {
      return {
        data: {},
        options: {},
      }
    }
  }
</script>
