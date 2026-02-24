declare var __VLS_10: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
} & {
    divider?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    line: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    lineBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: StringConstructor;
        default: string;
    };
    lineMargin: {
        type: StringConstructor;
        default: string;
    };
    lineStyle: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    line: {
        type: BooleanConstructor;
        default: boolean;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    lineBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: StringConstructor;
        default: string;
    };
    lineMargin: {
        type: StringConstructor;
        default: string;
    };
    lineStyle: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    line: boolean;
    icon: string;
    lineColor: string;
    lineBorderWidth: string | number;
    lineMargin: string;
    lineStyle: string;
    lineWidth: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
