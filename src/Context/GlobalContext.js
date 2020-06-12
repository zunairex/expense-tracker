import React,{createContext,useReducer} from 'react';

const initialState = {
    transactions: [
       
    ]
}
export const GlobalContext = createContext(initialState);


const reducer = (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;

    }

}

export const ContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        }

        )

    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload : transaction
        })
    }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }
        }>
            {props.children}

        </GlobalContext.Provider>
    )
}