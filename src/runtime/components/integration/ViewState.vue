<template>
 <Suspense suspensible>
  <slot
   :key="slotKey"
   :data="data"
   :status="status"
   :update="update"
   :set="set"
   :reload="reload"
   :sync-result="syncResult"
   :sync-status="syncStatus"
   :validate="validate"
   :validation-result="validationResult"
  />
  <template #fallback>
   <Spinner sm />
  </template>
 </Suspense>
</template>

<script setup>
import { uniqueId } from "../../composables/utils/helpers";
import Spinner from "../bootstrap/spinner/Spinner";
import { ViewStateProps, useViewState } from "../../composables/view-state/useViewState";
import { ref, watch, onUnmounted } from "#imports";
const props = defineProps({
  ...ViewStateProps
});
defineOptions({
  inheritAttrs: false
});
const schemaValidator = props.schemaSrc ? await useViewState({ src: props.schemaSrc }) : void 0;
const { data, status, update, set, reload, syncStatus, syncResult, validate, validationResult, pause } = await useViewState(props, schemaValidator?.data?.value);
const slotKey = ref(uniqueId());
watch([status], (_) => {
  slotKey.value = uniqueId();
});
onUnmounted(async () => await pause());
</script>
