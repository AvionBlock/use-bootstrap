<template>
 <input
  v-bind="attrs"
  v-model="model"
  :class="classObject"
  :indeterminate="indeterminate"
  :type="type"
 />
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { addProp, hProps } from "../../../composables/utils/useProps";
import { useFormItem } from "../../../composables/bootstrap/useFormLabel";
import { IDProps } from "../../../composables/attributes/useID";
import { inject } from "#imports";
const props = defineProps({
  ...BlockProps,
  ...IDProps,
  ...StateComponentProps,
  tag: {
    type: String,
    default: "input"
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "checkbox"
  }
});
const model = defineModel({ type: [String, Boolean, Array] });
const block = useBlock(props);
const formItem = useFormItem(props);
const { classObject } = useStateComponent(props, model);
const isSwitch = inject("switch", false);
const current = {
  class: {
    [`form-check-input`]: true
  },
  attr: {
    // type: props.type,
    ...addProp(isSwitch, "role", "switch")
  }
};
const attrs = hProps(current, formItem, block);
</script>
