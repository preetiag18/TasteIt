import { searchItem } from "../Recipes";

describe("Fetch items matching name", () => {
  it("should return paneer and pasta when searched with text 'pa'", () => {
    expect(
      searchItem(
        [
          { name: "idly sambhar" },
          { name: "paneer" },
          { name: "bread" },
          { name: "pasta" },
        ],
        "pa"
      )
    ).toStrictEqual([{ name: "paneer" }, { name: "pasta" }]);
  });
  it("should return paneer when searched with text 'pan'", () => {
    expect(
      searchItem(
        [
          { name: "idly sambhar" },
          { name: "paneer" },
          { name: "bread" },
          { name: "pasta" },
        ],
        "pan"
      )
    ).toStrictEqual([{ name: "paneer" }]);
  });
  it("should return empty array when searched with text 'naan'", () => {
    expect(
      searchItem(
        [
          { name: "idly sambhar" },
          { name: "paneer" },
          { name: "bread" },
          { name: "pasta" },
        ],
        "naan"
      )
    ).toStrictEqual([]);
  });
  it("should return empty array when searched with text 'naan' on a empty list", () => {
    expect(searchItem([], "naan")).toStrictEqual([]);
  });
});
