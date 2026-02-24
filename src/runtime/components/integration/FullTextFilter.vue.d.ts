declare var __VLS_1: {
    data: any;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor[];
    };
    filter: {
        type: StringConstructor[];
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            keys: string[];
        };
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor[];
    };
    filter: {
        type: StringConstructor[];
    };
    options: {
        type: ObjectConstructor;
        default: () => {
            keys: string[];
        };
    };
}>> & Readonly<{}>, {
    options: Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
