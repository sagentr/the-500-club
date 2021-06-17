// import react from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense.js/NewExpense";


function App() {
  const mockData = [
    {
      id: 1,
      date: new Date(2020, 7, 14),
      purchase_amount: "$65.65",
      reward_points: 3,
    },
    {
      id: 2,
      date: new Date(2020, 7, 14),
      purchase_amount: "$85.09",
      reward_points: 12,
    },
    {
      id: 3,
      date: new Date(2020, 7, 14),
      purchase_amount: "$47.93",
      reward_points: 51,
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses mockData={mockData}/>
    </div>
  );
}

export default App;
