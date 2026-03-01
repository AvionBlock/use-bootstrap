import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "CardGroup",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    flush: {
      type: Boolean
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "card-group": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
