/** @typedef {typeof __propDef.props}  IcMNotSuitableProps */
/** @typedef {typeof __propDef.events}  IcMNotSuitableEvents */
/** @typedef {typeof __propDef.slots}  IcMNotSuitableSlots */
export default class IcMNotSuitable extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMNotSuitableProps = typeof __propDef.props;
export type IcMNotSuitableEvents = typeof __propDef.events;
export type IcMNotSuitableSlots = typeof __propDef.slots;
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
