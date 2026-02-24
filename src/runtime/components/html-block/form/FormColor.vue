<template>
 <input
  v-bind="attrs"
  v-model="model"
  :class="classObject"
  type="color"
 />
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { hProps } from "../../../composables/utils/useProps";
import { computed } from "#imports";
const props = defineProps({
  ...BlockProps,
  ...StateComponentProps,
  tag: {
    type: String,
    default: "input"
  },
  size: {
    type: String,
    // sm, lg
    default: void 0
  },
  readonly: {
    type: Boolean
  }
});
const model = defineModel("#000000", { type: String });
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
const current = {
  class: computed(() => {
    return {
      [`form-control-color`]: true,
      [`form-control`]: !props.readonly,
      [`form-control-${props.size}`]: props.size
    };
  })
  // attr: {
  //  type: 'color',
  // },
};
const attrs = hProps(current, block);
</script>
