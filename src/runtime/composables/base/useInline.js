import {
  addClassNames,
  addProp,
  hasValue,
  spacing
} from "../../composables/utils/useProps.js";
import { isNumber, isString, toString } from "../utils/helpers.js";
import { includesPresets } from "../../composables/utils/usePresets.js";
import { computed } from "#imports";
export function useInline(props) {
  const bgIncludePreset = computed(() => includesPresets("background-color", props.backgroundColor));
  const textColorIncludePreset = computed(() => includesPresets("text-color", props.textColor));
  const borderColorIncludePreset = computed(() => includesPresets("border-color", props.borderColor));
  const textBgIncludePreset = computed(() => includesPresets("text-bg-color", props.textBackground));
  return {
    class: computed(() => {
      return {
        [`fs-${props.fontSize}`]: props.fontSize,
        [`fw-${props.fontWeight}`]: props.fontWeight,
        [`fst-${props.fontStyle}`]: props.fontStyle,
        [`lh-${props.lineHeight}`]: props.lineHeight,
        "font-monospace": props.fontMonospace,
        "text-reset": props.textReset,
        [`text-decoration-${props.textDecoration}`]: props.textDecoration,
        "text-truncate": props.textTruncate,
        [`text-${props.textTransform}`]: props.textTransform,
        [`text-bg-${props.textBackground}`]: props.textBackground && textBgIncludePreset.value,
        [`h${props.headings}`]: props.headings,
        [`display-${props.displayHeadings}`]: props.displayHeadings,
        "lead": props.lead,
        "mark": props.mark,
        "small": props.small,
        [`text-${props.textColor}`]: props.textColor && textColorIncludePreset.value,
        [`text-opacity-${props.textOpacity}`]: props.textOpacity,
        ...addClassNames(props.padding, (n) => spacing(n, "p")),
        ...addClassNames(props.margin, (n) => spacing(n, "m")),
        ...addClassNames(props.gap, (n) => `gap-${n}`),
        [`visually-hidden${hasValue(props.visuallyHidden) ? `-${props.visuallyHidden}` : ""}`]: props.visuallyHidden,
        [`align-${props.verticalAlign}`]: props.verticalAlign,
        "visible": props.visible,
        "invisible": props.invisible,
        [`user-select-${props.userSelect}`]: props.userSelect,
        [`pe-${props.pointerEvents}`]: props.pointerEvents,
        [`bg-${props.backgroundColor}`]: props.backgroundColor && bgIncludePreset.value,
        [`bg-gradient`]: props.backgroundGradient,
        [`bg-opacity-${props.backgroundOpacity}`]: isString(props.backgroundOpacity),
        [`w-${props.relativeWidth}`]: props.relativeWidth,
        [`h-${props.relativeHeight}`]: props.relativeHeight,
        "mw-100": props.maxWidth,
        "mh-100": props.maxHeight,
        "vw-100": props.viewportWidth,
        "vh-100": props.viewportHeight,
        "min-vw-100": props.minViewportWidth,
        "min-vh-100": props.minViewportHeight,
        ...addClassNames(props.display, (n) => `d-${n}`),
        [`opacity-${props.opacity}`]: props.opacity,
        [`placeholder${hasValue(props.placeholder) ? `-${props.placeholder}` : ""}`]: (props.placeholder || props.placeholderSize) && !["input", "textarea"].includes(props.tag || ""),
        [`placeholder-${props.placeholderSize}`]: props.placeholderSize && !["input", "textarea"].includes(props.tag || ""),
        "col": props.col && !hasValue(props.col),
        ...addClassNames(hasValue(props.col), (n) => `col-${n}`),
        [`position-${props.position}`]: props.position,
        [`top-${props.top}`]: hasValue(props.top),
        [`start-${props.start}`]: hasValue(props.start),
        [`end-${props.end}`]: hasValue(props.end),
        [`bottom-${props.bottom}`]: hasValue(props.bottom),
        [`translate-${props.translate}`]: props.translate,
        "initialism": props.initialism,
        "focus-ring": props.focusRing,
        "border": props.border && !hasValue(props.border),
        // && (props.borderColor || props.borderWidth || props.borderSubtractive) && !(props.card || props.cardHeader || props.cardBody || props.cardFooter),
        ...addClassNames(hasValue(props.border), (n) => `border-${n}`),
        [`border-${props.borderColor}`]: props.borderColor && borderColorIncludePreset.value,
        [`border-${props.borderWidth}`]: props.borderWidth,
        [`border-${hasValue(props.borderSubtractive) ? `${props.borderSubtractive}-` : ""}0`]: props.borderSubtractive,
        [`rounded${hasValue(props.rounded) ? `-${props.rounded}` : ""}`]: props.rounded,
        [`rounded-${props.roundedSize}`]: props.roundedSize,
        [`link-opacity-${props.linkOpacity}`]: props.linkOpacity,
        [`link-underline-${props.linkUnderline}`]: isString(props.linkUnderline),
        [`link-underline`]: props.linkUnderline && !isString(props.linkUnderline) || props.linkUnderlineOpacity && !hasValue(props.linkUnderline),
        ...addClassNames(hasValue(props.linkUnderlineOpacity), (n) => `link-underline-opacity-${n}`),
        ...addClassNames(hasValue(props.linkOffset), (n) => `link-offset-${n}`)
        // [`card`]: props.card, // for border
        // [`card-header`]: props.cardHeader, // for border
        // [`card-body`]: props.cardBody, // for border
        // [`card-footer`]: props.cardFooter, // for border
      };
    }),
    style: computed(() => {
      return {
        ...addProp(props.backgroundImage, "background-image", `url(${props.backgroundImage})`),
        ...addProp(props.backgroundSize, "background-size", `${props.backgroundSize}`),
        ...addProp(props.backgroundRepeat, "background-repeat", `${props.backgroundRepeat}`),
        ...addProp(props.backgroundRepeat, "background-position", `${props.backgroundPosition}`),
        ...addProp(props.fontFamily, "font-family", props.fontFamily),
        // https://github.com/nuxt/fonts
        ...addProp(isNumber(props.backgroundOpacity), "--bs-bg-opacity", `${props.backgroundOpacity}`),
        ...addProp(props.backgroundColor && !bgIncludePreset.value, "background-color", `var(--bs-${props.backgroundColor})`),
        ...addProp(props.textColor && !textColorIncludePreset.value, "color", `var(--bs-${props.textColor})`),
        ...addProp(props.borderColor && !borderColorIncludePreset.value, "border-color", `var(--bs-${props.borderColor}) !important`),
        // `rgba(from var(--bs-${props.borderColor}) r g b / var(--bs-border-opacity)) !important`),
        ...addProp(!props.backgroundColor && props.textBackground && !textBgIncludePreset.value, "background-color", `var(--bs-${props.textBackground})`),
        ...addProp(!props.textColor && props.textBackground && !textBgIncludePreset.value, "color", `var(--bs-contrast-${props.textBackground})`)
      };
    }),
    attr: computed(() => {
      return {
        ...addProp(props.tag != "input" && props.placeholder, "aria-hidden", "true"),
        ...addProp(props.tag == "input" && props.placeholder && isString(props.placeholder), "placeholder", toString(props.placeholder)),
        ...addProp(props.theme, "data-bs-theme", props.theme)
      };
    })
  };
}
