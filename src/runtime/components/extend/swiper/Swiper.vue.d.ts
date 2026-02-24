import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/thumbs';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/hash-navigation';
import 'swiper/css/history';
import 'swiper/css/keyboard';
import 'swiper/css/manipulation';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import 'swiper/css/zoom';
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    navigation: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    pagination: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    thumbs: {
        type: ObjectConstructor[];
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical" | undefined>;
        default: undefined;
    };
    mousewheel: {
        type: BooleanConstructor[];
        default: undefined;
    };
    autoplay: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    effect: {
        type: StringConstructor[];
        default: undefined;
    };
    autoHeight: {
        type: BooleanConstructor[];
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    navigation: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    pagination: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    thumbs: {
        type: ObjectConstructor[];
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical" | undefined>;
        default: undefined;
    };
    mousewheel: {
        type: BooleanConstructor[];
        default: undefined;
    };
    autoplay: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    effect: {
        type: StringConstructor[];
        default: undefined;
    };
    autoHeight: {
        type: BooleanConstructor[];
        default: boolean;
    };
}>> & Readonly<{}>, {
    direction: any;
    effect: string;
    pagination: boolean | Record<string, any>;
    autoplay: boolean | Record<string, any>;
    mousewheel: boolean;
    navigation: boolean | Record<string, any>;
    thumbs: Record<string, any>;
    autoHeight: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
