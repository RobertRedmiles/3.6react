export const defaultProduct = {
    count: 1,
    discount: 0,
    name: 'Bananas',
    price: 2.99
  }
  
  export function productReducer(state, action) {
    switch (action.type) {
        case 'PLUS_COUNT': {
            let newState = { ...state }
            newState.count = state.count + 1;

            if (newState.count >= 5) {
                newState.discount = 20;
            
            }

            return newState;
        }

        case 'MINUS_COUNT': {
            let newState = { ...state }
            newState.count = state.count - 1

            if (newState.count < 5) {
                newState.discount = 0;
            }

            if (newState.count < 0) {
                newState.count = 0;
            }

            return newState;
        }

        case 'SET_PRICE': {
            return { ...state, price: action.price}
        }

        case 'SET_NAME': {
            let newState = { ...state }
            newState.name = action.name;

            return newState
        }

        default:
            throw Error('productReducer - unkown action', action)
    }
  }