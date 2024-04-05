/** @typedef {typeof __propDef.props}  IcLEngineProps */
/** @typedef {typeof __propDef.events}  IcLEngineEvents */
/** @typedef {typeof __propDef.slots}  IcLEngineSlots */
export default class IcLEngine extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcLEngineProps = typeof __propDef.props;
export type IcLEngineEvents = typeof __propDef.events;
export type IcLEngineSlots = typeof __propDef.slots;
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
