<template>
 <slot />
</template>

<script setup>
import { inject } from "#imports";
const props = defineProps({
  type: {
    type: String,
    default: "Organization"
  },
  name: String,
  url: String
});
const ldOrganization = inject("ld-organization");
if (ldOrganization) {
  ldOrganization.value.push(props);
}
</script>
