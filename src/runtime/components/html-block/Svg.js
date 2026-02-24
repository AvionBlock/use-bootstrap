import { hProps } from "../../composables/utils/useProps.js";
import { useBlock } from "../../composables/base/useBlock.js";
import { BlockProps } from "../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Svg",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "svg"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const svg = {
      attr: {
        xmlns: "http://www.w3.org/2000/svg"
      }
    };
    return () => h(props.tag, hProps(block, svg), context.slots);
  }
});
