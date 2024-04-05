/** @typedef {typeof __propDef.props}  IcLSemiSyntheticProps */
/** @typedef {typeof __propDef.events}  IcLSemiSyntheticEvents */
/** @typedef {typeof __propDef.slots}  IcLSemiSyntheticSlots */
export default class IcLSemiSynthetic extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcLSemiSyntheticProps = typeof __propDef.props;
export type IcLSemiSyntheticEvents = typeof __propDef.events;
export type IcLSemiSyntheticSlots = typeof __propDef.slots;
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
