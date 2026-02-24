declare var __VLS_1: {
    action: import("../../composables/action-state/useActionState.js").ActionFunction;
    data: import("vue").Ref<unknown, unknown>;
}, __VLS_3: {}, __VLS_9: {
    action: import("../../composables/action-state/useActionState.js").ActionFunction;
    data: import("vue").Ref<unknown, unknown>;
    status: import("vue").Ref<number, number>;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    fallback?: (props: typeof __VLS_3) => any;
} & {
    complete?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        requird: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        requird: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
