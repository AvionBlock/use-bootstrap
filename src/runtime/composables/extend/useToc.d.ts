export interface TocItem {
    id: string;
    content: string | null;
    items: TocItem[];
    level: number;
}
export declare function useToc(contentSelector: string): {
    shown: import("vue").Ref<boolean, boolean>;
    tocs: import("vue").Ref<{
        id: string;
        content: string | null;
        items: /*elided*/ any[];
        level: number;
    }[], TocItem[] | {
        id: string;
        content: string | null;
        items: /*elided*/ any[];
        level: number;
    }[]>;
};
