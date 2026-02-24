import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "CarouselCaption",
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
        [`carousel-caption`]: true,
        "d-none": true,
        "d-md-block": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
