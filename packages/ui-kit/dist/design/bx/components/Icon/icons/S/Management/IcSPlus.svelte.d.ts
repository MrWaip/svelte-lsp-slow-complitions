/** @typedef {typeof __propDef.props}  IcSPlusProps */
/** @typedef {typeof __propDef.events}  IcSPlusEvents */
/** @typedef {typeof __propDef.slots}  IcSPlusSlots */
export default class IcSPlus extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSPlusProps = typeof __propDef.props;
export type IcSPlusEvents = typeof __propDef.events;
export type IcSPlusSlots = typeof __propDef.slots;
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
