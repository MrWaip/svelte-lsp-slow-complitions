/** @typedef {typeof __propDef.props}  IcLAssembledProps */
/** @typedef {typeof __propDef.events}  IcLAssembledEvents */
/** @typedef {typeof __propDef.slots}  IcLAssembledSlots */
export default class IcLAssembled extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcLAssembledProps = typeof __propDef.props;
export type IcLAssembledEvents = typeof __propDef.events;
export type IcLAssembledSlots = typeof __propDef.slots;
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
