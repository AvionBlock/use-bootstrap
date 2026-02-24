declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    clip: string | boolean;
    overlay: boolean;
    imgParallax: number;
    overlayColor: string;
    overlayAlpha: string;
    patternOpacity: number;
    patternParallax: number;
    imgSrc?: string | undefined;
    videoSrc?: string | undefined;
    imgOpacity?: string | number | undefined;
    patternSrc?: string | undefined;
    $props: {
        readonly clip?: string | boolean | undefined;
        readonly overlay?: boolean | undefined;
        readonly imgParallax?: number | undefined;
        readonly overlayColor?: string | undefined;
        readonly overlayAlpha?: string | undefined;
        readonly patternOpacity?: number | undefined;
        readonly patternParallax?: number | undefined;
        readonly imgSrc?: string | undefined;
        readonly videoSrc?: string | undefined;
        readonly imgOpacity?: string | number | undefined;
        readonly patternSrc?: string | undefined;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
} & {
    shape?: ((props: {}) => any) | undefined;
};
