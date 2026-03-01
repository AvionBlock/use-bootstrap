<template>
 <textarea
  v-bind="attrs"
  v-model="model"
  :class="classObject"
 />
</template>

<script setup>
import { useBlock } from "../../../composables/base/useBlock";
import { BlockProps } from "../../../composables/base/useBaseProps";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { hProps } from "../../../composables/utils/useProps";
import { useFormItem } from "../../../composables/bootstrap/useFormLabel";
import { IDProps } from "../../../composables/attributes/useID";
import {
  useFormControl,
  FormControlProps
} from "../../../composables/bootstrap/useFormControl";
const props = defineProps({
  ...BlockProps,
  ...FormControlProps,
  ...IDProps,
  ...StateComponentProps,
  tag: {
    type: String,
    default: "textarea"
  }
});
const model = defineModel({ type: String });
const block = useBlock(props);
const { classObject } = useStateComponent(props, model);
const formControl = useFormControl(props);
const formItem = useFormItem(props);
const attrs = hProps(formControl, formItem, block);
</script>
