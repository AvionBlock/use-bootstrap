declare var __VLS_1: {
    data: unknown[] | undefined;
    pager: {};
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor[];
    };
    filter: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    pageSize: {
        type: NumberConstructor;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
    };
    sort: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    group: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    aggregate: {
        type: (StringConstructor | ObjectConstructor)[];
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor[];
    };
    filter: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    pageSize: {
        type: NumberConstructor;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
    };
    sort: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    group: {
        type: (StringConstructor | ObjectConstructor)[];
    };
    aggregate: {
        type: (StringConstructor | ObjectConstructor)[];
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
