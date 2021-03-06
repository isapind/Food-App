import { useEffect, useState } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import { getFood } from "./utils/api";
import { validSearch } from "./utils/util";

function App() {
  const [food, setFood] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getFood()
      .then((foodsFromAPI) => {
        setFood(foodsFromAPI);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <main>
        {isLoading ? (
          <div className="loader--div">
            <div className="loader"></div>
          </div>
        ) : (
          <>
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
              {food
                .filter(
                  (item) =>
                    validSearch(item.name, searchTerm) |
                    validSearch(item.origin, searchTerm)
                )
                .map((item) => {
                  return <FoodCard key={item.id} food={item} />;
                })}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
