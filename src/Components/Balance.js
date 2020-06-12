import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalContext';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const balanceArr = transactions.map((transaction)=>transaction.amount);
    const balance = balanceArr.reduce((accumulator,item)=>(accumulator+=item),0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
    <h1>{balance}PKR</h1>
        </div>
    )
}

export default Balance;
