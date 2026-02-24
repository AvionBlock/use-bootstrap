declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    decoration: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    line: {
        type: StringConstructor;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    lineBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
    decoration: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    line: {
        type: StringConstructor;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    lineBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
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
    line: string;
    decoration: string | unknown[];
    lineColor: string;
    lineBorderWidth: string | number;
    lineMargin: string;
    lineStyle: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
