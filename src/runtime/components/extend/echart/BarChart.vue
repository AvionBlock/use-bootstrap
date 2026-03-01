<template>
 <v-chart :id="id" :option="computedOption" />
</template>

<script setup>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  DatasetComponent
} from "echarts/components";
import VChart from "vue-echarts/csp";
import "vue-echarts/csp/style.css";
import { computed } from "vue";
import { useDarkState } from "../../../composables/utils/useDarkState";
import { useId, unref } from "#imports";
const id = useId();
const props = defineProps({
  option: {
    type: Object,
    default: void 0
  },
  series: {
    type: Array,
    default: void 0
  },
  xAxisData: {
    type: Array,
    default: void 0
  },
  dimensions: {
    type: Array,
    default: void 0
  },
  source: {
    type: Array,
    default: void 0
  }
});
use([
  SVGRenderer,
  BarChart,
  GridComponent,
  DatasetComponent
]);
const isDark = useDarkState();
const computedOption = computed(
  () => {
    const result = {
      dataset: {
        dimensions: props.dimensions,
        source: props.source
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: props.series
    };
    return result;
  }
);
</script>
