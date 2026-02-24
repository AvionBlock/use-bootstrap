declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    barPosition: {
        type: StringConstructor;
        default: string;
    };
    barColor: {
        type: StringConstructor;
        default: string;
    };
    barBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    barWidth: {
        type: StringConstructor;
        default: string;
    };
    barMargin: {
        type: StringConstructor;
        default: string;
    };
    barStyle: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    barPosition: {
        type: StringConstructor;
        default: string;
    };
    barColor: {
        type: StringConstructor;
        default: string;
    };
    barBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    barWidth: {
        type: StringConstructor;
        default: string;
    };
    barMargin: {
        type: StringConstructor;
        default: string;
    };
    barStyle: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    barPosition: string;
    barColor: string;
    barBorderWidth: string | number;
    barWidth: string;
    barMargin: string;
    barStyle: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
