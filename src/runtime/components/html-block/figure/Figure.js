import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Figure",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "figure"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        figure: true
      }
    };
    return () => h("figure", hProps(current, block), context.slots);
  }
});
