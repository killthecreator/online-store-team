import { locationHandler } from './locationHandler.js';

export const route = (e: Event, location: string) => {
    e.preventDefault();
    locationHandler(location);
};
