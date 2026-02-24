export interface IComponent {
    component: string;
    items?: IComponent[];
    attrs?: Record<string, unknown>;
    text?: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    component: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<IComponent[]>;
    };
    attrs: {
        type: PropType<Record<string, unknown>>;
    };
    text: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    component: {
        type: StringConstructor;
        required: true;
    };
    items: {
        type: PropType<IComponent[]>;
    };
    attrs: {
        type: PropType<Record<string, unknown>>;
    };
    text: {
        type: StringConstructor;
    };
}>> & Readonly<{}>, {
    attrs: any;
    items: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
