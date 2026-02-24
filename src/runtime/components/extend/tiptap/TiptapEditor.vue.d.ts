import { type JSONContent } from '@tiptap/vue-3';
import { type PropType } from '#imports';
interface ICommand {
    name: string;
}
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    command: {
        type: PropType<ICommand>;
    };
    stateSrc: {
        type: PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: PropType<JSONContent[]>;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: JSONContent[] | undefined) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    command: {
        type: PropType<ICommand>;
    };
    stateSrc: {
        type: PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: PropType<JSONContent[]>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: JSONContent[] | undefined) => any) | undefined;
}>, {
    validate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
