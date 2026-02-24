import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "OffcanvasBody",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "offcanvas-body": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
