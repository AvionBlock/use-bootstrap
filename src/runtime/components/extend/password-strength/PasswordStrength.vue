<script setup>
import { zxcvbnAsync, debounce } from "@zxcvbn-ts/core";
import { watch, ref } from "#imports";
const props = defineProps({
  password: {
    type: String
  }
});
const result = ref();
result.value = await zxcvbnAsync(props.password || "");
const useZxcvbn = async () => {
  result.value = await zxcvbnAsync(props.password || "");
};
const zxcvbnDebounce = debounce(useZxcvbn, 200, false);
watch(() => props.password, zxcvbnDebounce);
</script>

<template>
 <slot
  v-bind="result"
 />
</template>
