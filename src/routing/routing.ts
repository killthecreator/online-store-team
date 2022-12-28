import { locationHandler } from './locationHandler.js';

export const route = (event: Event, location: string) => {
    event.preventDefault();
    //if (event.target === null) throw new Error(`Event target is null`);
    locationHandler(location);
};
