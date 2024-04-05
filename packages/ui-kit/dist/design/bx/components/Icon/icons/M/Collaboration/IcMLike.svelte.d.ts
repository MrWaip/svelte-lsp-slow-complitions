/** @typedef {typeof __propDef.props}  IcMLikeProps */
/** @typedef {typeof __propDef.events}  IcMLikeEvents */
/** @typedef {typeof __propDef.slots}  IcMLikeSlots */
export default class IcMLike extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMLikeProps = typeof __propDef.props;
export type IcMLikeEvents = typeof __propDef.events;
export type IcMLikeSlots = typeof __propDef.slots;
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
