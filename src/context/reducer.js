export const initialState = {
    cart: [],
    user: null,
    profile: null,
    products: [],
    categories: ["phones", "Laptops"]
}

export const getCartTotal = (cart) =>
cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
        
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }

        case 'EMPTY_BASKET':
            return {
                ...state,
                cart: []
            }
            case 'REMOVE_FROM_CART':
                let newCart = [...state.cart]

                const index = state.cart.findIndex(
                    item => item.id === action.payload
                )

                if(index >= 0)
                newCart.splice(index, 1)
                else
                console.warn(`can't remove product as ID ${action.payload} is not available`)

                return {
                    ...state,
                    cart: newCart
                }

        case 'ADD_TO_PRODUCTS':
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            case 'SET_PROFILE':
                return {
                    ...state,
                    profile: action.userName
                }
            default:
                return state
    }
}

export default reducer