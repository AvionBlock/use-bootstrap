declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    makerPosition: {
        type: StringConstructor;
        default: string;
    };
    makerColor: {
        type: StringConstructor;
        default: string;
    };
    makerWidth: {
        type: StringConstructor;
        default: string;
    };
    makerMargin: {
        type: StringConstructor;
        default: string;
    };
    maker: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    makerPosition: {
        type: StringConstructor;
        default: string;
    };
    makerColor: {
        type: StringConstructor;
        default: string;
    };
    makerWidth: {
        type: StringConstructor;
        default: string;
    };
    makerMargin: {
        type: StringConstructor;
        default: string;
    };
    maker: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    makerPosition: string;
    makerColor: string;
    makerWidth: string;
    makerMargin: string;
    maker: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
