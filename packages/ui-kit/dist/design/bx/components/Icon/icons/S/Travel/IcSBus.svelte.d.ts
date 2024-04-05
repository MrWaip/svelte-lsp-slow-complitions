/** @typedef {typeof __propDef.props}  IcSBusProps */
/** @typedef {typeof __propDef.events}  IcSBusEvents */
/** @typedef {typeof __propDef.slots}  IcSBusSlots */
export default class IcSBus extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSBusProps = typeof __propDef.props;
export type IcSBusEvents = typeof __propDef.events;
export type IcSBusSlots = typeof __propDef.slots;
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
