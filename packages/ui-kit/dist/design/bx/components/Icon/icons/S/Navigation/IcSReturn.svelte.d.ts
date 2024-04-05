/** @typedef {typeof __propDef.props}  IcSReturnProps */
/** @typedef {typeof __propDef.events}  IcSReturnEvents */
/** @typedef {typeof __propDef.slots}  IcSReturnSlots */
export default class IcSReturn extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSReturnProps = typeof __propDef.props;
export type IcSReturnEvents = typeof __propDef.events;
export type IcSReturnSlots = typeof __propDef.slots;
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
