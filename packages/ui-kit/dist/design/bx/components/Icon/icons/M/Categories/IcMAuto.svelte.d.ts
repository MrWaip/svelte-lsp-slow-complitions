/** @typedef {typeof __propDef.props}  IcMAutoProps */
/** @typedef {typeof __propDef.events}  IcMAutoEvents */
/** @typedef {typeof __propDef.slots}  IcMAutoSlots */
export default class IcMAuto extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMAutoProps = typeof __propDef.props;
export type IcMAutoEvents = typeof __propDef.events;
export type IcMAutoSlots = typeof __propDef.slots;
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
