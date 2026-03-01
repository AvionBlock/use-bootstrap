<script setup>
import { forOwn, get } from "es-toolkit/compat";
import { components } from "../../modules/useComponents";
import UseBootstrap, {} from "./UseBootstrap.vue";
const list = [];
forOwn(components, (value, key) => {
  if (value.path && !value.spec?.parents && !value.spec?.layout && value.category != "spec" && value.category != "integration") {
    const test = get(value.examples, "test");
    list.push({
      component: key,
      ...test,
      ...!test?.text && { text: key }
    });
  }
});
</script>

<template>
 <div
  v-for="item in list"
  :key="item.component"
 >
  <div>{{ item.component }}</div>
  <UseBootstrap v-bind="item" />
 </div>
</template>
