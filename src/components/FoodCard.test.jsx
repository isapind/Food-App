import { render, screen } from "@testing-library/react";
import FoodCard from "./FoodCard";

describe("FoodCard", () => {
  test("shows food name", () => {
    const givenData = {
      name: "given name",
      origin: "given origin",
      starRating: "given star rating",
      image: "given url",
    };
    render(<FoodCard food={givenData} />);
    const resultNameElement = screen.getByText("given name");
    expect(resultNameElement).toBeInTheDocument();
  });
  test("shows food origin", () => {
    const givenData = {
      name: "given name",
      origin: "given origin",
      starRating: "given star rating",
      image: "given url",
    };
    render(<FoodCard food={givenData} />);
    const resultOriginElement = screen.getByText("Origin: given origin");
    expect(resultOriginElement).toBeInTheDocument();
  });

  test("shows food rating", () => {
    const givenData = {
      name: "given name",
      origin: "given origin",
      starRating: "given star rating",
      image: "given url",
    };
    render(<FoodCard food={givenData} />);
    const resultRatingElement = screen.getByText(
      "Rating: given star rating/5 ⭐"
    );
    expect(resultRatingElement).toBeInTheDocument();
  });

  test("shows food image", () => {
    const givenData = {
      name: "given name",
      origin: "given origin",
      starRating: "given star rating",
      image: "given url",
    };
    render(<FoodCard food={givenData} />);
    const resultImageElement = screen.getByTestId("food-card-image");
    expect(resultImageElement).toBeInTheDocument();
  });
});
