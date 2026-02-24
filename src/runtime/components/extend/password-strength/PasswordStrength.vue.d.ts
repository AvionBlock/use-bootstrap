declare var __VLS_1: {
    feedback?: import("@zxcvbn-ts/core").FeedbackType | undefined;
    crackTimesSeconds?: import("@zxcvbn-ts/core").CrackTimesSeconds | undefined;
    crackTimesDisplay?: import("@zxcvbn-ts/core").CrackTimesDisplay | undefined;
    score?: import("@zxcvbn-ts/core").Score | undefined;
    password?: string | undefined;
    guesses?: number | undefined;
    guessesLog10?: number | undefined;
    sequence?: import("@zxcvbn-ts/core").MatchExtended[] | undefined;
    calcTime?: number | undefined;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    password: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    password: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
