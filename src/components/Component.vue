<template>
  <div>
    <canvas></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js';
export default {
  name: 'ChartComponent',
  chartConstructor(chartType, chartData, chartOptions) {
      const chartElement = document.querySelector('canvas');
      const chart = new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions,
      });
      return chart
    },
  data() {
    return {
      labels: ['Jan1', 'Jan2', 'Jan3', 'Jan4', 'Jan5', 'Jan6', 'Jan7'],
      datasets: [
        {
          label: 'This week',
          data: [12, 19, 10, 17, 6, 3, 7],
          backgroundColor: 'rgba(224, 248, 255, 0.4)',
          borderColor: '#5cddff',
          lineTension: 0,
          pointBackgroundColor: '#5cddff',
        },
        {
          label: 'Last week',
          data: [10, 25, 3, 25, 17, 4, 9],
          backgroundColor: 'rgba(241, 225, 197, 0.4)',
          borderColor: '#ffc764',
          lineTension: 0,
          pointBackgroundColor: '#ffc764',
        },
      ],
    };
  },
  props: {
    chartType: String,
    chartData: Object,
    chartOptions: Object,
  },
  methods: {
    
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    let { chartType, chartData, chartOptions } = this;
    this.chartConstructor(chartType, chartData, chartOptions);
  },
  // Se pueden utilizar estos hooks para el ciclo de vida
  // beforeCreate, created, beforeMount, mounted, beforeUpdate, updated
  // activated, deactivated, beforeUnmount, unmounted
};
</script>

<style scoped></style>
