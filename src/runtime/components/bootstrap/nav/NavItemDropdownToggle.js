import { hProps } from "../../../composables/utils/useProps.js";
import { useBlock } from "../../../composables/base/useBlock.js";
import { BlockProps } from "../../../composables/base/useBaseProps.js";
import {
  useAnchor,
  AnchorProps
} from "../../../composables/html/useAnchor.js";
import { ToggleProps, useToggle } from "../../../composables/bootstrap/useToggle.js";
import { HoverProps, useHover } from "../../../composables/bootstrap/useHover.js";
import { defineComponent, h, ref, inject } from "#imports";
export default defineComponent({
  name: "NavItemDropdownToggle",
  props: {
    ...BlockProps,
    ...AnchorProps,
    ...ToggleProps,
    ...HoverProps,
    toggle: {
      type: String,
      default: "dropdown"
    }
  },
  setup(props, context) {
    const elementRef = inject("toggleRef.dropdown", ref());
    const block = useBlock(props);
    const Anchor = useAnchor(props);
    const toggle = useToggle(props, elementRef);
    const hover = useHover(props, elementRef);
    const current = {
      class: {
        "nav-link": true
      },
      ref: elementRef
    };
    return () => h(
      "a",
      hProps(current, block, toggle, hover, Anchor),
      context.slots
    );
  }
});
