<script setup>
import { Swiper as VSwiper } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Mousewheel, Autoplay, EffectFade } from "swiper/modules";
import { ref } from "#imports";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/hash-navigation";
import "swiper/css/history";
import "swiper/css/keyboard";
import "swiper/css/manipulation";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";
import "swiper/css/virtual";
import "swiper/css/zoom";
const props = defineProps({
  navigation: {
    type: [Boolean, Object],
    default: void 0
  },
  pagination: {
    type: [Boolean, Object],
    default: void 0
  },
  thumbs: {
    type: [Object],
    default: void 0
  },
  direction: {
    type: String,
    default: void 0
  },
  mousewheel: {
    type: [Boolean],
    default: void 0
  },
  autoplay: {
    type: [Boolean, Object],
    default: void 0
  },
  effect: {
    type: [String],
    default: void 0
  },
  autoHeight: {
    type: [Boolean],
    default: false
  }
});
const modules = ref([Scrollbar, A11y]);
if (props.navigation) {
  modules.value.push(Navigation);
}
if (props.pagination) {
  modules.value.push(Pagination);
}
if (props.thumbs) {
  modules.value.push(Thumbs);
}
if (props.mousewheel) {
  modules.value.push(Mousewheel);
}
if (props.autoplay) {
  modules.value.push(Autoplay);
}
if (props.effect == "fade") {
  modules.value.push(EffectFade);
}
</script>

<template>
 <v-swiper
  :modules="modules"
  :navigation="navigation"
  :pagination="pagination"
  :thumbs="thumbs"
  :direction="direction"
  :mousewheel="mousewheel"
  :autoplay="autoplay"
  :effect="effect"
  :auto-height="autoHeight"
 >
  <slot />
 </v-swiper>
</template>

<style scoped>
@charset "UTF-8";
.swiper {
  width: 100%;
  transform: translate3d(0, 0, 0);
  /* 3D変換を強制 */
  backface-visibility: hidden;
  /* バックフェイスの表示を無効化 */
}

.swiper-slide {
  display: flex;
  height: auto;
  width: 100%;
  /* スライドの幅を固定 */
  transform: translate3d(0, 0, 0);
  /* 3D変換を強制 */
  backface-visibility: hidden;
  /* バックフェイスの表示を無効化 */
}
</style>
