/** @typedef {typeof __propDef.props}  IcSApiFilledProps */
/** @typedef {typeof __propDef.events}  IcSApiFilledEvents */
/** @typedef {typeof __propDef.slots}  IcSApiFilledSlots */
export default class IcSApiFilled extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSApiFilledProps = typeof __propDef.props;
export type IcSApiFilledEvents = typeof __propDef.events;
export type IcSApiFilledSlots = typeof __propDef.slots;
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
