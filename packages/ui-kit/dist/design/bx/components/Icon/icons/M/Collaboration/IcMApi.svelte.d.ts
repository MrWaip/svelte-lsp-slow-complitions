/** @typedef {typeof __propDef.props}  IcMApiProps */
/** @typedef {typeof __propDef.events}  IcMApiEvents */
/** @typedef {typeof __propDef.slots}  IcMApiSlots */
export default class IcMApi extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IcMApiProps = typeof __propDef.props;
export type IcMApiEvents = typeof __propDef.events;
export type IcMApiSlots = typeof __propDef.slots;
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
