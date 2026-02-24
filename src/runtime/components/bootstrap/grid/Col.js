import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Col",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: [Boolean, String, Number],
      default: true
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    return () => h(props.tag, hProps(block), context.slots);
  }
});
