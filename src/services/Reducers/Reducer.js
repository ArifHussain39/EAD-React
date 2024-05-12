
import cardItems from './Reducer';
const initialState = {
    card: []
}
export default function carDItems(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                card: action.payload
            }
        default:
            return state
    }
}