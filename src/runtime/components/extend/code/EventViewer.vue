<template>
 <div class="mt-4 p-4 border">
  {{ raised.name }} : {{ raised.event }} : {{ time }}
 </div>
</template>

<script setup>
import { ref, watch } from "#imports";
const props = defineProps({
  raised: {
    type: Object,
    default: () => ({
      name: "",
      event: ""
    })
  }
});
const time = ref("");
watch(
  () => props.raised,
  () => {
    const now = /* @__PURE__ */ new Date();
    time.value = now.toLocaleTimeString();
  }
);
</script>
