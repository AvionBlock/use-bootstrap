declare var __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    decoration: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    boxWidth: {
        type: StringConstructor;
        default: string;
    };
    boxHeight: {
        type: StringConstructor;
        default: string;
    };
    boxBorderColor: {
        type: StringConstructor;
        default: string;
    };
    contentMarginX: {
        type: StringConstructor;
        default: string;
    };
    contentMarginTop: {
        type: StringConstructor;
        default: string;
    };
    boxBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    boxBorderStyle: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    decoration: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    boxWidth: {
        type: StringConstructor;
        default: string;
    };
    boxHeight: {
        type: StringConstructor;
        default: string;
    };
    boxBorderColor: {
        type: StringConstructor;
        default: string;
    };
    contentMarginX: {
        type: StringConstructor;
        default: string;
    };
    contentMarginTop: {
        type: StringConstructor;
        default: string;
    };
    boxBorderWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    boxBorderStyle: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    decoration: string | unknown[];
    boxWidth: string;
    boxHeight: string;
    boxBorderColor: string;
    contentMarginX: string;
    contentMarginTop: string;
    boxBorderWidth: string | number;
    boxBorderStyle: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
