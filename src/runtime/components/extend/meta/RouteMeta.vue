<template>
 <slot />
</template>

<script setup>
import { toValue } from "vue";
import { useRoute, watch } from "#imports";
const props = defineProps({
  meta: Object
});
const route = useRoute();
watch([route], (_) => {
  const meta = toValue(props.meta);
  if (meta && typeof meta === "object") {
    Object.entries(meta).forEach(([key, value]) => {
      route.meta[key] = toValue(value);
    });
  }
}, { immediate: true });
</script>
