declare var __VLS_5: {
    key: string;
    data: unknown;
    status: number;
    update: (value: unknown) => void;
    set: (key: string, value: unknown) => void;
    reload: ((force?: boolean) => Promise<void>) | undefined;
    syncResult: unknown;
    syncStatus: number | undefined;
    validate: () => void;
    validationResult: import("../../composables/view-state/useViewState.js").IViewStateValidateResult;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        requird: boolean;
    };
    path: {
        type: (StringConstructor | NumberConstructor)[];
    };
    schemaSrc: {
        type: StringConstructor;
    };
    data: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor | ObjectConstructor)[];
        requird: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        requird: boolean;
    };
    path: {
        type: (StringConstructor | NumberConstructor)[];
    };
    schemaSrc: {
        type: StringConstructor;
    };
    data: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor | ObjectConstructor)[];
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
