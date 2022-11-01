import "./App.css";

import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [number, setNumber] = useState(0);
  const [drinksList, setDrinksList] = useState([]);
  //API =>  https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

  const callData = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
    );
    setDrinksList(response.data.drinks);
    // return data;
  };

  useEffect(() => {
    callData();
  }, []);

  console.log(drinksList, "this is data");

  const addOne = () => {
    setNumber(number + 1);
    console.log("Here", number);
  };

  useEffect(() => {
    console.log("I am useEffect!", number);
  }, [number]);

  return (
    <div>
      This is my App
      <button onClick={addOne}>Click me!</button>
      <div>
        {drinksList.map((drink) => {
          return <p key={drink.idDrink}>{drink.strDrink}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
