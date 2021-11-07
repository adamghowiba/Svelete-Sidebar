import { writable, derived } from "svelte/store";
import type { Writable } from 'svelte/store';

/* Types */
export interface SidebarType {
    hidden: boolean,
    collapsed?: boolean
}
export type sidebarType = 'hidden' | 'collapsed';

const defaultValues: SidebarType = {
    hidden: false,
    collapsed: false
}

/* Stores */
export const sidebarCollapsed: Writable<SidebarType> = writable(defaultValues);

/* Methods */
export const sidebarHidden = derived(sidebarCollapsed, ($sidebar) => {
    return $sidebar.hidden;
})
export const resetSidebar = () => {
    sidebarCollapsed.set(defaultValues);
}