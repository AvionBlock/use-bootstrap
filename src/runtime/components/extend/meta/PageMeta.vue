<template>
 <slot />
</template>

<script setup>
import { joinURL } from "ufo";
import { useDynamicRouteParam } from "../../../composables/extend/dynamicRoute/useDynamicRouteParam";
import { useSeoMeta, useSiteConfig, useHead, ref, provide, computed, toValue, useRoute, watch } from "#imports";
const props = defineProps({
  url: String,
  title: String,
  description: String,
  image: String,
  twitter: {
    type: Boolean,
    default: true
  },
  openGraph: {
    type: Boolean,
    default: true
  },
  linkedData: {
    type: Boolean,
    default: true
  },
  routeMeta: Object
});
const route = useRoute();
const siteConfig = useSiteConfig();
const siteUrl = siteConfig?.url;
const siteName = siteConfig?.name;
const lang = useDynamicRouteParam("lang");
const createImage = () => {
  if (siteUrl) {
    if (props.image) {
      return joinURL(siteUrl, props.image);
    } else if (siteConfig?.image) {
      return joinURL(siteUrl, siteConfig?.image);
    }
  }
  return void 0;
};
const pageImage = createImage();
useSeoMeta({
  title: props.title,
  description: props.description,
  ogTitle: props.title,
  ogSiteName: siteName,
  ogDescription: props.description,
  ogImage: pageImage,
  ogUrl: siteUrl,
  ogLocale: lang.value,
  twitterDescription: props.description,
  twitterCard: pageImage ? "summary_large_image" : void 0,
  twitterImage: pageImage,
  twitterTitle: props.title
});
if (props.linkedData) {
  const likedData = ref([]);
  provide("likedData", likedData);
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    ...siteUrl && { url: siteUrl },
    ...siteName && { name: siteName }
  };
  const jsonLd = computed(() => {
    return JSON.stringify([
      website,
      ...likedData.value ? likedData.value.map((item) => toValue(item)) : []
    ]);
  });
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: jsonLd
      }
    ]
  });
  watch([route], (_) => {
    if (props.routeMeta) {
      const meta = toValue(props.routeMeta);
      if (meta && typeof meta === "object") {
        Object.entries(meta).forEach(([key, value]) => {
          route.meta[key] = toValue(value);
        });
      }
    }
  }, { immediate: true });
}
</script>
