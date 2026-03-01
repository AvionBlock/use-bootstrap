import { hProps } from "../../../composables/utils/useProps.js";
import { useImg, ImageProps } from "../../../composables/html/useImg.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "FigureImage",
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
        "figure-img": true
      }
    };
    return () => h("img", hProps(image, block, current), context.slots);
  }
});
