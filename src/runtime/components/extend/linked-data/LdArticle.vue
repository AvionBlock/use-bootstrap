<template>
 <slot />
</template>

<script setup>
import { useRoute, inject, provide, ref, computed } from "#imports";
const props = defineProps({
  type: {
    type: String,
    default: "Article"
  },
  headline: String,
  url: String
});
const route = useRoute();
const ldAuthor = ref([]);
provide("ld-author", ldAuthor);
const ldPublisher = ref([]);
provide("ld-publisher", ldPublisher);
const linkedData = inject("likedData");
if (linkedData) {
  linkedData.value.push(
    computed(() => {
      return {
        "@context": "https://schema.org",
        "@type": props.type,
        "headline": props.headline || route.meta.title,
        ...ldAuthor.value.length > 0 && { author: ldAuthor.value },
        ...ldPublisher.value.length > 0 && { publisher: ldPublisher.value }
      };
    })
  );
}
</script>
