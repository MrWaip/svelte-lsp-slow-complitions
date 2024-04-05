/** @typedef {typeof __propDef.props}  IcSAutoProps */
/** @typedef {typeof __propDef.events}  IcSAutoEvents */
/** @typedef {typeof __propDef.slots}  IcSAutoSlots */
export default class IcSAuto extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSAutoProps = typeof __propDef.props;
export type IcSAutoEvents = typeof __propDef.events;
export type IcSAutoSlots = typeof __propDef.slots;
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
