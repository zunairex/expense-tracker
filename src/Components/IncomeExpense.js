import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalContext';
const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  const transAmount = transactions.map(transaction=>transaction.amount);
  const incomeArr = transAmount.filter((transaction)=>transaction > 0);
  const income = incomeArr.reduce((accumulator,item)=>(accumulator+=item),0).toFixed(2);
  const expenseArr = transAmount.filter(transaction=>transaction < 0);
  const expense = (expenseArr.reduce((accumulator,item)=>(accumulator+=item),0) * -1).toFixed(2);


    return (
        <div className="inc-exp-container">
        <div>
    <h4>Income</h4>
    <p className="money plus">{income}PKR</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">{expense}PKR</p>
        </div>
      </div>
    )
}

export default IncomeExpense
