<script setup>
import { toPairs } from "es-toolkit/compat";
import bTr from "../html-table/Tr";
import bTh from "../html-table/Th";
import ViewState from "./ViewState.vue";
defineProps({
  schema: {
    type: Object
  }
});
</script>

<template>
 <ViewState
  v-slot="query"
  src="query://"
  :data="{
  page: 1
}"
 >
  <b-tr>
   <b-th
    v-for="field in toPairs(schema)"
    :key="field[0]"
    scope="col"
    @click="(event) => {
  query.update({
    page: 1,
    filter: 'eq(get(:gender),:female)'
  });
}"
   >
    {{ field[1].title }}
   </b-th>
  </b-tr>
 </ViewState>
</template>
