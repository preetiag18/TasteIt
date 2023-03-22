import renderer from "react-test-renderer";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

const pastaRecipeDetails = {
  name: "Pasta",
  author: "Preeti",
  countryFlagurl: "https://flagcdn.com/fi.svg",
  description: "tasty",
  image:
    "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-V2-bowl.jpg",
  instructions: "make at home",
  id: 1,
  ingredients: [
    {
      quantity: "1cup",
      ingredient: "peas",
    },
    {
      quantity: "2 cube",
      ingredient: "paneer",
    },
  ],
};

const server = setupServer(
  rest.get("http://localhost:3001/recipes", (req, res, ctx) => {
    return res(ctx.json([pastaRecipeDetails]));
  }),
  rest.get("http://localhost:3001/recipes/1", (req, res, ctx) => {
    return res(ctx.json(pastaRecipeDetails));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("loads and recipes are browsable", async () => {
    // ARRANGE
    render(<App />);

    await userEvent.click(screen.getByText("Browse recipes"));
    await waitFor(() => {
      expect(screen.getByText("Pasta")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("See more")).toBeInTheDocument();
    });
  });
});
