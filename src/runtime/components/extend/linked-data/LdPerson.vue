<template>
 <slot />
</template>

<script setup>
import { inject } from "#imports";
const props = defineProps({
  type: {
    type: String,
    default: "Person"
  },
  name: String,
  url: String
});
const ldPerson = inject("ld-person");
if (ldPerson) {
  ldPerson.value.push(props);
}
</script>
