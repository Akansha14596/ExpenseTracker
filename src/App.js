import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses";

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
      amount: "50k",
      date: new Date(2022, 7, 5),
    },
  ];

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
