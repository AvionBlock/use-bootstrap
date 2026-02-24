<template>
 <sortable-inner
  v-model="model"
  :class="{ ...classObject }"
 >
  <slot />
 </sortable-inner>
</template>

<script setup>
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import SortableInner from "./SortableInner";
const model = defineModel({ type: Array });
const props = defineProps({
  ...StateComponentProps
});
const { classObject } = useStateComponent(props, model);
</script>
