<template>
 <slot
  :data="result"
  :pager="pager"
 />
</template>

<script setup>
import { toNumber } from "es-toolkit/compat";
import { useQuery } from "../../composables/query/useQuery";
import { ref, watch, onNuxtReady, nextTick } from "#imports";
const props = defineProps({
  data: {
    type: [Array]
  },
  filter: {
    type: [Object, String]
  },
  pageSize: {
    type: Number
  },
  page: {
    type: [Number, String]
  },
  sort: {
    type: [Object, String]
  },
  group: {
    type: [Object, String]
  },
  aggregate: {
    type: [Object, String]
  }
});
const query = useQuery();
const result = ref();
const filtered = ref();
const max = ref(0);
const pager = {};
const refreshPaginated = () => {
  if (props.page && props.pageSize) {
    const page = toNumber(props.page);
    const next = page * props.pageSize;
    if (max.value < next) {
      filtered.value = query.filter(props.filter, props.data, next);
      max.value = next;
    }
    result.value = query.paginate({ page: toNumber(props.page), size: props.pageSize }, filtered.value);
  }
};
const refresh = () => {
  refreshPaginated();
};
refresh();
onNuxtReady(async () => {
  await nextTick();
  filtered.value = query.filter(props.filter, props.data, 1e3);
  max.value = 1e3;
});
watch(() => [props.size, props.page], () => {
  refresh();
});
watch(() => [props.filter], () => {
  max.value = 0;
  refresh();
});
</script>
