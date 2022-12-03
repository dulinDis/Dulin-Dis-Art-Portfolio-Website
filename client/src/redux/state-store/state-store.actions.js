import StateStoreActionTypes from './state-store.types';

export const resetStore = () =>{
    return {
        type:StateStoreActionTypes.RESET_STORE
    }
}