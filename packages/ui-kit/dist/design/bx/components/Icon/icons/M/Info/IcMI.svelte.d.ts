/** @typedef {typeof __propDef.props}  IcMiProps */
/** @typedef {typeof __propDef.events}  IcMiEvents */
/** @typedef {typeof __propDef.slots}  IcMiSlots */
export default class IcMi extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMiProps = typeof __propDef.props;
export type IcMiEvents = typeof __propDef.events;
export type IcMiSlots = typeof __propDef.slots;
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
