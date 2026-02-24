<script setup>
import Fuse from "fuse.js";
import { take } from "es-toolkit/compat";
const props = defineProps({
  data: {
    type: [Array]
  },
  filter: {
    type: [String]
  },
  options: {
    type: Object,
    default: () => {
      return {
        keys: [
          "name"
        ]
      };
    }
  }
});
const fuse = new Fuse(props.data, props.options);
const result = ref();
watch(() => props.filter, () => {
  result.value = take(fuse.search(props.filter), 5);
});
</script>

<template>
 <slot
  :data="result"
 />
</template>
