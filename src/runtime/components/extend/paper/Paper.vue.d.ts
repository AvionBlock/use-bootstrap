import { type PropType } from '#imports';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"ledger " | "legal" | "letter" | "A3" | "A4" | "A5" | "JIS-B4" | "B4" | "JIS-B5" | "B5">;
        default: string;
    };
    pageBreak: {
        type: PropType<"auto" | "before" | "after">;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"ledger " | "legal" | "letter" | "A3" | "A4" | "A5" | "JIS-B4" | "B4" | "JIS-B5" | "B5">;
        default: string;
    };
    pageBreak: {
        type: PropType<"auto" | "before" | "after">;
        default: string;
    };
}>> & Readonly<{}>, {
    size: "ledger " | "legal" | "letter" | "A3" | "A4" | "A5" | "JIS-B4" | "B4" | "JIS-B5" | "B5";
    pageBreak: "auto" | "before" | "after";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
