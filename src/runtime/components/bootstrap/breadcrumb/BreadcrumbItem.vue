<template>
 <ListItem
  class="breadcrumb-item"
  v-bind="selfAttrs"
 >
  <Anchor
   v-if="!active"
   v-bind="attrs"
  >
   <slot />
  </Anchor>
  <slot v-if="active" />
 </ListItem>
</template>

<script setup>
import Anchor from "../../html-inline/Anchor";
import ListItem from "../../html-block/ListItem";
import { useAttrs, computed } from "#imports";
const attrs = useAttrs();
const props = defineProps({
  active: {
    type: Boolean,
    default: void 0
  }
});
const selfAttrs = computed(() => {
  if (props.active) {
    return {
      ...attrs
    };
  } else {
    return void 0;
  }
});
</script>
