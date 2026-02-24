declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    scrolledBackgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
    backgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        default: number;
    };
    scrolledBackgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
    backgroundColor: {
        type: StringConstructor;
        default: undefined;
    };
}>> & Readonly<{}>, {
    backgroundColor: string;
    offsetTop: number;
    scrolledBackgroundColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
