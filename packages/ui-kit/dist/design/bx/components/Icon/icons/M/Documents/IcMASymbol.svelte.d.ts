/** @typedef {typeof __propDef.props}  IcMaSymbolProps */
/** @typedef {typeof __propDef.events}  IcMaSymbolEvents */
/** @typedef {typeof __propDef.slots}  IcMaSymbolSlots */
export default class IcMaSymbol extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMaSymbolProps = typeof __propDef.props;
export type IcMaSymbolEvents = typeof __propDef.events;
export type IcMaSymbolSlots = typeof __propDef.slots;
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
