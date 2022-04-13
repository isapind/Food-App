function FoodCard({ food }) {
  return (
    <li className="foodCard--li">
      <h2>{food.name}</h2>
      <p> Origin: {food.origin}</p>
      <p> Rating: {food.starRating}/5 ⭐</p>
      <img
        className="foodCard--img"
        src={food.image}
        alt={food.name}
        data-testid="food-card-image"
      />
    </li>
  );
}

export default FoodCard;
