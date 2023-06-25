import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/component/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 10, category: "utilities" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "utilities" },
    { id: 5, description: "eee", amount: 10, category: "utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => id != expense.id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;
