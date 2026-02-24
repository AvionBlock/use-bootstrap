declare const _default: (new <CustomProp extends boolean = false>(props: import("#app").NuxtLinkProps<CustomProp>) => InstanceType<import("vue").DefineSetupFnComponent<import("#app").NuxtLinkProps<CustomProp>, [], import("vue").SlotsType<{
    default?: ((props: CustomProp extends true ? {
        href: string;
        navigate: (e?: MouseEvent) => Promise<void>;
        prefetch: (nuxtApp?: import("#app").NuxtApp) => Promise<void>;
        route: (import("vue-router").RouteLocation & {
            href: string;
        }) | undefined;
        rel: string | null;
        target: "_blank" | "_parent" | "_self" | "_top" | (string & {}) | null;
        isExternal: boolean;
        isActive: false;
        isExactActive: false;
    } : {
        route: import("vue-router").RouteLocationResolvedGeneric;
        href: string;
        isActive: boolean;
        isExactActive: boolean;
        navigate: (e?: MouseEvent) => Promise<void | import("vue-router").NavigationFailure>;
    }) => import("vue").VNode[]) | undefined;
}>>>) & Record<string, any>;
export default _default;
