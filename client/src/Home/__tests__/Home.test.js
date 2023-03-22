import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
