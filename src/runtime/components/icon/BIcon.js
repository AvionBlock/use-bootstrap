import { hProps, addProp } from "../../composables/utils/useProps.js";
import { useBlock } from "../../composables/base/useBlock.js";
import { BlockProps } from "../../composables/base/useBaseProps.js";
import { defineComponent, h, ref, computed } from "#imports";
import { Icon } from "#components";
export default defineComponent({
  name: "BIcon",
  props: {
    ...BlockProps,
    icon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    const elementRef = ref();
    const block = useBlock(props);
    const current = {
      attr: computed(() => {
        return {
          name: props.icon
        };
      }),
      style: computed(() => {
        return {
          "vertical-align": "-.125em",
          // https://icons.getbootstrap.com/
          ...addProp(props.color, "color", `var(--bs-${props.color})`)
        };
      }),
      //  style: {
      //   'vertical-align': '-.125em', // https://icons.getbootstrap.com/
      //   ...addProp(props.color, 'color', `var(--bs-${props.color})`),
      //  },
      ref: elementRef
    };
    if (props.icon === void 0) {
      return;
    }
    return () => h(
      Icon,
      hProps(current, block),
      void 0
    );
  }
});
