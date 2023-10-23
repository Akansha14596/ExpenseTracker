import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Electricity bill",
      amount: "5k",
      date: new Date(2023, 10, 10),
    },
    {
      id: "e2",
      title: "Car insurance",
      amount: "10k",
      date: new Date(2023, 9, 6),
    },
    {
      id: "e3",
      title: "Home loan",
      amount: "5000k",
      date: new Date(2022, 7, 5),
    },
  ];

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
