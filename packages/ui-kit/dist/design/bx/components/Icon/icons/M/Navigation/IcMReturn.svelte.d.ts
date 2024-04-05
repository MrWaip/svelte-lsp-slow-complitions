/** @typedef {typeof __propDef.props}  IcMReturnProps */
/** @typedef {typeof __propDef.events}  IcMReturnEvents */
/** @typedef {typeof __propDef.slots}  IcMReturnSlots */
export default class IcMReturn extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMReturnProps = typeof __propDef.props;
export type IcMReturnEvents = typeof __propDef.events;
export type IcMReturnSlots = typeof __propDef.slots;
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
