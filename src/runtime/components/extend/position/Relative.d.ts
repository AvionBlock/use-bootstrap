declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    overflow: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    textAlignment: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    textWrap: {
        type: StringConstructor;
        doc: string;
    };
    textBreak: {
        type: BooleanConstructor;
        doc: string;
    };
    alignSelf: {
        type: StringConstructor;
        doc: string[];
    };
    alignItems: {
        type: StringConstructor;
        doc: string[];
    };
    alignContent: {
        type: StringConstructor;
        doc: string;
    };
    flex: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        doc: string;
    };
    flexDirection: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    flexFill: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    flexGrow: {
        type: StringConstructor;
        doc: string;
    };
    flexShrink: {
        type: StringConstructor;
        doc: string;
    };
    flexOrder: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    flexWrap: {
        type: StringConstructor;
        doc: string;
    };
    float: {
        type: StringConstructor;
        doc: string;
    };
    ratio: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        doc: string;
    };
    fixed: {
        type: StringConstructor;
        doc: string;
    };
    sticky: {
        type: StringConstructor;
        doc: string;
    };
    clearfix: {
        type: BooleanConstructor;
        doc: string;
    };
    justifyContent: {
        type: StringConstructor;
        doc: string;
    };
    vstack: {
        type: BooleanConstructor;
        doc: string;
    };
    hstack: {
        type: BooleanConstructor;
        doc: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string[];
    };
    offset: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    objectFit: {
        type: StringConstructor[];
        doc: string;
    };
    z: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    fontSize: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    fontWeight: {
        type: StringConstructor;
        doc: string;
    };
    fontStyle: {
        type: StringConstructor;
        doc: string;
    };
    lineHeight: {
        type: StringConstructor;
        doc: string;
    };
    fontMonospace: {
        type: BooleanConstructor;
        doc: string;
    };
    fontFamily: {
        type: StringConstructor;
        doc: string;
    };
    textReset: {
        type: BooleanConstructor;
        doc: string;
    };
    textDecoration: {
        type: StringConstructor;
        doc: string;
    };
    textTruncate: {
        type: BooleanConstructor;
        doc: string;
    };
    textOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    textTransform: {
        type: StringConstructor;
        doc: string;
    };
    textBackground: {
        type: StringConstructor;
        doc: string;
    };
    headings: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    displayHeadings: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    lead: {
        type: BooleanConstructor;
        doc: string;
    };
    mark: {
        type: BooleanConstructor;
        doc: string;
    };
    small: {
        type: BooleanConstructor;
        doc: string;
    };
    textColor: {
        type: StringConstructor;
        doc: string;
    };
    padding: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    margin: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    display: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    gap: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string[];
    };
    visuallyHidden: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    verticalAlign: {
        type: StringConstructor;
        doc: string;
    };
    visible: {
        type: BooleanConstructor;
        doc: string;
    };
    invisible: {
        type: BooleanConstructor;
        doc: string;
    };
    userSelect: {
        type: StringConstructor;
        doc: string;
    };
    pointerEvents: {
        type: StringConstructor;
        doc: string;
    };
    backgroundColor: {
        type: StringConstructor;
        doc: string;
    };
    backgroundGradient: {
        type: BooleanConstructor;
        doc: string;
    };
    backgroundImage: {
        type: StringConstructor;
    };
    backgroundSize: {
        type: StringConstructor;
    };
    backgroundRepeat: {
        type: StringConstructor;
    };
    backgroundPosition: {
        type: StringConstructor;
    };
    backgroundOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    opacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    relativeWidth: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    relativeHeight: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    maxWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    maxHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    viewportWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    viewportHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    minViewportWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    minViewportHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    placeholder: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    placeholderSize: {
        type: StringConstructor;
        doc: string;
    };
    col: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor)[];
        doc: string;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    start: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    end: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    bottom: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    translate: {
        type: StringConstructor;
        doc: string;
    };
    initialism: {
        type: BooleanConstructor[];
        doc: string;
    };
    focusRing: {
        type: BooleanConstructor[];
        doc: string;
    };
    border: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        doc: string;
    };
    borderColor: {
        type: StringConstructor;
        doc: string;
    };
    borderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    borderSubtractive: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    roundedSize: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkUnderline: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    linkUnderlineOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkOffset: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    theme: {
        type: StringConstructor;
        doc: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    overflow: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    textAlignment: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    textWrap: {
        type: StringConstructor;
        doc: string;
    };
    textBreak: {
        type: BooleanConstructor;
        doc: string;
    };
    alignSelf: {
        type: StringConstructor;
        doc: string[];
    };
    alignItems: {
        type: StringConstructor;
        doc: string[];
    };
    alignContent: {
        type: StringConstructor;
        doc: string;
    };
    flex: {
        type: (StringConstructor | BooleanConstructor | ArrayConstructor)[];
        doc: string;
    };
    flexDirection: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    flexFill: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    flexGrow: {
        type: StringConstructor;
        doc: string;
    };
    flexShrink: {
        type: StringConstructor;
        doc: string;
    };
    flexOrder: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    flexWrap: {
        type: StringConstructor;
        doc: string;
    };
    float: {
        type: StringConstructor;
        doc: string;
    };
    ratio: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        doc: string;
    };
    fixed: {
        type: StringConstructor;
        doc: string;
    };
    sticky: {
        type: StringConstructor;
        doc: string;
    };
    clearfix: {
        type: BooleanConstructor;
        doc: string;
    };
    justifyContent: {
        type: StringConstructor;
        doc: string;
    };
    vstack: {
        type: BooleanConstructor;
        doc: string;
    };
    hstack: {
        type: BooleanConstructor;
        doc: string;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string[];
    };
    offset: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    objectFit: {
        type: StringConstructor[];
        doc: string;
    };
    z: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    fontSize: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    fontWeight: {
        type: StringConstructor;
        doc: string;
    };
    fontStyle: {
        type: StringConstructor;
        doc: string;
    };
    lineHeight: {
        type: StringConstructor;
        doc: string;
    };
    fontMonospace: {
        type: BooleanConstructor;
        doc: string;
    };
    fontFamily: {
        type: StringConstructor;
        doc: string;
    };
    textReset: {
        type: BooleanConstructor;
        doc: string;
    };
    textDecoration: {
        type: StringConstructor;
        doc: string;
    };
    textTruncate: {
        type: BooleanConstructor;
        doc: string;
    };
    textOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    textTransform: {
        type: StringConstructor;
        doc: string;
    };
    textBackground: {
        type: StringConstructor;
        doc: string;
    };
    headings: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    displayHeadings: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    lead: {
        type: BooleanConstructor;
        doc: string;
    };
    mark: {
        type: BooleanConstructor;
        doc: string;
    };
    small: {
        type: BooleanConstructor;
        doc: string;
    };
    textColor: {
        type: StringConstructor;
        doc: string;
    };
    padding: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    margin: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string;
    };
    display: {
        type: (StringConstructor | ArrayConstructor)[];
        doc: string;
    };
    gap: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        doc: string[];
    };
    visuallyHidden: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    verticalAlign: {
        type: StringConstructor;
        doc: string;
    };
    visible: {
        type: BooleanConstructor;
        doc: string;
    };
    invisible: {
        type: BooleanConstructor;
        doc: string;
    };
    userSelect: {
        type: StringConstructor;
        doc: string;
    };
    pointerEvents: {
        type: StringConstructor;
        doc: string;
    };
    backgroundColor: {
        type: StringConstructor;
        doc: string;
    };
    backgroundGradient: {
        type: BooleanConstructor;
        doc: string;
    };
    backgroundImage: {
        type: StringConstructor;
    };
    backgroundSize: {
        type: StringConstructor;
    };
    backgroundRepeat: {
        type: StringConstructor;
    };
    backgroundPosition: {
        type: StringConstructor;
    };
    backgroundOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    opacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    relativeWidth: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    relativeHeight: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    maxWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    maxHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    viewportWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    viewportHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    minViewportWidth: {
        type: BooleanConstructor;
        doc: string;
    };
    minViewportHeight: {
        type: BooleanConstructor;
        doc: string;
    };
    placeholder: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    placeholderSize: {
        type: StringConstructor;
        doc: string;
    };
    col: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ArrayConstructor)[];
        doc: string;
    };
    top: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    start: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    end: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    bottom: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    translate: {
        type: StringConstructor;
        doc: string;
    };
    initialism: {
        type: BooleanConstructor[];
        doc: string;
    };
    focusRing: {
        type: BooleanConstructor[];
        doc: string;
    };
    border: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor)[];
        doc: string;
    };
    borderColor: {
        type: StringConstructor;
        doc: string;
    };
    borderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    borderSubtractive: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    roundedSize: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkUnderline: {
        type: (StringConstructor | BooleanConstructor)[];
        doc: string;
    };
    linkUnderlineOpacity: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    linkOffset: {
        type: (StringConstructor | NumberConstructor)[];
        doc: string;
    };
    theme: {
        type: StringConstructor;
        doc: string;
    };
}>> & Readonly<{}>, {
    tag: string;
    textBreak: boolean;
    clearfix: boolean;
    overflow: string;
    vstack: boolean;
    hstack: boolean;
    fontMonospace: boolean;
    textReset: boolean;
    textTruncate: boolean;
    lead: boolean;
    mark: boolean;
    small: boolean;
    visible: boolean;
    invisible: boolean;
    backgroundGradient: boolean;
    maxWidth: boolean;
    maxHeight: boolean;
    viewportWidth: boolean;
    viewportHeight: boolean;
    minViewportWidth: boolean;
    minViewportHeight: boolean;
    position: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
