<script setup>
import { get, toPairs } from "es-toolkit/compat";
defineProps({
  data: {
    type: Array
  },
  schema: {
    type: Object
  }
});
</script>

<template>
 <tr
  v-for="item in data"
  :key="item"
 >
  <td
   v-for="field in toPairs(schema)"
   :key="field[0]"
  >
   {{ get(item, field[0]) }}
  </td>
 </tr>
</template>
