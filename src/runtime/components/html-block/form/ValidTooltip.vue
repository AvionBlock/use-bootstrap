<template>
 <div
  v-if="$slots.valid && !props.invalid"
  v-bind="bind"
  class="valid-tooltip"
 >
  <slot name="valid" />
 </div>
 <div
  v-bind="bind"
  class="invalid-tooltip"
 >
  <slot />
 </div>
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { hProps } from "../../../composables/utils/useProps";
import { inject } from "#imports";
const props = defineProps({
  ...BlockProps
});
const block = useBlock(props);
const bind = hProps(block);
const hasValidateion = inject(
  "hasValidation",
  void 0
);
if (hasValidateion) {
  hasValidateion.value = true;
}
</script>
