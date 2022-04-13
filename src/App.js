import { useEffect, useState } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import { getFood } from "./utils/api";

function App() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getFood()
      .then((foodsFromAPI) => {
        setFood(foodsFromAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchTerm(search);

    const filteredFood = food.filter((item) => {
      const lowered = item.name.toLowerCase();
      return lowered.includes(search);
    });
    setFilteredFood(filteredFood);
  };

  return (
    <div className="App">
      <main>
        <form>
          <label htmlFor="search">Search for your favourite food: </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>

        <ul className="foodList--ul">
          {searchTerm.length > 0 ? (
            filteredFood.length === 0 ? (
              <p>Sorry, nothing matches that search</p>
            ) : (
              filteredFood.map((food) => {
                return <FoodCard food={food} key={food.id}></FoodCard>;
              })
            )
          ) : (
            food.map((food) => {
              return <FoodCard food={food} key={food.id}></FoodCard>;
            })
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
