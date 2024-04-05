/** @typedef {typeof __propDef.props}  IcLSyntheticProps */
/** @typedef {typeof __propDef.events}  IcLSyntheticEvents */
/** @typedef {typeof __propDef.slots}  IcLSyntheticSlots */
export default class IcLSynthetic extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcLSyntheticProps = typeof __propDef.props;
export type IcLSyntheticEvents = typeof __propDef.events;
export type IcLSyntheticSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
