import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Hero from "../Hero";
import { BrowserRouter } from "react-router-dom";

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
