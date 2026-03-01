import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "DropdownItemText",
  props: {
    ...BlockProps
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "dropdown-item-text": true
      }
    };
    return () => h("li", h("span", hProps(block, current), context.slots));
  }
});
