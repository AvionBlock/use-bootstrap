import { hProps } from "../../composables/utils/useProps.js";
import { useInline } from "../../composables/base/useInline.js";
import { InlineProps } from "../../composables/base/useBaseProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "Small",
  props: {
    ...InlineProps,
    tag: {
      type: String,
      default: "small"
    }
  },
  setup(props, context) {
    const inline = useInline(props);
    return () => h(props.tag, hProps(inline), context.slots);
  }
});
