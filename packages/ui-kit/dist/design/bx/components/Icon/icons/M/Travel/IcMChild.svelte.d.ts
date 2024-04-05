/** @typedef {typeof __propDef.props}  IcMChildProps */
/** @typedef {typeof __propDef.events}  IcMChildEvents */
/** @typedef {typeof __propDef.slots}  IcMChildSlots */
export default class IcMChild extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMChildProps = typeof __propDef.props;
export type IcMChildEvents = typeof __propDef.events;
export type IcMChildSlots = typeof __propDef.slots;
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
