import { locationHandler } from './locationHandler.js';

export const route = (event: Event, location: string) => {
    event.preventDefault();
    locationHandler(location);
};
