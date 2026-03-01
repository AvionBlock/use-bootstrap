<template>
 <VCalendar :is-dark="isDark" />
</template>

<script setup>
import { Calendar as VCalendar } from "v-calendar";
import { useDarkState } from "../../../composables/utils/useDarkState";
import "./index.css";
const isDark = useDarkState();
</script>

<style>
.vc-day{z-index:0}
</style>
