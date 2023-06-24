import { Middleware } from "redux";
import { Pokemon } from "../models/pokemon.model";

export const logger: Middleware = store => next => action => {
    next(action);
};

export const featuring: Middleware = store => next => action => {
    const featured: Pokemon[] = [{ name: 'ann', url: ''}, ...action.payload];
    const updatedAction = {...action, payload: featured};
    next(updatedAction);
};