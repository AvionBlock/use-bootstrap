<template>
 <select
  v-bind="attrs"
  v-model="model"
  :multiple="multiple"
  :class="classObject"
 >
  <slot />
 </select>
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { addProp, hProps } from "../../../composables/utils/useProps";
import { computed } from "#imports";
const props = defineProps({
  ...BlockProps,
  ...StateComponentProps,
  tag: {
    // for useBlock
    type: String,
    default: "select"
  },
  size: {
    type: String,
    default: void 0
  },
  length: {
    type: [Number, String],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: void 0
  }
});
const model = defineModel({ type: [String, Array] });
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
const current = {
  class: computed(() => {
    return {
      [`form-select`]: true,
      [`form-select-${props.size}`]: props.size
    };
  }),
  attr: computed(() => {
    return {
      ...addProp(props.length, "size", `${props.length}`)
    };
  })
};
const attrs = hProps(current, block);
</script>
