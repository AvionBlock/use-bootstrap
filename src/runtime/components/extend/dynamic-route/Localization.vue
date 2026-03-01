<template>
 <slot :name="name" />
</template>

<script setup>
import { useDynamicRouteParam } from "../../../composables/extend/dynamicRoute/useDynamicRouteParam";
const name = useDynamicRouteParam("lang");
</script>
