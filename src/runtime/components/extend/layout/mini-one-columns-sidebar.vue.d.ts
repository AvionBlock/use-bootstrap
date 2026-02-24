declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    contentTop: string;
    contentHeightOffset: string;
    contentBottom: string;
    startTop: string;
    startBottom: string;
    $props: {
        readonly contentTop?: string | undefined;
        readonly contentHeightOffset?: string | undefined;
        readonly contentBottom?: string | undefined;
        readonly startTop?: string | undefined;
        readonly startBottom?: string | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    mini?: ((props: {}) => any) | undefined;
} & {
    startHeader?: ((props: {}) => any) | undefined;
} & {
    start?: ((props: {}) => any) | undefined;
} & {
    startFooter?: ((props: {}) => any) | undefined;
} & {
    header?: ((props: {}) => any) | undefined;
} & {
    default?: ((props: {}) => any) | undefined;
} & {
    footer?: ((props: {}) => any) | undefined;
};
