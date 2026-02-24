<template>
 <slot />
</template>

<script setup>
import { inject, provide, ref } from "#imports";
const props = defineProps({
  type: {
    type: String,
    default: "Person"
  },
  name: String,
  url: String
});
const ldAuthor = inject("ld-author");
if (ldAuthor) {
  const persons = ref([]);
  provide("ld-person", persons);
  const organizations = ref([]);
  provide("ld-organization", organizations);
  ldAuthor.value.push(props);
}
</script>
