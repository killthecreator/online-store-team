import { locationHandler } from './locationHandler.js';

export const route = (event: Event, location: string) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    if (event.target === null) throw new Error(`Event target is null`);
    //const targetElement = event.target as HTMLDivElement;
    window.history.pushState({}, '', location);
    console.log(window.history);
    locationHandler(location);
};
