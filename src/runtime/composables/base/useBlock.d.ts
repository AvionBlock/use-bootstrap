import { type IInlineProps } from './useInline.js';
export interface IBlockProps extends IInlineProps {
    shadow?: string | boolean;
    textAlignment?: string | unknown[];
    textWrap?: string;
    textBreak?: boolean;
    textBackground?: string;
    alignSelf?: string;
    alignItems?: string;
    alignContent?: string;
    flex?: boolean | string | unknown[];
    flexDirection?: string | unknown[];
    flexFill?: boolean | string;
    flexGrow?: string;
    flexShrink?: string;
    flexOrder?: string | number;
    flexWrap?: string;
    float?: string;
    ratio?: string | number | boolean;
    fixed?: string;
    sticky?: string;
    clearfix?: boolean;
    overflow?: string | unknown[];
    tableResponsive?: string;
    justifyContent?: string | boolean;
    vstack?: boolean;
    hstack?: boolean;
    align?: string | boolean;
    order?: number | string;
    offset?: number | boolean | string | unknown[];
    objectFit?: string;
    z?: string | number | boolean;
    theme?: string;
}
export declare function useBlock<P extends IBlockProps>(props: P): {
    class: import("vue").ComputedRef<{
        vstack: boolean | undefined;
        hstack: boolean | undefined;
        ratio: string | number | boolean | undefined;
        clearfix: boolean | undefined;
        'text-break': boolean | undefined;
        "link-underline": boolean | "" | 0 | undefined;
        initialism: boolean | undefined;
        'focus-ring': boolean | undefined;
        border: boolean | "" | 0 | undefined;
        col: boolean | "" | 0 | undefined;
        visible: boolean | undefined;
        invisible: boolean | undefined;
        "bg-gradient": boolean | undefined;
        'mw-100': boolean | undefined;
        'mh-100': boolean | undefined;
        'vw-100': boolean | undefined;
        'vh-100': boolean | undefined;
        'min-vw-100': boolean | undefined;
        'min-vh-100': boolean | undefined;
        'font-monospace': boolean | undefined;
        'text-reset': boolean | undefined;
        'text-truncate': boolean | undefined;
        lead: boolean | undefined;
        mark: boolean | undefined;
        small: boolean | undefined;
    }>;
    style: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
    attr: import("vue").ComputedRef<{
        [x: string]: string | undefined;
    }>;
};
