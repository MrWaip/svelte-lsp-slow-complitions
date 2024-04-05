/** @typedef {typeof __propDef.props}  IcSChildProps */
/** @typedef {typeof __propDef.events}  IcSChildEvents */
/** @typedef {typeof __propDef.slots}  IcSChildSlots */
export default class IcSChild extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSChildProps = typeof __propDef.props;
export type IcSChildEvents = typeof __propDef.events;
export type IcSChildSlots = typeof __propDef.slots;
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
