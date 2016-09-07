//-------------------------------------------------------------------
// NAME REDUCER
//-------------------------------------------------------------------
export const names = (state = [], action) => {
    let index: number;
    switch (action.type) {
        case 'ADD_NAME_LIST':
            return action.payload;
        case 'ADD_NAME':
            return [...state, action.payload];
        default:
            return state;
    }
};
