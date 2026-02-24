import { type PropType } from '#imports';
interface IEventItem {
    name: string;
    event: unknown;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    raised: {
        type: PropType<IEventItem>;
        default: () => {
            name: string;
            event: string;
        };
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    raised: {
        type: PropType<IEventItem>;
        default: () => {
            name: string;
            event: string;
        };
    };
}>> & Readonly<{}>, {
    raised: IEventItem;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
