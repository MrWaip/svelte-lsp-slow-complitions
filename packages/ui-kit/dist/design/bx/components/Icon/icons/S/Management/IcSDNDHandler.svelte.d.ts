/** @typedef {typeof __propDef.props}  IcSdndHandlerProps */
/** @typedef {typeof __propDef.events}  IcSdndHandlerEvents */
/** @typedef {typeof __propDef.slots}  IcSdndHandlerSlots */
export default class IcSdndHandler extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcSdndHandlerProps = typeof __propDef.props;
export type IcSdndHandlerEvents = typeof __propDef.events;
export type IcSdndHandlerSlots = typeof __propDef.slots;
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
