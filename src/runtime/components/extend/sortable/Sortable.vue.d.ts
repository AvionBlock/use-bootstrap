declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    stateSrc: {
        type: import("vue").PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: import("vue").PropType<unknown[]>;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: unknown[] | undefined) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stateSrc: {
        type: import("vue").PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: import("vue").PropType<unknown[]>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: unknown[] | undefined) => any) | undefined;
}>, {
    validate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
