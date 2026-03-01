import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Blockquotes",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "blockquote"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        blockquote: true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
