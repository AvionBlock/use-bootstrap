declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    url: StringConstructor;
    title: StringConstructor;
    description: StringConstructor;
    image: StringConstructor;
    twitter: {
        type: BooleanConstructor;
        default: boolean;
    };
    openGraph: {
        type: BooleanConstructor;
        default: boolean;
    };
    linkedData: {
        type: BooleanConstructor;
        default: boolean;
    };
    routeMeta: ObjectConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    url: StringConstructor;
    title: StringConstructor;
    description: StringConstructor;
    image: StringConstructor;
    twitter: {
        type: BooleanConstructor;
        default: boolean;
    };
    openGraph: {
        type: BooleanConstructor;
        default: boolean;
    };
    linkedData: {
        type: BooleanConstructor;
        default: boolean;
    };
    routeMeta: ObjectConstructor;
}>> & Readonly<{}>, {
    twitter: boolean;
    openGraph: boolean;
    linkedData: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
