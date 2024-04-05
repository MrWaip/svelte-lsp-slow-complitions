/** @typedef {typeof __propDef.props}  IcMDocProps */
/** @typedef {typeof __propDef.events}  IcMDocEvents */
/** @typedef {typeof __propDef.slots}  IcMDocSlots */
export default class IcMDoc extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMDocProps = typeof __propDef.props;
export type IcMDocEvents = typeof __propDef.events;
export type IcMDocSlots = typeof __propDef.slots;
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
