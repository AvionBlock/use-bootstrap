import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Datalist",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "datalist"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
