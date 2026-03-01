<template>
 <Navbar
  :class="classObject"
  :sticky="sticky"
  :style="styleObject"
 >
  <slot />
 </Navbar>
</template>

<script setup>
import Navbar from "../../bootstrap/navbar/Navbar";
import { useWindowScroll } from "../../../composables/utils/helpers";
import { computed } from "#imports";
const props = defineProps({
  offsetTop: {
    type: Number,
    default: 400
  },
  scrolledBackgroundColor: {
    type: String,
    default: void 0
  },
  backgroundColor: {
    type: String,
    default: void 0
  }
});
const windowScroll = useWindowScroll();
const scrolled = computed(() => windowScroll.y.value > props.offsetTop);
const sticky = computed(() => scrolled.value ? "top" : "");
const classObject = computed(() => ({
  "un-transition-all": true,
  [`un-duration-300`]: true,
  ["un-ease-in-out"]: true
}));
const styleObject = computed(() => ({
  "background-color": scrolled.value ? props.scrolledBackgroundColor : props.backgroundColor
}));
</script>
