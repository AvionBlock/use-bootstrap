import { hProps } from "../../../composables/utils/useProps.js";
import { useImg, ImageProps } from "../../../composables/html/useImg.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "CarouselItemImage",
  props: {
    ...BlockProps,
    ...ImageProps,
    tag: {
      type: String,
      default: "img"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const image = useImg(props);
    const current = {
      class: {
        "d-block": true,
        "w-100": true
      }
    };
    return () => h(props.tag, hProps(current, image, block), context.slots);
  }
});
