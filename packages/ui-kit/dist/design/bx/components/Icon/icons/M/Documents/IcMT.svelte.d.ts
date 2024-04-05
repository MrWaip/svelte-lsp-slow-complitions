/** @typedef {typeof __propDef.props}  IcMtProps */
/** @typedef {typeof __propDef.events}  IcMtEvents */
/** @typedef {typeof __propDef.slots}  IcMtSlots */
export default class IcMt extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMtProps = typeof __propDef.props;
export type IcMtEvents = typeof __propDef.events;
export type IcMtSlots = typeof __propDef.slots;
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
