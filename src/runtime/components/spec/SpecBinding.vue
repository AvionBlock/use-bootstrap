<template>
  <b-div :class="classObject" :style="styleObject" v-bind="attrsObject" >
    <slot />
  </b-div>
</template>

<script setup>
import { useInterval } from "@vueuse/core";
import { mergeRef, mergeFunc } from "../../../composables/utils/useAttrsMerge";
import { computed, onMounted, useAttrs, reactive, ref, toRefs, unref } from "vue";
defineOptions({
  inheritAttrs: false
});
const attrs = useAttrs();
onMounted(() => {
});
const counter = useInterval(1e3, { immediate: true });
const composable = {
  class: computed(() => {
    return {
      [`composable-${counter.value}`]: counter.value % 2 == 0
    };
  }),
  style: computed(() => {
    return {
      [`z-index`]: `${counter.value}`
    };
  }),
  attrs: computed(() => {
    return {
      composable: counter.value,
      [`data-composable-${counter.value}`]: `${counter.value}`
    };
  }),
  event: {
    onClick: () => {
      console.log("click1");
    }
  }
};
const current = {
  class: computed(() => {
    return {
      [`current-${counter.value}`]: `${counter.value % 2 == 0}`
    };
  }),
  style: computed(() => {
    return {
      [`--current-${counter.value}`]: `counter-${counter.value}`
    };
  }),
  attrs: computed(() => {
    return {
      id: counter.value,
      [`data-current-${counter.value}`]: `${counter.value}`
    };
  }),
  event: {
    onClick: () => {
      console.log("click2");
    }
  }
};
const classObject = mergeRef(composable.class, current.class);
const styleObject = mergeRef(composable.style, current.style);
const eventsObject = mergeFunc(composable.event, current.event, attrs);
const attrsObject = mergeRef(composable.attrs, current.attrs, eventsObject);
</script>
