import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/component/ExpenseList";
import ExpenseFilter from "./expense-tracker/component/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 10, category: "utilities" },
    { id: 3, description: "ccc", amount: 10, category: "utilities" },
    { id: 4, description: "ddd", amount: 10, category: "utilities" },
    { id: 5, description: "eee", amount: 10, category: "utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => id != expense.id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;
