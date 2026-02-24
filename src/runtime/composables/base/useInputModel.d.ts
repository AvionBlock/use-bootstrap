import type { Ref } from 'vue';
export declare const InputModelProps: {
    modelValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: undefined;
    };
    trueValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    falseValue: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    value: {
        type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
    };
};
export interface IInputModelProps {
    modelValue?: string | boolean | number | object;
    trueValue?: string | boolean | number | object;
    falseValue?: string | boolean | number | object;
    value?: string | boolean | number | object;
}
export declare const InputModelEmits: string[];
export declare function useInputModel<P extends IInputModelProps>(props: P, emit: (event: string, ...args: unknown[]) => void, elementRef: Ref<HTMLElement | undefined>): {
    event: {
        onInput: (event: Event) => void;
    };
};
