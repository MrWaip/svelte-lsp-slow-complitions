/** @typedef {typeof __propDef.props}  IcSManProps */
/** @typedef {typeof __propDef.events}  IcSManEvents */
/** @typedef {typeof __propDef.slots}  IcSManSlots */
export default class IcSMan extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSManProps = typeof __propDef.props;
export type IcSManEvents = typeof __propDef.events;
export type IcSManSlots = typeof __propDef.slots;
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
