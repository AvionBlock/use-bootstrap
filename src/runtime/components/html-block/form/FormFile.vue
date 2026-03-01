<template>
 <input
  v-bind="attrs"
  type="file"
 />
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { hProps } from "../../../composables/utils/useProps";
import { computed } from "#imports";
const props = defineProps({
  ...BlockProps,
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
const block = useBlock(props);
const current = {
  class: computed(() => {
    return {
      [`form-control`]: !props.readonly,
      [`form-control-${props.size}`]: props.size
    };
  })
};
const attrs = hProps(current, block);
</script>
