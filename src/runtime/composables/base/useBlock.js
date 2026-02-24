import { addClassNames, hasValue, isPropDefined, addProp } from "../../composables/utils/useProps.js";
import { isNumber, isString, startsWith } from "../utils/helpers.js";
import { useInline } from "./useInline.js";
import { computed } from "#imports";
export function useBlock(props) {
  const inline = useInline(props);
  return {
    class: computed(() => {
      return {
        ...inline.class.value,
        "text-break": props.textBreak,
        ...addClassNames(props.textAlignment, (n) => `text-${n}`),
        [`text-${props.textWrap}`]: props.textWrap,
        [`align-self-${props.alignSelf}`]: props.alignSelf,
        [`align-items-${props.alignItems}`]: props.alignItems,
        [`align-content-${props.alignContent}`]: props.alignContent,
        ...addClassNames(
          props.flex,
          (n) => `d${hasValue(props.flex) ? `-${n}` : ""}-flex`
        ),
        ...addClassNames(props.flexDirection, (n) => `flex-${n}`),
        ...addClassNames(
          props.flexFill,
          (n) => `flex${hasValue(props.flexFill) ? `-${n}` : ""}-fill`
        ),
        ...addClassNames(
          props.flexGrow,
          (n) => isNumber(n) ? `flex-grow-${n}` : !isString(n) ? "" : startsWith(n, "sm") ? `flex-sm-grow-${n}` : startsWith(n, "md") ? `flex-md-grow-${n}` : startsWith(n, "lg") ? `flex-lg-grow-${n}` : startsWith(n, "xl") ? `flex-xl-grow-${n}` : startsWith(n, "xxl") ? `flex-xxl-grow-${n}` : `flex-grow-${n}`
        ),
        ...addClassNames(
          props.flexShrink,
          (n) => isNumber(n) ? `flex-shrink-${n}` : !isString(n) ? "" : startsWith(n, "sm") ? `flex-sm-shrink-${n}` : startsWith(n, "md") ? `flex-md-shrink-${n}` : startsWith(n, "lg") ? `flex-lg-shrink-${n}` : startsWith(n, "xl") ? `flex-xl-shrink-${n}` : startsWith(n, "xxl") ? `flex-xxl-shrink-${n}` : `flex-shrink-${n}`
        ),
        // [`flex-${props.flexGrow}`]: props.flexGrow,
        ...addClassNames(props.flexWrap, (n) => `flex-${n}`),
        [`order-${props.flexOrder}`]: props.flexOrder,
        [`float-${props.float}`]: props.float,
        [`shadow${hasValue(props.shadow) ? `-${props.shadow}` : ""}`]: isPropDefined(
          props.shadow
        ),
        "ratio": props.ratio,
        [`ratio-${props.ratio}`]: isString(props.ratio),
        [`fixed-${props.fixed}`]: props.fixed,
        [`sticky-${props.sticky}`]: props.sticky,
        "clearfix": props.clearfix,
        ...addClassNames(props.overflow, (n) => `overflow-${n}`),
        // [`table-responsive${hasValue(props.tableResponsive) ? `-${props.tableResponsive}` : ''}`]: props.tableResponsive,
        [`justify-content-${props.justifyContent}`]: props.justifyContent,
        "vstack": props.vstack,
        "hstack": props.hstack,
        // [`align-${props.align}`]: props.align,
        [`order-${props.order}`]: props.order,
        ...addClassNames(props.offset, (n) => `offset-${n}`),
        [`object-fit-${props.objectFit}`]: props.objectFit,
        [`z-${props.z}`]: props.z
      };
    }),
    style: computed(() => {
      return {
        ...inline.style.value,
        ...addProp(isNumber(props.ratio), "--bs-aspect-ratio", `${props.ratio}%`)
      };
    }),
    attr: computed(() => {
      return {
        ...inline.attr.value
        // ...addProp(props.theme, 'data-bs-theme', props.theme),
      };
    })
  };
}
