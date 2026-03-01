<template>
 <textarea
  v-bind="attrs"
  v-model="model"
 />
</template>

<script setup>
import { useBlock } from "../../composables/base/useBlock";
import { BlockProps } from "../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../composables/view-state/useState/useStateComponent";
import { hProps } from "../../composables/utils/useProps";
const props = defineProps({
  ...BlockProps,
  ...StateComponentProps,
  tag: {
    // for useBlock
    type: String,
    default: "textarea"
  }
});
const model = defineModel({ type: String });
const block = useBlock(props);
useStateComponent(props, model);
const attrs = hProps(block);
</script>
