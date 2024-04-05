/** @typedef {typeof __propDef.props}  IcMManProps */
/** @typedef {typeof __propDef.events}  IcMManEvents */
/** @typedef {typeof __propDef.slots}  IcMManSlots */
export default class IcMMan extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMManProps = typeof __propDef.props;
export type IcMManEvents = typeof __propDef.events;
export type IcMManSlots = typeof __propDef.slots;
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
