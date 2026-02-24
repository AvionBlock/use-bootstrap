<template>
 <VDatePicker
  v-model="date"
  :class="classObject"
  :is-dark="isDark"
 />
</template>

<script setup>
import { DatePicker as VDatePicker } from "v-calendar";
import "./index.css";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { useDarkState } from "../../../composables/utils/useDarkState";
const props = defineProps({
  ...StateComponentProps
});
const date = defineModel({ type: [Date, String, Number, Object, null] });
const isDark = useDarkState();
const { classObject } = useStateComponent(props, date);
</script>
