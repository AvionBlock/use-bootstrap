import { hProps } from "../../composables/utils/useProps.js";
import { useBlock } from "../../composables/base/useBlock.js";
import { BlockProps } from "../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Paragraph",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "p"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
