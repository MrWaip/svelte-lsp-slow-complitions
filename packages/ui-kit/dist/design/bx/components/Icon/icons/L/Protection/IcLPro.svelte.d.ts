/** @typedef {typeof __propDef.props}  IcLProProps */
/** @typedef {typeof __propDef.events}  IcLProEvents */
/** @typedef {typeof __propDef.slots}  IcLProSlots */
export default class IcLPro extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcLProProps = typeof __propDef.props;
export type IcLProEvents = typeof __propDef.events;
export type IcLProSlots = typeof __propDef.slots;
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
