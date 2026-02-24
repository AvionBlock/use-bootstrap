export const ElementProps = {
  tag: {
    type: String,
    doc: "/lang-[lang]/getting-started/migration#generic_html_components"
  }
};
export const InlineProps = {
  ...ElementProps,
  fontSize: {
    type: [String, Number],
    // 1～6
    doc: "/lang-[lang]/utilities/text#font_size"
  },
  fontWeight: {
    type: String,
    // bold,bolder,normal,light,lighter
    doc: "/lang-[lang]/utilities/text#font_weight_and_italics"
  },
  fontStyle: {
    type: String,
    // italic,normal
    doc: "/lang-[lang]/utilities/text#font_weight_and_italics"
  },
  lineHeight: {
    type: String,
    // l,sm,base,lg
    doc: "/lang-[lang]/utilities/text#line_height"
  },
  fontMonospace: {
    type: Boolean,
    doc: "/lang-[lang]/utilities/text#monospace"
  },
  fontFamily: {
    type: String,
    // https://nuxt.com/modules/fonts
    doc: "/lang-[lang]/extend/modules/fonts"
  },
  textReset: {
    type: Boolean,
    doc: "/lang-[lang]/utilities/text#reset_color"
  },
  textDecoration: {
    type: String,
    // underline,line-through,none
    doc: "/lang-[lang]/utilities/text#text_decoration"
  },
  textTruncate: {
    type: Boolean,
    doc: "/lang-[lang]/helpers/text-truncation"
  },
  textOpacity: {
    type: [String, Number],
    //
    doc: "/lang-[lang]/utilities/colors#opacity"
  },
  textTransform: {
    type: String,
    // lowercase,uppercase,capitalize
    doc: "/lang-[lang]/utilities/text#text_transform"
  },
  textBackground: {
    type: String,
    //
    doc: "/lang-[lang]/helpers/color-background"
  },
  headings: {
    type: [String, Number],
    // 1～6
    doc: "/lang-[lang]/content/typography#headings"
  },
  displayHeadings: {
    type: [Number, String],
    // 1～6
    doc: "/lang-[lang]/content/typography#display_headings"
  },
  lead: {
    type: Boolean,
    doc: "/lang-[lang]/content/typography#lead"
  },
  mark: {
    type: Boolean,
    doc: "/lang-[lang]/content/typography#inline_text_elements"
  },
  small: {
    type: Boolean,
    doc: "/lang-[lang]/content/typography#inline_text_elements"
  },
  textColor: {
    type: String,
    doc: "/lang-[lang]/utilities/colors"
  },
  padding: {
    type: [String, Number, Array],
    doc: "/lang-[lang]/utilities/spacing"
  },
  margin: {
    type: [String, Number, Array],
    doc: "/lang-[lang]/utilities/spacing"
  },
  display: {
    type: [String, Array],
    // Flexはflex属性を使用
    doc: "/lang-[lang]/utilities/display"
  },
  gap: {
    type: [String, Number, Array],
    doc: [
      "/lang-[lang]/utilities/spacing#gap",
      "/lang-[lang]/layout/css-grid#gaps"
    ]
  },
  visuallyHidden: {
    type: [Boolean, String],
    // focusable
    doc: "/lang-[lang]/helpers/visually-hidden"
  },
  verticalAlign: {
    type: String,
    // baseline, top, middle, bottom , text-top, text-bottom
    doc: "/lang-[lang]/utilities/vertical-align"
  },
  visible: {
    type: Boolean,
    doc: "/lang-[lang]/utilities/visibility"
  },
  invisible: {
    type: Boolean,
    doc: "/lang-[lang]/utilities/visibility"
  },
  userSelect: {
    type: String,
    // all, auto, none
    doc: "/lang-[lang]/utilities/interactions#text_selection"
  },
  pointerEvents: {
    type: String,
    // none, auto
    doc: "/lang-[lang]/utilities/interactions#pointer_events"
  },
  backgroundColor: {
    type: String,
    // as PropType<ThemeColors>,
    doc: "/lang-[lang]/utilities/background#background_color"
  },
  backgroundGradient: {
    type: Boolean,
    doc: "/lang-[lang]/utilities/background#background_gradient"
  },
  backgroundImage: {
    // Extend
    type: String
  },
  backgroundSize: {
    // Extend
    type: String
  },
  backgroundRepeat: {
    // Extend
    type: String
  },
  backgroundPosition: {
    // Extend
    type: String
  },
  backgroundOpacity: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/background#opacity"
  },
  opacity: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/opacity"
  },
  relativeWidth: {
    // w-25 w-50 w-75 w-100 w-auto
    type: [String, Number],
    // 25 50 75 100 auto
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_parent"
  },
  relativeHeight: {
    // h-25 h-50 h-75 h-100 h-auto
    type: [String, Number],
    // 25 50 75 100 auto
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_parent"
  },
  maxWidth: {
    // mw-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_parent"
  },
  maxHeight: {
    // mh-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_parent"
  },
  viewportWidth: {
    // vw-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_viewport"
  },
  viewportHeight: {
    // vh-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_viewport"
  },
  minViewportWidth: {
    // min-vw-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_viewport"
  },
  minViewportHeight: {
    // min-vh-100
    type: Boolean,
    doc: "/lang-[lang]/utilities/sizing#relative_to_the_viewport"
  },
  placeholder: {
    type: [Boolean, String],
    // input tagで競合
    doc: "/lang-[lang]/components/placeholders"
  },
  placeholderSize: {
    type: String,
    // input tagで競合
    doc: "/lang-[lang]/components/placeholders"
  },
  col: {
    type: [Number, String, Array, Boolean],
    // auto
    doc: "/lang-[lang]/layout/columns"
  },
  position: {
    type: String,
    // static, relative absolute fixed sticky
    doc: "/lang-[lang]/utilities/position"
  },
  top: {
    type: [Number, String],
    doc: "/lang-[lang]/utilities/position"
  },
  start: {
    type: [Number, String],
    doc: "/lang-[lang]/utilities/position"
  },
  end: {
    type: [Number, String],
    doc: "/lang-[lang]/utilities/position"
  },
  bottom: {
    type: [Number, String],
    doc: "/lang-[lang]/utilities/position"
  },
  translate: {
    type: String,
    doc: "/lang-[lang]/utilities/position"
  },
  initialism: {
    type: [Boolean],
    doc: "/lang-[lang]/content/typography#abbreviations"
  },
  focusRing: {
    type: [Boolean],
    doc: "/lang-[lang]/helpers/focus-ring"
  },
  border: {
    type: [Boolean, String, Number],
    // true, top,end,bottom,start,0,top-0,end-0,bottom-0,start-0
    doc: "/lang-[lang]/utilities/borders"
  },
  borderColor: {
    type: String,
    // as PropType<ThemeColors>,
    doc: "/lang-[lang]/utilities/borders#color"
  },
  borderWidth: {
    type: [String, Number],
    // 1,2,3,4,5
    doc: "/lang-[lang]/utilities/borders#width"
  },
  borderSubtractive: {
    type: [Boolean, String],
    doc: "/lang-[lang]/utilities/borders#subtractive"
  },
  rounded: {
    type: [Boolean, String],
    doc: "/lang-[lang]/utilities/borders#radius"
  },
  roundedSize: {
    type: [Number, String],
    // 0 - 5
    doc: "/lang-[lang]/utilities/borders#sizes"
  },
  linkOpacity: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/link#link_opacity"
  },
  linkUnderline: {
    type: [Boolean, String],
    doc: "/lang-[lang]/utilities/link#link_underlines"
  },
  linkUnderlineOpacity: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/link#underline_opacity"
  },
  linkOffset: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/link#underline_offset"
  },
  theme: {
    type: String,
    doc: "/lang-[lang]/getting-started/color-management"
  }
  // card: {
  //       type: Boolean,
  // },
  // cardHeader: {
  //       type: Boolean,
  // },
  // cardBody: {
  //       type: Boolean,
  // },
  // cardFooter: {
  //       type: Boolean,
  // },
};
export const BlockProps = {
  ...InlineProps,
  // overlay: {
  //  type: Boolean,
  // },
  shadow: {
    type: [String, Boolean],
    // none, sm , lg
    doc: "/lang-[lang]/utilities/shadows"
  },
  textAlignment: {
    type: [String, Array],
    doc: "/lang-[lang]/utilities/text#text_alignment"
  },
  textWrap: {
    type: String,
    // wrap or nowrap
    doc: "/lang-[lang]/utilities/text#text_wrapping_and_overflow"
  },
  textBreak: {
    type: Boolean,
    //
    doc: "/lang-[lang]/utilities/text#word_break"
  },
  alignSelf: {
    type: String,
    // start,end,center,baseline,stretch,{breakPoint}-*,
    doc: [
      "/lang-[lang]/utilities/flex#align-self",
      "/lang-[lang]/layout/columns#alignment"
    ]
  },
  alignItems: {
    type: String,
    doc: [
      "/lang-[lang]/utilities/flex#align_items",
      "/lang-[lang]/layout/columns#alignment"
    ]
  },
  alignContent: {
    type: String,
    doc: "/lang-[lang]/utilities/flex#align_content"
  },
  flex: {
    type: [Boolean, String, Array],
    // inline, {breakPoint}, {breakPoint}-inline
    doc: "/lang-[lang]/utilities/flex#enable_flex_behaviors"
  },
  flexDirection: {
    type: [String, Array],
    // {breakPoint}-{row|column}-{reverse}
    doc: "/lang-[lang]/utilities/flex#direction"
  },
  flexFill: {
    type: [Boolean, String],
    // {breakPoint}-fill,
    doc: "/lang-[lang]/utilities/flex#fill"
  },
  flexGrow: {
    type: String,
    // {grow|shrink}-0,{grow|shrink}-1,{breakPoint}-{grow|shrink}-0
    doc: "/lang-[lang]/utilities/flex#grow_and_shrink"
  },
  flexShrink: {
    type: String,
    // {grow|shrink}-0,{grow|shrink}-1,{breakPoint}-{grow|shrink}-0
    doc: "/lang-[lang]/utilities/flex#grow_and_shrink"
  },
  // flexHorizontal: {
  //  type: String, // {start|end}
  //  doc: '/lang-[lang]/utilities/flex#direction',
  // },
  // flexVirtical: {
  //  type: String, // {top|bottom}
  //  doc: '/lang-[lang]/utilities/flex#direction',
  // },
  flexOrder: {
    type: [Number, String],
    // {number|first|last}, {breakPoint}-{number|first|last},
    doc: "/lang-[lang]/utilities/flex#order"
  },
  flexWrap: {
    type: String,
    //
    doc: "/lang-[lang]/utilities/flex#wrap"
  },
  float: {
    type: String,
    // start , end , none
    doc: "/lang-[lang]/utilities/float"
  },
  ratio: {
    type: [Boolean, String, Number],
    // true, 1x1,  4x3, 16x9 , 21x9 , 50
    doc: "/lang-[lang]/helpers/ratio"
  },
  fixed: {
    type: String,
    // top, bottom
    doc: "/lang-[lang]/helpers/position"
  },
  sticky: {
    type: String,
    // top, bottom
    doc: "/lang-[lang]/helpers/position"
  },
  clearfix: {
    type: Boolean,
    //
    doc: "/lang-[lang]/helpers/clearfix"
  },
  overflow: {
    type: [String, Array],
    // auto , hidden , visible , scroll
    doc: "/lang-[lang]/utilities/overflow"
  },
  // tableResponsive: {
  //  type: String,
  // },
  justifyContent: {
    type: String,
    doc: "/lang-[lang]/utilities/flex#justify_content"
  },
  vstack: {
    type: Boolean,
    doc: "/lang-[lang]/helpers/stacks#vertical"
  },
  hstack: {
    type: Boolean,
    doc: "/lang-[lang]/helpers/stacks#horizontal"
  },
  // align: {
  //  type: [String],
  //  deprecated: true,
  // },
  order: {
    type: [String, Number],
    doc: [
      "/lang-[lang]/utilities/flex#order",
      "/lang-[lang]/layout/columns#order"
    ]
  },
  offset: {
    type: [String, Number, Array],
    doc: "/lang-[lang]/layout/columns#offsetting_columns"
  },
  objectFit: {
    type: [String],
    doc: "/lang-[lang]/utilities/object-fit"
  },
  z: {
    type: [String, Number],
    doc: "/lang-[lang]/utilities/z-index"
  }
  // theme: {
  //  type: [String],
  // },
};
