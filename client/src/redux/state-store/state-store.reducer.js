import StateStoreActionTypes from './state-store.types';

const INITIAL_STATE = {
    loading:true,
    allArtworks: {},
    categories: [],
    currentCategory:{},   
    error:'',
};

export const stateStoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case StateStoreActionTypes.RESET_STORE: 
            return {
                ...state
            };
            default:
                return state
    };
    

}

export default stateStoreReducer