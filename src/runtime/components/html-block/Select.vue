<template>
 <select
  v-bind="attrs"
  ref="elementRef"
  v-model="model"
  :multiple="multiple"
 >
  <slot />
 </select>
</template>

<script setup>
import { useBlock } from "../../composables/base/useBlock";
import { BlockProps } from "../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../composables/view-state/useState/useStateComponent";
import { hProps } from "../../composables/utils/useProps";
import { ref } from "#imports";
const props = defineProps({
  ...BlockProps,
  ...StateComponentProps,
  tag: {
    // for useBlock
    type: String,
    default: "select"
  },
  multiple: {
    type: Boolean,
    default: void 0
  }
});
const elementRef = ref();
const model = defineModel({ type: String });
const block = useBlock(props);
useStateComponent(props, model);
const attrs = hProps(block);
</script>
