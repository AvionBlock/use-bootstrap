import './index.css.js';
import type { DatePickerModel } from 'v-calendar/dist/types/src/use/datePicker.js';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    stateSrc: {
        type: import("vue").PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: import("vue").PropType<DatePickerModel>;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: DatePickerModel | undefined) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stateSrc: {
        type: import("vue").PropType<import("../../../composables/view-state/useViewState.js").IViewStateResult>;
    };
    statePath: {
        type: StringConstructor;
    };
    validate: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: import("vue").PropType<DatePickerModel>;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePickerModel | undefined) => any) | undefined;
}>, {
    validate: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
