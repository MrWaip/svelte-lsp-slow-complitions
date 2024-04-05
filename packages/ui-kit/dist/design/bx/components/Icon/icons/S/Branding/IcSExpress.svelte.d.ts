/** @typedef {typeof __propDef.props}  IcSExpressProps */
/** @typedef {typeof __propDef.events}  IcSExpressEvents */
/** @typedef {typeof __propDef.slots}  IcSExpressSlots */
export default class IcSExpress extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSExpressProps = typeof __propDef.props;
export type IcSExpressEvents = typeof __propDef.events;
export type IcSExpressSlots = typeof __propDef.slots;
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
