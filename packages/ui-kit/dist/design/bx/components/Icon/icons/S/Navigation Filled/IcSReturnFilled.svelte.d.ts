/** @typedef {typeof __propDef.props}  IcSReturnFilledProps */
/** @typedef {typeof __propDef.events}  IcSReturnFilledEvents */
/** @typedef {typeof __propDef.slots}  IcSReturnFilledSlots */
export default class IcSReturnFilled extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSReturnFilledProps = typeof __propDef.props;
export type IcSReturnFilledEvents = typeof __propDef.events;
export type IcSReturnFilledSlots = typeof __propDef.slots;
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
