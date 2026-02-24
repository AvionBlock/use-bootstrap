import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import {
  usePageItem,
  PageItemProps
} from "../../../composables/bootstrap/usePagination.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "PageItem",
  props: {
    ...BlockProps,
    ...PageItemProps,
    tag: {
      type: String,
      default: "li"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const pageItemOptions = usePageItem(props);
    return () => h(props.tag, hProps(pageItemOptions, block), context.slots);
  }
});
