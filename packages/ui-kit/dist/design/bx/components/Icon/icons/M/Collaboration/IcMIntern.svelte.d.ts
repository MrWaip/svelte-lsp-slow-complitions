/** @typedef {typeof __propDef.props}  IcMInternProps */
/** @typedef {typeof __propDef.events}  IcMInternEvents */
/** @typedef {typeof __propDef.slots}  IcMInternSlots */
export default class IcMIntern extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMInternProps = typeof __propDef.props;
export type IcMInternEvents = typeof __propDef.events;
export type IcMInternSlots = typeof __propDef.slots;
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
